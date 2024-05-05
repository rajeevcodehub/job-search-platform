import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";
const JobDashboard = () => {
  const [jobs, setJobs] = useState([]);
  const [uniqueJobRole, setUniqueJobRole] = useState([]);

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      limit: 100,
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
      .then((result) => {
        setJobs(result?.jdList);
        getUniqueJobRole(result?.jdList);
      })
      .catch((error) => console.error(error));
  }, []);

  function getUniqueJobRole(jobs) {
    const uniqueJobRole = [];
    jobs?.forEach((job) => {
      if (!uniqueJobRole.includes(job?.jobRole)) {
        uniqueJobRole.push(job?.jobRole);
      }
    });
    setUniqueJobRole(uniqueJobRole);
  }

  return (
    <div>
      <div style={{ display: "flex", gap: "1%", margin: "1%" }}>
        <select style={{ width: "13%" }}>
          <option selected="true" disabled="true">
            Role
          </option>
          {uniqueJobRole?.map((role) => {
            return <option value={role}>{role}</option>;
          })}
        </select>
        <select style={{ width: "13%" }}>
          <option selected="true" disabled="true">
            Number of Employees
          </option>
          <option value="1-20">1-20</option>
          <option value="21-50">21-50</option>
          <option value="51-100">51-100</option>
          <option value="101-500">101-500</option>
          <option value="501-1000">501-1000</option>
          <option value="More Than 1000">More Than 1000</option>
        </select>

        <select style={{ width: "13%" }}>
          <option selected="true" disabled="true">
            Years Of Experience
          </option>
          <option value="0-1 years">0-1 years</option>
          <option value="1-3 years">1-3 years</option>
          <option value="3-5 years">3-5 years</option>
          <option value="5-10 years">5-10 years</option>
          <option value="10+ years">10+ years</option>
        </select>

        <select style={{ width: "13%" }}>
          <option selected="true" disabled="true">
            Type of Job
          </option>
          <option value="Remote">Remote</option>
          <option value="Hybrid">Hybrid</option>
          <option value="On-site">On-site</option>
        </select>

        <select style={{ width: "13%" }}>
          <option selected="true" disabled="true">
            Minimum Base pay salary
          </option>
          <option value="0-10">Less than $10</option>
          <option value="11-20">$11 - $20</option>
          <option value="21-50">$21 - $50</option>
          <option value="51-100">$51 - $100</option>
          <option value="101-500">$101 - $500</option>
          <option value="501-1000">$501 - $1000</option>
          <option value="1000+">$1,000+</option>
        </select>

        <input
          style={{ width: "13%" }}
          type="text"
          placeholder="Search Company Name"
        />
      </div>
      <div
        style={{
          display: "flex",
          gap: "0.5%",
          flexDirection: "row",
          flexWrap: "wrap",
          boxShadow: "2% 2%",
        }}
      >
        {jobs.map((job) => {
          return (
            <div
              style={{
                width: "300px",
                borderRadius: "5px",
              }}
            >
              <JobCard key={job?.jdUid} job={job} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JobDashboard;
