import React from 'react';
import './App.css';
import { Card } from './components/Card';
import { students } from './data/students';

function App() {
  const myInfo = students[0];

  const otherStudents = students.slice(1).sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  return (
    <div className="app-container">
      <h1>Cards do Grupo - Projeto PEI</h1>

      <div className="cards-grid">

        <Card
          key={myInfo.id}
          name={myInfo.name}
          course={myInfo.course}
          university={myInfo.university}
          github={myInfo.github}
        />

        {otherStudents.map(student => (
          <Card
            key={student.id}
            name={student.name}
            course={student.course}
            university={student.university}
            github={student.github}
          />
        ))}
      </div>
    </div>
  );
}

export default App;