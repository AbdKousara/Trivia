let quizzes = [
       {       
       name:'Programming',
       questions:['what the programming language that used for styling web pages?','what values the boolean data type takes','Who invented JavaScript ?'],
       answers: [
              ['javascript','css','html'],
              ['string','true&false','number'],
              ['Brendan Eich','Bjarne Stroustrup','Alan Turing']
       ]
       },
      
];

document.addEventListener("DOMContentLoaded", function(event){ 
       document.querySelector(".topics").style.visibility = 'hidden';
});

document.querySelector(".btn_start").addEventListener('click',function(){
       var value = document.querySelector("input[type=text]").value;
       document.querySelector("h1").innerHTML = `Welcome  ${value}`;
       $(".get_name").fadeOut("slow");
       document.querySelector(".topics").style.visibility = '';
       document.querySelector(".questions_list").style.visibility = 'hidden';


});

var numberOfBouttons = document.querySelectorAll(".topic_btn").length;
for (var i = 0; i < numberOfBouttons;i++) {
    document.querySelectorAll(".topic_btn")[i].addEventListener("click", function(){
        var buttoninnerHTML = this.innerHTML;
        quizzes.forEach(function(element){
              if(element.name === buttoninnerHTML){
                     document.querySelector(".questions_list").style.visibility = '';
                     document.querySelector(".topics_buttons").remove();
                     displayQuestions(element.questions);
              }
        });
       
    });
}

function displayQuestions(q){
       for (var i = 0; i < q.length;i++) {
           var qbtn = document.getElementsByClassName("question_btn")[i].innerHTML = `${q[i]}`;
       } 
}