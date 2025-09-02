export interface Student {
  id: number;
  name: string;
  course: string;
  university: string;
  github: string;
}

export const students: Student[] = [
  {
    id: 1,
    name: 'Eduardo Patrick Pereira Cavalcante',
    course: 'Ciencia da Computação',
    university: 'Ceulp/Ulbra',
    github: 'https://github.com/edumxk',
  },
  {
    id: 2,
    name: 'Miguel Mendes Bezerra Costa',
    course: 'Engenharia de Software',
    university: 'Ceulp/Ulbra',
    github: 'https://github.com/joaomiguel21',
  },
  {
    id: 3,
    name: 'Vinicius Felipe Ferreira Folha',
    course: 'Engenharia de Software',
    university: 'Ceulp/Ulbra',
    github: 'https://github.com/VFaoCUBO',
  },
];
