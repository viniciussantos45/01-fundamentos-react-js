import { Header } from "./components/Header"
import { Post } from "./components/Post"
import './global.module.css'
import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar"

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Vinicius Gomes"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. A excepturi ipsum ut quasi illo delectus aliquam aspernatur, aut nam mollitia laboriosam fugiat illum tempore, ullam quod minima consectetur asperiores quos?"
          />
          <Post
            author="Gabriel"
            content="Novo post"
          />
        </main>
      </div>
    </>
  )
}

