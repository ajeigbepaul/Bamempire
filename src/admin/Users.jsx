import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { userRequest } from '../requestMethods';

const Users = () => {
  function createData(firstname, lastname, email, phonenos) {
    return { firstname, lastname, email, phonenos };
  }
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("users/?new=true");
        console.log(res.data)
        setUsers(res.data);
      } catch {}
    };
    getUsers();
  }, []);
  const rows = [
    createData('Modupe', "grace", "modupe@yahoo.com", "09033198784"),
    createData('Ade', "John", "modupe@yahoo.com", "09033198784"),
    createData('Sam', "Jude", "modupe@yahoo.com", "09033198784"),
    createData('Biddun', "grace", "modupe@yahoo.com", "09033198784"),
    createData('Ikechi', "grace", "modupe@yahoo.com", "09033198784"),
  ];
 
  return (
    <>
    <h2> Bam Empire Users</h2>
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
      <TableHead>
        <TableRow>
          <TableCell>First Name</TableCell>
          <TableCell align="right">Last Name</TableCell>
          <TableCell align="right">Enail</TableCell>
          <TableCell align="right">Phone Nos</TableCell>
          {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.firstname}
            </TableCell>
            <TableCell align="right">{row.lastname}</TableCell>
            <TableCell align="right">{row.email}</TableCell>
            <TableCell align="right">{row.phonenos}</TableCell>
            {/* <TableCell align="right">{row.protein}</TableCell> */}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
    </>
    
  )
};

export default Users;
