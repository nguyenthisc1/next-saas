'use client'

import SidebarLayout from '@/app/(protected)/layout'
import { useUser } from '@clerk/nextjs'

const DashboardPage = () => {
    const { user } = useUser()
    return (
        <div>Dashboard</div>
    )
}

export default DashboardPage
