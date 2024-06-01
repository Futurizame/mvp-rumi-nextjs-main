import { MainContainer } from "./ui/main-container";
import { RedirectEarlyAccessForm } from "./ui/redirect-early-access-form";
import { Logo } from "./ui/logo";
import { Presentation } from "./ui/presentation";
import { About } from "./ui/about";

export default function App() {
  return (
    <MainContainer>
      <Logo />
      <div className="flex flex-col sm:gap-20 sm:py-8">
        <div className="sm:flex">
          <About />
          <Presentation />
        </div>
        <RedirectEarlyAccessForm />
      </div>
    </MainContainer>
  );
}
