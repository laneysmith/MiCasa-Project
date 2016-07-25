exports.seed = function(knex, Promise) {
	return Promise.all([
		knex('account').insert({
			name: 'Lucas',
			password: 'abc',
			is_admin: true
		}),
		knex('account').insert({
			name: 'Laney',
			password: '123',
			is_admin: false
		})
	]);
};
