import { useState } from 'react';

export default function AuthPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    //use the email and password from the form to create a user in supabase
  }
  return (
    <div>
      <h3>Book Worm: the app for avid readers</h3>
      <form>
        <label>
                    email
          <input type="email" />
        </label>
        <label>
                    password
          <input type="password" />
        </label>
        <button>Sign Up</button>
      </form>
    </div>

  );
}