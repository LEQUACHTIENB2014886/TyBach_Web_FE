<template>
  <div>
    <div class="KCNBM">
      <img src="../../assets/KCNBM.png" alt="Ảnh KCNBM" class="imgKCN" />
    </div>
    <hr>
    <h1 class="Name">CÔNG TY TNHH TỶ BÁCH 亿伯</h1>
    <hr>
    <h1 class="Name2">Phạm vi Kinh doanh</h1>
    <div class="PMobai">
      <h3 class="Mobai">
        Công ty chúng tôi cung cấp giày, dép từ các thương hiệu nổi tiếng như
        Hoka, New Balance và Uniqlo với sự đa dạng về chất lượng và phong cách.
        Với thiết kế hiện đại và công nghệ tiên tiến, các sản phẩm này mang lại
        sự thoải mái và hỗ trợ cho người sử dụng trong mọi hoạt động.
      </h3>
    </div>
    <el-row class="Cuongga">
      <el-col :span="6">
        <div class="grid-content ep-bg-purple">
          <img
            src="../../assets/LogoShoes/newbalance.png"
            alt="nb"
            class="logo"
          />
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content ep-bg-purple">
          <img src="../../assets/LogoShoes/hoka.png" alt="hk" class="logo" />
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content ep-bg-purple">
          <img src="../../assets/LogoShoes/uniqlo.png" alt="un" class="logo" />
        </div>
      </el-col>
    </el-row>
    <h1 class="Name2">Quyền lợi Lao động</h1>
    <div class="PMobai">
      <h3 class="Mobai">
        Khi gia nhập công ty, người lao động sẽ được tận hưởng một loạt quyền
        lợi hấp dẫn, bao gồm chương trình đào tạo bài bản để nâng cao tay nghề.
        Ngoài ra, còn nhiều khoản phụ cấp, chế độ bảo hiểm, tăng lương định kỳ,
        cùng với những phần quà giá trị và khen thưởng đầy khích lệ.
      </h3>
    </div>
  </div>
  <br />
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

.imgKCN {
  width: 94%;
  height: 567px;
  border-radius: 3.5px;
  transition: transform 0.3s ease-in-out;
}

.imgKCN:hover {
  transform: scale(1.006);
}
.Name2 {
  text-align: center;
}

.Name {
  font-size: 56px;
  font-weight: bold;
  text-align: center;
  letter-spacing: 2px;
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
  padding: 10px 0;
  border-radius: 10px;
}

.Name2 {
  font-size: 50px;
  font-style: italic;
  margin-top: -20px;
}

.Mobai {
  text-align: center;
  transition: transform 0.3s ease-in-out;
}

.Mobai:hover {
  transform: scale(1.03);
}

.PMobai {
  margin: 0 180px;
  font-size: 20px;
}

.PMobai:hover {
  transform: scale(1.003);
}

.el-row {
  margin-bottom: 20px;
}

.el-row:last-child {
  margin-bottom: 0;
}

.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.logo {
  max-width: 350px;
  max-height: auto;
  transition: transform 0.3s ease-in-out;
}

.logo:hover {
  transform: scale(1.086);
}

.Cuongga {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

hr {
  border: 0;
  height: 2px;
  background: linear-gradient(to right, #ff7e5f, #feb47b);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  margin: 40px auto;
  width: 1000px;
}

</style>
