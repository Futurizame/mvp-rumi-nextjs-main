import { Logo } from "../ui/logo";
import { Form } from "./ui/form";
import { FormDescription } from "./ui/form-description";

export default function EarlyAccess() {
  return (
    <main>
      <Logo />
      <FormDescription />
      <Form className={"pt-4"} />
    </main>
  );
}
