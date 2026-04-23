import { useState } from "react";

const Test = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  // 1. Handle Submit (POST)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ full_name: fullName, email }),
      });

      if (result.ok) {
        const newUser = await result.json();
        setData((prev) => [newUser, ...prev]); // Update UI immediately
        setFullName(""); // Clear inputs
        setEmail("");
      }
    } catch (err) {
      console.error("Submit error:", err);
    }
  };

  // 2. Handle Get All (GET)
  const handleGetAll = async () => {
    try {
      const response = await fetch("http://localhost:3000/users");
      const users = await response.json();
      setData(users);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  // 3. Handle Delete (DELETE)
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/users/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setData(data.filter((user) => user.id !== id)); // Remove from UI
      }
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md border border-gray-200 text-gray-800">
      <h2 className="text-2xl font-bold mb-6">User Management</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Full Name</label>
          <input
            type="text"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Email Address</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="john@example.com"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition font-semibold cursor-pointer"
        >
          Submit User
        </button>
      </form>

      <div className="mt-6 flex gap-4">
        <button
          onClick={handleGetAll}
          type="button"
          className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 border border-gray-300 cursor-pointer"
        >
          Load All Users
        </button>
      </div>

      <div className="mt-6 space-y-3">
        {data.length > 0 ? (
          data.map((user) => (
            <div
              key={user.id}
              className="flex justify-between items-center p-3 bg-gray-50 border border-gray-200 rounded-md"
            >
              <div>
                <p className="font-semibold text-sm">{user.full_name}</p>
                <p className="text-xs text-gray-500">{user.email}</p>
              </div>
              <button
                onClick={() => handleDelete(user.id)}
                className="text-red-500 hover:text-red-700 text-sm font-medium"
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400 text-sm italic">
            No users found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Test;
