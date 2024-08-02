import { FaEllipsisH } from "react-icons/fa";
import { Avatar } from "../Avatar";
import { UserState } from "@/types/user";

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  user: UserState
}

export const AvatarSideBar: React.FC<AvatarProps> = (props) => {
  const src = props.user.avatar || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
  return (
    <div 
      {...props}
      className={`flex text-white gap-3 items-center rounded-full cursor-pointer bg-transparent hover:bg-gray-800 p-2 md:mr-8 mb-4 ${props.className}`}
    >
      <Avatar src={src} alt={props.user.username} />
      <div className="hidden md:block">
        <p>{props.user.username}</p>
        <p className="text-[14px]">{props.user.email}</p>
      </div>
      <FaEllipsisH className="text-white text-[16px] hidden md:block" />
    </div>
  );
};
