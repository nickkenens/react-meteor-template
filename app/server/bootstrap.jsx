Meteor.startup(() => {

    if (Meteor.users.find().count() === 0) {
        Accounts.createUser({
            email: "nick.kenens@gmail.com",
            password: "fake"
        }, (err) => {
          console.log(err);
        });
    }

});
