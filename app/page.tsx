import { MainContainer } from "./ui/main-container";
import { RedirectEarlyAccessForm } from "./ui/redirect-early-access-form";
import { Logo } from "./ui/logo";
import { Presentation } from "./ui/presentation";
import { About } from "./ui/about";

export default function App() {
  return (
    <MainContainer>
      <Logo />
      <Presentation />
      <About />
      <RedirectEarlyAccessForm />
    </MainContainer>
  );
}
