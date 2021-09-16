import React, {useState} from 'react';


export default function TextForm(props) {
    const [text,settext]= useState('');
    function handUpClick(){
        let atext=text.toUpperCase();
        props.showAlert("Converted to Upper Case","success")
        settext(atext);
    }
    function handLoClick(){
        let atext=text.toLowerCase();
        props.showAlert("Converted to Lower Case","success")
        settext(atext);
    }
    const handleOnChange=(e)=>{
        settext(e.target.value);
    };
    let texts="";
    const show=()=>{
        texts=text;
        let l=document.getElementById("paras");
        l.innerHTML=texts;
    };
    return (
        <>
        <div style={
            {color: props.mode==="dark"?"white": "black"}
        }>
            <div className="mb-3" >
            <h1 className="text-center">{props.heading}</h1>
            <textarea className="form-control" id="textarea" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==="dark"?"grey": "white",color: props.mode==="dark"?"white":"black"}}></textarea>
            </div>
            <div className="col-auto">
                <button type="submit" className="btn btn-primary m-1" id="convertBtn" onClick={handUpClick}>Convert to UpperCase</button>
                <button type="submit" className="btn btn-primary m-1"  onClick={handLoClick}>Convert to LowerCase</button>
            </div>
        </div>
        <div className="container" style={{color: props.mode==="dark"?"white":"black"}}><p>{text.trim().split(" ").length} words and {text.length} characters</p>
        <p>{0.008* text.trim().split(" ").length} Minutes to read.</p>
        </div>
        <button type="submit" className="btn btn-success " id="convertBtn" onClick={show}>Preview</button>
        <p id="paras" className="my-3 mx-3" style={{color: props.mode==="dark"?"white":"black"}}>{texts}</p>
        </>
    )
}
