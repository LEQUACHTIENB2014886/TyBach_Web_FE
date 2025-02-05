<template>
  <div class="overview">
    <div class="laiyih">
      <div class="title">
        <hr />
        <a class="Name2">TẬP ĐOÀN LAI YIH - ĐÀI LOAN</a>
        <hr />
        <img
          src="../../assets/Introduce/laiyih.png"
          alt="ảnh lai yih"
          class="laiyinpng"
        />
        <div><a class="noteimg">Tập đoàn Lai Yih - Đài Loan</a></div>
      </div>
      <div class="title">
        <p>
          ● Tập đoàn Lai Yih, thành lập năm 1986 tại Đài Trung, Đài Loan, là một
          tập đoàn chuyên sản xuất giày dép với hơn 30 năm kinh nghiệm. Tính đến
          năm 2016, tập đoàn sở hữu 15 nhà máy tại Trung Quốc, Việt Nam và
          Myanmar, tạo việc làm cho hơn 60.000 lao động.
        </p>

        <p>
          ● Tại Việt Nam, Lai Yih có ba nhà máy đặt tại miền Nam, bao gồm Công
          ty TNHH Tỷ Xuân và Công ty TNHH Tỷ Bách. Công ty TNHH Tỷ Xuân, hoạt
          động từ năm 2004 tại Vĩnh Long, đã mở rộng quy mô lên 40 ha với hơn
          22.000 lao động.
        </p>
        <img
          src="../../assets/Introduce/ct.jpg"
          alt="ảnh lai yih"
          class="laiyinpng"
        />
        <div><a class="noteimg">Tập đoàn Lai Yih - Đài Loan</a></div>
        <p>
          ● Lai Yih hợp tác với các thương hiệu quốc tế như Adidas, Converse,
          Vans, The North Face và Hoka,... chuyên sản xuất các loại giày lưu hóa
          cao cấp, giày thể thao, giày dán lạnh và giày chức năng đặc biệt.
        </p>
        <img
          src="../../assets/Introduce/brand.jpg"
          alt="ảnh lai yih"
          class="laiyinpng"
        />
        <div><a class="noteimg">Tập đoàn Lai Yih - Đài Loan</a></div>
        <br />
        <hr />
      </div>
    </div>
    <div class="tybach">
      <div class="title">
        <a class="Name2">CÔNG TY TNHH TỶ BÁCH</a>
        <hr />
        <div class="video-container">
          <iframe :src="videoUrl" allowfullscreen frameborder="0"> </iframe>
        </div>

        <div><a class="noteimg">tb</a></div>
      </div>
      <div>
        <p>
          ● Công ty TNHH Tỷ Bách là một doanh nghiệp sản xuất giày dép, được
          thành lập vào ngày 23/07/2018, với trụ sở đặt tại Lô D, Khu công
          nghiệp Bình Minh, ấp Mỹ Hưng 2, xã Mỹ Hòa, thị xã Bình Minh, tỉnh Vĩnh
          Long. Đây là một trong những nhà máy sản xuất giày thuộc tập đoàn LAI
          YIH của Đài Loan, tập đoàn có hơn 30 năm kinh nghiệm trong ngành sản
          xuất giày và sở hữu 15 nhà máy tại Trung Quốc, Việt Nam và Myanmar.
          Tính đến năm 2016, tập đoàn LAI YIH đã tạo việc làm cho hơn 50.000 lao
          động tại ba quốc gia này.
        </p>
        <p>
          ● Dự án nhà máy sản xuất giày xuất khẩu của Công ty TNHH Tỷ Bách có
          tổng diện tích 181.672 m², với mức vốn đầu tư lên đến 70 triệu USD.
          Khi đi vào hoạt động, nhà máy dự kiến tạo việc làm cho khoảng 3.500
          lao động, và dự kiến tăng lên 6.000 lao động vào cuối năm 2019, với
          mục tiêu cuối cùng là 16.000 lao động khi dự án hoàn thiện.
        </p>
        <p>
          ● Nhà máy được xây dựng với mô hình chuyên nghiệp và hiện đại, nhằm
          đáp ứng nhu cầu sản xuất giày xuất khẩu và tạo công ăn việc làm cho số
          lượng lớn lao động tại địa phương. Việc khánh thành nhà máy vào ngày
          17/07/2019 đánh dấu bước phát triển quan trọng của công ty trong việc
          mở rộng hoạt động sản xuất tại Việt Nam.
        </p>
        <div class="title">
          <img
            src="../../assets/Introduce/tybach.png"
            alt="tybach"
            class="tybachpng"
          />
          <div><a class="noteimg">tb</a></div>
        </div>

        <hr />
      </div>
    </div>
  </div>
</template>

<script setup>
const videoUrl = "https://www.youtube.com/embed/RjufBkR72Uw";
</script>

<style scoped>
.video-container {
  width: 93%;
  aspect-ratio: 21 / 9;
  background: #000;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
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

.laiyih,
.tybach {
  margin: 0 100px;
}

.Name2 {
  font-size: 50px;
  font-weight: bold;
  font-style: italic;
  transition: transform 0.3s ease-in-out;
}
.Name2:hover {
  transform: scale(1.03);
}
p {
  font-size: 22px;
  text-align: justify;
  font-style: normal;
}

.laiyinpng,
.tybachpng {
  width: 1200px;
  height: auto;
  margin: 0 auto;
  overflow: hidden;
  margin: 20px 0 5px 0;
}

.title {
  text-align: center;
}

.noteimg {
  font-style: italic;
  color: gray;
}
</style>