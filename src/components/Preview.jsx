import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function Preview({ textarea }) {
    return (
        <div id='preview'>
            <ReactMarkdown children={textarea} remarkPlugins={[remarkGfm]}/>
        </div>
    )
}
