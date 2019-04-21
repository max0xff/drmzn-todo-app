export interface Todo {
  id: string;
  text: string;
  isCompleted: boolean;
  isVisible: boolean;
  isEditing?: boolean;
}
