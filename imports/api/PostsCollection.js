import { createCollection } from "meteor/quave:collections";

import SimpleSchema from "simpl-schema";

import { UsersCollection } from "./UsersCollection";

export const PostsSchema = new SimpleSchema({
  emailId: {
    type: String,
  },
  message: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
});

export const PostsCollection = createCollection({
  name: "posts",
  schema: PostsSchema,
  helpers: {
    email() {
      return UsersCollection.findOne(this.emailId);
    },
  },
});
