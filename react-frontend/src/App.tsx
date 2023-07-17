import { useState } from "react";
import ActivityForm from "./backend-connection/ActivityForm";
import DataTable from "./backend-connection/DataTable";

function App() {
  return (
    <div className="alert alert-primary">
      <div className="mb-3">
        <DataTable></DataTable>
      </div>
      <div className="mp-5">
        <ActivityForm onSubmit={(data) => console.log(data)}></ActivityForm>
      </div>
    </div>
  );
}

export default App;
