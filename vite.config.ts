export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/Naija-Pot-Taste/',
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
});
