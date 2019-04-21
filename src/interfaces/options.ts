export interface Options {
  countTotal: number;
  countComplete: number;
  countNotComplete: number;
  hasCompleted: boolean;
  isAllComplete: boolean;
  isEditing: boolean;
  hasData: boolean;
  isOneCount: boolean;
  filter: {
    all?: boolean;
    completed?: boolean;
    active?: boolean;
  };
}
