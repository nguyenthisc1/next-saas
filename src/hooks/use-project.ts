import { api } from '@/trpc/react'
import { Project } from '@prisma/client'
import { useLocalStorage } from 'usehooks-ts'

const UseProject = () => {
    const { data: projects } = api.project.getProjects.useQuery()
    const [projectId, setProjectId] = useLocalStorage<string>('dionysus-project', '')
    const project = projects?.find((project) => project.id === projectId)
    return {
        projects,
        project,
        projectId,
        setProjectId,
    }
}

export default UseProject
