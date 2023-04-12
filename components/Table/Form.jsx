import React, { useState } from "react";
import { StudentForm, EmployeeForm, TeachingExperienceForm , DevelopmentForm } from "./Table";

function TableData() {
  const [studentData, setStudentData] = useState([
    {
      id: 1,
      degree: "Btech. Computer Science",
      university: "BML Munjal University",
      joining: "2020",
      leaving: "2024",
      cgpa: "9.5",
    },
  ]);

  const tableRows = studentData.map((info) => {
    return (
      <tr>
        <td>{info.id}</td>
        <td>{info.degree}</td>
        <td>{info.university}</td>
        <td>{info.joining}</td>
        <td>{info.leaving}</td>
        <td>{info.cgpa}</td>
      </tr>
    );
  });

  const addRows = (data) => {
    const totalStudents = studentData.length;
    data.id = totalStudents + 1;
    const updatedStudentData = [...studentData];
    updatedStudentData.push(data);
    setStudentData(updatedStudentData);
  };

  return (
    <div className="container p-2 mx-auto sm:p-4 ">
      <div className="overflow-x-auto">
        <table className="min-w-full text-md font-ruda font-medium text-gray-800 table-fixed">
          <thead className="bg-gray-300 rounded  border-black">
            <tr className="text-center">
              <th className="p-3">Serial No.</th>
              <th className="p-3">Degree</th>
              <th className="p-3">College/University</th>
              <th className="p-3">Year of Joining</th>
              <th className="p-3">Year of leaving</th>
              <th className="p-3">Percentage/CGPA</th>
            </tr>
          </thead>
          <tbody className="text-center">{tableRows}</tbody>
        </table>
        <StudentForm func={addRows} />
      </div>
    </div>
  );
}

function EmployeeData() {
  const [studentData, setStudentData] = useState([
    {
      id: 1,
      employer: "Google",
      designation: "Software Engineer",
      joining: "2019",
      leaving: "2020",
      ctc: "10 LPA",
    },
  ]);

  const tableRows = studentData.map((info) => {
    return (
      <tr>
        <td>{info.id}</td>
        <td>{info.employer}</td>
        <td>{info.designation}</td>
        <td>{info.joining}</td>
        <td>{info.leaving}</td>
        <td>{info.ctc}</td>
      </tr>
    );
  });

  const addRows = (data) => {
    const totalStudents = studentData.length;
    data.id = totalStudents + 1;
    const updatedStudentData = [...studentData];
    updatedStudentData.push(data);
    setStudentData(updatedStudentData);
  };

  return (
    <div className="container p-2 mx-auto sm:p-4 ">
      <div className="overflow-x-auto">
        <table className="min-w-full text-md font-ruda font-medium text-gray-800 table-fixed">
          <thead className="bg-gray-300 rounded  border-black">
            <tr className="text-center">
              <th className="p-3">Serial No.</th>
              <th className="p-3">Employer</th>
              <th className="p-3">Designation</th>
              <th className="p-3">Year of Joining</th>
              <th className="p-3">Year of leaving</th>
              <th className="p-3">CTC</th>
            </tr>
          </thead>
          <tbody className="text-center">{tableRows}</tbody>
        </table>
        <EmployeeForm func={addRows} />
      </div>
    </div>
  );
}

function TeachingExperienceData() {
  const [studentData, setStudentData] = useState([
    {
      id: 1,
      year: "2019",
      nature: "Teaching Assistant",
      duration: "1 year",
      organization: "BML Munjal University",
    },
  ]);

  const tableRows = studentData.map((info) => {
    return (
      <tr>
        <td>{info.id}</td>
        <td>{info.year}</td>
        <td>{info.nature}</td>
        <td>{info.duration}</td>
        <td>{info.organization}</td>
      </tr>
    );
  });

  const addRows = (data) => {
    const totalStudents = studentData.length;
    data.id = totalStudents + 1;
    const updatedStudentData = [...studentData];
    updatedStudentData.push(data);
    setStudentData(updatedStudentData);
  };

  return (
    <div className="container p-2 mx-auto sm:p-4 ">
      <div className="overflow-x-auto">
        <table className="min-w-full text-md font-ruda font-medium text-gray-800 table-fixed">
          <thead className="bg-gray-300 rounded  border-black">
            <tr className="text-center">
              <th className="p-3">Serial No.</th>
              <th className="p-3">Year</th>
              <th className="p-3">Nature</th>
              <th className="p-3">Duration</th>
              <th className="p-3">Organization</th>
            </tr>
          </thead>
          <tbody className="text-center">{tableRows}</tbody>
        </table>
        <TeachingExperienceForm func={addRows} />
      </div>
    </div>
  );
}

function DevelopmentData() {
  const [studentData, setStudentData] = useState([
    {
      id: 1,
      year: "2019",
      title: "Teaching Assistant",
      duration: "1 year",
      place: "BML Munjal University",
    },
  ]);

  const tableRows = studentData.map((info) => {
    return (
      <tr>

        <td>{info.id}</td>
        <td>{info.year}</td>
        <td>{info.title}</td>
        <td>{info.duration}</td>
        <td>{info.place}</td>
      </tr>
    );
  });

  const addRows = (data) => {
    const totalStudents = studentData.length;
    data.id = totalStudents + 1;
    const updatedStudentData = [...studentData];
    updatedStudentData.push(data);
    setStudentData(updatedStudentData);
  };

  return (
    <div className="container p-2 mx-auto sm:p-4 ">
      <div className="overflow-x-auto">
        <table className="min-w-full text-md font-ruda font-medium text-gray-800 table-fixed">
          <thead className="bg-gray-300 rounded  border-black">
            <tr className="text-center">
              <th className="p-3">Serial No.</th>
              <th className="p-3">Year</th>
              <th className="p-3">Title</th>
              <th className="p-3">Duration</th>
              <th className="p-3">Place</th>
            </tr>
          </thead>
          <tbody className="text-center">{tableRows}</tbody>
        </table>
        <DevelopmentForm func={addRows} />
      </div>
    </div>
  );

} 

export { TableData, EmployeeData, TeachingExperienceData };
