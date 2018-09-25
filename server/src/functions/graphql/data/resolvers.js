import User from "./../../model/PhUser";

const resolvers = {
  Query: {
    getUsers: () => {
      let result;

      User.find()
        .exec()
        .then(users => {
          result = users;
        })
        .catch(err => {
          console.log("Error when obtaining Users.");
        });
      return result;
    }
  },
  Mutation: {
    createUser: (obj, args, context, info) => {
      let newUser = new User(args.input);

      newUser.save().catch(err => {
        console.log("Error when creating user.");
      });

      return newUser;
    },
    updateUser: (obj, args, context, info) => {
      console.log("Updating user");
      console.log(args);

      return null;
    },
    deleteUser: (obj, args, context, info) => {
      console.log("Deleting user");
      console.log(args);
      return null;
    }
  }
};

export default resolvers;
