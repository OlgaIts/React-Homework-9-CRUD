import {FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import closeButton from "../../assets/close.svg";
import styles from "./NewPost.module.scss";

const url = "http://localhost:7072/posts";

export const NewPost = () => {
  const [form, setForm] = useState({content: ""});
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.content === "") {
      return;
    }
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: 0,
        content: form.content,
      }),
    });
    if (response) {
      setForm({content: ""});
      navigate("/");
    }
  };

  const handleChange = ({target}: React.ChangeEvent<HTMLInputElement>) => {
    const {id, value} = target;
    setForm((prevForm) => ({...prevForm, [id]: value}));
  };

  const handleDelete = () => {
    navigate("/");
  };

  return (
    <div className={styles.card}>
      <div className={styles.wrap}>
        <div>Публикация</div>
        <div>Фото/видео</div>
        <div>Прямой эфир</div>
        <div>Ещё</div>
        <button onClick={handleDelete} className={styles.close_btn}>
          <img src={closeButton} alt='close button' />
        </button>
      </div>
      <div className={styles.line}></div>
      <form action='' onSubmit={handleSubmit}>
        <input
          type='text'
          className={styles.input}
          id='content'
          value={form.content}
          onChange={handleChange}
        />
        <button className={styles.btn}>Опубликовать</button>
      </form>
    </div>
  );
};
