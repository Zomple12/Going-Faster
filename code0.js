gdjs.MenuCode = {};
gdjs.MenuCode.GDMainGameObjects1= [];
gdjs.MenuCode.GDMainGameObjects2= [];
gdjs.MenuCode.GDPlayObjects1= [];
gdjs.MenuCode.GDPlayObjects2= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};


gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDPlayObjects1Objects = Hashtable.newFrom({"Play": gdjs.MenuCode.GDPlayObjects1});
gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.MenuCode.GDPlayObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDPlayObjects1Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Shop", false);
}}

}


};gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDMainGameObjects1.length = 0;
gdjs.MenuCode.GDMainGameObjects2.length = 0;
gdjs.MenuCode.GDPlayObjects1.length = 0;
gdjs.MenuCode.GDPlayObjects2.length = 0;

gdjs.MenuCode.eventsList1(runtimeScene);
return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
