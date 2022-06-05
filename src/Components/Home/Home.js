import React from 'react';
import NftForHomePage from './NftForHomePage';
import NftPortfolio from './NftPortfolio';
import Specialty from './Specialty';

const Home = () => {
    return (
        <>
            <Specialty />
            <NftPortfolio />
            <NftForHomePage />
        </>
    );
};

export default Home;