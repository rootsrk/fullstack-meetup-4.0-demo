/**
 * Type definition for an effect callback function. The callback can optionally return a cleanup function.
 */
type EffectCallback = () => void | (() => void | undefined);

/**
 * Type definition for the dependency array. It's an array of values that the effect depends on.
 * The effect will only re-run if one of these values has changed since the last render.
 */
type DependencyList = ReadonlyArray<unknown>;

/**
 * A custom effect hook that mimics the behavior of React's useEffect hook.
 * @param {EffectCallback} effect - The effect function to run.
 * @param {DependencyList} [deps] - Optional array of dependencies that the effect relies on.
 */
export function useCustomEffect(
  effect: EffectCallback,
  deps?: DependencyList
): void {
  // Store the last dependencies array to compare with the current dependencies.
  let lastDeps: DependencyList = [];

  /**
   * Check if the dependencies have changed. If 'deps' is undefined, the effect will always run.
   * Otherwise, it checks each dependency to see if it has changed since the last run.
   */
  const hasChangedDeps = deps
    ? !deps.every((dep, i) => Object.is(dep, lastDeps[i]))
    : true;

  // Only run the effect and potentially its cleanup if the dependencies have changed.
  if (hasChangedDeps) {
    // If there were previous dependencies, run the cleanup function from the last effect, if any.
    if (lastDeps.length > 0) {
      const cleanup = effect();
      if (cleanup) {
        cleanup();
      }
    }

    // Update the last dependencies array to be the current one for comparison in the next run.
    lastDeps = deps ? [...deps] : [];

    // Run the effect.
    effect();
  }
}
