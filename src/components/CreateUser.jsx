import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, ButtonGroup, Checkbox } from "@nextui-org/react";

export default function CreateUser() {

    // ------- using useForm React Hook
    const {
        register,       // to attrack changes of form inputs
        handleSubmit,   // onSubmit event handler
        // add validators
    } = useForm();

    const create = (user) => {
        console.log(user);
    }

    return (
        <>
            <h2>Create User Form</h2>
            <form onSubmit={handleSubmit(create)}>
                <label>
                    <span>Email:</span>
                    <input {...register("email")} type="email" />
                </label>
                <label>
                    <span>Password:</span>
                    <input {...register("password")} type="text" />
                </label>
                <label>
                    <span>Remember?</span>
                    {/* <input {...register("isRemember")} type="checkbox" /> */}
                    <Checkbox {...register("isRemember")} defaultSelected></Checkbox>
                </label>
                <div>
                    <Button color="primary" type='submit'>
                        Button
                    </Button>
                </div>
            </form>
        </>
    )
}
