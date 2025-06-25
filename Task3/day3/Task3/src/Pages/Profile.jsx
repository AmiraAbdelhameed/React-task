import { deleteMe, editeMe, getMe } from "@/api/user";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AddNewPost from "@/components/AddNewPost";
import UserPosts from "@/components/UserPosts";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await getMe();
        setUser(data);
        setFormData({
          name: data.name,
          email: data.email,
          phone: data.phone,
        });
      } catch (error) {
        console.error("❌ Error fetching user:", error);
      }
    };
    fetchUser();
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    try {
      const { data } = await editeMe(formData);
      setUser(data);
      document.getElementById("closeModalBtn")?.click();
    } catch (error) {
      console.error("❌ Edit error:", error);
    }
  };

  const handleDelete = async () => {
    const confirmed = window.confirm("Are you sure you want to delete your account?");
    if (!confirmed) return;

    try {
      await deleteMe();
      localStorage.removeItem("auth-store");
      alert("Your account has been deleted.");
      navigate("/login");
    } catch (error) {
      console.error(" Delete error:", error);
    }
  };

  return (
    <div className="container my-5">
      <AddNewPost user={user} />

      <div className="card shadow-lg border-0 rounded-4 p-4">
        <div className="card-body">
          <h3 className="card-title text-primary mb-4">My Profile</h3>

          {user ? (
            <ul className="list-group list-group-flush mb-4">
              <li className="list-group-item bg-light">
                <strong>Name:</strong> {user.name}
              </li>
              <li className="list-group-item bg-light">
                <strong>Email:</strong> {user.email}
              </li>
              <li className="list-group-item bg-light">
                <strong>Phone:</strong> {user.phone}
              </li>
            </ul>
          ) : (
            <div className="text-muted">Loading profile...</div>
          )}

          <div className="d-flex flex-wrap gap-3">
            <button
              className="btn btn-outline-primary"
              data-bs-toggle="modal"
              data-bs-target="#editModal"
            >
               Edit Profile
            </button>
            <button className="btn btn-outline-danger" onClick={handleDelete}>
               Delete Account
            </button>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      <div
        className="modal fade"
        id="editModal"
        tabIndex="-1"
        aria-labelledby="editModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content rounded-4">
            <div className="modal-header">
              <h5 className="modal-title text-primary" id="editModalLabel">
              Edit Your Info
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" />
            </div>

            <div className="modal-body">
              {["name", "email", "phone"].map((field) => (
                <div className="mb-3" key={field}>
                  <label className="form-label text-capitalize">{field}</label>
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    className="form-control"
                    value={formData[field]}
                    onChange={handleChange}
                  />
                </div>
              ))}
            </div>

            <div className="modal-footer">
              <button
                id="closeModalBtn"
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button type="button" className="btn btn-success" onClick={handleSubmit}>
              Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <UserPosts />
    </div>
  );
}
