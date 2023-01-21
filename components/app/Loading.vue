<template>
  <div class="bg-grey/50 fixed inset-0 w-full h-screen flex items-center justify-center z-50 animated fadeIn">
    <div class="h-36 w-36 bg-grey-200 border border-primary shadow-lg rounded-lg z-50">
      <div class="animate-pulse w-full h-full flex flex-col justify-center items-center shadow-xl">
        <icon-logo class="h-16"/>
        <icon-spin class="animate-spin fill-blue h-4"/>
        <h2 class="text-center text-blue">Loading</h2>
      </div>
    </div>
  </div>
</template>