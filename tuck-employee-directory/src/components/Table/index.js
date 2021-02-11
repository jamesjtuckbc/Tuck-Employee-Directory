import React from 'react';

function Table(props) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col"><button onClick={() => props.handleSort('picture[thumbnail]')} className='btn'><strong>Image</strong></button></th>
                    <th scope="col"><button onClick={() => props.handleSort('name[first]')} className='btn'><strong>Name</strong></button></th>
                    <th scope="col"><button onClick={() => props.handleSort('phone')} className='btn'><strong>Phone</strong></button></th>
                    <th scope="col"><button onClick={() => props.handleSort('email')} className='btn'><strong>Email</strong></button></th>
                    <th scope="col"><button onClick={() => props.handleSort('dob[date]')} className='btn'><strong>DOB</strong></button></th>
                </tr>
            </thead>
            <tbody>
                {props.children}
            </tbody>
        </table>
    )
};

export default Table;