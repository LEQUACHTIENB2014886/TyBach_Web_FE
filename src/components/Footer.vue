<template>
  <footer>
    <!-- Header Section -->
    <el-row>
      <el-col :span="6" class="ft">
        <div class="title">Giới thiệu</div>
        <div class="content">Quá trình lịch sử</div>
        <div class="content">Giá trị cốt lõi</div>
      </el-col>
      <el-col :span="6" class="ft">
        <div class="title">Trách nhiệm xã hội</div>
        <div class="content">Bảo vệ quyền của người lao động</div>
        <div class="content">Quản lý sức khỏe và an toàn</div>
        <div class="content">Bảo vệ môi trường</div>
        <div class="content">Hoạt động chi bộ Đảng</div>
        <div class="content">Hoạt động công đoàn</div>
      </el-col>
      <el-col :span="6" class="ft">
        <div class="title">Tuyển dụng</div>
        <div class="content">Nguồn nhân lực</div>
      </el-col>
      <el-col :span="6" class="ft">
        <div class="title">Liên hệ</div>
        <div class="content">Nộp hồ sơ khu A</div>
        <div class="content">Nộp hồ sơ khu B</div>
      </el-col>
    </el-row>
    <hr />

    <el-row>

      <el-col :span="12" class="ft">
        <div class="title">
          <el-icon><Phone /></el-icon> Số điện thoại liên hệ
        </div>
        <div class="content">+84 270 375 2619</div>
        <div class="content">+84 270 389 0878</div>

        <div class="title"><el-icon><Location /></el-icon> Địa chỉ</div>
        <div class="content">Lô D KCN Bình Minh,Ấp Mỹ Hưng 2, Xã Mỹ Hòa,TX Bình Minh Tỉnh Vĩnh Long</div>
        <div class="title"><el-icon><Message /></el-icon> Email</div>
        <div class="content">tuyendung@tybach.com.vn</div>
      </el-col>

      <el-col :span="12" class="ft">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.213556105925!2d106.6296673153505!3d10.77376526194847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fcf6cf1f01b%3A0xab7273613d4e0184!2zQ8O0bmcgdHkgVE7DqyB0xqFhY8QgxayOiAo4bmF0)5!5e0!3m2!1sen!2s!4v1677580073786!5m2!1sen!2s"
          width="100%"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </el-col>
    </el-row>
    <hr />
  </footer>
</template>

<script setup>
</script>

<style scoped>
footer {
  background-color: #2c3e50;
  transition: background-color 0.5s ease;
  padding: 0.5rem 0;
}

footer:hover {
  background-color: #34495e;
}

.el-row {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.ft {
  text-align: left; 
  color: white;
  padding: 1.2rem;
}

.title {
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.content {
  margin: 1rem 0;
  font-size: 1rem;
}

hr {
  border: 1px solid #34495e;
  margin: 1rem 0;
}
</style>
