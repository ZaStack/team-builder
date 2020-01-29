import React from 'react';
import { useState, useEffect } from 'react'; 
import { Container } from 'reactstrap';
import './App.css';

function App() {
  const [teamMember, setTeamMember] = useState([])
  const addMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setTeamMember([...teamMember, newMember])
  };


  return (
    <Container className='team-container' fluid={true}>
      
    </Container>

  );
}

export default App;
