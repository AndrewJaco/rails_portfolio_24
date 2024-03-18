import { RUNNERS_API_URL } from '../constants';  

async function signup(accountInfo) {
  const response = await fetch(`${RUNNERS_API_URL}/signup`, {
    method: 'POST',
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

export { signup }