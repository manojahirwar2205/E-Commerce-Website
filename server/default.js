
import { products } from "./constants/data.js"
import Product from "./model/product-schema.js";

const defaultData = async() => {
    try {
        //await Product.deleteMany({});
        await Product.insertMany(products);
        
        console.log('Data Imported Successfully');

    } catch (error) {
        console.log('Error while insertting defaults data', error.message);
    }
}

export default defaultData;