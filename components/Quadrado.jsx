import styles from "@/css/quadrado.module.css"

export default function quadrado(props) {
    let cor = props.cor == "par" ? styles.par : styles.impar
    
    return <div className={[styles.quadrado, cor].join(" ")}></div>
}