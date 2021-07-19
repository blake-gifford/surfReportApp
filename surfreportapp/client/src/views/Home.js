import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Home = props => {
    const [spot, setSpot] = useState();
    const [loc, setLoc] = useState();
    // const 

    // useEffect(() =>{
    //     axios.get('http://api.worldweatheronline.com/premium/v1/marine.ashx?key=de1dd0457dd8439a9b4171757211107&format=xml&q=45,-2')
    // })

    return (
        <div>
            <h1>Welcome Home</h1>
        </div>
    )
}

export default Home
