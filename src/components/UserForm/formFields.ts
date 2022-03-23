import { UserFormField } from "../../types/usersTypes";

export const formFields: UserFormField[] = [
  {
    name: "name",
    label: "Name",
    placeholder: "Иван Иванов",
  },
  {
    name: "username",
    label: "User name",
    placeholder: "Ivan",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "example@mail.com",
  },
  {
    name: "street",
    label: "Street",
    placeholder: "ул. Пример",
  },
  {
    name: "city",
    label: "City",
    placeholder: "Москва",
  },
  {
    name: "zip",
    label: "Zipcode",
    placeholder: "123123",
  },
  {
    name: "phone",
    label: "Phone",
    placeholder: "89991112233",
  },
  {
    name: "website",
    label: "Website",
    placeholder: "www.example.com",
  },
  {
    as: "textarea",
    name: "comment",
    label: "Comment",
    placeholder: "",
  },
];
