import '../styles/Header.css';

export const Header = () => {
  return (
    <div className='header'>
      <h1>TODO&apos;s React</h1>
      <input type="text" id="userInput" placeholder="Enter a new task" />
    </div>
  )
}
