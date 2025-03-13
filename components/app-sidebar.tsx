import {
  FcComboChart,
  FcCurrencyExchange,
  FcMoneyTransfer,
  FcSalesPerformance,
  FcServices,
} from "react-icons/fc";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import Image from "next/image";

// Menu items.
const items = [
  {
    title: "Tableau de bord",
    url: "/home/dashboard",
    icon: FcComboChart,
  },
  {
    title: "Mes transactions",
    url: "#",
    icon: FcCurrencyExchange,
  },
  {
    title: "Mes revenus / dépenses",
    url: "#",
    icon: FcMoneyTransfer,
  },
  {
    title: "Mon épargne",
    url: "#",
    icon: FcSalesPerformance,
  },
  {
    title: "Paramètres",
    url: "#",
    icon: FcServices,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="bg-custom-green">
            <div className="flex items-center w-full h-full overflow-hidden">
              <Image
                src="/logo-2-color.svg"
                width={250}
                height={250}
                alt="flow-cash-logo"
              />
            </div>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
