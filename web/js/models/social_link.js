SimpleBlog.SocialLink = DS.Model.extend({
	label: DS.attr('string'),
	url: DS.attr('string')
});

SimpleBlog.SocialLink.FIXTURES = [
	{
		id: 1,
		label: 'GitHub',
		url: 'https://github.com/sevgilisedat'
	},
	{
		id: 2,
		label: 'Twitter',
		url: 'https://www.twitter.com/sedatsevgili'
	},
	{
		id: 3,
		label: 'Facebook',
		url: 'https://www.facebook.com/sedat.sevgili'
	}
]