'use client'

import { Button } from '@/components/ui/button'
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from '@/components/ui/sidebar'
import UseProject from '@/hooks/use-project'
import { cn } from '@/lib/utils'
import { Bot, CreditCard, LayoutDashboardIcon, Plus, Presentation } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const items = [
    {
        title: 'Dashboard',
        url: '/dashboard',
        icon: LayoutDashboardIcon,
    },
    {
        title: 'Q&A',
        url: '/qa',
        icon: Bot,
    },
    {
        title: 'Mettings',
        url: '/mettings',
        icon: Presentation,
    },
    {
        title: 'Billing',
        url: '/billing',
        icon: CreditCard,
    },
]

const AppSidebar = () => {
    const pathname = usePathname()
    const { open, setOpen } = useSidebar()
    const { projects, projectId, setProjectId } = UseProject()
    return (
        <Sidebar collapsible='icon' variant='floating'>
            <SidebarHeader>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                        <h1 className='text-xl font-bold text-primary/80'>Thi</h1>
                    </div>
                    {/* 
                    <Button variant='outline' onClick={() => setOpen(!open)}>
                        <ChevronLeft />
                    </Button> */}
                </div>
            </SidebarHeader>

            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link
                                            href={item.url}
                                            className={cn({
                                                '!bg-primary !text-white': pathname === item.url,
                                            })}
                                        >
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel>Your Projects</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {projects?.map((project) => (
                                <SidebarMenuItem key={project.name}>
                                    <SidebarMenuButton asChild>
                                        <div onClick={() => setProjectId(project.id)} className='w-full cursor-pointer !p-0'>
                                            <div
                                                className={cn('flex size-8 shrink-0 items-center justify-center rounded-sm border bg-white text-sm text-primary', {
                                                    'bg-primary text-white': projectId === project.id,
                                                })}
                                            >
                                                {project.name[0]}
                                            </div>
                                            <span>{project.name}</span>
                                        </div>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}

                            <div className='h-2'></div>

                            {open && (
                                <SidebarMenuItem>
                                    <Link href='/create'>
                                        <Button variant='outline'>
                                            <Plus />
                                            Create Project
                                        </Button>
                                    </Link>
                                </SidebarMenuItem>
                            )}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}

export default AppSidebar
