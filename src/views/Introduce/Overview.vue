<template>
  <div class="overview">
    <div class="container">
      <hr>
      <h1 class="Name">GIỚI THIỆU CHUNG</h1>
      <hr>
      <div class="video-container">
        <iframe :src="videoUrl" allowfullscreen frameborder="0"> </iframe>
      </div>
      <hr />
    </div>
    <div class="note">
      
      <a class="intro"> TẬP ĐOÀN LAI YIH - ĐÀI LOAN</a>
        <div class="demo-collapse">
          <el-collapse v-model="activeName" accordion>
            <el-collapse-item title="Consistency" name="1">
              <div>
                Consistent with real life: in line with the process and logic of
                real life, and comply with languages and habits that the users
                are used to;
              </div>
              <div>
                Consistent within interface: all elements should be consistent,
                such as: design style, icons and texts, position of elements,
                etc.
              </div>
            </el-collapse-item>
            <el-collapse-item title="Feedback" name="2">
              <div>
                Operation feedback: enable the users to clearly perceive their
                operations by style updates and interactive effects;
              </div>
              <div>
                Visual feedback: reflect current state by updating or
                rearranging elements of the page.
              </div>
            </el-collapse-item>
            <el-collapse-item title="Efficiency" name="3">
              <div>
                Simplify the process: keep operating process simple and
                intuitive;
              </div>
              <div>
                Definite and clear: enunciate your intentions clearly so that
                the users can quickly understand and make decisions;
              </div>
              <div>
                Easy to identify: the interface should be straightforward, which
                helps the users to identify and frees them from memorizing and
                recalling.
              </div>
            </el-collapse-item>
            <el-collapse-item title="Controllability" name="4">
              <div>
                Decision making: giving advices about operations is acceptable,
                but do not make decisions for the users;
              </div>
              <div>
                Controlled consequences: users should be granted the freedom to
                operate, including canceling, aborting or terminating current
                operation.
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
    </div>
  </div>
</template>

<script setup>
const videoUrl = "https://www.youtube.com/embed/RjufBkR72Uw";
import { ref } from "vue";

const activeName = ref("1");
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.video-container {
  width: 93%;
  aspect-ratio: 21 / 9;
  background: #000;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

iframe {
  width: 100%;
  height: 100%;
  border: none;
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

hr {
  border: 0;
  height: 2px;
  background: linear-gradient(to right, #ff7e5f, #feb47b);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  margin: 40px auto;
  width: 1000px;
}
</style>