import { useState } from 'react'
import { SimpleBarcode } from './components/SimpleBarcode'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div className='card'>
        <input></input>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <SimpleBarcode value='14710970' />
      </div>
    </>
  )
}

export default App
