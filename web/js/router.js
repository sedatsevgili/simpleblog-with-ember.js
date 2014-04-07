SimpleBlog.Router.map(function() {
	this.resource('menu_items', {path: '/'});
});

SimpleBlog.MenuItemsRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('menu_item');
	}
});