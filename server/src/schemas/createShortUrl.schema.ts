import { object, string } from "yup";

export default object({
  body: object({
    destination: string()
      .url("Endereço URL deve ser válido.")
      .required("Preencha o campo Destination."),
  }),
});