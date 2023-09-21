import videoFiles from '../models/videoFiles.js'
export const uploadVideo=async(req,res,next)=>{
    console.log(uploadVideo);
    if(req.file===undefined){
        res.status(404).json({message:"Plz Upload a '.mp4' video file only "})
    }
    else{
        try {
            const file=new videoFiles({
                videoTitle: req.body.title,
                fileName: req.file.originalname,
                filePath: req.file.path,
                fileType:req.file.mimetype,
                fileSize: req.file.size,
                videoChanel: req.body.chanel,
                Uploader: req.body.Uploader,
            })
            await file.save();
            res.status(201).send("File upload successfully")
        
        } catch (error) {
            res.status(400).send(error.message)
        }
    }
}