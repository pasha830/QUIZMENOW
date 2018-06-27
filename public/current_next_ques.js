var currentQuestion = 0
var nextQuestion = currentQuestion + 1

for(let i=1; i<7; i++){
	$('.quiz' + i).hide();
}

$("#nextQ" + currentQuestion).click(()=>{
	$('.answerDisplay').html("") 
	console.log( 'Current Question # '+ currentQuestion)
	console.log( 'Next Question # '+ currentQuestion)
	$('.quiz' + currentQuestion).css('top', '-300px')
	$('.quiz' + currentQuestion).hide()
	$('.quiz'+ nextQuestion).show()
	currentQuestion++
	nextQuestion++
})

$("#nextQ1").click(()=>{
	$('.answerDisplay').html("") 
	console.log( 'Current Question # '+ currentQuestion)
	console.log( 'Next Question # '+ currentQuestion)
	$('.quiz' + currentQuestion).css('top', '-300px')
	$('.quiz' + currentQuestion).hide()
	$('.quiz'+ nextQuestion).show()
	currentQuestion++
	nextQuestion++
})

$("#nextQ2").click(()=>{
	$('.answerDisplay').html("") 
	console.log( 'Current Question # '+ currentQuestion)
	console.log( 'Next Question # '+ currentQuestion)
	$('.quiz' + currentQuestion).css('display', 'none')
	$('.quiz'+ nextQuestion).show()
	currentQuestion++
	nextQuestion++
})

$("#nextQ3").click(()=>{
	$('.answerDisplay').html("") 
	console.log( 'Current Question # '+ currentQuestion)
	console.log( 'Next Question # '+ currentQuestion)
	$('.quiz' + currentQuestion).hide()
	$('.quiz'+ nextQuestion).show()
	currentQuestion++
	nextQuestion++
})

$("#nextQ4").click(()=>{
	$('.answerDisplay').html("") 
	console.log( 'Current Question # '+ currentQuestion)
	console.log( 'Next Question # '+ currentQuestion)
	$('.quiz' + currentQuestion).hide()
	$('.quiz'+ nextQuestion).show()
	currentQuestion++
	nextQuestion++
})

$("#nextQ5").click(()=>{
	$('.answerDisplay').html("") 
	console.log( 'Current Question # '+ currentQuestion)
	console.log( 'Next Question # '+ currentQuestion)
	$('.quiz' + currentQuestion).hide()
	$('.quiz'+ nextQuestion).show()
	currentQuestion++
})

$("#nextQ6").click(()=>{
	$('.answerDisplay').html("") 
	console.log( 'Current Question # '+ currentQuestion)
	console.log( 'Next Question # '+ currentQuestion)
	$('.quiz' + currentQuestion).hide()
	$('.quiz'+ nextQuestion).show()
	currentQuestion++
})