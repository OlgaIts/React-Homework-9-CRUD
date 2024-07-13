import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Post} from "../Post";
import styles from "./Home.module.scss";

const url = "http://localhost:7072/posts";

export const Home = () => {
  const [list, setList] = useState<Post[]>([]);

  const getPosts = async () => {
    let response = await fetch(url);
    let result = await response.json();
    setList(result);
  };

  useEffect(() => {
    getPosts();
  }, []);

  const renderInput = (post: Post) => {
    return (
      <div className={styles.input_wrap}>
        <input
          type='text'
          placeholder='Напишите комментарий...'
          className={styles.input}
        />
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.create_post}>
        <Link to={"/newpost"} className={styles.btn}>
          Создать пост
        </Link>
      </div>

      <ul className={styles.list}>
        {list.map((item) => (
          <li key={item.id}>
            <Post
              post={item}
              renderActions={renderInput}
              to={`/posts/${item.id}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
