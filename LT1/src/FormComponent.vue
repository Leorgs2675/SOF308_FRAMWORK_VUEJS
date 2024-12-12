<template>
  <form>
    Ten<input type="text" placeholder="Nhap ten"><br>
    Hang<select>
        <option value="SamSung">SamSung</option>
        <option value="Oppo">Oppo</option>
        <option value="Apple">Apple</option>
    </select><br>
    Dung Luong<select>
        <option value="128GB">128GB</option>
        <option value="64GB">64GB</option>
        <option value="512GB">512GB</option>
        <option value="1TB">1TB</option>
    </select><br>
    Gia<input type="text" placeholder="Nhap ten"><br>
  </form>
</template>
<script setup>
import { ref } from 'vue';

const New = ref({
    id: "",
    ten: "",
    hang: "",
    dungLuong: "",
    gia: ""
})
</script>