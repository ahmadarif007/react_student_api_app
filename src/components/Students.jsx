import React, { useEffect } from 'react'
import axios from "axios";

const baseURL = "http://127.0.0.1:8000/api/students/";

export default function Students() {

    const [student, setStudent] = React.useState(null);
    // console.log(student);

    useEffect(() => {
      axios.get(baseURL).then((response) => {
        setStudent(response.data);
      });
    }, []);
  
    if (!student) return null;

    return (
        <div className="col-sm-9">
            <div className="card" style={{ border:"1px solid green", borderRadius:"5px"}}>
                <div className="card-body">
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">Roll</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Class</th>
                            <th scope="col">Section</th>
                            <th scope="col">Address</th>
                            <th scope="col">Phone No</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                            {student.map((student) => (
                                <tr key={student.id}>
                                    <th scope="row">{student.roll}</th>
                                    <td>{student.name}</td>
                                    <td>{student.email}</td>
                                    <td>{student.class}</td>
                                    <td>{student.section}</td>
                                    <td>{student.address}</td>
                                    <td>{student.mobile_no}</td>
                                    <td>
                                        <button className="btn btn-outline-info m-1">Edit</button>
                                        <button className="btn btn-outline-danger">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
