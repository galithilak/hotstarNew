import { useState,useEffect } from "react";

const Favourites = (props) => {
    let title = props.date
    let [favourites,setFav] = useState([])
    let handleDelete = (id)=>{
        setFav(favourites.filter( x => x.id != id ))
    }
    useEffect( ()=>{
        fetch('http://localhost:4000/favourites')
        .then(res =>{
            return res.json()
        })
        .then( dte =>{
            setFav(dte)
        })
    } ,[] )
    return ( 
        <div className="fav">

            <h1>{title}</h1>

            { favourites.map( (dte)=>{
                return (

                    <div className="list">
                        <h2>{dte.title}</h2>
                        <div className="allign">
                            <img height={150} width={250} src={dte.img} alt="" />
                            <div>
                                <p>{dte.genre}</p>
                                <p>{dte.language}</p>
                                <p>{dte.rating}</p>
                                <button onClick={()=>handleDelete(dte.id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                    
                )
            })}
        </div>
     );
}
 
export default Favourites;