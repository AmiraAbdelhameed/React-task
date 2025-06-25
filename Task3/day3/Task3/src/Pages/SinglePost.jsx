import { useParams } from "react-router-dom";
import { getSinglePost } from "@/api/post";
import { getUserById } from "@/api/user";
import { useEffect, useState } from "react";

export default function SinglePost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await getSinglePost(id);
        const userRes = await getUserById(res.data.userId);
        setPost({
          ...res.data,
          userName: userRes.data?.name || "Unknown",
        });
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return <div className="text-muted">Loading post...</div>;
  if (!post) return <div className="alert alert-danger">Post not found</div>;

  return (
    <div className="container my-5">
      <h2 className="mb-3 text-primary">{post.title}</h2>
      <p className="text-muted">By {post.userName}</p>
      <p>{post.content}</p>

      {post.sections?.length > 0 && (
        <div className="mt-4">
          <h5>Sections</h5>
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
  );
}
