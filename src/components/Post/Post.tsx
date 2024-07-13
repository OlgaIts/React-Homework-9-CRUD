import {ReactNode} from "react";
import {Link} from "react-router-dom";
import user from "../../assets/Neo2.jpg";
import like from "../../assets/like.svg";
import chat from "../../assets/chat.svg";
import styles from "./Post.module.scss";

export interface Post {
  id: string;
  content: string;
}
interface PostProps {
  post: Post;
  renderActions?: (post: Post) => ReactNode;
  to?: string;
}
export const Post = ({post, renderActions, to}: PostProps) => {
  const {content} = post;
  const Tag = to ? Link : "div";

  return (
    <Tag to={to || ""} className={styles.post}>
      <div className={styles.user_info}>
        <img src={user} alt='user avatar' className={styles.img} />
        <span>Томас А. Андерсон</span>
      </div>
      <p className={styles.text}>{content}</p>
      <div className={styles.wrap}>
        <div className={styles.actions_wrap}>
          <img src={like} alt='like icon' />
          <span>Нравится</span>
        </div>
        <div className={styles.actions_wrap}>
          <img src={chat} alt='chat icon' />
          <span>Комментировать</span>
        </div>
      </div>
      {renderActions?.(post)}
    </Tag>
  );
};
