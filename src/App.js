import './App.css';
import students from './data';
import Student from './components/Student';
import { useState } from 'react';

function App() {
  const [studentsList, setStudentsList] = useState(students)

  return (
    <div className="App">
      <h1>Students</h1>
      {studentsList.map((student, idx) => <Student key={idx} student={student} />)}
    </div>
  );
}

export default App;
