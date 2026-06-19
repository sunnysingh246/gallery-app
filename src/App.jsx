import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./components/Cards";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [page, setPage] = useState(1);

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=20`
      );

      setUserData(response.data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <div className="h-screen bg-black text-white p-4 overflow-auto">
      <button
        onClick={getData}
        className="bg-green-500 mb-4 px-6 py-3 rounded active:scale-95"
      >
        Refresh Data
      </button>

      {userData.length === 0 ? (
        <h3 className="text-gray-300 font-semibold text-sm text-center mt-10">
          Loading...
        </h3>
      ) : (
        <div className="flex flex-wrap gap-4 justify-center">
          {userData.map((elem) => (
            <Cards key={elem.id} elem={elem} />
          ))}
        </div>
      )}

      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          disabled={page === 1}
          onClick={() => {
            if (page > 1) {
              setUserData([]);
              setPage((prev) => prev - 1);
            }
          }}
          className="rounded font-bold text-sm px-4 py-2 bg-amber-400 text-black disabled:opacity-50 active:scale-95"
        >
          ⬅ Previous
        </button>

        <h2 className="font-bold text-lg">
          Page {page}
        </h2>

        <button
          onClick={() => {
            setUserData([]);
            setPage((prev) => prev + 1);
          }}
          className="rounded font-bold text-sm px-4 py-2 bg-amber-400 text-black active:scale-95"
        >
          Next ➡
        </button>
      </div>
    </div>
  );
};

export default App;