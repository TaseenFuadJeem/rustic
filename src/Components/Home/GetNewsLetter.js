import React from 'react';

const GetNewsLetter = () => {
    return (
        <div className='container mx-auto flex justify-evenly my-7 py-14 rounded-lg' style={{ background: "#7153d9" }}>
            <div className=''>
                <h1 className='text-3xl font-bold'>Get Newsletter</h1>
                <p>Get udpated with news, tips & tricks</p>
            </div>
            <div class="relative">
                <input type="text" placeholder="Your email here" className="bg-white input input-bordered w-96 h-15 pr-16" />
                <button class="btn btn-primary absolute top-0 right-0 rounded-l-none bg-orange-500">Subscribe</button>
            </div>
        </div>
    );
};

export default GetNewsLetter;