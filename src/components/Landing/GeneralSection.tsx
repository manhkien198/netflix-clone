import { ReactNode } from 'react';
import { Section } from '../../shared/styled/Section';

export interface GeneralSectionProps {
  title: string;
  desc: string;
  image: ReactNode;
  reverse?: boolean;
}

export default function GeneralSection({
  title,
  desc,
  image,
  reverse,
}: GeneralSectionProps) {
  return (
    <Section>
      <div
        className={`flex sm:flex-wrap sm:justify-center md:flex-nowrap md:justify-between items-center max-w-[1100px] mx-auto gap-10`}
        style={reverse ? { flexDirection: 'row-reverse' } : {}}
      >
        <div className='w-[52%]'>
          <h2 className='text-white text-[3.125rem]'>{title}</h2>
          <p className='text-[1.625rem] text-white'>{desc}</p>
        </div>
        <div className='w-[48%] h-full relative z-10'>{image}</div>
      </div>
    </Section>
  );
}
