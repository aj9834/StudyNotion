import React, { useEffect, useState } from "react";
import { filterData, apiUrl } from "../data";
import CourseCard from "../components/CourseCard";
import reviews from "../reviews";
import Footer from "../Footer";

const HomePage = () => {
  const [courses, setCourses] = useState([]); // Stores all courses
  const [filteredCourses, setFilteredCourses] = useState([]); // Stores courses after filtering
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 3; // Number of testimonials to show at a time

  // Next Testimonial function
  const nextTestimonial = () => {
    if (currentIndex + itemsToShow < reviews.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Previous Testimonial function
  const prevTestimonial = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Fetch courses from API
  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log("Fetched Courses Data:", data); // Debugging log

        if (data && data.data) {
          let allCourses = [];

          // Convert category-wise object into a flat array with a `category` field
          Object.entries(data.data).forEach(([category, courseList]) => {
            const categorizedCourses = courseList.map(course => ({
              ...course,
              category, // Add category field for filtering
            }));
            allCourses = [...allCourses, ...categorizedCourses];
          });

          setCourses(allCourses);
          setFilteredCourses(allCourses);
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  // Filter courses based on selected category
  useEffect(() => {
    if (selectedFilter === "All") {
      setFilteredCourses(courses);
    } else {
      const filtered = courses.filter(course => course.category === selectedFilter);
      setFilteredCourses(filtered);
    }
  }, [selectedFilter, courses]);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Filter Section */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-8 text-center">
        <h2 className="text-white text-3xl font-semibold mb-4">Explore Our Courses</h2>
        <div className="flex justify-center gap-4 flex-wrap">
          {filterData.map((filter) => (
            <button
              key={filter.id}
              className={`px-4 py-2 rounded-lg font-semibold transition duration-300
                ${selectedFilter === filter.title ? "bg-yellow-400 text-gray-900" : "bg-white bg-opacity-20 hover:bg-opacity-50 text-white"}`}
              onClick={() => setSelectedFilter(filter.title)}
            >
              {filter.title}
            </button>
          ))}
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-12 bg-richblack-800 min-h-screen">
        <div className="w-11/12 max-w-[1160px] mx-auto">
          {loading ? (
            <p className="text-white text-center text-xl font-semibold">Loading Courses...</p>
          ) : filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <p className="text-center text-xl font-semibold">No courses found.</p>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-gray-200 min-h-screen">
        <div className="w-11/12 max-w-[1160px] mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">What Our Students Say</h2>
          <div className="flex items-center justify-between">
            <button
              onClick={prevTestimonial}
              className="bg-gray-500 text-white px-3 py-2 rounded-full"
              disabled={currentIndex === 0} // Disable button if on the first set
            >
              &#8592;
            </button>
            <div className="overflow-hidden w-full max-w-[900px] flex justify-center">
              <div className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}>
                {reviews.slice(currentIndex, currentIndex + itemsToShow).map((review) => (
                  <div key={review.id} className="w-[300px] p-6 mx-2 bg-white shadow-lg rounded-lg text-center">
                    <img src={review.image} alt={review.name} className="w-20 h-20 mx-auto rounded-full mb-4" />
                    <p className="text-gray-800 italic">"{review.text}"</p>
                    <p className="mt-4 font-semibold">- {review.name}, {review.job}</p>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={nextTestimonial}
              className="bg-gray-500 text-white px-3 py-2 rounded-full"
              disabled={currentIndex + itemsToShow >= reviews.length} // Disable button if on the last set
            >
              &#8594;
            </button>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default HomePage;
