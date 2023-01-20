import { useState } from "react";

const GroupedTeamMembers = ({employees, selectedTeam, setTeam}) => {
 
  const [groupedEmployees, setGroupedData] = useState(GroupedTeamMembers())

  //completely disregarding DRY for the sake of doing so
  function GroupedTeamMembers() {
    
  }

  return (
    <main className="container">
        <div className="row justify-content-center mt-3 mb-4">
          <div className="col-8">
            <h1>Grouped Team Members</h1>
          </div>
        </div>
    </main>  
  )
}

export default GroupedTeamMembers