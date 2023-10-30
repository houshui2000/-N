<template>
  <footer>
    <!-- <div class="footer_top">
      <Router-link to="/"><div class="Top_div">1</div></Router-link>
      <Router-link to="/"><div class="Top_div">2</div></Router-link>
      <Router-link to="/"><div class="Top_div">3</div></Router-link>
      <Router-link to="/"><div class="Top_div">4</div></Router-link>
      <Router-link to="/"><div class="Top_div">5</div></Router-link>
      <Router-link to="/">
        <div style="border-right: none" class="Top_div">6</div>
      </Router-link>
    </div>
    <!~~ 备案号 ~~>
    <p>
      <span>备案号:</span>
      <span>XXXXXXXXXXXXXXXX</span>
    </p>
    <p>
      <span>版权萨达:</span>
      <span>XXXXXXXXXXXXXXXX</span>
    </p>-->
    <!--  -->
    <div class="footer_borrom">
      <Router-link to="/"><div class="tiaozhuan">测试1</div></Router-link>
      <Router-link to="/"><div class="tiaozhuan">测试2</div></Router-link>
      <Router-link to="/"><div class="tiaozhuan">测试3</div></Router-link>
      <Router-link to="/"><div class="tiaozhuan">测试4</div></Router-link>
      <Router-link to="/"><div class="tiaozhuan">测试5</div></Router-link>
    </div>
  </footer>
</template>
<script setup></script>
<style lang="scss" scoped>
footer {
  padding: 50px 0;
  width: 1920px;
  background: #16191f;
  .footer_top {
    // width: ;
    @include Myflex();
    .Top_div {
      @include Myflex();
      width: 100px;
      border-right: 1px solid red;
    }
  }
  > p {
    text-align: center;
    &:nth-of-type(1) {
      margin-top: 100px;
    }
    &:nth-of-type(2) {
      margin-top: 50px;
      margin-bottom: 100px;
    }
    > span {
      display: inline-block;
      background-color: salmon;
      &:nth-child(1) {
        width: 160px;
        text-align: right;
        margin-right: 10px;
      }
    }
  }
  .footer_borrom {
    @include Myflex();
    .tiaozhuan {
      @include Myflex();
      width: 100px;
      height: 60px;
      background-color: aqua;
      margin-right: 20px;
    }
  }
}
</style>
