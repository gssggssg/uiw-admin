import {
  RematchRootState,
  Models,
  RematchDispatch,
  Model,
  createModel,
  init,
  RematchStore
} from '@rematch/core';
import loading, { ExtraModelsFromLoading } from '@rematch/loading';
// @ts-ignore
// import { store, createModels } from "@@/dva"
// no need to extend from Models
export interface RootModel extends Models<RootModel> {
}

type FullModel = ExtraModelsFromLoading<RootModel>
export const store = init<RootModel, FullModel>({
  models: {},
  plugins: [loading()],
});

// const stores = store as RematchStore<RootModel, FullModel>;
// const createModel = createModels as (model: Model<RootModel>, name: string) => void
// export { stores as store, createModel as createModels }

export const { dispatch, addModel } = store

export const createModels = (model: Model<RootModel>, name: string) => {
  const models = createModel<RootModel>()(model)
  addModel({ name, ...models })
}

export type Store = RematchStore<RootModel, FullModel>;
export type AddModel = typeof addModel
export type Dispatch = RematchDispatch<RootModel>
export type RootState = RematchRootState<RootModel, FullModel>;
export type ModelDefault = Model<RootModel>
