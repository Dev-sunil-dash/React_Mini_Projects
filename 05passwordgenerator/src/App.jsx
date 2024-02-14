import { useCallback, useState, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [charAllowed, setCharAllowed] = useState(false)
  const [numAllowed, setNumAllowed] = useState(false)
  const [password, setPassword] = useState('');

  const passwordRef = useRef(null);

  const handleCopyPassword = () => {
    if (password) {
      passwordRef.current?.select()
      navigator.clipboard.writeText(password)
        .then(() => alert("Password Copied"))
        .catch((error) => console.error("Failed to copy password: ", error));
    } else {
      alert("Nothing to copy");
    }
  };

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllowed) {
      str += "0123456789"
    }
    if (charAllowed) {
      str += "!@#$%^&*()_+"
    }
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword])

  return (
    <>
      <h1 className='text-white my-3'>Password Generator</h1>
      <div className='w-full max-w-lg mx-auto shadow-md p-8 bg-gray-700 rounded-lg px-4 my-8 text-orange-500'>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type='text'
            value={password}
            className='outline-none w-full py-1 px-3 bg-white rounded-md'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
            onClick={handleCopyPassword}
          >Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex item-center gap-x-1'>
            <input className='cursor-pointer' min={6} max={20} value={length} type='range'
              onChange={(e) => { setLength(e.target.value) }} />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type='checkbox' id='charInput' defaultChecked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label htmlFor='charInput'>Characters</label>
            <input type='checkbox' defaultChecked={numAllowed} id='numInput'
              onChange={() => setNumAllowed((prev) => !prev)}
            />
            <label htmlFor='numInput'>Numbers</label>
          </div>
        </div>
        <div>
          <button onClick={passwordGenerator} className='mt-4 outline-none bg-green-700 text-white'>Generate</button>
        </div>
      </div>
    </>
  )
}

export default App
