type CourseProps = {
  title: string;
  hour: number;
  year: number;
};

export default function CardCourse({ title, hour, year }: CourseProps) {
  return (
    <div className="bg-white rounded-3xl shadow-2xl p-5 max-w-sm w-full">
      <h2>{title}</h2>
      <p>
        {hour} ore • {year}
      </p>
    </div>
  );
}
