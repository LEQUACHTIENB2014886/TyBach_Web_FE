<template>
  <el-menu
    ellipsis
    class="el-menu-popper-demo"
    mode="horizontal"
    :popper-offset="16"
  >
    <el-menu-item index="1">Trang chủ</el-menu-item>

    <el-sub-menu index="2">
      <template #title>Giới thiệu</template>
      <el-menu-item index="2-1">Giới thiệu chung</el-menu-item>
      <el-menu-item index="2-2">Lịch sự hát triển</el-menu-item>
    </el-sub-menu>

    <el-sub-menu index="3">
      <template #title>Trách nhiệm Xã hội</template>
      <el-menu-item index="3-1">Trách nhiệm Xã hội</el-menu-item>
      <el-menu-item index="3-2">Quyền lợi Lao động</el-menu-item>
      <el-menu-item index="3-1">Sức khỏe và An toàn</el-menu-item>
      <el-menu-item index="3-1">Bảo vệ Môi trường</el-menu-item>
    </el-sub-menu>

    <el-menu-item index="4">Hoạt động chi bộ Đảng</el-menu-item>

    <el-sub-menu index="5">
      <template #title>Hoạt động công đoàn</template>
      <el-menu-item index="5-1">Hoạt động Công đoàn</el-menu-item>
      <el-menu-item index="5-2">Video Hoạt động</el-menu-item>
    </el-sub-menu>

    <el-sub-menu index="6">
      <template #title>Tuyển dụng</template>
      <el-menu-item index="6-1">Thông tin Tuyển dụng</el-menu-item>
      <el-menu-item index="6-2">Nguồn nhân lực</el-menu-item>
    </el-sub-menu>

    <el-sub-menu index="7">
      <template #title>Liên hệ</template>
      <el-menu-item index="7-1">Liên hệ với Chúng tôi</el-menu-item>
      <el-menu-item index="7-2">Nộp hồ sơ</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>
  
  <script setup></script>
  <style scoped>
.el-menu-popper-demo {
  max-width: 1600px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>