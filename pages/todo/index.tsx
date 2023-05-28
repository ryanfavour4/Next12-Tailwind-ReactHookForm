import React, { useContext } from "react";
import TodoLine from "../../components/todo/TodoLine";
import Form from "../../components/Form";
import Modal, { useModal } from "../../components/Modal";
import RoundedButton from "../../components/custom/RoundedButton";
import { TodoContext } from "../../context/todoContext";
import { ItodoContext } from "../../interface/todo";

const Todo = () => {
  const { openModal, closeModal, isModalClosed } = useModal();
  const { todos, handleToggleComplete }: ItodoContext = useContext(TodoContext);

  return (
    <>
      <div className="relative bg-stone-100 min-h-screen">
        <div className="flex pb-28 pt-8 px-3 flex-col gap-5 m-auto w-6/12 max-md:w-full">
          {todos?.length && todos.map((todo) => <TodoLine key={todo.id} handleToggleComplete={handleToggleComplete} todo={todo} />)}
          <p className="text-xs italic text-center text-gray-400">
            you&apos;ve reached the bottom :)
          </p>
        </div>

        <div className="fixed flex flex-col items-center bottom-0 h-20 bg-gradient-to-b from-white/25 from-white/70 to-stone-500 w-full shadow-inner">
          <RoundedButton onClick={openModal}>+</RoundedButton>
        </div>
      </div>
      <Modal isModalClosed={isModalClosed} closeModal={closeModal}>
        <Form closeModal={closeModal} />
      </Modal>
    </>
  );
};

export default Todo;
