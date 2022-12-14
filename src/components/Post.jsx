import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useState } from 'react'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post({ author, content, publishAt }) {
    const publishedDateFormatted = format(publishAt, `d' de 'LLLL' às 'H:mm'h'`, { locale: ptBR })
    const publishedDateRelativeToNow = formatDistanceToNow(publishAt, {
        locale: ptBR,
        addSuffix: true
    })

    const [comments, setComments] = useState([1, 2]);
    const [newComment, setNewComment] = useState('');

    function handleCreateNewComment(event) {
        event.preventDefault()

        setComments([...comments, newComment])
    }

    function handleNewCommentInvalid(event) {
        event.target.setCustomValidity('O comentário não pode ser vazio')
    }

    function newCommentChange(event) {
        event.target.setCustomValidity('')
        setNewComment(event.target.value)
    }

    function deleteComment(comment) {
        const commentsWithoutDeletedComment = comments.filter((item) => item !== comment)

        setComments(commentsWithoutDeletedComment)
    }

    const enabledButtonSubmit = newComment.length === 0

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />

                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map((item, index) => {
                    if (item.type === 'paragraph') {
                        return (<p key={item.content}>{item.content}</p>)
                    } else if (item.type === 'link') {
                        return <p key={item.content}><a href='#'>{item.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe sem feedback</strong>

                <textarea
                    name="comment"
                    value={newComment}
                    placeholder='Deixe um comentário'
                    onChange={newCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                    <button type='submit' disabled={enabledButtonSubmit}>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map((comment, index) => (
                    <Comment key={comment} content={comment} onDeleteComment={deleteComment} />
                ))}
            </div>
        </article>
    )
}