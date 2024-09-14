import { IInputGroup } from '../../types';

export const inputGroupsConfig: IInputGroup[] = [
  {
    size: 'default',
    name: 'contacts',
    elements: [
      {
        name: 'name',
        type: 'text',
        placeholder: 'Ваше имя',
        message: null,
        rules: {
          required: true,
        },
      },
      {
        name: 'phone',
        type: 'tel',
        placeholder: '+7 (000) 000 00-00',
        message: 'Не верный формат телефона',
        isPhoneMask: true,
        rules: {
          required: true,
          minLength: 18,
          pattern: {
            value: /^\+\d{1,2}\s\(\d{3}\)\s\d{3}\s\d{2}-\d{2}$/,
            message: 'Не верный формат телефона',
          },
        },
      },
      {
        name: 'city',
        type: 'text',
        placeholder: 'Город',
        message: null,
        rules: {
          required: true,
        },
      },
      {
        name: 'street',
        type: 'text',
        placeholder: 'Улица',
        message: null,
        rules: {
          required: true,
        },
      },
    ],
  },
  {
    size: 'min',
    name: 'address',
    elements: [
      {
        name: 'house',
        type: 'text',
        placeholder: 'Дом',
        message: null,
        rules: {
          required: true,
        },
      },
      {
        name: 'houseBody',
        type: 'text',
        placeholder: 'Корпус',
        message: null,
        rules: {},
      },
      {
        name: 'entrance',
        type: 'number',
        placeholder: 'Подъезд',
        message: null,
        rules: {
          required: true,
          min: 1,
        },
        min: 1,
      },
      {
        name: 'floor',
        type: 'number',
        placeholder: 'Этаж',
        message: null,
        rules: {},
      },
      {
        name: 'apartment',
        type: 'number',
        placeholder: 'Квартира',
        message: null,
        rules: {
          required: true,
          min: 1,
        },
        min: 1,
      },
      {
        name: 'intercom',
        type: 'number',
        placeholder: 'Домофон',
        message: null,
        rules: {
          min: 1,
        },
        min: 1,
      },
    ],
  },
];
