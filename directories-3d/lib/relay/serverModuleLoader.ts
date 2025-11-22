/**
 * Server-side module loader for Server 3D
 * Pre-loads the 3D modules on the server before sending to client
 */
export async function loadServerModules(modules: string[]): Promise<void> {
  const IS_SERVER = typeof window === 'undefined';
  if (!IS_SERVER || !modules || modules.length === 0) {
    return;
  }

  // Pre-load all modules on the server
  const loadPromises = modules.map(async (module) => {
    try {
      if (module.endsWith('$normalization.graphql')) {
        await import(`../../__generated__/${module}`);
      } else {
        await import(`../../components/3d/${module}`);
      }
    } catch (error) {
      console.error(`Failed to load module ${module} on server:`, error);
    }
  });

  await Promise.all(loadPromises);
}
