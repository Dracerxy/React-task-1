import React, { useState } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
function Wordcount(){
    const [text, setText] = useState('');
    const [Count, setCount] = useState(0);
    const countwords = (e) => {
        const inputText = e.target.value;
        const words = inputText.trim().split(/\s+/).filter((word) => word !== '');
        setText(inputText);
        setCount(words.length);
      };
    return(
        <div class="container mt-5 col-5 border bg-white">
        <h1 class="mt-3">Responsive Paragraph Word Counter</h1>
        <textarea class="container mr-2 ml-2 mt-3" id="txtcount" onChange={countwords} value={text}>
        </textarea>
        <h5 id="count" class="text-start mt-4">Word Count :- {Count}</h5>
        </div>
    )
}
export default Wordcount;