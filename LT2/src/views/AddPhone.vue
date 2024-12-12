<template>
    <div>
      <h1>Thêm Sản Phẩm</h1>
      <form @submit.prevent="addPhone">
        <div class="mb-3">
          <label for="ten" class="form-label">Tên sản phẩm</label>
          <input type="text" id="ten" v-model="newPhone.ten" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="hang" class="form-label">Hãng</label>
          <select id="hang" v-model="newPhone.hang" class="form-select" required>
            <option value="Apple">Apple</option>
            <option value="Samsung">Samsung</option>
            <option value="Oppo">Oppo</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="gia" class="form-label">Giá</label>
          <input type="number" id="gia" v-model="newPhone.gia" class="form-control" required min="1000" />
          <small class="text-danger" v-if="newPhone.gia && newPhone.gia < 1000">Giá phải lớn hơn 1000.</small>
        </div>
        <div class="mb-3">
          <label for="soluong" class="form-label">Số lượng</label>
          <input type="number" id="soluong" v-model="newPhone.soluong" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="dungluong" class="form-label">Dung Lượng</label>
          <select id="dungluong" v-model="newPhone.dungluong" class="form-select" required>
            <option value="128GB">128GB</option>
            <option value="256GB">256GB</option>
            <option value="512GB">512GB</option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary">Thêm</button>
      </form>
    </div>
  </template>
  
  <script>
export default {
  name: 'AddPhone',
  data() {
    return {
      newPhone: {
        ten: '',
        hang: '',
        gia: null,
        soluong: null,
        dungluong: '', 
      },
    };
  },
  methods: {
    addPhone() {
   
      if (this.newPhone.gia <= 1000) {
        alert('Giá phải lớn hơn 1000');
        return;
      }
      
 
      if (!this.newPhone.ten || !this.newPhone.hang || !this.newPhone.dungluong) {
        alert('Vui lòng điền đầy đủ thông tin');
        return;
      }

      const currentPhones = JSON.parse(localStorage.getItem('phones')) || [];
      const newPhoneWithId = { ...this.newPhone, id: currentPhones.length + 1 }; 
      currentPhones.push(newPhoneWithId);
      localStorage.setItem('phones', JSON.stringify(currentPhones));

     
      console.log('Sản phẩm đã thêm: ', newPhoneWithId);

      this.$router.push({ name: 'PhonePage' });
    },
  },
};
</script>