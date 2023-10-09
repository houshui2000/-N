<template>
  <div>
    <nav>
      <div class="nav_left">
        <div class="logo">LOGO</div>
        <div class="k_logo">卡logo</div>
        <div class="E_Ka">E卡</div>
      </div>
      <!-- 右侧-->
      <div class="nav_right">
        <div class="right_tui">推广分红</div>
        <div class="right_chong">崇州</div>
        <div class="D_bi">
          <img src="@/assets/images/test.png" alt="" />
          <span>0.0</span>
        </div>
        <div class="D_bi">
          <img src="@/assets/images/test.png" alt="" />
          <span>0.0</span>
        </div>
        <!-- 头像 -->
        <div class="touxiang">
          <div class="png">touxiang</div>
          <div class="xinxi">玩家信息</div>
        </div>
        <!-- APP  -->
        <div class="app">下载</div>
      </div>
    </nav>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
nav {
  background-color: rgb(7, 96, 174);
  @include Myflex(space-between);
  width: 1920px;
  height: 100px;
  $width: 30%;
  padding: 20px;
  .nav_left {
    width: $width;
    height: 100%;
    background-color: sandybrown;
    @include Myflex();

    > div {
      width: 33%;
      height: 100%;
      @include Myflex();
      border: 1px solid rebeccapurple;
    }
  }
  .nav_right {
    background-color: salmon;
    width: calc(100% - #{$width});
    @include Myflex(flex-end);
    height: 100%;
    > div {
      &:nth-child(-n + 4) {
        background-color: seagreen;
        height: 50px;
        padding: 5px;
        @include Myflex();
        margin-right: 10px;
      }
    }
    .D_bi {
      img {
        width: 20px;
        height: 20px;
      }
    }
    .touxiang {
      margin-right: 10px;
      height: 100%;
      background-color: saddlebrown;
      > div {
        height: 50%;
      }
    }
    .app {
      height: 100%;
      @include Myflex();
    }
  }
}
</style>
