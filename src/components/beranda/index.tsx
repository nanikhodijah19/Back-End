import { ListTweet } from "./listTweet"
import { FormTweet } from "./tweet"

export const Beranda = () => {
    return (
        <div className="border-[0.1px] text-white border-x-gray-500 border-black min-h-screen">
            <div className="flex border-[0.1px] border-b-gray-500 border-black">
                <div className="flex-1 flex justify-center items-center h-[50px] hover:bg-gray-900 cursor-pointer">
                    <div className="border border-transparent border-b-2 border-b-blue-500 h-full flex items-center">Untuk Anda</div>
                </div>
                <div className="flex-1 flex justify-center items-center h-[50px] hover:bg-gray-900 cursor-pointer">Mengikuti</div>
            </div>
            <FormTweet />
            <ListTweet />
        </div>
    )
}