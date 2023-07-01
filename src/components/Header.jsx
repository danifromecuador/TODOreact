import { useState, useEffect } from 'react';
import '../styles/Header.css';

export const Header = () => {
  const [tasks, setTasks] = useState([]);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && event.target.value !== '') {
      const newTask = event.target.value;
      setTasks([...tasks, newTask]);
      event.target.value = '';
    }
  };

  useEffect(() => {
    console.log(`tasks: ${tasks}`);
  }, [tasks, setTasks]);
  
  return (
    <div className='header'>
      <h1>TODO&apos;s React</h1>
      <input type="text" id="userInput" onKeyDown={handleKeyPress} />
      <ul className='list-container'>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};
