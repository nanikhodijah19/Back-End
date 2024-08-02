import Link from "next/link"
import React from "react"
import { IconType } from "react-icons"

interface PropsMenu {
    Icon: IconType;
    desc: string;
}
export const MenuBar: React.FC<PropsMenu> = ({ Icon, desc }) => {
    return (
        <Link href={'/beranda'} className="rounded-full w-fit p-3 md:pr-6 text-white cursor-pointer flex items-center gap-3 hover:bg-gray-800">
            <Icon className="text-[30px]" />
            <p className="font-bold hidden md:block">{desc}</p>
        </Link>
    )
}