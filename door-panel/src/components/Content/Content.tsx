import CalendarEventContainer from "../CalendarEventContainer/CalendarEventContainer";
import Header from "../Header/Header";
import { Link, useParams } from 'react-router-dom'
import { EbContext } from '../..';
import { useContext } from 'react';
import { useState } from "react";


const Content = () => {
    const eb = useContext(EbContext) as any;
    const { roomId } = useParams();
    const temp = eb.sorted_assets.by_outline[roomId as any].find((obj: { type: string; }) => obj.type === "temperature").data_provider_most_recent_by_type.temperature.value.value;
    const co2 = eb.sorted_assets.by_outline[roomId as any].find((obj: { type: string; }) => obj.type === "co2").data_provider_most_recent_by_type.co2.value.value;
    const [roomTemperature, setTemperature] = useState(temp);
    const [roomCO2, setCO2] = useState(co2);
    const currentRoom = eb.sorted_assets.by_type.room.find((obj: { id: string; }) => {
        return obj.id === roomId;
    });
    const now = Date.now();
    const [todaysEvents, updateEvents] = useState<any[]>(currentRoom.data_provider_most_recent_by_type.reservation.value.events.length > 0 ? currentRoom.data_provider_most_recent_by_type.reservation.value.events
        .filter((e: { end: number; }) => e.end >= now && Intl.DateTimeFormat('en-US').format(e.end) === Intl.DateTimeFormat('en-US').format(now)) : []);

    window.eb_core.eb_add_hook(eb, "post_asset_dp_update", (eb: any, asset: { name: any; }, dp: { type: any; value: any; }) => {
        if (dp.value.events.length > 0) {
            updateEvents(dp.value.events.filter((e: { end: number; }) => e.end >= now && Intl.DateTimeFormat('en-US').format(e.end) === Intl.DateTimeFormat('en-US').format(now)));
            setTemperature(temp);
            setCO2(co2);

        }
    }, (eb: any, asset: { id: any; }, dp: any) => asset.id === roomId);

    if (currentRoom == null)
        return (<div><h1>No room found</h1></div>)
    return (
        <div className='Content'>
            <Link to="/">HOME</Link>
            <Header />
            <h1>{currentRoom.name !== undefined ? currentRoom.name : "ss"}</h1>
            {todaysEvents.length > 0 ? todaysEvents.map(({ subject, start, end }: any) => {
                return <CalendarEventContainer key={start + end} name={subject} startTime={start} endTime={end} />
            }) : <h3>No reservations</h3>}

            <div className='row'>
                <p className='text'>Temperature: {roomTemperature}</p>
                <p className='text'>CO2: {roomCO2}</p>
            </div>
        </div>
    )
}

export default Content;