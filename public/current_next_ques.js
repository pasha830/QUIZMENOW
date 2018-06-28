var currentQuestion = 0
var nextQuestion = currentQuestion + 1
//var Answer = 0

for(let i=1; i<7; i++){
	$('.quiz' + i).hide();
}

$("#nextQ" + currentQuestion).click(()=>{
	$('.answerDisplay').html("") 
	$('.quiz' + currentQuestion).hide()
	$('.quiz'+ nextQuestion).show()
	currentQuestion++
	nextQuestion++
})

$("#nextQ1").click(()=>{
	$('.answerDisplay').html("") 
	$('.quiz' + currentQuestion).hide()
	$('.quiz'+ nextQuestion).show()
	currentQuestion++
	nextQuestion++
})

$("#nextQ2").click(()=>{
	$('.answerDisplay').html("") 
	$('.quiz' + currentQuestion).hide()
	$('.quiz'+ nextQuestion).show()
	currentQuestion++
	nextQuestion++
})

$("#nextQ3").click(()=>{
	$('.answerDisplay').html("") 
	$('.quiz' + currentQuestion).hide()
	$('.quiz'+ nextQuestion).show()
	currentQuestion++
	nextQuestion++
})

$("#nextQ4").click(()=>{
	$('.answerDisplay').html("") 
	$('.quiz' + currentQuestion).hide()
	$('.quiz'+ nextQuestion).show()
	currentQuestion++
	nextQuestion++
})

$("#nextQ5").click(()=>{
	$('.answerDisplay').html("") 
	$('.quiz' + currentQuestion).hide()
	$('.quiz'+ nextQuestion).show()
	currentQuestion++
	$('#nextQ6').html("Check Results") 
})



$("#nextQ6").click(()=>{
	$('.answerDisplay').hide()
	//$('.resultDisplay').html("")
	$('.quiz' + currentQuestion).hide()
	$('.quiz'+ nextQuestion).show()
	$('.resultDisplay').show()

	//currentQuestion++
	//nextQuestion++
})


// clicking 'check results to display the score'





