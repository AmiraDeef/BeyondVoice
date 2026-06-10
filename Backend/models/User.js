const mongoose = require("mongoose")
const bcrypt = require("bcrypt");
const UserSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "Full name Must Be Required"],
        trim: true,

    },
    email: {
        type: String,
        required: [true, "Email Must Be Required"],
        trim: true,
        unique: true,
        lowercase: true,
    }
    , password: {
        type: String,
        required: [true, "Email Must Be Required"],
        select: false,
        minlength: 6,

    }
    ,
    role: {
        required: [true, "Role is required"],
        type: String,
        enum:{
            values:["candidate", "company", "admin"],
            message: 'Please choose a valid role'
        } ,
    },profilePhoto: { type: String }

}, { timestamps: true })

//hooks


//hash pass
UserSchema.pre("save",async function () {
    if(!this.isModified("password"))return next();
    this.password=await bcrypt.hash(this.password,10)
    
})

//compare pass
UserSchema.methods.comparePassword= async function (matchPass) {
   return await bcrypt.compare(matchPass,this.password)
}

const User = mongoose.model("User", UserSchema)

module.exports = User;