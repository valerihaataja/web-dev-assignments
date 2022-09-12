import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div>
                <p>Panel status:</p>
                <p>connected</p>
            </div>
            <p>2022-06-12 10:53</p>
        </header>
    )
}

export default Header;