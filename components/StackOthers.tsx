import React from "react";
import { FloatingDock } from "@/components/ui/FloatingDock";
import {
  //   IconBrandReact,
  IconBrandMongodb,
  IconBrandFirebase,
  IconBrandAngular,
  IconBrandAzure,
  IconBrandStorybook,
} from "@tabler/icons-react";
import { RiJavaLine } from "react-icons/ri";
import { SiExpo } from "react-icons/si";

export function StackOthers() {
  const links = [
    // {
    //   title: "React",
    //   icon: (
    //     <IconBrandReact className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    //   ),
    //   href: "#",
    // },
    {
      title: "Java",
      icon: (
        <RiJavaLine className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Azure",
      icon: (
        <IconBrandAzure className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Angular",
      icon: (
        <IconBrandAngular className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "MongoDB",
      icon: (
        <IconBrandMongodb className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Firebase",
      icon: (
        <IconBrandFirebase className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Expo",
      icon: (
        <SiExpo className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Storybook",
      icon: (
        <IconBrandStorybook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];
  return (
    <div className="">
      <div className="text-center md:tracking-wider mt-6 mb-2 text-sm md:text-lg lg:text-2xl">
        Other technologies I&apos;ve used before.
      </div>
      <span className="flex items-center justify-center w-full md:justify-end">
        <FloatingDock items={links} />
      </span>
    </div>
  );
}
