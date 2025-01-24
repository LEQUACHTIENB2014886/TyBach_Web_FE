<template>
  <div>
    <div class="KCNBM">
      <img src="../../assets/KCNBM.png" alt="Ảnh KCNBM" class="imgKCN" />
    </div>
    <h1 class="Name">CÔNG TY TNHH TỶ BÁCH 亿伯</h1>
    <div class="PMobai">
      <h2 class="Mobai">
        Công ty chúng tôi cung cấp giày thể thao từ các thương hiệu nổi tiếng
        như Hoka, New Balance và Uniqlo...
      </h2>
      <h3 class="Mobai">
        Với thiết kế hiện đại và công nghệ tiên tiến, các sản phẩm này mang lại
        sự thoải mái và hỗ trợ cho người sử dụng trong mọi hoạt động.
      </h3>
    </div>
  </div>
</template>
  
  <script setup>
</script>
  
  <style scoped>
.KCNBM {
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  overflow: hidden;
}

.imgKCN:hover {
  transform: scale(1.008);
}
.imgKCN {
  width: 94%;
  height: 567px;
  border-radius: 3.5px;
  transition: transform 0.3s ease-in-out;
}

.Name {
  font-size: 38px;
  text-align: center;
}

.Mobai {
  text-align: center;
}

.PMobai {
  margin: 0 150px;
  font-size: 20px;

}
</style>
  