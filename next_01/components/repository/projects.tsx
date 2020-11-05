import { useQuery, gql } from '@apollo/client'
import * as dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import Project from './project'

const QUERY = gql`
    query {
        viewer {
        repositories(last: 100, isFork: false, orderBy: {field: CREATED_AT, direction: DESC}) {
            edges {
            node {
                url
                name
                description
                updatedAt
                languages(last: 10, orderBy: {field: SIZE, direction: DESC}) {
                edges {
                    node {
                    name
                    color
                    }
                    size
                }
                totalSize
                }  
            }
            }
        }
        }
    }
`
interface ProjectsInterface {
    search_text: string,
}
const Projects: React.FC<ProjectsInterface> = ({search_text}) => {
    dayjs.extend(relativeTime)
    const { loading, error, data } = useQuery(QUERY)
    if (loading) return <div>Loading...</div>
    if (error) return <div>Error!!</div>
    const filteredEdges = (search_text === '')
        ? data.viewer.repositories.edges
        : data.viewer.repositories.edges.filter(edge => edge.node.name.indexOf(search_text) != -1)

    return(
        <>
            <div className="divide-y divide-gray-300">
                <div className="my-2 flex flex-row">
                    <div className="w-5/6 p-1 flex flex-row items-center">
                    <div>
                        <span className="font-semibold">{filteredEdges.length}</span>
                        <span className="text-gray-700 text-sm"> results for repositories matching </span>
                        <span>{search_text}</span>
                    </div>
                    </div>
                    <div className="w-1/6 p-1 flex flex-row justify-center items-center">
                    <div className="mx-1 px-2 bg-gray-700 border rounded-lg border-solid text-white text-lg">×</div>
                    <div className="mx-1 text-gray-700">Clear filter</div>
                    </div>
                </div>
                <div>
                    <div className="divide-y divide-gray-300">
                        {filteredEdges.map((edge, index) => {
                        const languages = edge.node.languages.edges.map((item) => (
                            {
                            name: item.node.name,
                            color: item.node.color,
                            size_percentage: (Math.floor(item.size / edge.node.languages.totalSize * Math.pow( 10, 2 ))).toString() + "%"
                            }
                        ))
                        return (
                            <Project
                            key={`repository-project.${index}`}
                            title={edge.node.name}
                            description={edge.node.description}
                            languages={languages}
                            update_context={dayjs().fromNow()}
                            />
                        )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Projects
