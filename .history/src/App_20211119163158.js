import React,{useState,useEffect} from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
const App=()=>{
  const[city,setCity]=useState([]);
  const [search,setSearch]=useState();
  useEffect(() => {

    const fetchApi=async()=>{

     const res=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b4769bbe9a42ca0e8de1f56e70704218`);
     const jsondata=await res.json();
     
     
     
     setCity(jsondata.main);
     console.log('city',city);
    
      

    }
    fetchApi();
  
  },[search])


  return (
    <>
    <div className="container-fluid  main_section">
      <div className='row'>
        <div className="col-md-10 mx-auto center_div mt-5">
           <h1>weather App</h1>
         <div className="weather-app d-flex justify-content-center align-items-center flex-column">
           <div className="input_box mt-5 text-center d-inline d-flex justify-content-center align-items-center">
           <input autoComplete="off" 
           placeholder="Enter the cit name..."
           value={search} onChange={(event)=>{setSearch(event.target.value)}} className="form-control me-2 text-center" type="search" placeholder="Enter the city name" aria-label="Search"/>
          

            <div>
           
            </div>
              

           </div>
           {city ? (<div className="info_box text-center">
               <h3>City :{search}</h3>
              <h2>Temp:{city?.temp} OC</h2>
               <h5>Max temp :{city?.temp_max}</h5>
               <h5>Min temp :{city?.temp_min}</h5>

           </div>):(
            <div className="info_box">
               <h3>City not found</h3>
             

           </div>
             
           )}
           
           


         </div>

          
        </div>

    </div>

    </div>

    </>
  )
}
export default App;
 

