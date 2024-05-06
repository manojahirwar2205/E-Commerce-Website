import mongoose from 'mongoose';

const Connection = async (username, password) => {
    
   // const URL = `mongodb+srv://manojahirwar2205:zeejaRkPlPaIs6ew@flipkart-web-db.5ysw7pm.mongodb.net/flipkart-web-db`

   const URL = `mongodb+srv://${username}:${password}@flipkart-web-db.5ysw7pm.mongodb.net/flipkart-web-db`
    try {
        await mongoose.connect(URL);
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;