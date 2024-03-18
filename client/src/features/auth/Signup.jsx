import { useState } from 'react';
// import { signup } from '../../services/auth';

function Signup() {
  const [accountInfo, setAccountInfo] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  })

  async function signup(accountInfo) {
    const response = await fetch('api/v1/signup', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user: {
        username: accountInfo.username,
        password: accountInfo.password,
        password_confirmation: accountInfo.confirmPassword
      }})
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  }

  const handleSignup = async (e) => {
    e.preventDefault()
    if(accountInfo.password !== accountInfo.confirmPassword) {
      alert('Passwords do not match')
      return
    } else {
      try {
        await signup(accountInfo)
      }
      catch (error) {
        console.error('failed to signup', error)
      }
    }
  }

  return (
    <div>
      <div>Create an Account</div>
      <form onSubmit={handleSignup}>
        <div>
          <label htmlFor='username'>Username</label>
          <input 
            id='username'
            type='text'
            value={accountInfo.username}
            onChange={e => setAccountInfo({...accountInfo, username: e.target.value})}
            />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input 
            id='password' 
            type='password'
            onChange={e => setAccountInfo({...accountInfo, password: e.target.value})}
            value={accountInfo.password}
            />
        </div>
        <div>
          <label htmlFor='confirmPassword'>Confirm Password</label>
          <input 
            id='confirmPassword' 
            type='password' 
            onChange={e => setAccountInfo({...accountInfo, confirmPassword: e.target.value})}
            value={accountInfo.confirmPassword}
            />
        </div>
        <div>
          <button 
            type='submit' 
            disabled={accountInfo.password!==accountInfo.confirmPassword}>
            Sign up
          </button>
        </div>
      </form>

    </div>
  )
}

export default Signup