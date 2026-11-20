const C = 280;
const R = 200;

const nodes = [
  { idx: "01", label: "Аудит", x: C - 141.42, y: C - 141.42, lx: 0, ly: 46, anchor: "start" as const, cls: "n1 is-lit" },
  { idx: "02", label: "Проектирование", x: C + 141.42, y: C - 141.42, lx: 560, ly: 46, anchor: "end" as const, cls: "n2" },
  { idx: "03", label: "Внедрение", x: C + 141.42, y: C + 141.42, lx: 560, ly: 540, anchor: "end" as const, cls: "n3" },
  { idx: "04", label: "Сопровождение", x: C - 141.42, y: C + 141.42, lx: 0, ly: 540, anchor: "start" as const, cls: "n4" },
];

const ticks = Array.from({ length: 72 }, (_, i) => {
  const a = (i * 5 * Math.PI) / 180;
  const major = i % 6 === 0;
  const r1 = R + 10;
  const r2 = R + (major ? 22 : 15);
  const f = (n: number) => Math.round(n * 100) / 100;
  return {
    x1: f(C + r1 * Math.cos(a)),
    y1: f(C + r1 * Math.sin(a)),
    x2: f(C + r2 * Math.cos(a)),
    y2: f(C + r2 * Math.sin(a)),
    major,
  };
});

export default function Cycle() {
  return (
    <svg
      className="cycle"
      viewBox="0 0 560 560"
      role="img"
      aria-labelledby="cycle-title cycle-desc"
    >
      <title id="cycle-title">Цикл работы Bevalex</title>
      <desc id="cycle-desc">
        Непрерывный цикл работы Bevalex: аудит, проектирование, внедрение,
        сопровождение.
      </desc>

      {ticks.map((t, i) => (
        <line
          key={i}
          className="tick"
          x1={t.x1}
          y1={t.y1}
          x2={t.x2}
          y2={t.y2}
          style={t.major ? { opacity: 0.9 } : undefined}
        />
      ))}

      <circle className="ring" cx={C} cy={C} r={R} />
      <circle className="ring-thin" cx={C} cy={C} r={128} />

      {/* signal travelling around the cycle */}
      <circle
        className="pulse"
        cx={C}
        cy={C}
        r={R}
        transform={`rotate(-135 ${C} ${C})`}
        pathLength={1256.64}
      />

      {nodes.map((n) => {
        // short leader from node toward its corner label
        const dx = n.lx === 0 ? -1 : 1;
        const dy = n.ly < C ? -1 : 1;
        return (
          <g key={n.idx}>
            <line
              x1={n.x + dx * 12}
              y1={n.y + dy * 12}
              x2={n.x + dx * 46}
              y2={n.y + dy * 46}
              stroke="var(--line-strong)"
              strokeWidth={1}
            />
            <circle className={`node-dot ${n.cls}`} cx={n.x} cy={n.y} r={9} />
            <text className="node-idx" x={n.lx} y={n.ly - (n.ly < C ? 24 : 26)} textAnchor={n.anchor}>
              {n.idx}
            </text>
            <text className="node-label" x={n.lx} y={n.ly} textAnchor={n.anchor}>
              {n.label}
            </text>
          </g>
        );
      })}

      <text className="core-small" x={C} y={232} textAnchor="middle">
        ПОЛНЫЙ ЦИКЛ РАБОТ
      </text>
      <text className="core-big num" x={C} y={298} textAnchor="middle">
        БЕВАЛЕКС
      </text>
      <text className="core-name" x={C} y={336} textAnchor="middle">
        системный интегратор · с 1996
      </text>
    </svg>
  );
}
