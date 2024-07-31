export default function Grid(props) {
  const gridSystem = {
    all: props.all ? props.all : 1,
    sm: props.sm ? props.sm : () => this.all,
    md: props.md ? props.md : () => this.sm,
    lg: props.lg ? props.lg : () => this.md,
    xl: props.xl ? props.xl : () => this.lg,
    gap: props.gap ? props.gap : 1,
  };

  const final = `grid  grid-cols-${gridSystem.all} sm:grid-cols-${gridSystem.sm} md:grid-cols-${gridSystem.md} lg:grid-cols-${gridSystem.lg} xl:grid-cols-${gridSystem.xl} gap-${gridSystem.gap} `;

  return <div className={` ${final} ${props.className}`}>{props.children}</div>;
}
