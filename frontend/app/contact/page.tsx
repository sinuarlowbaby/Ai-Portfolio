"use client"

import { useState } from "react"
import { createContact } from "@/services/api"

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleSubmit = async () => {
    await createContact(form)
    alert("Message sent")
  }

  return (
    <div className="p-10">
      <h1>Contact</h1>

      <input
        placeholder="Name"
        onChange={e => setForm({...form, name: e.target.value})}
      />

      <input
        placeholder="Email"
        onChange={e => setForm({...form, email: e.target.value})}
      />

      <textarea
        placeholder="Message"
        onChange={e => setForm({...form, message: e.target.value})}
      />

      <button onClick={handleSubmit}>
        Send
      </button>
    </div>
  )
}
