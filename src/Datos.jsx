function Datos(props){
    return(
        <div className="datos-container">
            {
              props.alumnos.map((datospoke)=>(
                <div>
                    <h1>{datospoke.nombre}</h1>
                    <h1 src={'assets/partyCancelNarrow.png'}>{datospoke.tipo}</h1>
                    <img src={datospoke.imagen}></img>
                </div>    

              ))     
            }
        </div>
       
    )
}
export default Datos;