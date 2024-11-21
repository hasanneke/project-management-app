import { useRef } from "react";
import Input from "./Input.jsx";
import Modal from "./Modal.jsx";

export default function NewProject({onAdd}) {
    const modal = useRef();
    const title = useRef();
    const description = useRef();
    const date = useRef();

    function handleSave(){
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDate = date.current.value;

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            date: enteredDate,
        });
    }

    return (
      <>
          <Modal ref={modal}>
              <h2>Invalid Input</h2>
              <p>Ooopss.....</p>
          </Modal>
          <div className="w-[35rem] mt-16">
              <menu className="flex item-center justify-end gap-4 my-4">
                  <li>
                      <button className="text-stone-800 hover:text-stone-950">
                          Cancel
                      </button>
                  </li>
                  <li>
                      <button onClick={handleSave}
                              className="rounded-md px-6 py-2 bg-stone-800 text-stone-50 hover:bg-stone-950">
                          Save
                      </button>
                  </li>
              </menu>
              <div>
                  <Input ref={title} label="Title"/>
                  <Input ref={description} label="Description" textArea/>
                  <Input ref={date} type="date" label="Due Date"/>
              </div>
          </div>
      </>
    );
}
