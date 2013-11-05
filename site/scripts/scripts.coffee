countdown = (sec)  ->
  sec    -= 1
  section = $('.ex:first')
  time    = section.find('.time').text()
  section.addClass 'active'
  $('h1').text(sec) 
  timer = setInterval ->
    countdown(sec)
  ,1000
  if sec <= 0
    clearInterval(timer)
    section.removeClass('active')
    section.next().addClass('active')
    

$ ->
  countdown(5)
  