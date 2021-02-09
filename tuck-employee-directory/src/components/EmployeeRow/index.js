import React from 'react';

function EmployeeRow(props) {
    console.log(props);
    return (

        // <tr key={props.login.uuid}>
        <tr>
            <td><img src={props.emp.picture.thumbnail} alt={props.emp.name.first} /></td>
            <td>{props.emp.name.first} {props.emp.name.last}</td>
            <td>{props.emp.phone}</td>
            <td>{props.emp.email}</td>
            <td>{props.emp.dob.date}</td>
        </tr>

    );
}

export default EmployeeRow;