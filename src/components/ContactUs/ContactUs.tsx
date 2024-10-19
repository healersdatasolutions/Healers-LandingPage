"use client";

import React from "react";
import { Boxes } from "../../components/ui/background-boxes";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
// import Image from "next/image";

export function ContactUs() {
  return (
    <div className="relative">
      <div className="absolute opacity-70 mix-blend-color-dodge pointer-events-none">
        <div className="absolute -translate-y-[10%] -translate-x-[10%]  size-[18.85rem] lg:size-[48.85rem] animate-blob2">
          <img className="w-full opacity-100 rotate-[270deg]" src="/gradient.png" width={942} height={942} alt="" />
        </div>
      </div>
<p
        id="contactUs"
        className="mt-36 mb-10 z-10  whitespace-pre-wrap text-center text-3xl sm:text-5xl font-medium tracking-tighter text-black dark:text-white "
      >
        That&apos;s Healers For You
      </p>
    <div className="flex justify-center items-center pb-24">
      <div className="h-[60vh] max-w-6xl inset-0 left-0 right-0 relative w-[80%] bg-black overflow-hidden flex flex-col items-center justify-center rounded-lg">
        <div className="absolute inset-0 w-full h-full bg-background z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <Boxes />
        <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
          To know More Join Us
        </h1>
        <p className="text-center text-sm sm:text-base mt-2 mb-4 text-neutral-300 relative z-20">
          Get on early access to the latest updates.
        </p>
        
        <form className="z-30 flex flex-col sm:flex-row  gap-4 items-center max-w-sm mx-auto ">   
          <label htmlFor="email" className="sr-only">Search</label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"/>
              </svg>
            </div>
            <input 
              type="text" 
              id="email" 
              className="bg-gray-50 border-2 border-[#33afd1] text-zinc-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-zinc-900 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="Enter your email" 
              required 
            />
          </div>
          <Button className="px-5 bg-transparent border text-white border-white hover:bg-white hover:text-[#0A0F29] transition duration-500 rounded-full hover:-translate-y-2 ">
            Join Us
          </Button>
        </form>
      </div>
    </div>
    </div>
  );
}