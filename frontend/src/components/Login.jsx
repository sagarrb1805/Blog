import React from 'react'

function Login() {
  return (
    <div>

<>

         <section className='heading'>

            <h1>

                Login

            </h1>

            <p>Login and start expressing your ideas</p>

         </section>




         <section className='form'>

            <form 
            // onSubmit={onSubmit}
            >

               <div className='form-group'>

                  <input

                     type='email'

                     className='form-control'

                     id='email'

                     name='email'

                    //  value={email}

                     placeholder='Enter your email'

                    //  onChange={onChange}

                  />

               </div>

               <div className='form-group'>

                  <input

                     type='password'

                     className='form-control'

                     id='password'

                     name='password'

                    //  value={password}

                     placeholder='Enter password'

                    //  onChange={onChange}

                  />

               </div>




               <div className='form-group'>

                  <button type='submit' className='btn btn-block'>

                     Submit

                  </button>

               </div>

            </form>

         </section>

      </>


    </div>
  )
}

export default Login