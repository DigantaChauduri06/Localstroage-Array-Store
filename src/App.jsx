import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!localStorage.getItem("value")) {
      localStorage.setItem("value", "[]");
    }
    const data = JSON.parse(localStorage.getItem("value"));
    data.push(text);
    localStorage.setItem("value", JSON.stringify(data));
  };
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("value")));
  }, []);
  return (
    <div>
      <form>
        <input
          type="text"
          className="border-2 border-black block m-3"
          onChange={(t) => setText(t.target.value)}
        />
        <button
          className="border-2 border-black px-4 py-1 m-3"
          onClick={(e) => handleSubmit(e)}
        >
          ADD
        </button>
      </form>
      <div>
        {data?.map((item) => {
          return <div>{item}</div>;
        })}
      </div>
    </div>
  );
}

export default App;
