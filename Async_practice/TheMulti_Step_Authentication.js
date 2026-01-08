// Goal: Practice "Chaining" or sequential awaits (One thing after another).
// ● The Scenario: A user logs in. You need to find the user first, then check their
// subscription.
// ● The Functions:
// 1. getUser(username): Resolves with { name: "Rahul", type:
// "Premium" } after 1.5s.
// 2. checkSubscription(user): Takes the user object. If type is "Premium",
// resolve with "Access Granted to Netflix". Otherwise, reject with
// "Please Subscribe".

// ● The Requirement: Create a "Consumer" function that calls getUser first, then passes
// that result into checkSubscription.

function getUser(username) {
    return new Promise((resolve) => {
        setTimeout(() => {
              const users={1:{id:1,name:'John Doe',age:30,type:'Basic'},2:{id:2,name:'Jane Smith',age:25,type:'Premium'},3:{id:3,name:'Alice Johnson',age:28,type:'Basic'}}
              const user = users[username];
            resolve({ name: user.name, type: user.type });
        }, 1500);
    });
}

function checkSubscription(user) {
    return new Promise((resolve, reject) => {
        if (user.type === "Premium") {
            resolve("Access Granted to Netflix");
        } else {
            reject("Please Subscribe");
        }
    });
}

// Consumer function to chain the calls
async function authenticateUser(username) {
    try {
        const user = await getUser(username);
        const accessMessage = await checkSubscription(user);
        console.log(accessMessage);
    } catch (error) {
        console.log(error);
    }
}
authenticateUser("Rahul");  // After ~1.5s, logs: "Access Granted to Netflix"
