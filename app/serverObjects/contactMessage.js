export class contactMessage {
	constructor(contactJson) {
		this.message = {
			from: contactJson.email,
			to: 'cw@carterwooten.com',
			subject: 'Inquiry',
			text: "Message from: " + contactJson.name + "\n \
			Message: " + contactJson.message
		}
	}
}