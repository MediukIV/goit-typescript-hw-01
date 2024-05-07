type Users = {
  name: string;
  surname: string;
  email: string;
  password: string;
}

function createOrUpdateUser(initialValues: Partial<Users>): Users {
  // Оновлення користувача
  const defaultsUser: Users = {
    name: "",
    surname: "",
    email: "",
    password: "",
  };
  return { ...defaultsUser, ...initialValues };
}

createOrUpdateUser({ 
  email: 'user@mail.com', 
  password: 'password123' 
});
