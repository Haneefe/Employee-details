import React from "react";

const Employee = (props) => {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.role ? props.role : "No Role  "}</p>
    </div>
  );
};

export default Employee;
