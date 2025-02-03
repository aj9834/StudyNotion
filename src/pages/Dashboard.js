import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [dashboardCourses, setDashboardCourses] = useState([]);

  // Load courses from localStorage when the component mounts
  useEffect(() => {
    const savedCourses = JSON.parse(localStorage.getItem("dashboardCourses")) || [];
    setDashboardCourses(savedCourses);
  }, []);

  // Remove a course from the dashboard
  const handleRemoveCourse = (courseId) => {
    const updatedCourses = dashboardCourses.filter((course) => course.id !== courseId);
    setDashboardCourses(updatedCourses);
    localStorage.setItem("dashboardCourses", JSON.stringify(updatedCourses));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br bg-richblack-800 to-gray-300 py-10">
      <div className="w-11/12 max-w-[1160px] mx-auto">
        <h2 className="text-4xl font-bold text-gray-200 text-center mb-6">📌 Your Dashboard</h2>

        {dashboardCourses.length === 0 ? (
          <p className="text-center text-gray-200 text-lg">
            No courses added yet. Add some from the home page! 😊
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {dashboardCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white shadow-lg p-6 rounded-xl border border-gray-200 transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col justify-between"
              >
                <div>
                  <img
                    src={course.image.url}
                    alt={course.image.alt}
                    className="w-full h-40 object-cover rounded-lg"
                  />

                  <h4 className="text-xl font-bold mt-4 text-gray-900">{course.title}</h4>
                  <p className="text-md font-medium text-purple-600">{course.category}</p>
                  <p className="text-gray-700 mt-2 text-sm">{course.description.substring(0, 80)}...</p>
                </div>

                <button
                  onClick={() => handleRemoveCourse(course.id)}
                  className="mt-4 px-6 py-2 font-semibold text-white bg-red-600 rounded-lg transition duration-300 hover:bg-red-500 hover:scale-105"
                >
                  Remove ❌
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
