<template>
  <div class="top">
    <div class="top_left">
      <div class="top_logo"></div>
      <div class="top_slogan"></div>
    </div>
    <div class="top_center">
      <div class="top_menu">
        <div class="mbtn" style="width: 32px;height: 22px;">首页</div>
        <div class="mbtn" style="width: 64px;height: 22px;">市场交易</div>
        <div class="mbtn" style="width: 64px;height: 22px;">会议邀约</div>
        <div class="mbtn" style="width: 32px;height: 22px;">翻译</div>
        <div class="mbtn" style="width: 64px;height: 22px;">政企服务</div>
      </div>
      <div class="top_search">
        <input class="s_input" type="text" placeholder="人工智能">
        <div class="s_icon"></div>
      </div>
    </div>
    <div class="top_right">
      <div class="top_publish"><button style=" border: none ;background-color: #0B71F3;">发布</button></div>
      <div class="top_user">
        <div class="user_avatar"></div>
        <div class="user_name">用户名称</div>
      </div>

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .top{
    width: 1920px;
    height: 60px;
    background: #FFFFFF;
    display: flex;
    align-items: center;
    font-size: 16px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #373737;
    line-height: 22px;
  }
  .top_left,
  .top_center,
  .top_right{
    display: flex;
    align-items: center;
  }

  .top_logo{
    width: 117px;
    height: 38px;
    margin-right: 10px;
    background-color: red;
  }
  .top_slogan{
    width: 131px;
    height: 23px;
    background-color: green;
    margin-right: 192px;
  }
  .top_menu{
    display: flex;
    align-items: center;
  }
  .mbtn{
    margin-right: 40px;
    cursor: pointer;
  }

  .top_search{
    display: flex;
    align-items: center;
    position: relative;
    margin-right: 186px;
  }

  .s_input{
    width: 300px;
    height: 40px;
    background: #F5F7FA;
    border-radius: 4px;
    border: 1px solid #F0F2F5;
    margin-left: 172px;
  }

  .s_icon{
    width: 14px;
    height: 14px;
    border: 1px solid #90A0B5;
    background-color: red;
    position: absolute;
    right: 14px;
  }

  .top_right{
    display: flex;
    align-items: center;
  }
  .top_publish{
    width: 120px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    background: #0B71F3;
    border-radius: 4px;
    margin-right: 38px;
    cursor: pointer;
  }
  .top_user{
    display: flex;
    align-items: center;
  }
  .user_avatar{
    width: 40px;
    height: 40px;
    background: #0B71F3;
    border: 2px solid #FFFFFF;
    border-radius: 50%;
    margin-right: 10px;
  }
  .user_name{
    width: 56px;
    height: 20px;
    font-size: 14px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #373737;
    line-height: 20px;
  }
</style>