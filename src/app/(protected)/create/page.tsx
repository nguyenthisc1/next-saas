'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import UseRefetch from "@/hooks/use-refetch"
import { api } from "@/trpc/react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

type FormInput = {
    repoUrl: string
    projectName: string
    githubToken?: string
}

const CreatePage = () => {
    const { register, handleSubmit, reset } = useForm<FormInput>()
    const createProject = api.project.createProject.useMutation()
    const refetch = UseRefetch()

    function onSubmit(data: FormInput) {
        createProject.mutate({
            githubUrl: data.repoUrl,
            name: data.projectName,
            githubToken: data.githubToken
        }, {
            onSuccess: () => {
                toast.success('Project created successfully')
                refetch()
                reset()
            },
            onError: (error) => {
                toast.error(`Error: ${error.message}`)
            }
        })
        return true
    }
    return (
        <div className="flex items-center gap-12 h-full justify-center">
            <img src="/digital.png" className="h-72" />
            <div>
                <div>
                    <h1 className="font-semibold text-2xl">
                        Link your Github Repository
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        Enter the URL of your repository to link it to Dionysus
                    </p>
                    <div className="h-4"></div>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input {...register('projectName', { required: true })} placeholder="Project Name" />
                            <div className="h-2"></div>
                            <Input {...register('repoUrl', { required: true })} placeholder="Github URL" />
                            <div className="h-2"></div>
                            <Input {...register('githubToken', { required: true })} placeholder="Github Token (Optional)" />
                            <div className="h-4"></div>
                            <Button type="submit" disabled={createProject.isPending}>
                                Create project
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatePage
