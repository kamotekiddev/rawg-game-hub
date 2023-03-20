import Image from 'next/image';
import { Heading, SimpleGrid, Stack } from '@chakra-ui/react';

import { GameScreenShot } from './games';

interface Props {
	gameScreenshots: GameScreenShot[] | undefined;
}

const GameScreenshots = ({ gameScreenshots }: Props) => {
	if (!gameScreenshots?.length) return null;

	return (
		<Stack mt={10}>
			<Heading mb={5} size='lg' color='gray.500'>
				Game Screenshots
			</Heading>
			<SimpleGrid columns={3}>
				{gameScreenshots?.map((gameScreenshot) => (
					<Image
						key={gameScreenshot?.id}
						src={gameScreenshot?.image}
						width={gameScreenshot?.width}
						height={gameScreenshot?.height}
						alt='Game Screenshot'
					/>
				))}
			</SimpleGrid>
		</Stack>
	);
};

export default GameScreenshots;