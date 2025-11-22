import {registerLoader} from './moduleLoader';

/**
 * Registers 3D modules on the client for hydration
 * This should be called before the Relay environment is used
 */
export function registerClientModules(modules: string[]): void {
  if (!modules || modules.length === 0) {
    return;
  }

  modules.forEach((module) => {
    if (module.endsWith('$normalization.graphql')) {
      registerLoader(module, () => import(`../__generated__/${module}`));
    } else {
      registerLoader(module, () => import(`../components/3d/${module}`));
    }
  });
}
