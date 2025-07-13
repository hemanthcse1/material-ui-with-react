import { EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Placeholder from '@tiptap/extension-placeholder'
import './RichTextEditor.css'


const LargeTestEditor = ({
    content,
    onChange,
    placeholder = ''
}: {
    content: string
    onChange: (value: string) => void
    placeholder?: string
}) => {

    const editor = useEditor({
        extensions: [
            StarterKit,
            Placeholder.configure({
                placeholder,
            }),
        ],
        content,
        onUpdate: ({editor}) => {
            onChange(editor.getHTML())
        },
    })

    if(!editor) return null;
    return(
        <div className='large-editor'>
            <EditorContent editor={editor}></EditorContent>
        </div>
    )
}

export default LargeTestEditor;