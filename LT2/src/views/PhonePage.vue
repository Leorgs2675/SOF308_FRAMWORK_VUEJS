<template>
    <div>
      <h1>Danh sách Điện Thoại</h1>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Tên</th>
            <th>Hãng</th>
            <th>Giá</th>
            <th>Dung Lượng</th> 
            <th>Số Lượng</th> 
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(phone, index) in phones" :key="phone.id">
            <td>{{ index + 1 }}</td>
            <td>{{ phone.ten }}</td>
            <td>{{ phone.hang }}</td>
            <td>{{ phone.gia }}</td>
            <td>{{ phone.dungluong }}</td> 
            <td>{{ phone.soluong }}</td> 
            <td>
              <button  onclick="return" class="btn btn-info btn-sm" @click="goToDetail(phone.id) ">Detail</button>
            </td>
          </tr>
        </tbody>
      </table>
      <button class="btn btn-primary" @click="goToAddPhone">Thêm Sản Phẩm</button>
    </div>
  </template>
<script>

export default {
  name: 'PhonePage',
  data() {
    return {
      phones: [
   
      ], 
    };
  },
  created() {
 
    const samplePhones = [
      { id: 1, ten: 'iPhone 13', hang: 'Apple', gia: '25,000,000', dungluong: '128GB', soluong: 10 },
      { id: 2, ten: 'Galaxy S21', hang: 'Samsung', gia: '18,000,000', dungluong: '256GB', soluong: 8 },
      { id: 3, ten: 'Xiaomi Mi 11', hang: 'Xiaomi', gia: '12,000,000', dungluong: '128GB', soluong: 15 },
      { id: 4, ten: 'Oppo Reno 6', hang: 'Oppo', gia: '9,000,000', dungluong: '64GB', soluong: 20 },
    ];

    
    const storedPhones = JSON.parse(localStorage.getItem('phones'));
    if (!storedPhones || storedPhones.length === 0) {
      localStorage.setItem('phones', JSON.stringify(samplePhones));
    }

    this.phones = JSON.parse(localStorage.getItem('phones'));
  },
  methods: {
    goToDetail(id) {
      this.$router.push({ name: 'PhoneDetail', params: { id } });
    },
    goToAddPhone() {
      this.$router.push({ name: 'AddPhone' });
    },
  },
  
};
</script>

