// BookContext.tsx
import React, { ReactNode, createContext, useState } from "react";
import { Itodo, ItodoContext } from "../interface/todo";

type Props = {
  children: ReactNode;
};

export const TodoContext = createContext<ItodoContext>(
  [] as unknown as ItodoContext
);

export const TodoProvider = ({ children }: Props) => {
  const [todos, setTodo] = useState<Itodo[]>([
    {
      id: 1,
      task: "Task",
      completed: false,
    },
    {
      id: 2,
      task: "Task Add another BookContext",
      completed: false,
    },
    {
      id: 3,
      task: "Start a youtube video",
      completed: true,
    },
    {
      id: 4,
      task: "Start a google type company",
      completed: true,
    },
  ]);

  const [filteredTodo, setFilteredTodo] = useState<Itodo[] | []>([]);

  const handleAddtodo = (todo: Itodo) => {
    setTodo([...todos, todo]);
  };

  const handleToggleComplete = (todo: Itodo) => {
    const index = todos.findIndex((t) => t.id === todo.id);
    const secondaryArray = [...todos];
    secondaryArray[index].completed = !secondaryArray[index].completed;
    setTodo(secondaryArray);
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        filteredTodo,
        handleAddtodo,
        handleToggleComplete,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
