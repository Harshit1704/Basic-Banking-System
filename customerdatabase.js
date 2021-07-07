const v = async () => {
    await Customer.deleteMany({});
    await Customer.insertMany([{
        username: "Harshit Srivastava", email: "harshit7862012@gmail.com", Balance: 1000, avatar: "https://media-exp3.licdn.com/dms/image/C4E03AQGBGe0RNtyYmg/profile-displayphoto-shrink_800_800/0/1624626589735?e=1630540800&v=beta&t=QbNXxcZZwHrW8ebOnDdFZDYdY4-uwBLgU1Ae4QDSq08", contact: 9565778877, about: "Web Developer & Designer Intern, The Sparks Foundation"
    }, 
    {
        username: "Karn Srivastava", email: "karna@gmail.com", Balance: 1000, avatar: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80", contact: 9876543210, about: "Android App developer"
    }, 
    {
        username: "Puskar Tiwari", email: "pushkar@gmail.com", Balance: 1000, avatar: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80", contact: 9513574568, about: "AI & ML Developer"
    },
    {
        username: "Ram Singh", email: "ram951@gmail.com", Balance: 1000, avatar: "https://images.unsplash.com/photo-1504593811423-6dd665756598?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80", contact: 9137468250, about: "Software Engineer, Google"
    },
    {
        username: "Karan Luthra", email: "thekaranluthra@gmail.com", Balance: 1000, avatar: "https://images.unsplash.com/photo-1494708001911-679f5d15a946?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80", contact: 1238524697, about: "Artist"
    },
    {
        username: "Rishabh Luthra", email: "rishabh786@gmail.com", Balance: 1000, avatar: "https://images.unsplash.com/photo-1555092394-6ed41ac4afb8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80", contact: 9335585229, about: "Painter"
    },
    {
        username: "Preeta Arora", email: "preeta1@gmail.com", Balance: 1000, avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80", contact: 9797854613, about: "Data Scientists"
    },
    {
        username: "Shrishti Arora", email: "shrishti2@gmail.com", Balance: 1000, avatar: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=755&q=80", contact: 9696959493, about: "Software Engineer, Infosys"
    },
    {
        username: "Shyam Singh", email: "shyam123@gmail.com", Balance: 1000, avatar: "https://images.unsplash.com/photo-1615567964485-0ee76b5b3410?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80", contact: 8529637415, about: "Software Development Engineer, Microsoft"
    },
    {
        username: "Manas Dixit", email: "dixmanas@gmail.com", Balance: 1000, avatar: "https://images.unsplash.com/photo-1610431205421-739e027cc0ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80", contact: 4563219512, about: "Archaelogists"
    }]);
};
