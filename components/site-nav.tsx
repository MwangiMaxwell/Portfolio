"use client";

import { Home, Briefcase, BookOpen } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";

const navItems = [
  { name: "Me", url: "/", icon: Home },
  { name: "Works", url: "/works", icon: Briefcase },
  { name: "Blog", url: "/blog", icon: BookOpen },
];

export function SiteNav() {
  return <NavBar items={navItems} />;
}
