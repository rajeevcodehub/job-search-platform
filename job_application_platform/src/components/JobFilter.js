import React from "react";
import { useState, useEffect } from "react";

const JobFilter = ({ jobs, onFilter }) => {

    const [filters, setFilters] = useState({
        role: "",
        numberOfEmployees: "",
        experience: "",
        jobType: "",
        minimumBasePaySalary: "",
        companyName: "",
      });
  function getUniqueJobRole(jobs) {   // Getting unique job roles to display in dropdown
    const uniqueJobRole = [];
    jobs?.forEach((job) => {
      if (!uniqueJobRole.includes(job?.jobRole)) {
        uniqueJobRole.push(job?.jobRole);
      }
    });
    return uniqueJobRole;
  }

  useEffect(() => {    // Calling onFilter function on filter change
    onFilter(filters);
  }, [filters, onFilter]);

  const handleSearch = (e) => {      // Handling filter change
    let { name, value } = e.target;
    console.log(name, value);
    if(name === "experience" ) {    //  Mapping experience to integer
        if(value === "0-1 years") {
            value = 0;
        } else if(value === "1-3 years") {
            value = 1;
        } else if(value === "3-5 years") {
            value = 3;
        } else if(value === "5-10 years") {
            value = 5;
        } else if(value === "10+ years") {
            value = 10;
        }
    }

    if(name === "minimumBasePaySalary") {   // Mapping minimumBasePaySalary to integer
        if(value === "0-10") {
            value = 0;
        } else if(value === "11-100") {
            value = 11;
        } else if(value === "101-500") {
            value = 101;
        } else if(value === "501-1000") {
            value = 501;
        } else if(value === "1000+") {
            value = 1000;
        }
    }

    if(name === "numberOfEmployees") {  // Mapping numberOfEmployees to string
        if(value === "1-20") {
            value = "1-20";
        } else if(value === "21-50") {
            value = "21-50";
        } else if(value === "51-100") {
            value = "51-100";
        } else if(value === "101-500") {
            value = "101-500";
        } else if(value === "501-1000") {
            value = "501-1000";
        } else if(value === "More Than 1000") {
            value = "More Than 1000+";
        }
    }
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
    onFilter(filters);
  };

  return (
    <div style={{ display: "flex", gap: "1%", margin: "1%" }}>
      <select name="role" style={{ width: "13%" }} onChange={handleSearch}>
        <option selected="true" disabled="true">
          Role
        </option>
        {getUniqueJobRole(jobs)?.map((role) => {
          return <option value={role}>{role}</option>;
        })}
      </select>
      <select name="numberOfEmployees" style={{ width: "13%" }} onChange={handleSearch}>
        <option selected="true" disabled="true">
          Number of Employees
        </option>
        <option value="1-20">1-20</option>
        <option value="21-50">21-50</option>
        <option value="51-100">51-100</option>
        <option value="101-500">101-500</option>
        <option value="501-1000">501-1000</option>
        <option value="More Than 1000+">More Than 1000</option>
      </select>

      <select name="experience" style={{ width: "13%" }} onChange={handleSearch}>
        <option selected="true" disabled="true">
          Years Of Experience
        </option>
        <option value="0-1 years">0-1 years</option>
        <option value="1-3 years">1-3 years</option>
        <option value="3-5 years">3-5 years</option>
        <option value="5-10 years">5-10 years</option>
        <option value="10+ years">10+ years</option>
      </select>

      <select name="jobType" style={{ width: "13%" }} onChange={handleSearch}>
        <option selected="true" disabled="true">
          Type of Job
        </option>
        <option value="Remote">Remote</option>
        <option value="Hybrid">Hybrid</option>
        <option value="On-site">On-site</option>
      </select>

      <select name="minimumBasePaySalary" style={{ width: "13%" }} onChange={handleSearch}>
        <option selected="true" disabled="true">
          Minimum Base pay salary
        </option>
        <option value="0-10">Less than $10</option>
        <option value="11-100">More than 11$</option>
        <option value="101-500">More than 101$</option>
        <option value="501-1000">More than 501$</option>
        <option value="1000+">More than 1,000$+</option>
      </select>

      <input
        name="companyName"
        style={{ width: "13%" }}
        type="text"
        onChange={handleSearch}
        placeholder="Search Company Name"
      />
    </div>
  );
};

export default JobFilter;
