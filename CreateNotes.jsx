import React, { useState } from "react";

const CreateNotes = (props) => {
    const [note, setNote] = useState({title:"",content:"",});

    const InputEvent = (event) => {

       const name = event.target.name;
       const value = event.target.value;

        setNote((oldData) => {
            return(
                {
                ...oldData,
                [name]:value,
                });

        
        });

        console.log(note);

    };

    const addElement = ()=>{
        props.passNote(note);
        setNote({title:"",content:"",})

    }


    return (
        <>
            <div className="main-div">
                <div className="center-div">
                    <form>
                        <input
                            type="text"
                            value={note.title}
                            name = "title"
                            onChange={InputEvent}
                            placeholder="Title"
                            autoComplete="off" />
                        <textarea
                            name="content"
                            value={note.content}
                            onChange={InputEvent}
                            cols="" rows=""
                            placeholder="Write notes..">

                        </textarea>
                        <button className="btn" type="button" onClick={addElement}>+</button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default CreateNotes;