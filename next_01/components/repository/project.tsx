interface ProjectInterface {
    title: string,
    description: string,
    languages: { name: string, color: string, size_percentage: string }[]
    update_context: string,
}
const Project = (props: ProjectInterface) => (
  <div className="p-1 m-1">
    <div className="flex flex-row justify-between">
      <div className="p-1 text-xl text-blue-500 font-semibold">{props.title}</div>
      <div className="p-1 w-1/12 border border-solid border-gray-500 rounded-lg flex justify-between items-center">
        <div>★ Star</div>
      </div>
    </div>
    <div className="p-1 text-gray-700 text-sm">{props.description}</div>
    <div className="flex flex-row justify-between">
      <div className="p-1 text-gray-700 text-sm">
        {props.languages.map((language) => (
          <div><span style={{color: `${language.color}`}}>●</span> {language.name} {language.size_percentage}</div>
        ))}
      </div>
      <div className="p-1 text-gray-700 text-sm">{props.update_context}</div>
    </div>
  </div>

)
export default Project
