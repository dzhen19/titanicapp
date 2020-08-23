export const questions = {
  0: {
    question: "How would you fare on the Titanic?",
    input: "button",
    text: "find out",
  },
  1: {
    question: "Are you male or female?",
    input: "button",
    buttons: [
      { display: "Male", save: 1 },
      { display: "Female", save: 0 },
    ],
    label: "Sex",
  },
  2: {
    question: "How old are you?",
    input: "text",
    placeholder: "Age",
    label: "Age",
  },
  3: {
    question: "How big is your party?",
    input: "text",
    placeholder: "Party Size",
    label: "Family_size",
  },
  4: {
    question: "Which deck were you situated in?",
    input: "button",
    buttons: [
      { display: "A", save: "A" },
      { display: "B", save: "B" },
      { display: "C", save: "C" },
      { display: "D", save: "D" },
      { display: "E", save: "E" },
      { display: "F", save: "F" },
      { display: "G", save: "G" },
    ],
    label: "Deck",
  },
  5: {
    question: "Where did you Embark ?",
    input: "button",
    buttons: [
      { display: "Southampton", save: "S" },
      { display: "Queenstown", save: "Q" },
      { display: "Cherbourg", save: "C" },
    ],
    label: "Embark",
  },
  6: {
    question: "First Class, Business, or Economy?",
    input: "button",
    buttons: [
      { display: "First Class", save: 1 },
      { display: "Second Class", save: 2 },
      { display: "Third Class", save: 3 },
    ],
    label: "Pclass",
  },
  7: {
    question:
      "Are you a member of the clergy, nobility, or the armed services?",
    input: "button",
    buttons: [
      { display: "Yes", save: 1 },
      { display: "No", save: 0 },
    ],
    label: "mil_cler_nob",
  },
  8: {
    question: "Are you married?",
    input: "button",
    buttons: [
      { display: "Yes", save: 1 },
      { display: "No", save: 0 },
    ],
    label: "married",
  },
  9: {
    question: "Are you married?",
    input: "button",
    buttons: [
      { display: "Yes", save: 1 },
      { display: "No", save: 0 },
    ],
    label: "married",
  },
};
