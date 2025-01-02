<script setup lang="ts">

</script>
<template>
    <footer class="bg-blue-700/70 backdrop-blur-md rounded-md text-white py-6 w-full mt-48">
        <div class="container mx-auto flex flex-col md:flex-row justify-between items-center gap-y-6 px-4">
            <div class="flex flex-col items-center md:items-start">
                <h2 class="text-2xl font-bold">The Binding of Isaac Platinum Remake</h2>
                <p class="text-sm mt-2">© 2024 All rights reserved.</p>
            </div>
            <nav class="flex flex-col md:flex-row gap-4">
                <RouterLink to="/" class="text-sm hover:underline">Home</RouterLink>
                <RouterLink to="/chatbot" class="text-sm hover:underline">Chatbot</RouterLink>
                <RouterLink to="/about" class="text-sm hover:underline">About</RouterLink>
            </nav>
            <div class="flex gap-4 items-center">
                <a href="https://www.linkedin.com/in/pablo-viniegra-picazo/" target="_blank"
                    class="text-white hover:text-gray-300 transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="size-8" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="1">
                        <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z">
                        </path>
                        <path d="M8 11l0 5"></path>
                        <path d="M8 8l0 .01"></path>
                        <path d="M12 16l0 -5"></path>
                        <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                    </svg>
                </a>
                <a href="https://github.com/PabloViniegra/tboi-app" target="_blank"
                    class="text-white hover:text-gray-300 transition duration-300">
                    <svg class="size-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.165c-3.338.726-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.775.42-1.305.763-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.467-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.24 2.873.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.48 5.92.43.37.823 1.1.823 2.22v3.293c0 .32.22.694.825.577C20.565 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                </a>
            </div>
        </div>
    </footer>
</template>
