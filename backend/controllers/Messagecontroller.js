const Message = require('../models/Message');

const mongoose = require('mongoose')

const multer = require("multer");

// Configure multer for handling file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "files/"); // Specify the desired destination folder
  },
  filename: function (req, file, cb) {
    // Generate a unique filename for the uploaded file
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});


const upload = multer({ storage: storage });


// endpoint to post messages and store it in the backend
app.post('/api/messages', upload.single('imageFile'), async (req, res) => {
    try {
        const { senderId, recepientId, messageType, messageText } = req.body

        const newMessage = new Message({
            senderId,
            recepientId,
            messageType,
            messageText,
            timestamp: new Date(),
            imageUrl: messageType === 'image' ? req.file.path : null,
        })
        await newMessage.save();
        res.status(200).json({ message: "Message sent successfully" })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: "Internal server error" })
    }
})


///endpoint to get the userDetails to design the chat Room header
app.get("/api/user/:userId", async (req, res) => {
    try {
      const { userId } = req.params;
  
      //fetch the user data from the user ID
      const recepientId = await User.findById(userId);
  
      res.json(recepientId);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });




//endpoint to fetch the messages between two users in the chatRoom

// $or is used for multiple conditions

app.get("/messages/:senderId/:recepientId", async (req, res) => {
    try {
      const { senderId, recepientId } = req.params;
  
      const messages = await Message.find({
        $or: [
          { senderId: senderId, recepientId: recepientId },
          { senderId: recepientId, recepientId: senderId },
        ],
      }).populate("senderId", "_id name");
  
      res.json(messages);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });