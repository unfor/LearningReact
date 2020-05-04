import React, { useRef } from 'react';
import './fancyButton.css';

const FancyButton = React.forwardRef((props, ref) => {
    const myRef = useRef();
    myRef.current = ref.current;
    return <>
        <div ref={myRef} className="fancyButton" onClick={()=>{console.log("我被点击了"); myRef.current.innerHTML = myRef.current.innerHTML == "" ? "我被点击过了" : ""}}></div>
    </>
});
export default FancyButton;