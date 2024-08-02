import { IconType } from "react-icons"

export const IconMenu = ({ Icon }: { Icon: IconType }) => {
    return (
        <div className="p-2 hover:bg-gray-900 rounded-full">
            <Icon className="text-[22px] text-blue-500 cursor-pointer" />
        </div>
    )
}

interface IconOptionProps {
    Icon: IconType;
    color: 'blue' | 'green' | 'pink';
    count?: number
}

export const IconOption = ({ Icon, color, count = 0 }:IconOptionProps) => {
    const colors = {
        blue: 'hover:text-blue-500',
        green: 'hover:text-green-500',
        pink: 'hover:text-pink-500',
    };
    return (
        <div className={`flex my-2 items-center text-gray-500 ${colors[color]} font-bold cursor-pointer`}>
            <div className="p-2 rounded-full hover:bg-gray-600">
                <Icon className="text-[20px]" aria-label="icon-option" />
            </div>
            <p className="font-normal text-sm">{count}</p>
        </div>
    )
}