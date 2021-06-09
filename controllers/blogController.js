const Blog = require('../models/blog');
exports.getIndexpage = async (req, res) => {
  const blog = await Blog.find({});
  res.render('index', { blog: blog });
};

exports.getAboutpage = (req, res) => {
  res.render('about');
};

exports.getAddpostpage = (req, res) => {
  res.render('add_post');
};
exports.postAddpostpage = async (req, res) => {
  await Blog.create(req.body);
  res.redirect('/');
};
