import React, { useState } from "react";
// import { StudentForm, EmployeeForm } from "./Form.jsx";
import { StudentForm , EmployeeForm  } from "./Table"; 
// import StudentForm from "./Table"


 function TableData() {
  const [studentData, setStudentData] = useState([
    {
      "id": 1,
      "degree": "Btech. Computer Science",
      "university": "BML Munjal University",
      "joining": "2020",
      "leaving": "2024",
      "cgpa": "9.5"
    }
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

// export default TableData;

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
 export {
  TableData,
  EmployeeData
 }