import { Fragment } from "react"
import { useRouter } from "next/router";
import { getAllEvents } from "../../data/dummy-data"
import EventList from '../../components/events/event-list'
import EventSearch from "../../components/events/event-search"

function AllEventsPage(){
    const router = useRouter();
    const events = getAllEvents();

    const findEventSearchHandler = (year, month) => {
        const fullPath = `/events/${year}/${month}`

        router.push(fullPath)
    }

    return (
        <Fragment>
            <EventSearch onSearch={findEventSearchHandler}/>
            <EventList items={events}/>
        </Fragment>
    )
}

export default AllEventsPage;
