type User = {
  name: string;
  age: number;
};

type UserProps = {
  userObj: User;
  clickHandler: () => void;
};
