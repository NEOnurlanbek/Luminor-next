import React from 'react';
import useDeviceDetect from '../../hooks/useDeviceDetect';
import { Box, Button, Stack, Typography } from '@mui/material';
import router from 'next/router';

const Hero = () => {
	const device = useDeviceDetect();
	if (device == 'mobile') {
		return <Stack></Stack>;
	} else {
		return (
			<Stack className='container' direction="row" justifyContent="space-between">
                
				<Stack className="about-left" spacing={2}>
					<Typography className="about-label">ABOUT US</Typography>
					<Typography className="about-title">Building Dreams, One Home At A Time</Typography>
					<Typography className="about-description">
						Our mission goes beyond real estate — it’s about guiding you through one of life’s biggest milestones with
						heart, expertise, and unwavering commitment.
					</Typography>
					<Button className="about-button" variant="contained">
						View Properties
					</Button>
				</Stack>

				<Stack className="about-right" spacing={2}>
					<Box className="about-item">
						<span className="number">01.</span>
						<Box>
							<Typography className="title">Buy A New Home</Typography>
							<Typography className="text">
								Discover your dream home effortlessly. Explore diverse properties and expert guidance for a seamless
								buying experience.
							</Typography>
						</Box>
					</Box>

					<Box className="about-item">
						<span className="number">02.</span>
						<Box>
							<Typography className="title">Rent A Home</Typography>
							<Typography className="text">
								Discover your perfect rental effortlessly. Explore a diverse variety of listings tailored to suit your
								unique lifestyle needs.
							</Typography>
						</Box>
					</Box>

					<Box className="about-item">
						<span className="number">03.</span>
						<Box>
							<Typography className="title">Sell A Home</Typography>
							<Typography className="text">
								Sell confidently with expert guidance and effective strategies, showcasing your property’s best features
								for a successful sale.
							</Typography>
						</Box>
					</Box>
				</Stack>
			</Stack>
		);
	}
};

export default Hero;
