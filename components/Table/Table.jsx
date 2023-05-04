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

function ProfessionalForm(props) {
  const [Year, setYear] = useState("");
  const [Nature, setNature] = useState("");
  const [Duration, setDuration] = useState("");
  const [Organization, setOrganization] = useState("");

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
      Year,
      Nature,
      Duration,
      Organization,
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
            value={Year}
            onChange={changeYear}
          />
        </div>
        <div>
          <label className="font-ruda font-medium text-gray-700 pr-4">
            Nature of Training:
          </label>
          <input
            className="w-full px-4 py-2 rounded-md bg-gray-300"
            type="text"
            value={Nature}
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
            value={Duration}
            onChange={changeDuration}
          />
        </div>

        <div>
          <label className="font-ruda font-medium text-gray-700 pr-4">
            Organization of Training:
          </label>
          <input
            className="w-full px-4 py-2 rounded-md bg-gray-300"
            type="text"
            value={Organization}
            onChange={changeOrganization}
          />
        </div>
      </div>
      <div>
        <button onClick={transferValue}>Add Row</button>
      </div>
    </div>
  );
}

function MembershipForm(props) {
  const [Body, setBody] = useState("");
  const [Status, setStatus] = useState("");

  const changeBody = (event) => {
    setBody(event.target.value);
  };
  const changeStatus = (event) => {
    setStatus(event.target.value);
  };

  const transferValue = (event) => {
    event.preventDefault();
    const val = {
      Body,
      Status,
    };
    props.func(val);
    clearState();
  };

  const clearState = () => {
    setBody("");
    setStatus("");
  };

  return (
    <div className="pt-8">
      <div className="grid grid-cols-5 gap-2">
        <div>
          <label className="font-ruda font-medium text-gray-700 pr-4">
            Name of the Body:
          </label>
          <input
            className="w-full px-4 py-2 rounded-md bg-gray-300"
            type="text"
            value={Body}
            onChange={changeBody}
          />
        </div>
        <div>
          <label className="font-ruda font-medium text-gray-700 pr-4">
            Status:
          </label>
          <input
            className="w-full px-4 py-2 rounded-md bg-gray-300"
            type="text"
            value={Status}
            onChange={changeStatus}
          />
        </div>
      </div>
      <div>
        <button onClick={transferValue}>Add Row</button>
      </div>
    </div>
  );
}

function ConferenceForm(props) {
  const [Year, setYear] = useState("");
  const [Conference, setConference] = useState("");
  const [Title, setTitle] = useState("");

  const changeYear = (event) => {
    setYear(event.target.value);
  };
  const changeConference = (event) => {
    setConference(event.target.value);
  };
  const changeTitle = (event) => {
    setTitle(event.target.value);
  };

  const transferValue = (event) => {
    event.preventDefault();
    const val = {
      Year,
      Conference,
      Title,
    };
    props.func(val);
    clearState();
  };

  const clearState = () => {
    setYear("");
    setConference("");
    setTitle("");
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
            value={Year}
            onChange={changeYear}
          />
        </div>
        <div>
          <label className="font-ruda font-medium text-gray-700 pr-4">
            Conference/Seminar attended:
          </label>
          <input
            className="w-full px-4 py-2 rounded-md bg-gray-300"
            type="text"
            value={Conference}
            onChange={changeConference}
          />
        </div>
        <div>
          <label className="font-ruda font-medium text-gray-700 pr-4">
            Title of Paper read(if any):
          </label>
          <input
            className="w-full px-4 py-2 rounded-md bg-gray-300"
            type="text"
            value={Title}
            onChange={changeTitle}
          />
        </div>
      </div>
      <div>
        <button onClick={transferValue}>Add Row</button>
      </div>
    </div>
  );
}

function CourseForm(props) {
  const [Title, setTitle] = useState("");
  const [Pgug, setPgug] = useState("");
  const [Sole, setSole] = useState("");
  const [Year, setYear] = useState("");

  const changeTitle = (event) => {
    setTitle(event.target.value);
  };
  const changePgug = (event) => {
    setPgug(event.target.value);
  };
  const changeSole = (event) => {
    setSole(event.target.value);
  };
  const changeYear = (event) => {
    setYear(event.target.value);
  };

  const transferValue = (event) => {
    event.preventDefault();
    const val = {
      Title,
      Pgug,
      Sole,
      Year,
    };
    props.func(val);
    clearState();
  };

  const clearState = () => {
    setYear("");
    setConference("");
    setTitle("");
  };

  return (
    <div className="pt-8">
      <div className="grid grid-cols-5 gap-2">
        <div>
          <label className="font-ruda font-medium text-gray-700 pr-4">
            Title of the course:
          </label>
          <input
            className="w-full px-4 py-2 rounded-md bg-gray-300"
            type="text"
            value={Title}
            onChange={changeTitle}
          />
        </div>
        <div>
          <label className="font-ruda font-medium text-gray-700 pr-4">
            PG or UG:
          </label>
          <input
            className="w-full px-4 py-2 rounded-md bg-gray-300"
            type="text"
            value={Pgug}
            onChange={changePgug}
          />
        </div>
        <div>
          <label className="font-ruda font-medium text-gray-700 pr-4">
            Sole or with others:
          </label>
          <input
            className="w-full px-4 py-2 rounded-md bg-gray-300"
            type="text"
            value={Sole}
            onChange={changeSole}
          />
        </div>
        <div>
          <label className="font-ruda font-medium text-gray-700 pr-4">
            Year:
          </label>
          <input
            className="w-full px-4 py-2 rounded-md bg-gray-300"
            type="text"
            value={Year}
            onChange={changeYear}
          />
        </div>
      </div>
      <div>
        <button onClick={transferValue}>Add Row</button>
      </div>
    </div>
  );
}

function PostForm(props) {
  const [Name, setName] = useState("");
  const [Title, setTitle] = useState("");
  const [Doctorate, setDoctorate] = useState("");
  const [Year, setYear] = useState("");

  const changeName = (event) => {
    setName(event.target.value);
  };
  const changeTitle = (event) => {
    setTitle(event.target.value);
  };

  const changeDoctorate = (event) => {
    setDoctorate(event.target.value);
  };
  const changeYear = (event) => {
    setYear(event.target.value);
  };

  const transferValue = (event) => {
    event.preventDefault();
    const val = {
      Name,
      Title,
      Doctorate,
      Year,
    };
    props.func(val);
    clearState();
  };

  const clearState = () => {
    setName("");
    setTitle("");
    setDoctorate("");
    setYear("");
  };

  return (
    <div className="pt-8">
      <div className="grid grid-cols-5 gap-2">
        <div>
          <label className="font-ruda font-medium text-gray-700 pr-4">
            Name of Scholar:
          </label>
          <input
            className="w-full px-4 py-2 rounded-md bg-gray-300"
            type="text"
            value={Name}
            onChange={changeName}
          />
        </div>
        <div>
          <label className="font-ruda font-medium text-gray-700 pr-4">
            Title of thesis:
          </label>
          <input
            className="w-full px-4 py-2 rounded-md bg-gray-300"
            type="text"
            value={Title}
            onChange={changeTitle}
          />
        </div>
        <div>
          <label className="font-ruda font-medium text-gray-700 pr-4">
            Doctorate or Master's level:
          </label>
          <input
            className="w-full px-4 py-2 rounded-md bg-gray-300"
            type="text"
            value={Doctorate}
            onChange={changeDoctorate}
          />
        </div>
        <div>
          <label className="font-ruda font-medium text-gray-700 pr-4">
            Year of Completion:
          </label>
          <input
            className="w-full px-4 py-2 rounded-md bg-gray-300"
            type="text"
            value={Year}
            onChange={changeYear}
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
  const [year, setYear] = useState("");
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");
  const [place, setPlace] = useState("");

  const changeYear = (event) => {
    setYear(event.target.value);
  };
  const changeTitle = (event) => {
    setTitle(event.target.value);
  };
  const changeDuration = (event) => {
    setDuration(event.target.value);
  };
  const changePlace = (event) => {
    setPlace(event.target.value);
  };

  const transferValue = (event) => {
    event.preventDefault();
    const val = {
      year,
      title,
      duration,
      place,
    };
    props.func(val);
    clearState();
  };

  const clearState = () => {
    setYear("");
    setTitle("");
    setDuration("");
    setPlace("");
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

export {
  StudentForm,
  EmployeeForm,
  ProfessionalForm,
  MembershipForm,
  ConferenceForm,
  CourseForm,
  PostForm,
  TeachingExperienceForm,
  // DevelopmentForm,
};
