import Button from './common/Button'
import { useState } from 'react'
import {Link} from 'react-router-dom'

export default function Home(){
    const [text, setText] = useState("nothing");

    const reroute = () => {
        
    }

    return (
        
    <div className="flex justify-center bg-['FBFFF3'] h-screen">
      <header className="align-self-center">
      <div>
        <h1 className="text-2xl" onClick={()=> setText("other")}>Macro Meals 3D logo</h1>
        <Button className="border-radius-2 bg-slate-100 hover:bg-slate-400" clicking={()=> setText("other")}/>
        
        <h2 className="hover:bg-black">{text}</h2>
        <Link to="/table">start</Link>
        </div>
      </header>
    </div>
    )
}