import { Logo } from "../ui/logo";
import { FormContainer } from "./ui/form-container/form-container";

export default function EarlyAccess() {
  return (
    <main>
      <Logo redirect={"/"} />
      <FormContainer />;
    </main>
  );
}
