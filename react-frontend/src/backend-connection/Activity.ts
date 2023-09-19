interface Activity {
  id: number;
  name: string;
  activity_type: string;
  date: string;
  duration: number;
  intensity: string;
  dow: string;
  tod: string;
  end_time: string;
}

export const getActivities = "http://localhost:8080/activities"
export default Activity;