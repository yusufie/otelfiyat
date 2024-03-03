import Layout from "@/components/Layout/Layout";
import Carousel from "@/components/Carousel/Carousel";
import Filterbox from "@/components/Filterbox/Filterbox";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <Layout>
      <Carousel />
        <Filterbox />
      <Footer />
    </Layout>
  );
}
