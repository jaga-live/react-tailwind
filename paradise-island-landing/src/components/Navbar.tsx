import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaGoogle } from 'react-icons/fa';

const Navbar = () => {
	return (
		<div className='flex justify-between bg-slate-400 bg-opacity-30 h-[50px]'>
			<div className='flex items-center ml-[25px]'>
				<ul className='flex space-x-6'>
					<li className='font-semibold'><a href='#'>Home</a></li>
					<li className='font-semibold'><a href='#'>Gallery</a></li>
					<li className='font-semibold'><a href='#'>Deals</a></li>
					<li className='font-semibold'><a href='#'>Contact</a></li>
				</ul>
			</div>
			<div className='flex items-center space-x-6 mr-[20px]'>
				<FaFacebook size={25} />
				<FaInstagram size={25}/>
				<FaTwitter size={25}/>
				<FaGoogle size={25}/>
			</div>
		</div>
	);
};

export default Navbar;