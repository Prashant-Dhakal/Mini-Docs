import React, { useRef, useState } from 'react'
import Note from './components/Note'
import Form from './components/Form';

const App = () => {
  const [note, setnote] = useState([]);
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  
  const certainArea = useRef(null);

  const todoCreate = (newTitle, newDescription) =>{
    setnote([...note,{title: newTitle, desc: newDescription}]);
  };

  return (
    <>
     <div ref={certainArea} className='w-full h-screen bg-zinc-800 overflow-hidden'>
      <Form
      title={title}
      desc={desc}
      setTitle={settitle}
      setDesc={setdesc}
      createFn={todoCreate}
      />
     <Note notes={note} area={certainArea}/>
     </div>
    </>
  )
}

export default App