function Conteudo({children}){
    return(
        <div className={styleContainer}>
            {/* propriedade para renderizar componentes filhos (h1,p, por exemplo) */}
            {children} 
        </div>
    )
}

const styleContainer = "mt-5 bg-white p-5 rounded shadow container"

export default Conteudo