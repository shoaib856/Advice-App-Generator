import { useEffect, useState } from "react";
import iconDice from "./assets/images/icon-dice.svg";
import dividerDesktop from "./assets/images/pattern-divider-desktop.svg";
import dividerMobile from "./assets/images/pattern-divider-mobile.svg";
import "./App.css";

function App() {
  const [advice, setAdvice] = useState("");
  const [adviceNumber, setAdviceNumber] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [timePassed, setTimePassed] = useState(true);
  const getAdvice = async () => {
    try {
      setTimePassed(false);
      setLoading(true);
      await fetch("https://api.adviceslip.com/advice").then((response) =>
        response
          .json()
          .then(async (data) => {
            setAdvice(data.slip.advice);
            setLoading(false);
            setAdviceNumber(adviceNumber + 1);
            setError(false);
            await new Promise((resolve) => setTimeout(resolve, 2000)).then(() =>
              setTimePassed(true)
            );
          })
          .catch(() => {
            setError(true);
            setLoading(false);
          })
      );
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };
  useEffect(() => {
    getAdvice();
  }, []);
  return (
    <div className="!relative bg-Neutral-Dark-Grayish-Blue p-[25px] sm:p-[49px] rounded-lg shadow-lg text-center max-w-[540px] mx-4 my-16 sm:m-0">
      <h6 className="text-Primary-Neon-Green text-xs tracking-[5px] mb-5">
        ADVICE #{adviceNumber}
      </h6>
      <p className="text-Primary-Light-Cyan text-[1.2rem] sm:text[1.7rem]">
        <q>{advice}</q>
      </p>
      <img
        src={dividerDesktop}
        alt="divider"
        className="my-7 hidden sm:block"
      />
      <img
        src={dividerMobile}
        alt="divider"
        className="mx-auto my-7 block sm:hidden"
      />
      <div className=" flex flex-col gap-1 mb-3 text-[.8rem] sm:text-[1.2rem] ">
        <h6 className="text-[#979A9A]">
          {timePassed ? "Ready Now" : "Wait for 2sec to Get New Advice"}
        </h6>
        {error && (
          <p className="text-[#EC7063]">
            Something went wrong, please try again later.
          </p>
        )}
      </div>

      <button
        onClick={getAdvice}
        disabled={loading || !timePassed}
        className="neon-effect"
      >
        {loading ? (
          <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        ) : (
          <img src={iconDice} alt="Random Advice" />
        )}
      </button>
    </div>
  );
}

export default App;
