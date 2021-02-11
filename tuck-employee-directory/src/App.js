import React, { useState, useEffect } from 'react';
import API from './utils/API';
import Table from './components/Table';
import EmployeeRow from './components/EmployeeRow';
import Search from './components/Search';

function App() {

  const [empArr, setEmpArr] = useState([]);
  const [empSortArr, setEmpSortArr] = useState([]);
  const [sortType, setSortType] = useState('name');
  const [sortDesc, setSortDesc] = useState(false);
  const [searchFilter, setSearchFilter] = useState('');

  useEffect(() => {

    API.search()
      .then(res => {
        setEmpArr(res.data.results);
        setEmpSortArr(res.data.results);
      })
  }, []);

  useEffect(() => {
    const sortUp = sortDesc ? 1 : -1;
    const sortDown = sortDesc ? -1 : 1;
    let arr = []
    switch (sortType) {
      case 'picture[thumbnail]':
        arr = [...empSortArr].sort((a, b) => (a.picture.thumbnail < b.picture.thumbnail) ? sortUp : sortDown);
        break;
      case 'name[first]':
        arr = [...empSortArr].sort((a, b) => (a.name.first < b.name.first) ? sortUp : sortDown);
        break;
      case 'dob[date]':
        arr = [...empSortArr].sort((a, b) => (a.dob.date < b.dob.date) ? sortUp : sortDown);
        break;
      default:
        arr = [...empSortArr].sort((a, b) => (a[sortType] < b[sortType]) ? sortUp : sortDown);
        break;
    }
    arr = [...empSortArr].filter((emp) => {
      return (emp.name.first.includes(searchFilter) || emp.name.last.includes(searchFilter) || emp.phone.includes(searchFilter) || emp.email.includes(searchFilter) || emp.dob.date.includes(searchFilter));
    });
    setEmpSortArr(arr);
  }, [sortType, sortDesc, searchFilter]);

  const handleSort = sort => {
    if (sortType === sort) {
      setSortDesc(!sortDesc)
    } else {
      setSortDesc(false);
    }
    setSortType(sort);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (e.target.value === '') {
      setEmpSortArr(empArr);
    } else {
      setSearchFilter(e.target.value)
    }
  }

  return (
    <>
      <Search handleSearch={handleSearch} />
      {!empSortArr.length === 0 ? (
        <h1> Loading</h1>
      ) : (
          <Table handleSort={handleSort}>
            {empSortArr.map(emp => {
              return (
                <EmployeeRow key={emp.login.uuid} emp={emp} />
              )
            })}
          </Table>
        )}
    </>
  );
}

export default App;
