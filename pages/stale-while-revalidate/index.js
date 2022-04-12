import React, { useEffect } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

function StaleWhileRevalidate(props){

    const { data, error } = useSWR("https://api.github.com/repos/vercel/swr",fetcher);

    console.log('helo', data)

    if(error) {
        return <p>Failed to load.</p>
    }

    if(!data) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <h1>{data.name}</h1>
            <p>{data.description}</p>
            <strong>👁 {data.subscribers_count}</strong>{" "}
            <strong>✨ {data.stargazers_count}</strong>{" "}
            <strong>🍴 {data.forks_count}</strong>
        </div>
    )
}

export default StaleWhileRevalidate;
