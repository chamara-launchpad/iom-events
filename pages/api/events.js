import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { error } = await supabase.from('events').insert([req.body])
  if (error) {
    return res.status(500).json({ error: error.message })
  }

  res.status(200).json({ message: 'Event submitted' })
}