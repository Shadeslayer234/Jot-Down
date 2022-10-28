import React from 'react'
import {MdDeleteForever} from 'react-icons/md'

const Note = ({id, text, deleteNote}) => {
    return (
        <div className="note">
            <div className="note__body">
                {text}
            </div>

            <div className="note__footer" style={{ justifyContent: "flex-end" }} onClick={() => deleteNote(id)}>
                <MdDeleteForever className='note__delete' aria-hidden='true'></MdDeleteForever>
            </div>
        </div>
    )
}

export default Note