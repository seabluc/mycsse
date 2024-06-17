'use client'

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Courses() {
  const [core, setCore] = useState(false);
  const [elec, setElec] = useState(false);

  {/* Core Courses */ }
  const handleCore = () => {
    setCore(!core);
  }

  {/* IMPLEMENT IN useEffect()
    * if core === true, expand by rendering links to core courses
    * if elec === false, shrink core links
  */}
  useEffect(() => {
    console.log("core changed: " + core);
    return () => {
      console.log("return from resource (core) change");
    }
  }, [core])

  {/* Electives */ }
  const handleElec = () => {
    setElec(!elec);
  }
  {/* IMPLEMENT IN useEffect()
    * if elec === true, render links to elective courses
    * if elec === false, shrink accordingly
  */}
  useEffect(() => {
    console.log("elec changed: " + elec);
    return () => {
      console.log("return from resource (elec) change");
    }
  }, [elec])

  return (
    <>
      <h1 className="text-center p-4">mention what the CSSE degree is all about, provide links and watnot</h1>
      <div className="relative size-1/2">
        <div className="absolute top-8 left-2 border-4 border-double p-4">
          <p className="text-center pb-4">make this a sidebar where once<br />Core/Electives is clicked, it'll expand</p>
          <div className="flex flex-col items-center border-2 border-dashed">
            <button
              onClick={handleCore}
              className="border-2 p-1 m-2 size-fit">Core
            </button>
            <button
              onClick={handleElec}
              className="border-2 p-1 m-2 size-fit">Electives
            </button>
          </div>
        </div>
      </div>

      {/*
      <div className="flex flex-col size-1/2">
        <Link
          href="/courses/core"
          className="focus-within:bg-slate-500 hover:bg-slate-500 border-2 rounded-xl p-2"
        >Core
        </Link>
        <Link
          href="/courses/electives"
          className="focus-within:bg-slate-500 hover:bg-slate-500 border-2 rounded-xl p-2"
        >Electives
        </Link>
      </div>
      */}
      
    </>
  )
}