  import {useState , useEffect} from 'react'
import './App.css'    

const URL = "https://restcountries.com/v3.1/all"
function App() {
  const [countries,setCountries] = useState([])
  const [countriesSelected , setCountriesSelected] = useState([])
  const [statusOptions ,setStatusOptions] = useState({statusA:false,statusB:false,statusC:false,statusD:false})
  


  useEffect(()=>{
    const getCountries = async()=>{
      const response = await fetch(URL)
      const res = await response.json()
      setCountries(res)
    }
    getCountries()
    //obteniendo un array con 4 paises diferentes
  },[])

 
  
  useEffect(()=>{
    
    setCountriesSelected([])
      //FALTA PONER UN CONDICIONAL PARA QUE NO TOQUEN PAISES REPETIDOS ,PUEDE SER PONERLOS EN UN SET O CON UN FOR COMPARAR     
       let auxArray = []
      
        while(auxArray.length<4){
          auxArray = [ countries[Math.floor(Math.random()*countries.length)],...auxArray]  
                 }
          setCountriesSelected(auxArray)
          console.log(countriesSelected)
      
       


    } ,[statusOptions])
     
    

   const clicOptionA = ()=>{
    setStatusOptions({statusA:true,statusB:false,statusC:false,statusD:false})
    
   }

   const clicOptionB = ()=>{
    setStatusOptions({statusA:false,statusB:true,statusC:false,statusD:false})
    console.log('option B choosed')
   }
   const clicOptionC = ()=>{
    setStatusOptions({statusA:false,statusB:false,statusC:true,statusD:false})
    console.log('option C choosed')
   }
   const clicOptionD = ()=>{
    setStatusOptions({statusA:false,statusB:false,statusC:false,statusD:true})
    console.log('option D choosed')
   }


  return (
    
    <>

    {/*AL INTENTAR ACCEDER A LAS PROPIEDADES DE LOS PAISES ME APARECIA EL ERROR >CANNOT ACCESS PROPERTIES OF
       UNDEFINED CADA VEZ QUE RECARGABA LA PAGINA,     PARA SOLUCIONARLO  TUVE QUE AGREGAR EL OPERADOR '?'
      ANTES DE QUERER ACCEDER A ESA PROPIEDAD */}
      
      
      { Array.isArray(countriesSelected)
           ?  <section>
           <strong>COUNTRY QUIZ</strong>
            <p><strong>{countriesSelected[Math.floor(Math.random()*4)]?.capital[0]}</strong> ES LA CAPITAL DE :</p>
            <br/>
            
            <button
            className='OPCION A'
            onClick={clicOptionA}
            >OPTION A : {countriesSelected[0]?.name?.common}
             </button>
     
             <br/>
            
             <button
             className='OPCION B'
             onClick={clicOptionB}
               >OPTION B : {countriesSelected[1]?.name?.common}
               </button>
             <br/>
     
             <button
             className='OPCION C'
             onClick={clicOptionC}
             >OPTION C : {countriesSelected[2]?.name?.common}</button>
             <br/>
             
             <button  className='OPCION D' 
               onClick={clicOptionD}
               >OPTION D : {countriesSelected[3]?.name?.common}</button><br/>
               <br/> 
               <br/>
               <button className='next'>NEXT QUESTION</button>
               </section>
           
           
           
           : 'LOADING....'   }
           
      

          </>
  )
}

export default App
