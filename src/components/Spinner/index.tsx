import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

export interface SpinnerProps {
  fontSize?: number;
  className?: string;
  large?: boolean;
}

export const Spinner: React.FC<SpinnerProps> = ({
  fontSize = 24,
  className,
  large = false,
}) => {
  const antIcon = (
    <LoadingOutlined className={className} style={{ fontSize }} spin />
  );
  const SpinnerComponent = <Spin indicator={antIcon} />;
  if (large)
    return (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {SpinnerComponent}
      </div>
    );
  return SpinnerComponent;
};
