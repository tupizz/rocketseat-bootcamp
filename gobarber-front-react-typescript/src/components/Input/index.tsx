import React, { InputHTMLAttributes, ComponentType } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon: ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }: InputProps) => {
  return (
    <Container>
      {Icon && <Icon />}
      <input {...rest} />
    </Container>
  );
};

export default Input;
