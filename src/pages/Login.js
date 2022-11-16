import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate= useNavigate()

  const submitHandler =(e)=>{
    e.preventDefault();
    localStorage.setItem("login-key" , 1)

    navigate("/project-list")
  }

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <form onSubmit={submitHandler} className="flex flex-col justify-center  p-10 rounded-md child-input:bg-slate-100 child-input:h-[30px] child-input:rounded-md child-input:outline-none child-input:my-2 child-label:text-right 
      md:w-[30%] w-[50%]  bg-white border" >

        <label htmlFor="name">ایمیل</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="password">پسورد</label>
        <input type="text" id="password" name="password" />
        <button type="submit" className="my-[30px] w-[130px] h-[35px] rounded-md  bg-blue-600 text-white m-auto">ورود</button>
        <p className="m-auto"><a href="#" >اگر ثبت نام نکردید اینجا را کلیک کنید</a></p>
      </form>
    </div>
  );
};

export default Login;
