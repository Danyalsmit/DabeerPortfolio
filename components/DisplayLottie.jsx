import React from "react";
import dynamic from 'next/dynamic';

const DynamicLottie = dynamic(() => import('react-lottie'), { ssr: false });

const GreetingLottie = ({ animationPath }) => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		path: animationPath,
	};

	return (
		<div onClick={() => null}>
			<DynamicLottie options={defaultOptions} />
		</div>
	);
};

export default GreetingLottie;
