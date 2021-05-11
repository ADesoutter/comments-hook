import React from 'react'
import './AdminMode.css'

export default function AdminMode() {
    return (
        <div className="admin-mode"> 
            <article className="message is-info">
            <div className="message-body">
                <button className="button is-info">Activer le mode d'administration</button>
            </div>
            </article>
        </div>
    )
}
