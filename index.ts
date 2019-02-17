interface Admin {
  id: string;
  role: string;
}

interface User {
  email: string;
}

function redirect(user: Admin | User) {
  // if (isAdmin(user)) {
  if('role' in user) {
    routeToAdminPage(user.role)
  } else {
    routeToHomePage(user.email)
  }
}

// function isAdmin(user: Admin | User): user is Admin {
//   return (<Admin>user).role !== undefined
// }