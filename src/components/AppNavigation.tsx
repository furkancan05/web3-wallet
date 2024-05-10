"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// components
import Icon from "~/components/shared/Icon";

// config
import { AppNavigations } from "~/config/appNavigation.config";

// utils
import { cn } from "~/utils/cn";

export default function AppNavigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed left-0 w-[200px] h-full bg-card">
      {/* logo */}
      <div className="flex items-center justify-center text-3xl font-bold my-10">
        LOGO
      </div>

      {/* navigation */}
      <ul className="flex flex-col gap-2">
        {AppNavigations.map((nav) => {
          const isActive = pathname.includes(nav.path);

          return (
            <Link key={nav.title} href={nav.path} className="">
              <li
                className={cn(
                  "w-full flex gap-3 items-center px-4 py-3 text-secondary hover:bg-border/20 transition-colors",
                  {
                    "text-foreground border-solid border-r-4 border-accent":
                      isActive,
                  }
                )}
              >
                <Icon
                  icon={nav.icon}
                  className={cn("w-5 h-5 text-secondary", {
                    "text-foreground": isActive,
                  })}
                />
                <span>{nav.title}</span>
              </li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
}
