import React, { useState } from 'react'
import './App.css';

const teamMembers = [
  { name: 'Elon Musk', role: 'product design engineer' },
  { name: 'George Hotz', role: 'cybersecurity engineer' },
  { name: 'John Carmack', role: 'software engineer' }
]

function Form() {
  const [members, setMembers] = useState(teamMembers)
  console.log(members)

  return null
}


function App() {
  return (
    <div className="App">
      <h1>Team Members:</h1>

      {teamMembers.map((member, index) => {
        return <div key={index}>{member.name} is a {member.role}</div>
      })}

      <Form />
    </div>
  );
}

export default App;
