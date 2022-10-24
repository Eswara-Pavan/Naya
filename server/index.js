const express = require("express")
const mongoose = require("mongoose")

const {Schema} = mongoose

const app = express()

app.use(express.json())

const cors = require("cors")

app.use(cors())


const dataBaseConnection = async ()=>{
  try {
		await mongoose.connect(
			"mongodb+srv://eswara_pavan18:Eswara@cluster0.wdzl57s.mongodb.net/nayaData?retryWrites=true&w=majority"
		);
		console.log("db conencted.....");
		app.listen(3008, () => {
			console.log("Server running at http://localhost:3008");
		});
	} catch (error) {
		console.log(error.massage);
	}
}

dataBaseConnection()

const signUpSchema = new Schema({
  firstName: String,
  lastName:String,
  email:{type:String,required:true},
  password:String
})

const signUpSchemaModel = mongoose.model("signup",signUpSchema )

app.post("/signup/",async(req,res)=>{
  const {firstName,lastName,email,password} = req.body
  console.log(req.body)
  const userExit = await signUpSchemaModel.findOne({email:email})
  console.log("userExit==",userExit)
  if ( userExit === null) {
		await signUpSchemaModel
			.create({
				firstName,
        lastName,
        email,
        password
			})
			.then(async () => {
				res.send(true);
			})
			.catch((error) => {
				res.send(error.message);
			});
	} else {
		res.send("user aleredy exists...");
	}
})

app.post("/login/", async (req, res) => {
	const { email, password } = req.body;
	const loginUserData = await signUpSchemaModel.find({ email: email });
	console.log(loginUserData);
	if (loginUserData.length === 0) {
		res.send("Invalid user");
	} else {
		const isPasswordTrue = loginUserData[0].password === password;
		if (isPasswordTrue === true) {
			res.send(data={staus:true,name:loginUserData[0].firstName+" "+loginUserData[0].lastName});
		} else {
			res.send("Invalid password");
		}
	}
});




module.exports = app

