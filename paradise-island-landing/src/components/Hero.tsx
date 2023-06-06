import React from 'react';
import ShoreImg from '../assets/shore.jpg';

const Hero = () => {
	return (
		<div>
			<div className='flex flex-col justify-center items-center h-[88vh] bg-cover' style={{backgroundImage: `url(${ShoreImg})`}}>
				<h1 className='text-6xl font-normal py-[12px]'>Find your special trip</h1>
				<h2 className='text-4xl font-extralight py-[12px]'>With Paradise Island</h2>
				<p className='max-w-4xl text-xl font-sans text-center py-[12px]'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
				dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
				</p>
			</div>
		</div>
	);
};

export default Hero;