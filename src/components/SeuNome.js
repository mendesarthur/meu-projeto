function SeuNome ({setNome }){
    return(
        <div>
            <p>Digite seu nome: </p>
            <input type="text" placeHolder="Qual é seu nome?" onChange={(e) => setNome(e.target.value)}/>
        </div>
    )
}

export default SeuNome;