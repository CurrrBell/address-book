import { PhoneNumber } from './phone-number';

export type Contact = {
  firstName: string,
  lastName: string,
  salutation: string,
  profilePictureSrc: string,
  company: string,
  phoneNumbers: PhoneNumber[];
  active: boolean;
};
