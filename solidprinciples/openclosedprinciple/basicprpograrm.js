// in this basic pattern we need to change the code inside if we change the code outside the funciton this is not the open closed priniciple.

// the open close principle is all about extension of program / block of code but not the modification

function pritnQuiz(questions) {
  questions.forEach((question) => {
    console.log(question.description);
    switch (question.type) {
      case "boolean":
        console.log("1.True");
        console.log("2.False");
        break;
      case "multitpleChoice":
        question.options.forEach((option, index) => {
          console.log(`${index + 1}.${option}`);
        });
        break;
      case "text":
        console.log("Answer:____________");
        break;
      case "range":
        console.log("minimum:________");
        console.log("maximum:________");
    }
    console.log("");
  });
}

const questions = [
  { type: "boolean", description: "This video is useful" },
  {
    type: "multipleChoice",
    description: "What is your favourite language",
    options: ["HTML", "JS", "ReaectJS", "Python"],
  },
  {
    type: "text",
    description: "Describe your favourite js feature",
  },
  {
    type: "text",
    description: "Speed range in your city",
  },
];

pritnQuiz(questions);
