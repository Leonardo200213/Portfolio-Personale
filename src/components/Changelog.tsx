import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const changelogEntries = [
  {
    version: "1.3",
    notes: ["Aggiunto footer in ogni pagina", "Aggiunto Changelog nel footer"],
  },
  {
    version: "1.2",
    notes: ["Aggiunta sezione Progetti tramite API nella pagina Lavoro"],
  },
  {
    version: "1.1",
    notes: ["Aggiunto link ai siti web delle aziende nella pagina Lavoro"],
  },
  {
    version: "1.0",
    notes: ["Pubblicazione della versione stabile del sito"],
  },
];

interface ChangelogProps {
  open: boolean;
  onClose: () => void;
}

export default function Changelog({ open, onClose }: ChangelogProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-end">
      <div className="w-full h-[95vh] bg-gray-800 text-white animate-slideUp overflow-auto">
        <div className="flex items-center p-10">
          <button onClick={onClose}>
            <FontAwesomeIcon icon={faXmark} size="3x" />
          </button>
          <h2 className="flex-1 text-center font-bold text-4xl">Changelog</h2>
        </div>

        <div className="p-10 text-lg text-left max-w-2xl mx-auto">
          {changelogEntries.map((entry) => (
            <div key={entry.version} className="mt-8">
              <p className="text-2xl font-semibold mb-2">
                Versione {entry.version}
              </p>
              <ul className="ml-5 list-disc list-inside">
                {entry.notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
