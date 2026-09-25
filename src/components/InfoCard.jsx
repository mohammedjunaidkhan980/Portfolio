const rotations = ['-3deg', '2deg', '-2deg', '3deg', '-1deg'];

export default function InfoCard({ label, value, color = '#F8F8F5', index = 0 }) {
  return (
    <div
      className="border-brutal shadow-brutal px-5 py-4 inline-block"
      style={{
        background: color,
        transform: `rotate(${rotations[index % rotations.length]})`,
      }}
    >
      <p className="font-mono text-xs text-[#666] mb-1 tracking-widest">{label}</p>
      <p className="font-anton text-xl leading-tight">{value}</p>
    </div>
  );
}
