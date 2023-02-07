import React, { useState } from "react";
import Button from "react-bootstrap/Button";
const EditEmployeeForm = (props) => {
  const [name, setName] = useState(props.name);
  const [role, setRole] = useState(props.role);

  const nameChangeHandler = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const roleChangeHandler = (e) => {
    console.log(e.target.value);
    setRole(e.target.value);
  };

  const submitHandler = (e) => {
    console.log(e);
    props.updateEmployee(props.id, name, role);
  };
  return (
    <>
      <form className="w-full max-w-sm">
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="name"
            >
              Full Name
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="name"
              type="text"
              Value={name}
              onChange={nameChangeHandler}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="role"
            >
              Role
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="role"
              type="text"
              Value={role}
              onChange={roleChangeHandler}
            />
          </div>
        </div>

        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3"></div>
        </div>
      </form>
      <div className="flex flex-row justify-between ">
        <Button variant="primary" onClick={submitHandler} type="submit">
          Save Changes
        </Button>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
      </div>
    </>
  );
};

export default EditEmployeeForm;
