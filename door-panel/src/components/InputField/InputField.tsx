import { EbContext } from '../..';
import React, { useContext } from 'react';
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useState } from "react";


const InputField = () => {
    const eb = useContext(EbContext) as any;
    const [filterText, setFilterText] = useState("");
    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/room/${filterText}`;
        const found = eb.sorted_assets.by_type.room.find((obj: { id: string; }) => obj.id === filterText);
        if (found) {
            navigate(path, { replace: true });
            setFilterText("");
        } else {
            navigate("notfound")

        }

    }
    return (
        <>
            <input
                value={filterText}
                onChange={(event) => {
                    setFilterText(event.target.value);
                }}
            />
            <button onClick={routeChange}>Search</button>
            <Outlet />

        </>
    )
}

export default InputField;