import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
    firstName: string;
    lastName: string;
    age: number;
}

export default function App() {
    const { register, handleSubmit } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("firstName", { required: true, maxLength: 20 })} />
            <input {...register("lastName", { pattern: /^[0-9]+$/i, required: true })} />
            <input type="number" {...register("age", { min: 18, max: 99 })} />
            <input type="submit" />
        </form>
    );
}