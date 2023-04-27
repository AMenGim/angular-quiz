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
    text: 'Los Cabildos Insulares podrán mancomunarse o federarse para la prestación conjunta de servicios propios o transferidos:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Solo podrán hacerlo con autorización del Parlamento Canarias.',
      },
      {
        id: OptionEnum.B,
        text: 'No podrán hacerlo.',
      },
      {
        id: OptionEnum.C,
        text: 'Solo podrán hacerlo en su condición de órganos de gobierno, administración y representación de cada una de las siete islas.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 2,
    text: 'Los Cabildos Insulares podrán constituir una asociación de ámbito autonómico:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Sí, para prestar conjuntamente servicios.',
      },
      {
        id: OptionEnum.B,
        text: 'Sí, para la protección y promoción de intereses comunes.',
      },
      {
        id: OptionEnum.C,
        text: 'No, solo pueden mancomunarse para prestar conjuntamente servicios.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 3,
    text: 'Los Cabildos Insulares, si decidieran constituir una asociación:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'No podrán crear centrales de contratación.',
      },
      {
        id: OptionEnum.B,
        text: 'Podrá servir para la prestación conjunta de servicios o funciones administrativas.',
      },
      {
        id: OptionEnum.C,
        text: 'Podrá actuar como entidad colaboradora en la gestión de subvenciones.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 4,
    text: 'Los Cabildos, como órganos de gobierno, administración y representación de cada una de las siete islas:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Ejercen las competencias propias que les corresponden a los Cabildos y las que les sean transferidas.',
      },
      {
        id: OptionEnum.B,
        text: 'Ejercen las competencias propias que les corresponden a las islas y las que les sean delegadas.',
      },
      {
        id: OptionEnum.C,
        text: 'Ejercen las competencias propias que les corresponden a las islas y las que les sean transferidas.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 5,
    text: 'A los Cabildos, como instituciones de la Comunidad Autónoma de Canarias, les corresponde:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'La coordinación mediante convenio de la prestación del servicio de mantenimiento y limpieza de los consultorios médicos en los municipios con población inferior a 5.000 habitantes.',
      },
      {
        id: OptionEnum.B,
        text: 'El ejercicio de cualquier competencia autonómica que se les atribuya en las materias que sean competencia de la Comunidad Autónoma.',
      },
      {
        id: OptionEnum.C,
        text: 'El ejercicio de las funciones, competencias y facultades que se determinan en el Estatuto de Autonomía de Canarias, así como las competencias autonómicas que se les transfieran o deleguen.',
      },
    ],
    solution: OptionEnum.A,
  },
];
