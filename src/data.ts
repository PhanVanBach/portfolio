import godn from "./assets/godn.png";
import pizza from "./assets/pizza.png";
import ntf from "./assets/uitest.png";

export const services = [
  {
    title: "Web Development",
    text: "I use my knowledge of modern programming to build fast, secure digital experiences.",
  },
  {
    title: "UI Design",
    text: "Designing clean, intuitive interfaces with Figma, focusing on usability and accessibility.",
  },
  {
    title: "API Integration",
    text: "Connecting web apps with RESTful APIs to deliver dynamic, data-driven experiences.",
  },
];

const demoImg =
  "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop";

// export const projects = new Array(6).fill(0).map((_, i) => ({
//   id: i + 1,
//   title: "Kamly Health",
//   text: "A modern health dashboard for patients and clinicians.",
//   image: demoImg + `&sig=${i}`,
// }));

export const projects = [
  {
    id: 1,
    title: "GoDaNang (Travel Guide Website)",
    text: "A local travel guide platform for Da Nang and Hoi An, showcasing the best places to visit, eat, and stay. Users can explore curated travel resources, from transportation tips to event highlights, all in one place.",
    image: godn,
    url: "https://www.go-danang.com/",
  },
  {
    id: 2,
    title: "Online Pizza Ordering App",
    text: "A responsive web application that allows users to browse pizzas, add them to a cart, and place orders. Built with a focus on performance and user experience.",
    image: pizza,
    url: "https://pizza-theta-teal.vercel.app/",
  },
  {
    id: 3,
    title: "NFT Info Landing Page",
    text: "A modern landing page that introduces key concepts and tips before buying NFTs. Designed with a vibrant, futuristic aesthetic to appeal to crypto enthusiasts.",
    image: ntf,
    url: "https://test-frontend-sable.vercel.app/",
  },
];

export const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Styled-Components",
  "Tailwind",
  "Antd Design",
];
