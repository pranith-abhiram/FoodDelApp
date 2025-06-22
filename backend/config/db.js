import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://pranith-abhiram:GMgpa06@cluster0.qgnic0z.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}