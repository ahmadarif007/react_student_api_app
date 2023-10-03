import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function MySidebar() {
  return (
    <div className="col-sm-3">
        <div className="card" style={{ border:"1px solid green", borderRadius:"5px"}}>
            <div className="card-body">
                <NavLink className="list-group list-group-flush">
                    <Link to="/" className="list-group-item">Home</Link>
                    <Link to="#" className="list-group-item">All students</Link>
                    <Link to="/addstudent" className="list-group-item">Add student</Link>
                </NavLink>
            </div>
        </div>
    </div>
  )
}

