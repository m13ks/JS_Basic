const POSTS_API_URL = 'https://gorest.co.in/public-api/posts?user_id=';
const COMMENTS_API_URL = 'https://gorest.co.in/public-api/comments?post_id=';

const postsList = document.getElementById('posts-list');
const postDetails = document.getElementById('post-details');
const commentsList = document.getElementById('comments-list');

async function getPosts(userId) {
  try {
    const response = await fetch(POSTS_API_URL + userId);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error(error);
  }
}

async function getComments(postId) {
  try {
    const response = await fetch(COMMENTS_API_URL + postId);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error(error);
  }
}

function displayPosts(posts) {
    postsList.innerHTML = '';
    postDetails.innerHTML = '';
    commentsList.innerHTML = '';
    posts.forEach(post => {
      const li = document.createElement('li');
      li.classList.add('list-group-item', 'list-group-item-action', 'mb-3');
      const title = document.createElement('h4');
      const titleLink = document.createElement('a');
      titleLink.setAttribute('href', `#${post.id}`);
      titleLink.innerText = post.title;
      title.appendChild(titleLink);
      const body = document.createElement('p');
      body.innerText = post.body.substring(0, 100) + '...';
      li.appendChild(title);
      li.appendChild(body);
      li.addEventListener('click', async () => {
        postDetails.innerHTML = `
          <div class="card-title">
            <h3>${post.title}</h3>
          </div>
          <div class="card-text">
            <p>${post.body}</p>
          </div>
          <a href="#" class="btn btn-secondary mt-3" id="back-btn">Назад</a>
        `;
        const comments = await getComments(post.id);
        displayComments(comments);
        
        const backBtn = document.getElementById('back-btn');
        backBtn.addEventListener('click', () => {
          postDetails.innerHTML = '';
          init(); 
        }); 
      });
      postsList.appendChild(li);
    });
}
  
  


function displayComments(comments) {
  commentsList.innerHTML = '<h3 class="mt-3 mb-3">Коментарі</h3>';
  if (comments.length > 0) {
        comments.forEach(comment => {
            const li = document.createElement('li');
            li.classList.add('list-group-item', 'list-group-item-action', 'mb-3');
            const name = document.createElement('h5');
            name.innerText = comment.name;
            const email = document.createElement('p');
            email.innerText = comment.email;
            const body = document.createElement('p');
            body.innerText = comment.body;
            li.appendChild(name);
            li.appendChild(email);
            li.appendChild(body);
            commentsList.appendChild(li);
        });
    } else {
        commentsList.innerHTML += '<p>Коментарі відсутні</p>';
    }
}

async function init() {
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get('id');
  if (userId) {
    const posts = await getPosts(userId);
    if (posts.length > 0) {
      displayPosts(posts);
    } else {
      postsList.innerHTML = '<div class="alert alert-warning" role="alert">У даного користувача відсутні пости</div>';
    }
  } 
}

init();
