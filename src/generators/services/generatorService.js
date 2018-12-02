import { generator } from '@joao.hencke/utils';

const generators = [
  {
    title: 'Gerador de CPF',
    generate: generator.cpf,
  },
  {
    title: 'Gerador de CNPJ',
    generate: generator.cnpj,
  },
  {
    title: 'Gerador de Cartão de Crédito',
    generate: generator.creditCard,
    options() {
      return Object.keys(generator.creditCard.schemas);
    },
  }
];

export default generators;