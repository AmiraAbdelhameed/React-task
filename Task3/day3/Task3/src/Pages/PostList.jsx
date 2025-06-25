
import { getPosts } from "@/api/post";
import { getUserById } from "@/api/user";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPostsWithUsernames = async () => {
    try {
      const res = await getPosts();
      const postsWithUsernames = await Promise.all(
        res.data.map(async (post) => {
          const userRes = await getUserById(post.userId);
          return {
            ...post,
            userName: userRes.data?.name || "Unknown",
          };
        })
      );
      setPosts(postsWithUsernames);
    } catch (error) {
      console.error("Error fetching posts or users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPostsWithUsernames();
  }, []);

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-primary"> All Posts</h2>

      {loading ? (
        <div className="text-muted">Loading posts...</div>
      ) : posts.length === 0 ? (
        <div className="alert alert-warning">No posts available.</div>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {posts.map((post) => (
            <div className="col" key={post.id}>
              <Link to={`/posts/${post.id}`} style={{textDecoration:'none'}}>
                <div className="card shadow-sm border-0 h-100">
                  <div className="card-body">
                    <h5 className="card-title text-primary">{post.title}</h5>
                    <p className="card-text">{post.content}</p>

                    {post.sections?.length > 0 && (
                      <div className="mt-3">
                        <h6 className="text-secondary">Sections</h6>
                        <ul className="list-group list-group-flush">
                          {post.sections.map((section, idx) => (
                            <li className="list-group-item" key={idx}>
                              <strong>{section.title}</strong>: {section.body}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  <div className="card-footer bg-white border-0 text-end">
                    <small className="text-muted">
                      By: <strong>{post.userName}</strong>
                    </small>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
