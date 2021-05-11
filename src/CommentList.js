import React, {useState} from 'react'
import Comment from './Comment'

export default function CommentList() {
    const [comments, setComments] = useState([
        { name: "JB", message: "Youhou la famille!"},
        { name: "Kirikou", message: "Je ne suis pas grand mais je suis vaillant"}
    ])

    const commentsJSX = comments.map(comment => {
        return <Comment name={comment.name} message={comment.message} />
    })

    /* 
    commentsJSX, dedans y aura: 
    <Comment name="JB" message="Youhou la famille!" />
    <Comment name="Kirikou" message="Je ne suis pas grand mais je suis vaillant" />
    */


    return (
        <div>        
            <h1 className="title">Liste des commentaires ({comments.length})</h1>
            <ul className="comment-list">
                {commentsJSX}
            </ul>           
        </div>
    )
}
