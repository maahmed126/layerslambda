const { v4: uuidv4 } = require('uuid');
const { sqrt } = require('mathjs')

exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda Test!'),
    };
    
    console.log(sqrt(-4).toString()); // 2i
    return uuidv4();

};
