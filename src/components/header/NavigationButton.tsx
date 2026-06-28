type Props = {
  sectionNumber: number;
  sectionTitle: string;
};

export default function NavigationButton({ sectionNumber, sectionTitle }: Props) {
  return (
    <button>
      {String(sectionNumber).padStart(2, "0")} {sectionTitle}
    </button>
  );
}
