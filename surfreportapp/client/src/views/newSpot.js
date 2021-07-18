import React, { useState } from 'react';
import articleForm from '../components/articleForm';

const newSpot = () => {
    return (
        <div>
            <articleForm 
                errors={errors}
                submitHandler={submitHandler}
                changeHandler={changeHandler}
            />
        </div>
    )
}

export default newSpot
