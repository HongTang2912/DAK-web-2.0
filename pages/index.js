import React from 'react';
import Intro from './components/introductions';
import Ranking from './components/ranking';
import Main from './components/main';
import Head from 'next/head';


export default function index() {

    return (<>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet"/>
        </Head>
        <Main/>
    </>);
}
