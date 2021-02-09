import React, { useState, useEffect } from 'react';
import API from './utils/API';
import Table from './components/Table';
import EmployeeRow from './components/EmployeeRow';

function App() {

  const [empArr, setEmpArr] = useState([]);

  useEffect(() => {
    
    API.search()
      .then(res => {
        console.log('res.data.results', res.data.results);
        setEmpArr(res.data.results)
      })
    // console.log(empArr);

  }, []);

  empArr.map(emp => {
    
      console.log(`key=${emp.login.uuid} emp=${emp}`)
    
  });


  console.log(empArr);
  // return (
  //   <h1>Loading</h1>
  // );
  return (
    <>
    {!empArr.length === 0 ? (
        <h1> Loading</h1>
      ) : (
          <Table>
            {empArr.map(emp => {
              return (
                <EmployeeRow key={emp.id.value} emp={emp} />
                // <EmployeeRow emp={emp} />
              )
            })}
          </Table>
        )}
    </>
  );
}

export default App;
