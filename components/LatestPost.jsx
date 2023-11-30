async function getLatestPostData() {
  const res = await fetch("http://localhost:3000/api/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
const LatestPost = async () => {
  const posts = await getLatestPostData();
  console.log(posts);
  return (
    <main>
      {posts.map((post) => (
        <div key={post.id}>
          {/* <Image
            src={post.image}
            width={200}
            height={200}
            alt="post-image"
          ></Image> */}
          <h1>{post.title}</h1>
        </div>
      ))}
    </main>
  );
};

export default LatestPost;
