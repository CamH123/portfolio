type Props = {
  sectionNumber: number;
  sectionTitle: string;
};

export default function NavigationButton({ sectionNumber, sectionTitle }: Props) {
  return (
    <button className="text-[clamp(0.75rem,1vw,0.875rem)]">
      {String(sectionNumber).padStart(2, "0")} {sectionTitle}
    </button>
  );
}
