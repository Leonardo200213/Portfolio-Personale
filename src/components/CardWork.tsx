type WorkProps = {
  logo: string;
  company: string;
  role: string;
  period: string;
  description: string;
};

export default function CardWork({
  logo,
  company,
  role,
  period,
  description,
}: WorkProps) {
  return (
    <div className="flex items-center gap-15 bg-white rounded-3xl shadow-2xl p-5 m-3.5 md:m-0">
      <img src={logo} className="max-w-35 md:max-w-105 md:m-2 object-contain" />

      <div className="flex flex-col text-left gap-1.5">
        <h2 className="text-3xl font-bold">{company}</h2>
        <p className="font-semibold text-lg">{role}</p>
        <p>{period}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}
