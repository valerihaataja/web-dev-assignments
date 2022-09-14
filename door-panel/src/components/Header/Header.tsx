import styles from './Header.module.css';
import { EbContext } from '../..';
import { useContext } from 'react';
import Clock from 'react-live-clock';

const Header = () => {
    const eb = useContext(EbContext) as any;
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

    return (
        <header className={styles.header}>
            <div>
                <p>Panel status:</p>
                <p>{eb.connection_status}</p>
            </div>
            <div className='row'>
                <p>{date}</p>
                <div className='spacer' />
                <p><Clock format={'HH:mm:ss'} ticking={true} /></p>
            </div>

        </header>
    )
}

export default Header;
