interface ProjectInterface {
    title: string,
    description: string,
    languages: { name: string, color: string }[],
}
const Project = (props: ProjectInterface) => (
  <div className="border border-gray-600 rounded border-solid border-opacity-75 py-4 px-2 grid grid-cols-1 gap-1">
    <div className="text-blue-700 font-semibold">{props.title}</div>
    <div className="text-gray-500 text-xs">{props.description}</div>
    <div className="p-1 text-gray-700 text-sm">
        {props.languages.map((language) => (
          <div><span style={{color: `${language.color}`}}>●</span>{language.name} {language.size_percentage}</div>
        ))}
    </div>
  </div>
)
export default Project
