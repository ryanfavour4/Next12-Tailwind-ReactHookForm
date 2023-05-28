import React from "react";
import { Itodo } from "../../interface/todo";

type Props = {
  todo: Itodo,
  handleToggleComplete: (todo: Itodo) => void
}

const TodoLine = ({todo, handleToggleComplete} : Props) => {

  return (
    <div className="p-5 bg-white flex justify-between w-full border align-middle shadow-inner rounded-full">
      <p className="text-gray-500 text-base font-medium">{todo?.task}</p>
      <span className="overflow-hidden rounded-full flex align-middle shadow-md aspect-square h-6">
        <input
          type="checkbox"
          className="checked:accent-primaryColor aspect-square cursor-pointer"
          name="isComplete"
          id="isComplete"
          onChange={() => handleToggleComplete(todo)}
          checked={todo?.completed}
        />
      </span>
    </div>
  );
};

export default TodoLine;
