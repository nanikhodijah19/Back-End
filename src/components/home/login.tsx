'use client'
import { useState } from "react";
import Modal from "../Modal";
import { UserLogin } from "@/types/user";
import { Form, Formik, FormikHelpers } from "formik";
import { loginSchema } from "@/libs/schema";
import { Input } from "../Input";
import { loginUser } from "@/libs/actions/user";
import { toast } from "react-toastify";
import { createCookie, navigate } from "@/libs/actions/server";
import { useAppDispatch } from "@/redux/hooks";
import { loginAction } from "@/redux/slice/userSlice";

const initialValues: UserLogin = {
    data: '',
    password: ''
};

export const LoginModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useAppDispatch()

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const onLogin = async (data: UserLogin, action: FormikHelpers<UserLogin>) => {
        try {
            const { result, ok } = await loginUser(data)
            if (!ok) throw result.msg
            createCookie("token", result.token)
            dispatch(loginAction(result.user))
            toast.info(result.msg)
            action.resetForm()
            navigate('/beranda')
        } catch (err) {
            toast.error(err as string)
            console.log(err);
        }
    }
    return (
        <div>
            <button onClick={openModal} className="bg-transparent text-blue-400 border border-gray-500 hover:bg-blue-950 py-2 px-8 w-[300px] font-bold rounded-full flex justify-center gap-3">
                Masuk
            </button>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={loginSchema}
                    onSubmit={(values, action) => {
                        // console.log(values);
                        onLogin(values, action)
                    }}
                >
                    {
                        () => {
                            return (
                                <Form className="h-full flex flex-col justify-between">
                                    <div className="flex flex-col gap-4">
                                        <h1 className="text-2xl font-bold">Masuk ke X</h1>
                                        <Input name="data" type="text" placeholder="Username or Email" />
                                        <Input name="password" type="password" placeholder="Password" />
                                    </div>
                                    <button type="submit" className="bg-gray-100 btn w-full text-lg font-bold rounded-full flex justify-center gap-3">
                                        Masuk
                                    </button>
                                </Form>
                            )
                        }
                    }
                </Formik>
            </Modal>
        </div>
    )
}