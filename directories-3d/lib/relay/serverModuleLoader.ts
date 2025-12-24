/**
 * Server-side module loader for Server 3D
 * Pre-loads the 3D modules on the server before sending to client
 * This ensures modules are bundled and available for SSR
 */
export async function loadServerModules(modules: string[]): Promise<void> {
  const IS_SERVER = typeof window === 'undefined';
  if (!IS_SERVER || !modules || modules.length === 0) {
    return;
  }

  // Pre-load all modules on the server to ensure they're included in the SSR bundle
  const loadPromises = modules.map(async (module) => {
    try {
      if (module.endsWith('$normalization.graphql')) {
        await import(`@/__generated__/${module}`);
      } else {
        await import(`@/components/3d/${module}`);
      }
    } catch (error) {
      console.error(`Failed to load module ${module} on server:`, error);
      // Don't throw - let the client handle the error if the module is needed
    }
  });

  await Promise.all(loadPromises);
}
