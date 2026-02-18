"use client"

import { useState } from "react"
import { askAI } from "@/services/api"

export default function ChatBox() {
  const [question, setQuestion] = useState("")
  const [messages, setMessages] = useState<string[]>([])

  const handleSend = async () => {
    const res = await askAI(question)
    setMessages([...messages, `You: ${question}`, `AI: ${res.answer}`])
    setQuestion("")
  }

  return (
    <div className="bg-gray-900 p-6 rounded-xl">
      <div className="h-64 overflow-y-auto mb-4 space-y-2">
        {messages.map((msg, i) => (
          <div key={i} className="text-gray-300">{msg}</div>
        ))}
      </div>

      <div className="flex space-x-2">
        <input
          value={question}
          onChange={e => setQuestion(e.target.value)}
          className="flex-1 bg-black border border-gray-700 p-2 rounded"
          placeholder="Ask something..."
        />

        <button
          onClick={handleSend}
          className="bg-white text-black px-4 rounded"
        >
          Send
        </button>
      </div>
    </div>
  )
}
