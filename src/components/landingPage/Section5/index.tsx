import React from 'react';

export interface Section5Props {
  text?: string;
}

export const Section5: React.FC<Section5Props> = ({
  text = 'Our platforms focuses on long-term mentorship, but we also know that a single meeting can sometimes be all you need. With that in mind we have developed one time guidance plan.',
}) => {
  return (
    <div>
        <h1>Helllooo</h1>
    </div>
  );
};
