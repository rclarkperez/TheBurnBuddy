import React from 'react';
import { MdDeleteForever, MdEdit } from 'react-icons/md';

function Exercise({ exercise, onEdit, onDelete }) {
    return (
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.unit}</td>
            <td>{exercise.date.toLocaleString('en-US', {timeZone: 'UTC'}).substring(0, 10)}</td>
            <td ><MdDeleteForever onClick={() => onDelete(exercise._id)} id='reactIcon'/></td>
            <td><MdEdit onClick={() => onEdit(exercise)} id='reactIcon'/></td>
        </tr>
    );
}

export default Exercise;