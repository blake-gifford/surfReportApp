import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { navigate, Link } from '@reach/router'

const Dashboard = props => {
    // const [spot, setSpot] = useState({
    //     spotName: '',
    //     spotLongitude: '',
    //     spotLatitude: ''
    // })
    // const [article, setArticle] = useState({
    //     articleName: '',
    //     link: ''
    // })
    const [spot, setSpot] = useState([]);
    const [article, setArticle] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/articles')
            .then(response=> setArticle(response.data.results))
            .catch(err => console.log(err))
            // console.log(response.data.results)
        axios.get('http://localhost:8000/api/spots')
            .then(response=> setSpot(response.data.results))
            .catch(err => console.log(err))
            console.log(spot.spotName)
    }, [])

    return (
        <div className="App">
            {
            spot.map((spot, i) =>
                <div key={i}>
                    <div class="row">
                        <div class="col-sm-3">
                            <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">{spot.spotName}</h5>
                                <p class="card-text">Find forecasting data below!</p>
                                <a href="#" class="btn btn-primary">The Report</a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
            }
            {
            article.map((article, i) =>
                <div key={i}>
                <div class="row">
                    <div class="col-sm-3">
                        <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">{article.articleName}</h5>
                            <p class="card-text">Check out This Surf Article</p>
                            <a href="{article.link}" class="btn btn-primary">Read!</a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            )
            }
        </div>
    )
}

export default Dashboard
