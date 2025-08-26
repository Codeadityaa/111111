import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login(){
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const nav = useNavigate();
  async function submit(e){
    e.preventDefault();
    try{
      const res = await axios.post((import.meta.env.VITE_API_URL || 'http://localhost:5000') + '/api/auth/login', {email,password});
      localStorage.setItem('token', res.data.token);
      nav('/jobs');
    }catch(err){
      alert(err.response?.data?.error || 'Login failed');
    }
  }
  return (
    <div style={{padding:20}}>
      <h2>Login</h2>
      <form onSubmit={submit}>
        <div><input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} /></div>
        <div><input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} /></div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
