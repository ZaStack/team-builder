import React from 'react';
import { useState, useEffect } from 'react'; 
import { Container } from 'reactstrap';
import './App.css';

import Form from './Form'

function App() {
  const [teamMembers, setTeamMembers] = useState([{}])
  const addMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setTeamMembers([...teamMembers, newMember])
  };


  return (
    <Container className='team-container' fluid={true}>
      <Form addMember={addMember}/>
    </Container>

  );
}

export default App;
