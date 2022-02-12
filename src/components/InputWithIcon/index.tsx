import React, { CSSProperties, ReactNode } from 'react';
import classnames from 'classnames';
import styles from './style.module.css';

export interface InputWithIconProps {
  placeholder?: string;
  backgroundColor?: string;
  className?: string;
  width?: string;
  containerStyle?: CSSProperties;
  iconColor?: string;
  onFocusColor?: string;
  icon?: ReactNode;
}

export const InputWithIcon: React.FC<InputWithIconProps> = ({
  placeholder = '',
  backgroundColor = 'rgba(60, 22, 127, 0.8)',
  className = '',
  width = '100%',
  containerStyle = {},
  iconColor = '#fff',
  icon,
  onFocusColor = '#fff',
}) => {
  const [focused, setFocused] = React.useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);
  return (
    <div
      className={classnames(styles.inputContainer, className)}
      style={{
        ...containerStyle,
        borderLeft: `min(0.5vw, 6px) solid ${
          focused ? onFocusColor : iconColor
        } `,
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
      <input
        placeholder={placeholder}
        className={styles.input}
        style={{ width }}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </div>
  );
};
