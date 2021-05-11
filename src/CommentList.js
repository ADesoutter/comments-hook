import React from 'react'
import Comment from './Comment'

/*
comments: [
{ name: "JB", message: "Youhou la famille!"},
{ name: "Kirikou", message: "Je ne suis pas grand mais je suis vaillant"}
]
*/
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
