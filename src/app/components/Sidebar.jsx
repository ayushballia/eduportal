"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Icons can be imported from a library like react-icons
import {
  FaCheckCircle,
  FaUserCircle,
  FaBriefcase,
  FaGraduationCap,
  FaListAlt,
} from "react-icons/fa";

const Sidebar = () => {
  const router = useRouter();

  return (
    <div className="w-1/4 bg-white p-4 rounded-[15px] h-max shadow-md">
      <p className="text-[20px] leading-[20px] font-bold mb-4">
        Setup Progress
      </p>
      <ul className="space-y-4 px-4">
        <li className="flex items-center">
          <FaUserCircle className="mr-2" />
          <Link
            href="/"
            className={
              router.pathname === "/"
                ? "text-blue-500 font-bold"
                : "text-gray-700"
            }
          >
            Basic Information
          </Link>
        </li>
        <li className="flex items-center">
          <FaBriefcase className="mr-2" />
          <Link
            href="/"
            className={
              router.pathname === "/"
                ? "text-blue-500 font-bold"
                : "text-gray-700"
            }
          >
            Work Experience
          </Link>
        </li>
        <li className="flex items-center">
          <FaGraduationCap className="mr-2" />
          <Link
            href="/step2"
            className={
              router.pathname === "/step2"
                ? "text-blue-500 font-bold"
                : "text-gray-700"
            }
          >
            Qualification
          </Link>
        </li>
        <li className="flex items-center">
          <FaListAlt className="mr-2" />
          <Link
            href="/step3"
            className={
              router.pathname === "/step3"
                ? "text-blue-500 font-bold"
                : "text-gray-700"
            }
          >
            Preference
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
