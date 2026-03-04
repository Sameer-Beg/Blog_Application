import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("list");
  const token = localStorage.getItem("token");

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    image: null,
  });

  const [blogs, setBlogs] = useState([]);

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fileHandler = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", formData.title);
    data.append("category", formData.category);
    data.append("description", formData.description);
    data.append("image", formData.image);

    try {
      const res = await axios.post(
        "https://blog-backend-448e.onrender.com/blogs/create",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success(res.data.message);

      setFormData({
        title: "",
        category: "",
        description: "",
        image: null,
      });
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    const allBlogs = async () => {
      try {
        const res = await axios.get(
          "https://blog-backend-448e.onrender.com/blogs/all",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setBlogs(res.data.blogs);
      } catch (error) {
        console.log("error", error);
      }
    };

    allBlogs();
  }, []);

  const removeBlog = async (blogId) => {
    try {
      const res = await axios.delete(
        `https://blog-backend-448e.onrender.com/blogs/delete/${blogId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success(res.data.message);
      setBlogs(blogs.filter((blog) => blog._id !== blogId));
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">

      {/* Sidebar */}
      <div className="md:w-64 w-full bg-gray-900 text-white p-6">
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>

        <button
          className={`w-full text-left py-2 px-4 mb-3 rounded-lg transition ${
            activeTab === "post"
              ? "bg-orange-500"
              : "bg-gray-800 hover:bg-gray-700"
          }`}
          onClick={() => setActiveTab("post")}
        >
          Post a Blog
        </button>

        <button
          className={`w-full text-left py-2 px-4 rounded-lg transition ${
            activeTab === "list"
              ? "bg-orange-500"
              : "bg-gray-800 hover:bg-gray-700"
          }`}
          onClick={() => setActiveTab("list")}
        >
          List of Blogs
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 sm:p-6">
        {activeTab === "post" ? (
          <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-6">
              Post a New Blog
            </h2>

            <form
              onSubmit={submitHandler}
              className="w-full max-w-2xl flex flex-col gap-4"
            >
              <input
                name="title"
                value={formData.title}
                onChange={onChangeHandler}
                type="text"
                placeholder="Title"
                className="border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-orange-400"
              />

              <input
                name="category"
                value={formData.category}
                onChange={onChangeHandler}
                type="text"
                placeholder="Category"
                className="border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-orange-400"
              />

              <textarea
                name="description"
                value={formData.description}
                onChange={onChangeHandler}
                rows="5"
                placeholder="Description"
                className="border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-orange-400"
              />

              <div>
                <label className="block mb-2 font-medium">
                  Choose Image
                </label>
                <input
                  onChange={fileHandler}
                  type="file"
                  accept="image/*"
                  className="border border-gray-300 rounded-lg p-2 w-full"
                />
              </div>

              <button className="bg-black hover:bg-gray-800 transition text-white rounded-full py-3 font-semibold">
                Post Blog
              </button>
            </form>
          </div>
        ) : (
          <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-6">
              List of Blogs
            </h2>

            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border px-4 py-3">Title</th>
                    <th className="border px-4 py-3">Category</th>
                    <th className="border px-4 py-3">Image</th>
                    <th className="border px-4 py-3">Remove</th>
                  </tr>
                </thead>

                <tbody>
                  {blogs.map((blog) => (
                    <tr
                      key={blog._id}
                      className="text-center hover:bg-gray-50"
                    >
                      <td className="border px-4 py-3">
                        {blog.title}
                      </td>

                      <td className="border px-4 py-3">
                        {blog.category}
                      </td>

                      <td className="border px-4 py-3">
                        <img
                          src={`https://blog-backend-448e.onrender.com/images/${blog.image}`}
                          alt={blog.title}
                          className="w-16 h-16 object-cover mx-auto rounded-md"
                        />
                      </td>

                      <td
                        className="border px-4 py-3 text-red-500 font-bold cursor-pointer hover:text-red-700 transition"
                        onClick={() =>
                          removeBlog(blog._id)
                        }
                      >
                        ✕
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;