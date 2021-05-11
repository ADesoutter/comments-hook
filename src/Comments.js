import React from 'react'
import AdminMode from './AdminMode'
import CommentForm from './CommentForm'
import CommentList from './CommentList'

export default function Comments() {
    return (
        <div className="comments">
            <AdminMode />
            <div className="columns">
                <div className="column">
                    <CommentForm />
                </div>
                <div className="column">
                    <CommentList />
                </div>
            </div>   
        </div>
    )
}
