import React, { useState} from "react";

const CreateNote = (props) => {
    const [Note, setNote] = useState({
        title: "",
        content: ""
    });

    const handleChange = (event) => {
        const {name, value} = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name] : value
            };
        });
    }

    return (
        <div>
            <form>
                <input onChange={handleChange} value={Note.title} name="title" placeholder="Title" />
                <textarea onChange={handleChange} value={Note.content} name="content" placeholder="Take a note..." rows="3" />
                <button
                    onClick={(event) => {
                        props.onAdd(Note);
                        event.preventDefault();
                        setNote({
                            title:"",
                            content:""
                        })
                    }}
                >
                Add
                </button>
            </form>
        </div>
    )
};

export default CreateNote;