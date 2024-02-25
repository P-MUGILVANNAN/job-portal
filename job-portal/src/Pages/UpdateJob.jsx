import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useLoaderData, useParams } from 'react-router-dom'
import CreatableSelect from "react-select/creatable"

const UpdateJob = () => {
    const {id} = useParams();
    // console.log(id);
    const {_id,jobTitle,companyName,minPrice,maxPrice,salaryType,jobLocation,postingDate,experienceLevel,
    companyLogo,employmentType,description,postedBy,skills} = useLoaderData()

    const [selectedOption,setSelectedOption]=useState(null);
  const {
    register,
    handleSubmit,reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.skills=selectedOption;
    // console.log(data);
    fetch(`http://localhost:4000/update-job/${id}`,{
      method:"PATCH",
      headers:{
        'content-Type':'application/json'},
        body:JSON.stringify(data)
    }).then(res=>res.json()).then((result)=>{
      console.log(result);
      if(result.acknowledged === true){
        alert("Job updated successfully!")
        window.location.reload();
      }
      reset()
    })
  };
  const options=[
    {value:"JavaScript",label:"JavaScript"},
    {value:"HTML",label:"HTML"},
    {value:"CSS",label:"CSS"},
    {value:"React",label:"React"},
    {value:"Node",label:"Node"},
    {value:"MongoDb",label:"MongoDb"},
    {value:"Redux",label:"Redux"},
    {value:"Java",label:"Java"},
  ];
  return (
    <div className="max-w-screen-2x1 container mx-auto xl:px-24 px-4">
      {/* form */}
      <div className="bg-[#FAFAFA] py-10 px-4 lg:px-16">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* first row */}

          <div className="create-job-flex">
            <div className=" lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Title</label>
              <input
                type="text"
                defaultValue={jobTitle}
                {...register("jobTitle")}
                className="create-job-input"
              />
            </div>
            <div className=" lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company Name</label>
              <input
                type="text"
                placeholder="Ex: Microsoft"
                defaultValue={companyName}
                {...register("companyName")}
                className="create-job-input"
              />
            </div>
          </div>
          {/* second row */}

          <div className="create-job-flex">
            <div className=" lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Minimum Salary</label>
              <input
                type="text"
                placeholder="$20k"
                defaultValue={minPrice}
                {...register("minPrice")}
                className="create-job-input"
              />
            </div>
            <div className=" lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Maximum Salary</label>
              <input
                type="text"
                placeholder="$120k"
                defaultValue={maxPrice}
                {...register("maxPrice")}
                className="create-job-input"
              />
            </div>
          </div>

          {/* third row */}

          <div className="create-job-flex">
            <div className=" lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Salary Type</label>
              <select {...register("salaryType")} className="create-job-input">
                <option value={salaryType}>{salaryType}</option>
                <option value="Hourly">Hourly</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>
            <div className=" lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Location</label>
              <input
                type="text"
                placeholder="Ex: New York"
                defaultValue={jobLocation}
                {...register("jobLocation")}
                className="create-job-input"
              />
            </div>
          </div>

          {/*fourth row  */}

          <div className="create-job-flex">
            <div className=" lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Posting Date</label>
              <input
                type="date"
                placeholder="Ex: 2024-01-13"
                defaultValue={postingDate}
                {...register("postingDate")}
                className="create-job-input"
              />
            </div>
            <div className=" lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Experience Level</label>
              <select {...register("experienceLevel")} className="create-job-input">
                <option value={experienceLevel}>{experienceLevel}</option>
                <option value="NoExperience">Fresher</option>
                <option value="Internship">Internship</option>
                <option value="Work remotely">Work remotely</option>
              </select>
            </div>
          </div>

          {/* fifth row */}

          <div>
            <label className="block mb-2 text-lg">Required Skill Sets:</label>
            <CreatableSelect className="create-job-input py-4" defaultValue={skills}
             onChange={setSelectedOption} 
             options={options}
             isMulti
            />
          </div>

          {/* sixth row */}
          <div className="create-job-flex">
            <div className=" lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company Logo</label>
              <input
                type="url"
                placeholder="Paste your company logo URL: https://infosys.com/img1"
                defaultValue={companyLogo}
                {...register("companyLogo")}
                className="create-job-input"
              />
            </div>
            <div className=" lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Employment Type</label>
              <select {...register("employmentType")} className="create-job-input">
                <option value={employmentType}>{employmentType}</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Temporary">Temporary</option>
              </select>
            </div>
          </div>

          {/* seventh row */}
          <div className="w-full">
          <label className="block mb-2 text-lg">Job Description</label>
          <textarea className=" w-full pl-3 py-1.5 focus:outline-none placeholder:text-gray-700" rows={6} defaultValue={description} placeholder="Job description" {...register("description")}/>
          </div>

            {/* last row */}
            <div className="w-full">
                <label className="block mb-2 text-lg">Job Posted By</label>
                <input
                type="email"
                placeholder="your email"
                defaultValue={postedBy}
                {...register("postedBy")}
                className="create-job-input"
              />
            </div>

          <input
            type="submit"
            className="block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer"
          />
        </form>
      </div>
    </div>
  )
}

export default UpdateJob
