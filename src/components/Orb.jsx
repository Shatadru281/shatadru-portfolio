// Original, code-generated artwork: projected latitude curves of a warped torus.
const strands = Array.from({ length: 58 }, (_, index) => {
  const v = (index / 58) * Math.PI * 2;
  const points = Array.from({ length: 161 }, (_, j) => {
    const u = (j / 160) * Math.PI * 2;
    const r = 152 + 56 * Math.cos(v);
    const x = r * Math.cos(u);
    const y = r * Math.sin(u);
    const z = 68 * Math.sin(v) + 29 * Math.sin(u * 2 + v * 0.5);
    const a = -0.56;
    const xx = x * Math.cos(a) - y * Math.sin(a);
    const yy = x * Math.sin(a) + y * Math.cos(a);
    return `${j ? "L" : "M"}${(300 + xx).toFixed(2)},${(280 + yy * 0.56 + z * 1.26).toFixed(2)}`;
  });
  return points.join(" ") + " Z";
});
export default function Orb() {
  return (
    <div className="orb-wrap" aria-hidden="true">
      <div className="orb-halo" />
      <svg className="orb-svg" viewBox="0 0 600 560" fill="none">
        <defs>
          <linearGradient
            id="strand"
            x1="100"
            x2="470"
            y1="140"
            y2="450"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8d9b48" />
            <stop offset=".34" stopColor="#1c3023" />
            <stop offset=".68" stopColor="#1b231d" />
            <stop offset="1" stopColor="#c0b77a" />
          </linearGradient>
        </defs>
        <g>
          {strands.map((d, i) => (
            <path
              key={i}
              d={d}
              stroke="url(#strand)"
              strokeWidth={i % 3 === 0 ? 1.05 : 0.7}
              opacity={0.7 + i / 200}
            />
          ))}
        </g>
      </svg>
      <div className="orb-coordinate">
        <span className="mini-cross">+</span>
        <span>Curiosity, taking shape.</span>
        <span>↗</span>
      </div>
    </div>
  );
}
