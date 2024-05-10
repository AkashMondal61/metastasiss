"use client"
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import "./page.css"
export default function live(){
    const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
    return(
    <>
    <div className='video'>
        <div className='pic'>
    {
        hasWindow && <ReactPlayer controls url='https://www.youtube.com/live/zwR-q6h0zt8?si=QRDMEwm8txRZhvQG'
        className="new"/>
    }
    </div>
    {/* <ReactPlayer controls url='https://www.youtube.com/watch?v=LXb3EKWsInQ' /> */}
    </div>
    </>
    )
}