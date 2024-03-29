import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from "react";
import axios from "axios";
import { object, string, transformer } from "zod";
import Activity, { getActivities } from "../../Activity";
import { blue } from '@mui/material/colors';
import './WeeklyCalendar.css';
import CustomCell from '../VariableCell';


var time = 0;
let getTime = (): string => {
  if (time == 0 ) {
    return "00:00"
  }

  if (time < 10) {
    return "0" + time + ":00";
  }

  return time + ":00";
}


const incrementHour = () => {
  if (time < 23) {
    time++;
  } else {
    time = 0;
  }
}

const getTimeAndIncrement = (): string => {
  var currentTime:string = getTime();
  incrementHour();
  return currentTime;
}

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const rows = Array.from(
    {length: 24}, x => daysOfWeek)


const DenseTable = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [activtyIncrement, setActivityIncrement] = useState<number[]>([0, 3]);
  const [activityCount, setActivityCount] = useState(0);
  const [columns, setColumns] = useState(Array<string>);

  useEffect(() => {
    try {
      axios.get<Activity[]>(getActivities).then((res) => {
        setActivityCount(res.data.length);
        setColumns(
          Object.keys(res.data[0])
            .slice(1)
            .map((word) => capitalizeFirstLetter(word))
        );
        setActivities(res.data.slice(activtyIncrement[0], activtyIncrement[1]));
      });
    } catch {
      console.log("Cannot connect to backend.");
    }
  }, [activtyIncrement]);

  // returns an activity if it matches the dow and tod columns
const fetchActivities = (dow: string, tod: string) => {
  for (var i = 0; i < activities.length ;i++) {
    var activity = activities[i];
    var end_hour = activity.end_time.slice(0,3) + "00"

    if (activity.dow == dow) {
      if(tod == activity.tod) {
        return activities[i];
      }

      if (tod == end_hour) {
        var act = "activity";
        return act;
      }
    }
  }
}

  const capitalizeFirstLetter = (word: string) => {
    let wordSplit = word.split("_");
    let returnWord = "";
    wordSplit.forEach((w) => {
      w = w.charAt(0).toUpperCase() + w.slice(1);
      returnWord += w + " ";
    });
    return returnWord;
  };

  if (activities.length === 0) return;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
          <TableCell align="center"></TableCell>
          {daysOfWeek.map((day) => (
            <TableCell align="center">{day}</TableCell>
          ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell className='error' align='center'>{getTime()}</TableCell>
              {daysOfWeek.map((day) => (
                <CustomCell activity={fetchActivities(day, getTime())}></CustomCell>
          ))}
          {incrementHour()}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DenseTable;
