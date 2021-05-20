import React, { useState } from 'react'
import './AdminMode.css'

export default function AdminMode({isAdmin, toggleAdminMode}) {
    

    return (
        <div className="admin-mode"> 
            <article className={isAdmin ? "message is-danger":"message is-info"}>
            <div className="message-body">
                <button onClick={toggleAdminMode}
                    className={isAdmin ? "button is-danger": "button is-info"}>
                   {isAdmin ? 
                        "Désactiver le mode d'administration"
                     :  "Activer le mode d'administration"} 
                </button>
            </div>
            </article>
        </div>
    )
}
