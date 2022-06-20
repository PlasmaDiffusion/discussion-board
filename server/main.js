import { Meteor } from "meteor/meteor";
import { PostsCollection } from "/imports/api/PostsCollection";

import { Accounts } from "meteor/accounts-base";

const SEED_USERNAME = "meteorite";
const SEED_PASSWORD = "password";

Meteor.methods({
  findUser(name) {
    return Accounts.findUserByUsername(name);
  }
});

Meteor.startup(() => {
  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });
  }

  // If the collection is empty, add some data.
  if (PostsCollection.find().count() === 0) {
    PostsCollection.insert({
      emailId,
      message: "Lorem ipsum dolor sit amet",
      createdAt: new Date(),
    });
  }
});
