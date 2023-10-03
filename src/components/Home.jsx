import React from 'react'
import MySidebar from "./MySidebar"
import Students from './Students'

export default function Home() {
  return (
    <>
      <div className="p-2" style={{ backgroundColor:"green"}}>
        <h1 style={{ color:"#fff", textAlign:"center"}}>All student information</h1>
      </div>
      <div className="row p-5">
          <MySidebar />
          <Students />
      </div>
    </>
  )
}
