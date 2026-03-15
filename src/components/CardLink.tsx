type LinkProps = {
  icon: string;
  link: string;
  title: string;
  subtitle: string;
  size: "normal" | "small";
};

export default function Card({ icon, link, title, subtitle, size }: LinkProps) {
  const sizeClass = {
    normal:
      "flex items-center justify-start border-0 shadow-xl rounded-3xl bg-white transition transform duration-200 ease-in-out cursor-pointer hover:scale-103 hover:shadow-black/30 overflow-hidden w-full h-40 px-3 md:px-2",
    small:
      "flex items-center justify-start border-0 shadow-xl rounded-3xl bg-white transition transform duration-200 ease-in-out cursor-pointer hover:scale-103 hover:shadow-black/30 overflow-hidden w-full h-30 px-3 md:px-2",
  };

  const titleSize = size === "small" ? "text-md md:text-xl" : "text-3xl"; //controlla la grandezza della card e modifica la grandezza del titolo

  return (
    <div
      className={`${sizeClass[size]}`}
      onClick={() => window.open(link, "_blank")}
    >
      <img src={icon} className="w-30 h-30 rounded-lg m-3 mx-3" />
      <div className="flex flex-col flex-1 px-4 min-w-0">
        <h1 className={`font-bold ${titleSize}`}>{title}</h1>
        <h1 className="text-xl">{subtitle}</h1>
      </div>
    </div>
  );
}
