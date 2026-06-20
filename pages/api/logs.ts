import type { NextApiRequest, NextApiResponse } from 'next';
import { getErrorLogs, clearErrorLogs } from '../../lib/errorLog';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const logs = await getErrorLogs();
    return res.status(200).json({ logs });
  }

  if (req.method === 'DELETE') {
    await clearErrorLogs();
    return res.status(200).json({ cleared: true });
  }

  res.status(405).json({ error: 'Method not allowed' });
}
