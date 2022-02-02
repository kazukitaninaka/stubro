import React from 'react';

export default function ContainerSm({ children }: { children: React.ReactNode }) {
  return <div className='max-w-[650px] mx-auto'>{children}</div>;
}
