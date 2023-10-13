import mongoose from "mongoose";

let isConnected = false

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log("MongoDB is already connected");
        return ;
    }

    try {
        await mongoose.connect('mongodb+srv://ammarha123:GpPcQ0cew26Cxlil@cluster0.csh1fvp.mongodb.net/Cluster0?retryWrites=true&w=majority', {
            dbName: 'share_prompt',
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        isConnected = true;

        console.log("MongoDB is connected");
        
    } catch (error) {
        console.log(error);
    }
}