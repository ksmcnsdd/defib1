function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5k0PwnEGdoz":
        Script1();
        break;
      case "5XGxTSnV0WE":
        Script2();
        break;
      case "65VZQ5unkNv":
        Script3();
        break;
      case "6J7OZowdqn6":
        Script4();
        break;
      case "6c54N8PLkjQ":
        Script5();
        break;
      case "5WZyRorkHlL":
        Script6();
        break;
      case "5m0CNS477I1":
        Script7();
        break;
      case "5hoTvMnwbYK":
        Script8();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  var player = GetPlayer();
var email="nsdd_cne@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script3()
{
  $("#tab-customlink").hide();
}

function Script4()
{
  $("#tab-customlink").hide();
}

function Script5()
{
  $("#tab-customlink").hide();
}

function Script6()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script7()
{
  $("#tab-customlink").show();
}

function Script8()
{
  window.print();
}

