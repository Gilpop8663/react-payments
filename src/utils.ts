export const isNumber = (value: string) => {
  return !Number.isNaN(Number(value));
};

export const isOnlyEnglish = (value: string) => {
  const englishPattern = /[^a-zA-Z\s]/;

  return !englishPattern.test(value);
};

export const isOnlyKoreanAndEnglish = (value: string) => {
  const koreanAndEnglishPattern = /[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣a-zA-Z\s]/;

  return !koreanAndEnglishPattern.test(value);
};

export const createUniqueId = () => 'id' + Math.random().toString(16).slice(2);

export const isPrevDate = (year: number, month: number) => {
  const date = new Date();
  const currentYear = date.getFullYear() % 100;
  const currentMonth = date.getMonth() + 1;

  if (year < currentYear) {
    return true;
  }

  if (year === currentYear && month < currentMonth) {
    return true;
  }

  return false;
};

export const monthValidate = (month: string) => {
  return Number(month) <= 12 && Number(month) >= 1;
};

export const yearValidate = (year: string) => {
  const currentYear = new Date().getFullYear() % 100;
  return Number(year) >= currentYear && Number(year) <= currentYear + 5;
};

export const lengthValidate = (maxLength: number) => (value: string) => {
  return value.length <= maxLength;
};

export const convertUpperCase = (text: string) => {
  return text.toUpperCase();
};
