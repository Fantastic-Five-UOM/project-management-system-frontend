import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Form.css";
import bgImg from "../assest/S.jpg";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    if (
      data.Email === "" ||
      data.Password === "" ||
      data.RePassword === "" ||
      data.Username === "" ||
      data.userLevel === ""
    ) {
      toast.error("Please input all the fields!");
    } else {
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.Email)) {
        toast.error("Invalid email address");
      } else {
        if (data.Password === data.RePassword) {
          toast.success("Registration success");
          console.log(data);
          navigate("/Requirment");
        } else {
          toast.error("Passwords are not matching");
        }
      }
    }
  };

  // console.log(watch('username'));

  return (
    <section>
      <div className="register">
        <div className="col-1">
          <h2>Register New User</h2>
          <span>register and enjoy the service</span>

          <form
            id="form"
            className="flex flex-col"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input type="text" {...register("Email")} placeholder="Email" />
            <input
              type="text"
              {...register("Username")}
              placeholder="Username"
            />
            <input
              type="text"
              {...register("userLevel")}
              placeholder="User level"
            />
            <input
              type="password"
              {...register("Password")}
              placeholder="Password"
            />
            <input
              type="password"
              {...register("RePassword")}
              placeholder="RePassword"
            />

            <button className="btn" style={{ margin: "auto", width: "100%" }}>
              Sign In
            </button>
            <a href="Register" className="card-link">
              Already registered
            </a>
            {/* <div>
              <Link to="./component/Reg">
                <button>Already Registered</button>
              </Link>
            </div> */}
          </form>
        </div>
        <div className="col-2">
          <img src={bgImg} alt="" />
        </div>
      </div>
    </section>
  );
}
