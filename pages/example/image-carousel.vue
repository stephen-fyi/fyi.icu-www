<template>
  <div class="flex flex-col">
    <div class="flex justify-center h-80">
      <div class="flex flex-row items-center">
        <img :src="`/img/${images[previousImage]}`" alt="" class="rounded cursor-pointer hidden lg:flex transform transition delay-150 scale-50 w-48" @click="previous()"/>
        <icon-chevron class="cursor-pointer transform rotate-180 w-4 h-8 fill-blue" @click="previous()"/>
        <img :src="`/img/${images[selected]}`" alt="" class="transform transition delay-150 cursor-zoom-in w-48" @click="showImage=true"/>
        <icon-chevron class="cursor-pointer w-4 h-4 fill-blue" @click="next()"/>
        <img :src="`/img/${images[nextImage]}`" alt="" class="rounded cursor-pointer hidden lg:flex transform transition delay-150 scale-50 w-48" @click="next()"/>
      </div>
    </div>
    <div class="flex flex-wrap gap-2 justify-center">
      <img v-for="(image,i) in images" :key="i" :src="`/img/${image}`" alt="" :class="selected===i? 'border-blue border-2 scale-105' : 'border-grey'"
           class="transform transition border w-12 rounded" @click="selectImage(i)"/>
    </div>
    <Teleport to="body">
      <div v-if="showImage" class="image-modal">
        <img :src="`/img/${images[selected]}`" alt="" class=""/>
        <button class="button-black" @click="showImage=false">Close</button>
      </div>
    </Teleport>
  </div>
</template>
<script setup>
const selected = ref(0)
const previousImage = ref(7)
const nextImage = ref(1)
const showImage = ref(false)
const images = [
  '20230105_165809.jpg',
  '20230114_133138.jpg',
  '20230114_133220.jpg',
  '20230114_142124.jpg',
  '20230114_142424.jpg',
  '20230114_142809.jpg',
  '20230117_193942.jpg',
  '20230117_194006.jpg'
]

function next() {
  if(selected.value===7){
    selected.value=0
  }else {
    selected.value++
  }
  setPreviousNext()
}

function previous() {
  if(selected.value===0){
    selected.value=7
  }else {
    selected.value--
  }
  setPreviousNext()
}

function selectImage(index) {
  selected.value = index
  setPreviousNext()
}
function setPreviousNext() {
  if(selected.value===0){
    previousImage.value = 7
    nextImage.value = 1
  }else if(selected.value===7){
    previousImage.value = 6
    nextImage.value = 0
  }else {
    previousImage.value = selected.value-1
    nextImage.value = selected.value+1
  }
}
</script>