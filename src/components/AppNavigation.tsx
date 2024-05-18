"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// config
import { AppNavigations } from "~/config/appNavigation.config";

// utils
import { cn } from "~/utils/cn";

export default function AppNavigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed left-0 w-[200px] h-full bg-card z-50">
      {/* logo */}
      <div className="flex items-center justify-center text-3xl font-bold my-20">
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
                  "w-full flex gap-3 items-center px-6 py-3 text-secondary text-sm font-semibold hover:bg-border/20 transition-colors",
                  {
                    "text-foreground border-solid border-r-4 border-accent":
                      isActive,
                  }
                )}
              >
                {nav.icon}
                <span>{nav.title}</span>
              </li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
}
