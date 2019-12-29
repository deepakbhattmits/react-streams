/** @format */

import React from 'react';
import {
	CarouselProvider,
	Slider,
	Slide,
	ButtonBack,
	ButtonNext
} from 'pure-react-carousel';
import { ReactComponent as LeftSVG } from '../../assets/images/icon-left-chevron.svg';
import { ReactComponent as RightSVG } from '../../assets/images/icon-right-chevron.svg';

const SliderComponent = props => (
	// console.log('test :> ',props)
	<>
		<CarouselProvider
			naturalSlideWidth={100}
			naturalSlideHeight={10}
			totalSlides={3}
			visibleSlides={2}
		>
			<ButtonBack>
				<LeftSVG />
			</ButtonBack>
			<Slider>
				<Slide index={0}>
					<div className='slide'> First Slide.</div>
				</Slide>
				<Slide index={1}>
					<div className='slide'>2 Slide.</div>
				</Slide>
				<Slide index={2}>
					<div className='slide'>3 Slide.</div>
				</Slide>
			</Slider>
			<ButtonNext>
				<RightSVG />
			</ButtonNext>
		</CarouselProvider>
	</>
);
export default SliderComponent;
