import {registerLoader} from '@/lib/moduleLoader';

/**
 * Server-side module loader for Server 3D
 * Pre-loads and registers the 3D modules on the server before sending to client
 * This enables server-side rendering of dynamically matched components
 */
export async function loadServerModules(modules: string[]): Promise<void> {
  const IS_SERVER = typeof window === 'undefined';
  if (!IS_SERVER || !modules || modules.length === 0) {
    return;
  }

  // Pre-load and register all modules on the server
  const loadPromises = modules.map(async (module) => {
    try {
      let loadedModule;
      if (module.endsWith('$normalization.graphql')) {
        loadedModule = await import(`@/__generated__/${module}`);
      } else {
        loadedModule = await import(`@/components/3d/${module}`);
      }
      
      // Register the loaded module in the module loader
      // This allows the server to render the component
      registerLoader(module, () => Promise.resolve(loadedModule));
      
      return loadedModule;
    } catch (error) {
      console.error(`Failed to load module ${module} on server:`, error);
      throw error;
    }
  });

  await Promise.all(loadPromises);
}
