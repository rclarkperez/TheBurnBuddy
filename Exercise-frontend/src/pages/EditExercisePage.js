import React from 'react';
import { useHistory } from "react-router-dom";
import { useState } from 'react';

export const EditExercisePage = ({ exercise }) => {
 
    const [name, setName]      = useState(exercise.name);
    const [reps, setReps]      = useState(exercise.reps);
    const [weight, setWeight]  = useState(exercise.weight);
    const [unit, setUnit]      = useState(exercise.unit);
    const [date, setDate]      = useState(exercise.date.slice(0,10));

    const history = useHistory();

    const editExercise = async () => {
    const response = await fetch(`https://burn-buddy.herokuapp.com/exercises/${exercise._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                name:name,  
                reps: reps,
                weight: weight,
                unit: unit,
                date: date
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert("Successfully edited document!");
        } else {
            const errMessage = await response.json();
            alert(`Failed to update document. Status ${response.status}. ${errMessage.Error}`);
        }
        history.push("/");
    }
    //does not update page when attempting to save; throws error 
    return (
        <>
        <article>
            <h2>Edit a exercise in the collection</h2>
            <p>Paragraph about this page.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Which exercise are you editing?</legend>
                    <label htmlFor="name">Exercise name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)} 
                        id="name" />
                    

                    <label htmlFor="reps">Reps</label>
                    <input
                        type="number"
                        value={reps}
                        min ={1}
                        onChange={e => setReps(e.target.value)} 
                        id="reps" />

                    <label htmlFor="weight">Weight</label>
                    <input
                        type="number"
                        value={weight}
                        min ={1}
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
                            <option value="kg" 
                            >kg</option>
                            <option value="lb">lbs</option>
                            <option value="miles">miles</option>
                            </select>                        

                    <label htmlFor="date">Date recorded</label>
                    <input
                        type="date"
                        value={date}
                        onChange={e => setDate(e.target.value)} 
                        id="date" />

                    <label htmlFor="submit">
                    <button
                        onClick={editExercise}
                        id="submit"
                    >Save</button></label>
                </fieldset>
                </form>
            </article>
        </>
    );
}
export default EditExercisePage;