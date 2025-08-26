import React from 'react';
import { Link } from 'react-router-dom';

export default function Home(){
  return (
    <div style={{padding:20}}>
      <h1>Job Portal</h1>
      <p>A minimal job portal ready to run.</p>
      <nav>
        <Link to="/jobs">Jobs</Link> | <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
      </nav>
    </div>
  );
}
