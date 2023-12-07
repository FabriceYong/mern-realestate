import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignIn = () => {
  const [formData, setFormData] = useState({})
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSignIn = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
      })
      const data = await res.json()
      if(data.success === false) {
        setLoading(false)
        setError(data.message)
      }
      setLoading(false)
      setError(null)
      navigate('/')
      // if(!error && !loading) {
      //   alert('Sign in completed successfully')
      // }
    } catch(error) {
      setLoading(false)
      setError(error.message)
      console.log(error)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }

  return (
    <div className="mt-8 max-w-lg m-auto p-4">
      <h1 className="capitalize text-center font-bold text-3xl mb-4">
        sign in
      </h1>
      {error && <p className='text-red-700 font-medium text-sm'>{error}</p>}
      <form className="w-full flex flex-col gap-4" onSubmit={handleSignIn}>
        <input
          id="email"
          type="email"
          placeholder="Email here..."
          className="w-full focus:outline-slate-400 text-slate-600 bg-white py-2 px-2 rounded-md font-medium"
          onChange={handleChange}
        />
        <input
          id="password"
          type="password"
          placeholder="Password here..."
          className="w-full focus:outline-slate-400 text-slate-600 bg-white py-2 px-2 rounded-md font-medium"
          onChange={handleChange}
        />

        <button disabled={loading} className="w-full uppercase py-2 px-2 bg-blue-950 rounded-md text-slate-100 font-medium hover:opacity-80">
          {loading ? 'Loading...' : 'sign in'}
        </button>
      </form>
      <div>
        <p className="font-medium mt-4">
          Dont't have an account yet?{' '}
          <Link to={'/signup'}>
            <span className="hover:underline text-blue-600">Sign Up</span>
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignIn
