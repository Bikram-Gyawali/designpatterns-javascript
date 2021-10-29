class BooleanQuestion {
  constructor(desc) {
    this.desc = desc;
  }
  printQuestion() {
    console.log("1.True");
    console.log("2.False");
  }
}

class MultipleChoiceQuesiton {
  constructor(desc, opt) {
    this.desc = desc;
    this.opt = opt;
  }
  printQuestionChoices() {
    this.opt.forEach((opt, index) => {
      console.log(`${index + 1}. ${opt}`);
    });
  }
}

class TestQuestion {
  constructor(desc) {
    thid.desc = desc;
  }
  printQuestionChoices() {
    console.log("Answer:________");
  }
}

class RangeQuestion {
  constructor(desc) {
    this.desc = desc;
  }
  printQuestionChoices() {
    console.log("Mnimum:_______");
    console.log("Maximum:_______");
  }
}

function printQuiz(questions) {
  questions.foreach((question) => {
    console.log(question.desc);
    question.printQuestionChoices();
    console.log("");
  });
}

const question = [
  new TestQuestion("this video is useful >>"),
  new MultipleChoiceQuesiton("What is your favourite laanguage?", [
    "CSS",
    "HTML",
    "JS",
    "Python",
  ]),
  new TestQuestion("Description your favourite js feature"),
  new RangeQuestion("What is your skills rangge in js between 1-5"),
];

// so here the printQuiz function is cosed to changes and open for the exension we can extend the code with new clsses creation without the need of any change in the funciton so bsically this means do your work in classes or functions if you repeat any block of code twice also from previous design pattern make it in module if the repeative code is more lines of code

// also donot forget to check out the basicProrgam file code where we need to  some repeatative task for same approach thats a weak code so this is it come up here once again after seeing that code
