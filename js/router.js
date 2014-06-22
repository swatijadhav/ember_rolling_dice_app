Roller.Router.map(function () {
    this.resource("roll");
});

Roller.IndexRoute = Ember.Route.extend({
  redirect: function () {
    this.transitionTo("roll");
  }
});

Roller.RollRoute = Ember.Route.extend({
  setupController: function(controller) {
    controller.set("content");
  }
});
