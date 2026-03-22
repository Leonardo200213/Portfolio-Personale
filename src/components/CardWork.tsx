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
    <div className="flex items-center gap-15 bg-white rounded-3xl shadow-2xl p-5">
      <img src={logo} className="w-105 m-2 object-contain" />

      <div className="flex flex-col text-left gap-1.5">
        <h2 className="text-3xl font-bold">{company}</h2>
        <p>{role}</p>
        <p>{period}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}
