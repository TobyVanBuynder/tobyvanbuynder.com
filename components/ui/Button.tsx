"use client";
import React from "react";
import { cn } from "@/utils/cn";

export const Button = ({
    title, icon, position, handleClick, otherClasses
} : {
    title: string
    icon?: React.ReactNode
    position?: 'left' | 'right'
    handleClick?: () => void
    otherClasses?: string
}) => {
  return (
    <button
    className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] border dark:border-white border-black focus:outline-none w-full md:w-60 md:mt-10"
    onClick={handleClick}
    >
        <span className={cn("inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3 py-1 text-sm font-medium dark:text-white backdrop-blur-3xl gap-2", otherClasses)}>
        {position === 'left' && icon}
        {title}
        {position === 'right' && icon}
        </span>
    </button>
  )
};
