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
}

export const NotesList: React.FC<NotesListProps> = ({ state, setState, editNote, idEditNote, setText, setIsVisible }) => {

  const delNote = () => {
    const updatedState = state.filter((item) => item.id !== idEditNote);
    setState(updatedState);
    setText('');
    setIsVisible(false);
  }

  return (
    <div className="notelist">
      <div className="describe-title">
        <p>Notelist</p>
        <button className="desc-add" onClick={delNote}> - </button>
      </div>
      {state.map((item) => (
        <ul className="note" key={item.id}>
          <li onClick={() => editNote(item.id, item.desc)}
              className={idEditNote === item.id ? "font-bold" : ""}>
            {item.desc.slice(0, 20)}...
          </li>
        </ul>
      ))}
    </div>
  );
};
