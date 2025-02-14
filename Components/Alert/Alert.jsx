//Alert component to show alerts.

import styles from './Alert.module.css'

export default function Alert(props) {
  return (
    <div className={styles.alert}>
      <h1>{props.name}</h1>
    </div>
  );
}
