const express = require('express');
const mongoose = require('mongoose');


const Blog = require('./models/blog');
const blogController=require('./controllers/blogController');
const blogUpdateDeleteController=require('./controllers/blogUpdateDeleteController');
const app = express();
const port = process.env.PORT || 5000;
const dotenv = require('dotenv');


/*MIDDLEWARE*/
app.use(express.static('public'));
/*BODYPARSER MIDDLEWARE*/
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Connect DB
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify:true
});
//Template Engine
app.set('view engine', 'ejs');
/*ROUTES*/
app.get('/', blogController.getIndexpage);
app.get('/about', blogController.getAboutpage);
app.get('/add_post', blogController.getAddpostpage);
app.post('/add_post', blogController.postAddpostpage);


app.get('/posts/:id',blogUpdateDeleteController.getPostsdetailpage)
app.post('/posts/:id',blogUpdateDeleteController.postPostsdetailpage);

app.get('/update_post/:id',blogUpdateDeleteController.getUpdatepostpage);
app.post('/update_post/:id',blogUpdateDeleteController.postUpdatepostpage);


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
