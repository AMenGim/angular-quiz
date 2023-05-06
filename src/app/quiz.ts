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
    solution: OptionEnum.B,
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
    solution: OptionEnum.B,
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
    solution: OptionEnum.C,
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
    solution: OptionEnum.B,
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
    solution: OptionEnum.C,
  },
  {
    id: 6,
    text: 'Los Cabildos ejercerán competencias, entre otros, en los ámbitos materiales siguientes:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Aguas, seguridad ciudadana y defensa del consumidor.',
      },
      {
        id: OptionEnum.B,
        text: 'Gestión de puertos de refugio declarados de interés autonómico.',
      },
      {
        id: OptionEnum.C,
        text: 'Pastos y supuestos de fusión de dos o más municipios limítrofes.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 7,
    text: 'Los Cabildos ejercerán competencias, entre otros, en los ámbitos materiales siguientes:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Asistencia social y servicios sociales, ferias y mercados de cualquier ámbito.',
      },
      {
        id: OptionEnum.B,
        text: 'Infraestructura rural y acuicultura.',
      },
      {
        id: OptionEnum.C,
        text: 'Patrimonio histórico artístico insular y campañas de saneamiento sanitario.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 8,
    text: 'Son competencias propias de los Cabildos, entre otras, las siguientes:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'La coordinación de los servicios municipales entre sí para la garantía de la prestación integral y adecuada en la totalidad del territorio insular.',
      },
      {
        id: OptionEnum.B,
        text: 'Transporte por carretera; recogida domiciliaria de residuos en los municipios de la isla.',
      },
      {
        id: OptionEnum.C,
        text: 'Gestión siempre de todos los puertos deportivos existentes en toda la isla.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 9,
    text: 'La atribución de competencias propias a los Cabildos por leyes autonómicas atenderá, entre otros principios, y de conformidad con la Ley de Cabildos Insulares, a los siguientes:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Autonomía insular y jerarquía.',
      },
      {
        id: OptionEnum.B,
        text: 'Estabilidad presupuestaria y eficiencia.',
      },
      {
        id: OptionEnum.C,
        text: 'Jerarquía y desconcentración.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 10,
    text: 'Los Cabildos, como órganos de gobierno, administración y representación de las islas:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Ejercerán competencias delegadas por el Estado, la Comunidad Autónoma y los municipios de la isla de acuerdo con la legislación de régimen local.',
      },
      {
        id: OptionEnum.B,
        text: 'Podrán ejercer las competencias que le asigne la asociación que constituya con otros Cabildos para prestar conjuntamente servicios.',
      },
      {
        id: OptionEnum.C,
        text: 'Las dos respuestas anteriores son incorrectas.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 11,
    text: 'Los Cabildos Insulares, como órganos de gobierno, administración y representación de las islas, en relación con el ejercicio de competencias que sean distintas de las competencias propias y de las delegadas:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Podrán ejercerlas, previa obtención de los informes preceptivos y vinculantes.',
      },
      {
        id: OptionEnum.B,
        text: 'Podrán ejercerlas, previa la solicitud del informe preceptivo y no vinculante.',
      },
      {
        id: OptionEnum.C,
        text: 'Podrán ejercerlas, previa la obtención de los informes no preceptivos y vinculantes.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 12,
    text: 'Son competencias propias de los Cabildos, como órganos de gobierno, administración y representación de las islas, conforme a la Ley de Cabildos Insulares:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Garantizar, en todo caso, la prestación de servicios de secretaría e intervención a un municipio de 5.000 habitantes.',
      },
      {
        id: OptionEnum.B,
        text: 'Asumir, en todo caso, la prestación de los servicios de tratamiento de residuos y extinción de incendios a un municipio de 50.000 habitantes.',
      },
      {
        id: OptionEnum.C,
        text: 'En todo caso, la asistencia en la prestación de servicios de apoyo a la gestión financiera a un municipio de 15.000 habitantes.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 13,
    text: 'El seguimiento por los Cabildos de los costes efectivos de los servicios prestados por los municipios de la isla:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Es una competencia transferida por el Estado.',
      },
      {
        id: OptionEnum.B,
        text: 'Es una competencia propia como órganos de gobierno, administración y representación de las islas.',
      },
      {
        id: OptionEnum.C,
        text: 'Es una competencia atribuida por la Comunidad Autónoma de Canarias.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 14,
    text: 'Los Cabildos prestarán la contratación centralizada a los municipios con población:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'De menos de 5.000 habitantes, exclusivamente.',
      },
      {
        id: OptionEnum.B,
        text: 'De menos de 20.000 habitantes, en todo caso.',
      },
      {
        id: OptionEnum.C,
        text: 'De menos de 5.000 y a los de más de 20.000 habitantes, siempre.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 15,
    text: 'La competencia de asistencia de los Cabildos a los municipios:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'En todo caso será siempre obligatoria, salvo que se establezca como voluntaria.',
      },
      {
        id: OptionEnum.B,
        text: 'Será siempre y en todo caso voluntaria.',
      },
      {
        id: OptionEnum.C,
        text: 'Será voluntaria como regla general, salvo en los supuestos en que se establezca obligatoria.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 16,
    text: 'La competencia de los Cabildos Insulares de asistencia material en la prestación de los servicios municipales:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Especialmente alcanzará a los servicios mínimos obligatorios de éstos.',
      },
      {
        id: OptionEnum.B,
        text: 'La ejercen como instituciones delegadas de la Comunidad Autónoma.',
      },
      {
        id: OptionEnum.C,
        text: 'Puede dejarse sin efecto mediante Decreto del Gobierno de Canarias.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 17,
    text: 'En relación con la iniciativa legislativa de los Cabildos Insulares:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Puede ejercerse en materia presupuestaria siempre.',
      },
      {
        id: OptionEnum.B,
        text: 'A través del Parlamento de Canarias pueden remitir a las Cortes Generales proposiciones de ley.',
      },
      {
        id: OptionEnum.C,
        text: 'La misma se ejercerá únicamente ante el Parlamento de Canarias y no ante las Cortes Generales.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 18,
    text: 'La atribución de competencias autonómicas a los Cabildos Insulares mediante cualquier modo previsto en la Ley de Cabildos Insulares:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Supondrá la conservación por la Comunidad Autónoma de la titularidad de las competencias.',
      },
      {
        id: OptionEnum.B,
        text: 'Requiere aceptación expresa solo en el caso de delegación de competencias.',
      },
      {
        id: OptionEnum.C,
        text: 'Implicará que el personal, cualquiera que fuera el título de atribución de la competencia, se integre plenamente en la organización de los Cabildos.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 19,
    text: 'En cuanto a los Decretos de traspaso de competencias de la Comunidad Autónoma a los Cabildos Insulares:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'De inmediato, tras su publicación en el Boletín Oficial de Canarias, cada Cabildo ejercerá efectivamente la competencia.',
      },
      {
        id: OptionEnum.B,
        text: 'En el plazo de dos meses desde su publicación en el Boletín Oficial de Canarias, se constituirán comisiones mixtas.',
      },
      {
        id: OptionEnum.C,
        text: 'En todo caso, contendrá entre sus determinaciones la relación de bienes muebles.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 20,
    text: 'En las competencias transferidas por la Comunidad Autónoma a los Cabildos Insulares:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'El personal transferido no tiene ya derecho a presentarse a los procedimientos de provisión de puestos de trabajo de la Comunidad Autónoma.',
      },
      {
        id: OptionEnum.B,
        text: 'La Comunidad Autónoma podrá instar la revisión de oficio de los actos y acuerdos de los Cabildos Insulares.',
      },
      {
        id: OptionEnum.C,
        text: 'Los Cabildos en determinados supuestos no están obligados a mantener el nivel de eficacia que tenían antes de la transferencia.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 21,
    text: 'Las competencias transferidas y las delegadas a los Cabildos por la Comunidad Autónoma de Canarias podrán ejercerse desde que:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Se publique el correspondiente Decreto de traspaso en el Boletín Oficial de Canarias.',
      },
      {
        id: OptionEnum.B,
        text: 'Se suscriba la correspondiente Acta de recepción y entrega.',
      },
      {
        id: OptionEnum.C,
        text: 'Se publique el correspondiente Acuerdo por el Gobierno de Canarias en el Boletín Oficial de Canarias.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 22,
    text: 'En relación con los modos de atribución de competencias por la Comunidad Autónoma de Canarias previstos en la Ley de Cabildos Insulares, ¿cuál de las siguientes afirmaciones es correcta?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'El control de la gestión económico-financiera en el ejercicio de las competencias transferidas y delegadas se ejercerá por la intervención propia de los Cabildos con sujeción a las instrucciones establecidas por el Pleno de la Corporación.',
      },
      {
        id: OptionEnum.B,
        text: 'Los Cabildos, antes del día 31 de diciembre de cada año, deberán remitir al Parlamento y al Gobierno de Canarias una memoria justificativa y la liquidación de sus presupuestos.',
      },
      {
        id: OptionEnum.C,
        text: 'Los Cabildos podrán renunciar a las delegaciones afectadas por incumplimiento de la Comunidad Autónoma.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 23,
    text: 'En relación con las competencias transferidas y delegadas:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'La aprobación de la metodología para llevar a cabo los traspasos de servicios, medios y recursos solo es exigible en las delegaciones.',
      },
      {
        id: OptionEnum.B,
        text: 'En las delegaciones siempre la aprobación de la metodología se determina por Decreto.',
      },
      {
        id: OptionEnum.C,
        text: 'La aprobación del método para el cálculo y determinación de los servicios, medios y recursos a traspasar es un trámite que siempre deberá realizarse.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 24,
    text: 'De conformidad con lo dispuesto en el Reglamento Orgánico del Cabildo Insular de Tenerife (ROCIT), el asesoramiento legal al Pleno será preceptivo:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Cuando lo solicite un Grupo Político durante la celebración de la sesión en que el asunto hubiere de tratarse.',
      },
      {
        id: OptionEnum.B,
        text: 'Siempre que se trate de asuntos sobre materias para las que se exija una mayoría especial.',
      },
      {
        id: OptionEnum.C,
        text: 'Cuando, en el ejercicio de la función de control y fiscalización de los órganos de gobierno, lo solicite el Presidente o un tercio, al menos, de los Consejeros.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 25,
    text: 'Corresponderá al Secretario General del Pleno, según lo establecido en el ROCIT:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Las funciones de fe pública de los actos de los órganos unipersonales.',
      },
      {
        id: OptionEnum.B,
        text: 'El desempeño de las funciones de Secretaría de los Organismos Autónomos.',
      },
      {
        id: OptionEnum.C,
        text: 'Las funciones de formalización de los contratos en documento administrativo.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 26,
    text: 'Respecto de la emisión de informe preceptivo por la Secretaría General del Pleno, ¿cuál de las siguientes afirmaciones es correcta?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Una vez emitido informe preceptivo por la Secretaría General del Pleno, podrá recaer sobre el mismo asunto informe de legalidad de otro órgano de la Corporación.',
      },
      {
        id: OptionEnum.B,
        text: 'Siempre que se trate de asuntos sobre materias para las que se exija una mayoría especial, la entrada del asunto en el Registro del Pleno desencadenará la obligación de emitir informe, sin necesidad de solicitud.',
      },
      {
        id: OptionEnum.C,
        text: 'En todo caso se requerirá de la previa presentación de solicitud de informe preceptivo en el Registro del Pleno.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 27,
    text: 'Según determina el ROCIT, efectuada la desconcentración de competencias, ¿a qué órgano compete la formación del Presupuesto General de la Corporación?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Al Consejo de Gobierno Insular.',
      },
      {
        id: OptionEnum.B,
        text: 'Al Consejero Insular, Viceconsejero Insular o Director Insular competente en materia de Hacienda.',
      },
      {
        id: OptionEnum.C,
        text: 'Al Presidente de la Administración Insular.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 28,
    text: 'La competencia para resolver las solicitudes de acceso a la información pública en los expedientes de su competencia, de conformidad con lo señalado en el ROCIT, se atribuye a:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Los Coordinadores Técnicos, coordinadamente con el Consejero Insular titular del Área o del Presidente, si éste ostentara dicha titularidad.',
      },
      {
        id: OptionEnum.B,
        text: 'Los Directores Insulares, coordinadamente con el Consejero Insular del Área en la que desempeñen sus funciones, o con el Presidente, si éste ostentara la titularidad de la misma.',
      },
      {
        id: OptionEnum.C,
        text: 'Ambas opciones son incorrectas.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 29,
    text: 'Las sesiones extraordinarias del Consejo de Gobierno Insular, sin convocatoria previa, quedarán válidamente constituidas:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Cuando así lo decida el Presidente y estén presentes la mitad, al menos, de sus miembros, debiendo ser declarada la urgencia.',
      },
      {
        id: OptionEnum.B,
        text: 'Cuando así lo decida el Presidente y estén presentes todos los miembros, debiendo ser declarada la urgencia por acuerdo favorable de la mayoría de los miembros.',
      },
      {
        id: OptionEnum.C,
        text: 'Se requiere en todo caso la previa convocatoria de la sesión extraordinaria con una antelación mínima de veinticuatro horas.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 30,
    text: 'La certificación de los acuerdos adoptados por el Consejo de Gobierno corresponderá, de conformidad con lo dispuesto en el ROCIT, al:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Consejero Insular del Área, según corresponda por la materia.',
      },
      {
        id: OptionEnum.B,
        text: 'Consejero que ostente la condición de Secretario.',
      },
      {
        id: OptionEnum.C,
        text: 'Secretario General del Pleno.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 31,
    text: 'Según lo señalado en el ROCIT, la asistencia jurídica a los/las Directores/as Insulares de la Corporación es competencia del:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Secretaría General del Pleno.',
      },
      {
        id: OptionEnum.B,
        text: 'Dirección de la Asesoría Jurídica.',
      },
      {
        id: OptionEnum.C,
        text: 'Vicesecretaría General.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 32,
    text: 'A efectos de celebración de las sesiones, para la válida constitución del Consejo de Gobierno Insular, se requerirá la presencia:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Del Presidente y la mitad, al menos, de sus miembros, entre los que deberá encontrarse el Consejero-Secretario, en primera convocatoria.',
      },
      {
        id: OptionEnum.B,
        text: 'Del Vicesecretario General, el Director de la Asesoría Jurídica y el Interventor General, además de los señalados anteriormente.',
      },
      {
        id: OptionEnum.C,
        text: 'Del Presidente y de un tercio de sus miembros, entre los que deberá encontrarse el Consejero-Secretario, en segunda convocatoria.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 33,
    text: 'De conformidad con lo señalado en el ROCIT, cada Grupo Político podrá, previamente a la celebración de cada Comisión Plenaria presentar a través del Registro del Pleno:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Una moción, con una antelación de cinco días hábiles antes de la celebración de la misma, computando los sábados en dicho plazo.',
      },
      {
        id: OptionEnum.B,
        text: 'Dos preguntas y/o ruegos, en cómputo total, con una antelación de cinco días hábiles antes de la celebración de la misma, sin que computen los sábados en dicho plazo.',
      },
      {
        id: OptionEnum.C,
        text: 'Ambas respuestas son incorrectas.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 34,
    text: 'Respecto de los dictámenes de las Comisiones Plenarias, de conformidad con lo señalado en el ROCIT, cuál de las siguientes afirmaciones es correcta:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Tienen carácter preceptivo y vinculante.',
      },
      {
        id: OptionEnum.B,
        text: 'Todas las decisiones que se aprueben por la Comisión tendrán el carácter de dictamen.',
      },
      {
        id: OptionEnum.C,
        text: 'Los dictámenes de las Comisiones tienen carácter preceptivo y no vinculante.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 35,
    text: 'Las Comisiones del Pleno de carácter permanente, de conformidad con lo señalado en el ROCIT, son aquéllas:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Que el Pleno acuerda constituir para un asunto concreto.',
      },
      {
        id: OptionEnum.B,
        text: 'Se extinguen una vez hayan dictaminado o resuelto el asunto que constituye su objeto.',
      },
      {
        id: OptionEnum.C,
        text: 'Celebrarán, con carácter ordinario, una sesión mensual cuando existan propuestas que deban ser dictaminadas por la misma con carácter previo a su aprobación por el Pleno.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 36,
    text: 'Podrán celebrarse sesiones extraordinarias del Pleno:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Solo podrán celebrarse sesiones extraordinarias del Pleno a petición del Consejo de Gobierno Insular o de la mayoría absoluta de los miembros de la Corporación.',
      },
      {
        id: OptionEnum.B,
        text: 'Cuando lo decida el Presidente o lo solicite la cuarta parte, al menos, del número legal de miembros de la Corporación.',
      },
      {
        id: OptionEnum.C,
        text: 'Con la duración que resulte necesaria para resolver los asuntos que se sometan a debate pudiendo ser superior a ocho horas.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 37,
    text: 'De conformidad con lo señalado en el ROCIT, se entiende por “Moción”:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'La propuesta sometida al Pleno tras el estudio del expediente por la Comisión del Pleno.',
      },
      {
        id: OptionEnum.B,
        text: 'La propuesta de acuerdo que se somete por escrito a conocimiento del Pleno o de las Comisiones Plenarias permanentes.',
      },
      {
        id: OptionEnum.C,
        text: 'La propuesta de modificación de un dictamen formulada por un miembro que forma parte de la Comisión del Pleno correspondiente.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 38,
    text: 'De conformidad con lo dispuesto en el ROCIT, el nombramiento de los Consejeros Insulares de Área surtirá efectos desde:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Su aprobación por el Pleno de la Corporación.',
      },
      {
        id: OptionEnum.B,
        text: 'El día siguiente al de la fecha de su nombramiento por Decreto del Presidente, salvo que en él se disponga otra cosa.',
      },
      {
        id: OptionEnum.C,
        text: 'La publicación de su nombramiento en el Boletín Oficial de la Provincia.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 39,
    text: 'Respecto de los/as Viceconsejeros/as Insulares, ¿cuál de las siguientes afirmaciones es correcta?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Serán designados y cesados libremente por el Presidente de la Administración Insular.',
      },
      {
        id: OptionEnum.B,
        text: 'Será preceptivo que sus titulares ostenten la condición de funcionarios.',
      },
      {
        id: OptionEnum.C,
        text: 'Son Órganos Superiores de la Administración Insular.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 40,
    text: '¿Qué respuesta es correcta en relación con el derecho y obligación de los particulares de relacionarse electrónicamente con las Administraciones Públicas, conforme a la Ley de Procedimiento Administrativo Común?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Se trata de un medio voluntario que puede ser modificado por la persona física o jurídica interesada en cualquier momento durante la tramitación del procedimiento administrativo correspondiente.',
      },
      {
        id: OptionEnum.B,
        text: 'La ley prevé los sujetos que están obligados a relacionase con la Administración a través de medios electrónicos para la realización de cualquier trámite de un procedimiento administrativo.',
      },
      {
        id: OptionEnum.C,
        text: 'Están obligados con carácter general a relacionarse electrónicamente con las Administraciones Públicas las personas físicas, salvo que actúen a través de representación.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 41,
    text: '¿Qué respuesta es correcta en relación con la presentación de un escrito a través de un registro electrónico?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'La presentación en un día inhábil se entenderá realizada en la primera hora del primer día hábil siguiente, salvo que una norma permita expresamente la recepción en día inhábil.',
      },
      {
        id: OptionEnum.B,
        text: 'La presentación de documentos se ha de realizar únicamente en los días hábiles, durante las veinticuatro horas.',
      },
      {
        id: OptionEnum.C,
        text: 'La presentación de documentos en un día inhábil es válida si a posteriori se ratifica personalmente ante la sede del órgano al que va dirigida, ya sea de forma presencial o telemática.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 42,
    text: '¿Qué respuesta es correcta en relación con el cómputo de plazos en los registros electrónicos?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Los registros electrónicos permitirán la presentación de documentos solo los días hábiles del año durante las veinticuatro horas.',
      },
      {
        id: OptionEnum.B,
        text: 'Los registros electrónicos permitirán la presentación de escritos tantos los días hábiles como inhábiles, pero los presentados en días inhábiles se reputarán posteriores a los presentados en el primer día hábil posterior.',
      },
      {
        id: OptionEnum.C,
        text: 'La fecha y hora efectiva de inicio del cómputo de plazos deberá ser comunicada a quien presentó el documento.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 43,
    text: '¿Puede la Administración abstenerse de resolver un procedimiento por insuficiencia de los preceptos legales aplicables al caso?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'La Administración puede abstenerse de resolver un procedimiento si ha transcurrido el plazo legalmente establecido y se ha producido el silencio administrativo negativo.',
      },
      {
        id: OptionEnum.B,
        text: 'La Administración puede abstenerse de resolver cuando se ha interpuesto un recurso administrativo o contencioso-administrativo.',
      },
      {
        id: OptionEnum.C,
        text: 'La Administración no puede abstenerse de resolver, pero sí acordar la inadmisión de las solicitudes en determinados supuestos, como por ejemplo solicitudes manifiestamente carentes de fundamento.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 44,
    text: '¿La Administración Pública está obligada a resolver y notificar siempre todos los procedimientos administrativos?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'La Administración no está obligada a resolver y notificar siempre todos los procedimientos, puesto que existen supuestos en que no debe hacerlo, como por ejemplo cuando el interesado interpone recurso contencioso-administrativo contra la desestimación presunta de la solicitud formulada.',
      },
      {
        id: OptionEnum.B,
        text: 'Si bien existe una obligación general de la Administración de resolver todos los procedimientos administrativos, la ley prevé algunas excepciones a esta obligación, como la relativa a los supuestos de terminación del procedimiento por pacto o convenio.',
      },
      {
        id: OptionEnum.C,
        text: 'No existe una obligación general de resolver de forma expresa en todos los procedimientos administrativos, sino de comunicar a los interesados el plazo para resolver los procedimientos y los efectos del silencio cuando sean positivos.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 45,
    text: '¿Tiene la Administración obligación de informar a los interesados del plazo establecido para la resolución y notificación de los procedimientos y del sentido del silencio administrativo?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Si, tanto en los procedimientos iniciados de oficio como a instancia de parte.',
      },
      {
        id: OptionEnum.B,
        text: 'Solo cuando el número de solicitudes formuladas o las personas afectadas lo requieran, pudiéndose habilitar los medios personales y materiales para cumplir el citado plazo.',
      },
      {
        id: OptionEnum.C,
        text: 'No, por cuanto una vez concluido el plazo, opera el silencio administrativo, positivo o negativo, según los casos previstos en la ley aplicable en cada caso.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 46,
    text: '¿En qué supuesto se puede suspender el plazo máximo para resolver y notificar un procedimiento administrativo?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Si el órgano instructor solicita un informe facultativo a otro órgano de la misma Administración.',
      },
      {
        id: OptionEnum.B,
        text: 'Cuando los interesados presenten escrito de recusación del órgano instructor, durante el tiempo comprendido entre la solicitud y su resolución.',
      },
      {
        id: OptionEnum.C,
        text: 'Solo se puede suspender cuando exista un procedimiento no finalizado en el ámbito de la Unión Europea que condicione directamente el contenido de la resolución de que trate.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 47,
    text: '¿La Administración puede ampliar el plazo establecido legalmente para resolver un procedimiento administrativo?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Nunca.',
      },
      {
        id: OptionEnum.B,
        text: 'Sí, siempre que la ampliación no exceda de la mitad del plazo establecido.',
      },
      {
        id: OptionEnum.C,
        text: 'Excepcionalmente, con la limitación relativa a que la ampliación no puede ser superior al plazo establecido para la tramitación del procedimiento.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 48,
    text: 'El Cabildo Insular de Tenerife tramita un procedimiento de oficio y no lo resuelve y notifica en el plazo legalmente establecido. ¿qué consecuencias tiene esta falta de resolución y notificación en plazo?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Los interesados en el procedimiento podrán entender estimadas sus pretensiones por silencio administrativo si se deriva del mismo el reconocimiento, la constitución de derechos u otras situaciones jurídicas favorables.',
      },
      {
        id: OptionEnum.B,
        text: 'Si se trata de un procedimiento sancionador se produce la caducidad del mismo, y la caducidad no producirá por sí sola la prescripción de las acciones del particular o de la Administración.',
      },
      {
        id: OptionEnum.C,
        text: 'La Administración está obligada a declarar siempre la caducidad del procedimiento, transcurridos tres meses desde su iniciación, y previa advertencia al respecto a los interesados en el mismo.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 49,
    text: '¿Qué respuesta es correcta en relación a la iniciación del procedimiento administrativo por denuncia?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Se trata de una iniciación del procedimiento a instancia de parte, y si no reúne los requisitos legales, se requerirá al denunciante para que, en un plazo de 10 días, subsane la falta o acompañe los documentos preceptivos, con indicación de que, si así no lo hiciera, se le tendrá por desistido de la misma.',
      },
      {
        id: OptionEnum.B,
        text: 'Se eximirá al denunciante que hubiera participado en la comisión de la infracción del pago de la correspondiente multa, cuando concurran los presupuestos legalmente establecidos al efecto.',
      },
      {
        id: OptionEnum.C,
        text: 'La presentación de la denuncia confiere siempre la condición de interesado en el procedimiento al denunciante, y al mismo se le han de notificar todos los actos del citado procedimiento.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 50,
    text: 'Si la Administración requiere a un interesado para que subsane su solicitud inicial de autorización administrativa para realizar la actividad de transporte mediante la aportación de la documentación exigida legalmente y éste no lo hace en el plazo otorgado al efecto, ¿qué debe hacer la citada Administración?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Debe declarar el desistimiento de la solicitud mediante una resolución administrativa.',
      },
      {
        id: OptionEnum.B,
        text: 'Debe declarar el archivo del procedimiento, sin más trámite.',
      },
      {
        id: OptionEnum.C,
        text: 'Debe declarar al interesado decaído en su derecho al trámite correspondiente mediante una resolución administrativa.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 51,
    text: '¿Qué respuesta es correcta en relación al trámite de audiencia en un procedimiento administrativo?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Los interesados podrán, en cualquier momento del procedimiento, formular alegaciones y aportar documentos u otros elementos de juicio, hasta el momento en que se dicte la resolución finalizadora del procedimiento.',
      },
      {
        id: OptionEnum.B,
        text: 'Se puede prescindir de este trámite cuando no figuren en el procedimiento otros hechos ni otras alegaciones y pruebas que las aducidas por el interesado.',
      },
      {
        id: OptionEnum.C,
        text: 'Se publicará un anuncio en el diario oficial correspondiente a fin de que cualquier persona física o jurídica pueda examinar el expediente o la parte del mismo que se acuerde.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 52,
    text: 'La Administración requiere a un particular el cumplimiento de un trámite en la ordenación de un procedimiento, y el citado trámite no es realizado por el mismo ¿qué puede hacer la Administración?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Puede declarar al particular decaído en el derecho al trámite correspondiente.',
      },
      {
        id: OptionEnum.B,
        text: 'Ha de conceder al particular un plazo de 5 días adicional para que cumplimente el trámite correspondiente, con advertencia de archivo sin más trámite si no se cumplimenta el mismo.',
      },
      {
        id: OptionEnum.C,
        text: 'Ha de resolver la terminación del procedimiento, por desistimiento del particular en todo caso.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 53,
    text: '¿Qué respuesta es correcta en relación a las medidas provisionales que se pueden adoptar por el órgano competente para asegurar la eficacia de la resolución que se dicte en un procedimiento administrativo?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Las medidas provisionales proceden únicamente antes de la iniciación del procedimiento, en casos de urgencia inaplazable y para la protección provisional de los intereses implicados.',
      },
      {
        id: OptionEnum.B,
        text: 'Las medidas provisionales pueden ser alzadas o modificadas durante la tramitación del procedimiento, en virtud de circunstancias sobrevenidas o que no pudieron ser tenidas en cuenta en el momento de su adopción.',
      },
      {
        id: OptionEnum.C,
        text: 'Las medidas provisionales proceden exclusivamente si son confirmadas por acuerdo del órgano competente de la iniciación del procedimiento, en el plazo de 3 meses desde su incoación.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 54,
    text: '¿Existe alguna limitación para adoptar medidas provisionales en un procedimiento administrativo?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'No, siempre que se motive por el órgano competente para resolver.',
      },
      {
        id: OptionEnum.B,
        text: 'Si, cuando puedan causar perjuicios de difícil o imposible reparación a los interesados.',
      },
      {
        id: OptionEnum.C,
        text: 'No, pero ha de solicitarse con carácter previo a su adopción informe al Consejo de Estado u órgano consultivo equivalente de la comunidad autónoma.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 55,
    text: 'Los defectos en la tramitación de un procedimiento, ¿cuándo se pueden alegar por los interesados?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'En todo momento durante la tramitación del procedimiento.',
      },
      {
        id: OptionEnum.B,
        text: 'En el periodo de prueba del procedimiento, cuyo plazo no puede ser superior a 30 días ni inferior a 10 días.',
      },
      {
        id: OptionEnum.C,
        text: 'En el trámite de audiencia no inferior a 10 días ni superior a 15 días, que ha de otorgar la administración a los interesados.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 56,
    text: '¿Qué puede hacer la Administración con una solicitud de un particular manifiestamente carente de fundamento o de reconocimiento de derechos no previstos en el ordenamiento jurídico?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Acordar la inadmisión de la solicitud, sin entrar a analizar el fondo de la misma.',
      },
      {
        id: OptionEnum.B,
        text: 'Tramitar la solicitud y requerir dictamen favorable del Consejo de Estado u órgano consultivo equivalente de la Comunidad Autónoma, si lo hubiera.',
      },
      {
        id: OptionEnum.C,
        text: 'Archivar la solicitud sin más trámite, y sin obligación alguna de notificarlo al interesado.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 57,
    text: 'Un interesado en un procedimiento ha solicitado al órgano instructor la ampliación de un trámite de audiencia, inicialmente fijado en 15 días hábiles, en 10 días más ¿es posible la ampliación del plazo?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'No es posible, porque el plazo de ampliación no puede exceder de la mitad del plazo establecido.',
      },
      {
        id: OptionEnum.B,
        text: 'Sí es posible, puesto que la ampliación no es superior al plazo inicialmente establecido.',
      },
      {
        id: OptionEnum.C,
        text: 'Sí, sin limitación, siempre que así lo decida el órgano instructor del procedimiento de que se trate.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 58,
    text: '¿Se exige que se dicte resolución en los casos en que el procedimiento administrativo haya terminado por prescripción?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Sí, al igual que en el caso de terminación por caducidad y desistimiento.',
      },
      {
        id: OptionEnum.B,
        text: 'No, ya que la misma solo procede cuando se analizan las alegaciones de fondo realizadas por el interesado.',
      },
      {
        id: OptionEnum.C,
        text: 'No, porque únicamente se termina el procedimiento por resolución en caso de finalización por desaparición sobrevenida del objeto o por desistimiento.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 59,
    text: 'Con respecto a la terminación convencional de un procedimiento administrativo, indique cuál de las siguientes afirmaciones es correcta:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'No está prevista como forma de finalización de un procedimiento administrativo en la ley de procedimiento, porque se trata de un acuerdo, pacto, convenio o contrato entre las partes.',
      },
      {
        id: OptionEnum.B,
        text: 'En todo caso, los acuerdos, pactos, convenios o contratos deben tener un contenido mínimo y publicarse en todo caso en el boletín oficial correspondiente, por si hubiera terceros interesados afectados por el contenido de los citados acuerdos.',
      },
      {
        id: OptionEnum.C,
        text: 'Los acuerdos, pactos, convenios o contratos pueden tener la consideración de actos finalizadores del procedimiento o insertarse en los mismos con carácter previo, vinculante o no, a la resolución que les ponga fin.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 60,
    text: '¿Qué efectos tiene la desestimación por silencio administrativo de una solicitud instada por un particular?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Permitir al interesado la interposición del recurso administrativo o recurso contencioso-administrativo que resulte procedente.',
      },
      {
        id: OptionEnum.B,
        text: 'Poder exigir responsabilidad disciplinaria al órgano instructor por haber incumplido el plazo para resolver y notificar.',
      },
      {
        id: OptionEnum.C,
        text: 'Poder demandar a la Administración por inactividad administrativa, de conformidad con lo establecido en la ley de la jurisdicción contencioso-administrativa.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 61,
    text: 'Si una vez instruido un procedimiento y antes de dictarse la correspondiente resolución, el órgano competente para resolver estima necesaria realizar alguna actuación complementaria, ¿lo puede hacer?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'No, la instrucción del procedimiento termina con la propuesta de resolución correspondiente.',
      },
      {
        id: OptionEnum.B,
        text: 'Sí, en el caso de que sean indispensables para resolver, mediante acuerdo motivado del órgano competente.',
      },
      {
        id: OptionEnum.C,
        text: 'Sí, en los procedimientos sancionadores y siempre que no haya transcurrido el plazo legalmente establecido para resolver.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 62,
    text: 'Indique cual es la respuesta correcta respecto de la caducidad de un procedimiento administrativo:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'La caducidad interrumpe el plazo de prescripción y podrá iniciarse un nuevo procedimiento con el mismo objeto, pudiéndose conservar los actos y trámites del procedimiento anterior.',
      },
      {
        id: OptionEnum.B,
        text: 'La caducidad implica la prescripción de la acción de la Administración y la misma ha de acordar el archivo de las actuaciones, notificándoselo al interesado.',
      },
      {
        id: OptionEnum.C,
        text: 'La Administración puede iniciar un nuevo procedimiento con el mismo objeto, debiendo cumplimentarse los trámites de alegaciones, proposición de prueba y audiencia al interesado.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 63,
    text: '¿Qué respuesta es correcta en relación con la tramitación de urgencia del procedimiento?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'La Administración puede realizar la tramitación de urgencia, reduciendo todos los plazos del procedimiento y los recursos a la mitad, previa propuesta del órgano instructor.',
      },
      {
        id: OptionEnum.B,
        text: 'La Administración puede tramitar con urgencia un procedimiento cuando existan razones de interés público que lo aconsejen.',
      },
      {
        id: OptionEnum.C,
        text: 'La Administración solo pude utilizar la tramitación de urgencia si está prevista de forma expresa por la norma reguladora del procedimiento en cuestión, como por ejemplo en materia de contratos administrativos.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 64,
    text: '¿Cuál es el plazo para resolver un procedimiento administrativo tramitado de forma simplificada?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'El plazo para resolver un procedimiento tramitado de forma simplificada es de tres meses, contados desde el acto de iniciación del procedimiento correspondiente.',
      },
      {
        id: OptionEnum.B,
        text: 'El plazo para resolver un procedimiento tramitado de forma simplificada es de 30 días, contados desde el día siguiente al que se notifique al interesado el acuerdo de tramitación simplificada con carácter general.',
      },
      {
        id: OptionEnum.C,
        text: 'El plazo para resolver un procedimiento tramitado de forma simplificada es siempre la mitad del plazo legalmente establecido para la tramitación ordinaria.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 65,
    text: 'El coste de las medidas relativas a la seguridad y salud en el trabajo recaerá sobre los trabajadores:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Nunca.',
      },
      {
        id: OptionEnum.B,
        text: 'Siempre.',
      },
      {
        id: OptionEnum.C,
        text: 'En ocasiones.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 66,
    text: 'La evaluación inicial de los riesgos para la seguridad y salud de los trabajadores:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Alcanzará en todo caso, a la elección de los equipos de trabajo, sustancias o preparados químicos y al acondicionamiento de los lugares de trabajo.',
      },
      {
        id: OptionEnum.B,
        text: 'Se actualizará siempre cada tres meses.',
      },
      {
        id: OptionEnum.C,
        text: 'Determinará solo las responsabilidades, funciones, prácticas y procedimientos para realizar la acción de prevención de riesgos en la empresa.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 67,
    text: 'Los equipos de protección individual ¿cuándo deben usarse?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Siempre y ante cualquier circunstancia.',
      },
      {
        id: OptionEnum.B,
        text: 'Solo cuando lo determine expresamente el plan de prevención de riesgos',
      },
      {
        id: OptionEnum.C,
        text: 'Cuando los riesgos no puedan evitarse o no puedan limitarse suficientemente por otros medios.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 68,
    text: 'La formación de los trabajadores en materia de prevención de riesgos laborales deberá impartirse dentro de la jornada de trabajo:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Siempre que ello sea posible o, en su caso, con las compensaciones correspondientes.',
      },
      {
        id: OptionEnum.B,
        text: 'Nunca.',
      },
      {
        id: OptionEnum.C,
        text: 'Siempre y en todo caso.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 69,
    text: 'De conformidad con las previsiones contenidas en la Ley de Prevención de Riesgos Laborales, antes de la incorporación al trabajo de menores de 18 años:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'No es necesario realizar una evaluación de los puestos de trabajo a desempeñar por los menores.',
      },
      {
        id: OptionEnum.B,
        text: 'Se informará a los jóvenes y a sus padres/tutores de los posibles riesgos y medidas adoptadas.',
      },
      {
        id: OptionEnum.C,
        text: 'El Consejo de Gobierno establecerá los riesgos de los puestos a desempeñar.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 70,
    text: 'Entre las obligaciones de los trabajadores en materia de prevención de riesgos laborales se encuentra:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Actualizar la evaluación inicial de los riesgos laborales.',
      },
      {
        id: OptionEnum.B,
        text: 'Usar adecuadamente las máquinas y sustancias peligrosas con las que realice su actividad.',
      },
      {
        id: OptionEnum.C,
        text: 'Poner fuera de funcionamiento los dispositivos de seguridad existentes en su actividad.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 71,
    text: 'En las relaciones de trabajo a través de empresas de trabajo temporal, el responsable de las condiciones de ejecución del trabajo en materia de protección de la seguridad y salud es:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Siempre la empresa de trabajo temporal y la empresa usuaria.',
      },
      {
        id: OptionEnum.B,
        text: 'La empresa de trabajo temporal.',
      },
      {
        id: OptionEnum.C,
        text: 'La empresa usuaria.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 72,
    text: 'Conforme a la ley de prevención de riesgos laborales, en las relaciones de trabajo a través de empresas de trabajo temporal, las mismas serán responsables del cumplimiento de las obligaciones de:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Solo información.',
      },
      {
        id: OptionEnum.B,
        text: 'En todo caso formación y vigilancia de la salud.',
      },
      {
        id: OptionEnum.C,
        text: 'Solo formación.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 73,
    text: 'De conformidad con las previsiones contenidas en la Ley de Prevención de Riesgos Laborales, los instrumentos esenciales para la gestión y aplicación del plan de prevención de riesgos laborales son:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'La evaluación de riesgos laborales y la planificación de la actividad preventiva.',
      },
      {
        id: OptionEnum.B,
        text: 'Los reconocimientos de vigilancia de la salud y el plan de formación.',
      },
      {
        id: OptionEnum.C,
        text: 'La planificación de la actividad preventiva y los reconocimientos médicos.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 74,
    text: 'Entre los principios generales de la acción preventiva previstos en la Ley de Prevención de Riesgos Laborales, se encuentra el siguiente:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Evaluar los riesgos que se pueden evitar.',
      },
      {
        id: OptionEnum.B,
        text: 'Tener en cuenta la evolución de la técnica.',
      },
      {
        id: OptionEnum.C,
        text: 'Adoptar medidas que antepongan la protección individual a la colectiva.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 75,
    text: 'En relación con la acción preventiva en materia de prevención de riesgos laborales y respecto de la concertación de operaciones de seguro para garantizar la previsión de riesgos derivados del trabajo:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'El empresario está obligado siempre a concertarlas respecto de sus trabajadores.',
      },
      {
        id: OptionEnum.B,
        text: 'Los trabajadores autónomos podrán concertarlas respecto a ellos mismos.',
      },
      {
        id: OptionEnum.C,
        text: 'Las sociedades cooperativas nunca podrán concertarlas.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 76,
    text: 'Los trabajadores tienen derecho a una protección eficaz en materia de seguridad y salud en el trabajo:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Dependiendo de las circunstancias.',
      },
      {
        id: OptionEnum.B,
        text: 'Siempre.',
      },
      {
        id: OptionEnum.C,
        text: 'Cuando así lo soliciten.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 77,
    text: 'En materia de prevención de riesgos laborales, los exámenes de vigilancia de la salud se llevarán a cabo:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Solo cuando el trabajador preste su consentimiento.',
      },
      {
        id: OptionEnum.B,
        text: 'Con carácter general, cuando el trabajador preste su consentimiento, salvo en determinados supuestos en que sea obligatorio.',
      },
      {
        id: OptionEnum.C,
        text: 'Siempre, ya que son obligatorios.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 78,
    text: 'Las Entidades Locales rendirán la cuenta general ante el Tribunal de Cuentas:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Antes del día 15 de octubre de cada año, refiriéndose dicha cuenta al ejercicio económico anterior.',
      },
      {
        id: OptionEnum.B,
        text: 'Antes del día 15 de octubre de cada año, refiriéndose dicha cuenta al ejercicio económico en curso',
      },
      {
        id: OptionEnum.C,
        text: 'Antes del día 15 de septiembre de cada año, refiriéndose dicha cuenta al ejercicio económico anterior.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 79,
    text: 'Las Entidades Locales podrán clasificar los gastos e ingresos atendiendo:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Obligatoriamente a la estructura que con carácter general establezca el Ministerio de Hacienda teniendo en cuenta la naturaleza de los ingresos y de los gastos.',
      },
      {
        id: OptionEnum.B,
        text: 'A su propia estructura, de acuerdo con sus reglamentos y decretos de organización.',
      },
      {
        id: OptionEnum.C,
        text: 'Obligatoriamente a la estructura que con carácter general establezca el Ministerio de Hacienda, teniendo en cuenta la naturaleza de exclusivamente de los gastos.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 80,
    text: 'Los recursos de la Entidad local y de cada uno de sus organismos autónomos y sociedades mercantiles se destinarán a satisfacer:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'El conjunto de sus respectivas obligaciones, en todo caso.',
      },
      {
        id: OptionEnum.B,
        text: 'El conjunto de sus respectivas obligaciones, salvo en el caso de ingresos específicos estén o no afectados a fines determinados.',
      },
      {
        id: OptionEnum.C,
        text: 'El conjunto de sus respectivas obligaciones, salvo en el caso de ingresos específicos afectados a fines determinados.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 81,
    text: 'El presupuesto de la Entidad Local será formado:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Por su Presidente y a él habrá de unirse una memoria explicativa de su contenido y de las principales modificaciones que presente en relación con el anterior y su anexo de personal.',
      },
      {
        id: OptionEnum.B,
        text: 'Por el Pleno y a él habrá de unirse la liquidación del presupuesto del ejercicio anterior y avance de la del corriente, referida, al menos, a ocho meses del ejercicio corriente.',
      },
      {
        id: OptionEnum.C,
        text: 'Por su Presidente y al él habrá de unirse, entre otra documentación, el anexo de personal de la Entidad Local y el anexo de las inversiones a realizar en el ejercicio.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 82,
    text: 'Tras la aprobación inicial del presupuesto general, se requiere:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Anuncio previo en el boletín oficial de la provincia, por un mes, para que los interesados puedan examinarlo y presentar reclamaciones ante el Presidente, considerándose definitivamente aprobado si durante el citado plazo no se hubiesen presentado reclamaciones.',
      },
      {
        id: OptionEnum.B,
        text: 'Anuncio previo en el boletín oficial de la provincia, por 15 días, para que los interesados puedan examinarlo y presentar reclamaciones ante el Pleno, considerándose definitivamente aprobado si durante el citado plazo no se hubiesen presentado reclamaciones.',
      },
      {
        id: OptionEnum.C,
        text: 'Anuncio previo en el boletín oficial de la provincia, por 15 días, para que los interesados puedan examinarlo y presentar reclamaciones ante el Pleno, no debiendo ser sometido nuevamente a consideración de dicho órgano para su aprobación definitiva, en todo caso.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 83,
    text: 'El principio de especialidad de los créditos, supone:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Que han de destinarse exclusivamente a la finalidad específica para la cual hayan sido autorizados en el presupuesto general de la entidad local o por sus modificaciones debidamente aprobadas.',
      },
      {
        id: OptionEnum.B,
        text: 'Que las obligaciones de pago sólo serán exigibles de la hacienda local cuando resulten de la ejecución de sus respectivos presupuestos.',
      },
      {
        id: OptionEnum.C,
        text: 'Que la autorización o realización de los gastos de carácter plurianual se subordinará al crédito que para cada ejercicio autoricen los respectivos presupuestos.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 84,
    text: 'Podrán adquirirse compromisos de gastos por cuantía superior al importe de los créditos autorizados en los estados de gastos:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'En ningún caso, siendo subsanables determinados acuerdos, resoluciones y actos administrativos que infrinjan la expresada norma, por causa de interés público.',
      },
      {
        id: OptionEnum.B,
        text: 'En ningún caso, siendo nulos los acuerdos, resoluciones y actos administrativos que infrinjan la expresada norma.',
      },
      {
        id: OptionEnum.C,
        text: 'En supuestos excepcionales previstos en las Bases de ejecución del Presupuesto de la Entidad.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 85,
    text: '¿En cuál de los siguientes casos, podrán adquirirse compromisos por gastos que hayan de extenderse a ejercicios posteriores a aquél en que se autoricen? Señalar la respuesta correcta:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Las inversiones y transferencias de capital, siempre que su ejecución vaya a iniciarse en el ejercicio inmediato.',
      },
      {
        id: OptionEnum.B,
        text: 'Las inversiones y transferencias de capital, siempre que su ejecución se inicie en el propio ejercicio.',
      },
      {
        id: OptionEnum.C,
        text: 'Las transferencias corrientes se inicie su ejecución en el propio ejercicio o en el inmediato posterior.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 86,
    text: 'Se aplicarán a los créditos del presupuesto vigente, en el momento de su reconocimiento, las obligaciones siguientes:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Solo las derivadas de adquisiciones, obras, servicio y demás prestaciones o gastos en general que se realicen en el año natural del propio ejercicio presupuestario.',
      },
      {
        id: OptionEnum.B,
        text: 'Las que resulten de la liquidación de atrasos favor del personal que perciba sus retribuciones con cargo a los presupuestos generales de la entidad local.',
      },
      {
        id: OptionEnum.C,
        text: 'Las derivadas de autorizaciones de gastos debidamente adquiridos en ejercicios anteriores.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 87,
    text: 'Cuando haya de realizarse algún gasto que no pueda demorarse hasta el ejercicio siguiente, y no exista en el presupuesto de la Corporación crédito, podrá incoarse:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Un expediente de concesión de crédito extraordinario, correspondiendo al Presidente su incoación.',
      },
      {
        id: OptionEnum.B,
        text: 'Un expediente de suplemento de crédito, correspondiendo al Presidente su incoación.',
      },
      {
        id: OptionEnum.C,
        text: 'Un expediente de concesión de crédito extraordinario correspondiendo al Consejero competente su incoación, dando cuenta al Presidente.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 88,
    text: 'Excepcionalmente, se considerarán recursos efectivamente disponibles para financiar nuevos o mayores gastos, por operaciones corrientes, expresamente declarados necesarios y urgentes, los procedentes de operaciones de crédito en que se den conjuntamente las siguientes condiciones:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Que su importe total anual no supere el 5 por ciento de los recursos por operaciones del presupuesto de la entidad.',
      },
      {
        id: OptionEnum.B,
        text: 'Que la carga financiera total de la entidad, incluida la derivada de las operaciones proyectadas, no supere el 25 por ciento de los expresados recursos.',
      },
      {
        id: OptionEnum.C,
        text: 'Las dos anteriores condiciones y además que las operaciones queden canceladas antes de que se proceda a la renovación de la Corporación que las concierte.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 89,
    text: 'Las transferencias de créditos de cualquier clase estarán sujetas a las siguientes limitaciones:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Podrán afectar a los créditos ampliables y a los extraordinarios concedidos durante el ejercicio.',
      },
      {
        id: OptionEnum.B,
        text: 'No podrán minorar los créditos que hayan sido incrementados con suplementos o transferencias, salvo cuando afecten a créditos de personal, ni los créditos incorporados como consecuencia de remanentes no comprometidos procedentes de presupuestos cerrados.',
      },
      {
        id: OptionEnum.C,
        text: 'Podrán incrementar créditos que como consecuencia de otras transferencias hayan sido objeto de minoración, incluso cuando afecten a créditos de personal.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 90,
    text: 'Podrán generar crédito en los estados de gastos de los presupuestos, en la forma que reglamentariamente se establezca, los ingresos de naturaleza tributaria derivados de las siguientes operaciones:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Enajenaciones de bienes de la entidad local o de sus organismos autónomos.',
      },
      {
        id: OptionEnum.B,
        text: 'Prestaciones de suministros.',
      },
      {
        id: OptionEnum.C,
        text: 'Reintegros de pagos indebidos con cargo al ejercicio pasado, en cuanto a reposición del crédito en la correspondiente cuantía.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 91,
    text: 'La función de ordenación de pagos, compete:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Al Presidente de la entidad local, en todo caso, procediendo la creación de una ordenación de pagos por el Consejo de Gobierno insular a propuesta de aquél.',
      },
      {
        id: OptionEnum.B,
        text: 'Al Pleno de la entidad local, que podrá delegarla en el Presidente mediante acuerdo expreso adoptado con el quorum establecido por el artículo 47.3 de la Ley 7/1985, de 2 de abril.',
      },
      {
        id: OptionEnum.C,
        text: 'Al Presidente de la entidad local, en todo caso, procediendo la creación de una ordenación de pagos por el Pleno a propuesta de aquél.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 92,
    text: 'Un reputado funcionario del Gobierno de Canarias es nombrado como personal eventual en el Área de Presidencia del Cabildo, para realizar funciones de asesoramiento especial. Al llegar las elecciones y cesar en su puesto, decide retornar a su administración de procedencia y participar en un proceso de promoción interna. ¿Podrá esgrimir como mérito su condición de personal eventual?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Sí, en todo caso.',
      },
      {
        id: OptionEnum.B,
        text: 'Podría, en función de lo que establezcan las bases que rijan la convocatoria.',
      },
      {
        id: OptionEnum.C,
        text: 'No. La condición de personal eventual no puede constituir mérito para el acceso a la Función Pública o para la promoción interna.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 93,
    text: 'De conformidad con lo dispuesto en el Texto Refundido de la Ley del Estatuto Básico del Empleado Público respecto al personal eventual, ha de publicarse:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Su nombramiento y cese.',
      },
      {
        id: OptionEnum.B,
        text: 'Su currículum y titulación.',
      },
      {
        id: OptionEnum.C,
        text: 'Su número y condiciones retributivas.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 94,
    text: 'En relación con la designación del personal directivo profesional de las Administraciones Públicas, señale cuál de las siguientes afirmaciones es correcta:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Debe atender exclusivamente a principios de legalidad e igualdad.',
      },
      {
        id: OptionEnum.B,
        text: 'Debe atender a criterios de idoneidad.',
      },
      {
        id: OptionEnum.C,
        text: 'Debe llevarse a cabo por procedimientos basados en motivos de oportunidad.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 95,
    text: 'En relación con el personal directivo, ¿cuál de las siguientes afirmaciones no es correcta?:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'La determinación de las condiciones de empleo del personal directivo tendrá consideración de materia objeto de negociación colectiva a los efectos de lo dispuesto en el texto refundido del Estatuto Básico del Empleado Público.',
      },
      {
        id: OptionEnum.B,
        text: 'El personal directivo desarrolla funciones directivas profesionales en las Administraciones Públicas, definidas como tales en las normas específicas de cada Administración.',
      },
      {
        id: OptionEnum.C,
        text: 'El personal directivo estará sometido a la relación laboral de carácter especial de alta dirección cuando reúna la condición de personal laboral.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 96,
    text: '¿Entre otros, con arreglo a qué principios deben actuar los empleados públicos?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Austeridad y honradez.',
      },
      {
        id: OptionEnum.B,
        text: 'Independencia y discrecionalidad técnica en todo caso.',
      },
      {
        id: OptionEnum.C,
        text: 'Mérito y capacidad.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 97,
    text: 'En relación con los principios éticos que deben observar los empleados públicos, ¿cuál de las siguientes afirmaciones no es correcta?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Ajustarán su actuación a los principios de lealtad y buena fe con la Administración en la que presten sus servicios.',
      },
      {
        id: OptionEnum.B,
        text: 'Actuarán de acuerdo con los principios de eficacia, economía y eficiencia.',
      },
      {
        id: OptionEnum.C,
        text: 'Podrán influir en la agilización o resolución de trámite o procedimiento administrativo, aunque no haya justa causa, siempre que ello comporte agilidad.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 98,
    text: 'De conformidad con lo dispuesto en el Texto Refundido del Empleado Público, para el acceso a los cuerpos o escalas del Grupo B se exigirá estar en posesión de:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Título de Bachiller o Técnico.',
      },
      {
        id: OptionEnum.B,
        text: 'Título de Técnico Superior.',
      },
      {
        id: OptionEnum.C,
        text: 'Título universitario de Grado.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 99,
    text: 'Además de los principios de igualdad, mérito y capacidad, en la selección de los funcionarios de carrera se debe seguir el de:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Imparcialidad.',
      },
      {
        id: OptionEnum.B,
        text: 'Publicidad.',
      },
      {
        id: OptionEnum.C,
        text: 'Profesionalidad.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 100,
    text: 'En relación con la provisión de puestos de trabajo del personal funcionario de carrera, señale la respuesta correcta:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Uno de los procedimientos es la libre designación con convocatoria pública.',
      },
      {
        id: OptionEnum.B,
        text: 'Uno de los procedimientos es la oposición con concurso de méritos.',
      },
      {
        id: OptionEnum.C,
        text: 'Uno de los procedimientos es el concurso de méritos sin convocatoria pública.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 101,
    text: 'En las convocatorias de concursos de provisión de los puestos de trabajo del personal funcionario de carrera, ¿puede establecerse una determinada puntuación para quienes tengan la condición de víctima del terrorismo o de amenazados?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Sí, siempre que se acredite que la obtención del puesto sea preciso para la consecución de los fines de protección y asistencia social integral de estas personas.',
      },
      {
        id: OptionEnum.B,
        text: 'Sí, debiendo alcanzar esa puntuación, como mínimo, la que se determine en dichas convocatorias para la antigüedad.',
      },
      {
        id: OptionEnum.C,
        text: 'En ningún caso.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 102,
    text: '¿Pueden las Administraciones Públicas trasladar a sus funcionarios a otras unidades o entidades distintas a las de su destino?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Sí, siempre por razones de oportunidad.',
      },
      {
        id: OptionEnum.B,
        text: 'Sí, por necesidades de servicio o funcionales, de manera motivada y respetando sus retribuciones y condiciones esenciales de trabajo.',
      },
      {
        id: OptionEnum.C,
        text: 'Sí, por necesidades de servicio o funcionales, sin derecho a indemnización.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 103,
    text: 'Los funcionarios de carrera que obtengan destino en otra Administración Pública a través de los procedimientos de movilidad, ¿en qué situación administrativa quedarán respecto de su Administración de origen?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Servicios especiales.',
      },
      {
        id: OptionEnum.B,
        text: 'Excedencia por interés particular.',
      },
      {
        id: OptionEnum.C,
        text: 'Servicio en otras Administraciones Públicas.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 104,
    text: 'En el supuesto de cese de un funcionario en el puesto que había obtenido por libre designación ¿qué ocurrirá en el caso de que el funcionario no solicite el reingreso al servicio activo en su administración de origen en el plazo legalmente establecido?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'La Administración de origen le asignará un puesto de trabajo conforme a los sistemas de carrera y provisión de puestos vigentes en dicha Administración, con efectos económicos y administrativos desde la fecha en que se produzca su efectiva incorporación.',
      },
      {
        id: OptionEnum.B,
        text: 'Será declarado de oficio en situación de excedencia voluntaria por interés particular, con efectos desde el día siguiente a que hubiesen cesado en el servicio activo en la Administración de destino.',
      },
      {
        id: OptionEnum.C,
        text: 'En todo caso, la Administración de destino lo adscribirá a otro puesto de la misma.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 105,
    text: '¿En qué situación administrativa se encontrarán los funcionarios de carrera que sean adscritos a los servicios del Defensor del Pueblo?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Servicio en otras administraciones públicas.',
      },
      {
        id: OptionEnum.B,
        text: 'Servicios especiales.',
      },
      {
        id: OptionEnum.C,
        text: 'Servicio activo.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 106,
    text: 'Señale la respuesta correcta respecto a los funcionarios de carrera que se encuentren en la situación de servicios especiales:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Tendrán preferencia en todo caso para el reingreso al servicio activo en la Administración a la que pertenezcan.',
      },
      {
        id: OptionEnum.B,
        text: 'Percibirán las retribuciones del puesto o cargo que desempeñen, pero no los trienios.',
      },
      {
        id: OptionEnum.C,
        text: 'El tiempo que los funcionarios permanezcan en tal situación se les computará a efectos de ascensos y promoción interna, entre otros.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 107,
    text: 'Señale, en relación con los funcionarios de carrera que se encuentran en la situación administrativa de servicio en otras Administraciones Públicas, cuál de las siguientes afirmaciones es incorrecta:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'El tiempo de servicio en la Administración Pública en la que estén destinados se les computará como de servicio activo en su cuerpo o escala de origen.',
      },
      {
        id: OptionEnum.B,
        text: 'Pierden su derecho a participar en las convocatorias para la provisión de puestos de trabajo que se efectúen en la Administración de origen.',
      },
      {
        id: OptionEnum.C,
        text: 'Se rigen por la legislación de la Administración de la Administración en la que estén destinados de forma efectiva.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 108,
    text: 'Conforme a las determinaciones establecidas en el Estatuto Básico del Empleado Público, los funcionarios de carrera podrán obtener la excedencia voluntaria por interés particular cuando hayan prestado servicios efectivos en cualquiera de las Administraciones Públicas durante un periodo mínimo de:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Cinco años inmediatamente anteriores, salvo que las leyes de Función Pública que se dicten en desarrollo del Estatuto Básico del Empleado Público establezcan un período inferior.',
      },
      {
        id: OptionEnum.B,
        text: 'Cinco años inmediatamente anteriores, en todo caso.',
      },
      {
        id: OptionEnum.C,
        text: 'Dos años inmediatamente anteriores.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 109,
    text: 'Señale cuál de las siguientes afirmaciones es incorrecta en relación con la excedencia voluntaria por interés particular:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Se puede declarar aunque al funcionario que la solicite se le esté instruyendo un expediente disciplinario.',
      },
      {
        id: OptionEnum.B,
        text: 'Se declarará de oficio cuando finalizada la causa que determinó el pase a una situación distinta a la de servicio activo, se incumpla la obligación de solicitar el reingreso al servicio activo.',
      },
      {
        id: OptionEnum.C,
        text: 'Quienes se encuentren en situación de excedencia por interés particular no devengarán retribuciones.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 110,
    text: '¿Durante cuánto tiempo se le reservará el puesto de trabajo a los funcionarios de carrera en excedencia por cuidado de familiares?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Al menos, durante tres años.',
      },
      {
        id: OptionEnum.B,
        text: 'Un año, en todo caso.',
      },
      {
        id: OptionEnum.C,
        text: 'Al menos, durante dos años.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 111,
    text: '¿Cuándo podrá concederse una excedencia voluntaria por agrupación familiar?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Cuando haya que atender a los progenitores por razones de edad.',
      },
      {
        id: OptionEnum.B,
        text: 'Cuando el cónyuge resida en otra localidad por haber obtenido y estar desempeñando un puesto de trabajo de carácter definitivo como funcionario de carrera o como laboral fijo.',
      },
      {
        id: OptionEnum.C,
        text: 'Cuando el cónyuge resida en otra localidad y esté desempeñando un puesto de trabajo como funcionario, ya sea interino o de carrera.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 112,
    text: 'Cuando un funcionario haya sido declarado en la situación de suspensión de funciones, dicha situación determinará la pérdida del puesto de trabajo cuando la suspensión exceda de:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Seis meses.',
      },
      {
        id: OptionEnum.B,
        text: 'Nueve meses.',
      },
      {
        id: OptionEnum.C,
        text: 'Un año.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 113,
    text: '¿Es posible acordar la suspensión provisional de funciones de un funcionario?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'En ningún caso.',
      },
      {
        id: OptionEnum.B,
        text: 'Sí, con ocasión de la tramitación de un procedimiento judicial o expediente disciplinario.',
      },
      {
        id: OptionEnum.C,
        text: 'Sí, en todo caso.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 114,
    text: 'A tenor de lo dispuesto en el Texto Refundido del Estatuto Básico del Empleado Público, el abandono del servicio, así como no hacerse cargo voluntariamente de las tareas o funciones que tienen encomendadas los empleados públicos, será constitutivo de falta:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Muy grave.',
      },
      {
        id: OptionEnum.B,
        text: 'Grave.',
      },
      {
        id: OptionEnum.C,
        text: 'Menos grave.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 115,
    text: 'En el Texto Refundido del Estatuto Básico del Empleado Público, el acoso laboral:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Está tipificado como falta grave.',
      },
      {
        id: OptionEnum.B,
        text: 'Está tipificado como falta muy grave.',
      },
      {
        id: OptionEnum.C,
        text: 'No está tipificado como falta disciplinaria.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 116,
    text: '¿Qué circunstancias, entre otras, deberán ser tenidas en cuenta en el establecimiento de las faltas disciplinarias graves por la legislación correspondiente?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'La adopción de acuerdos manifiestamente ilegales que causen perjuicio grave a la Administración o a los ciudadanos.',
      },
      {
        id: OptionEnum.B,
        text: 'La desobediencia abierta a las órdenes o instrucciones de un superior.',
      },
      {
        id: OptionEnum.C,
        text: 'El descrédito para la imagen pública de la Administración.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 117,
    text: 'Respecto de los principios generales que rigen el tratamiento de los datos personales, el principio de “limitación de la finalidad” viene referido a:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Que deben ser mantenidos de forma que se permita la identificación de los interesados durante no más tiempo del necesario para los fines del tratamiento de los datos personales.',
      },
      {
        id: OptionEnum.B,
        text: 'Que deben ser tratados de tal manera que se garantice una seguridad adecuada de los datos personales, incluida la protección contra el tratamiento no autorizado o ilícito y contra su pérdida, destrucción o daño accidental.',
      },
      {
        id: OptionEnum.C,
        text: 'Que deben ser recogidos con fines determinados, explícitos y legítimos, y no serán tratados ulteriormente de manera incompatible con dichos fines.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 118,
    text: 'El tratamiento para otro fin distinto de aquel para el que se recogieron los datos personales será lícito cuando el tratamiento sea necesario para:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'El cumplimiento de una obligación aplicable al responsable del tratamiento, que dimane de una norma de Derecho de la Unión Europea u otra norma con rango de ley o de naturaleza reglamentaria.',
      },
      {
        id: OptionEnum.B,
        text: 'La ejecución de un contrato, aunque el interesado no sea parte en el mismo.',
      },
      {
        id: OptionEnum.C,
        text: 'El cumplimiento de una misión realizada en interés público o en el ejercicio de poderes públicos conferidos al responsable del tratamiento.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 119,
    text: 'Cuando los datos personales se obtengan del interesado, el responsable del tratamiento podrá dar cumplimiento al deber de información, facilitando la información básica siguiente:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Las categorías de datos personales de que se trate.',
      },
      {
        id: OptionEnum.B,
        text: 'En todo caso, los fines del tratamiento a que se destinan los datos personales.',
      },
      {
        id: OptionEnum.C,
        text: 'La fuente de la que proceden los datos personales.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 120,
    text: 'Respecto de los derechos reconocidos en la Ley Orgánica de Protección de Datos Personales y garantía de los derechos digitales, cuál de las siguientes afirmaciones es correcta:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Los titulares de la patria potestad podrán ejercitar en nombre y representación de los menores de catorce años los derechos que pudieran corresponderles.',
      },
      {
        id: OptionEnum.B,
        text: 'La prueba del cumplimiento del deber de responder a la solicitud de ejercicio de sus derechos formulado por el afectado recaerá sobre el mismo.',
      },
      {
        id: OptionEnum.C,
        text: 'El encargado podrá tramitar, por cuenta del responsable, las solicitudes de ejercicio formuladas por los afectados de sus derechos, en todo caso.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 121,
    text: 'El tratamiento de datos personales por el encargado se regirá por un contrato u otro acto jurídico que estipulará que el encargado del tratamiento:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'No recurrirá a otro encargado sin la autorización previa, por escrito o de forma verbal, del responsable.',
      },
      {
        id: OptionEnum.B,
        text: 'Suprimirá o devolverá, a su elección, todos los datos personales una vez finalice la prestación de los servicios de tratamiento.',
      },
      {
        id: OptionEnum.C,
        text: 'Tratará los datos personales únicamente siguiendo instrucciones documentadas del responsable.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 122,
    text: 'Tendrá la consideración de encargado del tratamiento de datos personales, quien:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'En su propio nombre y sin que conste que actúa por cuenta de otro, establezca relaciones con los afectados.',
      },
      {
        id: OptionEnum.B,
        text: 'Figurando como encargado, utilizase los datos para sus propias finalidades.',
      },
      {
        id: OptionEnum.C,
        text: 'En virtud de un contrato u otro acto jurídico, realice el tratamiento de datos de terceros en nombre del responsable.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 123,
    text: 'Los responsables y encargados del tratamiento deberán designar un delegado de protección de datos siempre que el tratamiento se lleve a cabo por:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Bancos y cajas de ahorros.',
      },
      {
        id: OptionEnum.B,
        text: 'Los prestadores de servicios de la sociedad de la información, en todo caso.',
      },
      {
        id: OptionEnum.C,
        text: 'Los profesionales de la salud que ejerzan su actividad a título individual.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 124,
    text: 'De conformidad con lo dispuesto en el Estatuto de la Agencia Española de Protección de Datos, en relación con las circulares de la Agencia, ¿qué respuesta es correcta?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Serán objeto de aprobación final de la Presidencia de la Agencia Española de Protección de Datos, u órgano en quien delegue.',
      },
      {
        id: OptionEnum.B,
        text: 'Serán publicadas en el Boletín Oficial del Estado y entrarán en vigor a los quince días de su completa publicación, si en ellas no se dispone otra cosa.',
      },
      {
        id: OptionEnum.C,
        text: 'En el procedimiento de su elaboración se dará audiencia a las personas titulares de derechos e intereses legítimos que resulten afectados por las mismas.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 125,
    text: 'El tratamiento de categorías especiales de datos personales será admisible cuando:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'El interesado dio su consentimiento explícito para el tratamiento de dichos datos personales con uno o más de los fines especificados.',
      },
      {
        id: OptionEnum.B,
        text: 'El tratamiento se refiera a datos personales que el interesado ha hecho manifiestamente públicos.',
      },
      {
        id: OptionEnum.C,
        text: 'Está prohibido en todo caso.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 126,
    text: 'De conformidad con lo señalado en la regulación del Esquema Nacional de Seguridad, respecto de la política de seguridad de la información, ¿cuál de las siguientes afirmaciones es correcta?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Cada Administración pública contará con una política de seguridad formalmente aprobada por el órgano competente.',
      },
      {
        id: OptionEnum.B,
        text: 'Los municipios podrán disponer de una política de seguridad común elaborada por consenso de todos ellos.',
      },
      {
        id: OptionEnum.C,
        text: 'Los sujetos de un sector público institucional quedarán incluidos en el ámbito subjetivo de la política de seguridad aprobada por la Administración con la que guarden relación de vinculación o dependencia.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 127,
    text: 'De conformidad con lo señalado en la regulación del Esquema Nacional de Seguridad respecto del responsable de la seguridad de los sistemas de información, éste determinará:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Los requisitos de la información tratada.',
      },
      {
        id: OptionEnum.B,
        text: 'Las decisiones para satisfacer los requisitos de seguridad de la información y de los servicios y supervisará la implantación de las medidas necesarias para garantizar que se satisfacen los requisitos.',
      },
      {
        id: OptionEnum.C,
        text: 'Los requisitos de los servicios prestados.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 128,
    text: 'La relación de medidas de seguridad seleccionadas para dar cumplimiento a los requisitos mínimos establecidos en la regulación del Esquema Nacional de Seguridad:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Podrán ampliarse a criterio del responsable de la información, quien podrá incluir medidas adicionales.',
      },
      {
        id: OptionEnum.B,
        text: 'La relación de medidas de seguridad seleccionadas se formalizará en un documento denominado Declaración de Aplicabilidad, firmado por el responsable de la seguridad.',
      },
      {
        id: OptionEnum.C,
        text: 'Las medidas de seguridad a aplicar, que vienen referenciadas en el anexo II de la citada regulación, no podrán ser reemplazadas por otras en ningún caso.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 129,
    text: 'El informe del Comisionado de Transparencia sobre el grado de aplicación y cumplimiento de la Ley canaria de transparencia y de acceso a la información pública:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Dará cuenta de la gestión realizada cada ejercicio, y se presentará ante el Parlamento de Canarias antes del 30 de mayo del año siguiente.',
      },
      {
        id: OptionEnum.B,
        text: 'Se presentará al Parlamento dentro del primer trimestre del ejercicio siguiente al que se refiera.',
      },
      {
        id: OptionEnum.C,
        text: 'Deberá ser publicado en el Boletín Oficial del Parlamento de Canarias.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 130,
    text: 'El informe del Comisionado sobre el grado de aplicación y cumplimiento de la Ley canaria de transparencia y de acceso a la información pública contendrá:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Únicamente el número y tipo de quejas presentadas.',
      },
      {
        id: OptionEnum.B,
        text: 'Los requerimientos formulados para la subsanación de incumplimientos de la obligación de hacer pública la información prevista en dicha Ley.',
      },
      {
        id: OptionEnum.C,
        text: 'Los procedimientos disciplinarios incoados y resueltos por la comisión de las infracciones previstas en el Estatuto Básico del Empleado Público.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 131,
    text: 'De conformidad con la Ley de Cabildos Insulares, las solicitudes de información sobre datos que obren en poder de los Servicios de la Corporación, por parte de los Consejeros Insulares deberán resolverse por:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'La Vicesecretaría General.',
      },
      {
        id: OptionEnum.B,
        text: 'El Presidente, en todo caso.',
      },
      {
        id: OptionEnum.C,
        text: 'El Jefe del Servicio Administrativo del Área correspondiente por razón de la materia.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 132,
    text: 'De conformidad con la Ley de Cabildos, las solicitudes de información sobre datos que obren en poder de los Servicios de la Corporación, por parte de los Consejeros Insulares del Cabildo Insular de Tenerife, podrán ser denegadas cuando:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Cuando se trate del acceso a la documentación correspondiente a los asuntos que hayan de ser tratados por los órganos colegiados de que formen parte.',
      },
      {
        id: OptionEnum.B,
        text: 'Cuando se trate de antecedentes que se encuentren incorporados a un proceso judicial penal, en todo caso.',
      },
      {
        id: OptionEnum.C,
        text: 'Cuando afecten a información cuyo acceso esté limitado por la Constitución, en todo caso.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 133,
    text: 'De conformidad con lo señalado en la Ley de Cabildos Insulares, los Cabildos publicarán y mantendrán permanentemente actualizada:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Las actas de los consejos de gobierno Insulares.',
      },
      {
        id: OptionEnum.B,
        text: 'Los acuerdos adoptados por los consejos de gobierno insulares.',
      },
      {
        id: OptionEnum.C,
        text: 'Los órdenes del día tras la celebración de los plenos de la corporación.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 134,
    text: 'Respecto del personal de libre nombramiento, según determina la Ley de Cabildos Insulares, los Cabildos Insulares facilitarán y mantendrán actualizada permanentemente información sobre:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Las personas titulares de los órganos directivos de las entidades privadas en las que participe minoritariamente.',
      },
      {
        id: OptionEnum.B,
        text: 'El personal de confianza o asesoramiento especial de la corporación especificando, entre otras, las actividades para las que se le ha concedido la compatibilidad.',
      },
      {
        id: OptionEnum.C,
        text: 'Las personas titulares de los órganos superiores y directivos de la corporación.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 135,
    text: 'De conformidad con lo dispuesto en la Ley de Cabildos Insulares, respecto de su personal, los Cabildos Insulares mantendrán permanentemente actualizadas y a disposición de todas las personas:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'El número de personas que prestan servicios en la Corporación, especificando el puesto de trabajo o plaza que desempeñan y el régimen de provisión, sin identificación nominal.',
      },
      {
        id: OptionEnum.B,
        text: 'Número de empleados adscritos a la corporación, a los organismos y entidades públicas, y privadas en las que tenga algún tipo de participación.',
      },
      {
        id: OptionEnum.C,
        text: 'Número de empleados públicos y su distribución por grupos de clasificación, especificando el tipo de relación funcionarial o laboral.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 136,
    text: 'De conformidad con lo dispuesto en la Ley de Cabildos Insulares, estos deberán mantener permanentemente actualizada la información en materia normativa siguiente:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Los procedimientos de elaboración normativa que estén en curso.',
      },
      {
        id: OptionEnum.B,
        text: 'Las respuestas a consultas planteadas por los particulares, en todo caso.',
      },
      {
        id: OptionEnum.C,
        text: 'Los textos de las directrices, instrucciones y circulares sin efectos sobre terceros.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 137,
    text: 'De conformidad con lo dispuesto en la Ley de Cabildos Insulares, respecto de sus servicios, los Cabildos Insulares mantendrán permanentemente actualizada la información siguiente:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'El número de reclamaciones presentadas y el número o proporción de las resueltas en contra de los interesados.',
      },
      {
        id: OptionEnum.B,
        text: 'El procedimiento para la presentación de sugerencias sobre el funcionamiento del servicio.',
      },
      {
        id: OptionEnum.C,
        text: 'Los servicios que presta cada unidad administrativa.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 138,
    text: 'De conformidad con lo dispuesto en la Ley de Cabildos Insulares, respecto de su gestión económico-financiera, los Cabildos Insulares publicarán y mantendrán permanentemente actualizada la información siguiente:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'El importe de la deuda pública actual del cabildo insular y su evolución a lo largo de los tres ejercicios anteriores.',
      },
      {
        id: OptionEnum.B,
        text: 'Las operaciones de arrendamiento financiero suscritas por la Corporación y por los organismos y entidades vinculadas o dependientes.',
      },
      {
        id: OptionEnum.C,
        text: 'Las operaciones de préstamo, crédito y emisiones de deuda pública en todas sus modalidades que tenga previsto realizar la corporación y sus organismos y entidades vinculadas o dependientes.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 139,
    text: 'De conformidad con lo dispuesto en la Ley de Cabildos Insulares, respecto de sus contratos, los Cabildos Insulares publicarán y mantendrán permanentemente actualizada la información siguiente:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Los contratos formalizados, con indicación del objeto, el importe de licitación y de adjudicación, el procedimiento utilizado, los instrumentos a través de los que en su caso se haya publicitado y la identidad de los licitadores participantes en el procedimiento.',
      },
      {
        id: OptionEnum.B,
        text: 'La información sobre preguntas frecuentes y aclaraciones relativas al contenido de los contratos.',
      },
      {
        id: OptionEnum.C,
        text: 'Únicamente la relación de contratos resueltos por causa imputable al contratista.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 140,
    text: 'De conformidad con lo dispuesto en la Ley de Cabildos Insulares, respecto de las ayudas y subvenciones de sus órganos y de los órganos de los organismos y entidades vinculadas o dependientes, los Cabildos Insulares harán pública y mantendrán actualizada la información siguiente:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'La relación de beneficiarios de las ayudas y subvenciones concedidas en el ejercicio presupuestario, indicando su importe, objetivo y beneficiarios.',
      },
      {
        id: OptionEnum.B,
        text: 'Los planes estratégicos de ayudas y subvenciones aprobados.',
      },
      {
        id: OptionEnum.C,
        text: 'La relación de las líneas de ayudas o subvenciones que tengan previsto convocar durante los cuatro ejercicios presupuestarios siguientes.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 141,
    text: 'De conformidad con la Ley Canaria de transparencia y de acceso a la información pública:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Las solicitudes de acceso a la información pública podrán realizarse presencial o telemáticamente mediante correo electrónico.',
      },
      {
        id: OptionEnum.B,
        text: 'Están sujetas a la misma, un partido político y una entidad privada que tengan cada una unos ingresos anuales de 10.000 euros y que hayan recibido cada una de ellas una subvención de 6.000 euros.',
      },
      {
        id: OptionEnum.C,
        text: 'Es un derecho de las personas usar la información obtenida, siendo precisa en todo caso autorización previa.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 142,
    text: 'Conforme a la Ley Canaria de transparencia y de acceso a la información pública, y en relación con las resoluciones de inadmisión a trámite de las solicitudes de acceso a la información pública ¿qué respuesta es correcta?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Serán siempre inadmitidas las que soliciten información de apoyo como notas o informes preceptivos.',
      },
      {
        id: OptionEnum.B,
        text: 'No serán admitidas las que se refieran a informes internos.',
      },
      {
        id: OptionEnum.C,
        text: 'Serán siempre inadmitidas las relativas a información para cuya divulgación sea necesaria una acción previa de reelaboración.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 143,
    text: 'En relación con las resoluciones dictadas en materia de acceso a la información pública de conformidad con la Ley Canaria de transparencia y de acceso a la información pública, señale cuál de las siguientes afirmaciones es correcta:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Serán motivadas necesariamente las que concedan el acceso a través de una modalidad distinta a la solicitada.',
      },
      {
        id: OptionEnum.B,
        text: 'No ponen fin a la vía administrativa y son recurribles directamente mediante la reclamación ante el Comisionado de Transparencia y acceso a la información pública de Canarias.',
      },
      {
        id: OptionEnum.C,
        text: 'Las que concedan el acceso cuando haya habido oposición de un tercero serán motivadas e indicarán expresamente al solicitante que puede proceder de inmediato al acceso de la información.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 144,
    text: 'El reconocimiento del derecho de acceso a la información pública conforme a la Ley Canaria de transparencia y de acceso a la información pública conllevará el derecho de obtener copias de los documentos solicitados:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Solo cuando no sea posible realizar la copia en un formato determinado por carencia de equipos apropiados.',
      },
      {
        id: OptionEnum.B,
        text: 'En todo caso, cuando su cantidad o complejidad conlleve un coste desproporcionado para la Administración.',
      },
      {
        id: OptionEnum.C,
        text: 'Solo cuando puedan vulnerarse derechos de propiedad intelectual.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 145,
    text: 'En relación con el derecho de acceso a la información pública, conforme a la Ley Canaria de transparencia y de acceso a la información pública:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Puede ser limitado cuando acceder a la información suponga un perjuicio para la prevención, investigación y sanción de ilícitos.',
      },
      {
        id: OptionEnum.B,
        text: 'La obtención de la información pública es siempre un trámite gratuito.',
      },
      {
        id: OptionEnum.C,
        text: 'Transcurrido el plazo para resolver sin haberse notificado resolución expresa, la solicitud de acceso se entenderá en algunos supuestos estimada.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 146,
    text: 'De conformidad con lo señalado en la Ley Orgánica para la igualdad efectiva de mujeres y hombres, se considera discriminación indirecta por razón de sexo:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'La situación en que se encuentra una persona que sea, haya sido o pudiera ser tratada, en atención a su sexo, de manera menos favorable que otra en situación comparable.',
      },
      {
        id: OptionEnum.B,
        text: 'Una práctica, aparentemente neutra, que pone a personas de un sexo en desventaja particular con respecto a personas del otro, en cualquier caso.',
      },
      {
        id: OptionEnum.C,
        text: 'Un criterio aparentemente neutro, que pone a personas de un sexo en desventaja particular con respecto a personas del otro, salvo que pueda justificarse objetivamente en atención a una finalidad legítima y que los medios para alcanzar dicha finalidad sean necesarios y adecuados.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 147,
    text: 'De conformidad con lo señalado en la Ley Orgánica para la igualdad efectiva de mujeres y hombres, constituye acoso sexual cualquier comportamiento:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Verbal o físico, de naturaleza sexual que tenga el propósito o produzca el efecto de atentar contra la dignidad de una persona.',
      },
      {
        id: OptionEnum.B,
        text: 'Realizado en función del sexo de una persona, con el propósito o el efecto de atentar contra su dignidad y de crear un entorno intimidatorio, degradante u ofensivo.',
      },
      {
        id: OptionEnum.C,
        text: 'Verbal o físico, de cualquier naturaleza, que tenga el propósito o produzca el efecto de atentar contra la dignidad de una persona.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 148,
    text: 'De conformidad con lo señalado en la Ley Orgánica para la igualdad efectiva de mujeres y hombres, serán criterios generales de actuación de los Poderes Públicos en la implantación de políticas públicas de igualdad:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'El establecimiento de medidas que aseguren la conciliación del trabajo y de la vida personal y familiar de las mujeres, únicamente.',
      },
      {
        id: OptionEnum.B,
        text: 'Potenciar el crecimiento del empresariado femenino en todos los ámbitos que abarque el conjunto de políticas y el valor del trabajo de las mujeres, incluido el doméstico.',
      },
      {
        id: OptionEnum.C,
        text: 'La implantación de un lenguaje no sexista en el ámbito de las relaciones sociales.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 149,
    text: 'De conformidad con lo señalado en la Ley Orgánica para la igualdad efectiva de mujeres y hombres, las empresas deberán elaborar y aplicar un plan de igualdad:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Únicamente cuando se trate de empresas de cincuenta o más trabajadores.',
      },
      {
        id: OptionEnum.B,
        text: 'La elaboración e implantación de planes de igualdad en las empresas será voluntaria, en todo caso.',
      },
      {
        id: OptionEnum.C,
        text: 'Cuando en un procedimiento sancionador la autoridad laboral lo hubiera acordado, en sustitución de las sanciones accesorias.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 150,
    text: 'Respecto de los planes de igualdad de las empresas, ¿cuál de las siguientes afirmaciones es correcta?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Podrán incluir la totalidad de una empresa o únicamente determinados centros de trabajo.',
      },
      {
        id: OptionEnum.B,
        text: 'Las empresas están obligadas a inscribir sus planes de igualdad en el Registro Oficial de Licitadores y Empresas Clasificadas del Estado.',
      },
      {
        id: OptionEnum.C,
        text: 'Son un conjunto ordenado de medidas, adoptadas después de realizar un diagnóstico de situación, tendentes a alcanzar en la empresa la igualdad de trato y de oportunidades entre mujeres y hombres y a eliminar la discriminación por razón de sexo.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 151,
    text: 'El principio de igualdad en el empleo público conlleva que las Administraciones públicas, en el ámbito de sus respectivas competencias, y en aplicación del principio de igualdad entre mujeres y hombres, deberán:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Promover la presencia equilibrada de mujeres y hombres entre los aspirantes seleccionados al puesto de empleo público.',
      },
      {
        id: OptionEnum.B,
        text: 'Fomentar la formación en igualdad, tanto en el acceso al empleo público como a lo largo de la carrera profesional.',
      },
      {
        id: OptionEnum.C,
        text: 'Establecer medidas efectivas para eliminar cualquier discriminación retributiva, directa o indirecta, por razón de raza.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 152,
    text: 'La violencia de género a que se refiere la Ley Orgánica de Medidas de Protección Integral contra la Violencia de Género:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Hace referencia a todo acto de violencia que se ejerza sobre las mujeres por parte de los hombres.',
      },
      {
        id: OptionEnum.B,
        text: 'Hace referencia a todo acto de violencia física y psicológica, que se ejerza sobre las mujeres por parte de quienes sean o hayan sido sus cónyuges o de quienes estén o hayan estado ligados a ellas por relaciones similares de afectividad, aun sin convivencia.',
      },
      {
        id: OptionEnum.C,
        text: 'También comprende la violencia que se ejerza sobre sus hijos e hijas, de cualquier edad, por parte de quienes sean o hayan sido sus cónyuges o de quienes estén o hayan estado ligados a ellas por relaciones similares de afectividad, aun sin convivencia.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 153,
    text: '¿Qué principios se prevén de forma específica en la Constitución Española para el gobierno y la administración?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'La Administración Pública garantiza la legalidad, la publicidad de las normas, la irretroactividad de las disposiciones sancionadoras no favorables, la seguridad jurídica, la responsabilidad y la interdicción de la arbitrariedad.',
      },
      {
        id: OptionEnum.B,
        text: 'La Administración Pública sirve con objetividad los intereses generales y actúa de acuerdo con los principios de eficacia, jerarquía, descentralización, desconcentración y coordinación, con sometimiento pleno a la ley y al Derecho.',
      },
      {
        id: OptionEnum.C,
        text: 'La Administración Pública controla la potestad reglamentaria y la legalidad de la actuación administrativa, así como el sometimiento de los órganos administrativos a los fines que la justifican.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 154,
    text: '¿Cuáles son las fuentes del ordenamiento jurídico español?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'La ley, la costumbre y los principios generales del derecho.',
      },
      {
        id: OptionEnum.B,
        text: 'Las del apartado anterior, pero en el caso del derecho administrativo hay que añadir como tales la jurisprudencia y la doctrina científica.',
      },
      {
        id: OptionEnum.C,
        text: 'La ley, los reglamentos y ordenanzas y la doctrina que de modo reiterado establezca el Tribunal Supremo al interpretar y aplicar las leyes.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 155,
    text: 'Una Administración Pública aprueba un reglamento de organización interna vulnerando determinados preceptos previstos legalmente. ¿qué consecuencia jurídica tiene?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Será nulo porque vulnera una ley, que es jerárquicamente superior al citado reglamento.',
      },
      {
        id: OptionEnum.B,
        text: 'Será válido, porque en virtud de la potestad autoorganizatoria establecida legalmente, la Administración puede organizarse libremente.',
      },
      {
        id: OptionEnum.C,
        text: 'Será válido siempre que respete el contenido de la Constitución Española, en cuanto norma suprema del ordenamiento jurídico.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 156,
    text: '¿Qué respuesta es correcta en relación con los reglamentos y disposiciones administrativas?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Deben tramitarse conforme al procedimiento administrativo general establecido en la Ley 39/2015.',
      },
      {
        id: OptionEnum.B,
        text: 'Habrán de publicarse en el diario oficial correspondiente para que entren en vigor y produzcan efectos jurídicos.',
      },
      {
        id: OptionEnum.C,
        text: 'Requieren de dictamen favorable del Consejo de Estado o órgano consultivo equivalente de la comunidad autónoma correspondiente.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 157,
    text: '¿A quién le corresponde el ejercicio de la potestad reglamentaria en una administración local?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'El ejercicio de la potestad reglamentaria en la administración local está atribuido al órgano que decida el Pleno en la sesión constitutiva de la Corporación.',
      },
      {
        id: OptionEnum.B,
        text: 'El ejercicio de la potestad reglamentaria en la administración local corresponde al Pleno, de conformidad con la legislación básica de régimen local.',
      },
      {
        id: OptionEnum.C,
        text: 'El ejercicio de la potestad reglamentaria corresponde exclusivamente al Gobierno de la Nación y los órganos de gobierno de las Comunidades Autónomas.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 158,
    text: 'En relación al sometimiento de la administración local a la ley y al derecho, ¿Cuál de los siguientes principios generales no está previsto para ella en la legislación básica de régimen local?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'El principio de jerarquía.',
      },
      {
        id: OptionEnum.B,
        text: 'El principio de coordinación.',
      },
      {
        id: OptionEnum.C,
        text: 'El principio de sometimiento pleno a la ley y al derecho.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 159,
    text: '¿Cuál de las siguientes potestades administrativas corresponde a los municipios, las provincias y las islas?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Potestad reglamentaria, tributaria, financiera, y expropiatoria, entre otras.',
      },
      {
        id: OptionEnum.B,
        text: 'Potestad legislativa en el ámbito de sus competencias.',
      },
      {
        id: OptionEnum.C,
        text: 'Potestad reglamentaria, control de la legalidad de la actuación administrativa, así como el sometimiento de ésta a los fines que la justifican.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 160,
    text: '¿Qué materias pueden ser reguladas por una disposición de carácter general y/o reglamento?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Todas, salvo las que deben ser objeto de ley orgánica.',
      },
      {
        id: OptionEnum.B,
        text: 'Solo el establecimiento de tributos, exacciones o prestaciones personales o patrimoniales de carácter público.',
      },
      {
        id: OptionEnum.C,
        text: 'La organización administrativa interna.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 161,
    text: 'En el ejercicio de la potestad reglamentaria, ¿qué implica el principio de proporcionalidad?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Implica que la iniciativa que se proponga deberá contener la regulación imprescindible para atender la necesidad a cubrir con la norma, previa la constatación que proceda legalmente.',
      },
      {
        id: OptionEnum.B,
        text: 'Implica que la iniciativa normativa debe estar justificada por una razón de interés general, basarse en una identificación clara de los fines perseguidos y ser el instrumento más adecuado para garantizar su consecución.',
      },
      {
        id: OptionEnum.C,
        text: 'Implica que la iniciativa normativa se ejercerá de manera coherente con el resto del ordenamiento jurídico, para generar un marco normativo estable, claro y de certidumbre.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 162,
    text: '¿Qué respuesta es correcta en relación a la participación de los ciudadanos en el procedimiento de elaboración de normas con rango de Ley y reglamentos?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Es obligatoria, en todo caso, una consulta pública a través del portal web de la Administración competente con carácter previo a la elaboración del anteproyecto de reglamento correspondiente.',
      },
      {
        id: OptionEnum.B,
        text: 'Es obligatorio solicitar la opinión de las organizaciones o asociaciones reconocidas por ley que agrupen o representen a las personas cuyos derechos o intereses legítimos se vieren afectados por la norma.',
      },
      {
        id: OptionEnum.C,
        text: 'Se puede prescindir de trámite de consulta, audiencia e información públicas en el caso de normas presupuestarias de la Administración local, entre otros.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 163,
    text: 'Respecto de la forma de los actos administrativos, ¿cuál de las siguientes afirmaciones es correcta?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Cuando deba dictarse una serie de actos administrativos de la misma naturaleza podrán refundirse en un único acto, sin necesidad de especificar las circunstancias personales de los destinatarios.',
      },
      {
        id: OptionEnum.B,
        text: 'El titular de la competencia deberá autorizar una relación de las resoluciones que haya dictado de forma verbal, con expresión de su contenido.',
      },
      {
        id: OptionEnum.C,
        text: 'Los actos administrativos se producirán por escrito, a través de cualquier medio que permita su constancia.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 164,
    text: 'Deben motivarse los actos administrativos:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Que acepten las pruebas propuestas por los interesados.',
      },
      {
        id: OptionEnum.B,
        text: 'Únicamente, los que deban serlo en virtud de disposición legal o reglamentaria.',
      },
      {
        id: OptionEnum.C,
        text: 'Que se separen del dictamen de órganos consultivos.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 165,
    text: 'Respecto de la eficacia de los actos de las Administraciones Públicas sujetos al derecho administrativo, ¿cuál de las siguientes afirmaciones es correcta?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Producirá sus efectos desde la fecha que se disponga en el propio acto.',
      },
      {
        id: OptionEnum.B,
        text: 'Su eficacia podrá quedar demorada cuando esté supeditada a su aprobación superior.',
      },
      {
        id: OptionEnum.C,
        text: 'Tendrán eficacia retroactiva cuando produzcan efectos favorables al interesado en todo caso.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 166,
    text: 'Se entenderá cumplida la obligación de notificar los actos administrativos dentro de plazo:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Cuando la notificación contenga al menos un extracto de la resolución, así como el intento de notificación debidamente acreditado.',
      },
      {
        id: OptionEnum.B,
        text: 'Cuando la notificación indique si pone fin o no a la vía administrativa, con expresión de los recursos que procedan, en su caso, en vía administrativa y judicial, así como el órgano ante el que hubieran de presentarse y el plazo para interponerlos.',
      },
      {
        id: OptionEnum.C,
        text: 'Ninguna de las anteriores es correcta.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 167,
    text: 'Las notificaciones de los actos administrativos podrán practicarse:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Por medios electrónicos, previa solicitud del interesado persona jurídica.',
      },
      {
        id: OptionEnum.B,
        text: 'Por entrega directa de un empleado público de la Administración notificante para asegurar la eficacia del acto.',
      },
      {
        id: OptionEnum.C,
        text: 'Mediante su envío a la dirección de correo electrónico identificada por el interesado.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 168,
    text: 'El rechazo de la notificación de un acto se produce:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Cuando la notificación no pueda realizarse porque nadie se hace cargo de la misma.',
      },
      {
        id: OptionEnum.B,
        text: 'Ante la ausencia de persona alguna en el lugar de la notificación.',
      },
      {
        id: OptionEnum.C,
        text: 'Con el vencimiento del plazo desde su puesta a disposición sin que se acceda a su contenido, si la notificación por medios electrónicos resulta obligatoria.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 169,
    text: 'Cuando la notificación de un acto administrativo se practique en el domicilio del interesado, ¿Cuál de las siguientes afirmaciones es correcta?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Si nadie se hace cargo de la misma en un primer intento la notificación se hará por medio de un anuncio publicado en el Boletín Oficial del Estado.',
      },
      {
        id: OptionEnum.B,
        text: 'Podrá hacerse cargo de la misma cualquier persona que se encuentre en el domicilio y haga constar su identidad.',
      },
      {
        id: OptionEnum.C,
        text: 'Si intentada la notificación nadie se hace cargo de la misma, deberá realizarse un segundo intento en una hora distinta dentro de los tres días siguientes.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 170,
    text: 'Cuando los interesados en el procedimiento sean desconocidos la notificación de un acto administrativo se practicará:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Por medio de un anuncio publicado en el Boletín Oficial del Estado.',
      },
      {
        id: OptionEnum.B,
        text: 'Por medio de un anuncio publicado en el Boletín Oficial de la Provincia y potestativamente en el Boletín Oficial del Estado',
      },
      {
        id: OptionEnum.C,
        text: 'Se estará a las formas de notificación establecidas por las Administraciones Públicas.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 171,
    text: 'La publicación de un acto administrativo deberá contener:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Basta con una somera indicación del contenido del acto si su publicación íntegra pudiera lesionar derechos o intereses legítimos.',
      },
      {
        id: OptionEnum.B,
        text: 'Si se trata publicaciones de actos que contengan elementos comunes deberán publicarse los aspectos coincidentes.',
      },
      {
        id: OptionEnum.C,
        text: 'Los mismos elementos que se exigen a las notificaciones.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 172,
    text: 'De conformidad con lo señalado en la Ley del Procedimiento Administrativo Común de las Administraciones Públicas, los actos administrativos serán objeto de publicación:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Cuando el acto tenga por destinatario a una pluralidad de personas, en todo caso.',
      },
      {
        id: OptionEnum.B,
        text: 'Cuando se trate de actos integrantes de un procedimiento sancionador.',
      },
      {
        id: OptionEnum.C,
        text: 'Cuando la Administración estime que la notificación efectuada a un solo interesado es insuficiente para garantizar la notificación a todos.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 173,
    text: 'Son anulables los actos de la Administración:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Realizados fuera del tiempo establecido para ellos, en todo caso.',
      },
      {
        id: OptionEnum.B,
        text: 'Dictados prescindiendo total y absolutamente del procedimiento legalmente Establecido.',
      },
      {
        id: OptionEnum.C,
        text: 'Que incurran en cualquier infracción del ordenamiento jurídico.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 174,
    text: 'La nulidad o anulabilidad de un acto administrativo implicará:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'La nulidad o anulabilidad de los sucesivos actos en el procedimiento, aunque sean independientes del acto nulo o anulable.',
      },
      {
        id: OptionEnum.B,
        text: 'La nulidad o anulabilidad de las partes independientes, si la parte viciada es de tal importancia que sin ella el acto administrativo no hubiera sido dictado.',
      },
      {
        id: OptionEnum.C,
        text: 'Ninguna de las anteriores es correcta.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 175,
    text: 'La convalidación de los actos administrativos podrá realizarse:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'En caso de incompetencia material, el acto podrá ser convalidado por el órgano competente cuando sea superior jerárquico del que dictó el acto nulo.',
      },
      {
        id: OptionEnum.B,
        text: 'Si el vicio consistiese en la falta de alguna autorización, el acto podrá ser convalidado mediante el otorgamiento de la misma por el órgano competente.',
      },
      {
        id: OptionEnum.C,
        text: 'Subsanando los vicios de que adolezca el acto dictado prescindiendo total y absolutamente del procedimiento legalmente establecido.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 176,
    text: '¿Qué recurso administrativo procede contra la aprobación de una disposición administrativa de carácter general?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'No cabe recurso en vía administrativa.',
      },
      {
        id: OptionEnum.B,
        text: 'Procede la interposición de recurso de reposición, al tratarse de un acto que agota la vía administrativa.',
      },
      {
        id: OptionEnum.C,
        text: 'Procede la interposición de recurso de alzada, si produce indefensión o perjuicio irreparable a derechos e intereses legítimos.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 177,
    text: 'Un ciudadano quiere interponer un recurso de reposición contra una resolución del Presidente del Cabildo Insular de Tenerife basado únicamente en la nulidad del reglamento orgánico de la Corporación, ¿qué debe hacer?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Interponer el recurso directamente ante el Pleno del Cabildo Insular de Tenerife.',
      },
      {
        id: OptionEnum.B,
        text: 'Interponer el recurso únicamente ante el Presidente del Cabildo Insular de Tenerife.',
      },
      {
        id: OptionEnum.C,
        text: 'No procede la interposición del recurso, si no se ha impugnado previamente el reglamento orgánico de la Corporación ante la Sala de lo ContenciosoAdministrativo del Tribunal Superior de Justicia de Canarias.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 178,
    text: '¿La interposición de un recurso administrativo suspende la ejecución del acto impugnado?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Siempre, para evitar los perjuicios que pueda causar al recurrente la eficacia inmediata del acto recurrido.',
      },
      {
        id: OptionEnum.B,
        text: 'No suspende la ejecución del acto nunca.',
      },
      {
        id: OptionEnum.C,
        text: 'Se puede acordar la suspensión de la ejecución del acto impugnado cuando concurran determinadas circunstancias.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 179,
    text: '¿Es posible en algún caso que se prolongue la suspensión de la ejecutividad del acto después de agotada la vía administrativa?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Se puede prolongar una vez agotada la vía administrativa, si el interesado interpusiera en plazo recurso contencioso-administrativo y solicitara en este procedimiento la suspensión del acto objeto del proceso, hasta que se pronuncie al respecto el juzgado o tribunal correspondiente.',
      },
      {
        id: OptionEnum.B,
        text: 'No se puede prolongar una vez agotada la vía administrativa porque el acto, agotada la vía, es inmediatamente ejecutivo.',
      },
      {
        id: OptionEnum.C,
        text: 'Una vez resuelto el recurso de alzada o reposición por el órgano competente o producido el silencio administrativo negativo, no cabe la suspensión de la ejecutividad del acto, salvo que se inste la misma como pieza separada ante el juzgado o tribunal competente.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 180,
    text: '¿Puede la resolución de un recurso administrativo entrar a valorar cuestiones no alegadas por el interesado?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'No puede entrar nunca a valorar cuestiones no alegadas por el interesado, en virtud del principio de congruencia de la resolución administrativa.',
      },
      {
        id: OptionEnum.B,
        text: 'No puede entrar nunca a valorar cuestiones no alegadas por el interesado, en virtud del principio de reformatio in peius.',
      },
      {
        id: OptionEnum.C,
        text: 'Si puede entrar a valorar cuestiones no alegadas por el interesado, pero se ha de oír al interesado con carácter previo.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 181,
    text: '¿Qué recurso procede contra un acto de desestimación de un recurso de alzada?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Procede en todo caso la interposición de recurso extraordinario de revisión.',
      },
      {
        id: OptionEnum.B,
        text: 'Únicamente, procede recurso contencioso-administrativo.',
      },
      {
        id: OptionEnum.C,
        text: 'Procede la interposición de recurso de reposición potestativo o recurso contencioso-administrativo.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 182,
    text: '¿Contra qué actos se puede interponer recurso de revisión en el plazo de cuatro años, contado desde que se notificó el acto recurrido?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Contra actos que no son firmes en vía administrativa.',
      },
      {
        id: OptionEnum.B,
        text: 'En todo caso, contra resoluciones dictadas como consecuencia de prevaricación y cohecho, que hayan sido declaradas en virtud de sentencia judicial firme.',
      },
      {
        id: OptionEnum.C,
        text: 'Cuando al dictarse el acto se haya incurrido en error de hecho que resulte de los propios documentos incorporados al expediente.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 183,
    text: 'Un particular interpone un recurso de alzada contra una resolución de un Director del Cabildo Insular de Tenerife y solicita la suspensión del acto impugnado ¿qué respuesta es correcta?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'El recurso de alzada y la solicitud de suspensión deben ser resueltas y notificadas en el plazo de tres meses, y en caso que no se resuelvan y notifiquen en el indicado plazo, se pueden entender desestimadas en los dos casos.',
      },
      {
        id: OptionEnum.B,
        text: 'El recurso de alzada debe ser resuelto y notificado en el plazo de tres meses, y la solicitud de suspensión en el plazo de un mes.',
      },
      {
        id: OptionEnum.C,
        text: 'El recurso de alzada debe ser resuelto y notificado en el plazo de tres meses, y la solicitud de suspensión en el plazo de un mes, y si no se resuelven en el citado plazo se procede la estimación por silencio tanto de uno como de otro, en todo caso.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 184,
    text: '¿Puede interponerse recurso de alzada contra la resolución de un recurso de reposición?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Sí, porque el precepto no lo excluye.',
      },
      {
        id: OptionEnum.B,
        text: 'No, porque el recurso de alzada sólo procede contra actos que no agotan la vía administrativa.',
      },
      {
        id: OptionEnum.C,
        text: 'Sí, si se trata de órganos jerárquicamente dependientes.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 185,
    text: '¿Contra cuál de los siguientes actos administrativos procede la interposición del recurso de reposición?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Contra las disposiciones administrativas de carácter general.',
      },
      {
        id: OptionEnum.B,
        text: 'Contra los actos que agoten la vía administrativa.',
      },
      {
        id: OptionEnum.C,
        text: 'Contra los actos firmes en vía administrativa, sin perjuicio de la interposición con carácter previo y dentro de los plazos establecidos, del recurso extraordinario de revisión.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 186,
    text: '¿Cuándo puede la Administración inadmitir un recurso de alzada o de reposición?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Cuando se alegue una causa de nulidad de pleno derecho o de anulabilidad del acto administrativo.',
      },
      {
        id: OptionEnum.B,
        text: 'Cuando se haya producido un error o no se haya calificado correctamente el recurso por parte del recurrente.',
      },
      {
        id: OptionEnum.C,
        text: 'Cuando el recurrente carezca de legitimación activa o se trata de un acto no susceptible de recurso, entre otros.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 187,
    text: '¿La Administración puede acordar la suspensión del plazo para resolver un recurso de alzada o de reposición?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Sí, cuando se hayan interpuesto varios recursos contra el mismo acto administrativo y existiera pendiente de resolver un recurso judicial contra el acto expreso o presunto recurrido en alzada o reposición.',
      },
      {
        id: OptionEnum.B,
        text: 'No, porque si no se resuelven y notifican los mismos en el plazo legalmente establecido, se produce la desestimación presunta y la parte interesada puede interponer recurso contencioso-administrativo.',
      },
      {
        id: OptionEnum.C,
        text: 'Sí, cuando la impugnación se fundamente en alguna de las causas de nulidad de pleno derecho previstas legalmente.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 188,
    text: '¿Qué órgano es competente para resolver un recurso administrativo de revisión y qué trámite requiere la sustanciación de este recurso?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'El mismo que dictó el acto impugnado y se requiere dictamen del Consejo de Estado u órgano consultivo de la Comunidad Autónoma.',
      },
      {
        id: OptionEnum.B,
        text: 'El superior jerárquico del órgano que dictó el acto impugnado y sólo se requiere dictamen del Consejo de Estado u órgano consultivo de la Comunidad Autónoma cuando se invoque una causa de nulidad de pleno derecho prevista en la ley de procedimiento.',
      },
      {
        id: OptionEnum.C,
        text: 'En todo caso el Alcalde o Presidente de la Corporación correspondiente.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 189,
    text: '¿Cuándo debe la Administración otorgar audiencia a terceros interesados en relación con la interposición de un recurso de alzada o de reposición contra un acto administrativo?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'En todo caso.',
      },
      {
        id: OptionEnum.B,
        text: 'Solo debe otorgar audiencia a terceros interesados cuando hayan surgido nuevos hechos o documentos no recogidos en el expediente originario.',
      },
      {
        id: OptionEnum.C,
        text: 'Cuando se esté alegando una causa de nulidad de pleno derecho del procedimiento administrativo en cuestión.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 190,
    text: '¿Contra cuál de los siguientes actos procede la interposición de recurso de alzada?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Contra la resolución administrativa de los procedimientos de responsabilidad patrimonial.',
      },
      {
        id: OptionEnum.B,
        text: 'Contra la aprobación de las disposiciones administrativas de carácter general.',
      },
      {
        id: OptionEnum.C,
        text: 'Entre otros, contra los actos de trámite que decidan directa o indirectamente el fondo del asunto.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 191,
    text: '¿Qué efectos conlleva la interposición de un recurso de alzada contra la desestimación presunta de una solicitud por el transcurso del plazo para resolver y notificar?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Se entiende estimado por silencio administrativo positivo si la Administración no resuelve en plazo.',
      },
      {
        id: OptionEnum.B,
        text: 'Se entiende desestimado en todo caso, por cuanto se trata de un procedimiento de impugnación de actos y disposiciones y en este caso siempre el silencio es negativo.',
      },
      {
        id: OptionEnum.C,
        text: 'Se entiende desestimado, y contra la desestimación del mismo solo procede la interposición de recurso contencioso-administrativo.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 192,
    text: 'Un interesado detecta que la Administración, a la hora de dictar una resolución administrativa, ha incurrido en error de hecho, que resulta de los documentos integrantes del expediente, ¿Qué puede hacer?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Puede impugnar la resolución a través del recurso de alzada o reposición, según proceda, si no ha transcurrido el plazo legalmente establecido para ello.',
      },
      {
        id: OptionEnum.B,
        text: 'En todo caso, puede impugnar la resolución a través del recurso de revisión, independientemente del tiempo que haya transcurrido.',
      },
      {
        id: OptionEnum.C,
        text: 'Únicamente puede impugnar la resolución ante la jurisdicción contenciosoadministrativa, una vez sea firme el acto en vía administrativa.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 193,
    text: '¿Qué respuesta es correcta en relación con el recurso potestativo de reposición?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Solo puede interponerse cuando concurran determinados supuestos previstos legalmente, como el error de hecho.',
      },
      {
        id: OptionEnum.B,
        text: 'Puede interponerse contra cualquier acto que ponga fin a la vía administrativa.',
      },
      {
        id: OptionEnum.C,
        text: 'El recurso de reposición tiene naturaleza preceptiva y se ha de interponer con carácter previo a la interposición del recurso contencioso-administrativo.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 194,
    text: 'Si la Administración no resuelve y notifica los recursos administrativos en el plazo legalmente establecido, ¿cuáles son los efectos del silencio administrativo?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Desestimación por silencio administrativo en todos los casos.',
      },
      {
        id: OptionEnum.B,
        text: 'Estimación, salvo en el recurso de reposición.',
      },
      {
        id: OptionEnum.C,
        text: 'Estimación, salvo en el supuesto del recurso de alzada interpuesto contra una desestimación presunta.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 195,
    text: '¿Qué respuesta es correcta en relación con la sustitución del recurso de alzada o reposición por otros procedimientos de impugnación, reclamación, conciliación, mediación o arbitraje?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'El recurso de reposición no puede ser sustituido por los procedimientos anteriores, dado su carácter potestativo.',
      },
      {
        id: OptionEnum.B,
        text: 'Los recursos de alzada y reposición pueden ser sustituidos por estos procedimientos, pero lo ha de establecer una ley en supuestos o ámbitos sectoriales determinados.',
      },
      {
        id: OptionEnum.C,
        text: 'Los recursos de alzada y reposición pueden ser sustituidos por estos procedimientos cuando los interesados en el procedimiento lo soliciten y ambas partes se pongan de acuerdo en el plazo para su resolución.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 196,
    text: 'Cuando una Administración pública pretenda interponer recurso contenciosoadministrativa contra otra Administración pública:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'La Administración podrá requerir a la primera previamente para que derogue la disposición, anule o revoque el acto, haga cesar o modifique la actuación material, o inicie la actividad a que esté obligada.',
      },
      {
        id: OptionEnum.B,
        text: 'La Administración deberá interponer previamente recurso de reposición o alzada, según proceda, contra el acto desestimatorio por silencio administrativo formulado contra la misma.',
      },
      {
        id: OptionEnum.C,
        text: 'La Administración deberá solicitar de la otra administración previamente y por escrito que declare el acto lesivo para el interés público, mediante acuerdo del órgano competente.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 197,
    text: '¿Qué acto procesal da inicio al procedimiento contencioso-administrativo?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'La demanda judicial interpuesta por la parte recurrente siempre, acompañada del documento o documentos en que el actor funde su derecho y aquellos otros documentos previstos en la ley de la jurisdicción contencioso-administrativa.',
      },
      {
        id: OptionEnum.B,
        text: 'El escrito que cita la disposición, acto, inactividad o actuación material de vía de hecho que se impugne, solicitando que se tenga por interpuesto el recurso, salvo que se trate de un asunto que se tramite por el procedimiento abreviado.',
      },
      {
        id: OptionEnum.C,
        text: 'El documento que acredite la representación del compareciente, el documento que acredite la legitimación del actor, la copia del acto o disposición que se recurre y el documento que acredite el cumplimiento de los requisitos exigidos para entablar acciones las personas jurídicas, en su caso.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 198,
    text: '¿Cuál es el plazo para la interposición de un recurso contenciosoadministrativo?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Dos meses, tanto si se pretende la impugnación de un acto expreso que ponga fin a la vía administrativa, como si se trata de la impugnación de un acto presunto.',
      },
      {
        id: OptionEnum.B,
        text: 'Diez días en el caso que el mismo se dirija contra una actuación en vía de hecho.',
      },
      {
        id: OptionEnum.C,
        text: 'Seis meses en todo caso, y se contará a partir del mismo día a aquel en que se notifique el acto o se produzca la desestimación presunta de la solicitud.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 199,
    text: '¿Qué ocurre si la Administración no remite al Juzgado o Tribunal el expediente administrativo en el plazo de 20 días hábiles otorgado al efecto?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Se reiterará la reclamación.',
      },
      {
        id: OptionEnum.B,
        text: 'Se impondrá directamente una multa coercitiva de 300 a 1200 euros a la autoridad política responsable, siendo la misma reiterada cada mes, hasta el cumplimento de lo requerido.',
      },
      {
        id: OptionEnum.C,
        text: 'Si la Administración no remite al Juzgado o Tribunal el expediente en el plazo de 20 días se impondrá una multa de 300 a 1200 euros exclusivamente al empleado responsable de la tramitación del procedimiento.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 200,
    text: '¿Qué respuesta es correcta en relación a los emplazamientos de las partes en un proceso contencioso-administrativo?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Los emplazamientos se realizarán a través del correspondiente edicto en el periódico oficial que proceda, atendiendo al ámbito territorial de competencia del órgano autor de la actividad administrativa recurrida.',
      },
      {
        id: OptionEnum.B,
        text: 'Los emplazamientos a los posibles interesados se realizarán por el Juzgado o Tribunal mediante providencia, indicándoles que pueden personarse en el procedimiento en el plazo de 9 días.',
      },
      {
        id: OptionEnum.C,
        text: 'El emplazamiento de la Administración se entiende efectuado por la reclamación del expediente.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 201,
    text: 'Según la ley de la jurisdicción contencioso-administrativa, la sentencia declarará la inadmisibilidad del recurso interpuesto por la parte actora en los siguientes supuestos:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Cuando el recurso tuviera por objeto disposiciones, actos o actuaciones no susceptibles de impugnación.',
      },
      {
        id: OptionEnum.B,
        text: 'Cuando la parte actora no acompañe a la demanda los documentos preceptivos exigidos legalmente, previo requerimiento de subsanación por plazo de diez días naturales.',
      },
      {
        id: OptionEnum.C,
        text: 'Cuando se ajuste a derecho la disposición, acto o actuación impugnada, previa tramitación del procedimiento contencioso-administrativo correspondiente.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 202,
    text: '¿Cuál de las siguientes afirmaciones es una especialidad del procedimiento contencioso-administrativo abreviado?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Todos los plazos se reducen a la mitad, en particular el plazo para contestar la demanda por escrito.',
      },
      {
        id: OptionEnum.B,
        text: 'El plazo para interponer el recurso será de 10 días, los cuales se computarán, según los casos, desde el día siguiente al de notificación del acto, publicación de la disposición impugnada, requerimiento para el cese de la vía de hecho, o transcurso del plazo fijado para la resolución, sin más trámites.',
      },
      {
        id: OptionEnum.C,
        text: 'El demandante puede pedir que se dicte sentencia sin vista ni recibimiento a prueba en el escrito de demanda.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 203,
    text: '¿Qué sentencias de un juzgado contencioso-administrativo pueden ser recurridas a través del recurso de apelación?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Las sentencias que versen sobre asuntos cuya cuantía no exceda de 30.000 euros.',
      },
      {
        id: OptionEnum.B,
        text: 'Las sentencias que versen sobre asuntos relativos a materia electoral.',
      },
      {
        id: OptionEnum.C,
        text: 'Las sentencias que resuelvan impugnaciones indirectas de disposiciones generales.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 204,
    text: '¿Puede ser impugnada una sentencia dictada en única instancia por un juzgado de lo contencioso-administrativo?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Sí, en casación cuando contenga doctrina gravemente dañosa para los intereses generales y sea susceptible de extensión de efectos.',
      },
      {
        id: OptionEnum.B,
        text: 'Sí, si el recurso pretende fundarse en infracción de normas de derecho estatal o de la unión europea que sean relevantes y determinantes del fallo impugnado.',
      },
      {
        id: OptionEnum.C,
        text: 'No, en ningún caso.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 205,
    text: '¿Qué respuesta es correcta en relación al trámite de conclusiones de un procedimiento contencioso-administrativo ordinario?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'El trámite de conclusiones se realizará de forma simultánea por la parte demandante y demandada.',
      },
      {
        id: OptionEnum.B,
        text: 'El trámite de conclusiones se realizará de forma sucesiva para la parte demandante y demandada, pero simultánea para cada grupo de partes si en alguno de ellos hubiere comparecido más de una persona y no actuaran con un mismo representante.',
      },
      {
        id: OptionEnum.C,
        text: 'El trámite de conclusiones se realizará siempre a través de una vista y concluida la misma el juez o tribunal declarará que el pleito ha quedado concluso para sentencia.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 206,
    text: '¿Qué son las alegaciones previas en el procedimiento contenciosoadministrativo?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Son alegaciones de la parte demandada, formuladas dentro del plazo de 20 días otorgado por el Juzgado para remitir el expediente administrativo, que tienen como objeto poner en conocimiento del mismo el estado de la tramitación del procedimiento.',
      },
      {
        id: OptionEnum.B,
        text: 'Son alegaciones de la parte demandada, formuladas dentro del plazo de 5 días otorgado para contestar la demanda, exponiendo la incompetencia del órgano jurisdiccional o la inadmisibilidad del recurso.',
      },
      {
        id: OptionEnum.C,
        text: 'Son alegaciones de la parte demandante, formuladas dentro del plazo de 5 días, contado a partir del día siguiente al de recepción en el Juzgado del expediente administrativo, para intentar alcanzar una satisfacción extraprocesal.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 207,
    text: '¿Cómo afecta en la ejecución de una sentencia de un juzgado de lo contencioso-administrativo la interposición de un recurso de apelación contra la misma?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'En todo caso impedirá siempre la ejecución provisional de la sentencia recurrida, hasta que se resuelva el citado recurso de apelación por el órgano jurisdiccional competente.',
      },
      {
        id: OptionEnum.B,
        text: 'Impedirá la ejecución provisional de la sentencia recurrida cuando la misma sea susceptible de producir situaciones irreversibles o perjuicios de imposible reparación.',
      },
      {
        id: OptionEnum.C,
        text: 'Exigirá siempre la adopción de medidas cautelares para asegurar la ejecución de la sentencia.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 208,
    text: '¿Ante qué órgano se ha de interponer el recurso de apelación contra una sentencia dictada en primera instancia por un juzgado de lo contenciosoadministrativo?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Ante la Sala de lo Contencioso-Administrativo del Tribunal Superior de Justicia correspondiente, dentro de los quince días siguientes al de notificación de la sentencia del Juzgado.',
      },
      {
        id: OptionEnum.B,
        text: 'Ante el Juzgado que hubiere dictado la sentencia que se apela y del mismo se dará traslado a las demás partes para que, en el plazo de quince días naturales pueda formular la oposición.',
      },
      {
        id: OptionEnum.C,
        text: 'Ante el Juzgado que hubiere dictado la sentencia que se apela y el apelado puede formalizar su oposición y adherirse a la apelación en los puntos en que crea que le es perjudicial la sentencia.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 209,
    text: 'Cuando la Administración es condenada por sentencia al pago de una cantidad líquida al demandante de un procedimiento contenciosoadministrativo, ¿qué debe hacer la misma?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Acordar el pago de la cantidad establecida por sentencia dentro del plazo de diez días, con cargo al crédito correspondiente de su presupuesto, que tendrá siempre la consideración de ampliable.',
      },
      {
        id: OptionEnum.B,
        text: 'Acordar el pago de la cantidad establecida por sentencia, más el interés legal del dinero, calculado desde la fecha de notificación de la sentencia.',
      },
      {
        id: OptionEnum.C,
        text: 'Instar la ejecución de la sentencia en el Juzgado, para que éste determine la cantidad exacta a abonar y los intereses de demora correspondientes.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 210,
    text: '¿Cuándo pueden extenderse los efectos de una sentencia firme que hubiera reconocido una situación jurídica individualizada a favor de una o varias personas?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Cuando se trate de materia tributaria, personal al servicio de la administración pública y unidad de mercado.',
      },
      {
        id: OptionEnum.B,
        text: 'En cualquier materia, siempre que los interesados se encuentren en idéntica situación jurídica que los favorecidos por el fallo.',
      },
      {
        id: OptionEnum.C,
        text: 'Solo si se solicita por las partes en cualquier materia en el plazo de dos meses, contados desde la última notificación de la sentencia a quienes fueron parte en el proceso.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 211,
    text: '¿Qué respuesta es correcta en relación a la cuestión incidental en orden a la ejecución de una sentencia?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Se tramitará por el letrado de la administración de justicia, el cual dará traslado de la misma a las partes para que en el plazo de diez días aleguen lo que estimen pertinente.',
      },
      {
        id: OptionEnum.B,
        text: 'Se puede promover por la administración pública, demás partes procesales y personas afectadas por el fallo de la sentencia.',
      },
      {
        id: OptionEnum.C,
        text: 'Debe ser resuelta por el juez o tribunal mediante auto en el plazo de veinte días desde que fue planteada.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 212,
    text: 'Un ciudadano quiere impugnar un acto dictado en aplicación de una disposición de carácter general, cuando no impugnó esta disposición, ¿esto es posible?:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Sí, puede impugnar el acto de aplicación de la disposición general, alegando que la misma no es conforme a derecho.',
      },
      {
        id: OptionEnum.B,
        text: 'No, no puede impugnar el acto de aplicación, porque la disposición de carácter general es firme y consentida, al no haber sido recurrida en plazo.',
      },
      {
        id: OptionEnum.C,
        text: 'Sí, puede impugnar el acto de aplicación de la disposición de carácter general, pero el Juzgado declarará la inadmisibilidad del recurso por tener por objeto un acto no susceptible de impugnación.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 213,
    text: '¿Qué respuesta es correcta en relación a la demanda en un procedimiento contencioso-administrativo abreviado?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'La demanda se ha de presentar en el plazo de veinte días hábiles, recibido el expediente administrativo y los emplazamientos correspondientes, salvo que concurra alguno de los supuestos previstos en la Ley de la Jurisdicción Contencioso-Administrativa.',
      },
      {
        id: OptionEnum.B,
        text: 'La demanda se ha de presentar de forma sucesiva por los recurrentes, en el plazo de veinte días hábiles, contados a partir del día siguiente al del requerimiento correspondiente por parte del juzgado o tribunal.',
      },
      {
        id: OptionEnum.C,
        text: 'La demanda inicia el recurso, y a la misma se han de acompañar determinados documentos establecidos en la ley de la jurisdicción contencioso-administrativa.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 214,
    text: '¿Qué respuesta es correcta en relación a la prueba en un recurso contencioso-administrativo?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'La prueba se realizará siempre por escrito en los procedimientos ordinarios, siendo el plazo para practicarla de treinta días naturales.',
      },
      {
        id: OptionEnum.B,
        text: 'La prueba de testigos no admite escritos de preguntas y repreguntas en el procedimiento abreviado.',
      },
      {
        id: OptionEnum.C,
        text: 'La prueba pericial exige la aplicación de las reglas generales sobre insaculación de peritos en el procedimiento abreviado.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 215,
    text: '¿Puede el juez o tribunal instar a las partes a llegar a un acuerdo sobre un recurso contencioso-administrativo para poner fin a la controversia?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'No, porque el desistimiento corresponde en exclusiva a la parte recurrente.',
      },
      {
        id: OptionEnum.B,
        text: 'Sí, cuando el juicio verse sobre estimación de cantidad.',
      },
      {
        id: OptionEnum.C,
        text: 'No, salvo que se trate del procedimiento de protección de derechos fundamentales.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 216,
    text: '¿Qué significan los principios de necesidad y eficacia en el ejercicio de la potestad reglamentaria por las entidades locales?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Que la iniciativa normativa debe contener la regulación imprescindible para atender la necesidad a cubrir con la norma.',
      },
      {
        id: OptionEnum.B,
        text: 'Que la iniciativa normativa debe basarse en una identificación clara de los fines perseguidos y ser el instrumento más adecuado para garantizar su consecución.',
      },
      {
        id: OptionEnum.C,
        text: 'Que la iniciativa normativa debe evitar cargas administrativas innecesarias o accesorias y racionalizar, en su aplicación, la gestión de los recursos públicos.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 217,
    text: '¿Pueden las entidades locales tipificar infracciones en sus ordenanzas?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Sí, en todo caso, siempre que su ámbito de aplicación se limite estrictamente al ámbito local.',
      },
      {
        id: OptionEnum.B,
        text: 'Sí, en defecto de normativa sectorial específica, exclusivamente en lo que se refiere a la adecuada ordenación de las relaciones de convivencia de interés local.',
      },
      {
        id: OptionEnum.C,
        text: 'Sí, en defecto de normativa sectorial específica, para asegurar, entre otros, un adecuado uso de sus servicios, instalaciones y espacios públicos.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 218,
    text: 'En el Cabildo Insular de Tenerife se está tramitando un reglamento de organización y funcionamiento de un Consejo Insular, el cual se configura como un órgano colegiado complementario, de naturaleza consultiva. ¿A qué órgano de la Administración Insular le corresponde la aprobación del proyecto de este reglamento?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Al Pleno, por ser un reglamento de naturaleza orgánica.',
      },
      {
        id: OptionEnum.B,
        text: 'Al Consejo de Gobierno Insular.',
      },
      {
        id: OptionEnum.C,
        text: 'Al Presidente.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 219,
    text: 'En el Cabildo Insular de Tenerife se está tramitando un reglamento en materia de distinciones públicas, ¿qué mayoría se exige para su aprobación por el Pleno de la Corporación Insular?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Mayoría simple de los miembros presentes.',
      },
      {
        id: OptionEnum.B,
        text: 'Voto favorable de la mayoría absoluta del número legal de miembros de la Corporación.',
      },
      {
        id: OptionEnum.C,
        text: 'Voto favorable de la mayoría absoluta de los miembros presentes.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 220,
    text: 'En el Cabildo Insular de Tenerife se pretende tramitar la aprobación de un nuevo reglamento orgánico. ¿Debe sustanciarse una consulta pública, con carácter previo a la elaboración del proyecto de la nueva norma?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'En todo caso, estableciéndose para ello el plazo que se estime prudente.',
      },
      {
        id: OptionEnum.B,
        text: 'Sí, por plazo de 30 días hábiles.',
      },
      {
        id: OptionEnum.C,
        text: 'Puede prescindirse de este trámite por tratarse de una norma organizativa del Cabildo.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 221,
    text: '¿Cuál será la mayoría exigible para la modificación del reglamento orgánico de la Corporación Insular?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Mayoría simple de los miembros presentes, al tratarse de una simple modificación y no de su aprobación.',
      },
      {
        id: OptionEnum.B,
        text: 'Voto favorable de la mayoría absoluta del número legal de miembros de la Corporación.',
      },
      {
        id: OptionEnum.C,
        text: 'Voto favorable de la mayoría absoluta de los miembros presentes.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 222,
    text: 'De las siguientes, ¿cuál no es una información que los cabildos insulares deban mantener permanentemente actualizada en materia normativa?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Textos de las sentencias que afecten a la vigencia e interpretación de las normas dictadas por la corporación.',
      },
      {
        id: OptionEnum.B,
        text: 'Resultado de la participación pública, si la hubiere.',
      },
      {
        id: OptionEnum.C,
        text: 'Solicitud de los informes preceptivos.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 223,
    text: 'En el Cabildo de Tenerife se ha decidido actualizar el logo que identifica una marca corporativa, lo que obliga a modificar el reglamento que regula dicha marca. ¿Deberá solicitarse informe jurídico al Secretario del Pleno?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'No, por tratarse de una simple modificación menor, que solo afecta al logo.',
      },
      {
        id: OptionEnum.B,
        text: 'Sí, por tratarse de la modificación de una norma jurídica que va a ser aprobada en el Pleno de la Corporación Insular.',
      },
      {
        id: OptionEnum.C,
        text: 'No, el informe jurídico debe ser solicitado a la Asesoría Jurídica.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 224,
    text: 'El Cabildo de Tenerife está tramitando un reglamento para asistir a los Municipios de la isla ¿Qué informe o informes preceptivos deberán ser solicitados en la tramitación de este reglamento?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Informe del Secretario del Pleno, por tratarse de un reglamento cuya aprobación corresponde al Pleno.',
      },
      {
        id: OptionEnum.B,
        text: 'Informe preceptivo y vinculante del Consejo Insular de Administración Territorial de Tenerife, por tratarse de un asunto que afecta a la organización de la asistencia y cooperación jurídica y técnica a los municipios de la isla.',
      },
      {
        id: OptionEnum.C,
        text: 'Informe de la Asesoría Jurídica e informe no vinculante del Consejo Insular de Administración Territorial de Tenerife.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 225,
    text: 'Durante la tramitación del procedimiento de elaboración de una iniciativa normativa en el ámbito local, ¿será preceptivo el informe de la Intervención General?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'En ningún caso.',
      },
      {
        id: OptionEnum.B,
        text: 'Entre otros supuestos, cuando se trate de normas por las que se implanten nuevos servicios o se reformen los existentes.',
      },
      {
        id: OptionEnum.C,
        text: 'En todo caso, en ejercicio del control interno de la gestión económico-financiera y presupuestaria de la entidad local.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 226,
    text: 'Una vez aprobado definitivamente un reglamento insular, ¿en qué momento entrará en vigor?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'En el momento de su publicación definitiva en el Boletín Oficial de la Provincia.',
      },
      {
        id: OptionEnum.B,
        text: 'Cuando se haya publicado completamente su texto y haya transcurrido el plazo previsto en la legislación básica de régimen local.',
      },
      {
        id: OptionEnum.C,
        text: 'Cuando se publique íntegramente en el Boletín Oficial de Canarias, y haya transcurrido el plazo previsto en la legislación básica de régimen local.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 227,
    text: '¿Por qué norma se rigen los acuerdos de establecimiento, supresión y ordenación de los tributos locales, así como las modificaciones de las correspondientes Ordenanzas fiscales?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Ley Reguladora de las Bases del Régimen Local.',
      },
      {
        id: OptionEnum.B,
        text: 'El texto refundido de la Ley Reguladora de las Haciendas Locales.',
      },
      {
        id: OptionEnum.C,
        text: 'La Ley de Procedimiento Administrativo Común de las Administraciones Públicas.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 228,
    text: '¿Qué deberán contener en todo caso las ordenanzas fiscales? Señale la respuesta incorrecta.',
    selections: [
      {
        id: OptionEnum.A,
        text: 'La determinación del hecho imponible, sujeto pasivo, responsables, exenciones, reducciones y bonificaciones, base imponible y liquidable, tipo de gravamen o cuota tributaria, período impositivo y devengo.',
      },
      {
        id: OptionEnum.B,
        text: 'Los regímenes de declaración y de ingreso.',
      },
      {
        id: OptionEnum.C,
        text: 'La adaptación de la gestión, liquidación, inspección y recaudación de los tributos locales al régimen de organización y funcionamiento interno propio de cada una de ellas.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 229,
    text: '¿Dónde debe publicar el Cabildo los anuncios de exposición de los acuerdos provisionales que haya adoptado para el establecimiento, supresión y ordenación de sus tasas?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'En el Boletín Oficial de la Provincia y en un diario de los de mayor difusión de la provincia.',
      },
      {
        id: OptionEnum.B,
        text: 'Basta con la exposición en el tablón de anuncios de la entidad y en su página web.',
      },
      {
        id: OptionEnum.C,
        text: 'Exclusivamente en el Boletín Oficial de la Provincia.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 230,
    text: '¿Cuándo entran en vigor las ordenanzas fiscales?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'A los quince días de su publicación en el Boletín Oficial de la Provincia, al igual que el resto de las ordenanzas locales.',
      },
      {
        id: OptionEnum.B,
        text: 'En el momento de su publicación definitiva en el Boletín Oficial de la Provincia, salvo que en las mismas se señale otra fecha.',
      },
      {
        id: OptionEnum.C,
        text: 'En todo caso, en el momento de su publicación definitiva en el Boletín Oficial de la Provincia.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 231,
    text: '¿Cabe recurso contra las ordenanzas fiscales?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'En ningún caso.',
      },
      {
        id: OptionEnum.B,
        text: 'Sí, recurso potestativo de reposición contra el Pleno de la Corporación local y, en su caso, recurso contencioso-administrativo.',
      },
      {
        id: OptionEnum.C,
        text: 'Sí, exclusivamente recurso contencioso-administrativo.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 232,
    text: 'Señale cuál de los siguientes no es uno de los objetivos de la Ley 40/2015, de 1 de octubre, de Régimen Jurídico del Sector Público:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Regular las bases del régimen jurídico de las Administraciones Públicas.',
      },
      {
        id: OptionEnum.B,
        text: 'Regular los principios a los que se ha de ajustar el ejercicio de la iniciativa legislativa y la potestad reglamentaria.',
      },
      {
        id: OptionEnum.C,
        text: 'Establecer los principios del sistema de responsabilidad de las Administraciones Públicas y de la potestad sancionadora.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 233,
    text: 'De conformidad con lo dispuesto en la Ley de Régimen Jurídico del Sector Público, además de los principios de buena fe y confianza legítima, la administración pública debe respetar en su actuación, entre otros, los principios de:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Proximidad a los fines institucionales.',
      },
      {
        id: OptionEnum.B,
        text: 'Celeridad y descentralización.',
      },
      {
        id: OptionEnum.C,
        text: 'Lealtad institucional.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 234,
    text: 'Las Administraciones Públicas que, en el ejercicio de sus respectivas competencias, establezcan medidas que limiten el ejercicio de derechos individuales o colectivos o exijan el cumplimiento de requisitos para el desarrollo de una actividad, deberán aplicar el principio de:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Responsabilidad en la gestión pública.',
      },
      {
        id: OptionEnum.B,
        text: 'Proporcionalidad.',
      },
      {
        id: OptionEnum.C,
        text: 'Protección del interés general.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 235,
    text: 'De los siguientes, ¿cuál no es un requisito exigido para la creación de cualquier órgano administrativo?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Determinación de su forma de integración en la Administración Pública de que se trate y su dependencia jerárquica.',
      },
      {
        id: OptionEnum.B,
        text: 'Delimitación de sus funciones y competencias.',
      },
      {
        id: OptionEnum.C,
        text: 'Estimación de los créditos necesarios para su puesta en marcha y funcionamiento.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 236,
    text: 'En relación con las instrucciones y órdenes de servicio, señale cuál de las siguientes afirmaciones es incorrecta:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'El incumplimiento de las mismas no afecta por sí solo a la validez de los actos dictados por los órganos administrativos.',
      },
      {
        id: OptionEnum.B,
        text: 'Para que produzcan efectos deben publicarse en todo caso en el boletín oficial que corresponda.',
      },
      {
        id: OptionEnum.C,
        text: 'Deben publicarse en el boletín oficial que corresponda, cuando concurran los requisitos establecidos en la legislación de régimen jurídico de las administraciones públicas.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 237,
    text: '¿Cuál de las siguientes competencias no puede ser objeto de delegación en ningún caso? Señale la respuesta incorrecta:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'La adopción de las disposiciones de carácter general.',
      },
      {
        id: OptionEnum.B,
        text: 'Las competencias que se ejerzan por delegación.',
      },
      {
        id: OptionEnum.C,
        text: 'La resolución de recursos en los órganos administrativos que hayan dictado los actos objeto de recurso.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 238,
    text: 'En el boletín oficial, según el ámbito territorial de la Administración actuante, deben publicarse siempre:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'La delegación de competencia y la delegación de firma.',
      },
      {
        id: OptionEnum.B,
        text: 'La delegación de competencia y la encomienda de gestión entre órganos y entidades de derecho público de distintas Administraciones.',
      },
      {
        id: OptionEnum.C,
        text: 'La avocación y la suplencia.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 239,
    text: 'En relación con las encomiendas de gestión, señale qué respuesta es correcta:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Solo pueden realizarse entre órganos de una misma Administración.',
      },
      {
        id: OptionEnum.B,
        text: 'Solo pueden realizarse a medios propios.',
      },
      {
        id: OptionEnum.C,
        text: 'Pueden realizarse entre órganos de una misma Administración o de diferentes Administraciones.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 240,
    text: 'Una encomienda de gestión del Cabildo de Tenerife a un Ayuntamiento:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'No necesita formalización; bastan los acuerdos de los Plenos de ambas Corporaciones.',
      },
      {
        id: OptionEnum.B,
        text: 'Debe formalizarse mediante firma de un convenio que se publicará en el boletín oficial de la comunidad autónoma.',
      },
      {
        id: OptionEnum.C,
        text: 'Debe formalizarse mediante firma de un convenio que se publicará en el boletín oficial de la provincia.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 241,
    text: 'En cuanto a la delegación de firma, señale cuál de las siguientes es la afirmación correcta:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'La delegación de firma altera la competencia del órgano delegante.',
      },
      {
        id: OptionEnum.B,
        text: 'Para su validez es necesaria su publicación.',
      },
      {
        id: OptionEnum.C,
        text: 'En las resoluciones y actos que se firmen por delegación se hará constar esta circunstancia y la autoridad de procedencia.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 242,
    text: 'Para la válida constitución del órgano colegiado, a efectos de la celebración de sesiones, deliberaciones y toma de acuerdos, se requerirá:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'La asistencia, presencial o a distancia, del Presidente y Secretario o, en su caso, de quienes les suplan, y la de la mitad, al menos, de sus miembros.',
      },
      {
        id: OptionEnum.B,
        text: 'Previa convocatoria, la asistencia, presencial o a distancia, del Presidente, el Secretario y un tercio, al menos, de sus miembros.',
      },
      {
        id: OptionEnum.C,
        text: 'Sin necesidad de convocatoria previa, la asistencia, presencial o a distancia, del Presidente, el Secretario y el acuerdo por mayoría de los asistentes.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 243,
    text: '¿Cuál de los siguientes no es un motivo de abstención en el procedimiento administrativo?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Tener interés personal en el asunto de que se trate o en otro en cuya resolución pudiera influir la de aquél.',
      },
      {
        id: OptionEnum.B,
        text: 'Tener amistad o enemistad con cualquiera de los interesados, con los administradores de entidades o sociedades interesadas y también con los asesores, representantes legales o mandatarios que intervengan en el procedimiento.',
      },
      {
        id: OptionEnum.C,
        text: 'Haber intervenido como perito o como testigo en el procedimiento de que se trate.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 244,
    text: 'En relación con la recusación regulada en la Ley de Régimen Jurídico del Sector Público, señale cuál de las siguientes afirmaciones es correcta:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Debe ser promovida por los interesados necesariamente antes que se inicie la tramitación del correspondiente procedimiento administrativo.',
      },
      {
        id: OptionEnum.B,
        text: 'Contra las resoluciones adoptadas en esta materia cabe la interposición de recursos administrativos.',
      },
      {
        id: OptionEnum.C,
        text: 'La recusación se planteará por escrito en el que se expresará la causa o causas en que se funda.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 245,
    text: '¿Quiénes pueden participar en los consorcios?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Exclusivamente las Administraciones Públicas territoriales y las Universidades.',
      },
      {
        id: OptionEnum.B,
        text: 'Administraciones Públicas, entidades integrantes del sector público institucional y entidades privadas.',
      },
      {
        id: OptionEnum.C,
        text: 'Solo las Administraciones Públicas y las entidades integrantes del sector público institucional.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 246,
    text: 'En relación con el personal de los consorcios, señale cuál de las siguientes afirmaciones es correcta:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Solo puede estar integrado por funcionarios procedentes de las entidades consorciadas.',
      },
      {
        id: OptionEnum.B,
        text: 'Puede estar integrado por personal funcionario o laboral procedente de las entidades consorciadas o, excepcionalmente, contratado directamente por el consorcio.',
      },
      {
        id: OptionEnum.C,
        text: 'Solo podrá ser personal laboral contratado directamente por el consorcio.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 247,
    text: 'En relación con los consorcios, señale cuál de las siguientes afirmaciones es incorrecta:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'En el supuesto de que participen en el consorcio entidades privadas, el consorcio podrá tener ánimo de lucro.',
      },
      {
        id: OptionEnum.B,
        text: 'Cualquier cambio de adscripción a una Administración Pública, cualquiera que fuere su causa, conllevará la modificación de los estatutos del consorcio.',
      },
      {
        id: OptionEnum.C,
        text: 'Los consorcios pueden realizar actividades de fomento, prestacionales o de gestión común de servicios públicos.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 248,
    text: 'Para la creación de un consorcio entre Cabildos en el que participe la Administración General del Estado, se requiere:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Que su creación se autorice por ley y, con carácter previo a la suscripción del convenio de creación, autorización del Consejo de Ministros.',
      },
      {
        id: OptionEnum.B,
        text: 'Que el convenio de creación sea autorizado y suscrito por el Ministro competente por razón de la materia.',
      },
      {
        id: OptionEnum.C,
        text: 'No está permitido que la Administración General del Estado participe en consorcios locales.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 249,
    text: 'En las disoluciones de los consorcios locales, ¿cómo se calcula la cuota de liquidación que corresponde a cada miembro del Consorcio?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Con carácter preferente se tendrá en cuenta la participación en los ingresos que, en su caso, cada miembro hubiera recibido durante el último año.',
      },
      {
        id: OptionEnum.B,
        text: 'Se tendrá en cuenta el porcentaje de las aportaciones que haya efectuado cada miembro del consorcio en el momento de su constitución.',
      },
      {
        id: OptionEnum.C,
        text: 'Conforme a lo establecido en los estatutos.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 250,
    text: 'De conformidad con lo dispuesto en el ROCIT, el inicio de los procedimientos sancionadores del Cabildo de Tenerife corresponde:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Al Consejo de Gobierno Insular si la cuantía de la multa propuesta es superior a 30.000 euros y a los Consejeros Insulares de Área en los restantes casos.',
      },
      {
        id: OptionEnum.B,
        text: 'A la Jefatura de Servicio Administrativo, a propuesta del Instructor.',
      },
      {
        id: OptionEnum.C,
        text: 'A los Consejeros Insulares de Área, en todo caso.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 251,
    text: 'Son principios, entre otros, de la potestad sancionadora de la Administración:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Legalidad y derecho de abstención del instructor.',
      },
      {
        id: OptionEnum.B,
        text: 'Tipicidad de la conducta y proporcionalidad de la sanción.',
      },
      {
        id: OptionEnum.C,
        text: 'Derecho de audiencia y publicidad de las actuaciones.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 252,
    text: 'Cuando la Administración imponga una sanción pecuniaria por el incumplimiento de una obligación que corresponda a varias personas conjuntamente:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Todas ellas responderán de forma solidaria, sin excepciones.',
      },
      {
        id: OptionEnum.B,
        text: 'Responderán mancomunadamente, por partes iguales.',
      },
      {
        id: OptionEnum.C,
        text: 'La multa se individualizará, si es posible, en función del grado de participación.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 253,
    text: '¿Qué criterios, entre otros, se tendrán en cuenta en la graduación de las sanciones administrativas?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'La reincidencia en la comisión de infracciones, cuando las sanciones hayan sido confirmadas en vía judicial.',
      },
      {
        id: OptionEnum.B,
        text: 'La reincidencia, por la comisión de una infracción de la misma naturaleza cuando así haya sido declarada por resolución firme en vía administrativa.',
      },
      {
        id: OptionEnum.C,
        text: 'La intensidad, naturaleza y gravedad de los perjuicios causados a los bienes de dominio público, en todo caso.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 254,
    text: 'El funcionario que está tramitando un procedimiento sancionador se percata de que la Ley que resulta de aplicación no fija plazos de prescripción. En la instrucción del procedimiento la infracción ha sido calificada como grave de carácter continuado. ¿Qué plazo de prescripción deberá aplicarse?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Tres años.',
      },
      {
        id: OptionEnum.B,
        text: 'Dos años desde que finalizó la conducta infractora.',
      },
      {
        id: OptionEnum.C,
        text: 'Dos años desde que fueron denunciados los hechos.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 255,
    text: '¿Existe algún supuesto en el que no puedan ser sancionados hechos que lo hayan sido penal o administrativamente con anterioridad?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Sí, basta que se aprecie identidad de sujeto y de hecho.',
      },
      {
        id: OptionEnum.B,
        text: 'Sí, cuando se aprecie identidad de sujeto, hecho y fundamento.',
      },
      {
        id: OptionEnum.C,
        text: 'Sí, para evitar la nueva sanción tan solo se requiere identidad de sujeto y fundamento.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 256,
    text: 'Las propuestas de resolución en los procedimientos de carácter sancionador:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Serán motivadas, con sucinta referencia de hechos y fundamentos de derecho.',
      },
      {
        id: OptionEnum.B,
        text: 'No exigen motivación cuando existan pruebas de culpabilidad del infractor.',
      },
      {
        id: OptionEnum.C,
        text: 'Solo serán motivadas con una sucinta referencia de fundamentos de derecho.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 257,
    text: 'El procedimiento sancionador se inicia:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Bien de oficio, por acuerdo del órgano competente, o bien automáticamente si hay denuncia de persona interesada.',
      },
      {
        id: OptionEnum.B,
        text: 'De oficio, por acuerdo del instructor.',
      },
      {
        id: OptionEnum.C,
        text: 'Siempre de oficio por acuerdo del órgano competente.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 258,
    text: '¿Pueden iniciarse nuevos procedimientos de carácter sancionador por hechos o conductas tipificadas como infracciones en cuya comisión el infractor persista de forma continuada?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'No, en tanto no haya recaído una primera resolución sancionadora, con carácter ejecutivo.',
      },
      {
        id: OptionEnum.B,
        text: 'No, en tanto no haya recaído una primera resolución sancionadora, independientemente de su carácter ejecutivo.',
      },
      {
        id: OptionEnum.C,
        text: 'Sí, tantas veces como denuncias se levanten por los agentes de la autoridad y, luego dichos procedimientos se tramitarán de forma acumulada.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 259,
    text: '¿Cuál es la posición jurídica del denunciante en el procedimiento sancionador administrativo?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Se convierte en parte del procedimiento en todos los casos.',
      },
      {
        id: OptionEnum.B,
        text: 'Tiene derecho a que se le comunique la incoación del procedimiento cuando las normas reguladoras del procedimiento así lo prevean.',
      },
      {
        id: OptionEnum.C,
        text: 'Tiene derecho a participar en los trámites del procedimiento, si así lo solicita en el escrito de denuncia.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 260,
    text: '¿En el acuerdo de iniciación debe constar en todo caso la calificación de los hechos que motivan la incoación del procedimiento sancionador?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Sí, en todo caso.',
      },
      {
        id: OptionEnum.B,
        text: 'Excepcionalmente, cuando no existan elementos suficientes para la calificación inicial, ésta se puede realizar en una fase posterior mediante la elaboración de un Pliego de cargos, que deberá ser notificado a los interesados.',
      },
      {
        id: OptionEnum.C,
        text: 'Con carácter general no es necesario que la calificación de los hechos conste en el acuerdo de iniciación, siempre que se concrete debidamente en la propuesta de resolución y no se cause indefensión a los interesados.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 261,
    text: '¿Puede prescindirse del trámite de audiencia en los procedimientos sancionadores?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Nunca, iría contra el derecho a una tutela judicial efectiva de los derechos y libertades de los ciudadanos.',
      },
      {
        id: OptionEnum.B,
        text: 'Sí, cuando no figuren en el procedimiento ni sean tenidos en cuenta en la resolución otros hechos ni otras alegaciones y pruebas que las aducidas por el interesado.',
      },
      {
        id: OptionEnum.C,
        text: 'Sí, cuando se declare la tramitación de urgencia.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 262,
    text: 'Para que sean aplicables reducciones sobre el importe de la sanción propuesta:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Se exige que conste la renuncia a las acciones administrativas o judiciales que pudieran corresponder al infractor.',
      },
      {
        id: OptionEnum.B,
        text: 'La efectividad de la reducción debe condicionarse al desistimiento o renuncia de cualquier acción o recurso en vía administrativa contra la sanción.',
      },
      {
        id: OptionEnum.C,
        text: 'Se debe dictar resolución expresa de conformidad.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 263,
    text: 'En los procedimientos de carácter sancionador, la propuesta de resolución:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Debe formularse, en todo caso.',
      },
      {
        id: OptionEnum.B,
        text: 'No se formulará cuando en la instrucción procedimiento se ponga de manifiesto que los hechos resultan acreditados.',
      },
      {
        id: OptionEnum.C,
        text: 'No se formulará cuando en la instrucción procedimiento se ponga de manifiesto la inexistencia de los hechos que pudieran constituir la infracción.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 264,
    text: 'En relación con la resolución de los procedimientos sancionadores, señale cuál de las siguientes afirmaciones es correcta:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Se podrán aceptar hechos distintos de los determinados en el curso del procedimiento.',
      },
      {
        id: OptionEnum.B,
        text: 'Cuando el órgano competente para resolver considere que la infracción reviste mayor gravedad que la determinada en la propuesta de resolución, se notificará al inculpado para que aporte alegaciones.',
      },
      {
        id: OptionEnum.C,
        text: 'Será ejecutiva, aunque contra ella quepan recursos ordinarios en vía administrativa, y se podrá suspender cautelarmente si el interesado manifiesta su intención de interponer dichos recursos.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 265,
    text: 'Cuando las conductas sancionadoras hubieran causado daños o perjuicios a la Administración y la cuantía destinada a indemnizar estos daños no hubiera quedado determinada en el expediente, ¿cómo se debe proceder?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Para fijar dicha cuantía debe tramitarse un procedimiento complementario, cuya resolución es susceptible de terminación convencional.',
      },
      {
        id: OptionEnum.B,
        text: 'Para fijar dicha cuantía debe solicitarse un peritaje de los daños, y una vez éstos sean concretados, deberán ser reclamados por vía judicial.',
      },
      {
        id: OptionEnum.C,
        text: 'Para fijar dicha cuantía debe tramitarse un procedimiento complementario, cuya resolución es susceptible de terminación convencional, implicando, en el caso de que ésta se produzca, el reconocimiento voluntario de su responsabilidad por el infractor.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 266,
    text: '¿Qué principios se aplican a la intervención de las entidades locales en la actividad privada de los ciudadanos?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'En todo caso, los principios de igualdad de trato, necesidad y proporcionalidad con el objetivo que se persigue.',
      },
      {
        id: OptionEnum.B,
        text: 'En todo caso, igualdad de trato, congruencia con los motivos y fines justificativos y respeto a la libertad individual.',
      },
      {
        id: OptionEnum.C,
        text: 'En todo caso, los de necesidad y respeto a la libertad individual.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 267,
    text: '¿En qué casos se someterá el ejercicio de una actividad económica a licencia?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'En ningún caso.',
      },
      {
        id: OptionEnum.B,
        text: 'Cuando concurran las circunstancias previstas legalmente.',
      },
      {
        id: OptionEnum.C,
        text: 'Las instalaciones para el ejercicio de actividad económica se sometan siempre a autorización, salvo que la ley dispense de la misma.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 268,
    text: '¿Qué respuesta es correcta en relación a la transmisión de una licencia?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Las licencias relativas a las condiciones de una obra, instalación o servicio nunca son transmisibles.',
      },
      {
        id: OptionEnum.B,
        text: 'Las licencias de ejercicio de actividades sobre bienes de dominio público nunca son transmisibles.',
      },
      {
        id: OptionEnum.C,
        text: 'Las licencias no serán transmisibles cuando el número de las que se van a otorgar sea limitado.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 269,
    text: '¿Cuál es el procedimiento para conceder o denegar una licencia por parte de una Administración Local?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'El procedimiento para conceder o denegar una licencia será el establecido por la norma o disposición específica aplicable.',
      },
      {
        id: OptionEnum.B,
        text: 'El procedimiento para conceder o denegar una licencia es el establecido en el Reglamento de Servicios de las Corporaciones Locales.',
      },
      {
        id: OptionEnum.C,
        text: 'El procedimiento para conceder o denegar una licencia es el establecido en la Ley 39/2015.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 270,
    text: 'En relación con las licencias que se conceden en atención a las cualidades de una persona, qué respuesta es correcta:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Estas licencias tienen que ser desarrolladas personalmente y de forma exclusiva por los titulares de las mismas.',
      },
      {
        id: OptionEnum.B,
        text: 'Estas licencias pueden ser cedidas a terceros siempre que se desarrolle la actividad por su titular un tiempo mínimo de un año.',
      },
      {
        id: OptionEnum.C,
        text: 'Estas licencias tienen que ser desarrolladas personalmente por los titulares de aquéllas y no mediante representación por un tercero, salvo disposición reglamentaria o acuerdo en contrario.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 271,
    text: 'Son formas de gestión de los servicios públicos locales:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'La gestión directa mediante contrato de gestión de servicios públicos.',
      },
      {
        id: OptionEnum.B,
        text: 'La gestión directa mediante entidades personificadas (organismo autónomo, entidad pública empresarial, concesión de servicios).',
      },
      {
        id: OptionEnum.C,
        text: 'La gestión directa mediante entidades personificadas (organismo autónomo, entidad pública empresarial, sociedad pública).',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 272,
    text: 'Los organismos autónomos son entidades:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'De derecho público, sin personalidad jurídica propia, tesorería y patrimonio propios y autonomía en su gestión, que desarrollarán actividades propias de la Administración Pública.',
      },
      {
        id: OptionEnum.B,
        text: 'De derecho público, con personalidad jurídica propia, tesorería y patrimonio propios y autonomía en su gestión, que desarrollarán actividades propias de la Administración Pública.',
      },
      {
        id: OptionEnum.C,
        text: 'De derecho privado, con personalidad jurídica propia, sin tesorería ni patrimonio propias, pero sí autonomía en su gestión, que desarrollarán actividades propias de la Administración Pública.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 273,
    text: 'Los recursos económicos de los organismos autónomos podrán provenir de las siguientes fuentes:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Los bienes y valores que constituyen su patrimonio y los productos y rentas de dicho patrimonio.',
      },
      {
        id: OptionEnum.B,
        text: 'Los bienes y valores que constituyen su patrimonio, estando expresamente prohibida la obtención de productos y rentas del mismo.',
      },
      {
        id: OptionEnum.C,
        text: 'Los valores que constituyen su patrimonio, no así los bienes que serán en todo caso de titularidad de la entidad local.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 274,
    text: 'Las entidades públicas empresariales, son:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Una forma característica de gestión indirecta de un servicio público, con plena autonomía en su gestión.',
      },
      {
        id: OptionEnum.B,
        text: 'Una forma característica de gestión directa de un servicio público, con plena sujeción en su gestión a las directrices de la entidad local.',
      },
      {
        id: OptionEnum.C,
        text: 'Una forma característica de gestión directa de un servicio público, con plena autonomía en su gestión.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 275,
    text: 'Los estatutos de los organismos autónomos locales y de las entidades públicas empresariales locales comprenderán los siguientes extremos:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'La determinación de los máximos órganos de dirección del organismo, que tratándose de entidades públicas empresariales han de ser necesariamente colegiados, así como su forma de designación.',
      },
      {
        id: OptionEnum.B,
        text: 'Las funciones y competencias del organismo con indicación de las potestades administrativas generales que éste pueda ejercitar y en el caso de las entidades públicas empresariales, también los órganos a los que se confiera el ejercicio de las potestades administrativas.',
      },
      {
        id: OptionEnum.C,
        text: 'No contendrán referencia alguna al régimen relativo a recursos humanos pues el personal se regirá por las mismas normas que la entidad local.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 276,
    text: 'Las sociedades mercantiles locales se regirán íntegramente, cualquiera que sea su forma jurídica:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Por el ordenamiento jurídico privado, salvo en las materias en que les sean de aplicación la normativa presupuestaria contable, de control financiero, de control de eficacia y contratación.',
      },
      {
        id: OptionEnum.B,
        text: 'En todo caso, por el ordenamiento jurídico privado.',
      },
      {
        id: OptionEnum.C,
        text: 'Exclusivamente, estarán sometidas al ordenamiento jurídico público.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 277,
    text: 'Los consorcios son entidades de derecho público, con personalidad jurídica propia diferenciada, creadas por varias Administraciones Públicas o entidades integrantes del sector público institucional, entre sí o con participación de entidades privadas:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Para el desarrollo de actividades de interés común a todas ellas dentro del ámbito de sus competencias, con excepción de la actividad de fomento, pudiendo realizar actividades prestacionales o de gestión común de servicios públicos.',
      },
      {
        id: OptionEnum.B,
        text: 'Para el desarrollo de actividades de interés común a todas ellas dentro del ámbito de sus competencias, exclusivamente para la gestión de los servicios públicos, en el marco de los convenios de cooperación transfronteriza en que participen las las Administraciones españolas.',
      },
      {
        id: OptionEnum.C,
        text: 'Para el desarrollo de actividades de interés común a todas ellas dentro del ámbito de sus competencias, pudiendo realizar actividades de fomento, prestacionales o de gestión común de servicios públicos.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 278,
    text: '¿A quién se adscriben los consorcios?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'A la Administración Pública que determinen sus estatutos.',
      },
      {
        id: OptionEnum.B,
        text: 'A la Administración Pública que determine el convenio de creación.',
      },
      {
        id: OptionEnum.C,
        text: 'A todas las Administraciones Públicas que lo integran, alternándose éstas, en todo, la Presidencia cada dos años.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 279,
    text: 'El ejercicio del derecho de separación respecto de un Consorcio debidamente constituido :',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Producirá la disolución del consorcio, en cualquier caso.',
      },
      {
        id: OptionEnum.B,
        text: 'Producirá la disolución del consorcio, salvo que el resto de sus miembros, acuerden su continuidad y siga permaneciendo en el consorcio, al menos, una administración o entidad u organismo público vinculado o dependientes de más de una Administración.',
      },
      {
        id: OptionEnum.C,
        text: 'Producirá la disolución del consorcio, salvo que el resto de sus miembros, de conformidad con lo previsto en los estatutos, acuerden su continuidad y sigan permaneciendo en el consorcio, al menos, dos Administraciones o entidades u organismos públicos vinculados o dependientes de más de una Administración.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 280,
    text: 'El régimen de contratación de las fundaciones del sector público, se ajustará:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Al ordenamiento jurídico privado.',
      },
      {
        id: OptionEnum.B,
        text: 'A la legislación sobre contratación del sector público.',
      },
      {
        id: OptionEnum.C,
        text: 'A lo que establezca su norma de creación.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 281,
    text: 'Están sujetas a la Ley de Contratos del Sector Público:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Las organizaciones empresariales y las organizaciones sindicales, en ningún caso.',
      },
      {
        id: OptionEnum.B,
        text: 'Los partidos políticos, las organizaciones sindicales y los colegios profesionales solo en determinados contratos sujetos a regulación armonizada.',
      },
      {
        id: OptionEnum.C,
        text: 'Los partidos políticos en los contratos sujetos a regulación armonizada, en todo caso.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 282,
    text: 'Forman parte del elenco de entidades del sector público establecido en la Ley de Contratos del Sector Público:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'La Agencia Española de Protección de Datos y una Universidad pública.',
      },
      {
        id: OptionEnum.B,
        text: 'Una Mutua colaboradora con la Seguridad Social y una Corporación de Derecho Público.',
      },
      {
        id: OptionEnum.C,
        text: 'Con carácter general, salvo excepciones legales, las entidades públicas empresariales, algunos fondos sin personalidad jurídica y una fundación pública.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 283,
    text: 'En relación con los negocios y contratos excluidos del ámbito de aplicación de la Ley de Contratos del Sector Público:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'No se les aplica la Ley nunca.',
      },
      {
        id: OptionEnum.B,
        text: 'Están excluidos los contratos de préstamo y operaciones de tesorería.',
      },
      {
        id: OptionEnum.C,
        text: 'No están excluidos los contratos relativos a servicios de arbitraje y conciliación.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 284,
    text: 'En relación con los negocios y contratos excluidos del ámbito de aplicación de la Ley de Contratos del Sector Público, una de las siguientes afirmaciones es correcta:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'En la compra de acciones por parte de un poder adjudicador se aplicarán los principios de la Ley.',
      },
      {
        id: OptionEnum.B,
        text: 'No están excluidos los contratos de explotación de bienes patrimoniales.',
      },
      {
        id: OptionEnum.C,
        text: 'No está excluida la prestación de servicios sociales por entidades privadas que se realice a través del otorgamiento de una autorización a las mismas.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 285,
    text: 'En relación con los negocios y contratos excluidos del ámbito de aplicación de la Ley de Contratos del Sector Público:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Están excluidos los contratos relativos a servicios financieros relacionados con la emisión, compra, venta o transferencia de valores o de otros instrumentos financieros.',
      },
      {
        id: OptionEnum.B,
        text: 'A las encomiendas de gestión se les aplica siempre la Ley en las actuaciones preparatorias.',
      },
      {
        id: OptionEnum.C,
        text: 'Ninguna de las respuestas son correctas.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 286,
    text: 'Para determinar el régimen jurídico aplicable a los contratos mixtos que comprendan prestaciones propias de dos o más contratos de obras, suministros o servicios, se atenderá:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Como regla general, al carácter de la prestación principal.',
      },
      {
        id: OptionEnum.B,
        text: 'Siempre al mayor de los valores estimados de los respectivos contratos.',
      },
      {
        id: OptionEnum.C,
        text: 'Siempre al carácter de la prestación principal',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 287,
    text: 'Respecto a los contratos mixtos regulados en Ley de Contratos del Sector Público:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Si un elemento del contrato es una obra con valor estimado superior a 50.000 euros, no requiere nunca proyecto, pero sí la elaboración y tramitación del estudio de viabilidad en determinados supuestos.',
      },
      {
        id: OptionEnum.B,
        text: 'Si el contrato contiene elementos de una concesión de obras o de una concesión de servicios, deberá acompañarse del correspondiente estudio de viabilidad y, en su caso, del anteproyecto de construcción y explotación de las obras.',
      },
      {
        id: OptionEnum.C,
        text: 'Si el contrato contiene elementos de una concesión de obras o de una concesión de servicios, requiere siempre elaborar y tramitar un proyecto técnico.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 288,
    text: 'Se consideran contratos sujetos a regulación armonizada conforme a la Ley de Contratos del Sector Público:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Siempre los servicios de protección civil por asociaciones sin ánimo de lucro, cualquiera que sea su valor estimado.',
      },
      {
        id: OptionEnum.B,
        text: 'Siempre los servicios de certificación y autenticación de documentos que deban ser prestados por un notario público, cualquiera que sea su valor estimado.',
      },
      {
        id: OptionEnum.C,
        text: 'Los servicios de transporte en ambulancia de pacientes, en función de su valor estimado.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 289,
    text: 'No se consideran contratos sujetos a regulación armonizada conforme a la Ley de Contratos del Sector Público, cualquiera que sea su valor estimado:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Aquellos cuyo objeto principal sea permitir la puesta a disposición o la explotación de redes públicas de comunicaciones o la prestación al público de uno o varios servicios de comunicaciones electrónicas.',
      },
      {
        id: OptionEnum.B,
        text: 'Los contratos de servicios adjudicados para la puesta a disposición o la explotación de redes fijas destinadas a prestar un servicio al público en relación con la producción, el transporte o la distribución de agua potable.',
      },
      {
        id: OptionEnum.C,
        text: 'Los contratos de servicios y suministros adjudicados para la puesta a disposición o la explotación de redes fijas destinadas a prestar un servicio al público en relación con la producción, el transporte o la distribución de agua potable.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 290,
    text: 'Según la Ley de Contratos del Sector Público están sujetos a regulación armonizada los contratos de obras, de concesión de obras y de concesión de servicios en el supuesto de que se trate de:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Un contrato de obras con valor estimado de 3 millones de euros.',
      },
      {
        id: OptionEnum.B,
        text: 'Una concesión de obras con un valor estimado de 6 millones de euros.',
      },
      {
        id: OptionEnum.C,
        text: 'Todos los contratos en los que pueda interponerse recurso especial.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 291,
    text: 'Conforme a la Ley de Contratos del Sector Público están sujetos a regulación armonizada los contratos de servicios cuando se trate de:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Servicios de redacción de proyectos con valor estimado de 275.000 euros.',
      },
      {
        id: OptionEnum.B,
        text: 'Servicios de organización de exposiciones, ferias y congresos con un valor estimado de 700.000 euros.',
      },
      {
        id: OptionEnum.C,
        text: 'Servicios sociales y de salud con valor estimado de 450.000 euros.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 292,
    text: 'Conforme a la Ley de Contratos del Sector Público están sujetos a regulación armonizada los contratos siguientes:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Solo los contratos de servicios y suministros previstos en la Ley que estén subvencionados, de forma directa y en más de un 50 por 100 de su importe, por entidades que tengan la consideración de Administraciones Públicas.',
      },
      {
        id: OptionEnum.B,
        text: 'Solo los contratos de obras y suministros previstos en la Ley que estén subvencionados, de forma directa y en más de un 50 por 100 de su importe, por entidades que tengan la consideración de poderes adjudicadores.',
      },
      {
        id: OptionEnum.C,
        text: 'En todo caso, los contratos de servicios previstos en la Ley que estén subvencionados, de forma directa y en más de un 50 por 100 de su importe, por entidades que tengan la consideración de poderes adjudicadores.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 293,
    text: 'Conforme a la Ley de Contratos del Sector Público, son contratos privados:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Los de creación artística y literaria.',
      },
      {
        id: OptionEnum.B,
        text: 'Solamente los de espectáculos.',
      },
      {
        id: OptionEnum.C,
        text: 'En todo caso, los servicios de radio y televisión por cable.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 294,
    text: 'Conforme a las previsiones contenidas en la Ley de Contratos del Sector Público, son contratos administrativos:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'La contratación de servicios bancarios y de inversión.',
      },
      {
        id: OptionEnum.B,
        text: 'La contratación de servicios para suscripción a bases de datos en determinados supuestos.',
      },
      {
        id: OptionEnum.C,
        text: 'La contratación, a través de un representante, de los servicios de un cantante.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 295,
    text: 'Los contratos privados de las Administraciones Públicas, conforme a la Ley de Contratos del Sector Público:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Todos se rigen en sus efectos, modificación y extinción solo por el derecho privado.',
      },
      {
        id: OptionEnum.B,
        text: 'En determinados supuestos, algunos de ellos se rigen, en todo caso, en lo relativo a la resolución de los contratos, por el derecho administrativo.',
      },
      {
        id: OptionEnum.C,
        text: 'Solo se les aplica el derecho administrativo.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 296,
    text: 'A los contratos administrativos conforme a la Ley de Contratos del Sector Público:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Nunca se les aplicará el derecho privado.',
      },
      {
        id: OptionEnum.B,
        text: 'En determinados supuestos se les aplicará el derecho privado.',
      },
      {
        id: OptionEnum.C,
        text: 'Solo se les puede aplicar el derecho administrativo.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 297,
    text: 'El arrendamiento de un bien inmueble por parte de una Administración Pública:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Es un contrato privado que se rige siempre en su preparación y adjudicación por el derecho administrativo.',
      },
      {
        id: OptionEnum.B,
        text: 'Es un contrato privado excluido de la Ley de Contratos del Sector Público.',
      },
      {
        id: OptionEnum.C,
        text: 'Es un contrato administrativo excluido de la Ley de Contratos del Sector Público.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 298,
    text: 'Respecto a los contratos de las entidades del sector público que no tengan el carácter de poderes adjudicadores:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Las actuaciones de preparación y adjudicación nunca se sujetan a la Ley de Contratos del Sector Público.',
      },
      {
        id: OptionEnum.B,
        text: 'Las actuaciones de preparación y adjudicación son impugnables en vía administrativa y, asimismo, son competencia del orden jurisdiccional contencioso-administrativo.',
      },
      {
        id: OptionEnum.C,
        text: 'Las cuestiones referidas a efectos y extinción son competencia del orden jurisdiccional civil, con excepción de las modificaciones contractuales.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 299,
    text: 'Son competencia del orden jurisdiccional contencioso-administrativo, de conformidad con la Ley de Contratos del Sector Público:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'En todo caso, las cuestiones referidas a la modificación de un contrato subvencionado regulado en dicha Ley.',
      },
      {
        id: OptionEnum.B,
        text: 'Las cuestiones referidas a efectos y extinción de los contratos de las entidades del sector público que no tengan el carácter de poderes adjudicadores.',
      },
      {
        id: OptionEnum.C,
        text: 'En relación con los contratos subvencionados, solo las cuestiones que se susciten en relación con la preparación y adjudicación.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 300,
    text: 'A los contratos privados que celebren los poderes adjudicadores que no tengan el carácter de Administraciones Públicas y cuyo objeto esté comprendido en el ámbito de la Ley de Contratos del Sector Público:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Solo se les aplica la misma para los actos de preparación y adjudicación; no se aplica nunca para los efectos y extinción.',
      },
      {
        id: OptionEnum.B,
        text: 'Se les aplica la misma para la preparación y adjudicación y, en todo caso, en materia de cesión del contrato y de condiciones especiales de ejecución.',
      },
      {
        id: OptionEnum.C,
        text: 'En cuanto a sus efectos y extinción solo les será aplicable el derecho privado.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 301,
    text: 'Respecto a la realización conjunta de contrataciones específicas en sus distintas modalidades de cooperación previstas en la Ley de Contratos del Sector Público:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Solo determinadas entidades del sector público están obligadas a realizarla.',
      },
      {
        id: OptionEnum.B,
        text: 'El resultado de la misma no es un contrato.',
      },
      {
        id: OptionEnum.C,
        text: 'En todos los supuestos se requiere siempre de la celebración del correspondiente convenio.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 302,
    text: 'El documento en el que se formalice un contrato de servicios de una Administración Pública:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Deberá definir el objeto teniendo en cuenta las consideraciones sociales, ambientales y de innovación.',
      },
      {
        id: OptionEnum.B,
        text: 'Respecto al plazo de ejecución podrá introducir una forma de cómputo de este distinta de la prevista en los pliegos.',
      },
      {
        id: OptionEnum.C,
        text: 'En determinadas ocasiones es necesario acreditar la capacidad de los firmantes.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 303,
    text: 'Los contratos que celebren los poderes adjudicadores conforme a la Ley de Contratos del Sector Público:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Todos se perfeccionan con su formalización.',
      },
      {
        id: OptionEnum.B,
        text: 'Nunca podrán ser verbales.',
      },
      {
        id: OptionEnum.C,
        text: 'Serán nulos si no contienen la referencia al sometimiento a la normativa aplicable en materia de protección de datos.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 304,
    text: 'Respecto de un encargo por el Cabildo Insular a un medio propio suyo para la realización de una obra:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Es un contrato sujeto a la Ley de Contratos del Sector Público.',
      },
      {
        id: OptionEnum.B,
        text: 'No es un sistema de cooperación vertical.',
      },
      {
        id: OptionEnum.C,
        text: 'Los negocios jurídicos que el medio propio celebre en ejecución del encargo son contratos sujetos a la Ley de Contratos del Sector Público.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 305,
    text: 'En relación con un encargo por el Cabildo a un medio propio para la prestación de servicios informáticos y tecnológicos para garantizar la confidencialidad de la información:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'El medio propio no podrá subcontratar el 55% del importe del encargo.',
      },
      {
        id: OptionEnum.B,
        text: 'El medio propio podrá subcontratar el 55% del importe del encargo.',
      },
      {
        id: OptionEnum.C,
        text: 'En los encargos no cabe la subcontratación por el medio propio.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 306,
    text: 'El responsable del contrato que se designe por el órgano de contratación:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Deberá ser una persona física o jurídica, vinculada a la entidad contratante.',
      },
      {
        id: OptionEnum.B,
        text: 'Será el Director Facultativo en los contratos de obras.',
      },
      {
        id: OptionEnum.C,
        text: 'Le corresponderá ejecutar del contrato.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 307,
    text: 'El perfil de contratante de los órganos de contratación:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Podrá contener las instrucciones internas de contratación y modelos de documentos.',
      },
      {
        id: OptionEnum.B,
        text: 'Podrá contener la composición de las mesas de contratación que asistan a los órganos de contratación con una antelación mínima de seis días con respecto a la reunión que deba celebrar.',
      },
      {
        id: OptionEnum.C,
        text: 'En todo caso, deberá contener la información relativa a los contratos menores, independientemente de su cuantía.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 308,
    text: 'Una vez formalizado un contrato de obras entre una Administración Pública y una unión temporal de empresas, se observarán las siguientes reglas:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Cuando alguna de las empresas integrantes de la unión temporal fuesen declaradas en concurso de acreedores, continuará la ejecución del contrato con la empresa o empresas restantes, en todo caso.',
      },
      {
        id: OptionEnum.B,
        text: 'Cuando alguna o algunas de las empresas integrantes de la unión temporal fuesen declaradas en concurso de acreedores continuará la ejecución del contrato con la empresa o empresas restantes siempre que estas cumplan los requisitos de solvencia o clasificación exigidos y no se hubiera abierto la fase de liquidación del concurso.',
      },
      {
        id: OptionEnum.C,
        text: 'Cuando tenga lugar respecto de alguna o algunas empresas integrantes de la unión temporal operaciones de fusión, escisión o transmisión de rama de actividad, continuará la ejecución del contrato con la unión temporal adjudicataria.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 309,
    text: 'La duración de la prohibición de contratar en la que esté incurso un contratista será:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'En los casos en que la sentencia penal firme no haya establecido plazo, la duración no podrá exceder de cinco años desde la fecha de su inscripción en el registro correspondiente.',
      },
      {
        id: OptionEnum.B,
        text: 'En los casos en los que la sentencia penal firme no haya establecido plazo, la duración no podrá exceder de cinco años desde la fecha de la condena por sentencia firme.',
      },
      {
        id: OptionEnum.C,
        text: 'La que haya establecido la sentencia penal firme, que en todo caso no podrá exceder de cinco años.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 310,
    text: 'La contratación conjunta de la elaboración del proyecto y la ejecución de las obras correspondientes podrá efectuarse:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Cuando resulte necesario por concurrir razones de urgencia debidamente motivadas en el expediente.',
      },
      {
        id: OptionEnum.B,
        text: 'Con carácter excepcional, y previa justificación en el expediente de la concurrencia del supuesto legal en que se ampare.',
      },
      {
        id: OptionEnum.C,
        text: 'Cuando las obras requieran soluciones aportadas con medios y capacidad técnica propias de las empresas justificándose en el correspondiente acto de adjudicación del contrato.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 311,
    text: 'Para los contratos de obras cuyo valor estimado sea inferior a 500.000 euros, el empresario podrá acreditar su solvencia:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Únicamente mediante su clasificación como contratista de obras en el grupo o subgrupo de clasificación correspondiente al contrato.',
      },
      {
        id: OptionEnum.B,
        text: 'Únicamente mediante la acreditación del cumplimiento de los requisitos específicos de solvencia exigidos en el anuncio de licitación o en la invitación a participar en el procedimiento y detallados en los pliegos del contrato.',
      },
      {
        id: OptionEnum.C,
        text: 'Indistintamente mediante su clasificación como contratista de obras en el grupo o subgrupo de clasificación correspondiente al contrato o bien acreditando el cumplimiento de los requisitos específicos de solvencia detallados en el pliego del contrato.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 312,
    text: 'A efectos de la clasificación de las empresas, los contratos de obras se dividirán en:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Grupos generales y subgrupos, y dentro de estos por categorías, en función de su cuantía, tomando por referencia al valor estimado del contrato, cuando la duración de este sea igual o inferior a un año, y por referencia al valor medio anual del mismo, cuando se trate de contratos de duración superior.',
      },
      {
        id: OptionEnum.B,
        text: 'Grupos generales y subgrupos, y dentro de estos por categorías, en función de su cuantía, tomando por referencia al valor estimado del contrato, cuando la duración de este sea superior a un año, y por referencia al valor medio anual del mismo, cuando se trate de contratos de duración inferior.',
      },
      {
        id: OptionEnum.C,
        text: 'Grupos generales y subgrupos, y dentro de estos por categorías, en función de las singularidades derivadas de la naturaleza de la prestación a realizar.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 313,
    text: 'Respecto de la vigencia de las clasificaciones de las empresas contratistas:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'La clasificación de las empresas tendrá una vigencia indefinida mientras se mantengan por el empresario las circunstancias en que se basó su concesión.',
      },
      {
        id: OptionEnum.B,
        text: 'Para la conservación de la clasificación deberá justificarse el mantenimiento de la solvencia económica y financiera y técnica y profesional con carácter anual.',
      },
      {
        id: OptionEnum.C,
        text: 'El empresario está obligado a poner en conocimiento del órgano de contratación cualquier variación en las circunstancias en que se basó su concesión.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 314,
    text: 'Cuando el contratista de un contrato celebrado con una administración pública, sea una empresa de nueva creación, la solvencia técnica se podrá acreditar:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'En los contratos de suministro no sujetos a regulación armonizada, mediante una relación de los principales suministros realizados de igual o similar naturaleza que los que constituyen el objeto del contrato en el curso de como máximo, los tres últimos años.',
      },
      {
        id: OptionEnum.B,
        text: 'En los contratos de obra cuyo valor estimado sea inferior a 500.000 euros, mediante una declaración indicando la maquinaria, material y equipo técnico del que se dispondrá para la ejecución de las obras.',
      },
      {
        id: OptionEnum.C,
        text: 'En los contratos de servicios sujetos a regulación armonizada, mediante los títulos académicos y profesionales del responsable de la ejecución del contrato y de los directivos de la empresa, aunque se evalúen como criterios de adjudicación.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 315,
    text: 'De conformidad con lo señalado en la Ley de Contratos del Sector Público, el importe correspondiente a la garantía provisional:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Se determinará en los pliegos de cláusulas administrativas particulares y no podrá ser superior a un 3 por 100 del presupuesto base de licitación del contrato, excluido el Impuesto sobre el Valor Añadido.',
      },
      {
        id: OptionEnum.B,
        text: 'En el caso de división en lotes se determinará en función del importe del presupuesto total del contrato.',
      },
      {
        id: OptionEnum.C,
        text: 'En los sistemas dinámicos de adquisición se fijará a tanto alzado, sin que pueda superar el 3 por 100 del presupuesto base de licitación del contrato, excluido el Impuesto sobre el Valor Añadido.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 316,
    text: 'No estarán incursas en causa de prohibición de contratar con una Administración Pública aquellas empresas:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Que hayan solicitado un aplazamiento de las deudas a la Seguridad Social.',
      },
      {
        id: OptionEnum.B,
        text: 'De 60 trabajadores que cumplan con la obligación de contar con un plan de igualdad.',
      },
      {
        id: OptionEnum.C,
        text: 'Que hayan sido sancionadas con carácter firme por infracción leve en materia de falseamiento de la competencia.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 317,
    text: 'Son circunstancias que impedirán a los empresarios contratar con una Administración Pública:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'La falta de formalización de un contrato en los plazos señalados por causa no imputable al contratista.',
      },
      {
        id: OptionEnum.B,
        text: 'Haber dado lugar a la resolución firme de cualquier contrato, por causa de la que hubieren sido declarados culpables.',
      },
      {
        id: OptionEnum.C,
        text: 'Haber incumplido cualquier cláusula del contrato, independientemente de la calificación de la infracción de los pliegos.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 318,
    text: 'La declaración de la prohibición de contratar con una Administración Pública por haber incurrido el empresario en falsedad al facilitar datos relativos a su capacidad y solvencia corresponderá:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Al Ministro de Hacienda y Función Pública previa propuesta de la Junta Consultiva de Contratación Pública del Estado, o a los órganos que resulten competentes en el ámbito de las Comunidades Autónomas.',
      },
      {
        id: OptionEnum.B,
        text: 'Al titular del departamento, presidente o director del organismo al que esté adscrita la entidad contratante en todo caso.',
      },
      {
        id: OptionEnum.C,
        text: 'Al órgano de contratación.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 319,
    text: 'Una empresa podrá recurrir a las capacidades de otras entidades para acreditar la solvencia necesaria para celebrar un contrato determinado de obras con una Administración Pública:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Siempre que se trate de entidades que pertenezcan al mismo grupo empresarial de la licitadora en el sentido de lo dispuesto en el Código de Comercio y no estén incursas en causas de prohibición para contratar.',
      },
      {
        id: OptionEnum.B,
        text: 'Tratándose de empresarios que concurran agrupados en uniones temporales de empresas deberán recurrir a las capacidades de las entidades de la propia unión temporal.',
      },
      {
        id: OptionEnum.C,
        text: 'Las empresas únicamente podrán recurrir a las capacidades de otras entidades respecto de la experiencia profesional pertinente, si estas van a ejecutar las obras para las cuales son necesarias dichas capacidades.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 320,
    text: 'A los efectos de valorar la concurrencia del requisito de clasificación respecto de los empresarios que concurran agrupados en uniones temporales en una licitación pública:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Se atenderá a las características acumuladas de cada uno de ellos, expresadas en sus respectivas clasificaciones.',
      },
      {
        id: OptionEnum.B,
        text: 'Se requerirá que todas las empresas hayan obtenido previamente la clasificación como empresa de obras, incluidas las empresas no españolas que pertenezcan a Estados miembros de la Unión Europea.',
      },
      {
        id: OptionEnum.C,
        text: 'Ninguna de las anteriores es correcta.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 321,
    text: 'La modificación de la composición de la unión temporal de empresas, durante un procedimiento de adjudicación en una licitación pública:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'No supondrá su exclusión del procedimiento.',
      },
      {
        id: OptionEnum.B,
        text: 'Supondrá su exclusión del procedimiento si la modificación supone la alteración de la participación de las empresas, aunque mantengan la misma clasificación.',
      },
      {
        id: OptionEnum.C,
        text: 'Supondrá su exclusión del procedimiento, si la modificación se produce antes de la formalización del contrato.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 322,
    text: 'Los certificados de inscripción en el Registro Oficial de Licitadores y Empresas Clasificadas del Sector Público, acreditarán:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Las condiciones de aptitud del empresario en cuanto a su personalidad y capacidad de obrar, representación, habilitación profesional o empresarial, solvencia económica y financiera y técnica y profesional, clasificación y demás circunstancias no inscritas.',
      },
      {
        id: OptionEnum.B,
        text: 'Las condiciones de aptitud del empresario a tenor de lo en ellos reflejado y salvo prueba en contrario.',
      },
      {
        id: OptionEnum.C,
        text: 'La concurrencia o no concurrencia de prohibiciones de contratar de cualquier tipo.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 323,
    text: 'El órgano de contratación podrá eximir al adjudicatario de la obligación de constituir garantía definitiva:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Atendidas las circunstancias concurrentes en el contrato, en el caso del contrato de obras, justificándolo adecuadamente en el pliego de cláusulas administrativas particulares.',
      },
      {
        id: OptionEnum.B,
        text: 'En los contratos de servicios que tengan por objeto servicios financieros justificándolo adecuadamente en el pliego de cláusulas administrativas particulares.',
      },
      {
        id: OptionEnum.C,
        text: 'Únicamente, en los contratos que tengan por objeto la prestación de servicios sociales.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 324,
    text: 'En los acuerdos marco celebrados por una Administración Pública, la garantía definitiva se fijará:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Únicamente, para cada contrato basado en relación con su importe de adjudicación.',
      },
      {
        id: OptionEnum.B,
        text: 'Estimativamente por la Administración o para cada contrato basado en relación con su importe de adjudicación.',
      },
      {
        id: OptionEnum.C,
        text: 'Si se fija estimativamente en función del acuerdo marco sólo responderá de los incumplimientos del mismo.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 325,
    text: 'Será necesario reajustar o reponer la garantía definitiva constituida en un contrato formalizado con la administración:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Cuando como consecuencia de una revisión de precios, experimente variación el precio del mismo.',
      },
      {
        id: OptionEnum.B,
        text: 'En caso de que se hagan efectivas sobre ella las penalidades exigibles al contratista hasta la cuantía que corresponda.',
      },
      {
        id: OptionEnum.C,
        text: 'En caso de que las penalidades o indemnizaciones exigibles al contratista se impongan una vez finalizado el contrato y devuelta la garantía definitiva.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 326,
    text: 'Conforme a la Ley de Contratos del Sector Público y respecto a la limitación a la participación en una licitación pública por los órganos de contratación:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'No pueden nunca y en ningún supuesto limitarla.',
      },
      {
        id: OptionEnum.B,
        text: 'Pueden, en determinados supuestos, limitarla atendiendo a la forma o al ánimo de lucro en la contratación.',
      },
      {
        id: OptionEnum.C,
        text: 'Solo pueden hacerlo en los contratos privados.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 327,
    text: 'La salvaguarda de la libre competencia en todo el procedimiento de adjudicación:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Corresponde solo a los órganos de contratación y a la mesa de contratación.',
      },
      {
        id: OptionEnum.B,
        text: 'Corresponde solo a la Comisión Nacional de los Mercados y la Competencia o, en su caso, a la autoridad autonómica competente.',
      },
      {
        id: OptionEnum.C,
        text: 'En todo caso, corresponde a la Junta Consultiva de Contratación Pública del Estado u órgano equivalente de la Comunidad Autónoma.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 328,
    text: 'En relación con la publicación del anuncio de licitación de los contratos en el Diario Oficial de la Unión Europea, la prueba de su publicación será:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'En los contratos sujetos a regulación armonizada, la confirmación de la recepción del anuncio por la Oficina de Publicaciones y la publicación de la información enviada indicando la fecha de la publicación.',
      },
      {
        id: OptionEnum.B,
        text: 'En los contratos no sujetos a regulación armonizada la confirmación de la recepción del anuncio por la Oficina de Publicaciones.',
      },
      {
        id: OptionEnum.C,
        text: 'En los contratos no sujetos a regulación armonizada no se requiere prueba porque nunca se publican en ese Diario.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 329,
    text: 'Los órganos de contratación deberán ampliar el plazo inicial de presentación de las ofertas y solicitudes de participación:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Siempre, cuando por cualquier razón no se hubiera atendido el requerimiento de información realizado con la debida antelación por los licitadores.',
      },
      {
        id: OptionEnum.B,
        text: 'Solo cuando se introduzcan las modificaciones significativas en los pliegos que establece la Ley.',
      },
      {
        id: OptionEnum.C,
        text: 'Solo en determinados supuestos cuando se requiere una visita sobre el terreno antes de la presentación de las proposiciones.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 330,
    text: 'Conforme a la Ley de Contratos del Sector Público, respecto al procedimiento abierto y en relación con los contratos no sujetos a regulación armonizada celebrados por una Administración Pública, el plazo de presentación de proposiciones:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'En uno de obras será como máximo de 35 días.',
      },
      {
        id: OptionEnum.B,
        text: 'En uno de servicios será como máximo de 20 días.',
      },
      {
        id: OptionEnum.C,
        text: 'En uno de concesión de servicios será como mínimo de 26 días.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 331,
    text: 'Los criterios cualitativos que se establezcan por el órgano de contratación para evaluar la mejor proposición en una licitación:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Pueden ir acompañados de un criterio relacionado con los costes.',
      },
      {
        id: OptionEnum.B,
        text: 'Nunca puede ser criterio cualitativo la experiencia del personal adscrito al contrato que vaya a ejecutarlo.',
      },
      {
        id: OptionEnum.C,
        text: 'Pueden incluir consideraciones sociales atendiendo al componente de la mano de obra en la prestación de que se trate.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 332,
    text: 'La ponderación de los criterios de adjudicación de las licitaciones:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'En todo caso siempre deberá recogerse en los pliegos de cláusulas administrativas particulares.',
      },
      {
        id: OptionEnum.B,
        text: 'Podrá ser sustituida en los pliegos por una enumeración decreciente de los criterios.',
      },
      {
        id: OptionEnum.C,
        text: 'Ninguna respuesta es correcta.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 333,
    text: 'Si se apreciasen indicios fundados de conductas colusorias en un procedimiento de adjudicación en tramitación:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'El órgano contratación está obligado a trasladarlos siempre a la Comisión Nacional de los Mercados y la Competencia o, en su caso, la autoridad competente autonómica.',
      },
      {
        id: OptionEnum.B,
        text: 'El órgano de contratación o la mesa están obligados a trasladarlos siempre a la Comisión Nacional de los Mercados y la Competencia o, en su caso, la autoridad competente autonómica.',
      },
      {
        id: OptionEnum.C,
        text: 'El órgano contratación está obligado a trasladarlos solamente en determinados contratos a la Comisión Nacional de los Mercados y la Competencia o, en su caso, la autoridad competente autonómica.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 334,
    text: 'En caso de que se establezcan mejoras como criterio de adjudicación en un contrato de obras:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Cuando su valoración se realice por la mesa de contratación no podrán tener una ponderación superior al 2,5 %.',
      },
      {
        id: OptionEnum.B,
        text: 'De la correcta ejecución de las prestaciones correspondientes a las mejoras en ocasiones responderá la garantía definitiva.',
      },
      {
        id: OptionEnum.C,
        text: 'Deben estar vinculadas con el objeto del contrato.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 335,
    text: 'En un contrato de servicios celebrado por una Administración Pública, ante la no previsión en los pliegos de criterios de adjudicación específicos de desempate, se aplicará:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Siempre como prioritario, el mayor porcentaje de trabajadores con discapacidad.',
      },
      {
        id: OptionEnum.B,
        text: 'Solo se aplicará como prioritario el mayor porcentaje de trabajadores con discapacidad cuando esté vinculado con el objeto del contrato.',
      },
      {
        id: OptionEnum.C,
        text: 'En todo caso como prioritario, el mayor porcentaje de mujeres empleadas en la plantilla.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 336,
    text: 'En relación con las proposiciones que se formulen por los licitadores en una licitación convocada por una Administración Pública:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Ante una oferta anormalmente baja la mesa la aceptará o rechazará.',
      },
      {
        id: OptionEnum.B,
        text: 'En determinados supuestos los pliegos deberán contener los parámetros para identificar ofertas anormales, referidos a la oferta considerada en su conjunto.',
      },
      {
        id: OptionEnum.C,
        text: 'La justificación de las ofertas en presunción de temeridad nunca alcanzará a la originalidad de las soluciones propuestas.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 337,
    text: 'Conforme a la Ley de Contratos del Sector Público, y en relación con el procedimiento negociado sin publicidad, ¿cuál de las siguientes afirmaciones es correcta?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Podrá utilizarse en un contrato de obras cuando exista proyecto base previo y hayan trascurrido en todo caso, más de 3 años desde la ejecución del contrato inicial.',
      },
      {
        id: OptionEnum.B,
        text: 'Siempre que existan varios candidatos invitados al procedimiento deberá negociarse con ellos los términos del contrato.',
      },
      {
        id: OptionEnum.C,
        text: 'Siempre podrá utilizarse en un contrato de servicios sociales a personas con discapacidad en el que sea determinante el arraigo de las mismas en el entorno de atención social.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 338,
    text: 'Conforme a la Ley de Contratos del Sector Público, en relación con el procedimiento simplificado:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'En ningún procedimiento simplificado será exigible garantía definitiva.',
      },
      {
        id: OptionEnum.B,
        text: 'En los procedimientos simplificados abreviados los criterios cualitativos no excederán del 25% o, en su caso, del 45%.',
      },
      {
        id: OptionEnum.C,
        text: 'En todo caso, en los procedimientos simplificados no abreviados serán de aplicación supletoria las normas del procedimiento abierto.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 339,
    text: 'En los supuestos de demora en la ejecución de los contratos, conforme a la Ley de Contratos del Sector Público:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Podrá ampliarse siempre el plazo de ejecución por un plazo igual al tiempo perdido.',
      },
      {
        id: OptionEnum.B,
        text: 'En todo caso, ante incumplimiento de plazos parciales, podrá resolverse el contrato si así se contempla en los pliegos de cláusulas administrativas particulares.',
      },
      {
        id: OptionEnum.C,
        text: 'Ante incumplimientos del plazo total nunca podrán imponerse penalidades diarias en la proporción de 0,45 euros por cada 1.000 euros del precio del contrato, IVA excluido.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 340,
    text: 'En el caso de un contrato en el que exista imposibilidad de ejecutar la prestación y no pueda modificarse conforme a las previsiones contenidas en la Ley de Contratos del Sector Públicos y, en el que, posteriormente, además, el contratista fallece:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Siempre procederá la resolución del contrato y se aplicarán a la misma los efectos previstos legalmente para la causa relativa a la muerte del contratista.',
      },
      {
        id: OptionEnum.B,
        text: 'Siempre procederá la resolución del contrato de mutuo acuerdo con los herederos del contratista fallecido.',
      },
      {
        id: OptionEnum.C,
        text: 'En relación con la imposibilidad de modificar el contrato, solo en determinados supuestos procederá una indemnización.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 341,
    text: 'En relación con las modificaciones de los contratos celebrados por el Cabildo de Tenerife, que estén previstas en los correspondientes pliegos de cláusulas administrativas particulares:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'No pueden alterar la naturaleza global del contrato, por lo que podrán establecerse como tales todos los supuestos de sustitución de unidades del contrato por otras diferentes.',
      },
      {
        id: OptionEnum.B,
        text: 'Nunca pueden aprobarse fuera de la vigencia del contrato.',
      },
      {
        id: OptionEnum.C,
        text: 'Pueden alcanzar hasta un mínimo del veinte por ciento del importe de adjudicación.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 342,
    text: 'En relación con las modificaciones de los contratos celebrados por el Cabildo de Tenerife, que no estén previstas en los correspondientes pliegos de cláusulas administrativas particulares:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Las que deriven de circunstancias sobrevenidas no pueden superar el límite del 50 % del precio inicial (IVA excluido) del contrato, computando únicamente en dicho límite las modificaciones previstas en el pliego y que ya estuvieran acordadas.',
      },
      {
        id: OptionEnum.B,
        text: 'No podrán tener cabida como modificaciones no sustanciales las que supongan la incorporación de unidades de obra nuevas que representen una alteración del presupuesto inicial del contrato en un 49%.',
      },
      {
        id: OptionEnum.C,
        text: 'Las modificaciones que impliquen una alteración del precio inicial del contrato (IVA excluido) del 35%, podrán dar lugar, en determinados supuestos, a la resolución del contrato.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 343,
    text: 'En relación con la subcontratación en los contratos celebrados por una Administración Pública:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'En supuestos acreditados de impagos del contratista a subcontratistas se le podrá imponer penalidades de hasta el 3% del precio del contrato como máximo, respondiendo a tal efecto la garantía definitiva.',
      },
      {
        id: OptionEnum.B,
        text: 'La comunicación y justificación de la aptitud de los subcontratistas será comunicada al órgano de contratación siempre y en todos los supuestos, tras la adjudicación y, como máximo, al inicio de la ejecución de éste.',
      },
      {
        id: OptionEnum.C,
        text: 'En determinados supuestos podrán realizarse pagos directos por la Administración a los subcontratistas.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 344,
    text: 'En los contratos de las entidades del sector público, conforme a la Ley de Contratos del Sector Público, y en relación con la revisión de precios:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Procederá siempre en todos los contratos en los que hubieran transcurrido como máximo dos años desde la formalización de los contratos.',
      },
      {
        id: OptionEnum.B,
        text: 'Serán revisables los gastos generales en la revisión periódica y predeterminada.',
      },
      {
        id: OptionEnum.C,
        text: 'En la revisión periódica y predeterminada de un contrato de obras nunca se computa el primer 20% ya ejecutado del contrato.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 345,
    text: 'Con arreglo a la Ley de Contratos del Sector Público, éstos serán nulos de pleno derecho:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'En algunos casos, cuando no se publique el anuncio de formalización del contrato, ni el de la formalización de los encargos.',
      },
      {
        id: OptionEnum.B,
        text: 'Siempre, en los contratos sujetos a regulación armonizada, cuando las modificaciones no previstas no se limiten a introducir las variaciones estrictamente indispensables.',
      },
      {
        id: OptionEnum.C,
        text: 'Siempre, en los supuestos en los que el contratista no haya recogido en la declaración responsable, que había dejado de formalizar un contrato en el plazo establecido por causas imputables a él, dando lugar a la resolución del contrato.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 346,
    text: 'Conforme a la Ley de Contratos del Sector Público, la revisión de oficio de los actos dictados con motivo de la celebración de un contrato, se realizará:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Siempre cuando se trate de actos preparatorios y de adjudicación de entidades que no sean Administraciones Públicas.',
      },
      {
        id: OptionEnum.B,
        text: 'Solo cuando no se trate de actos preparatorios.',
      },
      {
        id: OptionEnum.C,
        text: 'Solo cuando se trate de actos preparatorios y de adjudicación de Administraciones Públicas.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 347,
    text: 'Podrá interponerse recurso especial en materia de contratación:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'En todo caso, contra los actos de la mesa de contratación de admisión o inadmisión de candidatos o licitadores.',
      },
      {
        id: OptionEnum.B,
        text: 'En todo caso, contra los actos de la mesa de contratación de aceptación o rechazo de ofertas.',
      },
      {
        id: OptionEnum.C,
        text: 'En todo caso, contra los actos de la mesa de contratación de admisión o inadmisión de candidatos o licitadores y en los contratos tramitados mediante emergencia.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 348,
    text: 'En relación con los recursos especiales en materia de contratación:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Podrá interponerse solo contra los actos dictados por el órgano de contratación de encargos a medios propios.',
      },
      {
        id: OptionEnum.B,
        text: 'La adopción de medidas cautelares respecto de la que no se haya dictado resolución, se acumulará al recurso especial que se interponga con posterioridad a la solicitud de las medidas cautelares.',
      },
      {
        id: OptionEnum.C,
        text: 'Las organizaciones sindicales y las organizaciones empresariales estarán legitimadas para interponerlo solo en los supuestos de encargos a medios propios.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 349,
    text: 'Cuando se haya iniciado un expediente de resolución de un contrato con arreglo a la Ley de Contratos del Sector Público:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Se podrá aplicar al procedimiento que se inicie para adjudicar el nuevo contrato la tramitación de urgencia, en los supuestos en los que la causa de la resolución sea la demora en la ejecución de los plazos.',
      },
      {
        id: OptionEnum.B,
        text: 'Se aplicará al procedimiento de resolución contractual la tramitación de urgencia en los supuestos que se fundamenten en la causa de mutuo acuerdo prevista legalmente, así como en todos los de imposibilidad de ejecución del contrato.',
      },
      {
        id: OptionEnum.C,
        text: 'En el supuesto de imposibilidad de ejecución del contrato en modificaciones contractuales no previstas en el pliego, cuando el contratista rechace una modificación del 45% del precio inicial (IVA excluido), se aplicará la tramitación de urgencia al procedimiento que se inicie para adjudicar el nuevo contrato.',
      },
    ],
    solution: OptionEnum.C,
  },
  {
    id: 350,
    text: 'Con arreglo a la Ley de Contratos del Sector Público, en relación con los actos preparatorios de los contratos de obras:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Deberá elaborarse y aprobarse siempre un proyecto técnico y el correspondiente estudio geotécnico.',
      },
      {
        id: OptionEnum.B,
        text: 'Solo en los supuestos que excedan de las cuantías previstas legalmente deberá elaborarse y aprobarse siempre el correspondiente proyecto técnico.',
      },
      {
        id: OptionEnum.C,
        text: 'Se requiere proyecto técnico en caso de un contrato con prestaciones de asesoramiento y de ejecución de una obra con valor estimado de 55.000 euros.',
      },
    ],
    solution: OptionEnum.B,
  },
  {
    id: 351,
    text: 'En relación con los proyectos técnicos de los contratos de obras:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Salvo que resulte incompatible con la naturaleza de la obra, los proyectos de reforma de edificios públicos deberán incluir un estudio geotécnico.',
      },
      {
        id: OptionEnum.B,
        text: 'Sus pliegos de prescripciones técnicas particulares, no es necesario que determinen siempre la forma de medición de las unidades cuando se ejecuten.',
      },
      {
        id: OptionEnum.C,
        text: 'En un contrato de obras con valor estimado de 35.000 euros podrá requerirse proyecto técnico.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 352,
    text: 'En un contrato de obras celebrado por un Ayuntamiento de la isla en un terreno del Cabildo de Tenerife:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'La supervisión del proyecto la podrá realizar el Cabildo, salvo si fuera un contrato menor en el que este trámite es siempre facultativo.',
      },
      {
        id: OptionEnum.B,
        text: 'Forma parte del expediente de contratación de las obras el acta de la comprobación del replanteo efectuado para comprobar en todo caso, entre otros aspectos, la realidad geométrica de la obra.',
      },
      {
        id: OptionEnum.C,
        text: 'El acuerdo del Cabildo Insular de puesta a disposición de los terrenos, en todo caso, deberá constar en el expediente de contratación.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 353,
    text: 'El contratista de un contrato de obras del Cabildo Insular reclama a éste el abono de una factura presentada el 1 de diciembre de 2022 correspondiente a certificación de maquinaria pesada y materiales ya acopiados en la obra el 1 de mayo de 2022:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'La certificación por acopio fue aprobada el 15 de enero de 2023 y se pagó el 1 de marzo de 2023, teniendo en todo caso el contratista derecho a recibir el abono de los intereses correspondientes desde la fecha del acopio.',
      },
      {
        id: OptionEnum.B,
        text: 'Los abonos por estos acopios, que se realizaron el 1 de marzo de 2023, no tendrán en ningún caso el carácter de definitivos.',
      },
      {
        id: OptionEnum.C,
        text: 'La garantía exigible para responder puede ser una complementaria de un 10% del precio de adjudicación (excluido el IVA) atendiendo al riesgo que asume el órgano de contratación.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 354,
    text: 'Cuando concurran circunstancias que justifiquen la modificación de un contrato de obras:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'En todo caso, podrán consistir en aumentar, reducir, suprimir o introducir unidades de obra nuevas en el proyecto primitivo.',
      },
      {
        id: OptionEnum.B,
        text: 'Si se sustituyen o aumentan unidades de obras en un 10% del precio del contrato inicial siempre podrán incluirse en la liquidación del contrato.',
      },
      {
        id: OptionEnum.C,
        text: 'Si el contratista no acepta los precios fijados por la Administración en supuestos de sustitución de unidades de obra por otras nuevas, nunca se podrá resolver el contrato.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 355,
    text: 'El 15 de enero de 2022, con motivo de la expedición por el Cabildo del acta de comprobación del replanteo de unas obras, se constata la existencia de una torre de alta tensión en toda la superficie de los terrenos puestos a disposición por un Ayuntamiento de la isla, acordándose en marzo de 2023 la resolución del contrato:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'El contratista tiene derecho a una indemnización del 2% del precio de la adjudicación (IVA excluido).',
      },
      {
        id: OptionEnum.B,
        text: 'El contratista tiene derecho a una indemnización del 3% del precio de la adjudicación (IVA excluido).',
      },
      {
        id: OptionEnum.C,
        text: 'El contratista tiene derecho a una indemnización del 6% del precio de adjudicación del contrato de las obras dejadas de realizar (IVA excluido).',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 356,
    text: 'En relación con un contrato de concesión de obra pública celebrado por el Cabildo Insular:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Si no existe riesgo operacional de demanda nunca estaremos ante un contrato de servicios.',
      },
      {
        id: OptionEnum.B,
        text: 'El anteproyecto de construcción y el estudio de viabilidad siempre pueden aprobarse simultáneamente.',
      },
      {
        id: OptionEnum.C,
        text: 'El riesgo operacional de demanda y/o el riesgo de suministro corresponden siempre al contratista.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 357,
    text: 'Respecto a un contrato de servicios celebrado por una Administración Pública:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Si se trata de la prestación de servicios a la ciudadanía podrá ser resuelto por rescate.',
      },
      {
        id: OptionEnum.B,
        text: 'Si se trata de la prestación de un proyecto técnico de obras y se constatan errores durante la ejecución de las obras, se le podrá exigir responsabilidad solo en el término de 8 años desde que fue entregado a la Administración.',
      },
      {
        id: OptionEnum.C,
        text: 'Si se trata de prestaciones docentes para formación a empleados públicos, es posible en todo caso, el pago parcial anticipado, previo depósito de garantía.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 358,
    text: 'Respecto a un contrato de suministros celebrado por una Administración Pública:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'A todos los de fabricación se les aplicarán siempre supletoriamente todas las normas del contrato de obras, salvo las relativas al procedimiento de adjudicación.',
      },
      {
        id: OptionEnum.B,
        text: 'Los gastos de entrega de la prestación pactada serán siempre asumidos por el contratista.',
      },
      {
        id: OptionEnum.C,
        text: 'Si parte del precio del contrato lo paga la Administración mediante la entrega de sus bienes, procederá en algunos supuestos la desafectación de aquéllos.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 359,
    text: 'Cuando en un contrato de suministros celebrado por una Administración Pública se fije el precio por precios unitarios:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Siempre que el pliego de cláusulas administrativas lo permita, podrán pedirse directamente más unidades a suministrar hasta un 10% del precio del contrato (sin IVA).',
      },
      {
        id: OptionEnum.B,
        text: 'Solo cuando exista crédito, se podrán pedir más unidades a suministrar hasta un 10% del precio del contrato (sin IVA).',
      },
      {
        id: OptionEnum.C,
        text: 'Cuando el pliego de cláusulas administrativas lo permita y se acredite la existencia de crédito, se podrán pedir más unidades a suministrar hasta un 10% del precio del contrato (sin IVA).',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 360,
    text: 'La expropiación de urgencia conlleva, respecto al bien afectado:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Que la Administración expropiante fijará, por el trámite de urgencia el justiprecio, que deberá ser aceptado por el propietario.',
      },
      {
        id: OptionEnum.B,
        text: 'Que efectuada la ocupación del bien, se tramitará el procedimiento en sus fases de justiprecio y pago.',
      },
      {
        id: OptionEnum.C,
        text: 'Que en todo caso, el bien no se podrá ocupar por la administración, hasta el abono del justiprecio al propietario.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 361,
    text: 'Las islas, dentro de la esfera de sus competencias:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'No tienen atribuida la potestad expropiatoria debiendo, por tanto, solicitar el auxilio de la Comunidad Autónoma correspondiente para su ejercicio.',
      },
      {
        id: OptionEnum.B,
        text: 'Ostentan como competencia propia asignada legalmente, la potestad expropiatoria.',
      },
      {
        id: OptionEnum.C,
        text: 'Tienen carácter territorial y les corresponde la potestad expropiatoria.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 362,
    text: 'En relación con la expropiación de inmuebles, la utilidad pública se entenderá implícita:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'En todo caso, no procediendo declaración expresa al respecto.',
      },
      {
        id: OptionEnum.B,
        text: 'En todos los planes de obras y servicios del Estado, la Provincia y el Municipio.',
      },
      {
        id: OptionEnum.C,
        text: 'Solo en los planes de obras del Estado, la Provincia y el Municipio, procediendo la declaración expresa en los planes de servicios de dichas Administraciones.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 363,
    text: 'Declarada la utilidad pública o el interés social, la Administración resolverá sobre la necesidad concreta de ocupar los bienes o adquirir los derechos:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Incluyendo solo los que sean estrictamente indispensables para el fin de la expropiación.',
      },
      {
        id: OptionEnum.B,
        text: 'Pudiendo incluirse los que sean necesarios para previsibles ampliaciones de la obra o finalidad de que se trate.',
      },
      {
        id: OptionEnum.C,
        text: 'No siendo necesario resolver sobre la necesidad de ocupación, estando la misma implícita en la declaración de utilidad pública o interés social.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 364,
    text: 'Inicia el expediente expropiatorio:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'El acuerdo de necesidad de ocupación, que no requiere publicación.',
      },
      {
        id: OptionEnum.B,
        text: 'El acuerdo de necesidad de ocupación que requiere, no solo publicación sino notificación individual a cuantas personas aparezcan como interesadas en el procedimiento expropiatorio.',
      },
      {
        id: OptionEnum.C,
        text: 'El acuerdo de necesidad de ocupación, que no requiere publicación, pero si notificación individual a cuantas personas aparezcan como interesadas en el procedimiento, si bien en la exclusiva parte que pueda afectarlas.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 365,
    text: 'Podrá el propietario solicitar a la Administración que la expropiación comprenda la totalidad de la finca:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'En todo caso.',
      },
      {
        id: OptionEnum.B,
        text: 'Cuando la expropiación implique sólo la necesidad de ocupación exclusivamente de una parte de fincas rústicas y resulte antieconómica la conservación de la parte de la finca no expropiada.',
      },
      {
        id: OptionEnum.C,
        text: 'Cuando la expropiación implique sólo la necesidad de ocupación de una parte de finca rústica o urbana, y resulte antieconómica la conservación de la parte de la finca no expropiada.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 366,
    text: 'Respecto a la determinación del valor de los bienes o derechos expropiados:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'No procede el mutuo acuerdo de las partes puesto que el precio siempre será el resultante de la tasación efectuada por la Administración expropiante.',
      },
      {
        id: OptionEnum.B,
        text: 'Podrá convenirse libremente y por mutuo acuerdo entre la Administración y el particular, debiendo ser luego ratificado por la Comisión Especial de Valoración.',
      },
      {
        id: OptionEnum.C,
        text: 'Podrá convenirse libremente y por mutuo acuerdo entre la Administración y el particular, en cuyo caso se dará por concluido el expediente iniciado.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 367,
    text: 'Se entiende por hoja de aprecio, en el procedimiento de expropiación forzosa:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'La valoración efectuada por el propietario que ha de ser forzosamente motivada y podrá estar avalada por la firma de un perito.',
      },
      {
        id: OptionEnum.B,
        text: 'La valoración del objeto de la expropiación efectuada por la Administración en caso de rechazar la valoración efectuada por el propietario.',
      },
      {
        id: OptionEnum.C,
        text: 'No es correcta ninguna de las dos respuestas, al no referirse la Ley de Expropiación a dicho término.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 368,
    text: 'La expropiación de urgencia supone:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Que se entiende cumplido el trámite de declaración de necesidad de la ocupación de los bienes que hayan de ser expropiados, según el proyecto y replanteo aprobados y los reformados posteriormente.',
      },
      {
        id: OptionEnum.B,
        text: 'Que el trámite de declaración de necesidad de la ocupación de los bienes que hayan de ser expropiados, debe realizarse en todo caso antes de la ocupación de los bienes.',
      },
      {
        id: OptionEnum.C,
        text: 'Que se entiende cumplido el trámite de declaración de necesidad de la ocupación de los bienes que hayan de ser expropiados sin necesidad de que exista un proyecto y replanteo aprobados.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 369,
    text: 'Las actas de ocupación extendidas a continuación del pago, en el procedimiento de expropiación forzosa:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'No son título bastante para la inscripción en el Registro de la Propiedad de la transmisión del dominio.',
      },
      {
        id: OptionEnum.B,
        text: 'No son título bastante para la inscripción en el Registro de la Propiedad de la transmisión del dominio, pero sí para la cancelación de cargas, gravámenes y derechos reales a que estuviere afecta la cosa expropiada.',
      },
      {
        id: OptionEnum.C,
        text: 'Son título bastante para la inscripción en el Registro de la Propiedad de la transmisión del dominio, así como para la verificación de la cancelación de cargas, gravámenes y derechos reales a que estuviere afecta la cosa expropiada.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 370,
    text: 'En un procedimiento de expropiación forzosa, son beneficiarios, expropiados y sujeto expropiante:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Beneficiario es el titular de la potestad expropiatoria concurriendo dicha cualidad necesariamente en el expropiante.',
      },
      {
        id: OptionEnum.B,
        text: 'Expropiado, el sujeto que representa el interés público o social para cuya realización está autorizado a instar de la Administración expropiante el ejercicio de la potestad expropiatoria.',
      },
      {
        id: OptionEnum.C,
        text: 'Expropiante es el titular de la potestad expropiatoria, pudiendo concurrir o no en el mismo sujeto la cualidad de beneficiario.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 371,
    text: 'De conformidad con el régimen jurídico aplicable en materia de expropiación forzosa, los beneficiarios en el curso de un expediente de expropiación tendrán atribuidas, entre otras, las siguientes facultades y obligaciones:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Impulsar el procedimiento e informar a su arbitrio sobre las incidencias y pronunciamientos del mismo.',
      },
      {
        id: OptionEnum.B,
        text: 'Cobrar el justiprecio acordado por la Administración.',
      },
      {
        id: OptionEnum.C,
        text: 'Informar con una periodicidad semestral sobre las incidencias y pronunciamientos existentes en el procedimiento.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 372,
    text: 'Procederá la consignación del justo precio en la Caja General de Depósitos:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'En cualquier caso, haya o no acuerdo con el expropiado, con el fin de agilizar el pago.',
      },
      {
        id: OptionEnum.B,
        text: 'Cuando no exista acuerdo en la distribución del justo precio hasta que se resuelvan las discrepancias entre los distintos titulares de derechos o intereses.',
      },
      {
        id: OptionEnum.C,
        text: 'Cuando no exista acuerdo en la distribución de las cargas y derechos sobre el bien expropiado.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 373,
    text: 'Respecto al premio de afección en un procedimiento de expropiación forzosa:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Será del cinco por ciento y se incluirá siempre como primera partida de las hojas de aprecio de los propietarios y de la Administración.',
      },
      {
        id: OptionEnum.B,
        text: 'Será del cuatro por ciento y se incluirá siempre como última partida de las hojas de aprecio de los propietarios y de la Administración.',
      },
      {
        id: OptionEnum.C,
        text: 'Será del cinco por ciento y se incluirá siempre como última partida de las hojas de aprecio de los propietarios y de la Administración.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 374,
    text: 'Se consideran subvenciones y están sujetas a la Ley General de Subvenciones:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Las aportaciones dinerarias de una administración local a su sector público.',
      },
      {
        id: OptionEnum.B,
        text: 'Las becas.',
      },
      {
        id: OptionEnum.C,
        text: 'Las aportaciones dinerarias entre administraciones que no se realicen a través de una convocatoria pública.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 375,
    text: 'La acreditación del cumplimiento de las obligaciones tributarias y con la Seguridad Social, en materia de subvenciones, se podrá realizar a través de una declaración responsable:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'En aquellos procedimientos en que el importe de la subvención sea inferior a 3.000 euros.',
      },
      {
        id: OptionEnum.B,
        text: 'En ningún caso, bien se aportan los certificados, o se autoriza a que la Administración realice la intermediación.',
      },
      {
        id: OptionEnum.C,
        text: 'Solo en caso de subvenciones directas, independientemente de la cuantía.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 376,
    text: '¿En qué momento del procedimiento de concesión de una subvención, solicitada por un particular, deberá acreditarse estar al corriente en el cumplimiento de sus obligaciones tributarias y frente a la Seguridad Social?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Solo en el momento del pago de la subvención.',
      },
      {
        id: OptionEnum.B,
        text: 'En el momento del otorgamiento y en el del pago de la subvención.',
      },
      {
        id: OptionEnum.C,
        text: 'Solo en los casos de subvenciones anticipadas.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 377,
    text: 'Podrá justificarse una subvención, mediante presentación de cuenta justificativa simplificada:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Cuando se prevea expresamente en las bases reguladoras esta forma de justificación con independencia del importe a justificar.',
      },
      {
        id: OptionEnum.B,
        text: 'Cuando la subvención concedida sea por importe de 65.000 euros.',
      },
      {
        id: OptionEnum.C,
        text: 'Cuando la subvención concedida sea por importe de 57.214 euros.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 378,
    text: 'Conforme a la Ley General de Subvenciones, en ningún caso serán gastos subvencionables:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Los intereses, recargos y sanciones administrativas y penales.',
      },
      {
        id: OptionEnum.B,
        text: 'Las deudas tributarias y con la seguridad social.',
      },
      {
        id: OptionEnum.C,
        text: 'Los gastos financieros, los gastos notariales y registrales.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 379,
    text: 'Las subvenciones financiadas con cargo a fondos de la Unión Europea se regirán:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Exclusivamente por la Ley General de Subvenciones y su Reglamento de desarrollo.',
      },
      {
        id: OptionEnum.B,
        text: 'Por las normas internaciones de desarrollo o transposición de las normas comunitarias aplicables en cada caso.',
      },
      {
        id: OptionEnum.C,
        text: 'Por las normas comunitarias aplicables en cada caso y por las normas nacionales de desarrollo o transposición de aquéllas.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 380,
    text: 'Deberán ajustarse a la Ley General de Subvenciones:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Las administraciones públicas territoriales, con carácter exclusivo.',
      },
      {
        id: OptionEnum.B,
        text: 'Las administraciones públicas territoriales, así como a las entidades de derecho público con personalidad jurídica propia vinculadas o dependientes de las mismas.',
      },
      {
        id: OptionEnum.C,
        text: 'Las administraciones públicas territoriales, la administración institucional y la administración corporativa.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 381,
    text: 'La gestión de las subvenciones a que se refiere la Ley General de Subvenciones se realizará de acuerdo con los siguientes principios, entre otros:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Publicidad, concurrencia, objetividad y no discriminación.',
      },
      {
        id: OptionEnum.B,
        text: 'Equidad, justicia y concurrencia.',
      },
      {
        id: OptionEnum.C,
        text: 'Neutralidad, imparcialidad, independencia y publicidad.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 382,
    text: 'El otorgamiento de una subvención debe cumplir, entre otros, los siguientes requisitos:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Las Bases reguladoras de cada tipo de subvención se publicarán en el Tablón de Anuncios de la Administración correspondiente.',
      },
      {
        id: OptionEnum.B,
        text: 'La competencia del órgano administrativo concedente, así como la existencia de crédito adecuado y suficiente para atender las obligaciones de contenido económico que se deriven de la citada concesión.',
      },
      {
        id: OptionEnum.C,
        text: 'Los actos administrativos de contenido económico no requieren fiscalización previa, al entenderse que los mismos están sujetos a control financiero posterior.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 383,
    text: 'Podrán acceder a la condición de beneficiarios, las agrupaciones de personas físicas o jurídicas sin personalidad jurídica:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Cuando se prevea expresamente en las bases reguladoras.',
      },
      {
        id: OptionEnum.B,
        text: 'Cuando aun no estando previsto en las bases reguladoras, puedan llevar a cabo los proyectos actividades o comportamientos o se encuentren en la situación que motiva la concesión de la subvención.',
      },
      {
        id: OptionEnum.C,
        text: 'Estas agrupaciones tienen expresamente prohibido el acceso al otorgamiento de subvenciones de cualquier tipo.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 384,
    text: 'Podrán actuar como entidades colaboradoras de las subvenciones concedidas por la Administración General del Estado, su organismos públicos y demás entes que tengan que ajustar su actividad al derecho público:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Las comunidades de bienes o cualquier tipo de unidad económica o patrimonio separado.',
      },
      {
        id: OptionEnum.B,
        text: 'En determinados supuestos, las personas o entidades en quienes concurra alguna de las circunstancias previstas legalmente.',
      },
      {
        id: OptionEnum.C,
        text: 'Las comunidades autónomas y las corporaciones locales.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 385,
    text: 'Son obligaciones de los beneficiaros de una subvención:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Cumplir el objetivo, ejecutar el proyecto, realizar la actividad o adoptar el comportamiento que fundamenta la concesión de la subvención.',
      },
      {
        id: OptionEnum.B,
        text: 'Comunicar en cualquier momento al órgano concedente o a la entidad colaboradora la obtención de otras subvenciones, ayudas, ingresos o recursos que financien las actividades subvencionadas.',
      },
      {
        id: OptionEnum.C,
        text: 'Conservar los documentos justificativos de la aplicación de los fondos recibidos, incluidos los documentos electrónicos, al menos tres meses desde el otorgamiento de la subvención.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 386,
    text: 'Respecto a los procedimientos de concesión de subvenciones, indique cuál es la respuesta correcta:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'El procedimiento ordinario especial se tramitará en régimen de concurrencia directa o no competitiva, es decir, ha de estar la subvención prevista nominativamente en el Presupuesto de la administración concedente.',
      },
      {
        id: OptionEnum.B,
        text: 'El procedimiento excepcional es aquél mediante el cual la concesión de la subvención se realiza mediante la comparación de las solicitudes presentadas, a fin de establecer una prelación entre las mismas de acuerdo con los criterios de valoración previamente fijados en las bases reguladoras y en la convocatoria, y adjudicar, con el límite fijado en la convocatoria dentro del crédito disponible, aquellas que hayan obtenido mayor valoración en aplicación de los citados criterios.',
      },
      {
        id: OptionEnum.C,
        text: 'El procedimiento ordinario es aquél mediante el cual la concesión de la subvención se realiza mediante la comparación de las solicitudes presentadas, a fin de establecer una prelación entre las mismas de acuerdo con los criterios de valoración previamente fijados en las bases reguladoras y en la convocatoria, y adjudicar, con el límite fijado en la convocatoria dentro del crédito disponible, aquellas que hayan obtenido mayor valoración en aplicación de los citados criterios.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 387,
    text: 'Las actividades de instrucción del procedimiento de concesión de subvenciones comprenderán:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Convocatoria aprobada por el órgano competente, que desarrollará el procedimiento para la concesión de las subvenciones.',
      },
      {
        id: OptionEnum.B,
        text: 'Evaluación de las solicitudes o peticiones, efectuada conforme con los criterios, formas y prioridades de valoración establecidos en la norma reguladora de la subvención.',
      },
      {
        id: OptionEnum.C,
        text: 'Resolución motivada de conformidad con lo que dispongan las bases reguladoras de la subvención.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 388,
    text: 'Procederá el reintegro de las cantidades percibidas en concepto de subvención, conforme a la Ley General de Subvenciones:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Cuando se obtenga la subvención falseando las condiciones requeridas para ello u ocultando aquéllas que lo hubieran impedido, no siendo en este caso exigible el interés de demora en ningún caso.',
      },
      {
        id: OptionEnum.B,
        text: 'Cuando se obtenga la subvención falseando las condiciones requeridas para ello u ocultando aquéllas que lo hubieran impedido, siendo en este caso exigible el interés de demora desde el momento del pago de la subvención hasta la fecha en que se acuerde la procedencia del reintegro.',
      },
      {
        id: OptionEnum.C,
        text: 'Cuando se obtenga la subvención falseando las condiciones requeridas para ello u ocultando aquéllas que lo hubieran impedido, siendo en este caso exigible el interés de demora desde el momento del pago de la subvención hasta la fecha en que se efectúe materialmente el reintegro.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 389,
    text: 'El control financiero de subvenciones tendrá por objeto verificar:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'El incumplimiento por parte de los beneficiarios y entidades colaboradoras de sus obligaciones en la gestión y aplicación de la subvención, no pudiendo nunca realizarse mediante comprobación material de las inversiones financiadas.',
      },
      {
        id: OptionEnum.B,
        text: 'La adecuada y correcta justificación de la subvención por parte de beneficiarios y entidades colaboradoras a través, exclusivamente, del examen de registro contables, cuentas o estados financieros.',
      },
      {
        id: OptionEnum.C,
        text: 'La adecuada y correcta obtención de la subvención por parte del beneficiario correspondiendo la competencia para su ejercicio a la Intervención General.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 390,
    text: 'El órgano competente del Cabildo Insular de Tenerife para la aprobación de la convocatoria de concesión de subvenciones será:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'El previsto en la Ordenanza General de Subvenciones del Cabildo Insular de Tenerife, en sesión plenaria celebrada el 9 de julio de 2021.',
      },
      {
        id: OptionEnum.B,
        text: 'El que determinen las Bases de Ejecución del Cabildo Insular de Tenerife para cada ejercicio presupuestario.',
      },
      {
        id: OptionEnum.C,
        text: 'El previsto en el anexo correspondiente de la Ley General de Subvenciones en función de la naturaleza y cuantía del gasto.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 391,
    text: 'De acuerdo con lo previsto en la Ordenanza General de Subvenciones del Cabildo Insular de Tenerife, las subvenciones con asignación nominativa en los Presupuestos de la citada Corporación local, se justificarán:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Con la presentación de una liquidación del presupuesto y una memoria de actividades realizadas, en todo caso.',
      },
      {
        id: OptionEnum.B,
        text: 'Con la presentación de un certificado del Secretario o Interventor de la Administración beneficiaria.',
      },
      {
        id: OptionEnum.C,
        text: 'Con la presentación de una liquidación del presupuesto y una memoria de actividades realizadas o mediante el sistema de justificación que el órgano regule en el acto de concesión.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 392,
    text: 'Conforme a lo previsto en la Ordenanza reguladora de subvenciones del Cabildo Insular, el plazo de prescripción del derecho a reconocer o liquidar el reintegro:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'No hay prescripción.',
      },
      {
        id: OptionEnum.B,
        text: 'Se computa desde el momento en que venció el plazo para presentar la justificación por parte del beneficiario o entidad colaboradora.',
      },
      {
        id: OptionEnum.C,
        text: 'Se computa desde el momento en que venció el plazo para realizar la actividad subvencionable.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 393,
    text: 'En relación a la subcontratación de las actividades subvencionadas por los beneficiarios, el Cabildo de Tenerife:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Prohíbe expresamente la misma.',
      },
      {
        id: OptionEnum.B,
        text: 'La regula y no contempla especialidad alguna, remitiéndose con carácter general a lo previsto en la Ley General de Subvenciones.',
      },
      {
        id: OptionEnum.C,
        text: 'La regula permitiendo exclusivamente la subcontratación parcial, por considerar la total contraria a derecho conforme a lo previsto en la Ley General de Subvenciones.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 394,
    text: 'Las diferentes Administraciones Públicas actúan y se relacionan con otras Administraciones y entidades u organismos vinculados o dependientes de éstas de acuerdo con, entre otros, los principios de:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Eficacia en la gestión de los recursos públicos, compartiendo el uso de recursos comunes.',
      },
      {
        id: OptionEnum.B,
        text: 'Lealtad institucional y solidaridad interterritorial de acuerdo con la Constitución.',
      },
      {
        id: OptionEnum.C,
        text: 'Colaboración, entendido como la decisión voluntaria de actuar con el resto de Administraciones Públicas para el logro de fines comunes.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 395,
    text: 'Señale cuál de las siguientes afirmaciones es incorrecta en relación con el cumplimiento del deber de colaboración por parte de las Administraciones Públicas. Las Administraciones Públicas deben:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Ponderar, en el ejercicio de las competencias propias, la totalidad de los intereses públicos implicados.',
      },
      {
        id: OptionEnum.B,
        text: 'Prestar, en cualquier ámbito, la asistencia que las otras Administraciones pudieran solicitar para el eficaz ejercicio de sus competencias.',
      },
      {
        id: OptionEnum.C,
        text: 'Facilitar a las otras Administraciones la información que precisen sobre la actividad que desarrollen en el ejercicio de sus propias competencias.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 396,
    text: '¿Puede denegarse la asistencia y colaboración requerida entre Administraciones Públicas?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Sí, en todo caso, siempre que la negativa a prestar la asistencia se comunique motivadamente a la Administración solicitante.',
      },
      {
        id: OptionEnum.B,
        text: 'Sí, entre otros motivos, cuando la entidad de la que se solicita la asistencia y colaboración no disponga de medios para ello.',
      },
      {
        id: OptionEnum.C,
        text: 'Exclusivamente cuando la información solicitada tenga carácter confidencial o reservado.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 397,
    text: '¿A través de qué técnica, entre otras, se harán efectivas las obligaciones de colaboración entre Administraciones Públicas?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Emisión de informes no preceptivos con el fin de que las diferentes Administraciones expresen su criterio sobre propuestas o actuaciones que incidan en sus competencias.',
      },
      {
        id: OptionEnum.B,
        text: 'Participación en órganos consultivos de otras Administraciones Públicas.',
      },
      {
        id: OptionEnum.C,
        text: 'Suministro de información, datos, documentos o medios probatorios que se hallen a disposición del organismo público o la entidad al que se dirige la solicitud y que la Administración solicitante precise disponer para el ejercicio de sus competencias.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 398,
    text: '¿Cuáles de las siguientes es una técnica de cooperación entre Administraciones Públicas?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Suministro de medios probatorios que se hallen a disposición del organismo público o la entidad al que se dirige la solicitud y que la Administración solicitante precise disponer para el ejercicio de sus competencias.',
      },
      {
        id: OptionEnum.B,
        text: 'Prestación de medios materiales, económicos o personales a otras Administraciones Públicas.',
      },
      {
        id: OptionEnum.C,
        text: 'Creación y mantenimiento de sistemas integrados de información administrativa.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 399,
    text: '¿Quiénes formarán parte de las Comisiones Territoriales de Coordinación?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Exclusivamente representantes de la Administración General del Estado y de las Comunidades Autónomas.',
      },
      {
        id: OptionEnum.B,
        text: 'Únicamente representantes de las Comunidades Autónomas y de las Entidades Locales que la integran.',
      },
      {
        id: OptionEnum.C,
        text: 'Representantes de la Administración General del Estado, de las Comunidades Autónomas y de las Entidades Locales.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 400,
    text: '¿Cuál es el fin para el que se crean las Comisiones Territoriales de Coordinación?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Mejorar la coordinación de la prestación de los servicios, prevenir duplicidades y mejorar la eficiencia y calidad de los servicios.',
      },
      {
        id: OptionEnum.B,
        text: 'Ejercer funciones consultivas, decisorias o de coordinación orientadas a alcanzar acuerdos sobre materias comunes.',
      },
      {
        id: OptionEnum.C,
        text: 'Fijar los criterios objetivos que sirvan de base para la distribución territorial de los créditos presupuestarios.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 401,
    text: 'De conformidad con lo establecido en la Ley de Régimen Jurídico del Sector Público, en las transmisiones de datos entre Administraciones Públicas, ¿la Administración Pública cesionaria puede realizar un tratamiento ulterior de los datos transmitidos para una finalidad distinta a la que inicialmente motivó la cesión?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'En ningún caso.',
      },
      {
        id: OptionEnum.B,
        text: 'Sí, cuando la Administración Pública cesionaria estime que ese tratamiento ulterior es compatible con el fin inicial, no siendo necesaria la comunicación a la Administración cedente si consta motivación fundada en el expediente.',
      },
      {
        id: OptionEnum.C,
        text: 'Sí, con fines de investigación científica e histórica o fines estadísticos.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 402,
    text: 'Señale cuál de las siguientes afirmaciones es incorrecta en relación con lo dispuesto en la Ley de Régimen Jurídico del Sector Público, sobre el Esquema Nacional de Seguridad:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Tiene por objeto establecer la política de seguridad en la utilización de medios electrónicos en el ámbito de dicha Ley.',
      },
      {
        id: OptionEnum.B,
        text: 'Está constituido por los principios básicos y requisitos mínimos que garanticen adecuadamente la seguridad de la información tratada.',
      },
      {
        id: OptionEnum.C,
        text: 'Comprende el conjunto de criterios y recomendaciones en materia de seguridad, conservación y normalización de la información, de los formatos y de las aplicaciones que deberán ser tenidos en cuenta por las Administraciones Públicas para la toma de decisiones tecnológicas.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 403,
    text: '¿Pueden las Administraciones Públicas poner a disposición de cualquiera de ellas que lo solicite las aplicaciones desarrolladas por sus servicios o que hayan sido objeto de contratación?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Sí, cuando sean titulares de los derechos de propiedad intelectual de esas aplicaciones.',
      },
      {
        id: OptionEnum.B,
        text: 'Únicamente cuando cedentes y cesionarias acuerden la repercusión del coste de adquisición o fabricación de las aplicaciones cedidas.',
      },
      {
        id: OptionEnum.C,
        text: 'Solo cuando dichas aplicaciones sean declaradas como de fuentes abiertas.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 404,
    text: 'En el ámbito de la responsabilidad patrimonial, serán indemnizables los daños:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Que el particular no tenga el deber jurídico de soportar.',
      },
      {
        id: OptionEnum.B,
        text: 'Los producidos por fuerza mayor.',
      },
      {
        id: OptionEnum.C,
        text: 'Los producidos con rotura del nexo causal.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 405,
    text: 'En el Cabildo se recibe una reclamación de responsabilidad patrimonial de un motorista por el accidente sufrido con su motocicleta al abandonar una carretera insular, al intentar aparcar de noche en el parking privado de un restaurante, como consecuencia de que éste se hallaba cerrado con una cadena que carecía de toda señalización. ¿Es posible desestimar la reclamación?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Sí, porque no existe una relación de causalidad directa entre el daño sufrido y el funcionamiento del servicio público de carreteras, ya que la causa directa del accidente la ha provocado el dueño del restaurante al colocar la cadena en su propiedad.',
      },
      {
        id: OptionEnum.B,
        text: 'No, como el accidente se produce al abandonar una carretera insular, cabe apreciar mal funcionamiento del servicio público de carreteras, ya que el Cabildo debió procurar la señalización del peligro que suponía la cadena.',
      },
      {
        id: OptionEnum.C,
        text: 'No, debió apreciarse concurrencia de culpas entre el Cabildo, como responsable del servicio público de carreteras, y el dueño del restaurante, por colocar la cadena en su parking privado.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 406,
    text: 'Varios residentes de Buenavista, preocupados por los daños que les podría ocasionar unas obras que está ejecutando el Cabildo en el Parque Rural de Teno, presentan una solicitud de reclamación de responsabilidad patrimonial. ¿Prosperará esta reclamación?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Sí, porque el daño alegado se podría evaluar económicamente.',
      },
      {
        id: OptionEnum.B,
        text: 'Sí, porque el daño alegado se podría individualizar con relación a una persona o grupo de personas.',
      },
      {
        id: OptionEnum.C,
        text: 'No, porque el daño alegado no es efectivo.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 407,
    text: 'Los perjudicados por la aplicación de una ley posteriormente declarada inconstitucional, ¿podrán exigir el resarcimiento de los daños producidos?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'En cualquier caso.',
      },
      {
        id: OptionEnum.B,
        text: 'Solo si han agotado todas las instancias judiciales contra la actuación administrativa que ocasionó el daño, aunque no hubieran alegado inconstitucionalidad de la norma.',
      },
      {
        id: OptionEnum.C,
        text: 'Solo en el caso de que hayan obtenido, en cualquier instancia, sentencia firme desestimatoria de un recurso contra la actuación administrativa que ocasionó el daño, siempre que se hubiera alegado la inconstitucionalidad posteriormente declarada.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 408,
    text: 'En el caso de que se aprecie responsabilidad patrimonial concurrente de varias Administraciones Públicas que no derive de fórmulas conjuntas de actuación, ¿cómo se fijará la responsabilidad para cada una de ellas?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'En todo caso, de forma solidaria.',
      },
      {
        id: OptionEnum.B,
        text: 'Atendiendo, entre otros criterios, a la intensidad de la intervención.',
      },
      {
        id: OptionEnum.C,
        text: 'De forma mancomunada.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 409,
    text: '¿Con arreglo a qué criterios de valoración se calculará la indemnización de una reclamación de responsabilidad patrimonial en los casos de lesiones corporales?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'No existe un criterio específico para estos casos.',
      },
      {
        id: OptionEnum.B,
        text: 'Con arreglo al Índice de Garantía de la Competitividad, fijado por el Instituto Nacional de Estadística.',
      },
      {
        id: OptionEnum.C,
        text: 'Podrá tomarse como referencia la valoración incluida en la normativa vigente en materia de Seguros Obligatorios y de la Seguridad Social.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 410,
    text: '¿Podría sustituirse la indemnización procedente en un procedimiento de responsabilidad patrimonial por una compensación en especie o ser abonada mediante pagos periódicos?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'No, en ningún caso.',
      },
      {
        id: OptionEnum.B,
        text: 'Siempre que resulte más adecuado para lograr la reparación debida, con independencia de la conformidad del interesado.',
      },
      {
        id: OptionEnum.C,
        text: 'Cuando resulte más adecuado para lograr la reparación debida y convenga al interés público, siempre que exista acuerdo con el interesado.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 411,
    text: 'Respecto a la exigencia de responsabilidad patrimonial de las autoridades y personal al servicio de las Administraciones Públicas, señale cuál de las siguientes afirmaciones es correcta:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'La Administración, independientemente de que hubiere indemnizado o no a los lesionados, exigirá al personal a su servicio la responsabilidad en que hubieren incurrido.',
      },
      {
        id: OptionEnum.B,
        text: 'Para la cuantificación de esa responsabilidad se ponderarán, entre otros criterios, el resultado dañoso producido y el grado de culpabilidad.',
      },
      {
        id: OptionEnum.C,
        text: 'La Administración también exigirá responsabilidad al personal a su servicio por los daños causados en sus bienes, aunque no hubiera concurrido dolo, culpa o negligencia grave.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 412,
    text: '¿Cuál es el plazo establecido en la Ley de Régimen Jurídico del Sector Público, para el trámite de audiencia, tras la práctica de las pruebas admitidas, en el procedimiento que se instruya para la exigencia de responsabilidad patrimonial de las autoridades y personal al servicio de las Administraciones Públicas?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Quince días.',
      },
      {
        id: OptionEnum.B,
        text: 'Diez días.',
      },
      {
        id: OptionEnum.C,
        text: 'Cinco días.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 413,
    text: 'El día 3 de marzo de 2023 se presenta ante el Cabildo una reclamación de responsabilidad patrimonial por los daños ocasionados en un vehículo, que se alegan derivados de un accidente producido el día 2 de marzo de 2022, debido a la existencia de piedras en la calzada. El Cabildo inadmite la reclamación por extemporánea. ¿Es conforme a derecho esta inadmisión?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Sí, al haber transcurrido un año desde que se produjo el accidente.',
      },
      {
        id: OptionEnum.B,
        text: 'No, como quiera que el plazo de prescripción en los procedimientos de responsabilidad patrimonial se fija en un año, éste se computa a partir del día siguiente a la producción del evento dañoso; luego, la reclamación está en plazo.',
      },
      {
        id: OptionEnum.C,
        text: 'No, porque no se ha tenido en cuenta cuándo se determinó el alcance de las secuelas del reclamante.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 414,
    text: 'Con fecha 20 de febrero de 2023 se interpone una reclamación de responsabilidad patrimonial por daños físicos sufridos el día 30 de septiembre de 2021 como consecuencia de una caída en un Museo Insular por la existencia de un socavón en el suelo de uno de sus patios, que se encontraba tapado con una moqueta artificial. La reclamante requirió rehabilitación durante seis meses tras la caída, tras lo cual recibió el alta médica, sin apreciarse secuelas. ¿Debe admitirse esta reclamación?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'No, es extemporánea. Se interpone cuando ha transcurrido ampliamente un año desde que se produjera la caída por la que se reclama indemnización.',
      },
      {
        id: OptionEnum.B,
        text: 'que se encontraba tapado con una moqueta artificial. La reclamante requirió rehabilitación durante seis meses tras la caída, tras lo cual recibió el alta médica, sin apreciarse secuelas. ¿Debe admitirse esta reclamación?',
      },
      {
        id: OptionEnum.C,
        text: 'No, habría que esperar a la determinación del alcance de las secuelas.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 415,
    text: 'Un Ayuntamiento recibe un escrito en el que se solicita que se declare la responsabilidad patrimonial de dicho ayuntamiento por los daños sufridos en una vivienda, por agua, durante una tormenta, alegando defectos en el alcantarillado de la calle desde que se realizaron unas obras en la misma. Los reclamantes, en lugar de cuantificar los daños producidos, solicitan al Ayuntamiento un peritaje. ¿Cómo debe proceder ese Ayuntamiento?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Debe inadmitir la reclamación por no reunir todos los requisitos legales.',
      },
      {
        id: OptionEnum.B,
        text: 'Debe requerir a los reclamantes para que aporten la evaluación económica del daño, advirtiéndoles que, si no lo hacen, se les tendrá por desistidos de su petición.',
      },
      {
        id: OptionEnum.C,
        text: 'Acceder a lo solicitado y realizar el peritaje, dado que es un derecho que asiste al reclamante.',
      },
    ],
    solution: OptionEnum.A,
  },

  {
    id: 416,
    text: 'Una persona presenta una reclamación de responsabilidad patrimonial por los daños sufridos como consecuencia de una caída en un sendero de titularidad insular, por una mala señalización. Como quiera que la solicitud está incompleta, se le concede plazo para subsanar. La subsanación es presentada de forma extemporánea, pero con carácter previo a que se dicte resolución por la que se la tiene por desistida. Señale cuál es la afirmación correcta:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Se admite la documentación y se continúa el procedimiento.',
      },
      {
        id: OptionEnum.B,
        text: 'Se dicta resolución inadmitiendo la reclamación.',
      },
      {
        id: OptionEnum.C,
        text: 'Se dicta resolución desestimando la reclamación por subsanación extemporánea.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 417,
    text: 'En el caso de los procedimientos de responsabilidad patrimonial, ¿será preceptivo solicitar informe al servicio cuyo funcionamiento haya ocasionado la presunta lesión indemnizable?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'No en todos los casos, solo cuando quien instruya el procedimiento tenga dudas fundadas sobre el relato de los hechos.',
      },
      {
        id: OptionEnum.B,
        text: 'Sí, no pudiendo exceder de diez días el plazo de su emisión.',
      },
      {
        id: OptionEnum.C,
        text: 'Tan solo cuando las cuantías reclamadas sean de cuantía igual o superior a 50.000 euros.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 418,
    text: 'Con fecha 19 de septiembre de 2022, una señora presenta una reclamación de responsabilidad patrimonial ante el Cabildo con motivo de los daños sufridos por su padre en una caída mientras caminaba por la acera existente a la entrada de Garachico en una carretera insular como consecuencia del mal estado en el que se encontraba el pavimento. Tras la práctica de pruebas y emisión de informes, no ha recaído ni se ha notificado resolución expresa. Siendo 27 de marzo de 2023 ¿qué puede hacer esta señora?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Entender que su reclamación ha sido desestimada por silencio e interponer recurso de alzada ante el Presidente del Cabildo Insular, con el fin de agotar la vía administrativa.',
      },
      {
        id: OptionEnum.B,
        text: 'Entender que su reclamación ha sido desestimada por silencio e interponer recurso potestativo de reposición o bien impugnar directamente ante el orden jurisdiccional contencioso-administrativo.',
      },
      {
        id: OptionEnum.C,
        text: 'Debe esperar, al no haber transcurrido aún el plazo para resolver el procedimiento.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 419,
    text: 'Si una autoridad o funcionario público, en el ejercicio de su competencia y sabiendo que es ilegal, propone, nombra o da posesión para el ejercicio de un determinado cargo público a una persona sin que concurran los requisitos legalmente establecidos, incurre en un delito de:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Cohecho.',
      },
      {
        id: OptionEnum.B,
        text: 'Tráfico de influencias.',
      },
      {
        id: OptionEnum.C,
        text: 'Prevaricación.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 420,
    text: 'Si una persona acepta un nombramiento o toma de posesión para el ejercicio de un determinado cargo público, sabiendo que carece de los requisitos legalmente exigidos, incurre en un delito de:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Prevaricación, con la misma pena de multa que la autoridad o funcionario que lo propuso, nombró o dio posesión del cargo público.',
      },
      {
        id: OptionEnum.B,
        text: 'Prevaricación, con pena de multa agravada en atención a la malversación implícita en el nombramiento.',
      },
      {
        id: OptionEnum.C,
        text: 'No incurre en delito alguno, ya que el mismo sólo se puede cometer por autoridad o funcionario público.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 421,
    text: '¿Cuál es la pena establecida por la comisión del delito de prevaricación?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'En todo caso la multa de tres a ocho meses y suspensión de empleo o cargo público por tiempo de uno a tres años.',
      },
      {
        id: OptionEnum.B,
        text: 'En todo caso la de inhabilitación especial para empleo o cargo público y para el ejercicio del derecho de sufragio pasivo por tiempo de nueve a quince años.',
      },
      {
        id: OptionEnum.C,
        text: 'Dependerá del tipo penal de que se trate.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 422,
    text: '¿Qué ocurre si se revelan informaciones por parte de una autoridad o funcionario público cuando se tiene conocimiento de las mismas por razón del cargo y existe una prohibición de que sean divulgados?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Se está cometiendo un delito de violación de secretos y se incurre en la pena de multa de 12 a 18 meses e inhabilitación especial para empleo o cargo público por tiempo de 1 a 3 años.',
      },
      {
        id: OptionEnum.B,
        text: 'Se está cometiendo un delito de prevaricación y se incurre en la pena de inhabilitación especial para empleo o cargo público y para el ejercicio del derecho de sufragio pasivo por tiempo de 9 a 15 años.',
      },
      {
        id: OptionEnum.C,
        text: 'Se está cometiendo un delito de infidelidad en la custodia de documentos, y se incurre en la pena de prisión de 1 a 4 años, multa de 7 a 24 meses, e inhabilitación especial para empleo o cargo público por tiempo de 3 a 6 años.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 423,
    text: 'El funcionario que retrasa de forma injustificada la tramitación de un procedimiento administrativo a cambio de recibir un favor:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Incurre en el delito de cohecho, con pena de prisión de 3 a 6 años, multa de 12 a 24 meses e inhabilitación especial para empleo o cargo público y para el ejercicio del derecho de sufragio pasivo por tiempo de 9 a 12 años.',
      },
      {
        id: OptionEnum.B,
        text: 'Incurre en el delito de prevaricación, con pena de multa de 3 a 8 meses y suspensión de empleo o cargo público por tiempo de 1 a 3 años.',
      },
      {
        id: OptionEnum.C,
        text: 'Incurre en el delito de negociación o actividad prohibida y abuso de la función pública, con pena de prisión de 3 años a 6 años y multa de 12 a 24 meses.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 424,
    text: 'La autoridad o funcionario que en provecho propio admita un regalo en consideración a su cargo o función, ¿qué delito comete?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Prevaricación, si lo recibe a sabiendas de su injusticia, castigado con la pena de inhabilitación especial para empleo o cargo público y para el ejercicio del derecho de sufragio pasivo durante el tiempo de 9 a 15 años.',
      },
      {
        id: OptionEnum.B,
        text: 'Cohecho, castigado con la pena de prisión de 6 meses a 1 año y suspensión de empleo y cargo público de 1 a 3 años.',
      },
      {
        id: OptionEnum.C,
        text: 'Malversación, castigado con pena de multa de 3 a 8 meses y suspensión de empleo o cargo público por tiempo de 1 a 3 años.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 425,
    text: '¿Cuándo se comete el delito de malversación?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Cuando la autoridad o funcionario se apropia del patrimonio público que tenga a su cargo por razón de sus funciones.',
      },
      {
        id: OptionEnum.B,
        text: 'Cuando la autoridad o funcionario dicta una resolución arbitraria en un asunto administrativo a sabiendas de su injusticia.',
      },
      {
        id: OptionEnum.C,
        text: 'Cuando la autoridad o funcionario influye en otro para conseguir una resolución que le pueda generar un beneficio económico para sí o para un tercero.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 426,
    text: 'Si una autoridad o funcionario da al patrimonio público que administra una aplicación pública diferente de aquella a la que está destinado, ¿en qué delito incurre?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'No incurre en ningún delito, porque la finalidad sigue siendo pública.',
      },
      {
        id: OptionEnum.B,
        text: 'Incurre en una infracción administrativa, la cual exige la tramitación de un procedimiento disciplinario.',
      },
      {
        id: OptionEnum.C,
        text: 'Incurre en un delito de malversación, castigado con pena de inhabilitación de empleo o cargo público de 1 a 3 años y multa de 3 a 12 meses si hay daños o entorpecimiento grave del servicio.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 427,
    text: 'La autoridad o funcionario público que en el ejercicio de sus funciones cometa falsedad, no diciendo la verdad en la narración de hechos ante un juzgado o tribunal, ¿qué delito comete?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Comete un delito de falsedad.',
      },
      {
        id: OptionEnum.B,
        text: 'Comete un delito de prevaricación.',
      },
      {
        id: OptionEnum.C,
        text: 'Comete un delito de falsificación de documentos.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 428,
    text: 'Si un funcionario o autoridad altera un requisito esencial de una resolución administrativa, como es la firma del órgano competente, para obtener un beneficio propio, ¿comete algún delito?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Comete un delito de falsedad documental, castigado con pena de prisión de 3 a 6 años, multa de 6 a 24 meses e inhabilitación especial por tiempo de 2 a 6 años.',
      },
      {
        id: OptionEnum.B,
        text: 'Comete un delito prevaricación, castigado con pena de inhabilitación especial para empleo o cargo público y para el ejercicio del derecho de sufragio pasivo por tiempo de 9 a 15 años.',
      },
      {
        id: OptionEnum.C,
        text: 'Comete un delito de actividad prohibida a los funcionarios y de abuso en el ejercicio de su función.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 429,
    text: '¿Cuál de las siguientes penas está prevista para la comisión del delito de malversación?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Multa de 3 a 8 meses y suspensión de empleo o cargo público por tiempo de 1 a 3 años.',
      },
      {
        id: OptionEnum.B,
        text: 'Prisión de 3 a 6 años, multa de 12 a 24 meses, e inhabilitación especial para empleo o cargo público y para el ejercicio del derecho de sufragio pasivo por tiempo de 9 a 12 años.',
      },
      {
        id: OptionEnum.C,
        text: 'Prisión de 2 a 6 años, inhabilitación especial para cargo o empleo público y para el ejercicio del derecho de sufragio pasivo por tiempo de 6 a 10 años.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 430,
    text: 'El delito de falsificación de certificados expedido por autoridad o funcionario público:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Con carácter general, se aplica en todos los supuestos de falsificación, salvo en los excepcionados legalmente.',
      },
      {
        id: OptionEnum.B,
        text: 'Se castiga con la misma pena que la falsificación de documentos públicos si se presenta en un juicio.',
      },
      {
        id: OptionEnum.C,
        text: 'Se castiga con pena de prisión de 6 meses a 3 años e inhabilitación especial por tiempo de 2 a 6 años.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 431,
    text: 'Un funcionario acepta una cantidad de dinero de un tercero a cambio de reconocerle una incapacidad permanente, y un particular le regala un coche a un funcionario a cambio de no instruirle en plazo un procedimiento disciplinario. ¿Qué delito se está cometiendo?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'El funcionario está cometiendo el delito de malversación en el primer caso y prevaricación en el segundo.',
      },
      {
        id: OptionEnum.B,
        text: 'El funcionario está cometiendo el delito de negociaciones prohibidas a los funcionarios en los dos casos.',
      },
      {
        id: OptionEnum.C,
        text: 'El funcionario está cometiendo el delito de cohecho en los dos casos.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 432,
    text: '¿Quién comete el delito de exacciones ilegales?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'La autoridad o funcionario público que exige derechos, tarifas o minutas que no sean debidos o en una cuantía mayor a la legalmente establecida.',
      },
      {
        id: OptionEnum.B,
        text: 'La autoridad o funcionario público que se apropia o consiente que un tercero se apropie del patrimonio público que tenga a su cargo por razón de sus funciones.',
      },
      {
        id: OptionEnum.C,
        text: 'La autoridad o funcionario público que sustrae, destruye, inutiliza u oculta documentos cuya custodia le está encomendada por razón de su cargo.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 433,
    text: 'Si un funcionario público o autoridad, aprovechándose de su cargo, influye en otro funcionario o autoridad para conseguir una resolución que le genera un beneficio económico, está cometiendo el delito de:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'El funcionario o autoridad está cometiendo un delito de cohecho impropio.',
      },
      {
        id: OptionEnum.B,
        text: 'El funcionario o autoridad está cometiendo un delito de tráfico de influencias.',
      },
      {
        id: OptionEnum.C,
        text: 'El funcionario o autoridad está cometiendo un delito de prevaricación.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 434,
    text: '¿Qué delito está cometiendo la autoridad o funcionario público que usa un vehículo propiedad de la Administración en la que presta servicios para uso privado los fines de semana?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'El delito de malversación si no tiene la intención de apropiarse el vehículo.',
      },
      {
        id: OptionEnum.B,
        text: 'El delito de cohecho.',
      },
      {
        id: OptionEnum.C,
        text: 'El delito de apropiación indebida.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 435,
    text: '¿Qué efectos tendría el hecho de que un particular recibiera puntualmente un regalo o dinero de la autoridad y posteriormente denunciara el hecho en el juzgado antes de la apertura del procedimiento penal?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'El particular queda exento de pena por el delito de cohecho, si no ha transcurrido más de dos meses desde la fecha de los hechos a la denuncia.',
      },
      {
        id: OptionEnum.B,
        text: 'El particular comete el delito de malversación, pero con circunstancia atenuante de reconocimiento de los hechos.',
      },
      {
        id: OptionEnum.C,
        text: 'El particular comete el delito de cohecho, pero la pena se impondrá en su grado mínimo.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 436,
    text: 'La autoridad o funcionario público que asesora a una entidad privada en un asunto en que deba intervenir o haya intervenido por razón de su cargo, ¿en qué delito puede incurrir?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'En el delito de negociaciones y actividades prohibidas a los funcionarios públicos y/o de los abusos en el ejercicio de su función.',
      },
      {
        id: OptionEnum.B,
        text: 'Puede incurrir en el delito de fraude y exacciones ilegales.',
      },
      {
        id: OptionEnum.C,
        text: 'No incurre en delito alguno, siempre que se realice fuera de la jornada laboral.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 437,
    text: 'Si una autoridad o funcionario público trafica de cualquier modo con un documento de identidad falso, sin haber intervenido en la falsificación:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'El funcionario o autoridad no comete el delito de falsificación de documentos públicos, sino el de estafa, si se acredita la concurrencia de los elementos de este delito.',
      },
      {
        id: OptionEnum.B,
        text: 'El funcionario o autoridad comete el delito de falsificación de documento público, con pena de prisión de 6 meses a 3 años y multa de 6 a 12 meses.',
      },
      {
        id: OptionEnum.C,
        text: 'El funcionario o autoridad comete el delito de cohecho, con pena de prisión de 1 a 3 años, multa de 6 a 12 meses, e inhabilitación especial para empleo o cargo público y para el ejercicio del derecho de sufragio pasivo por tiempo de 9 a 12 años.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 438,
    text: '¿Cuándo comete un funcionario o autoridad un delito de malversación agravada?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Se comete el delito de malversación agravada cuando el valor del perjuicio causado o del patrimonio público apropiado excede de 20.000 euros.',
      },
      {
        id: OptionEnum.B,
        text: 'Se comete el delito de malversación agravada cuando las cosas malversadas fueran de valor artístico, histórico, cultural o científico.',
      },
      {
        id: OptionEnum.C,
        text: 'Se comete el delito de malversación agravada cuando se recibe dádiva, favor o retribución con valor superior a 50.000 euros.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 439,
    text: 'A efectos de lo señalado en la Ley de Régimen Jurídico del Sector Público, tienen la consideración de convenios:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Los Protocolos Generales de Actuación que expresen la voluntad para actuar con un objetivo común sin que establezcan compromisos jurídicos concretos y exigibles.',
      },
      {
        id: OptionEnum.B,
        text: 'Los acuerdos con efectos jurídicos adoptados por las Administraciones Públicas, los organismos públicos y entidades de derecho público vinculados o dependientes o las Universidades públicas entre sí o con sujetos de derecho privado para un fin común.',
      },
      {
        id: OptionEnum.C,
        text: 'Las encomiendas de gestión y los encargos a medios propios personificados.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 440,
    text: 'De conformidad con lo señalado en la Ley de Régimen Jurídico del Sector Público, dentro de la tipología de convenios se encuentran los:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Convenios interadministrativos suscritos entre dos o más Comunidades Autónomas para la gestión y prestación de servicios propios de las mismas.',
      },
      {
        id: OptionEnum.B,
        text: 'Convenios firmados entre una Administración Pública u organismo o entidad de derecho público y un sujeto de Derecho privado.',
      },
      {
        id: OptionEnum.C,
        text: 'Convenios constitutivos de Tratado o Acuerdo internacional administrativo, firmados entre las Administraciones Públicas y los órganos, organismos públicos o entes de un sujeto de Derecho internacional.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 441,
    text: 'Respecto de los convenios que incluyan compromisos financieros, la Ley de Régimen Jurídico del Sector Público determina que:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Deberán ser financieramente sostenibles, por lo que las aportaciones financieras que se comprometan a realizar los firmantes podrán ser superiores a los gastos derivados de la ejecución del convenio.',
      },
      {
        id: OptionEnum.B,
        text: 'Quienes los suscriban deberán tener capacidad para financiar los compromisos financieros asumidos durante la vigencia del convenio.',
      },
      {
        id: OptionEnum.C,
        text: 'La gestión, justificación y resto de actuaciones relacionadas con los gastos derivados de los convenios se ajustarán a lo dispuesto en la Ley General de Subvenciones.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 442,
    text: 'De conformidad con lo señalado en la Ley de Régimen Jurídico del Sector Público, los convenios que suscriba la Administración General del Estado se acompañarán, además de la memoria justificativa de, entre otros:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'El informe del servicio jurídico, y cualquier otro preceptivo, que deberán emitirse en un plazo máximo de diez días hábiles desde su solicitud.',
      },
      {
        id: OptionEnum.B,
        text: 'El informe del Ministerio de Política Territorial, respecto de los convenios que se suscriban entre la Administración General del Estado con las Entidades Locales, en todo caso.',
      },
      {
        id: OptionEnum.C,
        text: 'La autorización previa del Ministerio de Hacienda y Función Pública para su firma, salvo que esté excepcionado de la misma.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 443,
    text: 'De conformidad con lo señalado en la Ley de Régimen Jurídico del Sector Público, los convenios se perfeccionan:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Con su inscripción en el Registro Electrónico Estatal de Órganos e Instrumentos de Cooperación tras su formalización, en todo caso.',
      },
      {
        id: OptionEnum.B,
        text: 'Por la prestación del consentimiento de las partes.',
      },
      {
        id: OptionEnum.C,
        text: 'Desde su publicación en el Boletín Oficial del Estado, tras su formalización.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 444,
    text: 'Según lo previsto en la Ley de Régimen Jurídico del Sector Público, los convenios deberán incluir, entre otras, las siguientes materias:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'El Título del convenio, que deberá expresar de forma abreviada su objeto.',
      },
      {
        id: OptionEnum.B,
        text: 'La designación de una comisión paritaria de la representación de las partes encargada del seguimiento, vigilancia y control de la ejecución del convenio.',
      },
      {
        id: OptionEnum.C,
        text: 'Consecuencias aplicables en caso de incumplimiento de las obligaciones.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 445,
    text: 'De conformidad con lo señalado en la Ley de Régimen Jurídico del Sector Público, respecto del plazo de vigencia del convenio, ¿cuál de las siguientes afirmaciones es correcta?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Los convenios deberán tener una duración determinada, que no podrá ser superior a cuatro años, incluidas sus posibles prórrogas.',
      },
      {
        id: OptionEnum.B,
        text: 'Los convenios podrán tener una duración indefinida.',
      },
      {
        id: OptionEnum.C,
        text: 'En el caso de convenios suscritos por la Administración General del Estado, la prórroga deberá ser comunicada al Registro Electrónico Estatal de Órganos e Instrumentos de Cooperación.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 446,
    text: 'Según lo previsto en la Ley de Régimen Jurídico del Sector Público, la suscripción de un convenio requerirá de la elaboración de una memoria donde se analice y justifique, entre otros:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Su necesidad y oportunidad.',
      },
      {
        id: OptionEnum.B,
        text: 'El carácter contractual de la actividad en cuestión.',
      },
      {
        id: OptionEnum.C,
        text: 'El régimen de modificación del convenio.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 447,
    text: 'De conformidad con lo señalado en la Ley de Régimen Jurídico del Sector Público, son causas de resolución de los convenios:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'El incumplimiento de las obligaciones y compromisos asumidos por parte de alguno de los firmantes previo, requerimiento a la parte incumplidora, en todo caso.',
      },
      {
        id: OptionEnum.B,
        text: 'El cumplimiento de las actuaciones que constituyen su objeto.',
      },
      {
        id: OptionEnum.C,
        text: 'La nulidad del convenio declarada judicialmente.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 448,
    text: 'De conformidad con lo señalado en la Ley de Régimen Jurídico del Sector Público, en relación con el incumplimiento de las obligaciones y compromisos asumidos por parte de alguno de los firmantes del convenio, ¿cuál de las siguientes afirmaciones es correcta?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Cualquiera de las partes cumplidoras deberán notificar a la parte incumplidora un requerimiento para que cumpla en un determinado plazo.',
      },
      {
        id: OptionEnum.B,
        text: 'El requerimiento efectuado por la parte cumplidora será comunicado al responsable del mecanismo de vigilancia y control, únicamente.',
      },
      {
        id: OptionEnum.C,
        text: 'Si trascurrido el plazo indicado en el requerimiento persistiera el incumplimiento, la parte cumplidora que lo dirigió notificará a las partes firmantes la concurrencia de la causa de resolución y se entenderá resuelto el convenio.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 449,
    text: 'Según lo previsto en la Ley de Régimen Jurídico del Sector Público, extinguido un convenio del que deriven compromisos financieros se procederá a su liquidación conforme a las siguientes reglas:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Si de la liquidación resultara que el importe de las actuaciones ejecutadas por alguna de las partes fuera inferior a los fondos recibidos, el resto de partes deberá abonar a la parte de que se trate la diferencia que corresponda.',
      },
      {
        id: OptionEnum.B,
        text: 'Si de la liquidación resultara que el importe de las actuaciones ejecutadas por alguna de las partes fuera inferior a los fondos por ella recibidos, deberá reintegrar el exceso que corresponda a cada una en el plazo máximo de un mes desde su extinción.',
      },
      {
        id: OptionEnum.C,
        text: 'Si de la liquidación resultara que el importe de las actuaciones ejecutadas por alguna de las partes fuera superior a los fondos recibidos, el resto de partes deberá abonar a la parte de que se trate la diferencia que corresponda.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 450,
    text: 'De conformidad con lo señalado en la Ley de Régimen Jurídico del Sector Público, respecto de las liquidaciones de convenios extinguidos de los que deriven compromisos financieros, ¿cuál de las siguientes afirmaciones es correcta?',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Transcurrido el plazo para el reintegro sin que éste se haya realizado, las partes del convenio podrán, de común acuerdo, exigir a la parte deudora el correspondiente interés de demora.',
      },
      {
        id: OptionEnum.B,
        text: 'En ningún caso las partes del convenio tendrán derecho a exigir al resto cuantía alguna que supere la que cada una de ellas se hubiera comprometido a aportar en virtud del convenio.',
      },
      {
        id: OptionEnum.C,
        text: 'Las partes deberán cubrir el exceso que conlleve el importe de las actuaciones ejecutadas, aunque éste supere las cantidades que cada una de ellas se hubiera comprometido a aportar en virtud del convenio.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 451,
    text: 'De conformidad con lo señalado en la Ley de Régimen Jurídico del Sector Público, si concurriendo alguna causa de resolución de un convenio existieran actuaciones en curso de ejecución:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Las partes podrán acordar la continuación y finalización de las actuaciones en curso que consideren oportunas, estableciendo un plazo prorrogable para su finalización.',
      },
      {
        id: OptionEnum.B,
        text: 'Las partes podrán acordar un nuevo plazo de duración para la realización de nuevas actuaciones que consideren oportunas.',
      },
      {
        id: OptionEnum.C,
        text: 'Las partes, previa propuesta del órgano de vigilancia y control, podrán acordar la continuación y finalización de las actuaciones en curso que consideren oportunas, estableciendo un plazo improrrogable para su finalización.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 452,
    text: 'La Ley de Régimen Jurídico del Sector Público respecto de los convenios, prevé que éstos se comunicarán al Tribunal de Cuentas u órgano externo de fiscalización de la Comunidad Autónoma:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Dentro de los tres meses siguientes a su suscripción, respecto de cualquier convenio.',
      },
      {
        id: OptionEnum.B,
        text: 'Cuando los compromisos económicos asumidos en virtud del convenio sean por importe igual o superior los 600.000 euros.',
      },
      {
        id: OptionEnum.C,
        text: 'Ambas respuestas son incorrectas.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 453,
    text: 'De conformidad con lo señalado en la Ley de Contratos del Sector Público, las entidades pertenecientes al sector público podrán cooperar entre sí mediante sistemas de cooperación vertical:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Previa celebración de los correspondientes convenios.',
      },
      {
        id: OptionEnum.B,
        text: 'Mediante el oportuno acuerdo de encargo, para el uso de medios propios personificados, en el ejercicio de su potestad de auto organización.',
      },
      {
        id: OptionEnum.C,
        text: 'El resultado de dicha cooperación tendrá naturaleza contractual.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 454,
    text: 'La Ley de Contratos del Sector Público establece determinados requisitos para la consideración de medio propio personificado respecto de dos o más poderes adjudicadores, entre ellos:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Cuando el ente destinatario del encargo sea un ente de personificación jurídicoprivada su capital tendrá que ser mayoritariamente de titularidad pública.',
      },
      {
        id: OptionEnum.B,
        text: 'La condición de medio propio personificado respecto del concreto poder adjudicador que hace el encargo deberá reconocerse en sus estatutos o actos de creación.',
      },
      {
        id: OptionEnum.C,
        text: 'Que al menos el 80 por ciento de las actividades del ente destinatario del encargo se lleven a cabo en el ejercicio de los cometidos que le han sido confiados por los poderes adjudicadores que lo controlan.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 455,
    text: 'Respecto de la exigencia del reconocimiento de la condición de medio propio personificado en los estatutos del ente destinatario del encargo, la Ley de Contratos del Sector Público establece la necesidad de:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'La conformidad o autorización expresa de la entidad destinataria del encargo.',
      },
      {
        id: OptionEnum.B,
        text: 'La verificación por la entidad pública de que dependa el ente de que cuenta con medios personales y materiales apropiados para la realización de los encargos.',
      },
      {
        id: OptionEnum.C,
        text: 'Que los estatutos establezcan la posibilidad de que participen en licitaciones públicas convocadas por el poder adjudicador del que sean medio propio personificado.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 456,
    text: 'Según lo dispuesto en la Ley de Contratos del Sector Público, a los negocios jurídicos que los entes destinatarios del encargo celebren en ejecución del encargo recibido le serán de aplicación, entre otras, las siguientes reglas:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'El importe de las prestaciones parciales que el medio propio pueda contratar con terceros no excederá del 50 por ciento de la cuantía del encargo, en todo caso.',
      },
      {
        id: OptionEnum.B,
        text: 'El contrato quedará sometido a la Ley de Contratos del Sector Público.',
      },
      {
        id: OptionEnum.C,
        text: 'Cuando el medio propio no sea un poder adjudicador se le aplicarán las normas contenidas en el Título I del Libro Segundo de la Ley de Contratos del Sector Público.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 457,
    text: 'Los convenios quedarán excluidos del ámbito de aplicación de la Ley de Contratos del Sector Público, siempre que:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'El desarrollo de la cooperación se guíe en gran medida por consideraciones relacionadas con el interés público.',
      },
      {
        id: OptionEnum.B,
        text: 'Su contenido no esté comprendido en el de los contratos regulados en dicha Ley o en normas administrativas especiales.',
      },
      {
        id: OptionEnum.C,
        text: 'Las entidades intervinientes tengan vocación de mercado.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 458,
    text: 'Son sistemas de cooperación horizontal entre las entidades pertenecientes al sector público, de conformidad con lo señalado en la Ley de Contratos del Sector Público:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Los convenios adoptados por las Administraciones Públicas, cuyo contenido no esté comprendido en el de los contratos regulados en dicha Ley o en normas administrativas especiales.',
      },
      {
        id: OptionEnum.B,
        text: 'La celebración de acuerdos marcos.',
      },
      {
        id: OptionEnum.C,
        text: 'El encargo a medios propios personificados.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 459,
    text: 'El control interno de la actividad económico-financiera del sector público se ejercerá:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Por el órgano interventor mediante el ejercicio de la función interventora, exclusivamente.',
      },
      {
        id: OptionEnum.B,
        text: 'Por el órgano interventor mediante el ejercicio de la función interventora y el control financiero.',
      },
      {
        id: OptionEnum.C,
        text: 'Por el Tribunal de Cuentas mediante el ejercicio del control permanente previo.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 460,
    text: 'La función interventora tiene por objeto:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Verificar el funcionamiento de los servicios del sector público local en el aspecto económico financiero para comprobar el cumplimiento de la normativa y directrices que los rigen.',
      },
      {
        id: OptionEnum.B,
        text: 'Controlar los actos de la Entidad Local y de sus organismos autónomos, que den lugar al reconocimiento de derechos o a la realización de gastos.',
      },
      {
        id: OptionEnum.C,
        text: 'El control de eficacia a través de la auditoría pública.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 461,
    text: 'El órgano interventor, en el ejercicio de sus funciones de control interno, estará sometido a los principios de:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Autonomía funcional, ejercicio desconcentrado y procedimiento contradictorio.',
      },
      {
        id: OptionEnum.B,
        text: 'Equidad, igualdad y justicia material.',
      },
      {
        id: OptionEnum.C,
        text: 'Agilidad, economía y satisfacción del interés general.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 462,
    text: 'Cuando en la práctica de un control, el órgano interventor actuante aprecie que los hechos acreditados o comprobados pudieran dar lugar a la exigencia de responsabilidades penales:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Lo pondrá en conocimiento del órgano competente, al objeto de que se puedan exigir responsabilidades ante los tribunales de justicia correspondientes.',
      },
      {
        id: OptionEnum.B,
        text: 'Lo comunicará exclusivamente al Tribunal de Cuentas haya o no menoscabo de fondos públicos, sin necesidad de ponerlo en conocimiento del órgano competente.',
      },
      {
        id: OptionEnum.C,
        text: 'Deberá custodiar y negar cualquier acceso a los informes de control en tanto no haya un pronunciamiento del Ministerio Fiscal.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 463,
    text: 'El ejercicio de la función interventora comprenderá entre otras las siguientes fases:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'La fiscalización previa de los actos que reconozcan derechos de contenido económico, autoricen o aprueben gastos, dispongan o comprometan activos y acuerden movimientos de fondos y valores.',
      },
      {
        id: OptionEnum.B,
        text: 'La intervención del reconocimiento de obligaciones e intervención de la comprobación formal de la inversión.',
      },
      {
        id: OptionEnum.C,
        text: 'La intervención formal de la ordenación del pago y la intervención material del pago.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 464,
    text: 'El órgano interventor fiscalizará el expediente:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'En el plazo de diez días hábiles, debiendo en todo caso motivar la conformidad con el expediente objeto de fiscalización o intervención.',
      },
      {
        id: OptionEnum.B,
        text: 'En el plazo de 10 días hábiles, salvo que deba recabar asesoramiento jurídico o técnico, en cuyo caso se suspenderá el plazo de fiscalización.',
      },
      {
        id: OptionEnum.C,
        text: 'En el plazo de 5 días hábiles, a petición del Servicio Gestor, por motivos razonados.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 465,
    text: 'En los casos de omisión en el expediente de requisitos o trámites esenciales, procederá la formulación de un reparo con efectos suspensivos:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Cuando el gasto se proponga a un órgano que careza de competencia para su aprobación.',
      },
      {
        id: OptionEnum.B,
        text: 'Cuando se aprecien irregularidades no invalidantes en la documentación justificativa del reconocimiento de la obligación o se acredite insuficientemente el derecho de su perceptor',
      },
      {
        id: OptionEnum.C,
        text: 'Cuando se hayan omitido requisitos o trámites que pudieran dar lugar a la anulabilidad del acto.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 466,
    text: 'El órgano al que se dirija el reparo manifestado por el Interventor podrá:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Aceptarlo, debiendo subsanar las deficiencias observadas sin necesidad de remitir de nuevo las actuaciones al órgano interventor.',
      },
      {
        id: OptionEnum.B,
        text: 'No aceptarlo, remitiéndose entonces el expediente a la Asesoría Jurídica para la emisión de informe que resuelva la discrepancia.',
      },
      {
        id: OptionEnum.C,
        text: 'Aceptarlo, debiendo subsanar las deficiencias observadas y remitir de nuevo las actuaciones al órgano interventor.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 467,
    text: 'Las opiniones del órgano interventor respecto del cumplimiento de las normas:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Prevalecerán sobre las de los órganos de gestión, no pudiendo el Presidente separarse de dicho informe, pero sí el Pleno.',
      },
      {
        id: OptionEnum.B,
        text: 'Supondrán siempre el planteamiento de una discrepancia, debiendo revestir el carácter de reparo y nunca de mera observación complementaria.',
      },
      {
        id: OptionEnum.C,
        text: 'No prevalecerán sobre las de los órganos de gestión, sin perjuicio del carácter suspensivo de los reparos.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 468,
    text: 'Corresponderá al Pleno la resolución de las discrepancias cuando:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'El reparo derive de comprobaciones materiales de obras, suministros, adquisiciones y servicios.',
      },
      {
        id: OptionEnum.B,
        text: 'Se basen en insuficiencia o inadecuación del crédito.',
      },
      {
        id: OptionEnum.C,
        text: 'En los casos de omisión en el expediente de trámites.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 469,
    text: 'La resolución de la discrepancia por parte del Presidente o el Pleno será:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Indelegable, debiendo recaer en el plazo de 10 días sin tener naturaleza ejecutiva.',
      },
      {
        id: OptionEnum.B,
        text: 'Indelegable, debiendo recaer en el plazo de 15 días y tendrá naturaleza ejecutiva.',
      },
      {
        id: OptionEnum.C,
        text: 'Delegable, debiendo recaer en el plazo de 15 días y tendrá naturaleza ejecutiva.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 470,
    text: 'El informe sobre resolución de discrepancias por el Presidente de la Entidad Local contrarias a los reparos efectuados:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Podrá elevarse al Pleno, acompañado de un resumen de las principales anomalías detectadas en materia de ingresos.',
      },
      {
        id: OptionEnum.B,
        text: 'Se elevará al Pleno pudiendo incluir cuestiones de oportunidad o conveniencia de las actuaciones fiscalizadas.',
      },
      {
        id: OptionEnum.C,
        text: 'Se elevará al Pleno pudiendo el Presidente de la Corporación presentar en el Pleno informe justificativo de su actuación.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 471,
    text: 'No estarán sometidos a fiscalización previa:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Los gastos de carácter periódico y demás de tracto sucesivo, una vez fiscalizado el gasto correspondiente al período inicial del acto o contrato del que deriven o sus modificaciones.',
      },
      {
        id: OptionEnum.B,
        text: 'Los gastos de importe superior a 3.005, 06 euros que, de acuerdo con la normativa vigente, se hagan efectivos a través del sistema de anticipos de caja fija',
      },
      {
        id: OptionEnum.C,
        text: 'Los gastos de material inventariable.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 472,
    text: 'El control financiero de la actividad económica-financiera del sector público se ejercerá mediante el ejercicio:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'De la fiscalización plena y la fiscalización previa limitada.',
      },
      {
        id: OptionEnum.B,
        text: 'De la fiscalización plena y la emisión de reparos.',
      },
      {
        id: OptionEnum.C,
        text: 'Del control permanente y la auditoría pública.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 473,
    text: 'El control permanente se ejercerá sobre la Entidad Local y los organismos públicos en los que se realice la función interventora:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Con objeto de comprobar, que el funcionamiento de la actividad económico-financiera del sector público local se ajusta el ordenamiento jurídico y a los principios generales de buena gestión financiera, no pudiendo aplicar técnicas de auditoría.',
      },
      {
        id: OptionEnum.B,
        text: 'Con objeto de comprobar, que el funcionamiento de la actividad económico-financiera del sector público local se ajusta el ordenamiento jurídico y a los principios generales de buena gestión financiera, pudiendo aplicar técnicas de auditoría.',
      },
      {
        id: OptionEnum.C,
        text: 'Con objeto de verificar mediante el examen de los documentos originales el ajuste de la orden de pago al acto de reconocimiento de la obligación.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 474,
    text: 'El órgano interventor de la Entidad Local realizará anualmente la auditoría de las cuentas anuales de:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Los organismos autónomos locales y las entidades públicas empresariales locales.',
      },
      {
        id: OptionEnum.B,
        text: 'Las fundaciones del sector público local, en todo caso.',
      },
      {
        id: OptionEnum.C,
        text: 'Los organismos autónomos locales solamente.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 475,
    text: 'En relación con el Plan Anual de Control Financiero que deberá elaborar el órgano interventor, señale cuál de las siguientes afirmaciones es correcta:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Incluirá las actuaciones que aleatoriamente decida el citado órgano sobre la base de un análisis de riesgos consistente.',
      },
      {
        id: OptionEnum.B,
        text: 'La importancia del riesgo está sujeta a una evaluación en la que se utilizarán tanto criterios cuantitativos como cualitativos.',
      },
      {
        id: OptionEnum.C,
        text: 'La ausencia reiterada de control que pudiera causar debilidades en actividades económico-financieras calificadas sin riesgo es inevitable, asumiendo el órgano interventor esa decisión.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 476,
    text: 'Los trabajos de control permanente se realizarán de forma continuada e incluirán las siguientes actuaciones, entre otras:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Verificación del incumplimiento de la normativa y procedimientos aplicables a los aspectos de la gestión financiera ya revisados en fiscalización previa limitada.',
      },
      {
        id: OptionEnum.B,
        text: 'Seguimiento de la ejecución contable y verificación del cumplimiento de las variaciones en la estructura de las entidades objeto de control.',
      },
      {
        id: OptionEnum.C,
        text: 'Comprobación de la planificación, gestión y situación de la tesorería.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 477,
    text: 'Para la aplicación de los procedimientos de auditoría podrán desarrollarse las siguientes actuaciones, entre otras:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Examinar cuantos documentos y antecedentes de cualquier clase afecten directa o indirectamente a la gestión administrativa del órgano, organismo o ente auditado.',
      },
      {
        id: OptionEnum.B,
        text: 'Solicitar información fiscal y de Seguridad Social de los órganos, organismos y entidades públicas que se considere relevante cuando el Tribunal de Cuentas lo haya autorizado de forma expresa.',
      },
      {
        id: OptionEnum.C,
        text: 'Solicitar los asesoramientos y dictámenes jurídicos y técnicos que sean necesarios.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 478,
    text: 'El resultado de las actuaciones de control permanente y de cada una de las auditorías se documentará:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'En informes escritos, en los que se expondrán los hechos comprobados y las conclusiones obtenidas, sin que puedan formularse recomendaciones, al estar expresamente vetada esta posibilidad.',
      },
      {
        id: OptionEnum.B,
        text: 'En informes escritos, en los que se expondrán los hechos comprobados y las conclusiones obtenidas, así como recomendaciones y deficiencias que deberán ser subsanadas mediante una actuación correctora inmediata, debiendo verificarse su realización en las siguientes actuaciones de control.',
      },
      {
        id: OptionEnum.C,
        text: 'En informes escritos, en los que se expondrán los hechos comprobados y las conclusiones obtenidas, así como recomendaciones y deficiencias que deberán ser subsanadas mediante una actuación correctora inmediata, no debiendo verificarse su realización en las siguientes actuaciones de control.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 479,
    text: 'La fiscalización externa de las cuentas y de la gestión económica de las entidades locales y de todos los organismos y sociedades de ellas dependientes es función propia de:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'La Delegación de Economía y Hacienda del Ministerio de Hacienda y Función Pública.',
      },
      {
        id: OptionEnum.B,
        text: 'El Tribunal de Cuentas, con el alcance y condiciones que establece su ley orgánica reguladora y su ley de funcionamiento.',
      },
      {
        id: OptionEnum.C,
        text: 'El Pleno de la Corporación Local conforme a lo previsto en el correspondiente Reglamento Orgánico y Bases reguladoras.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 480,
    text: 'El patrimonio de las Entidades locales estará constituido:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Por el conjunto de derechos, bienes y obligaciones que les pertenezcan',
      },
      {
        id: OptionEnum.B,
        text: 'Por el conjunto de derechos, bienes y acciones que les pertenezcan',
      },
      {
        id: OptionEnum.C,
        text: 'Por la renta bruta, sin ningún tipo de deducción.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 481,
    text: 'El orden de prelación del régimen de bienes de las Entidades Locales se regirá:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Por la legislación básica del Estado en materia de régimen local, por la legislación básica del Estado reguladora del régimen jurídico de los bienes de las Administraciones Públicas, por la legislación de la Comunidad Autónoma no básica en materia de régimen local.',
      },
      {
        id: OptionEnum.B,
        text: 'Por la legislación básica del Estado en materia de régimen local, por la legislación básica del Estado reguladora del régimen jurídico de los bienes de las Administraciones Públicas, por la legislación que en el ámbito de sus competencias dicen las Comunidades Autónomas, en defecto de la legislación a que se refieren los apartados anteriores, directamente por las ordenanzas propias de cada Entidad.',
      },
      {
        id: OptionEnum.C,
        text: 'Por la legislación básica del Estado en materia de régimen local, por la legislación básica del Estado reguladora del régimen jurídico de los bienes de las Administraciones Públicas, por la legislación que en el ámbito de sus competencias dicen las Comunidades Autónomas, y en defecto de las anteriores, por la legislación estatal no básica en materia de régimen local y bienes públicos.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 482,
    text: 'No se regirán los bienes de las Entidades locales, en ningún caso:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Por lo previsto en los ordenamientos jurídicos administrativo y civil.',
      },
      {
        id: OptionEnum.B,
        text: 'Por las ordenanzas propias de cada Entidad.',
      },
      {
        id: OptionEnum.C,
        text: 'Por lo previsto en el Reglamento de Bienes de las Entidades Locales, aprobado por Decreto de 27 de mayo de 1955.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 483,
    text: 'Los bienes de las Entidades locales se clasificarán:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Bienes de dominio público de interés público y patrimoniales.',
      },
      {
        id: OptionEnum.B,
        text: 'Bienes de dominio público de uso o servicio público y patrimoniales.',
      },
      {
        id: OptionEnum.C,
        text: 'Bienes patrimoniales comunales.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 484,
    text: 'Son bienes de uso público local:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Las Casas Consistoriales, Palacios Provinciales y, en general, edificios que sean de las mismas, mataderos, mercados, lonjas, hospitales, hospicios, museos, montes catalogados, escuelas, cementerios, elementos de transporte.',
      },
      {
        id: OptionEnum.B,
        text: 'Los caminos, plazas, calles, paseos, parques, aguas de fuentes y estanques, puentes y demás piscinas y campos de deporte.',
      },
      {
        id: OptionEnum.C,
        text: 'Los caminos, plazas, calles, paseos, parques, aguas de fuentes y estanques, puentes y demás obras públicas de aprovechamiento o utilización generales.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 485,
    text: 'La afectación de los inmuebles al uso público se producirá, en todo caso y sin perjuicio de la vinculación del suelo a su destino urbanístico desde la aprobación de los planes:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'En el momento de la adquisición del bien.',
      },
      {
        id: OptionEnum.B,
        text: 'En el momento de la cesión del derecho a la Administración actuante conforme a la legislación urbanística.',
      },
      {
        id: OptionEnum.C,
        text: 'En el momento de la cesión de la obligación a la Administración actuante conforme a la legislación urbanística.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 486,
    text: 'Los bienes comunales y demás de dominio público son:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Alienables, embargables y sujetos a prescripción.',
      },
      {
        id: OptionEnum.B,
        text: 'Inalienables, inembargables e imprescriptibles y no sujetos a tributo alguno.',
      },
      {
        id: OptionEnum.C,
        text: 'Inalienables, inembargables e imprescriptibles y sujetos a determinados tributos.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 487,
    text: 'Son bienes patrimoniales o de propios los que siendo propiedad de la Entidad local:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Estén destinados a un uso público o afectados a un servicio público y puedan constituir fuentes de ingresos para el erario de la entidad local.',
      },
      {
        id: OptionEnum.B,
        text: 'No estén destinados a uso público ni afectados a algún servicio público y puedan constituir fuentes de ingresos para el erario de la entidad local.',
      },
      {
        id: OptionEnum.C,
        text: 'No estén destinados a uso público ni afectados a algún servicio público y en ningún caso puedan constituir fuentes de ingresos para el erario de la entidad local.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 488,
    text: 'El expediente de alteración de la calificación jurídica de los bienes de las entidades locales:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Deberá ser resuelto, previa información pública durante un mes, por la Corporación Local respectiva, mediante acuerdo adoptado con el voto favorable de la mayoría absoluta del número legal de miembros de la misma.',
      },
      {
        id: OptionEnum.B,
        text: 'Deberá ser resuelto, previa información pública durante un mes, por la Corporación Local respectiva, mediante acuerdo adoptado con el voto favorable de la mayoría simple del número legal de miembros de la misma.',
      },
      {
        id: OptionEnum.C,
        text: 'Deberá ser resuelto, previa información pública durante dos meses, por la Corporación Local respectiva, mediante acuerdo adoptado con el voto favorable de la mayoría absoluta del número legal de miembros de la misma.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 489,
    text: 'En la utilización de los bienes de dominio público se considerará:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Uso común normal, el que no fuere conforme con el destino principal del dominio a que afecte.',
      },
      {
        id: OptionEnum.B,
        text: 'Uso privativo especial, si concurrieran circunstancias especiales de peligrosidad, intensidad del uso o cualquiera otra semejante.',
      },
      {
        id: OptionEnum.C,
        text: 'Uso privativo, el constituido por la ocupación de una porción del dominio público limitando o excluyendo la utilización por los demás.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 490,
    text: 'Respecto a las licencias que se otorguen para el uso común especial normal de los bienes de dominio público, señale cuál de las siguientes afirmaciones es correcta:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Son transmisibles cuando se refieran a las cualidades personales del sujeto o cuando su número no estuviere limitado.',
      },
      {
        id: OptionEnum.B,
        text: 'Se otorgan mediante subasta, no estando su número limitado bajo ninguna circunstancia.',
      },
      {
        id: OptionEnum.C,
        text: 'Se sujetarán a licencia, ajustada a la naturaleza del dominio, a los actos de su afectación y apertura al uso público y a los preceptos de carácter general.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 491,
    text: 'La instalación de un quiosco en una plaza pública que implique la construcción del mismo, constituye:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Un uso común general, sujeto a licencia.',
      },
      {
        id: OptionEnum.B,
        text: 'Un uso privativo, sujeto a concesión.',
      },
      {
        id: OptionEnum.C,
        text: 'Un uso privativo, sujeto a autorización.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 492,
    text: 'En toda concesión sobre bienes de dominio público se fijarán las cláusulas con arreglo a las cuales se otorgare, y sin perjuicio de las que se juzgaren conveniente, constarán estas:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Canon que hubiere de satisfacer a la Entidad local, que tendrá el carácter de precio público, y comportará el deber del concesionario o autorizado de abonar el importe de los daños y perjuicios que se causaren a los mismos bienes o al uso general o servicio al que estuvieren destinados.',
      },
      {
        id: OptionEnum.B,
        text: 'Reversión o no de las obras e instalaciones al término del plazo.',
      },
      {
        id: OptionEnum.C,
        text: 'Plazo de la utilización, que tendrá carácter prorrogable con carácter general.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 493,
    text: 'En la ocupación privativa y normal del dominio público:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'No está permitida la iniciativa privada al tratarse de un expediente de interés público.',
      },
      {
        id: OptionEnum.B,
        text: 'Está permitida la iniciativa privada debiendo presentar quien la pretendiere una Memoria explicativa de la utilización y de sus fines.',
      },
      {
        id: OptionEnum.C,
        text: 'Está permitida la iniciativa privada debiendo presentar quien la pretendiere una garantía provisional consistente en el 2 por 100 del valor del dominio público objeto de la ocupación con carácter previo a que la Corporación encargue a sus técnicos la redacción del proyecto correspondiente.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 494,
    text: 'Los bienes inmuebles patrimoniales podrán enajenarse, gravarse y permutarse sin autorización del órgano competente de la Comunidad Autónoma:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Cuando su valor no exceda del 25 por 100 de los recursos ordinarios del presupuesto anual de la Corporación.',
      },
      {
        id: OptionEnum.B,
        text: 'Cuando su valor exceda del 25 por 100 de los ingresos brutos del presupuesto anual de la Corporación.',
      },
      {
        id: OptionEnum.C,
        text: 'Cuando su valor exceda del 25 por 100 de los recursos ordinarios del presupuesto anual de la Corporación.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 495,
    text: 'Conforme al Reglamento de Bienes de las Corporaciones Locales, la cesión gratuita de los bienes propiedad de las administraciones públicas requerirá la instrucción previa del expediente, con arreglo a los siguientes requisitos:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Justificación documental por la propia Entidad o Institución solicitante de su carácter público, Certificación del Registro de la Propiedad acreditativa de que los bienes se hallan debidamente inscritos en concepto de bienes demaniales de la Entidad Local.',
      },
      {
        id: OptionEnum.B,
        text: 'Certificado del Interventor de fondos en el que pruebe no haber deuda pendiente de liquidación con cargo al presupuesto municipal.',
      },
      {
        id: OptionEnum.C,
        text: 'Certificación del Secretario de la Corporación en la que conste que los bienes figuran en el inventario aprobado por la Corporación en concepto de patrimoniales.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 496,
    text: 'Conforme al Reglamento de Bienes de las Corporaciones Locales, si los bienes patrimoniales no fuesen destinados al uso para el que fueron gratuitamente cedidos, y no se hubiera establecido plazo en el acuerdo de cesión:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Se considerará resuelta la cesión y revertirán aquéllos a la Corporación local, entendiéndose que los fines para los cuales se hubieran otorgado deberán cumplirse en el plazo máximo de cuatro años.',
      },
      {
        id: OptionEnum.B,
        text: 'Se considerará resuelta la cesión y revertirán aquéllos a la Corporación local, entendiéndose que los fines para los cuales se hubieran otorgado deberán cumplirse en el plazo máximo de cinco años.',
      },
      {
        id: OptionEnum.C,
        text: 'La Entidad beneficiaria tendrá derecho a solicitar un cambio de uso por razones de interés público.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 497,
    text: 'Las enajenaciones de bienes patrimoniales de las Corporaciones locales:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Han de someterse a subasta, en todo caso con sujeción a la normativa reguladora de la contratación de las Corporaciones Locales.',
      },
      {
        id: OptionEnum.B,
        text: 'No se someterán a subasta en los casos de enajenación mediante permuta con otros bienes de carácter inmobiliario, previo expediente que acredite la necesidad de efectuarla.',
      },
      {
        id: OptionEnum.C,
        text: 'Se permite la enajenación directa de los bienes por acuerdo plenario cuando el valor no exceda del 10 por 100 de los recursos ordinarios del presupuesto.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 498,
    text: 'El aprovechamiento o disfrute de los bienes comunales se efectuará:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Exclusivamente en régimen de explotación común o cultivo colectivo.',
      },
      {
        id: OptionEnum.B,
        text: 'En ningún caso podrá acudirse a la adjudicación mediante precio.',
      },
      {
        id: OptionEnum.C,
        text: 'En determinados supuestos, podrá adjudicarse por lotes o suertes.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 499,
    text: 'Corresponde a las Entidades Locales de carácter territorial, las siguientes potestades en relación con sus bienes, en el supuesto de que así lo prevean las leyes de las Comunidades Autónomas:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'La potestad de investigación, la de deslinde, la de recuperación de oficio y la de autotutela.',
      },
      {
        id: OptionEnum.B,
        text: 'La potestad de investigación, la de deslinde, la de recuperación de oficio y la de desahucio administrativo.',
      },
      {
        id: OptionEnum.C,
        text: 'La potestad de investigación, la de deslinde, la de recuperación de oficio y la de auto organización.',
      },
    ],
    solution: OptionEnum.A,
  },
  {
    id: 500,
    text: 'En el inventario de bienes, los bienes se reseñarán, por separado, agrupándolos en:',
    selections: [
      {
        id: OptionEnum.A,
        text: 'Ocho epígrafes: inmuebles, derechos reales, muebles de carácter histórico, pictórico o de considerable valor económico, valores mobiliarios, créditos y derechos de carácter inmaterial de la Corporación, vehículos, semovientes, muebles no comprendidos en los anteriores enunciados y bienes y obligaciones revertibles.',
      },
      {
        id: OptionEnum.B,
        text: 'Ocho epígrafes: inmuebles, derechos reales, muebles de carácter histórico, artístico o de considerable valor económico, valores mobiliarios, créditos y derechos de carácter personal de la Corporación, vehículos, semovientes, muebles no comprendidos en los anteriores enunciados y bienes y derechos revertibles.',
      },
      {
        id: OptionEnum.C,
        text: 'Siete epígrafes: inmuebles, derechos reales, muebles de carácter histórico, pictórico o de considerable valor económico, valores mobiliarios, créditos y derechos de carácter inmaterial de la Corporación, vehículos, semovientes y bienes y obligaciones revertibles.',
      },
    ],
    solution: OptionEnum.A,
  },
];
