import React from 'react';
import { Stack, Box } from '@mui/material';
import useDeviceDetect from '../../hooks/useDeviceDetect';
import { Property } from '../../types/property/property';
import { REACT_APP_API_URL } from '../../config';
import { useRouter } from 'next/router';
import { useReactiveVar } from '@apollo/client';
import { userVar } from '../../../apollo/store';
import BedIcon from '@mui/icons-material/KingBed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';

interface TopPropertyCardProps {
	property: Property;
	likePropertyHandler: any;
}

const TopPropertyCard = (props: TopPropertyCardProps) => {
	const { property, likePropertyHandler } = props;
	const device = useDeviceDetect();
	const router = useRouter();
	const user = useReactiveVar(userVar);

	/** HANDLERS **/
	const pushDetailHandler = async (propertyId: string) => {
		await router.push({ pathname: '/property/detail', query: { id: propertyId } });
	};

	return (
		<Stack className="top-card-box">
			{/* Left: Info Panel */}
			<Box component={'div'} className={'info-panel'}>
				<Box component={'div'} className={'property-title'}>
					<strong onClick={() => pushDetailHandler(property._id)}>
						{property?.propertyTitle}
					</strong>
					<p className={'address'}>{property?.propertyAddress}</p>
				</Box>

				{/* Stats */}
				<Box component={'div'} className={'stats'}>
					<div className={'stat-item'}>
						<BedIcon />
						<span>{property?.propertyBeds} Bed</span>
					</div>
					<div className={'stat-item'}>
						<MeetingRoomIcon />
						<span>{property?.propertyRooms} Rooms</span>
					</div>
					<div className={'stat-item'}>
						<SquareFootIcon />
						<span>{property?.propertySquare?.toLocaleString()} m2</span>
					</div>
				</Box>

				{/* Description */}
				<p className={'description'}>
					{property?.propertyDesc}
				</p>

				{/* Agent + Price */}
				<Box component={'div'} className={'agent-price'}>
					<Box component={'div'} className={'agent'}>
						<Box component={'div'} className={'agent-avatar'}>
							{property?.memberData?.memberImage ? (
								<img
									src={`${REACT_APP_API_URL}/${property?.memberData?.memberImage}`}
									alt={property?.memberData?.memberNick}
								/>
							) : (
								<div className={'avatar-placeholder'}>
									{property?.memberData?.memberNick?.[0]?.toUpperCase() || 'A'}
								</div>
							)}
						</Box>
						<Box component={'div'} className={'agent-info'}>
							<span className={'agent-label'}>Agent</span>
							<strong className={'agent-name'}>
								{property?.memberData?.memberFullName || property?.memberData?.memberNick}
							</strong>
						</Box>
					</Box>
					<Box component={'div'} className={'price'}>
						<strong>${property?.propertyPrice?.toLocaleString()}</strong>
						<span>{property?.propertyRent }</span>
					</Box>
				</Box>

				{/* Buttons */}
				<Box component={'div'} className={'action-buttons'}>
					<button
						className={'quick-view-btn'}
						onClick={() => pushDetailHandler(property._id)}
					>
						Quick View
					</button>
					<button className={'compare-btn'}>
						Compare
					</button>
				</Box>
			</Box>

			{/* Right: Image Panel */}
			<Box
				component={'div'}
				className={'image-panel'}
				style={{
					backgroundImage: `url(${REACT_APP_API_URL}/${property?.propertyImages?.[0]})`,
				}}
				onClick={() => pushDetailHandler(property._id)}
			>
				{/* Badges */}
				<Box component={'div'} className={'badges'}>
					<span className={`type-badge ${property?.propertyRent ? 'rent' : 'sale'}`}>
						{property?.propertyRent ? 'For Rent' : 'For Sale'}
					</span>
					<span className={'category-badge'}>{property?.propertyType}</span>
				</Box>
			</Box>
		</Stack>
	);
};

export default TopPropertyCard;
