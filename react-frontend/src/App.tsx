import { useState } from "react";
import activityList from "./backend-connection/PresentActivities";
import ActivityList from "./backend-connection/PresentActivities";
import ActivityForm from "./backend-connection/ActivityForm";

function App() {
  return (
    <div>
      <ActivityList></ActivityList>
      <ActivityForm onSubmit={(data) => console.log(data)}></ActivityForm>
    </div>
  );
}

export default App;
