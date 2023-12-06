import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault()
    
    if(!username || !email || !password) {
      alert('All input fields are required') 
      return
    }

    console.log(username, email, password)
  }


  return (
    <div className="mt-8 max-w-lg m-auto p-4">
      <h1 className="capitalize text-center font-bold text-3xl mb-4">
        sign up
      </h1>
      <form className="w-full flex flex-col gap-4" onSubmit={handleSignUp}>
        <input
          id='username'
          type="text"
          placeholder="Username here..."
          value={username}
          className="w-full focus:outline-slate-400 text-slate-600 bg-white py-2 px-2 rounded-md font-medium"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          id='email'
          type="email"
          placeholder="Email here..."
          value={email}
          className="w-full focus:outline-slate-400 text-slate-600 bg-white py-2 px-2 rounded-md font-medium"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          id='password'
          type="password"
          placeholder="Password here..."
          value={password}
          className="w-full focus:outline-slate-400 text-slate-600 bg-white py-2 px-2 rounded-md font-medium"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="w-full uppercase py-2 px-2 bg-blue-950 rounded-md text-slate-100 font-medium hover:opacity-80">
          sign up
        </button>
        <button className="w-full uppercase py-2 px 2 bg bg-red-800 rounded-md text-slate-100 font-medium hover:opacity-80">
          continue with google
        </button>
      </form>
      <div>
        <p className='font-medium mt-4'>
          Have an account? <Link to={'/signin'}><span  className='hover:underline text-blue-600'>Sign in</span></Link>
        </p>
      </div>
    </div>
  )
}

export default SignUp
