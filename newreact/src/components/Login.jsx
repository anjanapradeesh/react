import React from 'react'

const Login = () => {
  return (
      <div>
          <h1>Login page</h1>
          Username:<input type="text" name="username" id="name" /><br /><br />
          Password:<input type="password" name="password" id="password" /><br /><br />
          <input type="button" value="log in" />
      </div>
      
  )
}

export default Login