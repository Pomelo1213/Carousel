var spanId = $('#buttons > span')
var length = spanId.length
var n = 0

for(let i = 0; i < length; i++){
  $(spanId[i]).on('click', function(x){
    var index = $(x.currentTarget).index()
    var p = index * -300
    $('#imgs').css({
      transform: 'translate(' + p +'px)'
    })
    n = index
    spanDo(spanId.eq(n))
  })
}

function spanDo($things){
  $things.addClass('red')
  .siblings('.red').removeClass('red')
}

spanId.eq(n%length).trigger('click')

var timerId = timer()

function timer(){
 return setInterval(() => {
  n += 1
  spanId.eq(n % length).trigger('click')
}, 2000) 
}

$('#window').on('mouseenter', function(){
  window.clearInterval(timerId)
})

$('#window').on('mouseleave', function(){
  timer()
})

