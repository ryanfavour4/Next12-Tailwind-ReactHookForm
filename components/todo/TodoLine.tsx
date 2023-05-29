import React, { TouchEventHandler, useState } from "react";
import { Itodo } from "../../interface/todo";

type Props = {
  todo: Itodo;
  handleToggleComplete: (todo: Itodo) => void;
  handleDeleteTodo: (todo: Itodo) => void;
};

const TodoLine = ({ todo, handleToggleComplete, handleDeleteTodo }: Props) => {
  const [startX, setStartX] = useState(0);
  const [incrementTrack, setIncrementTrack] = useState(0);
  const [todoToDelete, setTodoToDelete] = useState<Itodo>(
    [] as unknown as Itodo
  );
  const [currentX, setCurrentX] = useState(0);

  function animate() {
    setIncrementTrack(0);

    const distanceHighCheck = currentX < startX;
    const distanceLowCheck = currentX > startX;

    if (currentX === startX) {
      setIncrementTrack(0);
    }

    if (distanceHighCheck) {
      // if (distanceHighCheck && incrementTrack > 0) {
      //   setIncrementTrack(incrementTrack / currentX);
      // }
      setIncrementTrack(incrementTrack - 2);
    }
    if (distanceLowCheck) {
      // if (distanceHighCheck && incrementTrack > 0) {
      //   setIncrementTrack(-(incrementTrack / currentX));
      // }
      setIncrementTrack(incrementTrack + 2);
    }
  }

  const handleTouchStart = (event: any) => {
    setIncrementTrack(0);
    setStartX(event.touches[0].clientX);
    setCurrentX(event.touches[0].clientX);
    animate();
  };

  const handleTouchMove = (event: any) => {
    animate();
    setCurrentX(event.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIncrementTrack(0);

    if (incrementTrack > 28) {
      console.log("Swiped right");
      handleDeleteTodo(todoToDelete);
    } else if (incrementTrack < -38) {
      console.log("Swiped left");
      handleDeleteTodo(todoToDelete);
    }

    setStartX(0);
    setCurrentX(0);
  };

  return (
    <div
      style={{
        transform: `translateX(${incrementTrack + 5}pt)`,
        transition: "all 0.05s linear",
      }}
      className={`${
        incrementTrack > 25 || incrementTrack < -25 ? "toDeleteSoon" : null
      } p-5 bg-white flex justify-between w-full border align-middle shadow-inner rounded-full`}
    >
      <p className="text-gray-500 text-base font-medium">{todo?.task}</p>
      <span
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={() => {
          handleTouchEnd();
          setTodoToDelete(todo);
        }}
        className="font-bold text-4xl text-primaryColor"
      >
        ⇋
      </span>
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
