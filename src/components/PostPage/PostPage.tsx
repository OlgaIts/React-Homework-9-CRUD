import {useEffect, useState} from "react";
import {Link, useParams, useNavigate} from "react-router-dom";
import classNames from "classnames";
import {Post} from "../Post/Post";
import {EditPostCard} from "../EditPostCard";
import styles from "./PostPage.module.scss";

const url = "http://localhost:7072/posts/";

export const PostPage = () => {
  const [post, setPost] = useState<Post | null>(null);
  const [isEditView, setIsEditView] = useState(false);
  const {id} = useParams();
  const navigate = useNavigate();

  const getPost = async (id: string) => {
    let response = await fetch(`${url}${id}`);
    let result = await response.json();
    setPost(result.post);
  };

  useEffect(() => {
    if (id) {
      getPost(id);
    }
  }, []);

  const editPost = () => {
    setIsEditView(true);
  };

  const deletePost = async () => {
    const response = await fetch(`${url}${id}`, {
      method: "DELETE",
    });
    if (response) {
      navigate("/");
    }
  };

  const renderBtns = () => {
    return (
      <div className={styles.btns_wrap}>
        <button
          className={classNames(styles.btn, styles.edit_btn)}
          onClick={editPost}
        >
          Изменить
        </button>
        <button
          className={classNames(styles.btn, styles.delete_btn)}
          onClick={deletePost}
        >
          Удалить
        </button>
      </div>
    );
  };

  const savePost = (post: Post) => {
    setIsEditView(false);
    getPost(post.id);
  };

  if (!post) {
    return null;
  }

  return (
    <>
      <Link to={"/"} className={styles.link}>
        Вернуться на главную
      </Link>
      {isEditView ? (
        <EditPostCard
          post={post}
          onSave={savePost}
          onClose={() => setIsEditView(false)}
        />
      ) : (
        <Post renderActions={renderBtns} post={post} />
      )}
    </>
  );
};
