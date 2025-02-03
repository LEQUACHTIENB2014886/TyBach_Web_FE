<template>
  <div>
    <div class="KCNBM">
      <img src="../../assets/KCNBM.png" alt="Ảnh KCNBM" class="imgKCN" />
    </div>
    <hr />
    <div class="ss">
      <h1 class="Name">{{ $t("ct") }}</h1>
    </div>

    <hr />
    <div class="ss">
      <h1 class="Name2">{{ $t("hp1") }}</h1>
    </div>

    <div class="PMobai">
      <h3 class="Mobai">
        {{ $t("hp2") }} <br />
        {{ $t("hp2_2") }}
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
    <div class="ss">
      <h1 class="Name2">{{ $t("hp3") }}</h1>
    </div>
    <div class="PMobai">
      <h3 class="Mobai">
        {{ $t("hp4") }} <br />
        {{ $t("hp4_2") }}
      </h3>
    </div>
    <hr />
  </div>
  <br />
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { watch } from "vue";

const { locale } = useI18n();

watch(locale, () => {
  updateHomapage();
});

const updateHomapage = () => {};
</script>


<style scoped>
.KCNBM {
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  overflow: hidden;
}

h3 {
  font-weight: normal;
}
.ss {
  text-align: center;
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

.Name {
  font-size: 56px;
  font-weight: bold;
  text-align: center;
  letter-spacing: 2px;
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
  margin: -5px 0;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;
  display: inline-block;
}
.Name:hover {
  transform: scale(1.03);
}
.Name2 {
  font-size: 50px;
  font-style: italic;
  text-align: center;
  transition: transform 0.3s ease-in-out;
  display: inline-block;
}

.Name2:hover {
  transform: scale(1.03);
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
