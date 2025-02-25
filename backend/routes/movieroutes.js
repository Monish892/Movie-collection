const express=require('express')
const router=express.Router()
const Movie=require('../models/movies')


router.post('/', async (req,res)=>{
     try{
        const movie=new Movie(req.body)
        await movie.save()
        res.status(200).json({movie})
     }catch(error){

        res.status(400).send(error)

     }
})


router.get('/:id?',async(req,res)=>{
    try{
       if(req.params.id){
        const movie=await Movie.findById(req.params.id)
        if(!movie){
            return res.status(400).send();
        }
        res.send(movie)
       } else{
        const movies=await Movie.find({})
        res.send(movies)
       }

    } catch(error){
          res.status(500).send(error)
    }
})


router.put('/:id',async(req,res)=>{
    try{
        const movie=await Movie.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
        if(!movie){
            return res.status(404).send()
        }

        res.send(movie)
    } catch(error){
        res.status(400).send(error)
    }
})


router.delete('/:id',async(req,res)=>{
    try{
        const movie=await Movie.findByIdAndDelete(req.params.id);
        if(!movie){
            return res.status(404).send()
        }

        res.send(movie)
    }catch(error){
        res.status(400).send(error)
    }
})


module.exports=router;