// import React, { useState } from 'react'
// import { postsAPI } from "@/api/post"; 

// const AddNewPost = ({user}) => {
//     const [postForm, setPostForm] = useState({
//         title: "",
//         content: "",
//         sectionTitle: "",
//         sectionBody: ""
//     });
//     const handlePostChange = (e) => {
//         const { name, value } = e.target;
//         setPostForm((prev) => ({ ...prev, [name]: value }));
//     };

//     const handleCreatePost = async () => {
//         try {
//             const newPost = {
//                 title: postForm.title,
//                 content: postForm.content,
//                 userId: user.id,
//                 sections: [
//                     {
//                         title: postForm.sectionTitle,
//                         body: postForm.sectionBody,
//                     }
//                 ]
//             };
//             await postsAPI(newPost);
//             alert("Post created successfully!");
//             document.getElementById("closePostModal").click();
//             setPostForm({ title: "", content: "", sectionTitle: "", sectionBody: "" });
//         } catch (error) {
//             console.error("Post creation error:", error);
//             alert("Failed to create post.");
//         }
//     };
      
//   return (
//     <>
//           <button
//               className="btn btn-outline-success"
//               data-bs-toggle="modal"
//               data-bs-target="#newPostModal"
//           >
//               ➕ Add Post
//           </button>
//           <div
//               className="modal fade"
//               id="newPostModal"
//               tabIndex="-1"
//               aria-labelledby="newPostModalLabel"
//               aria-hidden="true"
//           >
//               <div className="modal-dialog">
//                   <div className="modal-content rounded-4">
//                       <div className="modal-header">
//                           <h5 className="modal-title text-success" id="newPostModalLabel">
//                               ✍️ Create New Post
//                           </h5>
//                           <button
//                               type="button"
//                               className="btn-close"
//                               data-bs-dismiss="modal"
//                               aria-label="Close"
//                           />
//                       </div>
//                       <div className="modal-body">
//                           <div className="mb-3">
//                               <label className="form-label">Post Title</label>
//                               <input
//                                   type="text"
//                                   name="title"
//                                   className="form-control"
//                                   value={postForm.title}
//                                   onChange={handlePostChange}
//                               />
//                           </div>
//                           <div className="mb-3">
//                               <label className="form-label">Content</label>
//                               <textarea
//                                   name="content"
//                                   className="form-control"
//                                   value={postForm.content}
//                                   onChange={handlePostChange}
//                               />
//                           </div>
//                           <div className="mb-3">
//                               <label className="form-label">Section Title</label>
//                               <input
//                                   type="text"
//                                   name="sectionTitle"
//                                   className="form-control"
//                                   value={postForm.sectionTitle}
//                                   onChange={handlePostChange}
//                               />
//                           </div>
//                           <div className="mb-3">
//                               <label className="form-label">Section Body</label>
//                               <textarea
//                                   name="sectionBody"
//                                   className="form-control"
//                                   value={postForm.sectionBody}
//                                   onChange={handlePostChange}
//                               />
//                           </div>
//                       </div>
//                       <div className="modal-footer">
//                           <button
//                               id="closePostModal"
//                               type="button"
//                               className="btn btn-secondary"
//                               data-bs-dismiss="modal"
//                           >
//                               Cancel
//                           </button>
//                           <button
//                               type="button"
//                               className="btn btn-success"
//                               onClick={handleCreatePost}
//                           >
//                               Submit Post
//                           </button>
//                       </div>
//                   </div>
//               </div>
//           </div>

//     </>
//   )
// }

// export default AddNewPost
import React, { useState } from "react";
import { postsAPI } from "@/api/post";

const AddNewPost = ({ user }) => {
    const [postForm, setPostForm] = useState({
        title: "",
        content: "",
        sectionTitle: "",
        sectionBody: "",
    });

    const handlePostChange = (e) => {
        const { name, value } = e.target;
        setPostForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleCreatePost = async () => {
        try {
            const newPost = {
                title: postForm.title,
                content: postForm.content,
                userId: user.id,
                sections: [
                    {
                        title: postForm.sectionTitle,
                        body: postForm.sectionBody,
                    },
                ],
            };
            await postsAPI(newPost);
            alert("Post created successfully!");
            document.getElementById("closePostModal")?.click();
            setPostForm({ title: "", content: "", sectionTitle: "", sectionBody: "" });
        } catch (error) {
            console.error("Post creation error:", error);
            alert("Failed to create post.");
        }
    };

    return (
        <>
            <div className="d-flex justify-content-end my-4">
                <button
                    className="btn btn-outline-success shadow-sm"
                    data-bs-toggle="modal"
                    data-bs-target="#newPostModal"
                >
                    ➕ Add Post
                </button>
            </div>

            <div
                className="modal fade"
                id="newPostModal"
                tabIndex="-1"
                aria-labelledby="newPostModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content rounded-4 shadow">
                        <div className="modal-header bg-success bg-opacity-10 border-0">
                            <h5 className="modal-title text-success fw-bold" id="newPostModalLabel">
                                Create New Post
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>

                        <div className="modal-body">
                            <div className="row g-3">
                                <div className="col-md-12">
                                    <label className="form-label fw-semibold">Post Title</label>
                                    <input
                                        type="text"
                                        name="title"
                                        className="form-control shadow-sm"
                                        placeholder="Enter post title..."
                                        value={postForm.title}
                                        onChange={handlePostChange}
                                    />
                                </div>

                                <div className="col-md-12">
                                    <label className="form-label fw-semibold">Content</label>
                                    <textarea
                                        name="content"
                                        rows="3"
                                        className="form-control shadow-sm"
                                        placeholder="Write your content here..."
                                        value={postForm.content}
                                        onChange={handlePostChange}
                                    />
                                </div>

                                <hr className="my-3" />

                                <div className="col-md-6">
                                    <label className="form-label fw-semibold">Section Title</label>
                                    <input
                                        type="text"
                                        name="sectionTitle"
                                        className="form-control shadow-sm"
                                        placeholder="Section title..."
                                        value={postForm.sectionTitle}
                                        onChange={handlePostChange}
                                    />
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label fw-semibold">Section Body</label>
                                    <textarea
                                        name="sectionBody"
                                        rows="2"
                                        className="form-control shadow-sm"
                                        placeholder="Section body..."
                                        value={postForm.sectionBody}
                                        onChange={handlePostChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer border-0 pt-3">
                            <button
                                id="closePostModal"
                                type="button"
                                className="btn btn-outline-secondary"
                                data-bs-dismiss="modal"
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                className="btn btn-success px-4"
                                onClick={handleCreatePost}
                            >
                                Submit Post
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddNewPost;
