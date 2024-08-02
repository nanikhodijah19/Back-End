import Link from "next/link"
import { LiaPenAltSolid } from "react-icons/lia";

export const Posting = () => {
    return (
        <div>
            <button className="btn btn-info text-white w-full hidden md:block rounded-full mt-2">Posting</button>
            <Link href={'/'} className="rounded-full w-fit md:hidden p-3 md:pr-6 text-white cursor-pointer flex items-center gap-3 bg-blue-500">
                <LiaPenAltSolid className="text-[30px]" />
            </Link>
        </div>
    )
}