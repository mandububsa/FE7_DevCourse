console.log("start");
fetch("https://jsonplaceholder.typicode.com/posts") //
  .then((res) => res.json())
  .then((posts) => {
    for (const post of posts) {
      console.log(post);
    }
  });
console.log("end");
