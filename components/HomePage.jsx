import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import Header from "./Header";
import Navbar from "./Navbar";
import Heading from "./Heading";
import PersonalDetails from "./PersonalDetails";
import AcademicDetails from "./AcademicDetails";
import EmployementDetails from "./EmployementDetails";
import ExperienceDetails from "./ExperienceDetails";
import ProfessionalDetails from "./ProfessionalDetails";
import AcademicSupervisionDetails from "./AcademicSupervisionDetails";
import AchievementDetails from "./AchievementDetails";

import Wizard from "./Wizard";

function HomePage() {
  return (
    <>
      <Navbar />
      <Header />
      <Heading />
      {/* <Wizard
      initialValues={{
        email: "",
        firstName: "",
        lastName: "",
        location: ""
      }}
      onSubmit={async (values) =>
        sleep(300).then(() => console.log("Wizard submit", values))
      }
    >
      <StepOne
        onSubmit={() => console.log("Step1 onSubmit")}
        validationSchema={Yup.object({
          firstName: Yup.string().required("required"),
          lastName: Yup.string().required("required")
        })}
      />
      <StepTwo
        onSubmit={(values) => console.log("Step2 onSubmit", values)}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("required")
        })}
      />
      <StepThree
        onSubmit={() => console.log("Step3 onSubmit")}
        validationSchema={Yup.object({
          location: Yup.string().required("required")
        })}
      />
    </Wizard> */}
      <Wizard
        initialValues={{
          postAppliedFor: "",
          firstName: "",
          lastName: "",
          middleName: "",
          dateOfBirth: "",
          maritalStatus: "",
          nationality: "",
          gender: "",
          permanentAddress: "",
          presentAddress: "",
          emailAddress: "",
          mobileNumber: "",
          officeNumber: "",
          landlineNumber: "",
          areaofSpecialisation: "",
          currentAreaofResearch: "",
        }}
        onSubmit={async (values) =>
          sleep(300).then(() => console.log("Wizard submit", values))
        }
      >
        <PersonalDetails
          onSubmit={() => console.log("Step1 onSubmit")}
          validationSchema={Yup.object({
            postAppliedFor: Yup.string().required("required"),
            firstName: Yup.string().required("required"),
            lastName: Yup.string().required("required"),
            dateOfBirth: Yup.date()
              .nullable()
              .max(new Date(), "Date of Birth cannot be in the future")
              .required("Date of Birth is required"),
              maritalStatus: Yup.string().oneOf(["single", "married"]).required("Marital Status is required"),
              nationality: Yup.string().required("Nationality is required"),
              presentAddress: Yup.string().required("Present Address is required"),

          })}
        />
        <AcademicDetails />
        <EmployementDetails />
        <ExperienceDetails />
        <ProfessionalDetails />
        <AcademicSupervisionDetails />
        <AchievementDetails />
      </Wizard>
    </>
  );
}

export default HomePage;

// personal
// academics
// employement
// experience
// professional achievement
// academic supervision
// achievements
