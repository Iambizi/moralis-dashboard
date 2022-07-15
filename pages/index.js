import { useMoralis } from "react-moralis";
import styles from "../styles/Home.module.css";

export default function Home() {
  const {} = useMoralis();
  return (
    <div className={styles.container}>
      <h1>Wa gwan</h1>
    </div>
  );
}
