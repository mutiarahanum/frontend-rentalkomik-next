import { ReactNode } from 'react';

interface PageSectionProps {
  judul: string;
  children: ReactNode;
}

const PageSection = ({ judul, children }: PageSectionProps) => {
  return (
    <section>
      <h2>{judul}</h2>
      {children}
    </section>
  );
};

export default PageSection;