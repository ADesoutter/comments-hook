import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function CommentForm({comments, setComments}) {
    const [name, setName] = useState("");
    const [msg, setMsg] = useState("");

    const getFormData = (e) => {
      e.preventDefault();
      let newComment = {
        id: uuidv4(),
        name: name,
        body: msg
      }

      //let arr = [2,45,17];
      //let arr2 = [...arr, 35]; // [2,45,17,35]

      let newComments = [...comments, newComment];
      setComments(newComments);
    }


    return (
        <div>
            <h1 className="title">Ajouter un commentaire</h1>
            <form className="commentform" onSubmit={getFormData}>
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input className="input" type="text" placeholder="Your name" 
                    value={name} onChange={e => setName(e.target.value)} />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Message</label>
                  <div className="control">
                    <textarea className="textarea" placeholder="Your comment"
                      value={msg} onChange={e => setMsg(e.target.value)} ></textarea>
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <input type="submit" className="button is-primary" value="Envoyer" />
                  </div>
                </div>
              </form>
        </div>
    )
}
