export interface Location {
  id: number;
  name: string;
  robot: {
    id: string;
    is_online: boolean;
  };
}

export const locations: Location[] = [
  {
    id: 0,
    name: "Spicy restaurant",
    robot: {
      id: "abcde123",
      is_online: true,
    },
  },{
    id: 1,
    name: "Salty restaurant",
    robot: {
      id: "fghij456",
      is_online: false,
    },
  },{
    id: 2,
    name: "김천 restaurant",
    robot: {
      id: "fghij456",
      is_online: false,
    },
  },{
    id: 3,
    name: "국밥restaurant",
    robot: {
      id: "",
      is_online: false,
    },
  },{
    id: 4,
    name: "삼계탕 restaurant",
    robot: {
      id: "fghij456",
      is_online: true,
    },
  },
  {
    id: 5,
    name: "육회 restaurant",
    robot: {
      id: "",
      is_online: false,
    },
  },
  {
    id: 6,
    name: "회 restaurant",
    robot: {
      id: "fghij456",
      is_online: false,
    },
  },
  {
    id: 7,
    name: "칼국수 restaurant",
    robot: {
      id: "fghij456",
      is_online: true,
    },
  },
  {
    id: 8,
    name: "케밥 restaurant",
    robot: {
      id: "fghij456",
      is_online: true,
    },
  },
  {
    id: 9,
    name: "비빔밥 restaurant",
    robot: {
      id: "",
      is_online: false,
    },
  },
];
