import NavigationButton from "./NavigationButton";

const sections = [
  { number: 0, title: "Cover" },
  { number: 1, title: "About" },
  { number: 2, title: "Projects" },
  { number: 3, title: "Experience" },
  { number: 4, title: "Contact" },
  { number: 5, title: "Bonus" },
];

export default function Header() {
  return (
    <div className="flex flex-row justify-between items-end w-full px-8 pb-3 text-mag-white border-b border-mag-white">
      <div>
        <h1>Cameron Huang</h1>
      </div>
      <div className="flex flex-row gap-6">
        {sections.map((s) => (
          <NavigationButton key={s.number} sectionNumber={s.number} sectionTitle={s.title} />
        ))}
      </div>
    </div>
  );
}
