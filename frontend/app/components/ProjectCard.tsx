type Props = {
  title: string
  description: string
  tech: string
}

export default function ProjectCard({ title, description, tech }: Props) {
  return (
    <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-white transition duration-300">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mt-3 text-gray-400">{description}</p>
      <p className="mt-4 text-sm text-gray-500">{tech}</p>
    </div>
  )
}
