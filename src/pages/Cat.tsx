import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiConnector } from "../services/apiconnector";
import { categories } from "../services/apis";

const Cat = () => {
  const [subLinks, setSubLinks] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchSublinks = async () => {
    setLoading(true);
    try {
      const result = await apiConnector("GET", categories.CATEGORIES_API);
      console.log("Result -> ", result?.data?.data);
      setSubLinks(result.data.data);
    } catch (error) {
      console.log("Could not fetch the category list");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchSublinks();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-richblack-900 via-richblack-800 to-richblack-900 px-6 py-14 flex flex-col items-center font-sans">
      <h1 className="text-5xl font-bold text-white mb-12 tracking-tight">
        Explore Our <span className="text-yellow-100 text-7xl">Courses</span>
      </h1>

      {loading ? (
        <div className="w-14 h-14 border-4 border-yellow-300 border-t-transparent rounded-full animate-spin"></div>
      ) : subLinks.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
          {subLinks
            .filter((subLink) => subLink.courses.length > 0)
            .map((subLink, i) => (
              <Link
                key={i}
                to={`/catalog/${subLink.name
                  .split(" ")
                  .join("-")
                  .toLowerCase()}`}
                className="bg-richblack-800 border border-richblack-700 hover:border-yellow-300 text-white rounded-2xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(255,255,255,0.1)]"
              >
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-semibold text-white group-hover:text-yellow-300 transition duration-300">
                    {subLink.name}
                  </h3>
                  <p className="text-sm text-richblack-200">
                    {subLink?.courses?.length} course
                    {subLink?.courses?.length > 1 ? "s" : ""}
                  </p>
                </div>
              </Link>
            ))}
        </div>
      ) : (
        <p className="text-gray-400 text-lg mt-10">No Courses Found</p>
      )}
    </div>
  );
};

export default Cat;
