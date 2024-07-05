import Facebook from "./facebook/facebook";
import Footer from "./facebook/footer";

export default function Home() {
  return (
    <main>
      <section>
        <Facebook />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
}
