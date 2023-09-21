"use client"
/* import Image from 'next/image'*/
import  './page.module.css' 

import React from 'react'
import {useState} from 'react'

const App = () => {
    const array=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    // const [pointerPos,setpointerPos] = useState(0)
    // const [code,setCodeValue] = useState("")
    const [vars,setVarsValue] = useState({
      arr:array,
      pointerPos:0,
      output:""
    })
    var pointerPos = 0
    // const [output,setOutput] = useState("")
    function reset(){
      setpointerPos(0)
    }
    function processCode(code){
      let {temparr,temppointerPos,tempoutput}=vars
      for (let i of code) {
      console.log(code,code.charAt(-1))
        switch(i){
          case ">": 
          temppointerPos++;
            break;
          case "<":
            temppointerPos--;
              break;
          case "+":
            temparr[temppointerPos]+=1;
            break;
          case "-":
            temparr[temppointerPos]-=1;
            break;
          case ".":
            tempoutput+=temparr[temppointerPos]
            break;
          case ",":
            alert("not supported yet")
          default:
            break;
      }
    }
    setVarsValue({
      arr:temparr,
      pointerPos:temppointerPos,
      output:tempoutput
    })
    console.log(vars,arr)
  }
 return (
    <div>
        <div>
            <p className='array'>
              {vars.arr.join(' ')}
            </p>
        </div>
        <p className='pointer'>
          {" ".repeat(vars.pointerPos)+"▲"}
        </p>
        <input className="input" placeholder='code' onChange={e=>processCode(e.target.value)}/>

        <p className='output'>
          output:{vars.output}
        </p>
        <p>
          pointer:{vars.pointerPos}
        </p>
        <button className="btn" onClick={reset}>reset</button>
    </div>
  )
}

export default App
