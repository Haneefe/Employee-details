import React from "react";
import EditEmployee from "./EditEmployee";
const Employee = (props) => {
  //   props.updateEmployee({ id: 1, newName: "haneef", newRole: "web3 dev" });

  return (
    <div className=" min-w-[350px] max-w=[350px] m-2 py-8 px-8 max-w-sm  bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      <img
        className="object-cover rounded-full h-[100px] w-[100px] block mx-auto h-24 w-30 rounded-full sm:mx-0 sm:shrink-0"
        src={props.image}
        alt="Woman's Face"
      />
      <div className="text-center space-y-2 sm:text-left">
        <div ClassName="space-y-0.5">
          <p className="text-lg text-black font-semibold">{props.name}</p>
          <p className="text-slate-500 font-medium">
            {props.role ? props.role : "No Role"}
          </p>
        </div>
        <EditEmployee
          name={props.name}
          role={props.role}
          updateEmployee={props.updateEmployee}
        />
      </div>
    </div>
  );
};

export default Employee;
