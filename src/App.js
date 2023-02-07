import React, { useState } from "react";
import "./index.css";
import Employee from "./components/Employee";
function App() {
  const [role, setRole] = useState("dev");
  const empData = [
    {
      name: "Anna",
      role: "React Developer",
      image:
        "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg",
    },
    {
      name: "Emily",
      role: "Dev",
      image:
        "https://images.pexels.com/photos/3201694/pexels-photo-3201694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Emma",
      role: "Senior Dev",
      image:
        "https://images.pexels.com/photos/1181642/pexels-photo-1181642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Abby",
      role: "Project Manager",
      image:
        "https://images.pexels.com/photos/4467687/pexels-photo-4467687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Casandra",
      role: "Tester",
      image:
        "https://images.pexels.com/photos/4474047/pexels-photo-4474047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  const employeeData = empData.map((emp, i) => {
    return (
      <Employee key={i} name={emp.name} image={emp.image} role={emp.role} />
    );
  });
  const ShowEmployees = true;
  const InputChangeHandler = (e) => {
    console.log(e.target.value);
    setRole(e.target.value);
  };
  return (
    <div className="App">
      {ShowEmployees ? (
        <div className="flex flex-wrap justify-center">
          {/* <input type="text" onChange={InputChangeHandler} /> */}
          {employeeData}
        </div>
      ) : (
        <p>You cannot see Employees</p>
      )}
    </div>
  );
}

export default App;
