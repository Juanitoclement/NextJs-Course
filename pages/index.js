import Head from 'next/head';
import Link from 'next/link';

import EventList from '../components/events/event-list';
import { getFeaturedEvents } from '../data/dummy-data';
import styles from '../styles/Home.module.css';

export default function HomePage() {
  const featuredEvents = getFeaturedEvents();
  
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJs Events</title>
      </Head>
      <meta name='description' content='nextjs made by clement'/>
      <h1>The Home Page</h1>
      <EventList items={featuredEvents}/>
      <ul>
        <li>
          <Link href="/portfolio">Portfolio</Link>

          {/* using a link html causes request a new HTML page -> state will be
          lost thats why using LINK from next/link will be better */}

          {/* <a href="/portfolio">Portfolio</a> */}
        </li>

        <li>
          <Link href="/clients">Clients</Link>
        </li>
      </ul>
    </div>
  )
}
