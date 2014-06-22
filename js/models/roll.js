Roller.Roll = Ember.Object.extend({
  diceNumber: 0,
  totalRolls: 0,
  numberOfRolls: 0,

  proportion: function() {
    var width = 50 + parseInt(400 * this.get("numberOfRolls") /
      this.get("totalRolls"));
    return "width: " + width + "px;";
  }.property("totalRolls", "numberOfRolls")
});
