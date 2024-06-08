import { Logo } from "../ui/logo";
import { FormContainer } from "./ui/form-container/form-container";
import { Footer } from "../ui/footer";

export default function EarlyAccess() {
  return (
    <main>
      <Logo redirect={"/"} />
      <FormContainer />
      <Footer />
    </main>
  );
}
