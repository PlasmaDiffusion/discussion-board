import { createCollection } from 'meteor/quave:collections';

import SimpleSchema from 'simpl-schema';

export const UsersSchema = new SimpleSchema({
  email: {
    type: String,
  },
});

export const UsersCollection = createCollection({
  name: 'users',
  schema: UsersSchema,
});
