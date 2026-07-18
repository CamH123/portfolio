import NavigationButton from "./NavigationButton";

const sections = [
  { number: 0, title: "cover" },
  { number: 1, title: "about" },
  { number: 2, title: "projects" },
  { number: 3, title: "experience" },
  { number: 4, title: "contact" },
  { number: 5, title: "bonus" },
];

export default function Header() {
  return (
    <div className="flex flex-row justify-between items-end w-full px-6 pb-1 text-mag-white text-shadow-xs border-b border-mag-white">
      <div>
        <h1 className="text-[clamp(1.5rem,2.5vw,2.5rem)]">Cameron Huang</h1>
      </div>
      <div className="flex flex-row gap-5">
        {sections.map((s) => (
          <NavigationButton key={s.number} sectionNumber={s.number} sectionTitle={s.title} />
        ))}
      </div>
    </div>
  );
}
