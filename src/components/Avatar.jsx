import styles from './Avatar.module.css';

export function Avatar({ src, border = true }) {
    return (
        <img className={border ? styles.avatar : styles.avatarWithoutBorder} src={src} />
    )
}