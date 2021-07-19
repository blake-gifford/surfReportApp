import React,{ useState, useEffect } from 'react'
import { navigate } from '@reach/router';

const ArticleForm = props => {
    const { submitHandler, changeHandler, article, errors, action } = props;

    return (
        <div>
            <form onSubmit={ submitHandler }>
                <p>
                    {errors.articleName ?
                        <span>{errors.articleName}<br></br></span>
                        :
                        ""
                    }
                    <label htmlFor="articleName">Article Name:</label>
                    <input type="text" name="articleName" onChange={changeHandler} />
                </p>
                <p>
                    {errors.link ?
                        <span>{errors.link}<br></br></span>
                        :
                        ""
                    }
                    <label htmlFor="link">Link:</label>
                    <input type="text" name="link" onChange={changeHandler} />
                </p>
                <p>
                    <input type="button" className="col-sm-1" value="Cancel" onClick={ () => navigate('/') } />
                    <input type="submit" className="col-sm-1" value={action} onClick={ () => navigate('/') }/>
                </p>
            </form>
        </div>
    )
}

export default ArticleForm
