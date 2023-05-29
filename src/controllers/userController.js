const User = require("../models/user");

exports.getUser = async (req, res) => {
    const data = await User.find({}).populate("product").limit(2);
    res.status(200).send({data: data });
};

exports.createUser = async (req, res) => {
    try{
        const user = await User.insertMany(req.body);
        res.status(200).send({ user: user });
    }catch (error){
        res.status(500).send({ message: "Error"});
    }
};

exports.deleteUser = async (req, res) => {
    const id = req.params.id;
    await User.findByIdAndDelete(id);
    res.status(200).send({deletedUser: "User Deleted SuccessFully"});
};

exports.updateUser = async (req, res) => {
    const id = res.params.id;
    await User.findByIdAndDelete();
    res.status(200).send({ deletedUser: "user Deleted SuccessFully"});
};
