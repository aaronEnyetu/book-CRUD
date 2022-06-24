import { useState } from 'react';
import { signUp } from './services/fetch-utils';

export default function AuthPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    //use the email and password from the form to create a user in supabase
    const user = await signUp(email, password);
    console.log(user);
    
  }
  return (
    <div>
      <h3>Book Worm: the app for avid readers</h3>
      <form onSubmit={handleSubmit}>
        <label>
                    email
          <input onChange={e => setEmail(e.target.value)} value={email} type="email" />
        </label>
        <label>
                    password
          <input onChange={e => setPassword(e.target.value)} value={password} type="password" />
        </label>
        <button>Sign Up</button>
      </form>
    </div>

  );
}