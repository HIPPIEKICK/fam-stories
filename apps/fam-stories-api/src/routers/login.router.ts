import * as express from 'express';
//import router from './family.router';
import mongoose from "mongoose";
import * as crypto from "crypto";
import { getDb } from '../mongoDbClient';

import * as bcrypt from 'bcryptjs';
//const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/project-mongo";
//mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
//mongoose.Promise = Promise;

//const port = process.env.PORT || 8090;
//const app = express();

///////
const router = express.Router(); //?
/*
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  // npm install crypto
  accessToken: {
    type: String,
    default: () => crypto.randomBytes(128).toString("hex")
  }
});
*/
type User = {
  username: string;
  password: string;
  accessToken: string;
}

router.get('/', async(req, res) => { 
  const dbConnection = getDb();
    const collection = dbConnection.collection('login');

    const everyOne = await collection.find({}).toArray();
    return res.json(everyOne);
});


router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  
  if(username === "" || password === "") {
    return res.status(400).json({
      success: false,
      response: "Please provide both username and password"
    });
  }
// npm install bcrypt
  try {
    const salt = bcrypt.genSaltSync();
    if (password.length < 8) {
      res.status(400).json({
        success: false,
        response: "Password must be at least 8 characters long"
      });
    } else {
      const dbConnection = getDb();
      const collection = dbConnection.collection('login');
      
      const hash = bcrypt.hashSync(password, 10);

      const newUser:User = {username: username, password: hash, accessToken: crypto.randomBytes(128).toString("hex")};
      const insertResponse = await collection.insertOne(newUser);

      res.status(201).json({
        success: true,
        response: {
          username: newUser.username,
          accessToken: newUser.accessToken,
          id: insertResponse.insertedId
        }
      });
    }
  } catch(error) {
      res.status(400).json({
        success: false,
        response: error
      });
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const dbConnection = getDb();
    const collection = dbConnection.collection('login');

    const user = await collection.findOne({username});
    if (user && bcrypt.compareSync(password, user.password)) {
      res.status(200).json({
        success: true,
        response: {
          username: user.username,
          id: user._id,
          accessToken: user.accessToken
        }
      });
    } else {
      res.status(400).json({
        success: false,
        response: "Credentials didn't match"
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      response: error
    });
  }
});




export default router;

/*
const RecipesSchema = new mongoose.Schema({
  id: {
    type: Number
  },
  Name: {
    type: String
  },
  Ingredients: {
    type: String
  },
  TotalTimeMinuits: {
    type: Number
  },
  Portions: {
    type: Number
  },
}); 

const Recipes = mongoose.model("Recipe", RecipesSchema);

if (true) {
  const resetDatabase = async () => {
    await Recipes.deleteMany();
    RecipeData.forEach(item => {
      const newRecipe= new Recipes(item);
      newRecipe.save();
    })
  }
  resetDatabase();
}

app.get("/recipes", authenticateUser);
app.get("/recipes", async (req, res)=> {
  const recipes = await Recipes.find({});
  res.status(200).json({ success: true, response: recipes });
}); 


// Start defining your routes here
app.get("/", (req, res) => {
  res.send("Welcome to Recipes!");
}); 

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
}); */