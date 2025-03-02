import React, { useEffect, useState } from 'react'; // useEffect aur useState import karein
import logo from './logo.svg';
import './App.css';

function App() {
  const [employees, setEmployees] = useState([]); // Employees ke liye state banayein

  // Fetch employees from backend
  useEffect(() => {
    fetch('/employees')
      .then(response => response.json())
      .then(data => setEmployees(data))
      .catch(error => console.error('Error fetching employees:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {/* Employees ka data display karein */}
        <div>
          <h2>Employees List</h2>
          <ul>
            {employees.map(employee => (
              <li key={employee._id}>
                {employee.name} - {employee.position} - {employee.office} - ${employee.salary}
              </li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;