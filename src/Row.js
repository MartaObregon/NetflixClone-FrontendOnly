import React, { useEffect, useState } from 'react'
import instance from './axios';
import './Row.css'

const base_url = "https://image.tmdb.org/t/p/original/"

function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        async function fetchData() {
            const request = await instance.get(fetchUrl);
            console.log(request.data)
            setMovies(request.data.results)
            return request;
            
        }
        
        fetchData()
    }, [])

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
        
            {
                movies.map((item)=>( 
                        <img
                        key={item.id}  className={`row_poster ${isLargeRow && "row_posterLarge"}`} src={`${base_url}${isLargeRow? item.poster_path : item.backdrop_path}`}alt={item.path}/>

                
                ))
            }  
            </div>
            

            {/* container */}
        </div>
    )
}

export default Row
