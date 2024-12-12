<template>
  <div>
    <h1>Chi Tiết Sản Phẩm</h1>
    <div v-if="phone">
      <p>Tên: {{ phone.ten }}</p>
      <p>Hãng: {{ phone.hang }}</p>
      <p>Giá: {{ phone.gia }}</p>
      <p>Số Lượng: {{ phone.soluong }}</p>
      <p>Dung Lượng: {{ phone.dungluong }}</p> 
    </div>
    <button class="btn btn-secondary" @click="goBack">Trở Lại</button>
  </div>
</template>

<script>
export default {
  name: 'PhoneDetail',
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      phone: null,
    };
  },
  mounted() {
    const phoneId = this.id; 
    const storedPhones = JSON.parse(localStorage.getItem('phones')) || []; 
    this.phone = storedPhones.find((phone) => phone.id === parseInt(phoneId)); 

    if (!this.phone) {
      console.error('Không tìm thấy điện thoại với ID:', phoneId); 
    }
  },
  methods: {
    goBack() {
      this.$router.push({ name: 'PhonePage' });
    },
  },
};
</script>
