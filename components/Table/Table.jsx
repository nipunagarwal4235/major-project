import React, { useState } from "react";

function StudentForm(props) {
  const [degree, setDegree] = useState("");
  const [university, setUniversity] = useState("");
  const [joining, setJoining] = useState("");
  const [leaving, setLeaving] = useState("");
  const [cgpa, setCgpa] = useState("");

  const changeDegree = (event) => {
    setDegree(event.target.value);
  };

  const changeUniversity = (event) => {
    setUniversity(event.target.value);
  };

  const changeJoining = (event) => {
    setJoining(event.target.value);
  };

  const changeLeaving = (event) => {
    setLeaving(event.target.value);
  };

  const changeCgpa = (event) => {
    setCgpa(event.target.value);
  };

  const transferValue = (event) => {
    event.preventDefault();
    const val = {
      degree,
      university,
      joining,
      leaving,
      cgpa,
    };
    props.func(val);
    clearState();
  };

  const clearState = () => {
    setDegree("");
    setUniversity("");
    setJoining("");
    setLeaving("");
    setCgpa("");
  };

  return (
    <div className="pt-8">
      <div className="grid grid-cols-5 gap-2">
        <div>
          <label className="font-ruda font-medium text-gray-700 pr-4">
            Degree:
          </label>
          <input
            className="w-full px-4 py-2 rounded-md bg-gray-300"
            type="text"
            value={degree}
            onChange={changeDegree}
          />
        </div>
        <div>
          <label className="font-ruda font-medium text-gray-700 pr-4">
            University:
          </label>
          <input
            className="w-full px-4 py-2 rounded-md bg-gray-300"
            type="text"
            value={university}
            onChange={changeUniversity}
          />
        </div>
        <div>
          <label className="font-ruda font-medium text-gray-700 pr-4">
            Year of Joining:
          </label>
          <input
            className="w-full px-4 py-2 rounded-md bg-gray-300"
            type="text"
            value={joining}
            onChange={changeJoining}
          />
        </div>

        <div>
          <label className="font-ruda font-medium text-gray-700 pr-4">
            Year of Leaving:
          </label>
          <input
            className="w-full px-4 py-2 rounded-md bg-gray-300"
            type="text"
            value={leaving}
            onChange={changeLeaving}
          />
        </div>
        <div>
          <label className="font-ruda font-medium text-gray-700 pr-4">
            CGPA:
          </label>
          <input
            className="w-full px-4 py-2 rounded-md bg-gray-300"
            type="text"
            value={cgpa}
            onChange={changeCgpa}
          />
        </div>
      </div>
      <div>
        <button onClick={transferValue}>Add Row</button>
      </div>
    </div>
  );
}

function EmployeeForm(props) {
  const [employer, setEmployer] = useState("");
  const [designation, setDesignation] = useState("");
  const [joiningDate, setJoiningDate] = useState("");
  const [leavingDate, setLeavingDate] = useState("");
  const [ctc, setCtc] = useState("");

  const changeEmployer = (event) => {
    setEmployer(event.target.value);
  };
  const changeDesignation = (event) => {
    setDesignation(event.target.value);
  };
  const changeJoiningDate = (event) => {
    setJoiningDate(event.target.value);
  };
  const changeLeavingDate = (event) => {
    setLeavingDate(event.target.value);
  };
  const changeCtc = (event) => {
    setCtc(event.target.value);
  };

  const transferValue = (event) => {
    event.preventDefault();
    const val = {
      employer,
      designation,
      joiningDate,
      leavingDate,
      ctc,
    };
    props.func(val);
    clearState();
  };

  const clearState = () => {
    setEmployer("");
    setDesignation("");
    setJoiningDate("");
    setLeavingDate("");
    setCtc("");
  };

  return (
    <div className="pt-8">
      <div className="grid grid-cols-5 gap-2">
        <div>
          <label className="font-ruda font-medium text-gray-700 pr-4">
            Employer:
          </label>
          <input
            className="w-full px-4 py-2 rounded-md bg-gray-300"
            type="text"
            value={employer}
            onChange={changeEmployer}
          />
        </div>
        <div>
          <label className="font-ruda font-medium text-gray-700 pr-4">
            Designation:
          </label>
          <input
            className="w-full px-4 py-2 rounded-md bg-gray-300"
            type="text"
            value={designation}
            onChange={changeDesignation}
          />
        </div>
        <div>
          <label className="font-ruda font-medium text-gray-700 pr-4">
            Joining Date:
          </label>
          <input
            className="w-full px-4 py-2 rounded-md bg-gray-300"
            type="text"
            value={joiningDate}
            onChange={changeJoiningDate}
          />
        </div>

        <div>
          <label className="font-ruda font-medium text-gray-700 pr-4">
            Leaving Date:
          </label>
          <input
            className="w-full px-4 py-2 rounded-md bg-gray-300"
            type="text"
            value={leavingDate}
            onChange={changeLeavingDate}
          />
        </div>
        <div>
          <label className="font-ruda font-medium text-gray-700 pr-4">
            CTC:
          </label>
          <input
            className="w-full px-4 py-2 rounded-md bg-gray-300"
            type="text"
            value={ctc}
            onChange={changeCtc}
          />
        </div>
      </div>
      <div>
        <button onClick={transferValue}>Add Row</button>
      </div>
    </div>
  );
}

function TeachingExperienceForm(props) {
  const [year, setYear] = useState("");
  const [nature, setNature] = useState("");
  const [duration, setDuration] = useState("");
  const [organization, setOrganization] = useState("");

  const changeYear = (event) => {
    setYear(event.target.value);
  };
  const changeNature = (event) => {
    setNature(event.target.value);
  };
  const changeDuration = (event) => {
    setDuration(event.target.value);
  };
  const changeOrganization = (event) => {
    setOrganization(event.target.value);
  };

  const transferValue = (event) => {
    event.preventDefault();
    const val = {
      year,
      nature,
      duration,
      organization,
    };
    props.func(val);
    clearState();
  };

  const clearState = () => {
    setYear("");
    setNature("");
    setDuration("");
    setOrganization("");
  };

  return (
    <div className="pt-8">
      <div className="grid grid-cols-5 gap-2">
        <div>
          <label className="font-ruda font-medium text-gray-700 pr-4">
            Year:
          </label>
          <input
            className="w-full px-4 py-2 rounded-md bg-gray-300"
            type="text"
            value={year}
            onChange={changeYear}
          />
        </div>
        <div>
          <label className="font-ruda font-medium text-gray-700 pr-4">
            Nature:
          </label>
          <input
            className="w-full px-4 py-2 rounded-md bg-gray-300"
            type="text"
            value={nature}
            onChange={changeNature}
          />
        </div>
        <div>
          <label className="font-ruda font-medium text-gray-700 pr-4">
            Duration:
          </label>
          <input
            className="w-full px-4 py-2 rounded-md bg-gray-300"
            type="text"
            value={duration}
            onChange={changeDuration}
          />
        </div>
        <div>
          <label className="font-ruda font-medium text-gray-700 pr-4">
            Organisation:
          </label>
          <input
            className="w-full px-4 py-2 rounded-md bg-gray-300"
            type="text"
            value={organization}
            onChange={changeOrganization}
          />
        </div>
      </div>
    </div>
  );
}

function DevelopmentForm(props) {
  const[year,setYear]=useState("");
  const[title,setTitle]=useState("");
  const[duration,setDuration]=useState("");
  const[place,setPlace]=useState("");

  const changeYear=(event)=>{
    setYear(event.target.value);
  }
  const changeTitle=(event)=>{
    setTitle(event.target.value);
  }
  const changeDuration=(event)=>{

    setDuration(event.target.value);
  }
  const changePlace=(event)=>{
    setPlace(event.target.value);
  }

  const transferValue=(event)=>{
    event.preventDefault();
    const val={
      year,
      title,
      duration,
      place
    }
    props.func(val);
    clearState();
  }

  const clearState=()=>{
    setYear("");
    setTitle("");
    setDuration("");
    setPlace("");
  }

  return (
    <div className="pt-8">
      <div className="grid grid-cols-5 gap-2">

        <div>

          <label className="font-ruda font-medium text-gray-700 pr-4">
            Year:
          </label>
          <input
            className="w-full px-4 py-2 rounded-md bg-gray-300"
            type="text"
            value={year}
            onChange={changeYear}
          />
        </div>
        <div>
          <label className="font-ruda font-medium text-gray-700 pr-4">
            Title:
          </label>
          <input
            className="w-full px-4 py-2 rounded-md bg-gray-300"
            type="text"
            value={title}
            onChange={changeTitle}
          />
        </div>
        <div>
          <label className="font-ruda font-medium text-gray-700 pr-4">
            Duration:
          </label>
          <input
            className="w-full px-4 py-2 rounded-md bg-gray-300"
            type="text"
            value={duration}
            onChange={changeDuration}
          />
        </div>
        <div>
          <label className="font-ruda font-medium text-gray-700 pr-4">
            Place:
          </label>
          <input
            className="w-full px-4 py-2 rounded-md bg-gray-300"
            type="text"
            value={place}
            onChange={changePlace}
          />
        </div>
      </div>
    </div>
  );
}


export { StudentForm, EmployeeForm, TeachingExperienceForm , DevelopmentForm };
