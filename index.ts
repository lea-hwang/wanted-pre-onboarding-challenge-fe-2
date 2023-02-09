interface CreateTodo {
	content: string;
	category: string;
	tag?: string[];
}

interface ReadTodos {}

interface ReadTodo {
	id: number;
}

interface UpdateTodo {
	id: number;
	content: string;
  completed: boolean;
	category: string;
	tag?: string[];
}

interface DeleteTodo {
	id: number;
}

interface DeleteTodos {}

interface DelteTag {
	id: number;
  tag: string[];
}

interface DelteTags {
	id: number;
}
