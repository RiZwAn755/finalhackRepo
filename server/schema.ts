import mongoose,{Schema} from 'mongoose'

const StudentSchema = new Schema({
    email: {type : String ,required :true ,unique:true,max:50},
    username : {type : String,requried : true,unique:true,max:50},
    firstname : {type : String,requried : true,max:50},
    middlename : {type : String,max:50},
    lastname : {type : String,max:50},
    password : {type : String,requried : true,max:50},
    studentId: {type : String,requried : true,unique:true,max:50},
    institute :{type : String,requried : true,max:50},
    course :{type : String,requried : true,max:50},
    yop : {type: Number,required : true},
    conn : [{type : Schema.Types.ObjectId,ref:'Alumuni'}],
    posts:[{type : mongoose.Schema.Types.ObjectId,ref:'Post'}],
    pic_url :{type : String}
});

const AlumuniSchema = new Schema({
    email: {type : String ,required :true ,unique:true,max:50},
    username : {type : String,requried : true,unique:true,max:50},
    firstname : {type : String,requried : true,max:50},
    middlename : {type : String,max:50},
    lastname : {type : String,max:50},
    password : {type : String,requried : true,max:50},
    company :{type : String,requried : true,max:50},
    title :{type: String,required : true , max:50},
    yop : {type: Number,required : true },
    studentId :{type: String,required : true , max:50},
    conn:[{type : mongoose.Schema.Types.ObjectId,ref:'Student'}],
    posts:[{type : mongoose.Schema.Types.ObjectId,ref:'Post'}],
    profile_url : {type :String},

})

const PostSchema = new Schema({
    content : {type : String},
    likes : {type : String},
    user : {
        type : mongoose.Schema.Types.ObjectId,
        refs : ['Alumuni','Student']
    },
    
    pic_url : {type : String}
})

export const Alumuni = mongoose.model("Alumuni",AlumuniSchema);
export const Student = mongoose.model("Student",StudentSchema);
export const Post = mongoose.model("Post",PostSchema);