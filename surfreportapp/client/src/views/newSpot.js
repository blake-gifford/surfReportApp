import React, { useState } from 'react';
import SpotForm from '../components/SpotForm';
import axios from 'axios'
import { navigate } from '@reach/router'

const initialErrors = {
    spotName: '',
    spotLongitude: '',
    spotLatitude: ''
}

const initialSpot = {
    spotName: '',
    spotLongitude: '',
    spotLatitude: ''
}

const NewSpot = props => {
    const [spot, setSpot] = useState(initialSpot)
    const [errors, setErrors] = useState(initialErrors)

    const changeHandler = e => {
        const { name, value } = e.target;
        setSpot({
            ...spot,
            [name]:value
        })
    }

    const submitHandler = e => {
        e.preventDefault();
        // useEffect(() => {
            axios.post('http://localhost:8000/api/create/spot', spot)
                .then(response => {
                const{message, results} = response.data;
                if(message === "success"){
                    navigate('/')
                }else{
                    const newErrors = {...initialErrors};
                    for(const key in results.errors){
                        newErrors[key] = results.errors[key].message;
                    }
                    setErrors(newErrors);
                }
            })
        // }, [])
    }

    return (
        <div className="page_background">
            <div className="center_page background">
                <h2>Create New Surf Spot!</h2>
                <SpotForm 
                    spot={spot}
                    errors={errors}
                    errors={errors}
                    submitHandler={submitHandler}
                    changeHandler={changeHandler}
                    action="Submit"
                />
            </div>
        </div>
    )
}

export default NewSpot
