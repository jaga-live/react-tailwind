
import React from 'react';
import { AiFillPhone, AiOutlineClockCircle } from 'react-icons/ai';
import { BsChatSquareDots } from 'react-icons/bs';


const Topbar = () => {
	return (
		<div className='flex items-center justify-between bg-white-400 w-[100%] h-[60px] m-auto'>
			<div className='flex items-center ml-[25px]'>
				<BsChatSquareDots size={35} />
				<p className='ml-[10px] font-semibold text-xl'>Paradise Island</p>
			</div>
			<div className='flex mr-[25px]'>
				<div className='flex items-center px-[10px]'>
					<AiOutlineClockCircle size={25} />
					<h3 className='ml-[10px]'>9AM - 10PM</h3>
				</div>
				<div className='flex items-center ml-[20px]'>
					<AiFillPhone size={20} />
					<h3 className='ml-[10px]'>987654321</h3>
				</div>
				<button className='ml-[20px] py-2 px-4 rounded-lg bg-purple-300 hover:bg-purple-400'>Request a Quote</button>
			</div>
		</div>
	);
};

export default Topbar;