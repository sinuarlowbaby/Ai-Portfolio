"use client"

import { useState } from "react"
import { askAI } from "@/services/api"

export default function AIPage() {
  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")

  const handleAsk = async () => {
    const res = await askAI(question)
    setAnswer(res.answer)
  }

  return (
    <div className="p-10">
      <h1>AI Chat</h1>

      <input
        value={question}
        onChange={e => setQuestion(e.target.value)}
        placeholder="Ask something..."
      />

      <button onClick={handleAsk}>
        Ask
      </button>

      <p>{answer}</p>
    </div>
  )
}
