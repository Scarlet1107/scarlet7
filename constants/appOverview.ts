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
    url: "",
  },
];
