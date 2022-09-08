gdjs.GameOverCode = {};
gdjs.GameOverCode.GDGameOverObjects1= [];
gdjs.GameOverCode.GDGameOverObjects2= [];
gdjs.GameOverCode.GDGameOverObjects3= [];
gdjs.GameOverCode.GDBackToMenuObjects1= [];
gdjs.GameOverCode.GDBackToMenuObjects2= [];
gdjs.GameOverCode.GDBackToMenuObjects3= [];
gdjs.GameOverCode.GDRetryObjects1= [];
gdjs.GameOverCode.GDRetryObjects2= [];
gdjs.GameOverCode.GDRetryObjects3= [];
gdjs.GameOverCode.GDCoinsObjects1= [];
gdjs.GameOverCode.GDCoinsObjects2= [];
gdjs.GameOverCode.GDCoinsObjects3= [];
gdjs.GameOverCode.GDYourCoinsObjects1= [];
gdjs.GameOverCode.GDYourCoinsObjects2= [];
gdjs.GameOverCode.GDYourCoinsObjects3= [];

gdjs.GameOverCode.conditionTrue_0 = {val:false};
gdjs.GameOverCode.condition0IsTrue_0 = {val:false};
gdjs.GameOverCode.condition1IsTrue_0 = {val:false};


gdjs.GameOverCode.eventsList0 = function(runtimeScene) {

{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.storage.elementExistsInJSONFile("Score", "Data");
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.storage.readNumberFromJSONFile("Score", "Data", runtimeScene, runtimeScene.getVariables().getFromIndex(0));
}}

}


};gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDRetryObjects2Objects = Hashtable.newFrom({"Retry": gdjs.GameOverCode.GDRetryObjects2});
gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDBackToMenuObjects1Objects = Hashtable.newFrom({"BackToMenu": gdjs.GameOverCode.GDBackToMenuObjects1});
gdjs.GameOverCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Retry"), gdjs.GameOverCode.GDRetryObjects2);

gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDRetryObjects2Objects, runtimeScene, true, false);
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", false);
}{gdjs.evtTools.storage.writeNumberInJSONFile("Score", "Data", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BackToMenu"), gdjs.GameOverCode.GDBackToMenuObjects1);

gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDBackToMenuObjects1Objects, runtimeScene, true, false);
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}{gdjs.evtTools.storage.writeNumberInJSONFile("Score", "Data", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}}

}


};gdjs.GameOverCode.eventsList2 = function(runtimeScene) {

{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameOverCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameOverCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("YourCoins"), gdjs.GameOverCode.GDYourCoinsObjects1);
{for(var i = 0, len = gdjs.GameOverCode.GDYourCoinsObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDYourCoinsObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}
}}

}


{


{
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)));
}}

}


};

gdjs.GameOverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameOverCode.GDGameOverObjects1.length = 0;
gdjs.GameOverCode.GDGameOverObjects2.length = 0;
gdjs.GameOverCode.GDGameOverObjects3.length = 0;
gdjs.GameOverCode.GDBackToMenuObjects1.length = 0;
gdjs.GameOverCode.GDBackToMenuObjects2.length = 0;
gdjs.GameOverCode.GDBackToMenuObjects3.length = 0;
gdjs.GameOverCode.GDRetryObjects1.length = 0;
gdjs.GameOverCode.GDRetryObjects2.length = 0;
gdjs.GameOverCode.GDRetryObjects3.length = 0;
gdjs.GameOverCode.GDCoinsObjects1.length = 0;
gdjs.GameOverCode.GDCoinsObjects2.length = 0;
gdjs.GameOverCode.GDCoinsObjects3.length = 0;
gdjs.GameOverCode.GDYourCoinsObjects1.length = 0;
gdjs.GameOverCode.GDYourCoinsObjects2.length = 0;
gdjs.GameOverCode.GDYourCoinsObjects3.length = 0;

gdjs.GameOverCode.eventsList2(runtimeScene);
return;

}

gdjs['GameOverCode'] = gdjs.GameOverCode;
