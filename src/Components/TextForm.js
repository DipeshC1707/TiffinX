import React,{useState} from 'react'
export default function TextForm(props) {
    let [text, setText] = useState("");
    text=String(text);
  return (
    <div>
    <h3 style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</h3>
    <div className="mb-3">
    <label htmlFor="myBox" className="form-label" style={{color:props.mode==='dark'?'white':'black'}}>TextArea</label>
    <textarea className="form-control" value={text} onChange={(event)=>setText(event.target.value)} id="myBox" rows="8" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}></textarea>
    </div>
    <div>
    <button className='btn btn-outline-warning' onClick={()=>{setText(text.toUpperCase());props.showAlert("Converted To Uppercase","success")}}>Convert UC</button>
    </div>
    <p></p>
    <div>
    <button className='btn btn-outline-danger' onClick={()=>setText(text.toLowerCase())}>Convert LC</button>
    </div>
    <p></p>
    <div>
    <button className='btn btn-outline-primary' onClick={()=>setText("")}>Clear Text</button>
    </div>
    <div className='container my-2' style={{color:props.mode==='dark'?'white':'black'}}>
        <h3>Your Text Sumarry:</h3>
        <p>{text.split(" ").length} words {text.length} characters</p>
        <p>{0.008*(text.split(" ").length)} minutes</p>
        <h1>Preview</h1>
        <p>{text.length>0?text:"Write Something"}</p>
    </div>
    </div>
  )
}
