import { Field, ErrorMessage } from "formik";
import React from "react";

interface InputProps {
    name: string;
    type: React.HTMLInputTypeAttribute;
    placeholder?: string;
}

export const Input: React.FC<InputProps> = ({ name, type, placeholder }) => {
    return (
        <div>
            <Field
                type={type}
                placeholder={placeholder}
                name={name}
                autoComplete="off"
                className="input input-lg w-full bg-transparent border border-gray-500 focus:border-blue-500" 
            />
            <ErrorMessage name={name} component="div" className="text-red-500 text-sm mt-1" />
        </div>
    );
};
