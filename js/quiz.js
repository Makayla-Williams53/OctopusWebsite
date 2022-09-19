function getScore(quiz)
{
  //create variables for the score and checking score
  var score = 0;
  var choices = 20;
  var currentChoice, checkedAnswer, correctAnswers;

  //array containing correct answers
  var answers = ['blueRing', 'jellyfish', 'red', '100', '3'];

  //loop thorugh all the choices
  for(var i = 0; i < choices; i++)
  {
    currentChoice = quiz.elements[i]
    //see what answers are checked
    if(currentChoice.checked)
    {
      checkedAnswer = currentChoice.value;
      //check to see if the selected answer is the correct answer
      for(var j = 0; j < answers.length; j++)
      {
        if(answers[j] == checkedAnswer)
        {
          score++;
        }//close inner if
      }//close inner for loop
    }//close outer if loop
  }//close outer for loop

  score = (score / answers.length) * 100;
  quiz.percentage.value = score + '%';

  //output the correct answers
  correctAnswers = '';
  for(i = 0; i < answers.length; i++)
  {
    correctAnswers += i + 1 + "." + answers[i] + "\n";
  }//end for loop

  quiz.solutions.value = correctAnswers;
}//end getScore