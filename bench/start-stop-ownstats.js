module.exports = {
  count: 1000,
  name: 'Start Stop (with own stats)',
  setup: function() {
    var Heimdall = process.Heimdall;
    var heimdall = new Heimdall();
    function MySchema() {
      this.x = 0;
    }
  },
  fn: function() {
    var a = heimdall.start('a');
    var b = heimdall.start('b', MySchema);
    b.stats.x++;
    b.stop();
    a.stop();
  }
};
