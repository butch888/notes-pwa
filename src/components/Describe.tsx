import { PlusOutlined } from "@ant-design/icons";
import { useEffect, useRef } from "react";

interface Data {
  id: number;
  desc: string;
  done?: boolean;
}

interface DescribeProps {
  setState: React.Dispatch<React.SetStateAction<Data[]>>;
  idEditNote: number | null;
  textEditNote: string;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setIdEdittNote: React.Dispatch<React.SetStateAction<number | null>>;
  currentId: number | null;
  setCurrentId: React.Dispatch<React.SetStateAction<number | null>>;
}

export const Describe: React.FC<DescribeProps> = ({ 
  setState, textEditNote, idEditNote, text, setText, isVisible, setIsVisible, setIdEdittNote, currentId, setCurrentId
}) => {

  // const [currentId, setCurrentId] = useState<number | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null); // Ссылка на textarea

  useEffect(() => {
    if (idEditNote !== null) {
      setIsVisible(true);
      setCurrentId(idEditNote);
      setText(textEditNote);
    }
  }, [idEditNote, setCurrentId, setIsVisible, setText, textEditNote]);

  useEffect(() => {
    if (isVisible && textareaRef.current && idEditNote === null) {
      textareaRef.current.focus(); // Устанавливаем фокус
    }
  }, [currentId, isVisible, idEditNote]); // Следим за currentId и видимостью

  function generateId() {
    // Используем комбинацию времени и случайного числа
    const timestamp = Date.now();
    const randomPart = Math.floor(Math.random() * 1000);
    return timestamp + randomPart;
  }

  const handleTextareaInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.currentTarget.value;
    setText(value);

    setState((prev) =>
      prev.map((note) => (note.id === currentId ? { ...note, desc: value } : note))
    );
  };

  const addNote = () => {
    setIsVisible(true);
    setText("");
    setIdEdittNote(null);
    console.log(currentId)

    setState((prev) => {
      const newNote = { id: generateId(), desc: "Add your new note" };
      setCurrentId(newNote.id);
      return [...prev, newNote];
    });
  };

  return (
    <div className="describe">
      <div className="describe-title">
        <p className="tile">Describe</p>
        <button className="desc-add" onClick={addNote} disabled={text || !isVisible ? false : true}>
          <PlusOutlined />
        </button>
      </div>

      {isVisible && (
        <form>
          <textarea
            ref={textareaRef} // Привязываем ref
            className="hidden-textarea"
            name="describe"
            spellCheck="true"
            value={text}
            onChange={handleTextareaInput}
            placeholder='Add your new note'
          ></textarea>
        </form>
      )}
    </div>
  );
};
