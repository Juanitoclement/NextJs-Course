import Link from "next/link"
import Button from "../ui/button"
import DateIcon from '../icons/date-icon'
import ArrowRightIcon from '../icons/arrow-right-icon'
import AddressIcon from '../icons/address-icon'

import styles from './event-item.module.css'

function EventItem(props){
    const { title, image, date, location, id } = props;

    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

    const formattedAddress = location.replace(', ', '\n');
    const exploreLink = `/events/${id}`;

    return (
        <li className={styles.item}>
            <img src={`/${image}`} alt={title}/>
            <div className={styles.content}>
                <div className={styles.summary}>
                    <h2>{title}</h2>
                    <div className={styles.date}>
                        <DateIcon />
                        <time>{formattedDate}</time>
                    </div>
                    <div className={styles.address}>
                        <AddressIcon/>
                        <address>{formattedAddress}</address>
                    </div>
                </div>
                <div className={styles.actions}>
                    <Button link={exploreLink}>
                        <span>Explore Event</span>
                        <span className={styles.icon}>
                            <ArrowRightIcon/>
                        </span>
                    </Button>
                    {/* <Link href={exploreLink}>Explore Event</Link> */}
                </div>
            </div>
        </li>
    )
}

export default EventItem;