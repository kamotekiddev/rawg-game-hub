import Image from 'next/image';
import {
	Badge,
	Box,
	Button,
	Card,
	CardBody,
	Heading,
	HStack,
	Tooltip,
} from '@chakra-ui/react';

import { Developer } from './developer';

interface Props {
	developer: Developer;
}

const DeveloperCard = ({ developer }: Props) => {
	return (
		<Card overflow='hidden'>
			<Box pos='relative' h={200}>
				<Image
					fill
					style={{ objectFit: 'cover' }}
					src={developer.image_background}
					alt='Developer Image'
				/>
			</Box>
			<CardBody>
				<HStack justify='space-between'>
					<Heading size='md'>{developer.name}</Heading>
					<Tooltip label={`Total games released ${developer.games_count}`}>
						<Button size='sm' cursor='pointer' variant='solid'>
							{developer.games_count}
						</Button>
					</Tooltip>
				</HStack>
			</CardBody>
		</Card>
	);
};

export default DeveloperCard;
