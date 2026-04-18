import React, { useEffect } from 'react';
import useDeviceDetect from '../../hooks/useDeviceDetect';
import Head from 'next/head';
import Top from '../Top';
import Footer from '../Footer';
import { Box, Stack } from '@mui/material';
import FiberContainer from '../common/FiberContainer';
import { Appp } from '../common/app'
import HeaderFilter from '../homepage/HeaderFilter';
import { userVar } from '../../../apollo/store';
import { useReactiveVar } from '@apollo/client';
import { getJwtToken, updateUserInfo } from '../../auth';
import Chat from '../Chat';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useRouter } from 'next/navigation';

const withLayoutMain = (Component: any) => {
	return (props: any) => {
		const device = useDeviceDetect();
		const user = useReactiveVar(userVar);
		const router = useRouter();

		/** LIFECYCLES **/
		useEffect(() => {
			const jwt = getJwtToken();
			if (jwt) updateUserInfo(jwt);
		}, []);

		const handleClick = () => {
			router.push('/property'); // URL qayerga yo‘naltirishi kerak bo‘lsa
		};

		/** HANDLERS **/

		if (device == 'mobile') {
			return (
				<>
					<Head>
						<title>Luminor</title>
						<meta name={'title'} content={`Nestar`} />
					</Head>
					<Stack id="mobile-wrap">
						<Stack id={'top'}>
							<Top />
						</Stack>

						<Stack id={'main'}>
							<Component {...props} />
						</Stack>

						<Stack id={'footer'}>
							<Footer />
						</Stack>
					</Stack>
				</>
			);
		} else {
			return (
				<>
					<Head>
						<title>Luminor</title>
						<meta name={'title'} content={`Luminor`} />
					</Head>
					<Stack id="pc-wrap">
						<Stack id={'top'}>
							<Top />
						</Stack>
						<div className="hero">
							<div className="hero-left">
								<h1>
									<span>Discover Your</span>
									<span>Perfect Living Spot</span>
								</h1>
							</div>

							<div className="hero-right">
								<p>
									This luxurious coastal villa in Malibu boasts sweeping ocean views, modern open-concept design, and
									refined elegance throughout. Relax with an infinity pool, vibrant gardens, and private beach access
									for the ultimate seaside retreat.
								</p>
								<button onClick={handleClick}>View Properties</button>
							</div>
						</div>
						<Stack className={'header-main'}>
							<Appp />
							<Stack className={'container'}>
								<HeaderFilter />
							</Stack>
						</Stack>

						<Stack id={'main'}>
							<Component {...props} />
						</Stack>

						{/* <Chat /> */}

						<Stack id={'footer'}>
							<Footer />
						</Stack>
					</Stack>
				</>
			);
		}
	};
};

export default withLayoutMain;
