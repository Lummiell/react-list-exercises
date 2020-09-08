import React from 'react'
import { Link } from 'react-router-dom'

const Home = ()=>{
    return <><h1>Home</h1>
    <ol>
        <li>
            <Link to='/Sets'>Conjuntos</Link>
        </li>
        <li>Josephus</li>
        <li>Polinômios</li>
        <li>Jackpot</li>
    </ol>
    </>
}
export default Home;