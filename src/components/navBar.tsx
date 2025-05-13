import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="flex flex-row justify-between bg-transparent text-white p-4 w-full  absolute mb-20 top-0 left-0 z-10 p-10">
      <div className="basis-1/2 flex align-start">PAULFOLIO</div>
      <div className="basis-1/2 space-x-10 items-center flex flex-row">
        <Link className="text-white" to="/">About me</Link>
        <Link className="text-white" to="/">Resume</Link>
        <Link className="text-white" to="/">Education</Link>
      </div>
    </div>
  );
}
