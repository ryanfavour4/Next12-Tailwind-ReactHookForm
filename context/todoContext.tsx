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
  const [todos, setTodo] = useState<Itodo[] | []>([]);

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

  const handleDeleteTodo = (todo: Itodo) => {
    setTodo(todos.filter((t) => t.id !== todo.id));
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        filteredTodo,
        handleAddtodo,
        handleToggleComplete,
        handleDeleteTodo
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
