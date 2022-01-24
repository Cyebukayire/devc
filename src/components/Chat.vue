<template>
    <div class="app" ng-app="chatSystem" ng-controller="MainCtrl">
  <div class="topbar">
    <strong>Anna</strong>
  </div>
  <div class="chat" id="chat">

    <div class="person">
      Hey</div>
    <div class="person">
      Type whatever you want below.</div>
    <div class="person">
      Press enter or click the blue circle to send</div>
    <div class="person">
      I can't reply yet... Maybe one day.</div>

    <!--<div class="me">
      yeah u gotta' file once every 2 weeks at least</div>
    <div class="me">
      and u gotta' groom eyebrows once every 10 days at least</div>
    <div class="me">
      most*??
    </div>

    <div class="person">
      you females have it tough im sorry</div>
    <div class="person">
      So much to maintain</div>-->

    <div ng-repeat="post in msgs">
      <div class="me">
        {{post.text}}
      </div>
      <!--<div class="person">
        {{reply}}
      </div>-->
    </div>


  </div>

  <form name="submitTxt" class="message" ng-submit="addNew()">
    <textarea ng-model="messg" ng-keyup="$event.keyCode == 13 && addNew()"></textarea>
    <input type="submit" value="" class="send"></input>
  </form>
</div>
</template>

<style scoped>
$first-gradient: #fff9c6
$second-gradient: pink
$third-gradient: #2a88b8
$top-bar-bg: #f88187
$message-bg: #fff
$msg-border: #ed6262
$msg-input: #ffddd4
$app-bg: rgba(255, 255, 255, 0.7)
$me-bg: #d4afaf
$you-bg: #fff
$you-font-color: #585656
$me-font-color: #fff
$typing-msg: #605f5f
$send-button: rgba(0, 100, 200, 0.5)
$send-button-hover: rgba(0, 100, 200, 0.8)
$top-name: #fff

* 
  margin: 0
  padding: 0

body
  background: -webkit-linear-gradient(left top, $first-gradient, $second-gradient, $third-gradient) /* For Safari 5.1 to 6.0 */
  background: -o-linear-gradient(bottom right, $first-gradient, $second-gradient, $third-gradient) /* For Opera 11.1 to 12.0 */
  background: -moz-linear-gradient(bottom right, $first-gradient, $second-gradient, $third-gradient) /* For Firefox 3.6 to 15 */
  background: linear-gradient(to bottom right, $first-gradient, $second-gradient, $third-gradient) /* Standard syntax */
  background-size: cover
  background-attachment: fixed
  background-repeat: no-repeat
  height: 100vh
  
  /* fonts */
  font:
    family: "Avenir Next", "Helvetica Neue", Helvetica, Arial, sans-serif
    size: 62.5%
  
.app
  overflow: hidden
  position: relative
  top: 50%
  margin-top: -250px
  margin-left: auto
  margin-right: auto
  width: 461px
  height: 500px
  background: $app-bg
  border-radius: 0.5em
  box-sizing: border-box
  font-size: 1.5em
  
  .topbar
    width: 100%
    height: 40px
    background: $top-bar-bg
    border-top-left-radius: 0.5em
    border-top-right-radius: 0.5em
    text-align: center
    color: $top-name
    position: relative
    
    strong
      position: absolute
      left: 0
      right: 0
      top: 50%
      transform: translateY(-50%)
      -webkit-transform: translateY(-50%)
      margin: 0 auto
    
  .message
    position: relative
    width: 100%
    height: 30px
    bottom: 0
    background: $message-bg
    border-top: 4px solid $msg-border
    border-bottom-left-radius: 0.5em
    border-bottom-right-radius: 0.5em
    line-height: 1.7em
    transition: all ease 0.3s
    text-align: left
    
    textarea
      position: absolute
      left: 10px
      height: 30px
      resize: none
      width: 85%
      background: transparent
      box-sizing: border-box
      top: 4.5px
      height: 60%
      font:
        size: 1em
      color: $typing-msg
      float: left
      padding-left: 5px
      overflow: hidden
      word-wrap: break-word
      border: none
      text-align: left
      
      &:focus
        //border: 3px solid $msg-input
        outline: none
      
    .send
      position: absolute
      width: 25px
      height: 25px
      background: orange
      right: 10px
      border-radius: 50%
      border: none
      background: $send-button
      text-align: center
      color: #fff
      font-size: 1.1em
      top: 50%
      transform: translateY(-50%)
      -webkit-transform: translateY(-50%)
      
      &:hover
        background: $send-button-hover
    
  .chat
    overflow-y: auto
    overflow-x: hidden
    position: relative
    height: 418px
    line-height: 1.4
    display: box
    
    padding:
      left: 10px
      right: 10px
      bottom: 5px
    
    .person
      float: left
      clear: both
      max-width: 80%
      background: $me-bg
      border-radius: 0.5em
      padding: 7px
      margin-top: 10px
      color: $me-font-color
      min-width: 2%
      word-wrap: break-word
      
    .me
      float: right
      clear: both
      max-width: 80%
      background: $you-bg
      text-align: right
      border-radius: 0.5em
      padding: 7px
      margin-top: 10px
      color: $you-font-color
      min-width: 2%
      word-wrap: break-word
     
</style>