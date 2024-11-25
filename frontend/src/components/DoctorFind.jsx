import React from "react";

const DoctorFinder = () => {
  return (
    <div>
      <div className="container mx-auto px-4 sm:px-6 mt-2">
        <div className="flex items-center space-x-4 mb-3">
          <div className="rounded-full bg-blue-500 w-10 h-10 flex items-center justify-center text-white font-bold">
            G
          </div>
          <span className="text-xl font-semibold">Hello, Guest!</span>
        </div>
        <span className="text-lg font-medium">
          Find the Best Doctor Near You
        </span>
      </div>

      {/* Search Section */}
      <div className="w-full sm:w-4/5 lg:w-3/5 bg-white p-4 rounded-lg shadow-md flex flex-col sm:flex-row items-center justify-center space-x-0 sm:space-x-4 m-auto mt-3">
        <div className="flex items-center space-x-2 mb-2 sm:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8c0-2.21-1.79-4-4-4S4 5.79 4 8s1.79 4 4 4 4-1.79 4-4zM21 20v-6a2 2 0 00-2-2h-2.34A4.008 4.008 0 0016 11h-1.5A6.5 6.5 0 118 5h1a6.5 6.5 0 11-.25 10H5c-1.1 0-2 .9-2 2v2m14 0v-6m0 6h1m-5-6v-6"
            />
          </svg>
          <select className="p-2 bg-gray-100 rounded-lg border border-gray-300">
            <option>Lahore</option>
            <option>Karachi</option>
            <option>Islamabad</option>
          </select>
        </div>
        <input
          type="text"
          placeholder="Search by Doctors"
          className="p-2 w-full rounded-lg border border-gray-300"
        />
        <button className="bg-blue-500 text-white p-2 rounded-lg mt-2 sm:mt-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4.35-4.35M16 11a5 5 0 10-10 0 5 5 0 0010 0z"
            />
          </svg>
        </button>
      </div>

      {/* Service Options */}
      <div className="container mx-auto mt-8 px-4 sm:px-6">
        <h2 className="text-2xl font-semibold mb-4">
          How can we help you today?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Video Consultation */}
          <div className="bg-custom-blue p-4 rounded-lg shadow-md category-card h-auto">
            <h3 className="text-xl font-semibold">Video Consultation</h3>
            <p className="text-gray-500">PMC Verified Doctors</p>
            <img
              src="src/assets/assets_frontend/doc3.png"
              alt="Video Consultation"
              className="card-img mb-2 rounded-lg h-60"
            />
          </div>

          {/* In-Clinic Visit */}
          <div>
            <div className="bg-light-pink p-4 rounded-lg shadow-md category-card h-40 flex items-center justify-between">
              <div className="ml-4">
                <h3 className="text-xl font-semibold">In-clinic Visit</h3>
                <p className="text-gray-500">Book Appointment</p>
              </div>
              <img
                src="src/assets/assets_frontend/doc7.png"
                alt="In-Clinic Visit"
                className="card-img mb-2 rounded-lg h-40"
              />
            </div>

            {/* Weight Loss Clinic */}
            <div className="bg-light-yellow p-4 rounded-lg shadow-md category-card mt-4 h-40 flex items-center justify-between">
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Weight Loss Clinic</h3>
                <p className="text-gray-500">Weight Loss Clinic</p>
              </div>
              <img
                src="src/assets/assets_frontend/doc2.png"
                alt="Weight Loss Clinic"
                className="card-img mb-2 rounded-lg h-40"
              />
            </div>
          </div>

          {/* Instant Doctor */}
          <div>
            <div className="bg-light-teal p-4 rounded-lg shadow-md category-card h-40 flex items-center justify-between">
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Instant Doctor</h3>
                <p className="text-gray-500">Get Instant Relief in a Click</p>
              </div>
              <img
                src="src/assets/assets_frontend/doc9.png"
                alt="Instant Doctor"
                className="card-img mb-2 rounded-lg h-40"
              />
            </div>

            {/* Additional Services */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              {/* Labs */}
              <div className="bg-light-teal p-4 rounded-lg shadow-md category-card text-center">
                <img src="" alt="Labs" className="card-img mb-2 rounded-lg" />
                <h3 className="text-lg font-semibold">Labs</h3>
              </div>

              {/* Medicines */}
              <div className="bg-light-teal p-4 rounded-lg shadow-md category-card text-center">
                <img src="" alt="Medicines" className="card-img mb-2 rounded-lg" />
                <h3 className="text-lg font-semibold">Medicines</h3>
              </div>

              {/* Blogs */}
              <div className="bg-light-teal p-4 rounded-lg shadow-md category-card text-center">
                <img src="" alt="Blogs" className="card-img mb-2 rounded-lg" />
                <h3 className="text-lg font-semibold">Blogs</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorFinder;
