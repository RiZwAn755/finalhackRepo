import mongoose,{Schema} from 'mongoose'

const StudentSchema = new Schema({
    email: {type : String ,required :true ,unique:true,max:50},
    username : {type : String,requried : true,unique:true,max:50},
    firstname : {type : String,requried : true,max:50},
    middlename : {type : String,requried : true,max:50},
    lastname : {type : String,requried : true,max:50},
    password : {type : String,requried : true,max:50},
    studentId: {type : String,requried : true,unique:true,max:50},
    institute :{type : String,requried : true,max:50},
    course :{type : String,requried : true,max:50},
    yop : {type: Number,required : true , min:4,max:4},
    conn : [{type : Schema.Types.ObjectId,ref:'Alumuni'}],
    pic_url :{type : String}
});

const AlumuniSchema = new Schema({
    email: {type : String ,required :true ,unique:true,max:50},
    username : {type : String,requried : true,unique:true,max:50},
    firstname : {type : String,requried : true,max:50},
    middlename : {type : String,requried : true,max:50},
    lastname : {type : String,requried : true,max:50},
    password : {type : String,requried : true,max:50},
    company :{type : String,requried : true,max:50},
    title :{type: Number,required : true , max:50},
    yop : {type: Number,required : true , min:4,max:4},
    studentId :{type: Number,required : true , max:50},
    conn:[{type : mongoose.Schema.Types.ObjectId,ref:'Student'}],
    profile_url : {type :String},

})

const Posts = new Schema({
    title : {type : String},
    likes : {type : String},
    pic_url : {type : String}
})

export const Alumuni = mongoose.model("Alumuni",AlumuniSchema);
export const Student = mongoose.model("Student",StudentSchema);