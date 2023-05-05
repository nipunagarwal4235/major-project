import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import Navbar from "./Navbar";
import Header from "./Header";

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
      <Wizard
        initialValues={{
          postAppliedFor: "Associate Professor",
          firstName: "Nipun",
          lastName: "Agarwal",
          middleName: "NA",
          dateOfBirth: "2023-05-05",
          maritalStatus: "single",
          nationality: "Indian",
          gender: "male",
          permanentAddress: "BML Munjal University",
          presentAddress: "BML Munjal University",
          emailAddress: "nipun.agarwal.20cse@gmail.com",
          mobileNumber: "6302006563",
          officeNumber: "6302006563",
          landlineNumber: "6302006563",
          areaofSpecialisation: "",
          currentAreaofResearch: "",
        }}
        onSubmit={(values) =>
          fetch("http://localhost:3000/api/user", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error(error))
        }
      >
        <PersonalDetails
          onSubmit={(values) =>
            fetch("http://localhost:3000/api/user", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(values),
            })
              .then((response) => response.json())
              .then((data) => console.log(data))
              .catch((error) => console.error(error))
          }
          validationSchema={Yup.object({
            postAppliedFor: Yup.string().required(
              "Post Applied For is required"
            ),
            firstName: Yup.string().required("First Name required"),
            lastName: Yup.string().required("Last Name is required"),
            dateOfBirth: Yup.date()
              .nullable()
              .max(new Date(), "Date of Birth cannot be in the future")
              .required("Date of Birth is required"),
            maritalStatus: Yup.string()
              .oneOf(["single", "married"])
              .required("Marital Status is required"),
            nationality: Yup.string().required("Nationality is required"),
            gender: Yup.string()
              .oneOf(["male", "female", "other"])
              .required("Gender is required"),
            permanentAddress: Yup.string().required(
              "Permanent Address is required"
            ),
            presentAddress: Yup.string().required(
              "Present Address is required"
            ),
            emailAddress: Yup.string()
              .email("Invalid email address")
              .required("Email Address is required"),
            mobileNumber: Yup.string().required("Mobile Number is required"),
            officeNumber: Yup.string().required("Office Number is required"),
            landlineNumber: Yup.string().required(
              "Landline Number is required"
            ),
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
