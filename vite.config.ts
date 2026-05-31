import { defineConfig, esmExternalRequirePlugin } from "vite"
import react from "@vitejs/plugin-react"

import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
    plugins: [ react() ],

    server: {
        // Required for the dev server to be accessible outside the Docker container.
        host: "0.0.0.0",
        watch: {
            usePolling: true
        }
    },

    css: {
        preprocessorOptions: {
            sass: {
                loadPaths: ["src/sass"]
            }
        }
    },

    build: {
        rolldownOptions: {
            plugins: [
                esmExternalRequirePlugin({
                    external: ["react", /^node:/]
                })
            ]
        }
    },

    resolve: {
        alias: {
            "@": resolve(__dirname, "./src")
        }
    }
})
