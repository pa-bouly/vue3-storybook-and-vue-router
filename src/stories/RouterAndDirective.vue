<template>
    <div>
        <h2>RouterAndDirective</h2>

        <div v-sanitize-html="test"></div>
        
        <router-link to="/about">about link</router-link>
    </div>
  </template>


<script lang="ts" setup>

const test = '<h1>test</h1>'

</script>