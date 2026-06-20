import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./components/Cards";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  const getData = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=20`
      );

      setUserData(response.data);
    } catch (error) {
      console.log(error);
      setError("Failed to fetch images!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [page]);

  // Scroll to top whenever page changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [page]);

  // Search Filter
  const filteredData = userData.filter((item) =>
    item.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-white p-5">

      {/* Top Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-5">

        <button
          onClick={getData}
          disabled={loading}
          className="bg-green-500 px-6 py-3 rounded font-semibold text-black active:scale-95 disabled:opacity-50"
        >
          🔄 Refresh Data
        </button>

        <input
          type="text"
          placeholder="Search by author..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 rounded text-black w-full md:w-72 outline-none"
        />

        <h2 className="font-bold">
          Total Images: {filteredData.length}
        </h2>

      </div>


      {/* Error Message */}
      {error && (
        <h2 className="text-red-500 text-center mb-4">
          {error}
        </h2>
      )}


      {/* Loading */}
      {loading ? (
        <h2 className="text-center text-lg animate-pulse">
          Loading Images...
        </h2>
      ) : filteredData.length === 0 ? (

        <h2 className="text-center text-gray-400">
          No images found
        </h2>

      ) : (

        <div className="flex flex-wrap justify-center gap-5">
          {filteredData.map((elem) => (
            <Cards key={elem.id} elem={elem} />
          ))}
        </div>

      )}


      {/* Pagination */}
      <div className="flex justify-center items-center gap-5 mt-8">

        <button
          disabled={page === 1 || loading}
          onClick={() => {
            setPage((prev) => prev - 1);
          }}
          className="bg-amber-400 text-black px-5 py-2 rounded font-bold disabled:opacity-50 active:scale-95"
        >
          ⬅ Previous
        </button>


        <h2 className="font-bold text-xl">
          Page {page}
        </h2>


        <button
          disabled={loading}
          onClick={() => {
            setPage((prev) => prev + 1);
          }}
          className="bg-amber-400 text-black px-5 py-2 rounded font-bold disabled:opacity-50 active:scale-95"
        >
          Next ➡
        </button>

      </div>

    </div>
  );
};

export default App;