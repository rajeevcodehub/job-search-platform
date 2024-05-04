import React from "react";
import Button from "@mui/material/Button";
import CustomButton from "./CustomButton";

const JobCard = (props) => {
  const {
    jdUid,
    jdLink,
    jobDetailsFromCompany,
    maxJdSalary,
    minJdSalary,
    salaryCurrencyCode,
    location,
    minExp,
    maxExp,
    jobRole,
    companyName,
    logoUrl,
  } = props?.job;

  return (
    <div
      style={{ border: "1px solid gray", borderRadius: "1%", padding: "2%" }}
    >
      <div style={{ display: "flex", gap: "1%" }}>
        <img
          src={logoUrl}
          alt="Company Logo"
          style={{ width: "50px", height: "50px" }}
        />
        <div>
          <p>{companyName}</p>
          <p>{jobRole}</p>
          <p>{location}</p>
        </div>
      </div>
      <div>
        <p>
          Estimated Salary: {salaryCurrencyCode === "USD" ? "$" : "₹"}{" "}
          {minJdSalary ?? 0} - {maxJdSalary} LPA
        </p>
      </div>
      <div>About Company:</div>
      <div>About us:</div>
      <p style={{ display: "flex", flexWrap: "wrap" }}>
        {jobDetailsFromCompany}
      </p>
      <div>
        <p>Minimum Experience</p>
        <p>{minExp} years</p>
        <p>Maximum Experience</p>
        <p>{maxExp} years</p>
      </div>
      <div>
        <CustomButton
          backgroundColor="#40E0D0"
          color="#000000"
          text="⚡ Easy Apply"
          href={jdLink}
        />
      </div>
      <div>
        <CustomButton
          backgroundColor="#2E2EFF"
          color="#000000"
          text="Unlock referral asks"
          href={jdLink}
        />
      </div>
    </div>
  );
};

export default JobCard;
