import { useEffect, useState } from 'react';
import { PostData } from '../domain/posts/post';
import { getAllPosts } from '../data/posts/get-all-posts';
import HomePage from '../containers/HomePage';

export default function Home() {
  const [posts, setPosts] = useState<PostData[]>([]);
  useEffect(() => {
    getAllPosts().then((response) => setPosts(response));
  }, [posts]);

  return <HomePage posts={posts} />;
}
