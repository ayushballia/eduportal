"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Links() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className=" flex gap-4 py-4 justify-center">
        <li>
          <Link
            className={`link ${
              pathname === "/" ? "text-blue-500 font-semibold" : ""
            }`}
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`link ${
              pathname === "/appliedJobs" ? "text-blue-500 font-semibold" : ""
            }`}
            href="/appliedJobs"
          >
            Applied Jobs
          </Link>
        </li>
        <li>
          <Link
            className={`link ${
              pathname === "/registering" ? "text-blue-500 font-semibold" : ""
            }`}
            href="/registering"
          >
            Registering
          </Link>
        </li>
        <li>
          <Link
            className={`link ${
              pathname === "/jobDescription" ? "text-blue-500 font-semibold" : ""
            }`}
            href="/jobDescription"
          >
            Job Description
          </Link>
        </li>
        <li>
          <Link
            className={`link ${
              pathname === "/profile-update/jobDetail" ? "text-blue-500 font-semibold" : ""
            }`}
            href="/profile-update/jobDetail"
          >
            Update Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
}
