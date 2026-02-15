import React from 'react';
import { Stack, Box } from '@mui/material';
import useDeviceDetect from '../../hooks/useDeviceDetect';

interface StepData {
	number: string;
	title: string;
	description: string;
}

const stepsData: StepData[] = [
	{
		number: '01',
		title: 'Discover Your Dream Home',
		description: 'Browse through a curated selection of properties tailored to your lifestyle and budget.',
	},
	{
		number: '02',
		title: 'Schedule A Viewing',
		description: 'Book a tour at your convenience and explore the space in person or virtually.',
	},
	{
		number: '03',
		title: 'Seal The Deal',
		description: 'Get expert guidance to finalize paperwork and move into your new home with confidence.',
	},
];

const Events = () => {
	const device = useDeviceDetect();

	if (device === 'mobile') {
		return <div>STEPS MOBILE</div>;
	} else {
		return (
			<Stack className={'events'}>
				<Stack className={'container'}>
					<Stack className={'info-box'}>
						
					</Stack>
					<Stack className={'card-wrapper'}>
						<Box component={'div'} className={'info-box'}>
							<p className={'label'}>OUR PROCESS</p>
							<span>Homebuying Steps</span>
						</Box>
						{stepsData.map((step: StepData) => (
							<Box component={'div'} className={'step-card'} key={step.number}>
								<Box component={'div'} className={'step-number'}>
									{step.number}
								</Box>
								<Box component={'div'} className={'step-content'}>
									<strong>{step.title}</strong>
									<p>{step.description}</p>
								</Box>
							</Box>
						))}
					</Stack>
				</Stack>
			</Stack>
		);
	}
};

export default Events;
