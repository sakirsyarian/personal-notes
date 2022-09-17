import React from "react";
import NoteCard from './NoteCard';

function ActiveNode({ onDelete, onActive, notes }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10">
            {
                notes.map(note => (
                    <NoteCard changeButton="Arsip" key={note.id} onDelete={onDelete} buttonData={onActive} {...note} />
                ))
            }
        </div>
    )
}

export default ActiveNode;