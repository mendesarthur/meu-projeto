import styles from "./frase.module.css"

function Frase() {
    return (
      <div className={styles.fraseContainer}>
        <p className={styles.fraseContent}>Este componente é apenas uma frase!</p>
      </div>
    );
  }
  
  export default Frase;