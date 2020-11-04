interface ProjectInterface {
    title: string,
    description: string,
    languages: { name: string, color: string }[],
}
const Project: React.FC<ProjectInterface> = ({title, description, languages}) => (
  <div className="border border-gray-600 rounded border-solid border-opacity-75 py-4 px-2 grid grid-cols-1 gap-1">
    <div className="text-blue-700 font-semibold">{title}</div>
    <div className="text-gray-500 text-xs">{description}</div>
    <div className="p-1 text-gray-700 text-sm">
        {languages.map((language) => (
          <div><span style={{color: `${language.color}`}}>●</span> <span className="text-xs">{language.name}</span></div>
        ))}
    </div>
  </div>
)
export default Project
