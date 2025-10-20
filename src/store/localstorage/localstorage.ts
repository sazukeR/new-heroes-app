export const loadState = <T>(): T | undefined => {
 try {
  const serialized = localStorage.getItem("appState");
  if (!serialized) return undefined;
  return JSON.parse(serialized) as T;
 } catch {
  return undefined;
 }
};

export const saveState = <T>(state: T): void => {
 try {
  const serialized = JSON.stringify(state);
  localStorage.setItem("appState", serialized);
 } catch (error) {
  console.error("Error guardando en localStorage:", error);
 }
};
