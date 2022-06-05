import React from 'react';
import NftForHomePage from './NftForHomePage';
import NftPortfolio from './NftPortfolio';
import Specialty from './Specialty';
import RoadMap from './RoadMap';
import GetNewsLetter from './GetNewsLetter';
import TeamMember from './TeamMember';

const Home = () => {
    return (
        <>
            <Specialty />
            <NftPortfolio />
            <NftForHomePage />
            <RoadMap></RoadMap>
            <GetNewsLetter></GetNewsLetter>
            <TeamMember></TeamMember>
        </>
    );
};

export default Home;