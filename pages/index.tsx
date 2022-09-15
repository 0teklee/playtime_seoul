import type { NextPage } from "next";
import Layout from "../components/common/Layout";
import MainContent from "../components/Pages/Main/MainContent";

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <MainContent />
      </Layout>
    </>
  );
};

export default Home;
