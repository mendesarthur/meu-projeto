import React from "react";
import styles from "./pessoa.module.css"
const Pessoa = ({nome, idade, profissao, foto}) =>{
    return(
        <div>
            <img src={foto} alt={nome} className={styles.foto}/>
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
        </div>
    )
}


export default Pessoa;