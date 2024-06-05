"use client";
import Image from "next/image";
import React, { useState } from "react";
import EmployerLogo from "../../images/tableImage/Employers Logo.png";
import mappinIcon from "../../images/tableImage/mappin.png";
import checkIcon from "../../images/tableImage/Check.png";
import left from "../../images/tableImage/fi_arrow-left.png";
import right from "../../images/tableImage/fi_arrow-right.png";

const jobs = [
  {
    title: "Professor",
    company: "GL Bajaj College of Engineering",
    location: "Gr. Noida, Uttar Pradesh",
    salary: "₹40,000-₹50,000",
    dateApplied: "Dec 7, 2019 23:26",
    status: "Active",
    statusIcon: checkIcon,
    statusColor: "#0BA02C",
  },
  {
    title: "Assistant Professor",
    company: "GL Bajaj College of Engineering",
    location: "Gr. Noida, Uttar Pradesh",
    salary: "₹40,000-₹50,000",
    dateApplied: "Dec 7, 2019 23:26",
    status: "Active",
    statusIcon: checkIcon,
    statusColor: "#0BA02C",
  },
  {
    title: "Assistant Professor",
    company: "GL Bajaj College of Engineering",
    location: "Gr. Noida, Uttar Pradesh",
    salary: "₹40,000-₹50,000",
    dateApplied: "Dec 7, 2019 23:26",
    status: "Active",
    statusIcon: checkIcon,
    statusColor: "#0BA02C",
  },
  {
    title: "Assistant Professor",
    company: "GL Bajaj College of Engineering",
    location: "Gr. Noida, Uttar Pradesh",
    salary: "₹40,000-₹50,000",
    dateApplied: "Dec 7, 2019 23:26",
    status: "Active",
    statusIcon: checkIcon,
    statusColor: "#0BA02C",
  },
  {
    title: "Assistant Professor",
    company: "GL Bajaj College of Engineering",
    location: "Gr. Noida, Uttar Pradesh",
    salary: "₹40,000-₹50,000",
    dateApplied: "Dec 7, 2019 23:26",
    status: "Active",
    statusIcon: checkIcon,
    statusColor: "#0BA02C",
  },
  {
    title: "Assistant Professor",
    company: "GL Bajaj College of Engineering",
    location: "Gr. Noida, Uttar Pradesh",
    salary: "₹40,000-₹50,000",
    dateApplied: "Dec 7, 2019 23:26",
    status: "Active",
    statusIcon: checkIcon,
    statusColor: "#0BA02C",
  },
  {
    title: "Assistant Professor",
    company: "GL Bajaj College of Engineering",
    location: "Gr. Noida, Uttar Pradesh",
    salary: "₹40,000-₹50,000",
    dateApplied: "Dec 7, 2019 23:26",
    status: "Active",
    statusIcon: checkIcon,
    statusColor: "#0BA02C",
  },
  {
    title: "Assistant Professor",
    company: "GL Bajaj College of Engineering",
    location: "Gr. Noida, Uttar Pradesh",
    salary: "₹40,000-₹50,000",
    dateApplied: "Dec 7, 2019 23:26",
    status: "Active",
    statusIcon: checkIcon,
    statusColor: "#0BA02C",
  },
  {
    title: "Assistant Professor",
    company: "GL Bajaj College of Engineering",
    location: "Gr. Noida, Uttar Pradesh",
    salary: "₹40,000-₹50,000",
    dateApplied: "Dec 7, 2019 23:26",
    status: "Active",
    statusIcon: checkIcon,
    statusColor: "#0BA02C",
  },
  {
    title: "Assistant Professor",
    company: "GL Bajaj College of Engineering",
    location: "Gr. Noida, Uttar Pradesh",
    salary: "₹40,000-₹50,000",
    dateApplied: "Dec 7, 2019 23:26",
    status: "Active",
    statusIcon: checkIcon,
    statusColor: "#0BA02C",
  },
  {
    title: "Assistant Professor",
    company: "GL Bajaj College of Engineering",
    location: "Gr. Noida, Uttar Pradesh",
    salary: "₹40,000-₹50,000",
    dateApplied: "Dec 7, 2019 23:26",
    status: "Active",
    statusIcon: checkIcon,
    statusColor: "#0BA02C",
  },
  {
    title: "Assistant Professor",
    company: "GL Bajaj College of Engineering",
    location: "Gr. Noida, Uttar Pradesh",
    salary: "₹40,000-₹50,000",
    dateApplied: "Dec 7, 2019 23:26",
    status: "Active",
    statusIcon: checkIcon,
    statusColor: "#0BA02C",
  },
  {
    title: "Assistant Professor",
    company: "GL Bajaj College of Engineering",
    location: "Gr. Noida, Uttar Pradesh",
    salary: "₹40,000-₹50,000",
    dateApplied: "Dec 7, 2019 23:26",
    status: "Active",
    statusIcon: checkIcon,
    statusColor: "#0BA02C",
  },
  {
    title: "Assistant Professor",
    company: "GL Bajaj College of Engineering",
    location: "Gr. Noida, Uttar Pradesh",
    salary: "₹40,000-₹50,000",
    dateApplied: "Dec 7, 2019 23:26",
    status: "Active",
    statusIcon: checkIcon,
    statusColor: "#0BA02C",
  },
  {
    title: "Assistant Professor",
    company: "GL Bajaj College of Engineering",
    location: "Gr. Noida, Uttar Pradesh",
    salary: "₹40,000-₹50,000",
    dateApplied: "Dec 7, 2019 23:26",
    status: "Active",
    statusIcon: checkIcon,
    statusColor: "#0BA02C",
  },
  {
    title: "Assistant Professor",
    company: "GL Bajaj College of Engineering",
    location: "Gr. Noida, Uttar Pradesh",
    salary: "₹40,000-₹50,000",
    dateApplied: "Dec 7, 2019 23:26",
    status: "Active",
    statusIcon: checkIcon,
    statusColor: "#0BA02C",
  },
  {
    title: "Assistant Professor",
    company: "GL Bajaj College of Engineering",
    location: "Gr. Noida, Uttar Pradesh",
    salary: "₹40,000-₹50,000",
    dateApplied: "Dec 7, 2019 23:26",
    status: "Active",
    statusIcon: checkIcon,
    statusColor: "#0BA02C",
  },
  {
    title: "Assistant Professor",
    company: "GL Bajaj College of Engineering",
    location: "Gr. Noida, Uttar Pradesh",
    salary: "₹40,000-₹50,000",
    dateApplied: "Dec 7, 2019 23:26",
    status: "Active",
    statusIcon: checkIcon,
    statusColor: "#0BA02C",
  },
  {
    title: "Assistant Professor",
    company: "GL Bajaj College of Engineering",
    location: "Gr. Noida, Uttar Pradesh",
    salary: "₹40,000-₹50,000",
    dateApplied: "Dec 7, 2019 23:26",
    status: "Active",
    statusIcon: checkIcon,
    statusColor: "#0BA02C",
  },
  {
    title: "Assistant Professor",
    company: "GL Bajaj College of Engineering",
    location: "Gr. Noida, Uttar Pradesh",
    salary: "₹40,000-₹50,000",
    dateApplied: "Dec 7, 2019 23:26",
    status: "Active",
    statusIcon: checkIcon,
    statusColor: "#0BA02C",
  },
  {
    title: "Assistant Professor",
    company: "GL Bajaj College of Engineering",
    location: "Gr. Noida, Uttar Pradesh",
    salary: "₹40,000-₹50,000",
    dateApplied: "Dec 7, 2019 23:26",
    status: "Active",
    statusIcon: checkIcon,
    statusColor: "#0BA02C",
  },
  {
    title: "Assistant Professor",
    company: "GL Bajaj College of Engineering",
    location: "Gr. Noida, Uttar Pradesh",
    salary: "₹40,000-₹50,000",
    dateApplied: "Dec 7, 2019 23:26",
    status: "Active",
    statusIcon: checkIcon,
    statusColor: "#0BA02C",
  },
  // Add more job objects here as needed
];

const Table = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = jobs.slice(indexOfFirstRow, indexOfLastRow);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(jobs.length / rowsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full font-normal w-full text-left rtl:text-right ">
        <thead className="bg-[#F1F2F4]">
          <tr>
            <th className="px-5 py-2 text-[20px] font-normal text-[#232323]">
              Jobs
            </th>
            <th className="px-5 py-2 text-[20px] font-normal text-[#232323]">
              Date Applied
            </th>
            <th className="px-5 py-2 text-[20px] font-normal text-[#232323]">
              Status
            </th>
            <th className="px-5 py-2 text-[20px] font-normal text-[#232323]">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {currentRows.map((job, index) => (
            <tr key={index} className="border-b">
              <td className="px-5 py-2">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-[62px] h-[62px] bg-gray-100 rounded-[4px]">
                    <Image
                      src={EmployerLogo}
                      width={24}
                      height={24}
                      alt="Employer Logo"
                    />
                  </div>
                  <div className="flex gap-1 justify-center flex-col">
                    <h2 className="capitalize text-[14px] font-bold">
                      {job.title}
                    </h2>
                    <p className="text-[16px] font-normal">{job.company}</p>
                    <div className="flex gap-2 text-[14px] text-[#939AAD] mt-1">
                      <div className="flex gap-4">
                        <Image
                          src={mappinIcon}
                          width={20}
                          height={20}
                          alt="map icon"
                        />
                        <p>{job.location}</p>
                      </div>
                      <p>{job.salary}</p>
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-5 py-2 text-[14px] font-normal text-[#5E6670]">
                {job.dateApplied}
              </td>
              <td className="px-5 py-2">
                <div
                  className="flex h-full items-center gap-4 text-[14px] font-medium"
                  style={{ color: job.statusColor }}
                >
                  <Image
                    src={job.statusIcon}
                    width={16}
                    height={16}
                    alt="status Icon"
                  />
                  {job.status}
                </div>
              </td>
              <td className="px-5 py-2">
                <button className="capitalize bg-[#0A65CC] text-white rounded-[3px] px-[24px] py-[12px]">
                  view details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-4">
        <nav className="flex items-center space-x-1">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="px-2 py-1 text-gray-500 hover:text-gray-700 disabled:text-gray-300"
            disabled={currentPage === 1}
          >
            <Image src={left} width={24} height={24} alt="left icon" />
          </button>
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => setCurrentPage(number)}
              className={`px-2 py-1 ${
                number === currentPage
                  ? "bg-blue-500 text-white"
                  : "text-gray-700"
              } rounded-full`}
            >
              {number.toString().padStart(2, "0")}
            </button>
          ))}
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, pageNumbers.length))
            }
            className="px-2 py-1 text-gray-500 hover:text-gray-700 disabled:text-gray-300"
            disabled={currentPage === pageNumbers.length}
          >
            <Image src={right} width={24} height={24} alt="left icon" />
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Table;
