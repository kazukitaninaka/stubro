import React from "react";
import { TagIcon } from "@heroicons/react/solid";

const mnt = {
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
};
type Mentor = typeof mnt;

export default function Card({ mentor }: { mentor: Mentor }) {
  return (
    <div className="w-full md:w-[48%] lg:w-[30%] border rounded-md divide-y divide-dashed shadow-sm">
      <div className="p-3">
        <table className="table-fixed">
          <tbody>
            <tr>
              <td className="w-1/3 font-bold">留学先国</td>
              <td>{mentor.destination}</td>
            </tr>
            <tr>
              <td className="font-bold">教育機関名</td>
              <td>{mentor.eduOrg}</td>
            </tr>
            <tr>
              <td className="font-bold">留学形態</td>
              <td className="flex flex-wrap gap-x-2 gap-y-0.5">
                {mentor.type.map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center border border-sky-500 rounded-full px-1 text-white bg-sky-500"
                  >
                    <TagIcon className="h-5 w-5" />
                    <span>{tag}</span>
                  </span>
                ))}
              </td>
            </tr>
            <tr>
              <td className="font-bold">留学期間</td>
              <td>{mentor.term}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="p-3 flex items-center justify-between">
        <div className="flex items-center gap-x-5">
          <img
            src={mentor.image}
            alt="profile picture"
            className="w-12 h-12 inline object-cover rounded-full"
          />
          <div>{mentor.username}</div>
        </div>
        <div>相談料: {mentor.price}円 / 回</div>
      </div>
      <div className="p-3 flex justify-center">
        <button className="bg-sky-500 text-white py-2 px-3 rounded-full">
          相談してみる
        </button>
      </div>
    </div>
  );
}
