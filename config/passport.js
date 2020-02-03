const passport = require("passport");
const LocalStrategy = require("passport-local");
const UserModel = require("../database/models/user_model");
const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt");

//Local Strategy for UserModel email + password login authentication

//'Serialization' - writing data as a string (here for storage in internal passport tracker)
//Receive a user object (i.e. the current user) from the DB >
//Save that user's _id in the passport internal session to refer to the WHOLE user (via done-method chain) >
//passport.user now equals an object containing the user's _id value stored as 'id' (req.session.passport.user = {id: '1234'})
passport.serializeUser((user, done) => {
  done(null, user._id);
});

//'Deserialization' - converting data string back into an object (using internal session id to retrieve DB record, then passing as object with outgoing req)
//Takes an callback (for async activation purposes) that itself takes an id and retrieves the id-matching user record from the DB >
//done-chaining attaches that whole user record to the outgoing request (middleware interception) as req.user (distinct from internal passport session tracker above)
//The receiving controller now has access to the specified user with req.user
passport.deserializeUser(async (id, done) => {
  try {
    const user = await UserModel.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

//Declaring + passport-setting a new LocalStrategy
//First setting the passport named-argument 'usernameField' to 'email' (declaring that 'email' in the DB will function as the user's name)
//async function declares the actual local strategy logic, here - receiving an 'name' (email) and password...
//...finding a matching-email user in the DB + checking password and returning authentication failure/success...
//...done-chaining with false = failure, done-chaining with retrieved user record = success
passport.use(
  new LocalStrategy(
    {
      usernameField: "email"
    },
    async (email, password, done) => {
      const user = await UserModel.findOne({ email }).catch(done);
      if (!user || !user.verifyPasswordSync(password)) {
        return done(null, false);
      }
      return done(null, user);
    }
  )
);

//

//JWT Strategy for authentication token stored in request header (Note: should be encrypted when stored)
//JwtStrategy logic consisting of an object (with a 'get token' method declaration and the jwt key)...
//...and an async function that retrieves the user matching that of the jwt requests payload subject
passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_KEY
    },
    async (jwtPayload, done) => {
      const user = await UserModel.findById(jwtPayload.subject).catch(done);
      if (!user) {
        return done(null, false);
      }
      return done(null, user);
    }
  )
);

module.exports = passport;
