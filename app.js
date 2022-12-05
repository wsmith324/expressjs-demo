const express=require("express")

// Importing all the routes
const instroute=require('./controllers/instruments')
const accroute=require('./controllers/accessories')

// Creating express server
const app=express();

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

// Handling routes request
app.use("/instruments", instroute);
app.use("/accessories", accroute);

app.get('/', function(req, res) {
  res.send('Hello from root route.');
});

app.listen((3001),()=>{
	console.log("Server is Running");
})


