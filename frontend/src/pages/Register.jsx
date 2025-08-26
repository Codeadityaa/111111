import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register(){
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const nav = useNavigate();
  async function submit(e){
    e.preventDefault();
    try{
      const res = await axios.post((import.meta.env.VITE_API_URL || 'http://localhost:5000') + '/api/auth/register', {name,email,password});
      localStorage.setItem('token', res.data.token);
      nav('/jobs');
    }catch(err){
      alert(err.response?.data?.error || 'Register failed');
    }
  }
  return (
    <div style={{padding:20}}>
      <h2>Register</h2>
      <form onSubmit={submit}>
        <div><input placeholder="Name" value={name} onChange={e=>setName(e.target.value)} /></div>
        <div><input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} /></div>
        <div><input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} /></div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
