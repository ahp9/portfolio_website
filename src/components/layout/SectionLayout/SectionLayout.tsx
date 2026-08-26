import SectionDivider from "../../ui/SectionDivider/SectionDivider";
import SectionHeading from "../../ui/SectionHeading/SectionHeading";

import './SectionLayout.css';

type SectionLayoutProps = {
  id?: string;
  number: string;
  title: React.ReactNode;
  size: 'sm' | 'lg';
  children: React.ReactNode;   // sits in the row, beside the heading
  below?: React.ReactNode;     // full-width, rendered under the row
};

export function SectionLayout({ id, number, title, size, children, below }: SectionLayoutProps) {
  return (
    <section id={id} className="section__layout">
      <SectionDivider />
      <div className="section__layout-row">
        <SectionHeading title={title} subtitle={number} size={size} />
        <div className="section__layout-content">{children}</div>
      </div>
      {below && <div className="section__layout-below">{below}</div>}
    </section>
  );
}
