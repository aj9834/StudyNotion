import React, { useState, useEffect } from "react";

const CourseCard = ({ course }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [added, setAdded] = useState(false);

  // Check if course is already in the dashboard when the component loads
  useEffect(() => {
    const dashboardCourses = JSON.parse(localStorage.getItem("dashboardCourses")) || [];
    setAdded(dashboardCourses.some((c) => c.id === course.id));
  }, [course.id]);

  const handleToggleDashboard = () => {
    let dashboardCourses = JSON.parse(localStorage.getItem("dashboardCourses")) || [];

    if (added) {
      // Remove course
      dashboardCourses = dashboardCourses.filter((c) => c.id !== course.id);
      setAdded(false);
    } else {
      // Add course
      dashboardCourses.push(course);
      setAdded(true);
    }

    // Update localStorage
    localStorage.setItem("dashboardCourses", JSON.stringify(dashboardCourses));
  };

  return (
    <div className="bg-gray-100 backdrop-blur-lg shadow-xl border border-white/10 p-6 rounded-2xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col justify-between">
      <div>
        {/* Image Placeholder */}
        {!imageLoaded && <div className="w-full h-40 bg-gray-300 animate-pulse rounded-md"></div>}

        {/* Actual Image (Lazy Loaded) */}
        <img
          src={course.image.url}
          alt={course.image.alt}
          className={`w-full h-40 object-cover rounded-lg transition-opacity duration-500 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
        />

        {/* Course Details */}
        <h4 className="text-2xl font-bold mt-4 text-gray-900">{course.title}</h4>
        <p className="text-md font-medium text-purple-600 mt-1">{course.category}</p>
        <p className="text-gray-700 mt-2 text-sm leading-relaxed">
          {course.description.substring(0, 80)}...
        </p>
      </div>

      {/* Add/Remove Button */}
      <button
        onClick={handleToggleDashboard}
        className={`mt-4 px-6 py-2 font-semibold text-white rounded-lg transition duration-300 transform ${
          added
            ? "bg-green-600 hover:bg-green-500 shadow-lg hover:scale-105"
            : "bg-blue-600 hover:bg-blue-500 shadow-md hover:scale-105"
        }`}
      >
        {added ? "Added to Dashboard ✅" : "Add to Dashboard ➕"}
      </button>
    </div>
  );
};

export default CourseCard;
