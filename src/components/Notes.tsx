import { Describe, NotesList } from "./index"
import { data } from '../data/data'
import { useEffect, useState } from "react"

interface Data {
  id: number;
  desc: string;
  done?: boolean;
}

export const Notes: React.FC = () => {

  let myData: Data[] = data

  if (localStorage.getItem('data')) {
    const storedData = localStorage.getItem('data');
    myData = storedData ? JSON.parse(storedData) : data;
  
  }

  const [state, setState] = useState<Data[]>(myData)
  const [idEditNote, setIdEdittNote] = useState<number | null>(null);
  const [textEditNote, setTextEditNote] = useState<string>("")
  const [text, setText] = useState<string>(""); // Локальное состояние для textarea
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(state));
  }, [state]);

  const editNote = (id: number, text: string) => {
    setIdEdittNote(id);
    setTextEditNote(text);
  };

  return (
    <div className="notes">
      <NotesList state={state} 
                  setState={setState} 
                  editNote={editNote} 
                  idEditNote={idEditNote} 
                  setText={setText}
                  setIsVisible={setIsVisible}/>
      <Describe setState={setState} 
                setIdEdittNote={setIdEdittNote}
                idEditNote={idEditNote} 
                textEditNote={textEditNote} 
                text={text} 
                setText={setText}
                isVisible={isVisible}
                setIsVisible={setIsVisible}
                />
    </div>
  )
}
