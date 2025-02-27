'use client'

import { useState } from "react";
import "./globals.css";
import DPad from '../components/DPad'
import StatusBar from "@/components/StatusBar";

export default function RootLayout() {
  const [leftSpeed, setLeftSpeed] = useState(0)
  const [rightSpeed, setRightSpeed] = useState(0)
  const [upSpeed, setUpSpeed] = useState(0)
  const [downSpeed, setDownSpeed] = useState(0)

  return (
    <html lang="en">
      <body>
        <div className="container">
          <StatusBar leftSpeed={leftSpeed} rightSpeed={rightSpeed} upSpeed={upSpeed} downSpeed={downSpeed} />
          <DPad setLeftSpeed={setLeftSpeed} setRightSpeed={setRightSpeed} setUpSpeed={setUpSpeed} setDownSpeed={setDownSpeed} />
        </div>
      </body>
    </html>
  );
}
