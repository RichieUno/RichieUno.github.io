import * as React from "react";
import { User, Wrench, LibraryBig } from "lucide-react";

import { DarkModeToggleButton } from "@/components/mode-toggle";
import { NavMain } from "@/components/nav-main";
import { Separator } from "@/components/ui/separator";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenuButton,
    SidebarRail,
    SidebarTrigger,
} from "@/components/ui/sidebar";

const navMain = [
    {
        title: "About Me",
        url: "/",
        icon: User,
    },
    {
        title: "Projects",
        url: "/projects",
        icon: Wrench,
    },
    {
        title: "Publications",
        url: "/publications",
        icon: LibraryBig,
    },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <SidebarMenuButton
                    tooltip="Toggle Sidebar"
                    className="w-8 h-8 cursor-pointer"
                    asChild
                >
                    <SidebarTrigger />
                </SidebarMenuButton>

                <div className="flex flex-col w-full items-center justify-center gap-2 -mt-2 mb-3 group-data-[collapsible=icon]:mb-0">
                    <span className="text-sm font-semibold group-data-[collapsible=icon]:hidden">
                        Richard Kuhlmann
                    </span>
                </div>

                <Separator orientation="horizontal" />
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={navMain} />
            </SidebarContent>
            <SidebarFooter>
                <DarkModeToggleButton />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}
