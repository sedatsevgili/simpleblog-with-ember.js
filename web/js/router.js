SimpleBlog.IndexRoute = Ember.Route.extend({
	model: function() {
		return Ember.RSVP.hash({
			menu_items: this.store.find('menu_item'),
			social_links: this.store.find('social_link')
		});
	}
});