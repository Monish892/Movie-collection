const express=require('express')
const mongoose=require('mongoose')
const port=process.env.port || 5000;
const app=express()
const Movieroutes=require('./routes/movieroutes')


app.use(express.json())


mongoose.connect('mongodb+srv://grmonishs65:2007@asap-project.izf50.mongodb.net/asdada').then(()=>console.log('Connected to Mongodb')).catch(err=>console.log('Not Connected',err))

app.use('/api/movies',Movieroutes)

app.listen(port,()=>{

    console.log(`server is running on the port ${port}`);
    
})




