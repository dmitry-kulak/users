export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export type FormFields = {
  name: string;
  username: string;
  email: string;
  street: string;
  city: string;
  zip: string;
  phone: string;
  website: string;
  comment: string;
};

export type FormFieldsRequest = FormFields & { userId: string };

export type UserFormField = {
  as?: "textarea";
  name: string;
  label: string;
  placeholder: string;
};
