import Layout from "@/components/Layout/Layout";
import Carousel from "@/components/Carousel/Carousel";
import PageSearch from "@/components/PageSearch/PageSearch";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <Layout>
      <Carousel />
        <PageSearch />
      <Footer />
    </Layout>
  );
}
