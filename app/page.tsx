import { MainContainer } from "./ui/main-container";
import { RedirectEarlyAccessForm } from "./ui/redirect-early-access-form";
import { Logo } from "./ui/logo";

export default function App() {
  return (
    <MainContainer>
      <Logo />
      <RedirectEarlyAccessForm />
    </MainContainer>
  );
}
