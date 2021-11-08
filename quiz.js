(function(){
    function buildQuiz(){
      const output = [];
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          const answers = [];
  

          for(letter in currentQuestion.answers){

            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }

          output.push(
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        }
      );
 
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      const answerContainers = quizContainer.querySelectorAll('.answers');

      let numCorrect = 0;
  
      myQuestions.forEach( (currentQuestion, questionNumber) => {

        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
 
        if(userAnswer === currentQuestion.correctAnswer){
        
          numCorrect++;
  
  
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
      
        else{
  
          answerContainers[questionNumber].style.color = 'red';
        }
      });

      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove('active-slide');
      slides[n].classList.add('active-slide');
      currentSlide = n;
      if(currentSlide === 0){
        previousButton.style.display = 'none';
      }
      else{
        previousButton.style.display = 'inline-block';
      }
      if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
      }
      else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  

    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
      {
        question: "What color is a firetruck?",
        answers: {
          a: "Green",
          b: "Blue",
          c: "Red"
        },
        correctAnswer: "c"
      },
      {
        question: "Who is the president",
        answers: {
          a: "Trump",
          b: "Bush",
          c: "Biden"
        },
        correctAnswer: "c"
      },
      {
        question: "Whats 2+2?",
        answers: {
          a: "5",
          b: "3",
          c: "1",
          d: "4"
        },
        correctAnswer: "d"
      }
    ];
  

    buildQuiz();
  

    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
   
  
