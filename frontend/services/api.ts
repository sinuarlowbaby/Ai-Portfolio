const API_URL = process.env.NEXT_PUBLIC_API_URL

export async function getProjects() {
  const res = await fetch(`${API_URL}/projects/`)
  return res.json()
}

export async function createContact(data: any) {
  const res = await fetch(`${API_URL}/contact/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
  return res.json()
}

export async function getSkills() {
  const res = await fetch(`${API_URL}/skills/`)
  return res.json()
}

export async function askAI(question: string) {
  const res = await fetch(`${API_URL}/ai/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question })
  })
  return res.json()
}
