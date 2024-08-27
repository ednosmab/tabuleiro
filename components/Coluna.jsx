import Quadrado from "@/components/Quadrado"


function gerarColuna(cor){
    let colunas = []
    for (let index = 0; index < 8; index++) {
        if(cor % 2 == 0){
            colunas.push(<div key={index}>
                <Quadrado cor={index % 2 == 0 ? "par" : "impar"}/>
            </div>)
        }else{
            colunas.push(<div key={index}>
                <Quadrado cor={index % 2 == 1 ? "par" : "impar"}/>
            </div>)
        }
    }
    
    return colunas
}

export default function Coluna(props){  
    return (
        <div className="coluna">
            {gerarColuna(props.cor)}
        </div>
    )
}