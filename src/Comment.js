import React, {useState} from 'react';
import './Comment.css';

export default function Comment({id,name, body, isAdmin, comments, setComments}) {
    const deleteComment = () => {
        console.log(id);

        // Pour supprimer un commentaire
        // J'ai besoin de mon tableau d'avant 
        // J'ai besoin de la fonction qui va modifier ce tableau
        let newComments = comments.filter(comment => comment.id !== id)
        // newComments c'est mon tableau de commentaires
        // sauf celui qui a pour id celui qu'on vient de cliquer
        setComments(newComments);

    }
    return (
        <li>
            <strong>{name}</strong> 
            {isAdmin ? <button className="delete" 
                onClick={deleteComment}></button> : null}
            <br/>
            {body} 
        </li>
    )
}
