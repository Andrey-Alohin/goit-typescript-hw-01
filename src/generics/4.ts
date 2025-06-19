type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>) {
  return initialValues;
}

const result = createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});

console.log(result);
