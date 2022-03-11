import { Button, ButtonProps as AntButtonProps } from 'antd';
import { SizeType } from 'antd/lib/config-provider/SizeContext';
import classnames from 'classnames';
import React from 'react';
import styles from './style.module.css';

export interface ButtonProps extends AntButtonProps {
  text?: string | React.ReactNode;
  isSecondary?: boolean;
  prefixIcon?: any;
  gradient?: [string, string];
  block?: boolean;
  size?: SizeType;
  round?: boolean;
  style?: object;
  ghost?: boolean;
  iconRight?: boolean;
  className?: string;
  type?: 'text' | 'link' | 'ghost' | 'default' | 'primary' | 'dashed';
}

export const CustomButton: React.FC<ButtonProps> = ({
  text = ' ',
  isSecondary = false,
  prefixIcon,
  block = false,
  gradient = ['#8F74FF', '#7B5CFE'],
  round = false,
  size = 'middle',
  type = 'primary',
  iconRight = false,
  className = '',
  style = {},
  ...props
}) => {
  const iconRightStyle: object = {
    display: iconRight ? 'inline-flex' : undefined,
    alignItems: iconRight ? 'center' : undefined,
    justifyContent: iconRight ? 'center' : undefined,
    flexDirection: iconRight ? 'row-reverse' : undefined,
  };
  return (
    <Button
      className={classnames(styles.button, className)}
      block={block}
      type={isSecondary ? 'default' : type}
      icon={prefixIcon}
      style={{
        backgroundImage: isSecondary
          ? 'linear-gradient(180deg, #323740, #13161A)'
          : `linear-gradient(180deg, ${gradient[0]},${gradient[1]})`,
        borderRadius: round ? '8px' : '',
        ...style,
        ...iconRightStyle,
      }}
      size={size}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {text}
    </Button>
  );
};
