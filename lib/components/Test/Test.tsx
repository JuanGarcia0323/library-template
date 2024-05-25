import styles from "./styles.module.css";
export const Test = ({ name }: { name: string }) => {
  return <div className={styles.test}>Hello {name}!!!</div>;
};
