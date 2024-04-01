// const mongoose = require("mongoose");

// module.exports = () => {
// 	const connectionParams = {
// 		useNewUrlParser: true,
// 		useUnifiedTopology: true,
// 	};
// 	try {
// 		mongoose.connect(process.env.DB, connectionParams);
// 		console.log("Connected to database successfully");
// 	} catch (error) {
// 		console.log(error);
// 		console.log("Could not connect database!");
// 	}
// };


const mongoose = require("mongoose");
module.exports = () => {
    // Define your MongoDB connection URI
    // mongodb password: apNaRNJhnKf2nfG7
    const mongoURI = 'mongodb+srv://EasyDiagnosis:EasyDiagnosis@registeration.wde4xga.mongodb.net/?retryWrites=true&w=majority&appName=EasyDiagnosis';
    // Connection parameters
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };

    try {
        mongoose.connect(mongoURI, connectionParams);
        console.log("Connected to the database successfully");
    } catch (error) {
        console.error("Error connecting to the database:", error.message);
    }
};
