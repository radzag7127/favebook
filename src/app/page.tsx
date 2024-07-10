// pages/index.tsx
import Facebook from "./facebook/facebook";
import Footer from "./facebook/footer";
import Popup from "./facebook/components/warning";

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
