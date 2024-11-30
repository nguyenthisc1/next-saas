'use client'

import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'
import { cn } from '@/lib/utils'
import { Bot, CreditCard, LayoutDashboardIcon, Presentation } from 'lucide-react'
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
        url: '/aq',
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

    return (
        <Sidebar collapsible='icon' variant='floating'>
            <SidebarHeader>Logo</SidebarHeader>

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
            </SidebarContent>
        </Sidebar>
    )
}

export default AppSidebar