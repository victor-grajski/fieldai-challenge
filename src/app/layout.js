'use client'

import { useState } from "react";
import "./globals.css";
import DPad from '../components/DPad'

export default function RootLayout({ children }) {
  const [leftSpeed, setLeftSpeed] = useState(0)
  const [rightSpeed, setRightSpeed] = useState(0)
  const [upSpeed, setUpSpeed] = useState(0)
  const [downSpeed, setDownSpeed] = useState(0)

  return (
    <html lang="en">
      <body className="container">
        <p>Left: {leftSpeed}</p>
        <p>Right: {rightSpeed}</p>
        <p>Up: {upSpeed}</p>
        <p>Down: {downSpeed}</p>
        <DPad setLeftSpeed={setLeftSpeed} setRightSpeed={setRightSpeed} setUpSpeed={setUpSpeed} setDownSpeed={setDownSpeed} />
        {/* {children} */}
      </body>
    </html>
  );
}
