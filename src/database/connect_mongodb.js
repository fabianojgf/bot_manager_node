const mongoose = require('mongoose');

const connectToDatabase = async () => {
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@mycluster0.vvlghhe.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`, 
    (error) => {
        if(error) {
            return console.log('Ocorreu um erro ao se conectar ao banco MongoDB.');
        }

        return console.log('Conexão com o banco MongoDB realizada com sucesso.');
    });
}

module.exports = connectToDatabase;