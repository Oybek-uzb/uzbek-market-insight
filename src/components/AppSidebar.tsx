import { 
  LayoutDashboard, 
  Factory, 
  Globe, 
  Send, 
  Package, 
  PackageOpen, 
  Upload, 
  FileUp, 
  MessageSquare 
} from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Boshqaruv paneli", url: "/", icon: LayoutDashboard },
  { title: "Mahalliy ishlab chiqaruvchilar", url: "/manufacturers", icon: Factory },
  { title: "Import davlatlari", url: "/import-countries", icon: Globe },
  { title: "Eksport davlatlari", url: "/export-countries", icon: Send },
  { title: "Import qilingan mahsulotlar", url: "/imported-products", icon: Package },
  { title: "Eksport qilingan mahsulotlar", url: "/exported-products", icon: PackageOpen },
];

const dataMenuItems = [
  { title: "Import ma'lumotlarni yuklash", url: "/import-upload", icon: Upload },
  { title: "Eksport ma'lumotlarni yuklash", url: "/export-upload", icon: FileUp },
];

const aiMenuItem = { title: "AI Yordamchi", url: "/ai-assistant", icon: MessageSquare };

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-sidebar-border">
      <SidebarHeader className="p-4 border-b border-sidebar-border">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-sidebar-primary-foreground rounded-lg flex items-center justify-center">
            <LayoutDashboard className="w-5 h-5 text-sidebar-background" />
          </div>
          <div>
            <h2 className="text-sm font-semibold text-sidebar-foreground">Bozor Tahlili</h2>
            <p className="text-xs text-sidebar-foreground/70">Raqobat Platformasi</p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/70">Tahlillar</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end
                      className={({ isActive }) =>
                        isActive 
                          ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium" 
                          : "hover:bg-sidebar-accent/50 text-sidebar-foreground"
                      }
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/70">Ma'lumotlar Boshqaruvi</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {dataMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url}
                      className={({ isActive }) =>
                        isActive 
                          ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium" 
                          : "hover:bg-sidebar-accent/50 text-sidebar-foreground"
                      }
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/70">Sun'iy Intelekt Asboblari</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink 
                    to={aiMenuItem.url}
                    className={({ isActive }) =>
                      isActive 
                        ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium" 
                        : "hover:bg-sidebar-accent/50 text-sidebar-foreground"
                    }
                  >
                    <aiMenuItem.icon className="w-4 h-4" />
                    <span>{aiMenuItem.title}</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
