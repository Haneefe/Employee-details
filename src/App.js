import React, { useState } from "react";
import "./App.css";
import Employee from "./components/Employee";
function App() {
  const [role, setRole] = useState("dev");
  const ShowEmployees = true;
  const InputChangeHandler = (e) => {
    console.log(e.target.value);
    setRole(e.target.value);
  };
  return (
    <div className="App">
      {ShowEmployees ? (
        <React.Fragment>
          <input type="text" onChange={InputChangeHandler} />
          <Employee name="Haneef" role="React Developer" />
          <Employee name="Khan" role={role} />
          <Employee name="David" role={role} />
        </React.Fragment>
      ) : (
        <p>You cannot see Employees</p>
      )}
    </div>
  );
}

export default App;
