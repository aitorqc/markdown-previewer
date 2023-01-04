import React from 'react'

export default function Toolbar({ text, icon, handleResize }) {
  return (
    <div className="toolbar">
      <i className="fa fa-free-code-camp" title="no-stack-dub-sack"></i>
      {text}
      <i className={`fa ${icon}`} onClick={handleResize}></i>
    </div>
  )
}
