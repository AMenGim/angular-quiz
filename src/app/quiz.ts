export interface Question {
  id: number;
  text: string;
  selections: Selection[];
  solution: OptionEnum;
}

export interface Selection {
  id: OptionEnum;
  text: string;
}

export enum OptionEnum {
  A,
  B,
  C,
}

export const quiz = [
  {
    id: 1,
    text: 'Phone XL1',
    selections: [
      { id: OptionEnum.A, text: 'Foo A' },
      { id: OptionEnum.B, text: 'Foo B' },
      { id: OptionEnum.C, text: 'Foo C' },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 2,
    text: 'Phone XL2',
    selections: [
      { id: OptionEnum.A, text: 'Foo A' },
      { id: OptionEnum.B, text: 'Foo B' },
      { id: OptionEnum.C, text: 'Foo C' },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 3,
    text: 'Phone XL3',
    selections: [
      { id: OptionEnum.A, text: 'Foo A' },
      { id: OptionEnum.B, text: 'Foo B' },
      { id: OptionEnum.C, text: 'Foo C' },
    ],
    solution: OptionEnum.B,
  },
];
