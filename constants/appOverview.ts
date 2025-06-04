export interface App {
  icon: string;
  title: string;
  description: string;
  content: string;
  url: string;
}

export const Apps: App[] = [
  {
    icon: "/sugoi-mojisu-counter.png",
    title: "Sugoi Mojisu Counter",
    description: "Developed as a hobby",
    content:
      "You can count the characters you input.\nYou can set a target number of characters and visualize how close you are to the target.\nIt also has AI that provides free advice on the text you input.",
    url: "https://app.scarlet7.net/word-counter",
  },
  {
    icon: "/tire-quotation-app.jpg",
    title: "Tire Quotation App",
    description: "Developed for work",
    content:
      "I developed this as an internal app after hearing from the president of a local car company that creating quotations in Excel every time was a hassle.\nBy pre-entering tire information into a database and performing conditional searches, anyone can create quotations with the same quality without making mistakes in the amount.",
    url: "https://tire.scarlet7.net/",
  },
  {
    icon: "/menhera-todo.png",
    title: "Menhera Todo",
    description: "Hackathon project",
    content:
      'This is a goofy todo app we made for a hackathon with the theme "Goofie Todo App".\n' +
      "I developed it with my teammate. The main character is a menhera girl named Hera-chan.\n" +
      "You can do normal todo tasks, but depending on how you use the app, Hera-chan’s mood will change.\n" +
      "If you complete your tasks, her affection goes up and she becomes happy. But if you ignore your todos or delete them, her affection drops and she gets mentally unstable.\n" +
      'We were inspired by the game "Needy Girl Overdose" and wanted to mix a todo app with emotional chaos!',
    url: "https://menhera-todo.scarlet7.net/",
  },
];
