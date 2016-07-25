exports.seed = function(knex, Promise) {
	return Promise.all([
		knex('business').insert({
			name: 'General Duffy\'s Hot Sauce Emporium',
			address1: '123 My Street St.',
			city: 'Denver',
			state: 'CO',
			zip: '80211',
			email: 'mybusiness@generalduffys.com',
			phone: '1234567890',
			date_opened: new Date(),
			date_closed: new Date(),
			good_standing: true,
			description: 'We make really good hot sauce.',
			website: 'http://www.generalduffys.com'
		}),
		knex('business').insert({
			name: 'Bonkers',
			address1: '4534 Platte St.',
			city: 'Denver',
			state: 'CO',
			zip: '80245',
			email: 'peter@bonkers.com',
			phone: '0987654321',
			date_opened: new Date(),
			date_closed: new Date(),
			good_standing: false,
			description: 'We go bonkers for things!',
			website: 'http://www.bonkers4b.com'
		})
	]);
};
