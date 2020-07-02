import React, {
  InputHTMLAttributes,
  ComponentType,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';

import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';

import { Container, ErrorWrapper } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon: ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  const [isFocus, setIsFocus] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  // Sempre que se criar uma função dentro de um componente não vamos criar como uma function
  // Porque toda vez que o componente for renderizado esse função é declarada novamente
  // Com o hook useCallback conseguimos criar uma função que é "cacheada" na memória
  // [CONCLUSÃO] --> Sempre que for criar uma função dentro do componente -> useCallback
  const handleInputBlur = useCallback((): void => {
    setIsFocus(false);
    setIsFilled(!!inputRef.current?.value);
  }, []);

  const handleInputFocus = useCallback((): void => {
    setIsFocus(true);
  }, []);

  return (
    <Container isErrored={!!error} isFilled={isFilled} isFocus={isFocus}>
      {Icon && <Icon />}
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
      />

      {error && (
        <ErrorWrapper title={error}>
          <FiAlertCircle color="#c53030" size={20} />
        </ErrorWrapper>
      )}
    </Container>
  );
};

export default Input;
