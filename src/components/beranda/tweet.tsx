'use client'
import { CiImageOn, CiLocationOn } from "react-icons/ci";
import { MdOutlineGifBox, MdOutlineInsertEmoticon } from "react-icons/md";
import { TbCalendarClock } from "react-icons/tb";
import { IconMenu } from "./icon";
import { Avatar } from "../Avatar";
import { CreateTweet } from "@/types/user";
import { ErrorMessage, Form, Formik, FormikProps } from "formik";
import { tweetSchema } from "@/libs/schema";
import { toast } from "react-toastify";
import { createTweet } from "@/libs/actions/tweet";
import { tagRevalidate } from "@/libs/actions/server";
import { useAppSelector } from "@/redux/hooks";

const initialValues: CreateTweet = {
    content: '',
};

export const FormTweet = () => {
    const user = useAppSelector((state) => state.user)
    const src = user.avatar || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"

    const onTweet = async (data: CreateTweet) => {
        try {
            const { result } = await createTweet(data)
            tagRevalidate("tweets")
            toast.info(result.msg)
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={tweetSchema}
            onSubmit={(values, action) => {
                onTweet(values)
                action.resetForm()
            }}
        >
            {
                ({ setFieldValue, values }: FormikProps<CreateTweet>) => {
                    return (
                        <Form className="flex p-4 border-[0.1px] border-b-gray-500 border-black">
                            <Avatar src={src} alt="avatar" />
                            <div className="w-full">
                                <textarea
                                    className="w-full min-h-24 p-3 text-white text-[20px] bg-transparent border-none focus:outline-none resize-none"
                                    placeholder="Apa yang sedang hangat dibicarakan?!"
                                    onChange={(e) => setFieldValue('content', e.target.value)}
                                    value={values.content}
                                />
                                <div className="flex items-center justify-between">
                                    <div className="flex">
                                        <IconMenu Icon={CiImageOn} />
                                        <IconMenu Icon={MdOutlineGifBox} />
                                        <IconMenu Icon={MdOutlineInsertEmoticon} />
                                        <IconMenu Icon={TbCalendarClock} />
                                        <IconMenu Icon={CiLocationOn} />
                                    </div>
                                    <button type="submit" className="btn btn-sm btn-info text-white text-[12px] md:block rounded-full">Posting</button>
                                </div>
                                <ErrorMessage name='content' component="div" className="text-blue-500 text-sm mt-1 ml-3" />
                            </div>
                        </Form>
                    )
                }
            }
        </Formik>
        
    )
}