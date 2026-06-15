import type { NextApiRequest, NextApiResponse } from 'next';

// GHL platform ID mapping — what GHL's social API expects
const PLATFORM_MAP: Record<string, string> = {
  facebook:  'facebook',
  instagram: 'instagram',
  linkedin:  'linkedin',
  twitter:   'twitter',
  tiktok:    'tiktok',
  gmb:       'google',
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const {
    caption,
    scheduledAt,
    locationId,
    platforms = ['facebook'],
  }: {
    caption: string;
    scheduledAt: string | null;
    locationId: string;
    platforms: string[];
  } = req.body;

  // Private integration token — sub-account level
  const token = process.env.GHL_API_KEY || '';
  if (!token) {
    return res.status(500).json({
      error: 'GHL_API_KEY not set in environment variables.',
      fix: 'Go to Netlify → Environment Variables → add GHL_API_KEY with your Private Integration Token',
    });
  }
  if (!locationId) return res.status(400).json({ error: 'Location ID required' });
  if (!caption) return res.status(400).json({ error: 'Caption required' });

  // Map platform names to GHL account IDs
  // For private integration tokens, platforms need to be connected in GHL first
  // We pass the platform names and GHL resolves to the connected accounts
  const mappedPlatforms = platforms.map(p => PLATFORM_MAP[p] || p);

  const payload = {
    locationId,
    content: caption,
    status: scheduledAt ? 'scheduled' : 'draft',
    scheduledAt: scheduledAt || undefined,
    // socialAccounts pulled from the connected accounts in GHL for this location
    // GHL will match to connected accounts by platform type
    type: 'post',
  };

  try {
    // GHL Social Media Posting API v2
    // Private integration tokens use Authorization: Bearer {token}
    // Version header required
    const response = await fetch(
      'https://services.leadconnectorhq.com/social-media-posting/posts',
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Version': '2021-07-28',
        },
        body: JSON.stringify(payload),
      }
    );

    let data: any = {};
    try { data = await response.json(); } catch {}

    if (!response.ok) {
      // Surface the actual GHL error message
      const msg = data?.message || data?.error || data?.msg || `HTTP ${response.status}`;
      console.error('GHL API error:', response.status, data);
      return res.status(response.status).json({
        error: `GHL returned: ${msg}`,
        status: response.status,
        details: data,
      });
    }

    return res.status(200).json({
      success: true,
      postId: data.id || data.post?.id,
      ghlStatus: data.status,
      message: scheduledAt
        ? `✓ Scheduled in GHL for ${new Date(scheduledAt).toLocaleString()}`
        : '✓ Draft saved to GHL Social Planner',
      note: 'Open GHL Social Planner → find this draft → attach your downloaded PNG slides as media.',
    });

  } catch (error) {
    console.error('GHL push error:', error);
    return res.status(500).json({
      error: 'Failed to reach GoHighLevel API',
      details: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}
