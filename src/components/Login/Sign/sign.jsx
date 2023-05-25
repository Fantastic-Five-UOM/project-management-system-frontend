import React from 'react'
import bgImg from '../assest/S.jpg';
import { useForm } from 'react-hook-form';
import "./Form.css";
import { toast } from "react-toastify";
import {useNavigate} from "react-router-dom"


export default function Form() {

    const navigate = useNavigate();


     const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
    console.log(data);


        if ( data.Password === "" || data.Username === "" ) {
            toast.error("Please input all the fields!");
        } else {
      
            toast.success("Successful");
            navigate("/Requirment");
        
        }
    

    console.log(watch('username'));
    }

    // const reqPage = () => {
    //     navigate('Requirment');
    // }
    
  return (
    <section>
        <div className="register">
            <div className="col-1">
                <h2>Sign In</h2>
                <span>register and enjoy the service</span>

                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("Username")} placeholder='username' />
                    <input type="password" {...register("Password")} placeholder='password' />
                 
                    <button className='btn'>Sign In</button>
             
                    
                </form>

            </div>
            <div className="col-2">
                <img src={bgImg} alt="" />
            </div>
        </div>
    </section>
  )
}


