import CountUp from 'react-countup';

const stats = [
  { value: 1000, suffix: '+', label: 'Active Users' },
  { value: 2200, suffix: '+', label: 'Assessments' },
  { value: 1300, suffix: '+', label: 'Opportunities' },
  { value: 800, suffix: '+', label: 'Brands trust us' },
  { value: 400, suffix: '+', label: 'Organisations' },
  { value: 10, suffix: '+', label: 'Countries' },
];

export default function OurNumbers() {
  return (
    <section className="py-3 bg-white">
      <h2 className="text-2xl font-bold text-center mb-10">Our Numbers</h2> {/* Increased text-4xl → text-5xl */}
      <div className="flex flex-nowrap overflow-x-auto justify-start items-center gap-15 md:flex-wrap md:justify-center px-4">
  {stats.map((stat, index) => (
    <div
      key={index}
      className="flex flex-col items-center min-w-[100px] transition-all duration-700 ease-in-out transform scale-90 hover:scale-110"
      style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'both' }}
    >
      <h3 className="text-xl md:text-2xl font-semibold">
        <CountUp end={stat.value} duration={2} decimals={stat.value % 1 !== 0 ? 1 : 0} />
        <span className="text-orange-600">{stat.suffix}</span>
      </h3>
      <p className="text-xs md:text-base text-gray-600 text-center">{stat.label}</p>
    </div>
  ))}
</div>
    </section>
  );
}
