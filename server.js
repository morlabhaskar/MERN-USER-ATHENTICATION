const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Registeruser = require('./model')
const jwt = require('jsonwebtoken')
const middleware = require('./middleware')
const cors = require('cors')  //cors is used to reqest sent from backend to frontend without any errors


// this is for testing purpose with test API like that
// app.get('/',(req, res) => {
//     res.send('Hello World')
// })

mongoose.connect("mongodb+srv://morlabhaskar306:ZdG5JZtg8UTfugK0@bhaskar.smjwtfm.mongodb.net/?retryWrites=true&w=majority",{
    //if any wornings we can use these terms
    // useUnifiedTopology:true,
    // useNewUrlParser:true,
    // useCreateIndex:true,
}
)
// .then(() => app.listen(5000))
.then(()=>console.log("MongoDB Connected..."))

//post the data we can use body parser, this data is json formate
app.use(express.json())
app.use(cors({origin:"*"}))

//for register method
app.post('/register',async (req, res) => {
    try {
        const {username,email,password,conformpassword} = req.body;
        let exist = await Registeruser.findOne({email})
        if(exist) {
            //400 is authentication error
            return res.status(400).send('User Already Exist')
        }
        if(password !== conformpassword) {
            return res.status(400).send('Password is Not Match!')
        }
        let newUser = new Registeruser({
            username,
            email,
            password,
            conformpassword
        })
        //that data to be saved some time is delay,so that time is handled to usr await
        await newUser.save();
        res.status(200).send('Register Successfully!')

    }
    catch(err) {
        console.log(err);
        return res.status(500).send('Internal server Error!')
    }
})

//after that test the code if data is "posted" or not with TestAPT

//for login method
app.post('/loginform',async (req, res) => {
    try{
        const {email,password} = req.body;
        let exist = await Registeruser.findOne({email});
        if(!exist) {
            return res.status(400).send('User Not Found!')
            //  alert("User Not Register")
            //  res.status(200).send('User Not Found')
        }
        if(exist.password !== password) {
            return res.status(400).send('User Not Found!')
            // res.status(200).send('User Not Found')
        }

        let payload = {
            user : {
                id : exist.id
            }
        }
        jwt.sign(payload,'jwtSecret',{expiresIn:3600000},     //jwt.sign(payload,key,expiresIn)
            (err,token) =>{
                if (err) throw err
                return res.json({token})
            }
               )
    }
    catch(err) {
        console.log(err);
        // console.error(err.res.data)
        return res.status(500).send('Server Error!')
    }
})

// get data into component
app.get('/myprofile',middleware,async(req,res) => {
    try {
        let exist = await Registeruser.findById(req.user.id);
        if(!exist){
            return res.status(400).send('User is Not Found!')
        }
        res.json(exist);

    }
    catch(err) {
        console.log(err)
        return res.status(500).send('Server Error!')
    }
})


app.listen(5000,() => {
    console.log('Server Running!')
})