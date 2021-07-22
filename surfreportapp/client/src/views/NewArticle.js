import React, { useState } from 'react';
import ArticleForm from '../components/ArticleForm';
import axios from 'axios'
import { navigate } from '@reach/router'

const initialErrors = {
    articleName: '',
    link: ''
}

const initialArticle = {
    articleName: '',
    link: ''
}

const NewArticle = props => {  
    const [article, setArticle] = useState(initialArticle)
    const [errors, setErrors] = useState(initialErrors)



    // http://localhost:8000/api/create/article

    const changeHandler = e => {
        const { name, value } = e.target;
        setArticle({
            ...article,
            [name]:value
        })
    }

    const submitHandler = e => {
        e.preventDefault();
        // useEffect(() => {
            axios.post('http://localhost:8000/api/create/article', article)
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
                <ArticleForm 
                    article={article}
                    errors={errors}
                    submitHandler={submitHandler}
                    changeHandler={changeHandler}
                    action="Submit"
                />
            </div>
        </div>
    )
}

export default NewArticle
