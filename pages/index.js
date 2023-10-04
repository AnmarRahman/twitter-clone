import Head from "next/head";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";
import { getProviders, useSession } from "next-auth/react";
import Login from "../components/Login";
import Modal from "../components/Modal";
import { modalState } from "../atoms/modalAtom";
import { useRecoilState } from "recoil";

export default function Home({ trendingResults, providers }) {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useRecoilState(modalState);

  if (!session) return <Login providers={providers} />;

  return (
    <div className="">
      <Head>
        <title>Home / Twitter</title>
        <link rel="icon" href="/twitter.ico" />
      </Head>

      <main className="bg-black min-h-screen flex max-w-[1500px] mx-auto">
        <Sidebar />
        <Feed />
        <Widgets trendingResults={trendingResults.articles} />

        {isOpen && <Modal />}
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const apiKey = "f98119da1eb44ff8be61e1d382511b48";

  const trendingResults = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
  ).then((res) => res.json());
  const providers = await getProviders();

  return {
    props: {
      trendingResults,
      providers,
    },
  };
}
