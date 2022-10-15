import Button from './common/Button'
import { useState } from 'react'
import Spline from '@splinetool/react-spline';




export default function Table() {
  const elements = {}

  return (

    <div className="flex justify-center bg-lime-50 h-screen">
      <header className="align-self-center">
        <div>
          <h1 className="text-2xl" >Macro Meals 3D logo</h1>
          <Spline scene="https://prod.spline.design/pdnfMI120mM2tLVE/scene.splinecode" />

          <h2 className="hover:bg-black">Here is our table</h2>
        </div>
      </header>
    </div>
  )
}