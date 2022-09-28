<template>
  <div class="container">
    <div class="header">
      
    </div>
    <div class="main">
      <div class="subMenu">
          SubMenu
      </div>
      <div class="body">
        <div class="bodyTop">
          <div class="userCard">
              <div class="userAvatar">
              </div>
              <div class="userInfo" id="userInfo">
                <span>学生姓名：{{name}}</span>
                <span>学生编号：{{stuNumber}}</span>
                <span>所属院系：{{department}}</span>
                <span>专业名称：{{major}}</span>
                <span>班级名称：{{classGrade}}</span>
              </div>
          </div>
          <div class="schedule">
            <div class="scheduleHeader">
              <div style="padding:5px">我的课表</div>
              <hr/>
              <span>第5周</span> / <span>第18周</span>  &nbsp;&nbsp;时间模式： <select name="" id=""><option value ="default">默认节次模式</option></select>
            </div>
            <div class="table">
              <table border="1">
                <tr>
                  <th>周/节次</th>
                  <th>星期1</th>
                  <th>星期2</th>
                  <th>星期3</th>
                  <th>星期4</th>
                  <th>星期5</th>
                  <th>星期6</th>
                  <th>星期7</th>
                </tr>
                <tr>
                  <td>第一大节</td>
                  <td>   </td>
                  <td>   </td>
                  <td>   </td>
                  <td>   </td>
                  <td>   </td>
                  <td>   </td>
                  <td>   </td>
                </tr>
                <tr>
                  <td>第二大节</td>
                  <td>   </td>
                  <td>   </td>
                  <td>   </td>
                  <td>   </td>
                  <td>   </td>
                  <td>   </td>
                  <td>   </td>
                </tr>
                <tr>
                  <td>第三大节</td>
                  <td>   </td>
                  <td>   </td>
                  <td>   </td>
                  <td>   </td>
                  <td>   </td>
                  <td>   </td>
                  <td>   </td>
                </tr>
                <tr>
                  <td>第四大节</td>
                  <td>   </td>
                  <td>   </td>
                  <td>   </td>
                  <td>   </td>
                  <td>   </td>
                  <td>   </td>
                  <td>   </td>
                </tr>
                <tr>
                  <td>第五大节</td>
                  <td>   </td>
                  <td>   </td>
                  <td>   </td>
                  <td>   </td>
                  <td>   </td>
                  <td>   </td>
                  <td>   </td>
                </tr>
                <tr>
                  <td>第六大节</td>
                  <td>   </td>
                  <td>   </td>
                  <td>   </td>
                  <td>   </td>
                  <td>   </td>
                  <td>   </td>
                  <td>   </td>
                </tr>
                <tr>
                  <td>第七大节</td>
                  <td>   </td>
                  <td>   </td>
                  <td>   </td>
                  <td>   </td>
                  <td>   </td>
                  <td>   </td>
                  <td>   </td>
                </tr>
              </table>
            </div>
          </div>
          <div class="operation">
            <div class="operationHeader">
              <div style="padding:5px">常用操作</div>
              <hr/>
            </div>
            <div class="opBox">
              <div class="opDiv">
                <div class="opIcon"></div>
                <span>学期理论课表</span>
              </div>
              <div class="opDiv">
                <div class="opIcon"></div>
                <span>课程成绩查询</span>
              </div>
              <div class="opDiv">
                <div class="opIcon"></div>
                <span>学生选课中心</span>
              </div>
              <div class="opDiv">
                <div class="opIcon"></div>
                <span>考试安排查询</span>
              </div>
            </div>
            <div class="opBox">
              <div class="opDiv">
                <div class="opIcon"></div>
                <span>学生评价</span>
              </div>
              <div class="opDiv">
                <div class="opIcon"></div>
                <span>缓考申请</span>
              </div>
              <div class="opDiv">
                <div class="opIcon"></div>
                <span>社会考试报名</span>
              </div>
              <div class="opDiv">
                <div class="opIcon"></div>
                <span>培养方案明细</span>
              </div>
            </div>
          </div>
        </div>
        <div class="bodyBottom">
          <div class="bb1">
            <div class="online">
              <div class="progressHeader">
              <div style="padding:5px">在线问答</div>
              <hr/>
            </div>
            </div>
            <div class="message">
              <div class="progressHeader">
              <div style="padding:5px">学业信息</div>
              <hr/>
            </div>
            </div>
          </div>
          <div class="inform">
            <div class="informHeader">
              <div style="padding:5px">通知</div>
              <hr/>
            </div>
          </div>
          <div class="progress">
            <div class="progressHeader">
              <div style="padding:5px">学期进度安排</div>
              <hr/>
            </div>
            <div class="progressBody">
              <div class="pbItems">
                <div class="pbMonth">1</div>
                <div class="pbDetail">
                  <div class="pbTriangle"></div>
                </div>
              </div>
              <div class="pbItems">
                <div class="pbMonth">1</div>
                <div class="pbDetail">
                  <div class="pbTriangle"></div>
                </div>
              </div>
              <div class="pbItems">
                <div class="pbMonth">1</div>
                <div class="pbDetail">
                  <div class="pbTriangle"></div>
                </div>
              </div>
              <div class="pbItems">
                <div class="pbMonth">1</div>
                <div class="pbDetail">
                  <div class="pbTriangle"></div>
                </div>
              </div>
              <div class="pbItems">
                <div class="pbMonth">1</div>
                <div class="pbDetail">
                  <div class="pbTriangle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'userInfo',
  data() {
    return {
      name: 'Paul George',
      stuNumber: '2019020123',
      department: '计算机学院',
      major: '电子信息科学与技术',
      classGrade:'2019级电二',
    }
  }
}

</script>

<style>
    .container{
      width: 100%;
      height: 100%;
    }

    .header{
        width: 100%;
        height: 80px;
        background-image: url('./assets/head_bg.png');
        background-repeat: no-repeat;
        background-size: cover;
    }

    .main{
      width: 100%;
      max-width: 1;
      height: 800px;
      display: flex;
    }

    .subMenu{
      width: 80px;
      height: 800px;
      background-color: rgb(255, 191, 191);
    }

    .body{
      width: 1700px;
      height: 800px;
      display: flex;
      flex-direction: column;
    }

    .bodyTop{
      width: 100%;
      height: 400px;
      display: flex;
    }
    .userCard{
      max-width: 450px;
      /* height: 100%; */
      display: flex;
      flex: 1;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-image: url('./assets/user_bg.jpg');
      background-size:cover;
      background-repeat:no-repeat;
      border: 1px solid #ccc;
      border-radius: 10px;
    }
      .userAvatar{
        width: 80px;
        height: 80px;
        background-image: url('./assets/PG.jpg');
        background-size:cover;
        background-repeat:no-repeat;
        border: 1px solid #fff;
        border-radius: 50%;
        margin: 15px auto;

      }
      .userInfo{
        display: flex;
        flex-direction: column;
        font-size: 14px;
        color:#fff
      }
    
    .schedule{
      /* width: 50%;
      height: 100%; */
      border: 1px solid #ccc;
      border-radius: 10px;
              overflow: auto;
              flex: 1;
    }
      .scheduleHeader{
        margin: 0 5px 5px;
      }
      .table{
        display: flex;
        justify-content: center;
        align-content: center;
      }

    .operation{
      width: 500px;
      height: 100%;
      border: 1px solid #ccc;
      border-radius: 10px;
    }
      .opBox{
        width: 100%;
        height: 40%;
        padding: 5px;
        display: flex;
      }
        .opDiv{
          width: 25%;
          /* height: 40%; */
          margin: 5px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: #fff;
          cursor: pointer;
        }
          .opIcon{
            width: 50px;
            height: 50px;
            border: 1px solid rgb(143, 143, 143);
            border-radius: 50%;
          }

    .bodyBottom{
      width: 100%;
      height: 400px;
      display: flex;
    }
      .bb1,.inform{
        /* width: 35%;
        height: 100%; */
        flex: 1;
        border: 1px solid #ccc;
        border-radius: 10px;
      }
        .online,.message{
          /* width: 100%; */
          height: 50%;
          /* bor   */
        }
      .progress{
        width: 500px;
        height: 400px;
        border: 1px solid #ccc;
        border-radius: 10px;
        overflow: auto;
      }
      .progressBody{
        width: 80%;
        height: 80%;
        margin: 50px 0 0 80px;
        border-left: 3px solid #ccc;
      }
      .pbItems{
        width: 100%;
        height: 20%;
        display: flex;
        position: relative;
        margin-bottom:10px;
      }
      .pbMonth{
        width: 50px;
        height: 50px;
        background-color: rgb(94, 122, 245);
        border: 1px solid #fff;
        border-radius: 50%;
        line-height: 50px;
        text-align: center;
        position: absolute;
        top: -20px;
        left: -28px;
      }
      .pbDetail{
        width: 85%;
        height: 100%;
        background-color: #ccc;
        position: absolute;
        right:0px;
      }
      .pbTriangle{
        position: absolute;
        top: 5px;
        left: -8px;
        width: 0;
        height: 0;
        border-right: 10px solid #ccc;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        z-index: 1000;
      }
</style>