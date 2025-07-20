import { startSupabaseMCP } from '@supabase/mcp-server-supabase';

export default async function handler(req, res) {
  try {
    await startSupabaseMCP({
      req,
      res,
      readOnly: true, // prevents writes unless you need them
      projectRef: process.env.SUPABASE_PROJECT_REF,
      accessToken: process.env.SUPABASE_ACCESS_TOKEN,
    });
  } catch (err) {
    console.error('MCP Server Error:', err);
    res.status(500).json({ error: 'Internal MCP Server Error' });
  }
}
