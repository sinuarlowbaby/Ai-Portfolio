"use client"

import { useEffect, useState } from "react"
import { getSkills } from "@/services/api"

export default function SkillsPage() {
  const [skills, setSkills] = useState<any>({})

  useEffect(() => {
    getSkills().then(setSkills)
  }, [])

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Skills</h1>

      <pre>{JSON.stringify(skills, null, 2)}</pre>
    </div>
  )
}
