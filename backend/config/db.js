import mongoose from 'mongoose';
  
function initDB() {
    // if connection already establishd

    // if(mongoose.connection[0].readyState) {
    //     console.log('connection is already exist')
    //     return
    // }

    // for connect mongodb
    mongoose.connect(process.env.MONGO_URI,{});
    mongoose.connection.on('connected', () => {
      console.log('connected to a mongodb')
    })
    // for error handling connect with mongodb
    mongoose.connection.on('error', () => {
        console.log('error conneted when u are trying to connect mongodb')
    })
}
export default initDB