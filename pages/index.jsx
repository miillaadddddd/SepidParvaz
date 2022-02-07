import Head from "next/head";
import Image from "next/image";
import Button from "../components/ui/Button/Button";
import Search from "../components/ui/Search/Search";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="h-screen  flex flex-col justify-center items-center bg-gray-100">
      <Search />
      <div className="absolute left-6 top-3 flex justify-center items-center">
        <div className="text-left">
          <div className="font-black text-blue-900 text-2xl mb-2">
        Registration

          </div>
          <div className="text-blue-700">
          Someone name
          </div>
        </div>
        <div className="w-28 h-28 bg-slate-700 rounded-full mr-3"></div>
      </div>
      <div className="absolute right-6 top-3 flex justify-center items-center">
        
        <div className="w-28 h-28 bg-slate-700 rounded-full mr-3"></div>
        <div className="w-28 h-28 bg-slate-700 rounded-full mr-3 "></div>
      </div>
      
      
      <div className="relative h-[500px] mt-[90px] w-1/2 bg-white rounded-3xl shadow-lg z-10 ">
        <div className="absolute bottom-2 left-0 right-0  text-center">
          <Button title="Confirm" />
          <Button title="Reject" type="reject" />
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
