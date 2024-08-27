import Linha from "@/components/Linha"
import Coluna from "@/components/Coluna"
import styles from "@/css/tabuleiro.module.css"
export default function tabuleiro(){
    return (
        <div className={styles.tabuleiro}>
            <Linha />
        </div>
    )
}