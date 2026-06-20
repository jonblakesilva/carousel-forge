import { getStore } from '@netlify/blobs';

export interface ErrorLogEntry {
  id: string;
  timestamp: string;
  route: string;
  message: string;
  details?: string;
  requestBody?: any;
}

const STORE_NAME = 'error-logs';
const MAX_LOGS = 200;

/**
 * Logs an error to Netlify Blobs so failures are visible later instead of
 * vanishing in the user's browser. Never throws — logging failures should
 * never break the actual request.
 */
export async function logError(entry: Omit<ErrorLogEntry, 'id' | 'timestamp'>): Promise<void> {
  try {
    const store = getStore(STORE_NAME);
    const id = Date.now().toString() + '-' + Math.random().toString(36).slice(2, 8);
    const fullEntry: ErrorLogEntry = {
      id,
      timestamp: new Date().toISOString(),
      ...entry,
    };

    const existingRaw = await store.get('log', { type: 'json' }).catch(() => null);
    const existing: ErrorLogEntry[] = Array.isArray(existingRaw) ? existingRaw : [];

    const updated = [fullEntry, ...existing].slice(0, MAX_LOGS);
    await store.setJSON('log', updated);
  } catch (e) {
    // Swallow — logging must never break the primary request
    console.error('Failed to write error log:', e);
  }
}

export async function getErrorLogs(): Promise<ErrorLogEntry[]> {
  try {
    const store = getStore(STORE_NAME);
    const raw = await store.get('log', { type: 'json' }).catch(() => null);
    return Array.isArray(raw) ? raw : [];
  } catch (e) {
    console.error('Failed to read error logs:', e);
    return [];
  }
}

export async function clearErrorLogs(): Promise<void> {
  try {
    const store = getStore(STORE_NAME);
    await store.setJSON('log', []);
  } catch (e) {
    console.error('Failed to clear error logs:', e);
  }
}
