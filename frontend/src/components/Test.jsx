import { useState } from "react";

const Test = () => {
  // Separate states for inputs
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Ready to save:", { fullName, email });
    // Database logic goes here
  };

  const handleGetAll = () => {
    console.log("Fetching all users...");
    // Database logic goes here
  };

  const handleDelete = () => {
    console.log("Deleting user...");
    // Database logic goes here
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">User Management</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="john@example.com"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200 font-semibold cursor-pointer"
        >
          Submit User
        </button>
      </form>

      <div className="mt-6 flex gap-4">
        <button
          onClick={handleGetAll}
          className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 transition duration-200 border border-gray-300 cursor-pointer"
        >
          Get All Users
        </button>

        <button
          onClick={handleDelete}
          className="flex-1 bg-red-50 text-red-600 py-2 px-4 rounded-md hover:bg-red-100 transition duration-200 border border-red-200 cursor-pointer"
        >
          Delete User
        </button>
      </div>
    </div>
  );
};

export default Test;
