<template>
  <footer>
    <el-row>
      <el-col :span="2"></el-col>
      <el-col :span="5" class="ft">
        <div class="title">Giới thiệu</div>
        <div class="content">Quá trình lịch sử</div>
        <div class="content">Giá trị cốt lõi</div>
      </el-col>
      <el-col :span="5" class="ft">
        <div class="title">Trách nhiệm xã hội</div>
        <div class="content">Quyền lợi lao động</div>
        <div class="content">Sức khỏe và An toàn</div>
        <div class="content">Bảo vệ Môi trường</div>
        <div class="content">Hoạt động Chi bộ Đảng</div>
        <div class="content">Hoạt động Công đoàn</div>
      </el-col>
      <el-col :span="5" class="ft">
        <div class="title">Tuyển dụng</div>
        <div class="content">Nguồn nhân lực</div>
      </el-col>
      <el-col :span="5" class="ft">
        <div class="title">Liên hệ</div>
        <div class="content">Nộp hồ sơ</div>
      </el-col>
      <el-col :span="2"></el-col>
    </el-row>
    <hr />
    <el-row class="ff">
      <el-col :span="2"></el-col>
      <el-col :span="8" class="ft">
        <div class="title_2">
          <el-icon><Phone /></el-icon> Số điện thoại liên hệ
        </div>
        <div class="contact">+84 270 375 2619</div>
        <div class="contact">+84 270 389 0878</div>
        <hr />
        <div class="title_2">
          <el-icon><Location /></el-icon> Địa chỉ
        </div>
        <div class="contact">
          Lô D - KCN Bình Minh, ấp Mỹ Hưng 2, xã Mỹ Hòa, thị xã Bình Minh, tỉnh
          Vĩnh Long
        </div>
        <hr />
        <div class="title_2">
          <el-icon><Message /></el-icon> Email
        </div>
        <div class="contact">tuyendung@tybach.com.vn</div>
        <hr />
        <div class="title_2">
          <el-icon><Clock /></el-icon> Giờ hoạt động
        </div>
        <el-backtop :right="100" :bottom="100" />
        <div
          class="contact"
          :style="{
            color:
              operatingStatus === 'Đang mở cửa'
                ? '#7FFF00'
                : operatingStatus === 'Đang chuẩn bị'
                ? '#FFA500'
                : '#DC143C',
          }"
        >
          {{ operatingStatus }}
        </div>
      </el-col>
      <el-col :span="2"></el-col>
      <el-col :span="10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.213556105925!2d106.6296673153505!3d10.77376526194847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fcf6cf1f01b%3A0xab7273613d4e0184!2zQ8O0bmcgdHkgVE7DqyB0xqFhY8QgxayOiAo4bmF0)5!5e0!3m2!1sen!2s!4v1677580073786!5m2!1sen!2s"
          width="100%"
          height="100%"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          class="ggmap"
        ></iframe>
      </el-col>
      <el-col :span="2"></el-col>
    </el-row>
    <hr />
    <a style="font-style: italic"> Bản quyền @ Ty Bach Company Limited</a>
  </footer>
</template>

<script setup>
import { ref, onMounted } from "vue";

const operatingStatus = ref("");
const isOpen = ref(false);

const updateOperatingStatus = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const currentTime = hours * 60 + minutes;
  const preparingTimeStart = 6 * 60;
  const preparingTimeEnd = 7 * 60 + 30;
  const openingTime = 7 * 60 + 30;
  const closingTime = 16 * 60 + 30;

  if (currentTime >= preparingTimeStart && currentTime < preparingTimeEnd) {
    operatingStatus.value = "Đang chuẩn bị";
    isOpen.value = false;
  } else if (currentTime >= openingTime && currentTime < closingTime) {
    operatingStatus.value = "Đang mở cửa";
    isOpen.value = true;
  } else {
    operatingStatus.value = "Đóng cửa (Hoạt động từ 07h30 - 16h30)";
    isOpen.value = false;
  }
};

onMounted(() => {
  updateOperatingStatus();
  setInterval(updateOperatingStatus, 60000);
});
</script>

<style scoped>
footer {
  background-color: #1c2631;
  transition: background-color 0.5s ease;
  padding: 1rem 0;
  color: white;
  text-align: center;
  margin-top: auto;
}

footer:hover {
  background-color: rgb(18, 26, 34);
}

.el-row {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.ft {
  text-align: left;
  color: white;
}

.title {
  font-weight: bold;
  font-size: 1.4em;
  margin-bottom: 0.5rem;
  padding-top: 10px;
}

.title_2 {
  font-weight: bold;
  font-size: 1.4rem;
}

.content {
  margin: 1rem 0 1rem 1px;
  font-size: 1rem;
}

hr {
  border: 1px solid;
  margin: 1rem;
}

.contact {
  margin: 10px 0 10px 30px;
}

.ggmap {
  border-radius: 5px;
}
</style>
