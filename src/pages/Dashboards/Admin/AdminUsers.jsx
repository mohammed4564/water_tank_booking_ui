import React, { useEffect, useState } from "react";

function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch users from API (placeholder example)
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Replace this with your API call
        // const response = await fetch("/api/users");
        // const data = await response.json();
        // setUsers(data.users);

        // Example static data for now
        const data = [
          { id: 1, name: "John Doe", email: "john@example.com", role: "customer" },
          { id: 2, name: "Jane Smith", email: "jane@example.com", role: "driver" },
          { id: 3, name: "Admin User", email: "admin@example.com", role: "admin" },
        ];

        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Loading users...</p>;

  return (
    <div>
      <h1>Manage Users</h1>
      <p>View, edit, or delete users from the system.</p>

      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>ID</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Name</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Email</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Role</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>{user.id}</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>{user.name}</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>{user.email}</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>{user.role}</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                <button style={{ marginRight: "5px" }}>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminUsers;