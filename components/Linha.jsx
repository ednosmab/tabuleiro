import Coluna from "./Coluna"

function gerarLinha(){
    let linhas = []
    for (let index = 0; index < 8; index++) {
        linhas.push(<div key={index}><Coluna cor={index}/></div>)
    }
    
    return linhas
}

export default function Linha(){
    return (
        <>
            {gerarLinha()}
        </>
    )
}