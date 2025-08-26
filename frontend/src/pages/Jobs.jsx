import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function Jobs(){
  const [jobs, setJobs] = useState([]);
  useEffect(()=> {
    axios.get((import.meta.env.VITE_API_URL || 'http://localhost:5000') + '/api/jobs')
      .then(res=> setJobs(res.data))
      .catch(err=> console.error(err));
  }, []);
  return (
    <div style={{padding:20}}>
      <h2>Jobs</h2>
      {jobs.length===0 && <p>No jobs found. Use backend POST /api/jobs to add.</p>}
      <ul>
        {jobs.map(j=> (
          <li key={j._id} style={{marginBottom:10}}>
            <strong>{j.title}</strong> — {j.company} <br/>
            <small>{j.location}</small>
            <p>{j.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
