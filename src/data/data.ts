interface Data {
  id: number;
  desc: string;
  done?: boolean; // теперь done опционально
}

export const data: Data[] = [
  {
    id: 1,
    desc: "This is my first note!",
    done: false,
  },
  {
    id: 2,
    desc: "And this is my second funny note!",
    done: false,
  },
];
