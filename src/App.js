import React, { useState } from "react";
import "./index.css";
import Employee from "./components/Employee";
import { v4 as uuidv4 } from "uuid";
function App(props) {
  const [role, setRole] = useState("dev");
  const empData = [
    {
      id: 1,
      name: "Anna",
      role: "React Developer",
      image:
        "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg",
    },
    {
      id: 2,
      name: "Emily",
      role: "Dev",
      image:
        "https://images.pexels.com/photos/3201694/pexels-photo-3201694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      name: "Emma",
      role: "Senior Dev",
      image:
        "https://images.pexels.com/photos/1181642/pexels-photo-1181642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      name: "Abby",
      role: "Project Manager",
      image:
        "https://images.pexels.com/photos/4467687/pexels-photo-4467687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 5,
      name: "Casandra",
      role: "Tester",
      image:
        "https://images.pexels.com/photos/4474047/pexels-photo-4474047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  const updateEmployee = (id, newName, newRole) => {
    console.log("checking");
  };
  const employeeData = empData.map((emp) => {
    return (
      <Employee
        key={uuidv4()}
        name={emp.name}
        image={emp.image}
        role={emp.role}
        updateEmployee={updateEmployee}
      />
    );
  });

  const ShowEmployees = true;

  return (
    <div className="App">
      {ShowEmployees ? (
        <div className="flex flex-wrap justify-center">{employeeData}</div>
      ) : (
        <p>You cannot see Employees</p>
      )}
    </div>
  );
}

export default App;
