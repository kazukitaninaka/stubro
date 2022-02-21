import { useRouter } from "next/router";
import { Hangout } from "../components/images";

export default function index() {
  const router = useRouter()
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-evenly">
        <div className="sm:w-1/3 mx-auto">
          <h2 className="text-3xl lg:text-4xl sm:mt-24 font-medium"><span className="font-bold text-sky-500">StuBro</span>で
            <br />気軽に留学相談<br />はじめませんか</h2>
          <button
            className='bg-sky-500 text-white py-2 px-3 rounded-md hover:bg-sky-600 mt-10 mx-auto'
            onClick={() => router.push("/home")}
          >
            相談相手を探してみる
          </button>
        </div>
        <Hangout className="h-full mt-5 sm:mt-0 w-[90%] sm:w-1/2 mx-auto" />
      </div>


    </>
  )
}

