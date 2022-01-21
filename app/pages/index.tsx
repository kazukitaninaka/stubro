import type { NextPage } from "next";
import Card from "../components/Card";

const Home: NextPage = () => {
  const mentors = [
    {
      id: 1,
      username: "Kazuki",
      email: "kazuki@gmail.com",
      image: "https://placehold.jp/150x150.png",
      clickCount: 0,
      destination: "アメリカ",
      eduOrg: "Reading High School",
      term: "半年〜1年",
      type: ["高校留学", "交換留学", "ホストファミリー"],
      price: 100,
    },
    {
      id: 2,
      username: "Taka",
      email: "taka@gmail.com",
      image: "https://placehold.jp/150x150.png",
      clickCount: 0,
      destination: "イギリス",
      eduOrg: "University of London",
      term: "4年",
      type: ["大学留学", "寮", "奨学金利用"],
      price: 1000,
    },
    {
      id: 3,
      username: "Taka",
      email: "taka@gmail.com",
      image: "https://placehold.jp/150x150.png",
      clickCount: 0,
      destination: "イギリス",
      eduOrg: "University of London",
      term: "4年",
      type: ["大学留学", "寮", "奨学金利用"],
      price: 1000,
    },
    {
      id: 4,
      username: "Taka",
      email: "taka@gmail.com",
      image: "https://placehold.jp/150x150.png",
      clickCount: 0,
      destination: "イギリス",
      eduOrg: "University of London",
      term: "4年",
      type: ["大学留学", "寮", "奨学金利用"],
      price: 1000,
    },
  ];
  return (
    <div>
      <div className="flex flex-wrap gap-5">
        {mentors.map((mentor) => (
          <Card key={mentor.id} mentor={mentor} />
        ))}
      </div>
    </div>
  );
};

export default Home;
