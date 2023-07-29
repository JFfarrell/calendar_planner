import { useState, useEffect } from "react";
import axios from "axios";
import { object, transformer } from "zod";
import Activity, { getActivities } from "../Activity";

const DataTable = () => {
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

  const capitalizeFirstLetter = (word: string) => {
    let wordSplit = word.split("_");
    console.log(wordSplit);
    let returnWord = "";
    wordSplit.forEach((w) => {
      w = w.charAt(0).toUpperCase() + w.slice(1);
      console.log(w);
      returnWord += w + " ";
    });
    return returnWord;
  };

  const increaseActivityIncrement = () => {
    if (activtyIncrement[1] + 3 < activityCount) {
      setActivities([]);
      setActivityIncrement(activtyIncrement.map((val) => (val += 3)));
    } else {
      setActivityIncrement([
        activityCount - (activityCount - activtyIncrement[1]),
        activityCount,
      ]);
    }
  };

  const decreaseActivityIncrement = () => {
    if (activtyIncrement[0] - 3 > 0) {
      setActivities([]);
      setActivityIncrement(activtyIncrement.map((val) => (val -= 3)));
    } else {
      setActivityIncrement([0, 3]);
    }
  };

  if (activities.length === 0) return;

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">{columns[0]}</th>
            <th scope="col">{columns[1]}</th>
            <th scope="col">{columns[2]}</th>
            <th scope="col">{columns[3]}</th>
            <th scope="col">{columns[4]}</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((data) => (
            <tr key={data.date + "-" + data.activity_type}>
              <td>{data.name}</td>
              <td>{data.activity_type}</td>
              <td>{data.date}</td>
              <td>{data.duration}</td>
              <td>{data.intensity}</td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => console.log("Deleting item: " + { data })}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span> </span>
              {activityCount > activtyIncrement[1] && (
                <span className="sr-only" onClick={decreaseActivityIncrement}>
                  Previous
                </span>
              )}
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              {activityCount > activtyIncrement[1] && (
                <span className="sr-only" onClick={increaseActivityIncrement}>
                  Next
                </span>
              )}
              <span></span>
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default DataTable;
