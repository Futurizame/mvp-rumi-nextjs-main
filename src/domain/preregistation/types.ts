export type PreRegisterFormData = {
  name: string;
  email: string;
  phone: string;
  idDocument: string;
  investmentQuantity: number;
  investmentTime: number;
  goal: string;
};

export type PreRegisterRemote = PreRegisterFormData & {
  id: string;
};
