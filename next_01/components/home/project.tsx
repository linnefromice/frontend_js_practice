interface ProjectInterface {
    title: string,
    description: string,
    language: string,
}
const Project = (props: ProjectInterface) => (
  <div className="border border-gray-600 rounded border-solid border-opacity-75 py-4 px-2 grid grid-cols-1 gap-1">
    <div className="text-blue-700 font-semibold">{props.title}</div>
    <div className="text-gray-500 text-xs">{props.description}</div>
    <div className="text-sm">
      <span className="text-gray-500">●</span>
      <span className="text-gray-500 mx-1">{props.language}</span>
    </div>
  </div>
)
export default Project
