import fakeData from "../fakeData/index.js";
export const resolvers = {
    Query: {
        folders: () => { return fakeData.folders },
        folder: (parent, args) => {
            const folderId = args.folderId;
            return fakeData.folders.find(folder => folder.id === folderId)
        },
        note: (parent, args) => {
            const noteId = args.noteId
            return fakeData.notes.find(note => note.id === noteId)
        }
    },
    Folder: {
        author: (parent, args) => {
            console.log(authorId = parent.authorId)
            return fakeData.authors.find(author => author.id === authorId)
        },
        notes: (parent, args) => {
            return fakeData.notes.filter(note => note.folderId === parent.id)
        }
    }
}