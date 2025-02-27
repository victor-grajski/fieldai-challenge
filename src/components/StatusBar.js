import styles from "./StatusBar.module.css";

const StatusBar = ({ leftSpeed, rightSpeed, upSpeed, downSpeed }) => {
    return (
        <div className={styles.container}>
            <div>Left: {leftSpeed}</div>
            <div>Right: {rightSpeed}</div>
            <div>Up: {upSpeed}</div>
            <div>Down: {downSpeed}</div>
        </div>
    )
}

export default StatusBar;