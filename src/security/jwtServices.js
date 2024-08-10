const jwt = require('jsonwebtoken')
const JWT_SECRET = 'fG!4xY7&z8@Tz$3fJk1v2N9eWlR#8A5uP6kOqL'
const JWT_EXPIRES_IN = '1h';

function generateToken(payload)
{
    try
    {
        return jwt.sign(payload, JWT_SECRET,{expiresIn: JWT_EXPIRES_IN})
    }catch(error)
    {
        console.error('Error generating JWT token:', error);
        return null;
    }
}

function verifyToken(token){
    try
    {
        return jwt.verify(token, JWT_SECRET);
    }catch(error)
    {
        console.error('Error verifying JWT token:', error);
        return null;
    }
}

module.exports = {
    generateToken,
    verifyToken
};