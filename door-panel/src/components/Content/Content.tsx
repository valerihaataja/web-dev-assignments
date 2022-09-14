import CalendarEventContainer from "../CalendarEventContainer/CalendarEventContainer";
import Header from "../Header/Header";
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { EbContext } from '../..';
import { useContext } from 'react';
import { useState } from "react";



const Content = () => {
    const eb = useContext(EbContext) as any;
    const { roomId } = useParams();
    const [event, setEvent] = useState({} as any);
    const [todaysEvents, updateEvents] = useState([])

    const found = eb.sorted_assets.by_type.room.find((obj: { id: string; }) => {
        return obj.id === roomId;
    });

    window.eb_core.eb_add_hook(eb, "post_asset_dp_update", (eb: any, asset: { name: any; }, dp: { type: any; value: any; }) => {
        // console.log(asset.name);
        // console.log(dp.type);
        // console.log(dp.value);
        // const array = [];
        // updateEvents([]);
        // for (let i = 0; i < dp.value.events.lenght; i++) {
        //     console.log("Pogg");
        // }
        console.log("Mita taalla on", dp.value);
        updateEvents(arr => [])
        setEvent(dp.value);

    }, (eb: any, asset: { id: any; }, dp: any) => asset.id == roomId);

    if (found == null)
        return (<div><h1>No room found</h1></div>)
    return (
        <div className='Content'>
            <Link to="/">HOME</Link>
            <Header />
            <h1>{found.name != undefined ? found.name : "ss"}</h1>
            <h2>A meeting room for 10 people with 1 persion inside</h2>
            <h2>{event.time}</h2>
            <CalendarEventContainer />
            <CalendarEventContainer />
            <div className='row'>
                <p className='text'>Temperature: 21.4</p>
                <p className='text'>CO2: 444</p>
            </div>
        </div>
    )
}

export default Content;
//112038283
//112038086     225/50R17 premium n 900e