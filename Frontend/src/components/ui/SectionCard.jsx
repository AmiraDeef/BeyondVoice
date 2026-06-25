function SectionCard({title,children}) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm my-6">
      <h2 className="text-xl font-semibold mb-6 text-[var(--main-color)]">
        {title}
      </h2>

      {children}
    </div>
  );
}
export default SectionCard;