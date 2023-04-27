const USERS_API_URL = 'https://gorest.co.in/public-api/users';

const usersList = document.getElementById('users-list');

async function getUsers() {
  try {
    const response = await fetch(USERS_API_URL);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error(error);
  }
}

function displayUsers(users) {
  usersList.innerHTML = '';
  users.forEach(user => {
    const li = document.createElement('li');
    li.classList.add('list-group-item');
    const link = document.createElement('a');
    link.innerText = user.name;
    link.href = "./posts.html?id=" + user.id;
    li.appendChild(link);
    usersList.appendChild(li);
  });
}

async function init() {
  const users = await getUsers();
  if (users.length > 0) {
    displayUsers(users);
  } else {
    usersList.innerHTML = '<div class="alert alert-warning" role="alert">Користувачі не знайдені</div>';
  }
}

init();




