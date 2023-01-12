import { getDb } from './mongoDbClient';
export const authenticateUser = async (req, res, next) => {
    const accessToken = req.header("Authorization");
    try {
      const dbConnection = getDb();
      const collection = dbConnection.collection('login');
      console.log(accessToken);
      const user = await collection.findOne({accessToken: accessToken});
  
      if (user) {
        req.user = user  
        next();
      } else {
        res.status(401).json({
          response: "Please log in",
          success: false
        })
      }
    } catch (error) {
      res.status(400).json({
        response: error,
        success: false
      })
    }
  }