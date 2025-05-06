export type dummyType = {
  id: number;
  name: string;
  lastName: string;
  age: number;
  active: boolean;
};

export const dummyData: dummyType[] = [
  {
    id: 1,
    name: "Mario",
    lastName: "Milosevic",
    age: 28,
    active: true,
  },
  {
    id: 2,
    name: "Toni",
    lastName: "Milosevic",
    age: 30,
    active: false,
  },
  {
    id: 3,
    name: "Dejan",
    lastName: "Silj",
    age: 29,
    active: true,
  },
  {
    id: 4,
    name: "Milica",
    lastName: "Bugarski",
    age: 36,
    active: false,
  },
  {
    id: 5,
    name: "Ninoslav",
    lastName: "Radonjic",
    age: 31,
    active: true,
  },
];
