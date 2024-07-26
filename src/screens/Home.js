import React,{useEffect,useState} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'


export default function Home() {
  const [search,setSearch]=useState('');
  const[foodCat,setFoodCat]=useState([]);
  const[foodItem,setFoodItem]=useState([]);
  
  const loadData= async()=>{
    let response=await fetch("http://localhost:5000/api/foodData",{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      }
    });
    response=await response.json();

    setFoodItem(response[0]);
    setFoodCat(response[1]);
    /*console.log(response[0],response[1]);*/
  }
useEffect(()=>{
  loadData()
},[])



  return (
    <div>
        <div> <Navbar/> </div> 
         <div><div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{height: "100vh"}}>
                <div className="carousel-inner h-100" id='carousel'>
                    <div className="carousel-caption d-flex flex-column justify-content-center" style={{ zIndex: "9", top: "0", bottom: "0" }}>
                        <h1 className="display-4 fw-bold text-white mb-4">Delicious Food, Delivered to You</h1>
                        <div className="d-flex justify-content-center w-75 mx-auto">
                            <input className="form-control me-2 py-3" type="search" placeholder="Search for cuisine or dish..." aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}} />
                          {/* <button className="btn btn-success px-4" type="submit">Search</button>*/}
                        </div>
                    </div>
                    <div className="carousel-item active h-100">
                        <img src="/images/burger.jpg" className="d-block w-100 h-100" style={{ objectFit: "cover", filter: "brightness(50%)" }} alt="Pizza" />
                    </div>
                    <div className="carousel-item h-100">
                        <img src="/images/pastry.jpg" className="d-block w-100 h-100" style={{ objectFit: "cover", filter: "brightness(50%)" }} alt="Burger" />
                    </div>
                    <div className="carousel-item h-100">
                        <img src="/images/sushi.jpg" className="d-block w-100 h-100" style={{ objectFit: "cover", filter: "brightness(50%)" }} alt="Sushi" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
                </div>
        <div className='container'> 
        {
          foodCat !== []
          ? foodCat.map((data)=>{
              return(<div className='row mb-3'>
              <div key={data._id}className="fs-3 m-3">
                {data.CategoryName}
                </div>
                <hr />
                {foodItem !== [] 
                ?
                foodItem.filter((item)=>item.CategoryName === (data.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase()))) 
                .map(filterItems=>{
                  return (
                    <div key={filterItems._id} className="col-12 col-md-6 col-lg-3">
                      <Card foodItem={filterItems}
                      options={filterItems.options[0]}
                      
                      >
                      </Card>
                      </div>
                  )
                })
              :<div>No Such Data Found</div>}
                </div>
              )
          })
          : ""
        }
        </div>

        <div> <Footer/> </div>
    </div>
  )
}
