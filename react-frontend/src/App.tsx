import { useState } from "react";
import activityList from "./backend-connection/PresentActivities";
import ActivityList from "./backend-connection/PresentActivities";

function App() {
  return (
    <div>
      <ActivityList></ActivityList>
    </div>
  );
}

export default App;
