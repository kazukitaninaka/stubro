import React from 'react';

export default function ContainerSm({ children }: { children: React.ReactNode }) {
  return <div className='max-w-screen-sm mx-auto'>{children}</div>;
}
