export default function TimelineItem({ item, index, isLast }) {
  return (
    <div className="flex gap-6 relative">
      {/* Line */}
      <div className="flex flex-col items-center">
        <div
          className="w-5 h-5 border-brutal rounded-full flex-shrink-0 mt-1"
          style={{ background: item.color }}
        />
        {!isLast && <div className="w-0.5 flex-1 bg-[#111111] mt-1" />}
      </div>

      {/* Card */}
      <div
        className="bg-[#F8F8F5] border-brutal shadow-brutal p-5 mb-8 flex-1"
        style={{ transform: index % 2 === 0 ? 'rotate(-1deg)' : 'rotate(1deg)' }}
      >
        <span
          className="font-mono text-xs px-2 py-0.5 border-brutal inline-block mb-2"
          style={{ background: item.color }}
        >
          {item.year}
        </span>
        <h3 className="font-anton text-xl mb-1">{item.title}</h3>
        <p className="font-inter text-sm text-[#555] leading-relaxed">{item.description}</p>
      </div>
    </div>
  );
}
