import { BottomNavigationItemProps } from "@/types";
const navigationItems = [
  {
    label: "ホーム",
    href: "/",
    icon: "home",
  },
  {
    label: "記録",
    href: "/record",
    icon: "plus",
  },
  {
    label: "お世話",
    href: "/care",
    icon: "calendar",
  },
  {
    label: "履歴",
    href: "/history",
    icon: "history",
  },
  {
    label: "設定",
    href: "/settings",
    icon: "settings",
  },
] as const;

function BottomNavigationItems({
  item,
}: BottomNavigationItemProps) {
  return (
    <a href={item.href}>
      <span>{item.icon}</span>
      <span>{item.label}</span>
    </a>
  );
}

export function BottomNavigation(){
   return (
    <nav>
      {navigationItems.map((item) => (
        <BottomNavigationItems
          key={item.href}
          item={item}
        />
      ))}
    </nav>
  );
}
