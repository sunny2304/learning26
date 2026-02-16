import React from "react";
import { useForm } from "react-hook-form";


export const FormTask4 = () => {
    const { register, handleSubmit, watch, formState:{errors} } = useForm({ mode: "onSubmit" });

    const password = watch("password","");
    console.log(password)

    // validation 
    const hasCapital = /[A-Z]/.test(password);
    const hasSmall = /[a-z]/.test(password);
    const hasDigit = /[0-9]/.test(password);
    const hasSpecial = /[^A-Za-z0-9]/.test(password);
    const hasLength = password.length >= 8;

    var validationSchema = {
        passwordvalidation:{
            required:{
                value:"true",
                message:"password is required"
            }
        }
    }
    const submithandler = (data)=>{
        console.log(data)
    }

    return (
        <div style={{ textAlign: "center" }}>
            <br />
            <h1>Form Task 4</h1>
            <br />
            <br />
            <form onSubmit={handleSubmit(submithandler)}>
                <label htmlFor="password">Password : </label>
                <input
                    type="password"{...register("password",validationSchema.passwordvalidation)}
                />
                <br />
                <br />
                <input type="submit" />
                <br />
                <br />
                <p style={{color:"red",fontSize:"30px"}}>{errors.password?.message}</p>
            </form>

            <br /><br />

            <div>
                <p style={{ color: hasCapital ? "green" : "black",fontSize:"20px" }}>
                    1 character must be capital
                </p>

                <p style={{ color: hasSmall ? "green" : "black" ,fontSize:"20px"}}>
                    1 character must be small
                </p>

                <p style={{ color: hasSpecial ? "green" : "black",fontSize:"20px" }}>
                    1 character must be special character
                </p>

                <p style={{ color: hasDigit ? "green" : "black",fontSize:"20px" }}>
                    1 character must be digit
                </p>

                <p style={{ color: hasLength ? "green" : "black",fontSize:"20px" }}>
                    minimum should be 8 character
                </p>
            </div>
        </div>
    );
};
