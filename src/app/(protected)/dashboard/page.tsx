'use client'

import CommitLog from '@/app/(protected)/dashboard/commit-log'
import UseProject from '@/hooks/use-project'
import { ExternalLink, Github } from 'lucide-react'
import Link from 'next/link'

const DashboardPage = () => {
    const { project } = UseProject()
    return (
        <div>
            <div className='flex flex-wrap items-center justify-between gap-y-4'>
                {/* github link */}
                <div className='flex w-fit gap-2 rounded-md bg-primary px-4 py-3'>
                    <Github className='size-5 text-white' />
                    <div className='ml-2'>
                        <p className='text-sm font-medium text-white'>
                            This project is linked to{' '}
                            <Link href={project?.githubUrl ?? ''} className='inline-flex items-center text-white/80 hover:underline'>
                                {project?.githubUrl}
                                <ExternalLink className='ml-1 size-4' />
                            </Link>
                        </p>
                    </div>
                </div>

                <div className='h-4'></div>

                <div className='flex items-center gap-4'>TeamMembers InviteButton ArchiveButton</div>
            </div>

            <div className='mt-4'>
                <div className='grid grid-cols-1 gap-4 sm:grid-cols-5'>AskQuestionCard MettingCard</div>
            </div>

            <div className='mt-8'></div>

            <CommitLog />
        </div>
    )
}

export default DashboardPage
