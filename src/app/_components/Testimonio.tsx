import AnimatedCounter from './AnimatedCounter'

export default function Testimonio() {
  return (
    <section className="testimonio" id="testimonio">
      <div className="container">
        <div className="testimonio__metrics reveal">
          <div className="metric">
            <AnimatedCounter value={35} suffix="%" className="metric__number" />
            <div className="metric__separator" />
            <span className="metric__label">Reducción media en tiempo de gestión por expediente</span>
          </div>
          <div className="metric">
            <AnimatedCounter value={6} suffix=" meses" className="metric__number" />
            <div className="metric__separator" />
            <span className="metric__label">Plazo legal controlado automáticamente</span>
          </div>
          <div className="metric">
            <AnimatedCounter value={100} suffix="%" className="metric__number" />
            <div className="metric__separator" />
            <span className="metric__label">Normativa catalana integrada, sin adaptaciones manuales</span>
          </div>
        </div>
      </div>
    </section>
  )
}
