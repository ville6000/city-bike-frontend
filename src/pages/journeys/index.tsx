import Head from "next/head";
import Link from "next/link";
import {IJourney} from "@/types/types";
import {useEffect, useState} from "react";
import {format} from 'date-fns';

export default function Index() {
    const [journeys, setJourneys] = useState([]);

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/journeys')
            .then((res) => res.json())
            .then((data) => {
                setJourneys(data);
            });
    }, []);

    return (
        <>
            <Head>
                <title>Journeys</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className="container mx-auto py-12">
                <h1 className="text-4xl mb-4">HKI City Bike Log</h1>
                <div className="w-full space-y-4">
                    {journeys && journeys.map((journey: IJourney) => (
                        <div key={journey.id} className="w-full flex p-6 border border-slate-200 rounded-sm shadow-sm">
                            <Link href={`/journeys/${journey.id}`}>
                                {format(new Date(journey.departedAt), 'dd.MM.yyyy HH:mm')}
                            </Link>

                            <div className="flex items-center space-x-4 ml-4">
                                <Link href={`/stations/${journey.departureStationId}`}>
                                    {journey.departureStationName}
                                </Link>
                                <div>-</div>
                                <Link href={`/stations/${journey.returnStationId}`}>
                                    {journey.returnStationName}
                                </Link>
                            </div>

                            <div className="ml-4">
                                {Math.round((journey.distance / 1000))} km
                            </div>

                            <Link href={`/journeys/${journey.id}`} className="ml-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                    className="w-5 h-5">
                                    <path fillRule="evenodd"
                                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                        clipRule="evenodd"/>
                                </svg>
                            </Link>
                        </div>
                    ))}
                    <div></div>
                </div>
            </main>
        </>
    );
}
