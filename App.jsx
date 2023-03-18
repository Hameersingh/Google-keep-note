import React, { useState } from "react";
import './index.css'
import Header from "./Header";
import Footer from "./Footer";
import CreateNotes from "./CreateNotes";
import Note from "./Note";


const App = ()=>{
    const [addItem,setAddItem] = useState([]);
    const addNote = (note)=>{
        setAddItem((oldData)=>{
            return[...oldData,note]
        })
        console.log(note)
    }
    const onDelete = (id)=>{
        setAddItem((oldData)=>
        oldData.filter((currentData,indx)=>{
        return indx!=id})
        )

    }
    return (
        <>
        <Header/>
        <CreateNotes 
        passNote = {addNote}
        />
       { addItem.map((val,index)=>{
            return <div className="center-note"><Note
            key = {index}
            id = {index}
            title = {val.title}
            content = {val.content}
            deleteItem = {onDelete}
            />
            </div>
        })}
        <Footer/>
        </>
    )
}

export default App;