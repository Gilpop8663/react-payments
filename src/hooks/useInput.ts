import {
  type ChangeEvent,
  type Dispatch,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';

export interface UseInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  error: string | undefined;
  setError: Dispatch<React.SetStateAction<string | undefined>>;
  isWrong: boolean;
  maxLength: number;
  required: boolean;
  validate: (text: string) => boolean;
  inputRef: React.RefObject<HTMLInputElement>;
}

interface UseInputOptionProps {
  name: string;
  validate: (text: string) => boolean;
  errorMessage?: string;
  maxLength: number;
  isRequired: boolean;
  isNumber?: boolean;
  convertValue?: (text: string) => string;
}

export const useInput = (
  initialValue: string,
  {
    name,
    validate = () => true,
    errorMessage,
    maxLength,
    isRequired,
    isNumber = false,
    convertValue = (value: string) => value,
  }: UseInputOptionProps
): UseInputProps => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState<string | undefined>('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    const isOverLength = maxLength && maxLength < e.currentTarget.value.length;

    if (isOverLength) {
      return;
    }

    if (isNumber) {
      const convertResult = convertValue(value);
      setValue(convertResult);
      setError('');
      return;
    }

    if (validate(value)) {
      const convertResult = convertValue(value);
      setValue(convertResult);
      setError('');
      return;
    }

    setError(errorMessage);
  };

  const setErrorMessage = useCallback(
    (inputValue: string) => {
      const isSuccess = validate(inputValue);

      if (isSuccess) {
        setError('');
      } else {
        setError(errorMessage);
      }
    },
    [errorMessage, validate]
  );

  useEffect(() => {
    const isNumberValidateCheck = isNumber && maxLength === value.length;

    if (isNumberValidateCheck) {
      setErrorMessage(value);
    }
  }, [maxLength, isNumber, setErrorMessage, value]);

  return {
    inputRef,
    value,
    onChange,
    name,
    error,
    setError,
    isWrong: error !== '',
    required: isRequired,
    validate,
    maxLength,
  };
};
