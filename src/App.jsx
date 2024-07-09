
import './App.css'
import Datos from './Datos'
function App() {
 const alumnos=[
  {
    nombre:'Lucario',
    imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png',
    tipo:'Acero/Lucha'
    
  },
  {
    nombre:'Nidoking',
    imagen:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png',
    tipo:'Tierra/Veneno'
  },
  {
    nombre:'Pikachu',
    imagen:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    tipo:'Electrico'
  },
{
  nombre:'Garchomp',
  imagen:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/445.png',
  tipo:'Dragon/Tierra'
},
{
 nombre: 'Gyarados',
  imagen:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png',
  tipo:'Agua/Volador',
},
{
  nombre:'Zoroark',
  imagen:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/571.png',
  tipo:'Siniestro'
}
 ]

  return (
   <Datos alumnos={alumnos}/>
  )
}

export default App
