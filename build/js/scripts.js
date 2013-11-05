(function() {
  var countdown;

  countdown = function(sec) {
    var section, time, timer;
    sec -= 1;
    section = $('.ex:first');
    time = section.find('.time').text();
    section.addClass('active');
    $('h1').text(sec);
    timer = setInterval(function() {
      return countdown(sec);
    }, 1000);
    if (sec <= 0) {
      clearInterval(timer);
      section.removeClass('active');
      return section.next().addClass('active');
    }
  };

  $(function() {
    return countdown(5);
  });

}).call(this);
