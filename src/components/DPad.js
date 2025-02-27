'use client'
import styles from "./DPad.module.css";
import { useEffect, useState } from "react";

const DPad = ({ setLeftSpeed, setRightSpeed, setUpSpeed, setDownSpeed }) => {
    const [leftClicked, setLeftClicked] = useState(false)

    useEffect(() => {
        if (leftClicked) {
            const intervalId = setInterval(() => {
                setLeftSpeed(prevSpeed => prevSpeed + 10)
            }, 1000)

            return () => clearInterval(intervalId)
        } else {
            setLeftSpeed(0)
        }
    }, [leftClicked])
    
    // every second, increase speed
    // const handleLeft = (e) => {
    //     e.preventDefault()

    //     setInterval
    // }

    // const handleRight = (e) => {
    //     e.preventDefault()

    // }

    // const handleUp = (e) => {
    //     e.preventDefault()

    // }

    // const handleDown = (e) => {
    //     e.preventDefault()

    // }

    return (
        <div className={styles.container}>
            <div 
                className={styles.leftContainer} 
                onTouchStart={() => setLeftClicked(true)}
                onTouchEnd={() => setLeftClicked(false)}
                onMouseDown={() => setLeftClicked(true)}
                onMouseUp={() => setLeftClicked(false)}
            >
                Left
            </div>
            <div 
                className={styles.rightContainer} 
                onTouchStart={(e) => handleRight(e)}
                // onClick={(e) => handleRight(e)}
            >
                Right
            </div>
            <div 
                className={styles.upContainer} 
                onTouchStart={(e) => handleUp(e)}
                // onClick={(e) => handleUp(e)}
            >
                Up
            </div>
            <div 
                className={styles.downContainer} 
                onTouchStart={(e) => handleDown(e)}
                // onClick={(e) => handleDown(e)}
            >
                Down
            </div>
        </div>
    )
}

export default DPad;