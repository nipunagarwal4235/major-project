import React, { useState } from "react";
import Select from "react-select";
import HomePage2 from './NewPage'
import Header from './Header'

const options = [
  { value: "Mechanical", label: "Mechanical" },
  { value: "Electrical", label: "Electrical" },
  { value: "Computer Science", label: "Computer Science" },
];

function HomePage() {
  const [postAppliedFor, setPostAppliedFor] = useState("");
  const [department, setDepartment] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [nationality, setNationality] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [presentAddress, setPresentAddress] = useState("");
  const [permanentAddress, setPermanentAddress] = useState("");
  const [designation, setDesignation] = useState("");
  const [organization, setOrganization] = useState("");
  const [dateOfJoining, setDateOfJoining] = useState("");
  const [scaleOfPay, setScaleOfPay] = useState("");
  const [totalEmoluments, setTotalEmoluments] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the form data to the server
  };
  return (
    <>
    <Header/>
      <h1>Employment Application Form</h1>
      <p>
        BML Munjal University (BMU), founded in 2014 by the promoters of the
        Hero Group of Industries, is a fully residential and co-educational
        university spread over a sprawling, green campus in the suburbs of Delhi
        with state-of-the-art infrastructure and facilities. Currently the
        University comprises four schools: School of Engineering & Technology,
        School of Management, School of Economics & Commerce, and School of Law,
        which offer undergraduate, postgraduate and Ph.D. programs in various
        specializations of business administration, commerce, economics, law,
        mathematics, science, engineering, and technology.{" "}
      </p>
      <h2> Application for appointment of Faculty Member </h2>
      {/* <form>
        <label
          for="UserEmail"
          class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
        >
          <input
            type="email"
            id="UserEmail"
            placeholder="Email"
            class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
          />

          <span class="absolute left-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
            Email
          </span>
        </label>
      </form> */}
      <form onSubmit={handleSubmit}>
        <div className="my-4">
          <label htmlFor="postAppliedFor" className="block font-medium">
            Post Applied For
          </label>
          <input
            type="text"
            id="postAppliedFor"
            className="w-full px-4 py-2 rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            value={postAppliedFor}
            onChange={(e) => setPostAppliedFor(e.target.value)}
          />
        </div>
        <div className="my-4">
          <label htmlFor="department" className="block font-medium">
            Department
          </label>
          <Select
            id="department"
            options={options}
            value={department}
            onChange={(selectedOption) => setDepartment(selectedOption)}
          />
        </div>
        <div className="my-4">
          <label htmlFor="firstName" className="block font-medium">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            className="w-full px-4 py-2 rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="my-4">
          <label htmlFor="middleName" className="block font-medium">
            Middle Name
          </label>
          <input
            type="text"
            id="middleName"
            className="w-full px-4 py-2 rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            value={middleName}
            onChange={(e) => setMiddleName(e.target.value)}
          />
        </div>
        <div className="my-4">
          <label htmlFor="lastName" className="block font-medium">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            className="w-full px-4 py-2 rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          ></input>
        </div>
        <div className="my-4">
          <label htmlFor="dob" className="block font-medium">
            Date of Birth
          </label>
          <input
            type="date"
            id="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
        <div className="my-4">
          <label htmlFor="maritalStatus" className="block font-medium">
            Marital Status
          </label>
          <input
            type="radio"
            id="single"
            name="maritalStatus"
            value="single"
            onChange={(e) => setMaritalStatus(e.target.value)}
          />
          <label htmlFor="single">Single</label>
          <input
            type="radio"
            id="married"
            name="maritalStatus"
            value="married"
            onChange={(e) => setMaritalStatus(e.target.value)}
          />
          <label htmlFor="married">Married</label>
        </div>
        <div className="my-4">
          <label htmlFor="nationality" className="block font-medium">
            Nationality
          </label>
          <input
            type="text"
            id="nationality"
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
          />
        </div>
        <div className="my-4">
          <label htmlFor="gender" className="block font-medium">
            Gender
          </label>
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            onChange={(e) => setGender(e.target.value)}
          ></input>
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            onChange={(e) => setGender(e.target.value)}
          ></input>
          <label htmlFor="female">Female</label>
          <input
            type="radio"
            id="other"
            name="gender"
            value="other"
            onChange={(e) => setGender(e.target.value)}
          ></input>
          <label htmlFor="female">Other</label>
        </div>
        <div className="my-4">
          <h4>Present Employment</h4>
          <label htmlFor="designation" className="block font-medium">
            Designation
            </label>
            <input type="text" id="designation" value={designation} onChange={(e) => setDesignation(e.target.value)} />
        </div>
        <label htmlFor="designation" className="block font-medium">
            Organisation
          </label>
            <div>
            <input type="text" id="designation" value={designation} onChange={(e) => setDesignation(e.target.value)} />
            </div>
            <div>
            <label htmlFor="dob" className="block font-medium">
            Date of Joining
          </label>
          <input
            type="date"
            id="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
        <div>
        <label htmlFor="designation" className="block font-medium">
            Scale of pay Rs
            </label>
            <input type="text" id="designation" value={designation} onChange={(e) => setDesignation(e.target.value)} />
         </div>
         <div>
          <label htmlFor="designation" className="block font-medium">
            Total Emoluments(per month) Rs
            </label>
            <input type="text" id="designation" value={designation} onChange={(e) => setDesignation(e.target.value)} />
          </div>
          <div className="my-4">
          <h4>Phone Number</h4>
          <label htmlFor="designation" className="block font-medium">
            Office
            </label>
            <input type="text" id="designation" value={designation} onChange={(e) => setDesignation(e.target.value)} />
        </div>
        <label htmlFor="designation" className="block font-medium">
            Mobile
            </label>
            <input type="text" id="designation" value={designation} onChange={(e) => setDesignation(e.target.value)} />
            <label htmlFor="designation" className="block font-medium">
            *Landline
            </label>
            <input type="text" id="designation" value={designation} onChange={(e) => setDesignation(e.target.value)} />
        <div>
        <label htmlFor="designation" className="block font-medium">
            Area of specialisation
            </label>
            <input type="text" id="designation" value={designation} onChange={(e) => setDesignation(e.target.value)} />
        </div>
        <div>
        <label htmlFor="designation" className="block font-medium">
            Current area of research
            </label>
            <input type="text" id="designation" value={designation} onChange={(e) => setDesignation(e.target.value)} />
        </div>
        <div className="my-4">
          <h4>Acadmic record starting with graduation</h4>
          </div>
                </form>
    <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
	
	<div className="overflow-x-auto">
		<table className="min-w-full text-xs">
			<colgroup>
      <col></col>
				<col></col>
				<col></col>
				<col></col>
				<col className="w-24"></col>
      </colgroup>
				
			<colgroup/>
			<thead className="dark:bg-gray-700">
				<tr className="text-left">
					<th className="p-3">Degree</th>
					<th className="p-3">College/University</th>
					<th className="p-3">Year of Joining</th>
					<th className="p-3">Year of leaving</th>
					<th className="p-3 text-right">Percentage/CGPA</th>
				</tr>
			</thead>
			<tbody>
				<tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
					<td className="p-3">
						<p>97412378923</p>
					</td>
					<td className="p-3">
						<p>Microsoft Corporation</p>
					</td>
					<td className="p-3">
						<p>14 Jan 2022</p>
						<p className="dark:text-gray-400">Friday</p>
					</td>
					<td className="p-3">
						<p>01 Feb 2022</p>
						<p className="dark:text-gray-400">Tuesday</p>
					</td>
					<td className="p-3 text-right">
						<p>$15,792</p>
					</td>
					
				</tr>
				<tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
					<td className="p-3">
						<p>97412378923</p>
					</td>
					<td className="p-3">
						<p>Tesla Inc.</p>
					</td>
					<td className="p-3">
						<p>14 Jan 2022</p>
						<p className="dark:text-gray-400">Friday</p>
					</td>
					<td className="p-3">
						<p>01 Feb 2022</p>
						<p className="dark:text-gray-400">Tuesday</p>
					</td>
					<td className="p-3 text-right">
						<p>$275</p>
					</td>
					<td className="p-3 text-right">
						
					</td>
				</tr>
				<tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
					<td className="p-3">
						<p>97412378923</p>
					</td>
					<td className="p-3">
						<p>Coca Cola co.</p>
					</td>
					<td className="p-3">
						<p>14 Jan 2022</p>
						<p className="dark:text-gray-400">Friday</p>
					</td>
					<td className="p-3">
						<p>01 Feb 2022</p>
						<p className="dark:text-gray-400">Tuesday</p>
					</td>
					<td className="p-3 text-right">
						<p>$8,950,500</p>
					</td>
					<td className="p-3 text-right">
						
					</td>
				</tr>
				<tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
					<td className="p-3">
						<p>97412378923</p>
					</td>
					<td className="p-3">
						<p>Nvidia Corporation</p>
					</td>
					<td className="p-3">
						<p>14 Jan 2022</p>
						<p className="dark:text-gray-400">Friday</p>
					</td>
					<td className="p-3">
						<p>01 Feb 2022</p>
						<p className="dark:text-gray-400">Tuesday</p>
					</td>
					<td className="p-3 text-right">
						<p>$98,218</p>
					</td>
					<td className="p-3 text-right">
						
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>
<div className="my-4">
          <h4>Employment:</h4>
          </div>
<div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
	
	<div className="overflow-x-auto">
		<table className="min-w-full text-xs">
			
      
			<thead className="dark:bg-gray-700">
				<tr className="text-left">
					<th className="p-3">Employer</th>
					<th className="p-3">Position Held</th>
					<th className="p-3">Date of Joining</th>
					<th className="p-3">Date of Leaving</th>
					<th className="p-3 text-right">Pay with scale of pay</th>
					
				</tr>
			</thead>
			<tbody>
				<tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
					<td className="p-3">
						<p>97412378923</p>
					</td>
					<td className="p-3">
						<p>Microsoft Corporation</p>
					</td>
					<td className="p-3">
						<p>14 Jan 2022</p>
						<p className="dark:text-gray-400">Friday</p>
					</td>
					<td className="p-3">
						<p>01 Feb 2022</p>
						<p className="dark:text-gray-400">Tuesday</p>
					</td>
					<td className="p-3 text-right">
						<p>$15,792</p>
					</td>
					<td className="p-3 text-right">
						
					</td>
				</tr>
				<tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
					<td className="p-3">
						<p>97412378923</p>
					</td>
					<td className="p-3">
						<p>Tesla Inc.</p>
					</td>
					<td className="p-3">
						<p>14 Jan 2022</p>
						<p className="dark:text-gray-400">Friday</p>
					</td>
					<td className="p-3">
						<p>01 Feb 2022</p>
						<p className="dark:text-gray-400">Tuesday</p>
					</td>
					<td className="p-3 text-right">
						<p>$275</p>
					</td>
					<td className="p-3 text-right">
						
					</td>
				</tr>
				<tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
					<td className="p-3">
						<p>97412378923</p>
					</td>
					<td className="p-3">
						<p>Coca Cola co.</p>
					</td>
					<td className="p-3">
						<p>14 Jan 2022</p>
						<p className="dark:text-gray-400">Friday</p>
					</td>
					<td className="p-3">
						<p>01 Feb 2022</p>
						<p className="dark:text-gray-400">Tuesday</p>
					</td>
					<td className="p-3 text-right">
						<p>$8,950,500</p>
					</td>
					<td className="p-3 text-right">
						
					</td>
				</tr>
				<tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
					<td className="p-3">
						<p>97412378923</p>
					</td>
					<td className="p-3">
						<p>Nvidia Corporation</p>
					</td>
					<td className="p-3">
						<p>14 Jan 2022</p>
						<p className="dark:text-gray-400">Friday</p>
					</td>
					<td className="p-3">
						<p>01 Feb 2022</p>
						<p className="dark:text-gray-400">Tuesday</p>
					</td>
					<td className="p-3 text-right">
						<p>$98,218</p>
					</td>
					<td className="p-3 text-right">
						
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>
<div className="my-4">
          <h4>Professional Training/Certification Required</h4>
          </div>
          <div class="overflow-x-auto rounded-lg border border-gray-200">
  <table class="min-w-full divide-y-2 divide-gray-200 text-sm">
    <thead>
      <tr>
        <th
          class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
        >
          Year
        </th>
        <th
          class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
        >
          Nature of Training
        </th>
        <th
          class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
        >
          Duration
        </th>
        <th
          class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
        >
          Organization of Training
        </th>
      </tr>
    </thead>

    <tbody class="divide-y divide-gray-200">
      <tr>
        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          John Doe
        </td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">Web Developer</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">$120,000</td>
      </tr>

      <tr>
        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          Jane Doe
        </td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">04/11/1980</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">Web Designer</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">$100,000</td>
      </tr>

      <tr>
        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          Gary Barlow
        </td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">Singer</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">$20,000</td>
      </tr>
    </tbody>
  </table>
</div>
<div className="my-4">
          <h4>Membership of Professional societies/bodies </h4>
          </div>
          <div class="overflow-x-auto rounded-lg border border-gray-200">
  <table class="min-w-full divide-y-2 divide-gray-200 text-sm">
    <thead>
      <tr>
        <th
          class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
        >
          Name of the Body
        </th>
        <th
          class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
        >
          Status of Membership
        </th>
        
      </tr>
    </thead>

    <tbody class="divide-y divide-gray-200">
      <tr>
        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          John Doe
        </td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
        
      </tr>

      <tr>
        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          Jane Doe
        </td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">04/11/1980</td>
        
      </tr>

      <tr>
        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          Gary Barlow
        </td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
        
      </tr>
    </tbody>
  </table>
</div>
<div className="my-4">
          <h4>Key Confrences/Seminars/Workshop Attended</h4>
          </div>
<div>
          <table class="min-w-full divide-y-2 divide-gray-200 text-sm">
    <thead>
      <tr>
        <th
          class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
        >
          Year
        </th>
        <th
          class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
        >
          Conference/Seminar Attended
        </th>
        <th
          class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
        >
          Title of paper read(if any)
        </th>
        
      </tr>
    </thead>

    <tbody class="divide-y divide-gray-200">
      <tr>
        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          John Doe
        </td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">Web Developer</td>
        
      </tr>

      <tr>
        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          Jane Doe
        </td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">04/11/1980</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">Web Designer</td>
        
      </tr>

      <tr>
        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          Gary Barlow
        </td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">Singer</td>
        
      </tr>
    </tbody>
  </table>
</div>
<div className="my-4">
          <h4>Statement of Purpose</h4>
          </div>
          <div>
    

    <textarea placeholder="a.please indicate why do you want to join BMU?\n
b.How do you meet the job requirements?\n
c.A description on which research teaching development programmer you would like to undertake and the course you would like to teach at UG and PG levels/ ." class="block  mt-2 w-full  placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"></textarea>
</div>
<div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
  <input
    class="relative float-left -ml-[1.4rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] cursor-none appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] indeterminate:border-primary indeterminate:bg-primary indeterminate:after:absolute indeterminate:after:ml-[0.2rem] indeterminate:after:mt-[6px] indeterminate:after:w-[0.5rem] indeterminate:after:border-[0.125rem] indeterminate:after:border-l-0 indeterminate:after:border-t-0 indeterminate:after:border-solid indeterminate:after:border-white hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:indeterminate:border-primary dark:indeterminate:bg-primary"
    type="checkbox"
    value=""
    id="flexCheckIndeterminate" />
  <label
    class="inline-block pl-[0.15rem] hover:cursor-pointer"
    for="flexCheckIndeterminate">
    I hereby acknowledge the fact that I have read all the instructions carefully and is attaching all my perrsonal details in the best of knowledge and belief.
  </label>
</div>
<HomePage2/>

<button type="button" className="px-8 py-3 font-semibold rounded dark:bg-red-100 dark:text-gray-800">NEXT PAGE</button>



    </>
    
  );
}

export default HomePage;
