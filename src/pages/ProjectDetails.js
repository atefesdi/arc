import React from "react";
import { useParams } from "react-router-dom";
import SideBar from "../components/SideBar";

const ProjectDetails = () => {
  let { id } = useParams();

  return (
    <SideBar>
      <div className="w-full flex justify-center items-center flex-col ">
        <div className="w-[80%] bg-white flex flex-col justify-center items-center p-10 rounded-md">
          <div className=" flex flex-col child:text-right w-[90%]  child-input:bg-slate-100 child-input:rounded-sm child-input:h-[30px] child-input:mb-3 child-input:mt-1 child-input:outline-none ">
            <label htmlFor="id">id</label>
            <input type="text" id="id" name="project-id" defaultValue={id} />
            <label htmlFor="pname">اسم پروژه</label>
            <input type="text" id="pname" name="project-name" />
            <label htmlFor="city">شهر</label>
            <input type="text" id="city" name="project-city" />
            <label htmlFor="province">استان</label>
            <input type="text" id="province" name="project-province" />
            <label htmlFor="state">وضعیت</label>
            <input type="text" id="state" name="project-state" />
          </div>
          <div className="flex flex-row  child:bg-blue-600 child:w-[150px] child:text-white child:h-[40px] child:m-5 child-hover:opacity-70">
            <button>ذخیره</button>
            <button>انصراف</button>
          </div>
        </div>
      </div>
    </SideBar>
  );
};

export default ProjectDetails;
