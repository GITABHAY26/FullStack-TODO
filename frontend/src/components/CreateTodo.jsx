import { useState } from 'react'
export function CreateTodo(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return(
        <div>
            
           
            <input id="title"  type="text" placeholder="title"  onChange={(e)=>{const value = e.target.value;
            setTitle(e.target.value);}}/><br />
            <input id="description" type="text" placeholder="Description"  onChange={(e)=>{const value = e.target.value;
            setDescription(e.target.value);}}/><br />

            <button onClick={ () => {
                
                fetch("http://localhost:3000/todo",{
                    method : "POST",
                    body   : JSON.stringify({
                        title: title,
                        description: description
                    }),
                    
                    headers:{ "content-type": "application/json"}
                })
                .then(async function(res){
                const  json = await res.json();
                alert("ToDO added");
               }
               )}}>ADD TODO</button>
        </div>
    )


}