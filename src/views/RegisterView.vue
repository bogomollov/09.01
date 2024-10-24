<script setup>
import FormLayout from '@/layouts/FormLayout.vue'
import Input from '@/components/Input.vue'
import Button from '@/components/Button.vue';
import InputLabel from '@/components/InputLabel.vue';
import Checkbox from '@/components/Checkbox.vue';
</script>

<template>
    <FormLayout class="flex flex-col gap-[40px]">
        <h3>Создать аккаунт</h3>
        <form @submit.prevent="post" class="flex flex-col w-[450px] gap-[30px]">
            <div class="flex flex-col gap-[15px]">
                <div class="flex flex-col gap-[15px]">
                    <InputLabel for="login" value="Логин" />
                    <Input id="login" type="login" class="block w-full" placeholder="username" required />
                </div>

                <div class="flex flex-col gap-[15px]">
                    <InputLabel for="password" value="Пароль" />
                    <Input id="password" type="password" class="block w-full" placeholder="0123456789" required />
                </div>
            </div>

            <div class="flex flex-col gap-[30px]">
                <div class="flex justify-between items-center">
                    <label class="flex items-center gap-[10px]">
                        <Checkbox name="remember" />
                        <span class="text-base text-black">Запомнить меня</span>
                    </label>
                    <RouterLink to="/" class="text-base text-dark-gray">Еще нету аккаунта?</RouterLink>
                </div>

                <Button class="bg-accent text-lg">
                    Зарегистрироваться
                </Button>
            </div>
        </form>
    </FormLayout>
</template>

<script>
export default {
    data() {
        return {
            login: '',
            password: '',
        }
    },
    methods: {
        post() {

        }
    }
}
</script>