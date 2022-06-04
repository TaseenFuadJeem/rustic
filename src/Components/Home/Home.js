import React from 'react';

const Home = () => {
    return (
        <section className='h-screen lg:px-40'>

            <div className='grid lg:grid-cols-2 h-full gap-24'>
                <div className='flex items-center'>

                    <div>
                        <h1 className='text-2xl font-bold'>Our Specialty</h1>
                        <div className='w-10 border-t-4 border-orange-500 mt-4'></div>

                        <h2 className='text-5xl font-bold my-6'>Complete Solutions for your NFT</h2>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo repudiandae inventore modi deleniti quod suscipit omnis sunt quos maxime velit.</p>
                    </div>

                </div>

                <div className='grid grid-cols-2'>


                    <div className='flex items-center'>
                        <div>
                            <div className='w-64 p-10 rounded-3xl' style={{ backgroundColor: "#4526B1" }}>
                                <h1 className='text-5xl font-semibold text-orange-500'>01</h1>
                                <h2 className='text-2xl font-semibold my-5'>Huge Collection</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quaerat!
                                </p>
                            </div>
                            <div className='w-64 p-10 rounded-3xl mt-8' style={{ backgroundColor: "#4526B1" }}>
                                <h1 className='text-5xl font-semibold text-orange-500'>03</h1>
                                <h2 className='text-2xl font-semibold my-5'>Top Resource</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quaerat!
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='pt-20 flex items-center'>
                        <div>
                            <div className='w-64 p-10 rounded-3xl' style={{ backgroundColor: "#4526B1" }}>
                                <h1 className='text-5xl font-semibold text-orange-500'>02</h1>
                                <h2 className='text-2xl font-semibold my-5'>High Quantity</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quaerat!
                                </p>
                            </div>
                            <div className='w-64 p-10 rounded-3xl mt-8' style={{ backgroundColor: "#4526B1" }}>
                                <h1 className='text-5xl font-semibold text-orange-500'>04</h1>
                                <h2 className='text-2xl font-semibold my-5'>Big Community</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quaerat!
                                </p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </section>
    );
};

export default Home;