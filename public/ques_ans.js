let option;

var correctQuestionCount = 0;

// =====================
// === question 1
// =====================

$('#btn0').on('click', ()=>{

	let answers = {
		0: 'A',
		1: 'B',
		2: 'C',
		3: 'D'
	}

	let q = $('#btn0').attr("data-q")

	if($('#A' + q).prop('checked') == true){
		option = 'A'
	}
	if($('#B' + q).prop('checked') == true){
		option = 'B'
	}
	if($('#C' + q).prop('checked') == true){
		option = 'C'
	}
	if($('#D' + q).prop('checked') == true){
		option = 'D'
	}
	if(answers[$('#AE'+q).html()] == option){
		$('.answerDisplay').html("That's correct!") 
		$('.answerDisplay').css('color', 'green')
		correctQuestionCount++;
	}else{
		$('.answerDisplay').html("WRONG! Did you leave your brain at home?") 
		$('.answerDisplay').css('color', 'red')
	}

	// regardless of correct answer, disable all radio buttons
	$('#A' + q).prop('disabled', true);
	$('#B' + q).prop('disabled', true);
	$('#C' + q).prop('disabled', true);
	$('#D' + q).prop('disabled', true);



})


// =====================
// === question 2
// =====================

$('#btn1').on('click', ()=>{
let answers = {
	0: 'A',
	1: 'B',
	2: 'C',
	3: 'D'
}

let q = $('#btn1').attr("data-q")

if($('#A'+q).prop('checked') == true){
	option = 'A'
}
if($('#B'+q).prop('checked') == true){
	option = 'B'
}
	if($('#C'+q).prop('checked') == true){
	option = 'C'
}
	if($('#D'+q).prop('checked') == true){
	option = 'D'
}
if(answers[$('#AE'+q).html()] == option){
//	alert("You are correct")
	$('.answerDisplay').html("That's correct!") 
	$('.answerDisplay').css('color', 'green')
	correctQuestionCount++;
}else{
//	alert("You are wrong")
	$('.answerDisplay').html("Sorry, that's not correct!") 
	$('.answerDisplay').css('color', 'red')
}

// regardless of correct answer, disable all radio buttons
	$('#A' + q).prop('disabled', true);
	$('#B' + q).prop('disabled', true);
	$('#C' + q).prop('disabled', true);
	$('#D' + q).prop('disabled', true);

})

// =====================
// === question 3
// =====================

$('#btn2').on('click', ()=>{
let answers = {
	0: 'A',
	1: 'B',
	2: 'C',
	3: 'D'
}
 
let q = $('#btn2').attr("data-q")

if($('#A'+q).prop('checked') == true){
	option = 'A'
}
if($('#B'+q).prop('checked') == true){
	option = 'B'
}
	if($('#C'+q).prop('checked') == true){
	option = 'C'
}
	if($('#D'+q).prop('checked') == true){
	option = 'D'
}
if(answers[$('#AE'+q).html()] == option){
//	alert("You are correct")
	$('.answerDisplay').html("That's correct!") 
	$('.answerDisplay').css('color', 'green')
	correctQuestionCount++;
}else{
//	alert("You are wrong")
	$('.answerDisplay').html("Umm...you suck at this quiz!") 
	$('.answerDisplay').css('color', 'red')
}

// regardless of correct answer, disable all radio buttons
	$('#A' + q).prop('disabled', true);
	$('#B' + q).prop('disabled', true);
	$('#C' + q).prop('disabled', true);
	$('#D' + q).prop('disabled', true);

})


// =====================
// === question 4
// =====================

$('#btn3').on('click', ()=>{
let answers = {
	0: 'A',
	1: 'B',
	2: 'C',
	3: 'D'
}

let q = $('#btn3').attr("data-q")

if($('#A'+q).prop('checked') == true){
	option = 'A'
}
if($('#B'+q).prop('checked') == true){
	option = 'B'
}
	if($('#C'+q).prop('checked') == true){
	option = 'C'
}
	if($('#D'+q).prop('checked') == true){
	option = 'D'
}
if(answers[$('#AE'+q).html()] == option){
//	alert("You are correct")
	$('.answerDisplay').html("That's correct!") 
	$('.answerDisplay').css('color', 'green')
	correctQuestionCount++;
}else{
//	alert("You are wrong")
	$('.answerDisplay').html("Maybe go back to school b/c that was wrong!") 
	$('.answerDisplay').css('color', 'red')
}

// regardless of correct answer, disable all radio buttons
	$('#A' + q).prop('disabled', true);
	$('#B' + q).prop('disabled', true);
	$('#C' + q).prop('disabled', true);
	$('#D' + q).prop('disabled', true);

})

// =====================
// === question 5
// =====================

$('#btn4').on('click', ()=>{
let answers = {
	0: 'A',
	1: 'B',
	2: 'C',
	3: 'D'
}

let q = $('#btn4').attr("data-q")

if($('#A'+q).prop('checked') == true){
	option = 'A'
}
if($('#B'+q).prop('checked') == true){
	option = 'B'
}
	if($('#C'+q).prop('checked') == true){
	option = 'C'
}
	if($('#D'+q).prop('checked') == true){
	option = 'D'
}
if(answers[$('#AE'+q).html()] == option){
//	alert("You are correct")
	$('.answerDisplay').html("That's correct!") 
	$('.answerDisplay').css('color', 'green')
	correctQuestionCount++;
}else{
//	alert("You are wrong")
	$('.answerDisplay').html("Totally wrong!") 
	$('.answerDisplay').css('color', 'red')
}

// regardless of correct answer, disable all radio buttons
	$('#A' + q).prop('disabled', true);
	$('#B' + q).prop('disabled', true);
	$('#C' + q).prop('disabled', true);
	$('#D' + q).prop('disabled', true);

})

// =====================
// === question 6
// =====================

$('#btn5').on('click', ()=>{
let answers = {
	0: 'A',
	1: 'B',
	2: 'C',
	3: 'D'
}

let q = $('#btn5').attr("data-q")

if($('#A'+q).prop('checked') == true){
	option = 'A'
}
if($('#B'+q).prop('checked') == true){
	option = 'B'
}
	if($('#C'+q).prop('checked') == true){
	option = 'C'
}
	if($('#D'+q).prop('checked') == true){
	option = 'D'
}
if(answers[$('#AE'+q).html()] == option){
//	alert("You are correct")
	$('.answerDisplay').html("That's correct!") 
	$('.answerDisplay').css('color', 'green')
	correctQuestionCount++;
}else{
//	alert("You are wrong")
	$('.answerDisplay').html("Totally incorrect!") 
	$('.answerDisplay').css('color', 'red')
}

// regardless of correct answer, disable all radio buttons
	$('#A' + q).prop('disabled', true);
	$('#B' + q).prop('disabled', true);
	$('#C' + q).prop('disabled', true);
	$('#D' + q).prop('disabled', true);

})

// =====================
// === question 7
// =====================

$('#btn6').on('click', ()=>{
let answers = {
	0: 'A',
	1: 'B',
	2: 'C',
	3: 'D'
}

let q = $('#btn5').attr("data-q")

if($('#A'+q).prop('checked') == true){
	option = 'A'
}
if($('#B'+q).prop('checked') == true){
	option = 'B'
}
	if($('#C'+q).prop('checked') == true){
	option = 'C'
}
	if($('#D'+q).prop('checked') == true){
	option = 'D'
}
if(answers[$('#AE'+q).html()] == option){
//	alert("You are correct")
	$('.answerDisplay').html("That's correct!") 
	$('.answerDisplay').css('color', 'green')
	correctQuestionCount++;
}else{
//	alert("You are wrong")
	$('.answerDisplay').html("That's incorrect!") 
	$('.answerDisplay').css('color', 'red')
}

// regardless of correct answer, disable all radio buttons
	$('#A' + q).prop('disabled', true);
	$('#B' + q).prop('disabled', true);
	$('#C' + q).prop('disabled', true);
	$('#D' + q).prop('disabled', true);

var percentage = (correctQuestionCount / 7) * 100;
	$('.resultDisplay').html("You scored " + percentage.toFixed(2) + "%");
	$('.resultDisplay').hide()
})

// =====================
// === question 8
// =====================

// $('#btn7').on('click', ()=>{
// 	let answers = {
// 		0: 'A',
// 		1: 'B',
// 		2: 'C',
// 		3: 'D'
// 	}

// 	let q = $('#btn6').attr("data-q")

// 	if($('#A'+q).prop('checked') == true){
// 		option = 'A'
// 	}
// 	if($('#B'+q).prop('checked') == true){
// 		option = 'B'
// 	}
// 		if($('#C'+q).prop('checked') == true){
// 		option = 'C'
// 	}
// 		if($('#D'+q).prop('checked') == true){
// 		option = 'D'
// 	}
// 	if(answers[$('#AE'+q).html()] == option){
// 	//	alert("You are correct")
// 		$('.answerDisplay').html("That's correct!") 
// 		$('.answerDisplay').css('color', 'green')
// 		correctQuestionCount++;
		
// 	}else{
// 	//	alert("You are wrong")
// 		$('.answerDisplay').html("I give up on you. <br> Try again!") 
// 		$('.answerDisplay').css('color', 'red')
// 	}

// 	// regardless of correct answer, disable all radio buttons
// 	$('#A' + q).prop('disabled', true);
// 	$('#B' + q).prop('disabled', true);
// 	$('#C' + q).prop('disabled', true);
// 	$('#D' + q).prop('disabled', true);

//})





