"use client"
/* import Image from 'next/image'*/
import  './page.module.css' 

import React from 'react'
import {useState} from 'react'

const App = () => {
    const arr=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    const [pointerPos,setpointerPos] = useState(0)
    // const [code,setCodeValue] = useState("")
    const [output,setOutput] = useState()
    function reset(){
      setpointerPos(0)
    }
    function processCode(code){
      for (let i of code) {
      console.log(code,code.charAt(-1))
        switch(i){
          case ">": 
            setpointerPos(pointerPos+1);
            break;
          case "<":
            setpointerPos(pointerPos-1);
              break;
          case "+":
            arr[pointerPos]=arr[pointerPos]+1;
            break;
          case "-":
            arr[pointerPos]=arr[pointerPos]-1;
            break;
          case ".":
            setOutput(arr[pointerPos])
            break;
          case ",":
            alert("not supported yet")
          default:
            break;
      }
    }
  }
 return (
    <div>
        <div>
            <p className='array'>
              {arr.join(' ')}
            </p>
        </div>
        <p >
          {" ".repeat(pointerPos)+"▲"}
        </p>
        <input className="input" placeholder='code' onChange={e=>processCode(e.target.value)}/>

        <p className='output'>
          output:{output}
        </p>
        <p>
          pointer:{pointerPos}
        </p>
        <button className="btn" onClick={reset}>reset</button>
    </div>
  )
}

export default App
