'use client'

import SidebarLayout from '@/app/(protected)/layout'
import { useUser } from '@clerk/nextjs'

const DashboardPage = () => {
    const { user } = useUser()
    return (
        <SidebarLayout>
            <div>{user?.firstName}</div>
        </SidebarLayout>
    )
}

export default DashboardPage
