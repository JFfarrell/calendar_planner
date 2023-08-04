import { useState } from "react";
import ActivityForm from "./backend-connection/components/ActivityForm";
import DataTable from "./backend-connection/components/DataTable";
import Calendar from "./backend-connection/components/ActivityCalendar";

function App() {
  return (
    <>
      <Calendar></Calendar>
      <div className="alert alert-primary">
        <div className="mb-3">
          <DataTable></DataTable>
        </div>
        <div className="mp-5">
          <ActivityForm onSubmit={(data) => console.log(data)}></ActivityForm>
        </div>
      </div>
    </>
  );
}

export default App;
