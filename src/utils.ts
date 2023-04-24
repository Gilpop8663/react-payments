export const isNumber = (value: string) => {
  return !Number.isNaN(Number(value));
};

export const isOnlyKoreanAndEnglish = (value: string) => {
  const koreanAndEnglishPattern = /[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣a-zA-Z\s]/;

  return !koreanAndEnglishPattern.test(value);
};

export const createUniqueId = () => 'id' + Math.random().toString(16).slice(2);
