import User from "../models/user.model.js";

const signupHandler = async (req, res) => {
	const { fullName, email, password } = req.body;
	await User.create({
		fullName,
		email,
		password,
	});

	res.redirect("/home");
};

const signIn = async (req, res) => {
	const { email, password } = req.body;
	try {
		const token = await User.matchPasswordAndGenerateToken(email, password);

		return res.cookie("token", token).redirect("/");
	} catch (error) {
		return res.render("signin", {
			error: "Incorrect Credentials",
		});
	}
};

export { signupHandler, signIn };
