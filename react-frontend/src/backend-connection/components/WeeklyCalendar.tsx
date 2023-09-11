import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Days(
  Monday: string,
  Tuesday: string,
  Wednesday: string,
  Thursday: string,
  Friday: string,
  Saturday: string,
  Sunday: string
) {
  return { Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday };
}

var time = 0;
const incrementHour = () => {
    if (time < 24) {
        time += 1;
    } else {
        time = 0;
    }

    if (time > 9) {
        return time + ":00"
    }
    
    return "0" + time + ":00"
}


const rows = Array.from(
    {length: 24}, x => Days('', '', '', '', '', '', ''))


const DenseTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
          <TableCell align="center"></TableCell>
            <TableCell align="center">Monday</TableCell>
            <TableCell align="center">Tuesday</TableCell>
            <TableCell align="center">Wednesday</TableCell>
            <TableCell align="center">Thursday</TableCell>
            <TableCell align="center">Friday</TableCell>
            <TableCell align="center">Saturday</TableCell>
            <TableCell align="center">Sunday</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align='center'>{incrementHour()}</TableCell>
              <TableCell align="center">TEST</TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DenseTable;
