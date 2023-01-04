import React, { useState } from 'react'

import Editor from "./components/Editor";
import Previewer from "./components/Previewer";

function App() {
  const [textarea, setTextarea] = useState("");

  return (
    <div className="App">
      <Editor setTextarea={setTextarea} />
      <Previewer textarea={textarea} />
    </div>
  );
}

export default App;
