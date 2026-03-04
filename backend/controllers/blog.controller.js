import Blog from "../models/blog.model.js";
import cloudinary from "../config/cloudinary.js";

// ============================
// Get All Blogs
// ============================
export const allblogs = async (req, res) => {
  try {
    const blogs = await Blog.find({}).sort({ createdAt: -1 });

    return res.status(200).json({
      blogs,
      success: true,
      message: "All blogs",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

// ============================
// Create Blog (Cloudinary Upload)
// ============================
export const createBlog = async (req, res) => {
  try {
    const { title, category, description } = req.body;

    if (!req.file) {
      return res.status(400).json({
        message: "Image is required",
        success: false,
      });
    }

    const imageUrl = req.file.path; // 🔥 Cloudinary URL

    const blog = await Blog.create({
      title,
      category,
      description,
      image: imageUrl,
      author: {
        id: req.user._id,
        name: req.user.name,
        image: req.user.image,
      },
    });

    return res.status(201).json({
      message: "Blog created successfully",
      success: true,
      blog,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

// ============================
// Delete Blog (Cloudinary Delete)
// ============================
export const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({
        message: "Blog not found",
        success: false,
      });
    }

    if (blog.author.id.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        message: "Not authorized",
        success: false,
      });
    }

    // 🔥 Delete image from Cloudinary
    if (blog.image) {
      const parts = blog.image.split("/");
      const fileName = parts[parts.length - 1];
      const folderName = parts[parts.length - 2];
      const publicId = `${folderName}/${fileName.split(".")[0]}`;

      await cloudinary.uploader.destroy(publicId);
    }

    await blog.deleteOne();

    return res.status(200).json({
      message: "Blog deleted successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

// ============================
// Get Single Blog
// ============================
export const singleBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    return res.status(200).json({
      message: "Blog fetched successfully",
      success: true,
      blog,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

// ============================
// Get User Blogs
// ============================
export const userblogs = async (req, res) => {
  try {
    const blogs = await Blog.find({
      "author.id": req.user._id,
    }).sort({ createdAt: -1 });

    return res.status(200).json({
      message: "User blogs fetched successfully",
      success: true,
      blogs,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};