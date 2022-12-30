import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const AddExercisePage = () => {

    const [name, setName]      = useState('');
    const [reps, setReps]      = useState('');
    const [weight, setWeight]  = useState('');
    const [unit, setUnit]      = useState('kg');
    const [date, setDate]      = useState('');
    
    const history = useHistory();

    const addExercise = async () => {
        const newExercise = { name, reps, weight, unit, date};
        const response = await fetch('https://burn-buddy.herokuapp.com/exercises', {
            method: 'post',
            body: JSON.stringify(newExercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert("Successfully added the exercise!");
        } else {
            alert(`Failed to add exercise, status code = ${response.status}`);
        }
        history.push("/");
    };


    return (
        <>
        <article>
            <h2>Add to the collection</h2>
            <p>Must fill out all fields below</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Which exercise are you adding?</legend>

                    <label htmlFor="name">Exercise name</label>
                    <input
                        type="text"
                        required
                        placeholder="i.e. Pickleball"
                        value={name}
                        onChange={e => setName(e.target.value)} 
                        id="name" />

                    <label htmlFor="reps">Reps</label>
                    <input
                        type="number"
                        required
                        placeholder="i.e. 3"
                        value={reps}
                        onChange={e => setReps(e.target.value)} 
                        id="reps" />

                    <label htmlFor="weight">Weight</label>
                    <input
                        type="number"
                        required
                        placeholder="i.e. 20"
                        value={weight}
                        onChange={e => setWeight(e.target.value)} 
                        id="weight" />   

                    <label htmlFor="unit">Unit</label>
                    <select
                        type="text"
                        required
                        placeholder="unit"
                        value={unit}
                        onChange={e => setUnit(e.target.value)} 
                        id="unit" >
                            <option value="kg" >kg</option>
                            <option value="lb">lbs</option>
                            <option value="miles">miles</option>
                    </select>          
                    
                    <label htmlFor="date">Date Exercised</label>
                    <input
                        type="date"
                        required
                        value={date}
                        onChange={e => setDate(e.target.value)} 
                        id="date" />

                    <label htmlFor="submit">
                    <button
                        type="submit"
                        onClick={addExercise}
                        id="submit"
                    >Add</button> to the collection</label>
                </fieldset>
                </form>
            </article>
        </>
    );
}

export default AddExercisePage;