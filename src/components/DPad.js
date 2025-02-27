'use client'
import styles from "./DPad.module.css";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaChevronUp, FaChevronDown } from "react-icons/fa";

const DPad = ({ setLeftSpeed, setRightSpeed, setUpSpeed, setDownSpeed }) => {
    const [leftClicked, setLeftClicked] = useState(false)
    const [rightClicked, setRightClicked] = useState(false)
    const [upClicked, setUpClicked] = useState(false)
    const [downClicked, setDownClicked] = useState(false)

    useEffect(() => {
        if (leftClicked) {
            setLeftSpeed(prevSpeed => prevSpeed + 1 <= 5 ? prevSpeed + 1 : 5)
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
            setRightSpeed(prevSpeed => prevSpeed + 1 <= 5 ? prevSpeed + 1 : 5)
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
            setUpSpeed(prevSpeed => prevSpeed + 1 <= 5 ? prevSpeed + 1 : 5)
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
            setDownSpeed(prevSpeed => prevSpeed + 1 <= 5 ? prevSpeed + 1 : 5)
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
                <div className={styles.chevronContainer} >
                    <FaChevronLeft color="white" />
                </div>
            </div>
            <div 
                className={styles.rightContainer} 
                onTouchStart={() => setRightClicked(true)}
                onTouchEnd={() => setRightClicked(false)}
                onMouseDown={() => setRightClicked(true)}
                onMouseUp={() => setRightClicked(false)}
            >
                <div className={styles.chevronContainer} >
                    <FaChevronRight color="white" />
                </div>
            </div>
            <div 
                className={styles.upContainer} 
                onTouchStart={() => setUpClicked(true)}
                onTouchEnd={() => setUpClicked(false)}
                onMouseDown={() => setUpClicked(true)}
                onMouseUp={() => setUpClicked(false)}
            >
                <div className={styles.chevronContainer} >
                    <FaChevronUp color="white" />
                </div>
            </div>
            <div 
                className={styles.downContainer} 
                onTouchStart={() => setDownClicked(true)}
                onTouchEnd={() => setDownClicked(false)}
                onMouseDown={() => setDownClicked(true)}
                onMouseUp={() => setDownClicked(false)}
            >
                <div className={styles.chevronContainer} >
                    <FaChevronDown color="white" />
                </div>
            </div>
            <div className={styles.centerContainer} />
        </div>
    )
}

export default DPad;