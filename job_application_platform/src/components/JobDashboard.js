import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";
const JobDashboard = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      limit: 10,
      offset: 0,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };

    fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setJobs(result?.jdList))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div style={{display: "flex" , padding:"1%"}}>
      <div style={{display: "flex", gap:"0.5%", flexDirection: "column", flexWrap:"wrap", boxShadow:"2% 2%"}}>
        {jobs.map((job) => {
            return (
                <div >
                <JobCard key={job?.jdUid} job = {job}/>
                </div>
            );
        })}
      </div>
    </div>
  );
};

export default JobDashboard;
