import { useEffect, useState } from 'react';
import { PostData } from '../domain/posts/post';

const getPosts = async (): Promise<PostData[]> => {
  const posts = await fetch('https://shrouded-plains-22485-333d22db38bc.herokuapp.com/api/posts?populate=*');
  const jsonPosts = await posts.json();
  return jsonPosts.data;
};

export default function Home() {
  const [posts, setPosts] = useState<PostData[]>([]);
  useEffect(() => {
    getPosts().then((response) => setPosts(response));
  }, [posts]);

  return (
    <div>
      {posts.map((post) => (
        <h2 key={post.id}>{post.attributes.title}</h2>
      ))}
    </div>
  );
}
