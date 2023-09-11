import React, { useState } from "react";
import { addMonths, subMonths, format } from "date-fns";
import { date } from "zod";
import dayjs from "dayjs";
import DenseTable from "./WeeklyCalendar";

const ActivityCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [currentDate, setCurrentDate] = useState(new Date());
  const dateFormat = "mmmm yyyy";
  const renderHeader = () => {};

  //   const renderDays = () => {
  //     const dateFormat = "dddd";
  //     const days = [];
  //     let startDate = dateFns.startOfWeek(currentMonth);
  //     for (let i = 0; i < 7; i++) {
  //       days.push(
  //         <div className="col col-center" key={i}>
  //           {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
  //         </div>
  //       );
  //     }
  //     return <div className="days row">{days}</div>;
  //   };

  const renderCells = () => {};
  const onDateClick = (day: Date) => {
    console.log(day);
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  return (
    <>
    <div className="alert alert-primary">
      <div className="header row flex-middle">
        <div className="col col-start" onClick={prevMonth}>
          <div className="icon">chevron_left</div>
        </div>
        <div className="col col-center">
          <span>{format(currentMonth, dateFormat)}</span>
        </div>
        <div className="col col-end" onClick={nextMonth}>
          <div className="icon">chevron_right</div>
        </div>
      </div>
      <div><DenseTable></DenseTable></div>
      
      {/* <div>
        <div>Header</div>
        <div>Days</div>
        <div>Cells</div>
      </div> */}
      </div>
    </>
  );
};

export default ActivityCalendar;
