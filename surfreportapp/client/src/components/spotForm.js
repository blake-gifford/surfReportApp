import React,{ useState, useEffect } from 'react'
import { navigate } from '@reach/router';

const SpotForm = props => {

    const { submitHandler, changeHandler, spot, errors, action } = props;

    return (
        <div>
            <form onSubmit={ submitHandler }>
                <p>
                    {errors.spotName ?
                        <span>{errors.spotName}<br></br></span>
                        :
                        ""
                    }
                    <label htmlFor="spotName">Spot Name:</label>
                    <input type="text" name="spotName" onChange={changeHandler} />
                </p>
                <p>
                    {errors.spotLongitude ?
                        <span>{errors.spotLongitude}<br></br></span>
                        :
                        ""
                    }
                    <label htmlFor="spotLongitude">Spot Longitude:</label>
                    <input type="number" name="spotLongitude" onChange={changeHandler} />
                </p>
                <p>
                    {errors.spotLatitude ?
                        <span>{errors.spotLatitude}<br></br></span>
                        :
                        ""
                    }
                    <label htmlFor="spotLatitude">Spot Latitude:</label>
                    <input type="number" name="spotLatitude" onChange={changeHandler} />
                </p>
                <p>
                    <input type="button" className="col-sm-2" value="Cancel" onClick={ () => navigate('/') } />
                    <input type="submit" className="col-sm-2" value={action} onClick={ () => navigate('/') }/>
                </p>
            </form>
        </div>
    )
}

export default SpotForm
