<script setup>
import { RouterLink } from 'vue-router'
import Button from '../components/Button.vue'
</script>

<template>
  <header class="flex items-center justify-between h-[80px] w-[1520px]">
    <RouterLink to="/">
      <img src="../assets/logo.svg">
    </RouterLink>
    <div class="flex gap-[30px] *:text-base">
      <RouterLink to="/">Процессоры</RouterLink>
      <RouterLink to="/">Видеокарты</RouterLink>
      <RouterLink to="/">Материнские платы</RouterLink>
      <RouterLink to="/">Оперативная память</RouterLink>
      <RouterLink to="/">Корпуса</RouterLink>
      <RouterLink to="/">Блоки питания</RouterLink>
      <RouterLink to="/">Охлаждение компьютера</RouterLink>
    </div>
    <div class="flex gap-[30px]">
      <RouterLink to="/">
        <Button class="btn-secondary">Создать аккаунт</Button>
      </RouterLink>
      <RouterLink to="/login">
        <Button class="btn-primary">Войти</Button>
      </RouterLink>
    </div>
  </header>
</template>