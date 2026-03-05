 

 'use client'
 import { useState } from "react";

export default function InitialPage() {
 

  const [title, setTitle]=useState("");
  const [question,setQuestion]=useState("");
  const [titleDone,setTitleDone]=useState(false);
  

  function ChangeState(e: React.FormEvent<HTMLFormElement>){
e.preventDefault();
     
    setTitleDone(true);
  }

  return (
          
<section className=" flex flex-col rounded-2xl border-3  p-[5vw]  ; ">
        <h2 className='sm:text-center  text-5xl' >
          Welcome to MindMap!!
          </h2>

            <form onSubmit={ChangeState} 
               className="flex flex-col  p-10 items-center">

<h2>MindMap Title:</h2>

<input 
className={`w-100 m-5! border-2 rounded-lg p-4 ${titleDone? "hidden": ""}`} 
    type="text" 
placeholder="Put the title of your MindMap"
value={title} 
onChange={(e) => setTitle(e.target.value)}

/>
 {titleDone? <div>{title}</div>:""}
<textarea rows={4} cols={50} 
placeholder="What do you want to learn today?"
className={`w-100 m-1! border-2 rounded-lg p-5${titleDone? "hidden": ""}`}
value={question}
onChange={(e) => setQuestion(e.target.value)}
>
  
</textarea>

<button type="submit" 
className={`border border-gray-700 animate-border-glow  m-5! shadow-lg shadow-blue-500/50 flex justify-center rounded-2xl w-70 p-2 ${titleDone? "hidden": ""}`} >Submit</button>
                    </form>


          </section>

  );
}
