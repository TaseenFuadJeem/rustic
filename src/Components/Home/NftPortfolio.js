import React from 'react';
import wallet from '../../Assets/wallet.png';
import cart from '../../Assets/shopping-cart.png';
import folder from '../../Assets/folder.png';
import money from '../../Assets/money-bag.png';

const NftPortfolio = () => {
    return (
        <div className='mt-32 lg:px-40'>
            <h1 className='text-center text-xl font-bold'>Join NFT Portfolio</h1>
            <div className='w-10 border-t-4 mx-auto border-orange-500 my-6'></div>
            <h2 className='text-center text-5xl font-bold'>Become a Rustic <br /> Player Now</h2>

            <div className='grid lg:grid-cols-2 gap-9 mt-20'>

                <div className='flex p-12 rounded-2xl' style={{ backgroundColor: "#4526B1" }}>
                    <img className='w-24 h-24' src={wallet} alt="" />
                    <div>
                        <p className='font-semibold text-orange-500 pl-7'>Step 01</p>
                        <h1 className='text-2xl font-bold pl-7'>Connect Your Wallet</h1>
                        <p className='mt-5 text-lg font-semibold pl-7'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla pariatur eveniet at dignissimos, officia nemo beatae ea veritatis voluptas numquam?
                        </p>
                    </div>
                </div>

                <div className='flex p-12 rounded-2xl' style={{ backgroundColor: "#4526B1" }}>
                    <img className='w-24 h-24' src={cart} alt="" />
                    <div>
                        <p className='font-semibold text-orange-500 pl-7'>Step 02</p>
                        <h1 className='text-2xl font-bold pl-7'>Buy Your NFT</h1>
                        <p className='mt-5 text-lg font-semibold pl-7'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla pariatur eveniet at dignissimos, officia nemo beatae ea veritatis voluptas numquam?
                        </p>
                    </div>
                </div>

                <div className='flex p-12 rounded-2xl' style={{ backgroundColor: "#4526B1" }}>
                    <img className='w-24 h-24' src={folder} alt="" />
                    <div>
                        <p className='font-semibold text-orange-500 pl-7'>Step 03</p>
                        <h1 className='text-2xl font-bold pl-7'>Create Collection</h1>
                        <p className='mt-5 text-lg font-semibold pl-7'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla pariatur eveniet at dignissimos, officia nemo beatae ea veritatis voluptas numquam?
                        </p>
                    </div>
                </div>

                <div className='flex p-12 rounded-2xl' style={{ backgroundColor: "#4526B1" }}>
                    <img className='w-24 h-24' src={money} alt="" />
                    <div>
                        <p className='font-semibold text-orange-500 pl-7'>Step 04</p>
                        <h1 className='text-2xl font-bold pl-7'>Sell Your NFT</h1>
                        <p className='mt-5 text-lg font-semibold pl-7'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla pariatur eveniet at dignissimos, officia nemo beatae ea veritatis voluptas numquam?
                        </p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default NftPortfolio;