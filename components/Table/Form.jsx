import React, { useState } from "react";
import StudentForm from "./Table.jsx";
import jsonData from "./data.json";

function TableData() {
  const [studentData, setStudentData] = useState(jsonData);

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
        <table className="min-w-full text-xs">
          <thead className="">
            <tr className="text-left">
              <th className="p-3">Serial No.</th>
              <th className="p-3">Degree</th>
              <th className="p-3">College/University</th>
              <th className="p-3">Year of Joining</th>
              <th className="p-3">Year of leaving</th>
              <th className="p-3 text-right">Percentage/CGPA</th>
            </tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </table>
        <StudentForm func={addRows} />
      </div>
    </div>
  );
}

export default TableData;
