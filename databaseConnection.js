const mongoose = require('mongoose');

mongoose.set("strictQuery", true);

const connect = async () => {
    await mongoose.connect(
        process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/caofaceiro',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
        (error) => {
            if (error) {
                console.log('Fail to connect dabase');
                console.log(error);
                return;
            }
            console.log('Connected to database');
        }
    );
};

module.exports = connect;

