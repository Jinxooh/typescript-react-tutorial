import { Record, List } from 'immutable';
import { createAction, handleActions, Action } from 'redux-actions';

const CREATE = 'todos/CREATE';
const REMOVE = 'todos/REMOVE';
const TOGGLE = 'todos/TOGGLE';
const CHANGE_INPUT = 'todos/CHANGE_INPUT';

type CreatePayload = string;
type RemovePayload = number;
type TogglePayload = number;
type ChangeInputPayload = string;

/* type AnotherPayload = {
  something: string;
  like: number;
  this: boolean
}; */

export const actionCreators = {
  create: createAction<CreatePayload>(CREATE),
  remove: createAction<RemovePayload>(REMOVE),
  toggle: createAction<TogglePayload>(TOGGLE),
  changeInput: createAction<ChangeInputPayload>(CHANGE_INPUT),
};

const TodoItemRecord = Record({
  id: 0,
  text: '',
  done: false
});

interface TodoItemDataPrams {
  id?: number;
  text?: string;
  done?: boolean;
}
