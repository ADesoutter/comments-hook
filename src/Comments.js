import React, {useState} from 'react'
import AdminMode from './AdminMode'
import CommentForm from './CommentForm'
import CommentList from './CommentList'

export default function Comments() {
    const [isAdmin, setIsAdmin] = useState(false)

    const toggleAdminMode = () => {
        // isAdmin ? setIsAdmin(false) : setIsAdmin(true);
        setIsAdmin(!isAdmin);
    }

    return (
        <div className="comments">
            <AdminMode isAdmin={isAdmin} toggleAdminMode={toggleAdminMode} />
            <div className="columns">
                <div className="column">
                    <CommentForm />
                </div>
                <div className="column">
                    <CommentList isAdmin={isAdmin} />
                </div>
            </div>   
        </div>
    )
}
