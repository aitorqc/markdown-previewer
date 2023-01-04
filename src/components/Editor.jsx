import React, { useEffect, useState } from 'react'

import Toolbar from './Toolbar'

export default function Editor({ setTextarea }) {
  const [icon, setIcon] = useState("fa-arrows-alt");
  const [editArea, setEditArea] = useState(`
# GFM

## Autolink literals
www.example.com, https://example.com, and contact@example.com.

## Footnote
A note[^1]
[^1]: Big note.

## Code Block
\`\`\`
// this is multi-line code:
function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

## Strikethrough
~one~ or ~~two~~ tildes.

## Bold
Or... wait for it... **_both!_**
    
## Table
| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |
    
## Tasklist   
* [ ] to do
* [x] done"
  
## Block quotes
> Block Quotes!

## Image
![](https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg)

## List
- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

`);

  useEffect(() => {
    setTextarea(editArea)
  }, [editArea])

  const handleResize = () => {
    document.querySelector(".editorWrap").classList.toggle("maximized");
    if (icon === "fa-arrows-alt") {
      setIcon("fa-compress");
    } else {
      setIcon("fa-arrows-alt");
    }
  }

  return (
    <div className="editorWrap">
      <Toolbar text={"Editor"} icon={icon} handleResize={handleResize} />
      <textarea
        id="editor"
        type="text"
        onChange={(e) => setEditArea(e.target.value)}
        value={editArea}>
      </textarea>
    </div>
  )
}
