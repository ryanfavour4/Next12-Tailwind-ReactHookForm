export interface Itodo {
  id: string | number;
  task: string;
  completed: boolean;
}

export type ItodoContext = {
  todos?: Itodo[] | [];
  filteredTodo?: Itodo[] | [];
  handleAddtodo: (itodo: Itodo) => any | void,
  handleToggleComplete: (itodo: Itodo) => any | void
}
