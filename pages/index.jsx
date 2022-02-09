import Image from "next/image";
import { Button, Input, Search } from "../components/ui";

import styles from "../styles/Home.module.css";
const inputs = [
  "Registrater name",
  "weight classification",
  "First name",
  "Last name",
  "National code",
  "Province",
  "City",
  "Name of sports club",
  "Coach name",
  "Payment code",
  "Accurate weight",
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <Search />
      <div className="absolute flex items-center justify-center left-6 top-3">
        <div className="text-left">
          <div className="mb-2 text-2xl font-black text-blue-900">
            Registration
          </div>
          <div className="text-blue-700">Someone name</div>
        </div>
        <div
          style={{ backgroundColor: "#ccc" }}
          className="z-40 mr-3 rounded-full w-28 h-28 bg-slate-700"
        ></div>
      </div>
      <div className="absolute flex items-center justify-center right-6 top-3">
        <div
          style={{ backgroundColor: "#ccc" }}
          className="mr-3 rounded-full w-28 h-28"
        ></div>
        <div
          style={{ backgroundColor: "#ccc" }}
          className="z-50 mr-3 bg-current rounded-full w-28 h-28 "
        ></div>
      </div>

      <div
        style={{ direction: "ltr", backgroundColor: "#fff" }}
        className="relative   mt-[73px] w-1/2 bg-slate-50   rounded-3xl shadow-2xl  p-5 px-8 z-20"
      >
        {inputs.map((el, index) => (
          <Input title={el} key={index} />
        ))}
        <div className="flex justify-center mt-11">
          <Button title="Reject" type="reject" />
          <Button title="Confirm" />
        </div>
      </div>

      <footer>
        <div className="fixed bottom-[-50px] left-0 right-0">
          <Image
            src="/wave.svg"
            layout="responsive"
            alt="logo"
            width={4}
            height={1}
          />
        </div>
      </footer>
    </div>
  );
}
