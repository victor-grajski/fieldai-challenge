import styles from "./page.module.css";
import DPad from '../components/DPad'

export default function Home() {
  return (
    <div className={styles.container}>
      <DPad />
    </div>
  );
}
