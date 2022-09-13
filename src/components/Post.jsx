import { Avatar } from './Avatar'
import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src='https://github.com/viniciussantos45.png' />

                    <div className={styles.authorInfo}>
                        <strong>Vinicius Gomes</strong>
                        <span>Fullstack developer</span>
                    </div>
                </div>

                <time title='09 de setembro de 2022' dateTime='2022-11-09'>Publicado há 1 hora</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉 <a href='#'>jane.design/doctorcare</a></p>
                <p><a href='#'>#novoprojeto #nlw #rocketseat</a></p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe sem feedback</strong>

                <textarea placeholder='Deixe um comentário' />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>
        </article>
    )
}