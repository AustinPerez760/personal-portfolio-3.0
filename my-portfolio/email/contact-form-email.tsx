import React from 'react';
import {
	Html,
	Body,
	Head,
	Heading,
	Hr,
	Container,
	Preview,
	Section,
	Text,
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

type ContactFormEmailProps = {
	message: string;
	senderEmail: string;
};

export default function ContactFormEmail({
	message,
	senderEmail,
}: ContactFormEmailProps) {
	return (
		<Html>
			<Head />
			<Preview>Message from portfolio site</Preview>
			<Tailwind>
				<Body className='bg-gray-200 text-black'>
					<Container>
						<Section className='bg-white borderBlack my-10 px-10 py-4 rounded-md'>
							<Heading className='leading-tight'>
								New message from your portfolio
							</Heading>
							<Text>{message}</Text>
							<Hr />
							<Text>The sender's email is: {senderEmail} </Text>
						</Section>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
}
