{
  // 1
  function getRandomPostTitle() {
    // 여기에 코드를 작성하세요
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (!res.ok) throw new Error("에러 발생함");
        return res.json();
      })
      .then((posts) => {
        const randomIdx = Math.floor(Math.random() * posts.length);
        console.log(`Q1: Random Post Title: ${posts[randomIdx].title}`);
      })
      .catch(console.error);
  }

  // getRandomPostTitle(); // Random Post Title: nostrum quis quasi placeat
}
{
  // 2
  function getUserInfo(userId) {
    // 여기에 코드를 작성하세요
    fetch("https://jsonplaceholder.typicode.com/users/" + userId)
      .then((res) => {
        if (!res.ok) throw new Error("에러 발생함");
        return res.json();
      })
      .then(({ name, email }) => {
        console.log(`Q2: Name: ${name}, Email: ${email}`);
      })
      .catch(console.error);
  }
  // getUserInfo(1); // Name: Leanne Graham, Email: Sincere@april.biz
}
{
  // 3
  function getPostDetails(postId) {
    fetch("https://jsonplaceholder.typicode.com/posts/" + postId)
      .then((res) => {
        if (!res.ok) throw new Error("에러 발생함");
        return res.json();
      })
      .then(({ title, body }) => {
        console.log(`Q3: Post Title: ${title}, Body: ${body}`);
      })
      .catch(console.error);
  }

  // getPostDetails(1); // 출력 예상 결과는 아래에
}
{
  // 4
  function getAllUsers() {
    // 여기에 코드를 작성하세요
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        if (!res.ok) throw new Error("에러 발생함");
        return res.json();
      })
      .then((users) => {
        console.log(users);
        for (const { name, email } of users) {
          console.log(`Name: ${name}, Email: ${email}`);
        }
      })
      .catch(console.error);
  }

  // getAllUsers();
}
{
  // 5
  function getPostComments(postId) {
    // 여기에 코드를 작성하세요
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then((res) => {
        if (!res.ok) throw new Error("에러 발생함");
        return res.json();
      })
      .then((posts) => {
        for (const { body } of posts) {
          console.log(body);
        }
      })
      .catch(console.error);
  }

  // getPostComments(1);
}
{
  // 6
  function getAllCommentBodies() {
    // 여기에 코드를 작성하세요
    fetch(`https://jsonplaceholder.typicode.com/comments`)
      .then((res) => {
        if (!res.ok) throw new Error("에러 발생함");
        return res.json();
      })
      .then((comments) => {
        for (const comment of comments) {
          console.log(`Comment:${comment.body} `);
        }
      })
      .catch(console.error);
  }

  // getAllCommentBodies();
}
{
  // 7
  function getSortedPostTitles() {
    // 여기에 코드를 작성하세요
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => {
        if (!res.ok) throw new Error("에러 발생함");
        return res.json();
      })
      .then((posts) => {
        const sortTitles = posts.map((post) => post.title).sort();
        for (const title of sortTitles) {
          console.log(`${title} `);
        }
      })
      .catch(console.error);
  }

  // getSortedPostTitles();
}
{
  // 8
  function getAllUserAddresses() {
    // 여기에 코드를 작성하세요
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        if (!res.ok) throw new Error("에러 발생함");
        return res.json();
      })
      .then((users) => {
        // console.log(users);
        for (const user of users) {
          console.log(user.address);
        }
      })
      .catch(console.error);
  }

  // getAllUserAddresses();
}
{
  // 9
  function getUserPostTitles(userId) {
    // 여기에 코드를 작성하세요
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((res) => {
        if (!res.ok) throw new Error("에러 발생함");
        return res.json();
      })
      .then((posts) => {
        console.log(posts);
        for (const { title } of posts) {
          console.log(title);
        }
      })
      .catch(console.error);
  }

  getUserPostTitles(1);
}
