const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const ImageGallery = require("../models/ImageGallery.model");
const Image = require("../models/Image.model");
// const Task = require("../models/Task.model");

// Create Image gallery
router.post("/gallery", async (req,res) => {
    try{
        const newGallery = new ImageGallery({
            images: []
        })
        const savedGallery = await newGallery.save();

        res.status(201).json({
            message: 'Empty image gallery create successfully',
            gallery: savedGallery
        })
    } catch(err){
        console.error(err)
        res.status(500).json({message: "Server error"});
    }
});


// router.post("/image", async(req, res)=>{
//     const {url} = req.body

//     try{
//         const newImage = new Image({
//             url
//         })
//         const savedImages = await newImage.save();
        
//         res.status(201).json({
//             message: 'Added image to the database'
//         })
//     }catch(err){
//         console.error(err)
//         res.status(500).json({
//             message: 'Failed to add image to Data base'
//         })
//     }
// })



router.post("/imageToGallery", async (req, res) => {
    // Saved URL from Cloudinary
    const { url } = req.body; 

    console.log("reqBody: 🎂", req.body);

    // Hardcoded Gallery ID for testing
    const galleryId = mongoose.Types.ObjectId('66e888df678cb5c7533419b2');
    
    try {
        // Update the gallery by pushing the new image URL into the images array
        const updatedGallery = await ImageGallery.findByIdAndUpdate(
            galleryId, 
            {
                $push: {
                    images: {
                        url: url
                    }
                }
            },
            { new: true } 
        );

        if (!updatedGallery) {
            return res.status(404).json({ message: 'Gallery not found' });
        }

        res.status(201).json({ message: 'Successfully added image to the gallery', updatedGallery });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to add image to gallery' });
    }
});

router.post('/getImageGallery', async (req,res) => {
    const { id } = req.body; 
    // const id = '66e888df678cb5c7533419b2'

    // console.log('yy getImageGallery: 🤢🤢🤢', id);


    try{
        const foundGallery = await ImageGallery.findOne({_id: id})
        if(!foundGallery){
            return res.status(404).json({message: 'Cant find Gallery on database'});
        } else{
            return res.status(200).json(foundGallery)
        }
    }
    catch(err){
        console.error('err', err);
        return res.status(500).json({message: 'Failed to fetch imageGallery from server'});
    }
});


module.exports = router;