import { useState } from 'react'

export default function Submit() {
  const [form, setForm] = useState({
    title: '',
    date: '',
    location: '',
    organiser: '',
    link: '',
    description: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch('/api/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, approved: false, source: 'User' }),
    })
    alert(res.ok ? 'Submitted!' : 'Error submitting!')
  }

  return (
    <form onSubmit={handleSubmit} style={{ padding: 20 }}>
      <input name="title" placeholder="Title" onChange={handleChange} required /><br />
      <input name="date" type="date" onChange={handleChange} required /><br />
      <input name="location" placeholder="Location" onChange={handleChange} /><br />
      <input name="organiser" placeholder="Organiser" onChange={handleChange} /><br />
      <input name="link" placeholder="Link" onChange={handleChange} /><br />
      <textarea name="description" placeholder="Description" onChange={handleChange} /><br />
      <button type="submit">Submit</button>
    </form>
  )
}