'use server';

import React from 'react';
import { Resend } from 'resend';
import { validateString } from '@/lib/utils';
import { getErrorMessage } from '@/lib/utils';
import ContactFormEmail from '@/email/contact-form-email';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
	const senderEmail = formData.get('senderEmail');
	const message = formData.get('message');

	// Server side validation for email and message
	if (!validateString(senderEmail, 100)) {
		return { error: 'Invalid sender email' };
	}
	if (!validateString(message, 500)) {
		return { error: 'Invalid message' };
	}

	try {
		await resend.emails.send({
			from: 'Contact Form <onboarding@resend.dev>',
			to: 'austinperezwebdev@gmail.com',
			subject: 'Message from contact form',
			replyTo: senderEmail as string,
			react: React.createElement(ContactFormEmail, {
				message: message as string,
				senderEmail: senderEmail as string,
			}),
		});
	} catch (error: unknown) {
		return { error: getErrorMessage(error) };
	}
};
