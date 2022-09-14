import styles from './Header.module.css';
import { EbContext } from '../..';
import { useContext } from 'react';
import { useState } from "react";

function waitAndBleed(ms: number) {
    console.log("Waitings...");
    return new Promise(resolve => setTimeout(resolve, ms)).then(() => console.log("Done..."))
}

const Header = () => {
    waitAndBleed(2000);
    const eb = useContext(EbContext) as any;
    console.log("Assets", eb.current_user_id);
    const [conn, setConnection] = useState("Loading..");
    window.eb_core.eb_add_hook(eb, "post_connection_status_change", (eb: any, status: any, previous_status: any) => setConnection(status));

    return (
        <header className={styles.header}>
            <div>
                <p>Panel status:</p>
                <p>{conn}</p>
            </div>
            <p>2022-06-12 10:53</p>
        </header>
    )
}

export default Header;