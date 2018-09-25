import User from "./../../model/PhUser";

const resolvers = {
  Query: {
    getUsers: () => {
      let result = User.find({})
        .exec()
        .then(users => {
          return users;
        })
        .catch(err => {
          console.log(err);
        });

      console.log(result);

      return result;
    }
  },
  Mutation: {
    createUser: (obj, args, context, info) => {
      console.log(args);
      const newUser = new User(args);
      newUser
        .save()
        .then(saveUser => {
          console.log(saveUser);
        })
        .catch(err => {
          console.log(err);
        });

      return newUser;
    },
    updateUser: (obj, args, context, info) => {
      const updatedUser = User.findByIdAndUpdate(args.id, args, {
        new: true,
        upsert: true
      })
        .exec()
        .catch(err => {
          console.log(err);
        });

      return updatedUser;
    },
    deleteUser: (obj, args, context, info) => {
      const removedUser = User.findByIdAndRemove(args.id)
        .exec()
        .catch(err => {
          console.log(err);
        });

      return removedUser;
    }
  }
};

export default resolvers;
