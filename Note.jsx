import React from "react";

const Note = (props) => {

    const deleteNote = ()=>{
        props.deleteItem(props.id);
    }
    return (
        <>
            <div className="center-note">
                <div className="main-note">
                    <h1>{props.title}</h1>
                    <p>{props.content}</p>
                    <button className="deleteIcon" onClick={deleteNote}>-</button>
                </div>
            </div>
        </>
    )
}

export default Note;