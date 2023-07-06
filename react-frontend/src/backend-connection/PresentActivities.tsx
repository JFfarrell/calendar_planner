import axios from "axios";
import { useEffect, useState } from "react";

const api = "http://localhost:8080/activities";

interface Activity {
  name: "string";
  activity_type: "string";
}

const ActivityList = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  useEffect(() => {
    axios
      .get<Activity[]>("http://localhost:8080/activities")
      .then((res) => setActivities(res.data));
  }, []);

  return (
    <ul>
      {activities.map((activity) => (
        <li>{activity.name}</li>
      ))}
    </ul>
  );
};

export default ActivityList;
