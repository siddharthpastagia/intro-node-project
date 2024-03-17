import { insert, saveDB, getDB } from "./db.js";

export const newNote = async(note, tags) => {
    const newNoteDetails = {
        tags,
        content: note,
        id: Date.now()
    }
    await insert(newNoteDetails)
    return newNoteDetails
}

export const getAllNotes = async() => {
    const { notes } =  await getDB()
    return notes
}

export const findNotes = async(searchNote) => {
    const { notes } = await getDB()
    return notes.filter((note)=> note.content.toLowerCase().includes(searchNote.toLowerCase()))
}

export const removeNote = async(id) => {
    const {notes} = await getDB()
    const match = notes.find((note)=> note.id === id)
    if(match){
        const remainNotes = notes.filter((note)=>note?.id !== id)
        saveDB({notes: remainNotes})
        return id
    }
}

export const removeAllNotes = () => {
    return saveDB({notes:[]})
}