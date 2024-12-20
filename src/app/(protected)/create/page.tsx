'use client'

import { LoadingSpinner } from '@/components/loading-spinner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import UseRefetch from '@/hooks/use-refetch'
import { api } from '@/trpc/react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

type FormInput = {
    githubUrl: string
    projectName: string
    githubToken?: string
}

const CreatePage = () => {
    const { register, handleSubmit, reset } = useForm<FormInput>()
    const createProject = api.project.createProject.useMutation()
    const refetch = UseRefetch()

    function onSubmit(data: FormInput) {
        createProject.mutate(
            {
                githubUrl: data.githubUrl,
                name: data.projectName,
                githubToken: data.githubToken,
            },
            {
                onSuccess: () => {
                    toast.success('Project created successfully')
                    refetch()
                    reset()
                },
                onError: (error) => {
                    toast.error(`Error: ${error.message}`)
                },
            }
        )
        return true
    }
    return (
        <div className='flex h-full items-center justify-center gap-12'>
            <img src='/digital.png' className='h-72' />
            <div>
                <div>
                    <h1 className='text-2xl font-semibold'>Link your Github Repository</h1>
                    <p className='text-sm text-muted-foreground'>Enter the URL of your repository to link it to Dionysus</p>
                    <div className='h-4'></div>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input {...register('projectName', { required: true })} placeholder='Project Name' />
                            <div className='h-2'></div>
                            <Input {...register('githubUrl', { required: true })} placeholder='Github URL' />
                            <div className='h-2'></div>
                            <Input {...register('githubToken')} placeholder='Github Token (Optional)' />
                            <div className='h-4'></div>
                            <Button type='submit' disabled={createProject.isPending}>
                                {createProject.isPending && <LoadingSpinner />}  Create project
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatePage
