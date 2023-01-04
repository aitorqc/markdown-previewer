import React, { useState } from 'react'

import Preview from './Preview'
import Toolbar from './Toolbar'

export default function Previewer({textarea}) {
  const [icon, setIcon] = useState("fa-arrows-alt");

  const handleResize = () => {
    document.querySelector(".previewWrap").classList.toggle("maximized");
    if (icon === "fa-arrows-alt") {
      setIcon("fa-compress");
    } else {
      setIcon("fa-arrows-alt");
    }
  }

  return (
    <div className="previewWrap">
      <Toolbar text={"Previewer"} icon={icon} handleResize={handleResize} />
      <Preview textarea={textarea}/>
    </div>
  )
}
