import { useEffect, useRef, useState } from "react";

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
}

export const Describe: React.FC<DescribeProps> = ({ 
  setState, textEditNote, idEditNote, text, setText, isVisible, setIsVisible, setIdEdittNote 
}) => {
  const [currentId, setCurrentId] = useState<number | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null); // Ссылка на textarea

  useEffect(() => {
    if (idEditNote !== null) {
      setIsVisible(true);
      setCurrentId(idEditNote);
      setText(textEditNote);
    }
  }, [idEditNote, setIsVisible, setText, textEditNote]);

  useEffect(() => {
    if (isVisible && textareaRef.current) {
      textareaRef.current.focus(); // Устанавливаем фокус
    }
  }, [currentId, isVisible]); // Следим за currentId и видимостью

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

    setState((prev) => {
      const newNote = { id: prev.length + 1, desc: "New note" };
      setCurrentId(newNote.id);
      return [...prev, newNote];
    });
  };

  return (
    <div className="describe">
      <div className="describe-title">
        <p>Describe</p>
        <button className="desc-add" onClick={addNote} disabled={text || !isVisible ? false : true}>
          +
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
          ></textarea>
        </form>
      )}
    </div>
  );
};
