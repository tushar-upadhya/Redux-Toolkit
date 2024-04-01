import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  decreaseCount,
  increaseCount,
  updateNumber,
} from "./redux/slices/appSlice";
import { RootState } from "@reduxjs/toolkit/query";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.appSlice.count);
  const number = useSelector((state: RootState) => state.appSlice.number);

  return (
    <>
      <div>Counter app using redux toolkit</div>

      <div className="counter">
        <p>Count: {count}</p>
        <input
          type="text"
          placeholder="number count"
          value={number}
          onChange={(e) => dispatch(updateNumber(e.target.value))}
        />

        <button onClick={() => dispatch(increaseCount())}>Increase</button>
        <button onClick={() => dispatch(decreaseCount())}>Increase</button>
      </div>
    </>
  );
}

export default App;
