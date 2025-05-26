let user = {
    name: "João",
    email: "joao@gmail.com"
};

let userWithStatus = {
    ...user,
    status: "active"
};

console.log(userWithStatus);