import React, { useState, useEffect } from 'react' 
import { db } from './db';

function Form(){
    const[name, setName] = useState('');
    const[message, setMessage] = useState('');
    
    

    const handleSubmit = (e) =>{
         e.preventDefault();
         let ted = db.ref('posts');
         let newName = ted.push();
         newName.set({
             name:name,
             post:message
         });
         retriveInfos();
         
    };

    function retriveInfos(){
      let ref = db.ref('posts');
      ref.on('value', gotData);
    }

    function gotData(data){

        let info = data.val();
        let keys = Object.keys(info);


        var x = document.querySelectorAll(".ted");
        for( let i=0 ; i < x.length ; i++){
          x[i].remove();
        };


        for( let i = 0; i<keys.length; i++ ){

            let k = keys[i];
            let name = info[k].name;
            let post = info[k].post;
             
         document.querySelector('#post').innerHTML  += `<div><p class = "ted"><b>${name}</b><br/><br/><strong class = "onlyPost" >SAYS :  ${post}</strong> 
         </p></div>`;
        
    };
    }

    retriveInfos();

    let relod = setInterval(rel,2600);

    function rel(){
      retriveInfos();
    }

    return <form onSubmit={handleSubmit} className="common">
    <h1>SAY YOUR'S</h1>
    
    <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='NAME'></input>
    <br />
    <br />
    <br />
    <br />
    <br />
    <textarea type='text' cols='23' placeholder='IDEA'  value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
    <br />
    <br />
    <br />
    <br />
    <br />
    <button type='submit'>POST</button>
   </form>
}

export default Form;