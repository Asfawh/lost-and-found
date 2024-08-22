import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../models/user-model.js';

dotenv.config()
const JWT_SECRET = process.env.JWT_SECRET;

async function authorize(req, res, next){
    // verify authorization
    const { authorization } = req.headers;

    if(!authorization) {
        return res.status(401).json({ errors: 'Authorization token required.'  });
    }

    const token = authorization.split(' ')[1];

    try {
        const { id } = jwt.verify(token, JWT_SECRET);
        req.userId = await User.findById(id).select('_id');
        next();
    } catch (err) {
        console.log(err);
        return res.status(401).json({ errors: 'Request not autorized.' });
    }
}

export default authorize; 