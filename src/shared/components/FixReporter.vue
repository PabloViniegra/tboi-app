<script setup lang="ts">
import { ref } from "vue";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../db";
import { useToast } from "vue-toast-notification";

const name = ref("")
const description = ref("")
const isSubmitting = ref(false)
const toaster = useToast()

const submitForm = async () => {
    if (!name.value || !description.value)
        toaster.warning("Please fill in all fields")

    isSubmitting.value = true;
    try {
        await addDoc(collection(db, "bugs"), {
            name: name.value,
            description: description.value,
            date: new Date()
        });
        name.value = ""
        description.value = ""
        toaster.success("Form submitted successfully")
    } catch (error) {
        toaster.error("An error occurred while submitting the form")
    } finally {
        isSubmitting.value = false;
    }


}
</script>
<template>
    <section class="mt-36 flex flex-col justify-center items-center gap-y-10">
        <header class="flex flex-col gap-y-6 justify-center items-center">
            <h1 class="text-white text-4xl font-extrabold text-center underline ">Report your bugs
            </h1>
            <p class="text-lg text-white/80 w-3/4 md:w-2/3 font-medium text-center">
                The items in The Binding of Isaac have been extracted using scraping techniques, so there may be icon
                errors associated with the objects or other bugs. Please report them in this contact form.
            </p>
        </header>
        <form @submit.prevent="submitForm"
            class="mt-10 flex flex-col gap-y-6 justify-center items-center bg-white/10 backdrop-blur-md rounded-lg px-6 py-10 w-11/12 md:w-2/3 lg:w-1/2 shadow-lg shadow-sky-500/20">
            <div class="flex flex-col gap-y-2 w-full">
                <label for="name" class="font-semibold text-white">Name</label>
                <input type="text" name="name" v-model="name"
                    class="rounded-md p-3 w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    placeholder="Your name...">
            </div>
            <div class="flex flex-col gap-y-2 w-full">
                <label for="description" class="font-semibold text-white">Error</label>
                <textarea name="description" v-model="description" placeholder="Describe the error you are reporting..."
                    class="rounded-md p-3 w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-sky-500"></textarea>
            </div>
            <input type="submit" :value="isSubmitting ? 'Submitting ...' : 'Submit'" :disabled="isSubmitting"
                class="bg-sky-500 text-white py-2 px-8 rounded-full mt-6 hover:bg-sky-600 font-semibold transition duration-300 ease-in-out">
        </form>
    </section>
</template>
