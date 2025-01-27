import mongoose from "mongoose";
import { createHmac, randomBytes } from "crypto";

const userSchema = new mongoose.Schema(
	{
		fullName: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},

		password: {
			type: String,
			required: true,
		},
		salt: {
			type: String,
		},
		profileImageUrl: {
			type: String,
			default: "/images/avatar",
		},
		role: {
			type: String,
			enum: ["User", "Admin"],
		},
	},
	{ timestamp: true }
);

userSchema.pre("save", function (next) {
	const user = this;

	if (!user.isModified("password")) return;

	const salt = randomBytes(16).toString()
	const hashedPassword = createHmac("sha256", salt)
		.update(user.password)
		.digest("hex");

	this.salt = salt;
	this.password = hashedPassword;
	next();
});

userSchema.static('matchPassword',async function(email, password){
    const user =await this.findOne({email});
    if (!user) throw new Error('User Not found')

    const salt = user.salt;
    const hashedPassword = user.password
    const userProvidedPass = createHmac("sha256", salt)
    .update(password)
    .digest("hex");

    if( hashedPassword !== userProvidedPass ) throw new Error("Password Incorrecte!")

    return{...user, password: undefined, salt: undefined }
})

const User = mongoose.model("User", userSchema);

export default User;
