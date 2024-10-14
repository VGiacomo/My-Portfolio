import React from "react";
import { FloatingDock } from "@/components/ui/FloatingDock";
import {
  IconBrandTypescript,
  IconBrandNextjs,
  //     IconBrandReact,
  //   IconBrandMongodb,
  //   IconBrandFirebase,
  IconSql,
  IconBrandReactNative,
  IconBrandNodejs,
  IconBrandTailwind,
} from "@tabler/icons-react";
import { SiDotnet } from "react-icons/si";

export function Stack() {
  const links = [
    {
      title: "Typescript",
      icon: (
        <IconBrandTypescript className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    // {
    //   title: "React",
    //   icon: (
    //     <IconBrandReact className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    //   ),
    //   href: "#",
    // },
    {
      title: "Next.js",
      icon: (
        <IconBrandNextjs className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Node.js",
      icon: (
        <IconBrandNodejs className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Tailwind CSS",
      icon: (
        <IconBrandTailwind className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: ".Net",
      icon: (
        <SiDotnet className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    // {
    //   title: "MongoDB",
    //   icon: (
    //     <IconBrandMongodb className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    //   ),
    //   href: "#",
    // },
    {
      title: "SQL",
      icon: (
        <IconSql className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    // {
    //   title: "Firebase",
    //   icon: (
    //     <IconBrandFirebase className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    //   ),
    //   href: "#",
    // },
    {
      title: "React Native",
      icon: (
        <IconBrandReactNative className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    // {
    //   title: "Expo",
    //   icon: (
    //     <SiExpo className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    //   ),
    //   href: "#",
    // },
  ];
  return (
    <div className="">
      <div className="text-center md:tracking-wider mb-2 text-sm md:text-lg lg:text-2xl">
        Here is the stack of technologies that I&apos;m most familiar with.
      </div>
      <span className="flex items-center justify-center w-full md:justify-end">
        <FloatingDock items={links} />
      </span>
    </div>
  );
}
