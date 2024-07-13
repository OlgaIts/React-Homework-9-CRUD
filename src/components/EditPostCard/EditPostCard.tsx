import {useState} from "react";
import {Post} from "../Post";
import photoIcon from "../../assets/photo.svg";
import smileIcon from "../../assets/smile.svg";
import mapIcon from "../../assets/location.svg";
import gifIcon from "../../assets/gif.svg";
import personIcon from "../../assets/person_add.svg";
import closeIcon from "../../assets/close.svg";
import styles from "./EditPostCard.module.scss";

interface EditPostCardProps {
  post: Post;
  onSave?: (post: Post) => void;
  onClose?: () => void;
}

const url = "http://localhost:7072/posts/";

export const EditPostCard = ({post, onSave, onClose}: EditPostCardProps) => {
  const [content, setContent] = useState(post.content);

  const handleChange = ({target}: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {value} = target;
    setContent(value);
  };

  const handleSavePost = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    const response = await fetch(`${url}${post.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: post.id,
        content: content,
      }),
    });
    if (response) {
      onSave?.(post);
    }
  };

  return (
    <div className={styles.component}>
      <div className={styles.top}>
        <h2 className={styles.title}>Редактировать публикацию</h2>
        <button onClick={onClose} className={styles.close_btn}>
          <img src={closeIcon} />
        </button>
      </div>
      <div className={styles.textarea_wrap}>
        <textarea
          value={content}
          onChange={handleChange}
          className={styles.textarea}
          rows={4}
        />
      </div>
      <div className={styles.actions_wrap}>
        <div className={styles.action}>
          <img src={photoIcon} />
          <span>Фото/видео</span>
        </div>
        <div className={styles.action}>
          <img src={personIcon} />
          <span>Отметить друзей</span>
        </div>
        <div className={styles.action}>
          <img src={smileIcon} />
          <span>Чувства/действия</span>
        </div>
        <div className={styles.action}>
          <img src={mapIcon} />
          <span>Отметить посещение</span>
        </div>
        <div className={styles.action}>
          <img src={gifIcon} />
          <span>GIF</span>
        </div>
      </div>
      <div className={styles.save_btn_wrap}>
        <button onClick={handleSavePost} className={styles.save_btn}>
          сохранить
        </button>
      </div>
    </div>
  );
};
