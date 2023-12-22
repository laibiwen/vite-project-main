import { initGlobalState, MicroAppStateActions } from "qiankun";

// actions.setGlobalState(state);
// actions.offGlobalStateChange();

export const initActions = () => {
  const state = { count: 0 };
  // 初始化 state
  const actions: MicroAppStateActions = initGlobalState(state);
  return actions;
};
