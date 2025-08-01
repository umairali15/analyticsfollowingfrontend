"use client"

import * as React from "react"
import {
  IconChartBar,
  IconDashboard,
  IconHelp,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
  IconTarget,
  IconCreditCard,
  IconCompass,
} from "@tabler/icons-react"
import Image from "next/image"
import { useTheme } from "next-themes"

import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "Brand Manager",
    email: "manager@brand.com",
    avatar: "/avatars/user.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: IconDashboard,
    },
    {
      title: "Discovery",
      url: "/discover",
      icon: IconCompass,
    },
    {
      title: "Creators",
      url: "/creators",
      icon: IconUsers,
    },
    {
      title: "Campaigns",
      url: "/campaigns",
      icon: IconTarget,
    },
  ],
  navSecondary: [
    {
      title: "Billing",
      url: "/billing",
      icon: IconCreditCard,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: IconSettings,
    },
    {
      title: "Help & Support",
      url: "#",
      icon: IconHelp,
    },
  ],
}

function ThemeLogo() {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  
  React.useEffect(() => {
    setMounted(true)
  }, [])
  
  if (!mounted) {
    return (
      <Image 
        src="/followinglogo.svg" 
        alt="Following Logo" 
        width={0} 
        height={0}
        sizes="(min-width: 640px) 75vw, 75vw"
        className="object-contain w-full h-auto max-w-full"
      />
    )
  }
  
  const isDark = resolvedTheme === 'dark' || theme === 'dark'
  const logoSrc = isDark ? "/Following Logo Dark Mode.svg" : "/followinglogo.svg"
  
  return (
    <Image 
      src={logoSrc}
      alt="Following Logo" 
      width={0} 
      height={0}
      sizes="(min-width: 640px) 75vw, 75vw"
      className="object-contain w-full h-auto max-w-full"
    />
  )
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader className="flex justify-center items-center py-2">
        <SidebarMenu className="w-full flex justify-center">
          <SidebarMenuItem className="w-full flex justify-center">
            <SidebarMenuButton
              asChild
              className="w-full flex justify-center data-[slot=sidebar-menu-button]:!p-8"
            >
              <a className="w-3/4 flex justify-center">
                <ThemeLogo />
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
