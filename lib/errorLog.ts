import { Blobs } from '@netlify/blobs';

export interface ErrorLogEntry {
  id: string;
  timestamp: string;
  route: string;
  message: string;
  details?: string;
  requestBody?: any;
}

const STORE_NAME = 'error-logs';
const STORE_KEY = `${STORE_NAME}/log`;
const MAX_LOGS = 200;

const blobsClient = process.env.NETLIFY_SITE_ID && process.env.NETLIFY_AUTH_TOKEN
  ? new Blobs({
      authentication: { token: process.env.NETLIFY_AUTH_TOKEN },
      siteID: process.env.NETLIFY_SITE_ID,
    })
  : null;

async function getStoredLogs(): Promise<ErrorLogEntry[]> {
  if (!blobsClient) return [];
  const raw = await blobsClient.get(STORE_KEY, { type: 'json' }).catch(() => null);
  return Array.isArray(raw) ? raw : [];
}

/**
 * Logs an error to Netlify Blobs so failures are visible later instead of
 * vanishing in the user's browser. Never throws — logging failures should
 * never break the actual request.
 */
export async function logError(entry: Omit<ErrorLogEntry, 'id' | 'timestamp'>): Promise<void> {
  try {
    if (!blobsClient) return;
    const id = Date.now().toString() + '-' + Math.random().toString(36).slice(2, 8);
    const fullEntry: ErrorLogEntry = {
      id,
      timestamp: new Date().toISOString(),
      ...entry,
    };

    const existing = await getStoredLogs();
    const updated = [fullEntry, ...existing].slice(0, MAX_LOGS);
    await blobsClient.setJSON(STORE_KEY, updated);
  } catch (e) {
    // Swallow — logging must never break the primary request
    console.error('Failed to write error log:', e);
  }
}

export async function getErrorLogs(): Promise<ErrorLogEntry[]> {
  try {
    return await getStoredLogs();
  } catch (e) {
    console.error('Failed to read error logs:', e);
    return [];
  }
}

export async function clearErrorLogs(): Promise<void> {
  try {
    if (!blobsClient) return;
    await blobsClient.setJSON(STORE_KEY, []);
  } catch (e) {
    console.error('Failed to clear error logs:', e);
  }
}
