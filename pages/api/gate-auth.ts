import type { NextApiRequest, NextApiResponse } from 'next';

const GATE_COOKIE = 'cf_gate_auth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { password } = req.body || {};
  const expected = process.env.APP_GATE_PASSWORD;

  if (!expected) {
    // No password configured server-side -- treat as open
    return res.status(200).json({ ok: true });
  }

  if (password !== expected) {
    return res.status(401).json({ ok: false, error: 'Incorrect password' });
  }

  // Set a long-lived cookie holding the password value itself (compared directly
  // in middleware). Internal tool, low-stakes secret, simplest possible approach.
  res.setHeader(
    'Set-Cookie',
    `${GATE_COOKIE}=${encodeURIComponent(expected)}; Path=/; Max-Age=${60 * 60 * 24 * 90}; HttpOnly; SameSite=Lax; Secure`
  );
  res.status(200).json({ ok: true });
}
