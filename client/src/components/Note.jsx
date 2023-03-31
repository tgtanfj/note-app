import React, { useEffect } from 'react'
import { useState } from 'react'
import { ContentBlock, ContentState, convertFromHTML, convertToRaw, EditorState } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import { draftToHtml } from 'draftjs-to-html'
import { useLoaderData } from 'react-router-dom'

const Note = () => {

    const {note} = useLoaderData()

    console.log('check note: ', note)

    const [editorState, setEditorState] = useState(() => {
        return EditorState.createEmpty()
    })

    const [rawHTML, setRawHTML] = useState(note.content)

    const handleOnchange = (e) => {
        setEditorState(e)
        setRawHTML(draftToHtml(convertToRaw(e.getCurrentContent())))
    }

    useEffect(() => {
        const blocksFromHTML = convertFromHTML(note.content)
        const state = ContentState.createFromBlockArray(
            blocksFromHTML.contentBlocks,
            blocksFromHTML.entityMap
        )
        setEditorState(EditorState.createWithContent(state))
    }, [note.id])

    useEffect(() => {
        setRawHTML(note.content)
    }, [note.content])

    return (
        <Editor editorState={editorState}
            onEditorStateChange={handleOnchange}
            placeholder='Write some thing'
        >

        </Editor>
    )
}

export default Note