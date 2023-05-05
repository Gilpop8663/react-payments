import {
  isNumber,
  isOnlyEnglish,
  monthValidate,
  yearValidate,
} from '@utils/validate';

import { type UseInputProps, useInput } from './useInput';

interface UseFormInputsProps {
  homePage: {};
  addCardPage: {
    firstCardNumber: UseInputProps;
    secondCardNumber: UseInputProps;
    thirdCardNumber: UseInputProps;
    fourthCardNumber: UseInputProps;
    year: UseInputProps;
    month: UseInputProps;
    owner: UseInputProps;
    cvc: UseInputProps;
    firstPassword: UseInputProps;
    secondPassword: UseInputProps;
  };
  registerPage: {
    cardTitle: UseInputProps;
  };
}

export const useFormInputs = () => {
  const currentYear = new Date().getFullYear() % 100;
  const formInputs: UseFormInputsProps = {
    homePage: {},
    addCardPage: {
      firstCardNumber: useInput('', {
        name: 'firstCardInput',
        maxLength: 4,
        validate: isNumber,
        isRequired: true,
        errorMessage: '오직 숫자만 입력 가능합니다.',
      }),
      secondCardNumber: useInput('', {
        name: 'secondCardInput',
        maxLength: 4,
        validate: isNumber,
        isRequired: true,
        errorMessage: '오직 숫자만 입력 가능합니다.',
      }),
      thirdCardNumber: useInput('', {
        name: 'thirdCardInput',
        maxLength: 4,
        validate: isNumber,
        isRequired: true,
        errorMessage: '오직 숫자만 입력 가능합니다.',
      }),
      fourthCardNumber: useInput('', {
        name: 'fourthCardInput',
        maxLength: 4,
        validate: isNumber,
        isRequired: true,
        errorMessage: '오직 숫자만 입력 가능합니다.',
      }),
      year: useInput('', {
        name: 'yearInput',
        isRequired: true,
        validate: yearValidate,
        errorMessage: `카드의 연도는 ${currentYear}년부터 ${
          currentYear + 5
        }년까지 입력이 가능합니다.`,
        maxLength: 2,
        isNumber: true,
      }),
      month: useInput('', {
        name: 'monthInput',
        validate: monthValidate,
        isRequired: true,
        errorMessage: '카드의 달은 01월부터 12월까지 입력이 가능합니다.',
        maxLength: 2,
        isNumber: true,
      }),
      owner: useInput('', {
        name: 'ownerInput',
        maxLength: 30,
        validate: isOnlyEnglish,
        isRequired: false,
        errorMessage: '영문만 입력할 수 있어요. 영문으로 변환 해주세요.',
        convertValue: (text: string) => text.toUpperCase(),
      }),
      cvc: useInput('', {
        name: 'cvcInput',
        maxLength: 3,
        isRequired: true,
        errorMessage: '오직 숫자만 입력 가능합니다.',
        validate: isNumber,
      }),
      firstPassword: useInput('', {
        name: 'firstPasswordInput',
        maxLength: 1,
        isRequired: true,
        errorMessage: '오직 숫자만 입력 가능합니다.',
        validate: isNumber,
      }),
      secondPassword: useInput('', {
        name: 'secondPasswordInput',
        maxLength: 1,
        isRequired: true,
        errorMessage: '오직 숫자만 입력 가능합니다.',
        validate: isNumber,
      }),
    },
    registerPage: {
      cardTitle: useInput('', {
        name: 'cardTitleInput',
        maxLength: 20,
        validate: (value: string) => value.length <= 20,
        errorMessage: '20 글자 이하로만 입력 가능해요.',
        isRequired: false,
      }),
    },
  };

  return { formInputs };
};
