const Blog = require('../models/blog');
exports.postPostsdetailpage = async (req, res) => {
  await Blog.findOneAndDelete(req.params.id);
  res.redirect(`/`);
};
exports.getPostsdetailpage = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  res.render('post', { blog: blog });
};

exports.getUpdatepostpage = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  res.render('update_post', { blog: blog });
};

exports.postUpdatepostpage = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  blog.title = req.body.title;
  blog.detail = req.body.detail;
  blog.save();
  res.redirect(`/posts/${req.params.id}`);
};
