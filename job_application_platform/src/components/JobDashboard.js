import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";
import JobFilter from "./JobFilter";
const JobDashboard = () => {
  const [jobs, setJobs] = useState([]);
  
  const [filterdJobs, setFilteredJobs] = useState([]);

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
      .then((result) => {
        setJobs(result?.jdList);
        // getUniqueJobRole(result?.jdList);
        setFilteredJobs(result?.jdList);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleFilter = (filters) => {
    let filteredData = [...jobs];
    if (filters.role) {
      filteredData = filteredData.filter((job) => job.jobRole === filters.role);
    }
    if (filters.numberOfEmployees) {
      filteredData = filteredData.filter((job) => job?.numberOfEmployees === filters.numberOfEmployees);
    }
    if (filters.experience) {
      filteredData = filteredData.filter((job) => job.minExp >= filters.experience);
    }
    if (filters.jobType) {
      filteredData = filteredData.filter((job) => job.jobType === filters.jobType);
    }
    if (filters.minimumBasePaySalary) {
      filteredData = filteredData.filter((job) => job.minJdSalary >= filters.minimumBasePaySalary);
    }
    if (filters.companyName) {
      filteredData = filteredData.filter((job) => job.companyName.toLowerCase().includes(filters.companyName.toLowerCase()));
    }

    setFilteredJobs(filteredData);
  };

  return (
    <div>
      <JobFilter jobs = {jobs} onFilter={handleFilter}/>
      <div
        style={{
          display: "flex",
          gap: "0.5%",
          flexDirection: "row",
          flexWrap: "wrap",
          boxShadow: "2% 2%",
        }}
      >
        {filterdJobs.length > 0 ? filterdJobs?.map((job) => {
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
        }): <h1>No Jobs Found</h1>}
      </div>
    </div>
  );
};

export default JobDashboard;
