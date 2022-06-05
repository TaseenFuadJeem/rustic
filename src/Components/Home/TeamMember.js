import React from 'react';

const TeamMember = () => {
    return (
        <div>
            <div className='text-center font-bold'>
                <h1 className='text-center text-2xl mb-4'>Team Members</h1>
                <div className='w-8 border-t-4 mx-auto border-orange-500 my-6'></div>
                <h1 className='text-4xl	'>
                    Our Amazing Team
                    <br />
                    Members
                </h1>
            </div>
            {/* carousal */}
            <div class="carousel w-full">
                <div id="item1" class="carousel-item w-full">
                    <img src="https://api.lorem.space/image/car?w=800&h=200&hash=8B7BCDC2" alt='' class="w-full" />
                </div>
                <div id="item2" class="carousel-item w-full">
                    <img src="https://api.lorem.space/image/car?w=800&h=200&hash=500B67FB" alt='' class="w-full" />
                </div>
                <div id="item3" class="carousel-item w-full">
                    <img src="https://api.lorem.space/image/car?w=800&h=200&hash=A89D0DE6" alt='' class="w-full" />
                </div>
                <div id="item4" class="carousel-item w-full">
                    <img src="https://api.lorem.space/image/car?w=800&h=200&hash=225E6693" alt='' class="w-full" />
                </div>
            </div>
            <div class="flex justify-center w-full py-2 gap-2">
                <a href="#item1" class="btn btn-xs">1</a>
                <a href="#item2" class="btn btn-xs">2</a>
                <a href="#item3" class="btn btn-xs">3</a>
                <a href="#item4" class="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default TeamMember;