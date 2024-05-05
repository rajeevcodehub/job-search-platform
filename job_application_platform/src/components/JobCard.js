import React from "react";
import Button from "@mui/material/Button";
import CustomButton from "./CustomButton";
import { useState } from "react";

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

  const [showFullJobDescription, setShowFullJobDescription] = useState(false);

  const toggleDetails = () => {
    setShowFullJobDescription(!showFullJobDescription);
  };

  return (
    <div style={{ boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)", padding: "10px" }}>
      <div style={{ display: "flex", gap: "3%" }}>
        <img
          src={logoUrl}
          alt="Company Logo"
          style={{ width: "50px", height: "50px" }}
        />
        <div style={{ marginTop: "-18px" }}>
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
      <div style={{ position: "relative", overflow: "hidden" }}>
        <p
          style={{
            display: "flex",
            wordWrap: "break-word",
            height: showFullJobDescription ? "auto" : "80px", // Adjust height based on visibility
            transition: "height 0.1s ease", // Smooth transition for height change
          }}
        >
          {jobDetailsFromCompany}
        </p>
        {jobDetailsFromCompany.length > 100 && (
          <Button
            style={{
              position: "absolute",
              bottom: -10,
              left: 0,
              width: "100%",
              background: "rgba(255, 255, 255, 0.5)",
              color: "#0000FF",
              textTransform: "none",
            }}
            onClick={toggleDetails}
          >
            {showFullJobDescription ? "View Less" : "View job"}
          </Button>
        )}
      </div>
      <div>
        <p>Minimum Experience</p>
        <p>{minExp??0} years</p>
        <p>Maximum Experience</p>
        <p>{maxExp??0} years</p>
      </div>
      <div>
        <div>
          <CustomButton
            backgroundColor="#40E0D0"
            color="#000000"
            text="⚡ Easy Apply"
            href={jdLink}
          />
        </div>
        <div style={{ marginTop: "2%" }}>
          <CustomButton
            backgroundColor="#2E2EFF"
            color="#000000"
            text="Unlock referral asks"
            href={jdLink}
          />
        </div>
      </div>
    </div>
  );
};

export default JobCard;
