import { createCollection } from "meteor/quave:collections";

import SimpleSchema from "simpl-schema";


export const PostsSchema = new SimpleSchema({
  email: {
    type: String,
  },
  message: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
  color: {
    type: String,
  },
});

export const PostsCollection = createCollection({
  name: "posts",
  schema: PostsSchema,
});
