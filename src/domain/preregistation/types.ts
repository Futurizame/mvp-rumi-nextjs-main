export type PreRegisterFormData = {
  name: string;
  email: string;
  phone: string;
  idDocument: string;
  investmentQuantity: string;
  investmentTime: string;
  goal: string;
};

export type PreRegisterRemote = PreRegisterFormData & {
  id: string;
};
