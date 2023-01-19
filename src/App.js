import * as React from 'react';
import Header from './components/Header'
import Employees from './components/Employees'
import Footer from './components/Footer'
import { useState, useEffect } from 'react'

function App() {
  
  const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam')) || "Team-B")

  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employeeList')) || [{
  id: 1,
  fullName: "Bob Jones",
  designation: "JavaScript Developer",
  gender: "male",
  teamName: "Team-A"
},
{
  id: 2,
  fullName: "Jill Bailey",
  designation: "Node Developer",
  gender: "female",
  teamName: "Team-A"
},
{
  id: 3,
  fullName: "Gail Shepherd",
  designation: "Java Developer",
  gender: "female",
  teamName: "Team-A"
},
{
  id: 4,
  fullName: "Sam Reynolds",
  designation: "React Developer",
  gender: "male",
  teamName: "Team-B"
},
{
  id: 5,
  fullName: "David Henry",
  designation: "DotNet Developer",
  gender: "male",
  teamName: "Team-B"
},
{
  id: 6,
  fullName: "Sarah Blake",
  designation: "SQL Server DBA",
  gender: "female",
  teamName: "Team-B"
},
{
  id: 7,
  fullName: "James Bennet",
  designation: "Angular Developer",
  gender: "male",
  teamName: "Team-C"
},
{
  id: 8,
  fullName: "Jessica Faye",
  designation: "API Developer",
  gender: "female",
  teamName: "Team-C"
},
{
  id: 9,
  fullName: "Lita Stone",
  designation: "C++ Developer",
  gender: "female",
  teamName: "Team-C"
},
{
  id: 10,
  fullName: "Daniel Young",
  designation: "Python Developer",
  gender: "male",
  teamName: "Team-D"
},
{
  id: 11,
  fullName: "Adrian Jacobs",
  designation: "Vue Developer",
  gender: "male",
  teamName: "Team-D"
},
{
  id: 12,
  fullName: "Devin Monroe",
  designation: "Graphic Designer",
  gender: "male",
  teamName: "Team-D"
  }]);

  useEffect(() => {

    localStorage.setItem('employeeList',JSON.stringify(employees));

  }, [employees]);

  useEffect(() => {

    localStorage.setItem('selectedTeam',JSON.stringify(selectedTeam));

  }, [selectedTeam]);

  function handleTeamSelectionChange(e) {
      setTeam(e.target.value);
  }

  function handleEmployeeCardClick(e) {
      const transformedEmployees = employees.map((employee) => employee.id === parseInt(e.currentTarget.id) 
                                                          ? (employee.teamName === selectedTeam)?{...employee, teamName: ''}:{...employee, teamName: selectedTeam}
                                                          :employee);
  setEmployees(transformedEmployees);
                                                      
}

  return (
    <div>
      <Header selectedTeam={selectedTeam} teamMemberCount={employees.filter((employee) => employee.teamName === selectedTeam).length} />
      <Employees employees={employees} selectedTeam={selectedTeam} handleEmployeeCardClick={handleEmployeeCardClick} handleTeamSelectionChange={handleTeamSelectionChange} />      
      <Footer />
    </div>
  );
}

export default App;

