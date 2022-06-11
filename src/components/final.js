import  { React, useState } from 'react'



const Home=()=> {
  
const[Finaldata,setFinaldata]=useState()

async  function OnClickHandler() {

  const Country=document.getElementById('textfield').value
  
     try {

        let data= await fetch(`https://restcountries.com/v3.1/name/${Country}?fullText=true`)
        if (!data.ok) {
           alert('Please Enter Valid Name')
        }
        setFinaldata(await data.json())
        console.log()
        
      
        //,
        // , 
        //  , Finaldata[0].map , 
        //   

    } catch (error) {
      console.log(error)
     
    }}

    
    return (


    <div className='container'>
    <h1  style={{textAlign:'center',width:'100%'}}>Enter CountryName for Details</h1>
      <div className="d-flex" method='post'  >
   <input className="form-control me-3"  name='textfield' id='textfield' type="search" placeholder="Search for Country" aria-label="Search"/>
   <button className="btn btn-outline-success" type="submit" onClick={OnClickHandler} >Search</button>
      </div>

     
     {Finaldata && Finaldata.length>0 && <div className='align-items-cente' style={{marginTop:'25px'}}>
      <div className="card h-100 d-flex align-items-center justify-content-center" style={{marginLeft:'35%',width: '20rem'}}>
         <img  src={Finaldata[0].flags.png} style={{height:'330px',width:'330px'}} className="card-img-top" alt="flagimg"/>
         <div className="card-body">
         <ul className="list-group list-group-flush">
    <li className="list-group-item"><b>Country : </b>{Finaldata[0].name.common}</li>
    <li className="list-group-item"><b>Capital : </b>{Finaldata[0].capital[0]}</li>
    <li className="list-group-item"><b>unMember : </b>{JSON.stringify(Finaldata[0].unMember)==='true'?'Yes':'No'}</li>
    <li className="list-group-item"><b>Region : </b>{Finaldata[0].region}</li>
    <li className="list-group-item"><b>subRegions : </b>{Finaldata[0].subregion}</li>
    <li className="list-group-item"><b>Languages : </b>{JSON.stringify(Finaldata[0].languages)}</li>
    <li className="list-group-item"><b>Currency : </b>{JSON.stringify(Finaldata[0].currencies)}</li>
    <li className="list-group-item"><b>Borders : </b>{JSON.stringify(Finaldata[0].borders)}</li>
    <li className="list-group-item"><b>Area : </b>{Finaldata[0].area +'sqkms'}</li>
    <li className="list-group-item"><b>Population : </b>{Finaldata[0].population}</li>
    <li className="list-group-item"><b>Continent : </b>{Finaldata[0].continents[0]}</li>
    <li className="list-group-item"><b>Timezone : </b>{Finaldata[0].timezones[0]}</li>
    <a rel="noopener noreferrer" href={Finaldata[0].maps.googleMaps} target={"_blank"} className="btn btn-primary">Google Map</a>
  </ul>
    </div>
    <p></p>
      </div>
     </div> }



   </div>


     
  )
}

export default Home