import React, { useState } from 'react';
import validate  from './Validate';


export default function  Form() {
  const [form, setForm] = useState({})
  const [error, setError] = useState({})

  const handleInputChange = (e) => {
  
    setForm({
        ...form,
        [e.target.name]: e.target.value,
    })
    setError(validate({
      ...form,
      [e.target.name]: e.target.value,
    }))
    
}
const handleSubmit = (e) => {
  e.preventDefault();
  alert("El Formulario se ha enviado")
}

  return (
      <form onSubmit={handleSubmit}>
        <div> 
        <label htmlFor="username">Username:</label>
      <input className={error.username && 'danger'} type={"text"} name='username' value={form.username} onChange={handleInputChange}/>
      {error.username && <p className='danger'>{error.username}</p>}
        </div>
      <hr />
      <div>
      <label htmlFor='password'>Password:</label>
      <input className={error.password && "danger"} type={"password"} name="password" value={form.password} onChange={handleInputChange}/>
      {error.password && <p className='danger'>{error.password}</p>}
      </div>
      {(error.username || error.password)? <input type={"submit"} name="submit" disabled={true} /> : <input type={"submit"} name="submit" disabled={false}/>}
      </form>
  )
}
