import { useRouter } from "next/router";
import { Hangout } from "../components/images";

export default function index() {
  const router = useRouter()
  return (
    <>
      <div className="grid lg:grid-cols-12">
        <Hangout className="lg:col-span-6 lg:order-last w-2/3 lg:w-full mx-auto" />
        <div className="lg:col-span-6 mx-auto lg:mx-0 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl mt-12 lg:mt-24 font-medium"><span className="font-bold text-sky-500">StuBro</span>で
            <br />気軽に留学相談<br />はじめませんか</h1>
          <button
            className='bg-sky-500 text-white py-2 px-3 rounded-md hover:bg-sky-600 mt-5 lg:mt-10 mx-auto'
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

