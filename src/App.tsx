import { useState } from 'react'
import logo from './logo.svg'
import './app-style.css'
import { Hello } from '@panhasilva/my-lib-hello-2'

function App () {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <Hello />
        <p>
          <button type='button' onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
      </header>
    </div>
  )
}

export default App
