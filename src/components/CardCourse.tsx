type CourseProps = {
  title: string;
  hour: number;
  year: number;
};

export default function CardCourse({ title, hour, year }: CourseProps) {
  return (
    <div className="bg-white rounded-3xl shadow-2xl p-5 max-w-sm w-full">
      <h2 className="font-bold text-xl">{title}</h2>
      <p className="text-lg">{hour} ore</p>
      <p>{year}</p>
    </div>
  );
}
