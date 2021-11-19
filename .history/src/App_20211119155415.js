import React,{useState,useEffect} from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
const App=()=>{
  const[city,setCity]=useState();
  const [search,setSearch]=useState('kolkata');
  useEffect(() => {

    const fetchApi=async()=>{

     const res=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b4769bbe9a42ca0e8de1f56e70704218`);
     const jsondata=await res.json();
     console.log('json data',jsondata.main)
     
     
     setCity([jsondata]);
     console.log('city',city)
      

    }
    fetchApi();
  
  },[search])


  return (
    <>
    <div className="container-fluid  main_section">
      <div className='row'>
        <div className="col-md-10 mx-auto center_div mt-5">
         <div className="weather-app d-flex justify-content-center align-items-center flex-column">
           <div className="input_box mt-5 text-center">
           <input value={search} onChange={(event)=>{setSearch(event.target.value)}} className="form-control me-2 text-center" type="search" placeholder="Enter the city name" aria-label="Search"/>
            <div>
            <button className="btn btn-success mt-2" type="submit">Search</button>

            </div>
              

           </div>
           <div className="info_box">
               <h3>{search}</h3>
              <h5>Temp:{city} oC</h5>
               <p>Max temp</p>
               <p>Min temp</p>

           </div>
           


         </div>

          
        </div>

    </div>

    </div>

    </>
  )
}
export default App;
 

