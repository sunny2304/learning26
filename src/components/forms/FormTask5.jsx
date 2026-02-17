import React from 'react'
import { useForm } from 'react-hook-form'

export const FormTask5 = () => {
    const {register,handleSubmit,formState:{errors}}=useForm()
    console.log("errors...",errors);
    
    const submitHandler=(data)=>{
        alert("form submitted successfully")
        console.log(data);
        
    }
    const ValidationSchema={
        ageValidator:{
            required:{
                value:true,
                message:"Age is required*"
            },
            min:{
            value:18,
            message:"min age should be  18"
        },
        max:{
            value:10,
            message:"max age should be 10"
        }
        },
        addValidator:{
            required:{
                value:true,
                message:"address is required"
            },
            minLength:{
                value:5,
                message:"min 5 char required"
            },
            maxLength:{
                value:20,
                message:"max 20 char required"
            }
        },
        contactValidator:{
            required:{
                value:true,
                message:"contact is required**"
            },
            pattern:{
                value:/[6-9]{1}[0-9]{9}$/,
                message:"invalid contact"
            }
        },
        promocodeValidator:{
            required:{
                value:true,
                message:"promocode is required"
            },
            validate:(params)=>{
                return params==2026||"invalid promocode*"
            }
        },
        hobbiesValidator:{
            required:{
                value:true,
                message:"hobbies are required*"
            },
            validate:(params)=>{
                return params?.length>=2||"min 2 hobbies are required"
            }
        }
        
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>FORM DEMO 3</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <label>NAME:</label>
            <input type='text'{...register("name",{required:{value:true,message:"Name is required*"}})}></input>
            {errors.name && errors.name.message}
            <div>
                <label>AGE:
                    <input type='text'{...register("age",ValidationSchema.ageValidator)}></input>
                    {errors.age && errors.age.message}
                </label>
            </div>
            <div>
                <label>ADDRESS</label>
                <input type='text'{...register("add",ValidationSchema.addValidator)}></input>
                {errors.add?.message}
            </div>
            <div>
                <label>CONTACT
                    <input type='text'{...register("contact",ValidationSchema.contactValidator)}></input>
                    {errors.contact?.message}
                </label>
            </div>
            <div>
                <label>PROMOCODE:</label>
                <input type='text'{...register("promocode",ValidationSchema.promocodeValidator)}></input>
                {errors.promocode?.message}
            </div>
            <div>
                <label>HOBBIES:</label><br></br>
                DANCING:<input type='checkbox' value="dancing"{...register("hobbies",ValidationSchema.hobbiesValidator)}></input><br></br>
                TRAVELLING:<input type='checkbox' value="travelling"{...register("hobbies",ValidationSchema.hobbiesValidator)}></input><br></br>
                REELS:<input type='checkbox' value="reels"{...register("hobbies",ValidationSchema.hobbiesValidator)}></input>
                
            </div>
            {errors.hobbies?.message}
            <div>
            <input type="submit" />
        </div>
        </form>
        
    </div>
  )
}