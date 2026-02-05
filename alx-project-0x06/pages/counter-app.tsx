import { useSelector } from "react-redux";
import { RootState, useAppDispatch, increment, decrement } from "@/store/store";

const CounterApp: React.FC = () => {
  // 1. Switch from useCount() to useSelector()
  const count = useSelector((state: RootState) => state.counter.value);
  
  // 2. Switch from increment/decrement functions to dispatch()
  const dispatch = useAppDispatch();

  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-400 to-pink-500 flex flex-col justify-center items-center text-white">
      <h1 className="text-6xl font-extrabold mb-6">🤖 Fun Counter App 🎉</h1>

      <p className="text-lg font-medium mb-4">
        Current count: {count} {count === 0 ? "🙈 No clicks yet!" : count % 10 === 0 && count !== 0 ? "🔥 You're on fire!" : ""}
      </p>

      <div className="text-6xl font-bold mb-8">
        {count}
      </div>

      <div className="flex space-x-4">
        <button
          onClick={() => dispatch(increment())} // Use dispatch here
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg transform hover:scale-105"
        >
          Increment 🚀
        </button>
        <button
          onClick={() => dispatch(decrement())} // Use dispatch here
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg transform hover:scale-105"
        >
          Decrement 👎
        </button>
      </div>
    </div>
  );
}

export default CounterApp;