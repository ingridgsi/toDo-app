import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAdvice } from "./adviceSlice"; // Import the setAdvice action
import Button from "../../utils/Button";

function Quotes() {
  const advice = useSelector((state) => state.advice);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedAdvice = localStorage.getItem("advice");
    if (savedAdvice) dispatch(setAdvice(savedAdvice));
    else getAdvice();
  }, [dispatch]);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();

    dispatch(setAdvice(data.slip.advice));
    localStorage.setItem("advice", data.slip.advice);
  }

  return (
    <div className=" drop-shadow flex flex-col gap-3 border-none rounded-[5px] px-4 py-3 pb-6  items-center h-[13.5rem] bg-custom-bgInput">
      <div className="flex items-center h-36 ">
        <blockquote className="italic text-center text-custom-baseTextColor">{` "${advice}"`}</blockquote>
      </div>
      <Button onClick={getAdvice}>Get a new advice</Button>
    </div>
  );
}

export default Quotes;
