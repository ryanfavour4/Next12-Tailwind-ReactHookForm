import React, { useContext } from "react";
import RoundedButton from "./custom/RoundedButton";
import { useForm } from "react-hook-form";
import Header from "./custom/Header";
import { TodoContext } from "../context/todoContext";
import { Itodo, ItodoContext } from "../interface/todo";

type inputValues = {
  task: string;
};

const Form = ({ closeModal }: { closeModal: () => void }) => {
  const form = useForm<inputValues>();
  const newId = () =>
    Math.ceil(Math.random() * 1000) + String.fromCharCode(Math.random() * 100);
  const { register, control, handleSubmit } = form;
  const { handleAddtodo }: ItodoContext = useContext(TodoContext);

  const handleFormSubmit = (data: inputValues) => {
    const newTodo: Itodo = {
      ...data,
      task: data.task,
      id: newId(),
      completed: false,
    };

    handleAddtodo(newTodo);
    closeModal();
  };

  return (
    <>
      <Header title="Nice Todo List" />
      <div className="bg-white rounded-lg p-6 shadow-xl">
        <h2 className="text-xl font-bold mb-4">Add Todo</h2>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="flex items-center mb-4 gap-4">
            <input
              type="text"
              className="border rounded-full px-4 py-2 w-full"
              placeholder="Enter your todo"
              id="task"
              {...register("task")}
            />
            <RoundedButton>→</RoundedButton>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
