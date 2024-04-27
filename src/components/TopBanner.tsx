"use client"

import React from 'react'
import { Rasa } from "next/font/google";

const rasa = Rasa({weight: "400", subsets: ["latin"]});

export default function TopBanner() {
  return (
    <div className={`bg-black inset-x-0 top-0 z-30 -mt-2 pt-2 w-full ${rasa.className}`}>
        <p className='text-center mx-auto w-full p-1 text-[#B9B9B9] text-2xl'>
            ROVER 1984 SUMMER COLLECTION ‘24 COMING SOON
        </p>
    </div>
  )
}
