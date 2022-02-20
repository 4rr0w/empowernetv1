/* eslint-disable react/jsx-props-no-spreading */
import React, { CSSProperties, ReactNode } from 'react';
import classnames from 'classnames';
import { Input, InputProps } from 'antd';
import styles from './style.module.css';

export interface InputWithIconProps extends InputProps {
  placeholder?: string;
  backgroundColor?: string;
  className?: string;
  width?: string;
  containerStyle?: CSSProperties;
  iconColor?: string;
  onFocusColor?: string;
  icon?: ReactNode;
  error?: boolean;
}

export const InputWithIcon: React.FC<InputWithIconProps> = ({
  placeholder = '',
  error = false,
  backgroundColor = 'rgba(60, 22, 127, 0.07)',
  className = '',
  width = '100%',
  containerStyle = {},
  iconColor = '#fff',
  icon,
  onFocusColor = '#fff',

  ...props
}) => {
  const [focused, setFocused] = React.useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);
  return (
    <div
      className={classnames(styles.inputContainer, className)}
      style={{
        ...containerStyle,
        borderLeft: focused
          ? `min(0.5vw, 6px) solid ${onFocusColor}`
          : `min(0.5vw, 6px) solid ${error ? 'red' : backgroundColor}`,
        backgroundColor,
      }}
    >
      <div
        className={styles.iconContainer}
        style={{
          color: focused ? onFocusColor : iconColor,
        }}
      >
        {icon}
      </div>
      <Input
        placeholder={placeholder}
        className={styles.input}
        style={{ width }}
        onFocus={onFocus}
        onBlur={onBlur}
        {...props}
      />
    </div>
  );
};
