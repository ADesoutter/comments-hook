import React from 'react'
import Comment from './Comment'

export default function CommentList() {
    return (
        <div>        
            <h1 className="title">Liste des commentaires (0)</h1>
            <ul className="comment-list">
                <Comment/>
                <Comment/>
            </ul>           
        </div>
    )
}
