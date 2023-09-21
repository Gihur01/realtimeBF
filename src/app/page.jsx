"use client"
import Error from 'next/error'
/* import Image from 'next/image'*/
import styles from './page.module.css'

import React from 'react'
import {useState} from 'react'

const App = () => {
    // const [pointerPos,setpointerPos] = useState(0)
    // const [code,setCodeValue] = useState("")
    const [vars,setVarsValue] = useState({
      arr:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      pointerPos:0,
      output:""
    })
    var pointerPos = 0
    // const [output,setOutput] = useState("")
    
    function processCode(code){
      let arr=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      let pointerPos=0
      let output=""
      let i=0;
      let loop=0;
      let execLength = 0
      while ( i<code.length) {
        switch(code.charAt(i)){
          case ">": 
            pointerPos++;
            break;
          case "<":
            pointerPos--;
              break;
          case "+":
            arr[pointerPos]+=1;
            break;
          case "-":
            arr[pointerPos]-=1;
            break;
          case ".":
            output+=String.fromCharCode(arr[pointerPos]);
            break;
          case ",":
            alert("not supported yet")
          case "[":
            loop=i;
      }
      if(arr[pointerPos]>255){
        arr[pointerPos]%=256;
      }
      else{
        if(arr[pointerPos]<0){
          arr[pointerPos]+=256;
        }
      }
      if(loop>0 && code.charAt(i)=="]"){
        if(arr[pointerPos]==0){
          i++;
          loop=0;
        } else {
          i=loop;
          execLength++;
          if (execLength>300){
            alert("loop executed 300 times, too long");
            throw new Error("bad!");
          }
        }
      } else{i++;}

      setVarsValue({
        arr:arr,
        pointerPos:pointerPos,
        output:output
      })
    }}
 return (
    <div>
        <div>
            <p className={styles.array}>
              {vars.arr.join(' ')}
            </p>
        </div>
        <p className='pointer'>
          {String.fromCharCode(160).repeat(vars.pointerPos*2.8)}▲
        </p>
        <input className="input" placeholder='code' onChange={e=>processCode(e.target.value)}/>

        <p className='output'>
          output:{vars.output}
        </p>
        <p>
          pointer:{vars.pointerPos+1}
        </p>
    </div>
  )
}

export default App
