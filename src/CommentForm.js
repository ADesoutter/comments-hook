import React from 'react'

export default function CommentForm() {
    return (
        <div>
            <h1 className="title">Ajouter un commentaire</h1>
            <form className="commentform">
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input className="input" type="text" placeholder="Your name" value=""/>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Message</label>
                  <div className="control">
                    <textarea className="textarea" placeholder="Your comment"></textarea>
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <button className="button is-primary">Envoyer</button>
                  </div>
                </div>
              </form>
        </div>
    )
}
