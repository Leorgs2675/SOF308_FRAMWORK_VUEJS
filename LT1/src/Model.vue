<template>
  <button type="button" class="btn btn-success"><RouterLink to="/add_Dien-thoai">Add</RouterLink></button>
  <table>
    <thead>
        <tr>
            <th>ID</th>
            <th>TEN</th>
            <th>HANG</th>
            <th>DUNG LUONG </th>
            <th>GIA</th>
            <th>CHUC NANG</th>
        </tr>
    </thead>
    <tbody>
        <template v-for="d in DienThoai" :key="d.id">
            <tr>
                <td>{{ d.id }}</td>
                <td>{{ d.ten }}</td>
                <td>{{ d.hang }}</td>
                <td>{{ d.dungLuong }}</td>
                <td>{{ d.gia }}</td>
                <td>
                    <button type="button" class="btn btn-info" @click="Detail(d)"><RouterLink to="/view-update">UPFATE</RouterLink></button>
                    <button type="button" class="btn btn-secondary" @click="Delete(d.id)"><a @click="">DELETE</a></button>
                </td>
            </tr>
        </template>
    </tbody>
  </table>
</template>
<script setup>
import { ref } from 'vue';

const DienThoai = ref([
  {
    "id": "1",
    "ten": "ten 1",
    "hang": "hang 1",
    "dungLuong": "dungLuong 1",
    "gia": 71
  },
  {
    "id": "2",
    "ten": "ten 2",
    "hang": "hang 2",
    "dungLuong": "dungLuong 2",
    "gia": 22
  },
  {
    "id": "3",
    "ten": "ten 3",
    "hang": "hang 3",
    "dungLuong": "dungLuong 3",
    "gia": 67
  },
  {
    "id": "4",
    "ten": "ten 4",
    "hang": "hang 4",
    "dungLuong": "dungLuong 4",
    "gia": 95
  },
  {
    "id": "5",
    "ten": "ten 5",
    "hang": "hang 5",
    "dungLuong": "dungLuong 5",
    "gia": 79
  },
  {
    "id": "6",
    "ten": "ten 6",
    "hang": "hang 6",
    "dungLuong": "dungLuong 6",
    "gia": 87
  },
  {
    "id": "7",
    "ten": "ten 7",
    "hang": "hang 7",
    "dungLuong": "dungLuong 7",
    "gia": 2
  },
  {
    "id": "8",
    "ten": "ten 8",
    "hang": "hang 8",
    "dungLuong": "dungLuong 8",
    "gia": 5
  },
  {
    "id": "9",
    "ten": "ten 9",
    "hang": "hang 9",
    "dungLuong": "dungLuong 9",
    "gia": 21
  },
  {
    "id": "10",
    "ten": "ten 10",
    "hang": "hang 10",
    "dungLuong": "dungLuong 10",
    "gia": 96
  },
  {
    "id": "11",
    "ten": "ten 11",
    "hang": "hang 11",
    "dungLuong": "dungLuong 11",
    "gia": 74
  },
  {
    "id": "12",
    "ten": "ten 12",
    "hang": "hang 12",
    "dungLuong": "dungLuong 12",
    "gia": 55
  },
  {
    "id": "13",
    "ten": "ten 13",
    "hang": "hang 13",
    "dungLuong": "dungLuong 13",
    "gia": 19
  },
  {
    "id": "14",
    "ten": "ten 14",
    "hang": "hang 14",
    "dungLuong": "dungLuong 14",
    "gia": 24
  },
  {
    "id": "15",
    "ten": "ten 15",
    "hang": "hang 15",
    "dungLuong": "dungLuong 15",
    "gia": 41
  },
  {
    "id": "16",
    "ten": "ten 16",
    "hang": "hang 16",
    "dungLuong": "dungLuong 16",
    "gia": 77
  },
  {
    "id": "17",
    "ten": "ten 17",
    "hang": "hang 17",
    "dungLuong": "dungLuong 17",
    "gia": 65
  },
  {
    "id": "18",
    "ten": "ten 18",
    "hang": "hang 18",
    "dungLuong": "1TB",
    "gia": 72
  },
  {
    "id": "19",
    "ten": "ten 19",
    "hang": "hang 19",
    "dungLuong": "512GB",
    "gia": 48
  },
  {
    "id": "20",
    "ten": "ten 20",
    "hang": "hang 20",
    "dungLuong": "64GB",
    "gia": 77
  },
  {
    "id": "21",
    "ten": "ten 21",
    "hang": "hang 21",
    "dungLuong": "128GB",
    "gia": 91
  }
])
const Delete = (id)=>{
    const index = DienThoai.value.findIndex((d)=>d.id == id)
    DienThoai.value.splice(index,1)
}
const New = ref({
    id: "",
    ten: "",
    hang: "",
    dungLuong: "",
    gia: ""
})
const vitri = ref(-1)
const Detail = (item)=>{
    New.value = {...item}
    vitri.value = DienThoai.value.findIndex((d)=>d.id === item.id)
}
</script>