/**
 * Type definition for a state update action, which can be either a new state value
 * or a function that takes the previous state and returns the new state.
 */
type SetStateAction<T> = T | ((prevState: T) => T);

/**
 * Type definition for the dispatch function used to update the state.
 */
type Dispatch<T> = (value: SetStateAction<T>) => void;

/**
 * Custom state hook that mimics the useState hook.
 * @param {T} initialState - The initial state value.
 * @returns {[T, Dispatch<T>]} A tuple containing the current state and a function to update it.
 */
export function useCustomState<T>(initialState: T): [T, Dispatch<T>] {
  // Store the current state value.
  let _state = initialState;

  /**
   * Function to update the current state.
   * @param {SetStateAction<T>} newValue - The new state value or a function to produce it.
   */
  const setState: Dispatch<T> = (newValue) => {
    // Check if newValue is a function and update _state accordingly.
    if (typeof newValue === "function") {
      _state = (newValue as (prevState: T) => T)(_state);
    } else {
      // Directly set _state if newValue is not a function.
      _state = newValue;
    }
    console.log("New state is: ", _state);
    // Note: In a real implementation, a re-render of the component would be triggered here.
  };

  // Return the current state and the setState function.
  return [_state, setState];
}
