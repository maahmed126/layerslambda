const { v4: uuidv4 } = require('uuid');
const { sqrt } = require('mathjs');
const { get uuid } = require('./app.js');


exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    
    console.log(sqrt(-4).toString()); // 2i
    return uuidv4();

};
