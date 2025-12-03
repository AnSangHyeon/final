'use client'

import { useState } from "react";
import {Roboto_Mono, Nanum_Pen_Script} from "next/font/google"
import "@/src/app/globals.css"
import BtnStatus from "./BtnStatus";

const geist = Roboto_Mono({
  subsets: ['latin'],
  weight: '400'
})
const geist2 = Nanum_Pen_Script({
  subsets: ['latin'],
  weight: '400'
})

export default function FinalButton() {
  const [num, setNum] = useState(0);
  // const [toggle, setToggle] = useState("off")
  const [toggle, setToggle] = useState<0 | "off">(0);

  return (
    <>
      <button onClick={() => setNum(num + 1)} className={`${geist.className} btnBackground`}>{num}</button><br />
      {/* <BtnStatus /> */}
    </>
  );
}