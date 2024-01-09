import Hero from "@/app/ui/home/hero";
import SpecialSponsor from "@/app/ui/home/special-sponsor";
import Highlights from "@/app/ui/home/highlights";
import Sponsors from "@/app/ui/home/sponsors";
import Sitemap from "@/app/ui/home/sitemap";
import Footer from "@/app/ui/home/footer";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <SpecialSponsor />
      <Highlights />
      <Sponsors />
      <Sitemap />
      <Footer />
    </main>
  );
}
