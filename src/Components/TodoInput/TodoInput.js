import React, { useState, useEffect } from 'react';
import './TodoInput.css'
import { IoAddCircle } from "react-icons/io5";
import { Button } from '@mui/material';
function TodoInput ( props ) {
    const [ input, setInput ] = useState( '' );
    const [ dateTime, setDateTime ] = useState( null );

    let today = new Date();
    let dateAndTime = 'Date :- ' + today.getFullYear() + '-' + ( today.getMonth() + 1 ) + '-' + today.getDate() + '  Time :-' + today.getHours() + ':' + ( today.getMinutes() + 1 ) + ':' + today.getSeconds();

    useEffect( () => {
        setDateTime( dateAndTime );
    }, [ dateAndTime ] );

    const handleChange = e => {
        setInput( e.target.value );
    };
    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit( {
            id: Math.floor( Math.random() * 100 ),
            text: input,
            dateTime: dateTime,
        } );
        setInput( '' );
    };

    return (

        <>
            <div className="container">
                <div id='main-add-div'>
                    <input
                        placeholder='Tell Me,What you Have to Do?'
                        value={ input }
                        onChange={ handleChange }
                        name='text'
                        className='todo-input-add'
                        autoComplete="off"
                        title='You can Enter Todo Title here'
                    />

                    <button className="embed-btn" onClick={ handleSubmit } variant="outlined" title="To add Todo,Click me">
                        <IoAddCircle /> Add Todo
                    </button>
                </div>

            </div>
        </>
    );
}

export default TodoInput;