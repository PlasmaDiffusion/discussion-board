import { Meteor } from 'meteor/meteor';
import { PostsCollection } from '/imports/api/PostsCollection';
import { UsersCollection } from '/imports/api/UsersCollection';


Meteor.startup(() => {

  let emailId = "";

  // If the collection is empty, add some data.


  if (PostsCollection.find().count() === 0) {
    emailId = UsersCollection.insert({email:"test@gmail.com"})
    PostsCollection.insert({emailId, message: "Lorem ipsum dolor sit amet", createdAt: new Date()})

}


});
