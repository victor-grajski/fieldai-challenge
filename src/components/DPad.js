'use client'
import styles from "./DPad.module.css";
import { useEffect, useState } from "react";

const DPad = ({ setLeftSpeed, setRightSpeed, setUpSpeed, setDownSpeed }) => {
    const [leftClicked, setLeftClicked] = useState(false)
    const [rightClicked, setRightClicked] = useState(false)
    const [upClicked, setUpClicked] = useState(false)
    const [downClicked, setDownClicked] = useState(false)

    useEffect(() => {
        if (leftClicked) {
            const intervalId = setInterval(() => {
                setLeftSpeed(prevSpeed => prevSpeed + 1 <= 5 ? prevSpeed + 1 : 5)
            }, 1000)

            return () => clearInterval(intervalId)
        } else {
            setLeftSpeed(0)
        }
    }, [leftClicked])
    
    useEffect(() => {
        if (rightClicked) {
            const intervalId = setInterval(() => {
                setRightSpeed(prevSpeed => prevSpeed + 1 <= 5 ? prevSpeed + 1 : 5)
            }, 1000)

            return () => clearInterval(intervalId)
        } else {
            setRightSpeed(0)
        }
    }, [rightClicked])

    useEffect(() => {
        if (upClicked) {
            const intervalId = setInterval(() => {
                setUpSpeed(prevSpeed => prevSpeed + 1 <= 5 ? prevSpeed + 1 : 5)
            }, 1000)

            return () => clearInterval(intervalId)
        } else {
            setUpSpeed(0)
        }
    }, [upClicked])

    useEffect(() => {
        if (downClicked) {
            const intervalId = setInterval(() => {
                setDownSpeed(prevSpeed => prevSpeed + 1 <= 5 ? prevSpeed + 1 : 5)
            }, 1000)

            return () => clearInterval(intervalId)
        } else {
            setDownSpeed(0)
        }
    }, [downClicked])

    return (
        <div className={styles.container}>
            <div 
                className={styles.leftContainer} 
                onTouchStart={() => setLeftClicked(true)}
                onTouchEnd={() => setLeftClicked(false)}
                onMouseDown={() => setLeftClicked(true)}
                onMouseUp={() => setLeftClicked(false)}
            >
            </div>
            <div 
                className={styles.rightContainer} 
                onTouchStart={() => setRightClicked(true)}
                onTouchEnd={() => setRightClicked(false)}
                onMouseDown={() => setRightClicked(true)}
                onMouseUp={() => setRightClicked(false)}
            >
            </div>
            <div 
                className={styles.upContainer} 
                onTouchStart={() => setUpClicked(true)}
                onTouchEnd={() => setUpClicked(false)}
                onMouseDown={() => setUpClicked(true)}
                onMouseUp={() => setUpClicked(false)}
            >
            </div>
            <div 
                className={styles.downContainer} 
                onTouchStart={() => setDownClicked(true)}
                onTouchEnd={() => setDownClicked(false)}
                onMouseDown={() => setDownClicked(true)}
                onMouseUp={() => setDownClicked(false)}
            >
            </div>
        </div>
    )
}

export default DPad;