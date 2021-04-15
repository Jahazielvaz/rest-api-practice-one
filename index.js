const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');

app.use('/', express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');

  if(req.OPTIONS){
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
    res.json({})
  }

  next();
})

app.get('/', (req, res) => {
  const welcomeResponse = {
    message: 'Welcome Stranger...',
    instructions: 'Here is the list of routes you can access',
    routes: {
      users: ['users/login', 'users/register', 'users/profiles'],
      services: ['services/list', 'services/purchased', 'services/wishlist']
    },
    methods: 'GET, POST, PUT, PATCH, DELETE'
  }
  res.send(welcomeResponse)
})


app.use('/users', userRoutes);


const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listening to port ${port}...`)
})
