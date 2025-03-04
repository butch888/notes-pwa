import { DeleteOutlined } from "@ant-design/icons";

interface Data {
  id: number;
  desc: string;
  done?: boolean; // теперь done опционально
}
interface NotesListProps {
  state: Data[];
  setState: React.Dispatch<React.SetStateAction<Data[]>>;
  setText: React.Dispatch<React.SetStateAction<string>>;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>; // Добавлено
  editNote: (id: number, text: string) => void;
  idEditNote: number | null;
  setIdEdittNote: React.Dispatch<React.SetStateAction<number | null>>;
  currentId: number | null;
}

export const NotesList: React.FC<NotesListProps> = ({ state, setState, editNote, idEditNote, setIdEdittNote, setText, setIsVisible, currentId }) => {

  const delNote = () => {
    const updatedState = state.filter((item) => item.id !== idEditNote);
    setState(updatedState);
    setText('');
    setIsVisible(false);
    setIdEdittNote(null);
  }

  return (
    <div className="notelist">
      <div className="describe-title">
        <p className="tile">Notelist</p>
        <button className={idEditNote ? "desc-add" : "desc-add desc-add__visible"} onClick={delNote}>
          <DeleteOutlined />
        </button>
      </div>
      <ul className="note">
        {state.map((item) => (
          <li key={item.id} onClick={() => editNote(item.id, item.desc)}
              className={currentId === item.id ? "font-bold" : ""}>
            {item.desc.slice(0, 20)}...
          </li>
      ))}
      </ul>
    </div>
  );
};
