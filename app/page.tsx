import { Logo } from "./ui/logo";
import { TutorialVideo } from "./ui/tutorial-video";
import { Presentation } from "./ui/presentation";
import { AboutUs } from "./ui/about-us";
import { Footer } from "./ui/footer";

export default function App() {
  return (
    <main>
      <Logo />
      <Presentation />
      <TutorialVideo />
      <AboutUs />
      <Footer />
    </main>
  );
}
