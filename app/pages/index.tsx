import { useRouter } from "next/router";
import { Hangout } from "../components/images";

const serviceDescriptionContent = [
  { title: "まずは留学の検討に", description: "留学経験者から直接リアルな話を聞いて、留学検討の材料にしましょう。" },
  {
    title: "留学決定〜出発までの具体的な相談に", description: "留学経験者ならではの留学Tipsを聞いてみましょう。\n例:日本から持っていって便利だったもの、現地でおすすめのお店など"
  },
  {
    title: "留学中の困りごとに", description: "留学に行った先でどうしても困ったことがあれば、経験者に質問してみましょう。\n母国語で安心して聞くことができます。"
  }
]

export default function LP() {
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

      </div>
      <div className="mt-32 text-center">
        <h2 className="text-3xl le:text-4xl">Why StuBro?</h2>
        <p className="mt-3 text-lg">StuBroは<span className="font-bold">留学経験者</span>と直接話すことができるサービスです。</p>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-12 gap-y-10 lg:gap-x-5">
          {serviceDescriptionContent.map((content) => {
            const descriptionLines = content.description.split("\n")
            return (
              <div className='h-full w-full border border-transparent rounded-md shadow-md bg-white col-span-12 lg:col-span-4 py-3 px-5 max-w-md'>
                <h3 className="text-center font-semibold text-lg">{content.title}</h3>
                <div className="mt-5">
                  {descriptionLines.map(line => <p>{line}</p>)}
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="mx-auto text-center mt-32">
        <h2 className="text-3xl le:text-4xl">さっそく使ってみよう</h2>
        <button
          className='bg-sky-500 text-white py-2 px-3 rounded-md hover:bg-sky-600 mt-5 lg:mt-10 mx-auto'
          onClick={() => router.push("/home")}
        >
          相談相手を探してみる
        </button>
      </div>


    </>
  )
}

