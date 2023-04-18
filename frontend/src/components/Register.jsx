import React from 'react'
import { useState } from 'react'
import axios from 'axios'




function Register() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isPrime, setIsPrime] = useState(false)

    const baseURL = "http://localhost:5555/api/users"

    const onSubmit = async (e)=>{
        console.log("click")
        e.preventDefault()
        await axios.post(baseURL, {
            name:name,
            email:email,
            password:password,
            isPrime:isPrime
        }).then((response) =>{
            console.log(response)
        })
    }
  return (
    <div>
        <h2>Register</h2>
        <section className='form'>

        <form onSubmit={onSubmit}>

          <div className='form-group'>

            <input

              type='text'

              className='form-control'

              id='name'

              name='name'

              value={name}

              placeholder='Enter your name'

              onChange={(e)=>setName(e.target.value)}

            />

          </div>

          <div className='form-group'>

            <input

              type='email'

              className='form-control'

              id='email'

              name='email'

              value={email}

              placeholder='Enter your email'

              onChange={(e)=>setEmail(e.target.value)}

 />
</div>
<div className='form-group'>
 <input

type='password'

className='form-control'
id='password'

name='password'

value={password}
 placeholder='Enter password'
 onChange={(e)=>setPassword(e.target.value)}

 />
</div>

 <div>
    <label>Do you want Prime Membership</label>
    <input name='isPrime' type="checkbox" value={isPrime}  onChange={(e)=>setIsPrime(e.target.value)} />
 </div>

<div className='form-group'>

 <button type='submit' className='btn btn-block'>

 Submit

</button>

</div>

</form>

</section>
</div>

 )

}
        

export default Register