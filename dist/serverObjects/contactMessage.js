module.exports = function(contactJson) {
	return {
		from: contactJson.email,
		to: 'cw@carterwooten.com',
		subject: 'Inquiry',
		text: "Message from: " + contactJson.name + "\nMessage: " + contactJson.message
	}
}