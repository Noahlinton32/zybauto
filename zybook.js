https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en
// ==UserScript==
// @name         zyBooks Autocomplete
// @version      0.2
// @description  One click to speed up the boring parts
// @author       Noah Linton
// @match        https://learn.zybooks.com/zybook/*
// @namespace https://github.com/Evanito/zyBAuto
// @run-at document-idle
// @require  https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// ==/UserScript==
// TO USE: Click Autocomplete! on a zyBooks page <-----
var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);
// ==== SETTINGS ====
var autoRun = false;
// == END SETTINGS ==

// Do not edit below this line!
// ==========================================
var $ = window.$;
(function() {
    if (autoRun) {console.log
        run();
    } else {
        (function repeat() {
          try {
            document.getElementsByClassName('right-buttons')[0].innerHTML = '<button id="zbaButton" type="button">Autocomplete!</button>' + document.getElementsByClassName('right-buttons')[0].innerHTML;
            document.getElementById("zbaButton").addEventListener ("click", zBAStartButton, false);
          } catch (error) {
          setTimeout(() => {
            repeat()
            }, 1000)
        }})()
    }
})();


function zBAStartButton (zEvent) {
    console.clear();
	run();
}
// jquery functions
$(document).ready(function() {
    $('#zbaButton').click(function() {
	radioQuestions();
	//challengeQuestions();
	//answerQuestions();
	//click_speed();
    });
});

function run() {
    //click_plays();
    //click_starts();
    setTimeout(function(){ run(); }, 1000);
}

function click_speed() { 
    var twoSpeed = $("zb-checkbox.grey.label-present.right.ember-view").prop("checked",true);
	//$(twoSpeed).prop(":checked");
	//console.log(twoSpeed);
}

function click_plays() { // Clicks all Play buttons
    var playB = $(".play-button");
    for (var i = 0; i < playB.length; i++) {if($(playB).val().indexOf("rotate-180")==-1){playB[i].click();}}
}

function click_starts() { // Clicks all Start buttons
    var starts = $("button.zb-button.primary.raised.start-button.start-graphic");
    for (var i = 0; i < starts.length; i++) {
        starts[i].click();
    }
}
function timeout(){
	
}
function answerQuestions(){
var rTime = Math.floor((Math.random() * 4000) + 1000);
var checkB = $("button.zb-button.primary.raised.check-button");
var AnswerB = $("button.zb-button.secondary.show-answer-button");
AnswerB.click();
AnswerB.click();
var answer = $("div.zb-explanation.has-explanation.forfeit > div > span");
var textA = $("textarea.ember-text-area.ember-view.zb-text-area.hide-scrollbar");
for(let i = 0; i<=answer.length;i++){
	$(textA[i]).focus();
	$(textA[i]).val($(answer[i]).text());
	// this timeout just stops the click from running not every individual one 
	//****NEEDS TO BE COMPLETED ONLY DELAYS THE ENTIRE TIME ACTION****
	//https://www.geeksforgeeks.org/how-to-add-a-delay-in-a-javascript-loop/
	setTimeout(function() {
	$(textA[i]).focus();
	checkB[i].click();}, 1500);}
	}
function radioQuestions(){
	var radioB = $("div input:radio");
	console.log(radioB);
	var correct = $("zb-explanation.has-explanation.correct.message").text();
	console.log(correct);
	radioB.click();
	// only select second button could be because the if or for statement is not terminating at the correct time i.e the correct field is not being shown for each respective eleemnt.
	for(let i = 0; i<$(radioB).length;i++){
		if(correct[i]!="Correct"||!(correct.length)){
		radioB[i].attr('checked',true);	
		}
		i=0;
	}
}
function challengeQuestions(){
$("button.zyante-progression-start-button.button").click();
var input = $(" div.element.short-answer > input[type=number]");	
var check = $("button.zyante-progression-check-button");
var nCheck = $(" div.check-next-container > div:nth-child(1) > button");
input.focus();
input.val("9");
check.click();
$(input).prop("disabled",false);
$(nCheck).prop("disabled",false);
$(check).addClass("div.element.short-answer").removeClass("div element short-answer invalid-answer");
$(nCheck).addClass("zyante-progression-check-button button").removeClass("zyante-progression-check-button button disabled");
// the mathjx-element-#-frame is determined by how many numbers exist in the fields so if we can count until the element where the answer is it may be a viable solution
//https://stackoverflow.com/questions/43760624/jquery-count-elements-until-you-reach-a-specific-element-and-stop-count this guy tries it 
// contains all of the data var spanAnswer = $("span.zyante-progression-explanation.white-space-pre").html();
//data-mathml="<math xmlns="http://www.w3.org/1998/Math/MathML"><mn>8</mn></math>"
var spanAnswer = $( "span[data-mathml|='<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mn>']");
console.log($(spanAnswer).html());
console.log($(spanAnswer).text());
}
// add a delay for each buttons click 


// to answer the challenge questions you first have to get it wrong then take from the section that shows the incorrect answers
// after that you have to reenable the check button and all of the fields that you need to put in answers
// put in the answers then click check and then next
// element.disabled = false; to set the element to enabled
