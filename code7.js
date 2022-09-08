gdjs.ShopCode = {};
gdjs.ShopCode.GDCharacter1Objects1= [];
gdjs.ShopCode.GDCharacter1Objects2= [];
gdjs.ShopCode.GDCharacter1Objects3= [];
gdjs.ShopCode.GDCharacter1Objects4= [];
gdjs.ShopCode.GDCharacter2Objects1= [];
gdjs.ShopCode.GDCharacter2Objects2= [];
gdjs.ShopCode.GDCharacter2Objects3= [];
gdjs.ShopCode.GDCharacter2Objects4= [];
gdjs.ShopCode.GDBuyCharacter2Objects1= [];
gdjs.ShopCode.GDBuyCharacter2Objects2= [];
gdjs.ShopCode.GDBuyCharacter2Objects3= [];
gdjs.ShopCode.GDBuyCharacter2Objects4= [];
gdjs.ShopCode.GDCoinlconObjects1= [];
gdjs.ShopCode.GDCoinlconObjects2= [];
gdjs.ShopCode.GDCoinlconObjects3= [];
gdjs.ShopCode.GDCoinlconObjects4= [];
gdjs.ShopCode.GDYourCoinsObjects1= [];
gdjs.ShopCode.GDYourCoinsObjects2= [];
gdjs.ShopCode.GDYourCoinsObjects3= [];
gdjs.ShopCode.GDYourCoinsObjects4= [];
gdjs.ShopCode.GDGoObjects1= [];
gdjs.ShopCode.GDGoObjects2= [];
gdjs.ShopCode.GDGoObjects3= [];
gdjs.ShopCode.GDGoObjects4= [];
gdjs.ShopCode.GDResetObjects1= [];
gdjs.ShopCode.GDResetObjects2= [];
gdjs.ShopCode.GDResetObjects3= [];
gdjs.ShopCode.GDResetObjects4= [];

gdjs.ShopCode.conditionTrue_0 = {val:false};
gdjs.ShopCode.condition0IsTrue_0 = {val:false};
gdjs.ShopCode.condition1IsTrue_0 = {val:false};
gdjs.ShopCode.condition2IsTrue_0 = {val:false};
gdjs.ShopCode.condition3IsTrue_0 = {val:false};
gdjs.ShopCode.condition4IsTrue_0 = {val:false};
gdjs.ShopCode.conditionTrue_1 = {val:false};
gdjs.ShopCode.condition0IsTrue_1 = {val:false};
gdjs.ShopCode.condition1IsTrue_1 = {val:false};
gdjs.ShopCode.condition2IsTrue_1 = {val:false};
gdjs.ShopCode.condition3IsTrue_1 = {val:false};
gdjs.ShopCode.condition4IsTrue_1 = {val:false};


gdjs.ShopCode.eventsList0 = function(runtimeScene) {

{


gdjs.ShopCode.condition0IsTrue_0.val = false;
{
gdjs.ShopCode.condition0IsTrue_0.val = gdjs.evtTools.storage.elementExistsInJSONFile("Score", "Data");
}if (gdjs.ShopCode.condition0IsTrue_0.val) {
{gdjs.evtTools.storage.readNumberFromJSONFile("Score", "Data", runtimeScene, runtimeScene.getVariables().getFromIndex(0));
}}

}


{


gdjs.ShopCode.condition0IsTrue_0.val = false;
{
gdjs.ShopCode.condition0IsTrue_0.val = gdjs.evtTools.storage.elementExistsInJSONFile("Character", "Data");
}if (gdjs.ShopCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BuyCharacter2"), gdjs.ShopCode.GDBuyCharacter2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Coinlcon"), gdjs.ShopCode.GDCoinlconObjects1);
{gdjs.evtTools.storage.readNumberFromJSONFile("Character", "Data", runtimeScene, runtimeScene.getVariables().getFromIndex(1));
}{for(var i = 0, len = gdjs.ShopCode.GDCoinlconObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDCoinlconObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.ShopCode.GDBuyCharacter2Objects1.length ;i < len;++i) {
    gdjs.ShopCode.GDBuyCharacter2Objects1[i].hide();
}
}}

}


};gdjs.ShopCode.mapOfGDgdjs_46ShopCode_46GDCharacter2Objects3Objects = Hashtable.newFrom({"Character2": gdjs.ShopCode.GDCharacter2Objects3});
gdjs.ShopCode.mapOfGDgdjs_46ShopCode_46GDCharacter2Objects3Objects = Hashtable.newFrom({"Character2": gdjs.ShopCode.GDCharacter2Objects3});
gdjs.ShopCode.mapOfGDgdjs_46ShopCode_46GDResetObjects2Objects = Hashtable.newFrom({"Reset": gdjs.ShopCode.GDResetObjects2});
gdjs.ShopCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Character2"), gdjs.ShopCode.GDCharacter2Objects3);

gdjs.ShopCode.condition0IsTrue_0.val = false;
gdjs.ShopCode.condition1IsTrue_0.val = false;
gdjs.ShopCode.condition2IsTrue_0.val = false;
gdjs.ShopCode.condition3IsTrue_0.val = false;
{
gdjs.ShopCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ShopCode.mapOfGDgdjs_46ShopCode_46GDCharacter2Objects3Objects, runtimeScene, true, false);
}if ( gdjs.ShopCode.condition0IsTrue_0.val ) {
{
gdjs.ShopCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 380;
}if ( gdjs.ShopCode.condition1IsTrue_0.val ) {
{
gdjs.ShopCode.condition2IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 0;
}if ( gdjs.ShopCode.condition2IsTrue_0.val ) {
{
{gdjs.ShopCode.conditionTrue_1 = gdjs.ShopCode.condition3IsTrue_0;
gdjs.ShopCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13828484);
}
}}
}
}
if (gdjs.ShopCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BuyCharacter2"), gdjs.ShopCode.GDBuyCharacter2Objects3);
gdjs.copyArray(runtimeScene.getObjects("Coinlcon"), gdjs.ShopCode.GDCoinlconObjects3);
{for(var i = 0, len = gdjs.ShopCode.GDCoinlconObjects3.length ;i < len;++i) {
    gdjs.ShopCode.GDCoinlconObjects3[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.ShopCode.GDBuyCharacter2Objects3.length ;i < len;++i) {
    gdjs.ShopCode.GDBuyCharacter2Objects3[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(0).sub(380);
}{runtimeScene.getGame().getVariables().getFromIndex(0).sub(380);
}{gdjs.evtTools.storage.writeNumberInJSONFile("Score", "Data", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{gdjs.evtTools.storage.writeNumberInJSONFile("Character", "Data", 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Coin.wav", false, 100, 1);
}{runtimeScene.getVariables().getFromIndex(1).setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Character2"), gdjs.ShopCode.GDCharacter2Objects3);

gdjs.ShopCode.condition0IsTrue_0.val = false;
gdjs.ShopCode.condition1IsTrue_0.val = false;
gdjs.ShopCode.condition2IsTrue_0.val = false;
{
gdjs.ShopCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ShopCode.mapOfGDgdjs_46ShopCode_46GDCharacter2Objects3Objects, runtimeScene, true, false);
}if ( gdjs.ShopCode.condition0IsTrue_0.val ) {
{
gdjs.ShopCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}if ( gdjs.ShopCode.condition1IsTrue_0.val ) {
{
{gdjs.ShopCode.conditionTrue_1 = gdjs.ShopCode.condition2IsTrue_0;
gdjs.ShopCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13830396);
}
}}
}
if (gdjs.ShopCode.condition2IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Coin.wav", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Reset"), gdjs.ShopCode.GDResetObjects2);

gdjs.ShopCode.condition0IsTrue_0.val = false;
gdjs.ShopCode.condition1IsTrue_0.val = false;
{
gdjs.ShopCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ShopCode.mapOfGDgdjs_46ShopCode_46GDResetObjects2Objects, runtimeScene, true, false);
}if ( gdjs.ShopCode.condition0IsTrue_0.val ) {
{
{gdjs.ShopCode.conditionTrue_1 = gdjs.ShopCode.condition1IsTrue_0;
gdjs.ShopCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13832268);
}
}}
if (gdjs.ShopCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BuyCharacter2"), gdjs.ShopCode.GDBuyCharacter2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Coinlcon"), gdjs.ShopCode.GDCoinlconObjects2);
{gdjs.evtTools.storage.deleteElementFromJSONFile("Score", "Data");
}{gdjs.evtTools.storage.deleteElementFromJSONFile("Character", "Data");
}{gdjs.evtTools.sound.playSound(runtimeScene, "Died.wav", false, 100, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}{for(var i = 0, len = gdjs.ShopCode.GDCoinlconObjects2.length ;i < len;++i) {
    gdjs.ShopCode.GDCoinlconObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.ShopCode.GDBuyCharacter2Objects2.length ;i < len;++i) {
    gdjs.ShopCode.GDBuyCharacter2Objects2[i].hide(false);
}
}}

}


};gdjs.ShopCode.mapOfGDgdjs_46ShopCode_46GDCharacter1Objects2Objects = Hashtable.newFrom({"Character1": gdjs.ShopCode.GDCharacter1Objects2});
gdjs.ShopCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Character1"), gdjs.ShopCode.GDCharacter1Objects2);

gdjs.ShopCode.condition0IsTrue_0.val = false;
gdjs.ShopCode.condition1IsTrue_0.val = false;
{
gdjs.ShopCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ShopCode.mapOfGDgdjs_46ShopCode_46GDCharacter1Objects2Objects, runtimeScene, true, false);
}if ( gdjs.ShopCode.condition0IsTrue_0.val ) {
{
{gdjs.ShopCode.conditionTrue_1 = gdjs.ShopCode.condition1IsTrue_0;
gdjs.ShopCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13834884);
}
}}
if (gdjs.ShopCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Coin.wav", false, 100, 1);
}}

}


};gdjs.ShopCode.mapOfGDgdjs_46ShopCode_46GDGoObjects2Objects = Hashtable.newFrom({"Go": gdjs.ShopCode.GDGoObjects2});
gdjs.ShopCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Go"), gdjs.ShopCode.GDGoObjects2);

gdjs.ShopCode.condition0IsTrue_0.val = false;
gdjs.ShopCode.condition1IsTrue_0.val = false;
{
gdjs.ShopCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ShopCode.mapOfGDgdjs_46ShopCode_46GDGoObjects2Objects, runtimeScene, true, false);
}if ( gdjs.ShopCode.condition0IsTrue_0.val ) {
{
{gdjs.ShopCode.conditionTrue_1 = gdjs.ShopCode.condition1IsTrue_0;
gdjs.ShopCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13836468);
}
}}
if (gdjs.ShopCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", false);
}}

}


};gdjs.ShopCode.eventsList4 = function(runtimeScene) {

{


gdjs.ShopCode.condition0IsTrue_0.val = false;
{
gdjs.ShopCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.ShopCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.ShopCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.ShopCode.condition0IsTrue_0.val = false;
{
gdjs.ShopCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.ShopCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.ShopCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


gdjs.ShopCode.condition0IsTrue_0.val = false;
{
gdjs.ShopCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.ShopCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.ShopCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


{
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)));
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("YourCoins"), gdjs.ShopCode.GDYourCoinsObjects1);
{for(var i = 0, len = gdjs.ShopCode.GDYourCoinsObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDYourCoinsObjects1[i].setString("Coins x " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}
}}

}


};gdjs.ShopCode.eventsList5 = function(runtimeScene) {

{


gdjs.ShopCode.condition0IsTrue_0.val = false;
{
gdjs.ShopCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.ShopCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Clouds.ogg", true, 100, 1);
}
{ //Subevents
gdjs.ShopCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.ShopCode.eventsList4(runtimeScene);
}


};

gdjs.ShopCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ShopCode.GDCharacter1Objects1.length = 0;
gdjs.ShopCode.GDCharacter1Objects2.length = 0;
gdjs.ShopCode.GDCharacter1Objects3.length = 0;
gdjs.ShopCode.GDCharacter1Objects4.length = 0;
gdjs.ShopCode.GDCharacter2Objects1.length = 0;
gdjs.ShopCode.GDCharacter2Objects2.length = 0;
gdjs.ShopCode.GDCharacter2Objects3.length = 0;
gdjs.ShopCode.GDCharacter2Objects4.length = 0;
gdjs.ShopCode.GDBuyCharacter2Objects1.length = 0;
gdjs.ShopCode.GDBuyCharacter2Objects2.length = 0;
gdjs.ShopCode.GDBuyCharacter2Objects3.length = 0;
gdjs.ShopCode.GDBuyCharacter2Objects4.length = 0;
gdjs.ShopCode.GDCoinlconObjects1.length = 0;
gdjs.ShopCode.GDCoinlconObjects2.length = 0;
gdjs.ShopCode.GDCoinlconObjects3.length = 0;
gdjs.ShopCode.GDCoinlconObjects4.length = 0;
gdjs.ShopCode.GDYourCoinsObjects1.length = 0;
gdjs.ShopCode.GDYourCoinsObjects2.length = 0;
gdjs.ShopCode.GDYourCoinsObjects3.length = 0;
gdjs.ShopCode.GDYourCoinsObjects4.length = 0;
gdjs.ShopCode.GDGoObjects1.length = 0;
gdjs.ShopCode.GDGoObjects2.length = 0;
gdjs.ShopCode.GDGoObjects3.length = 0;
gdjs.ShopCode.GDGoObjects4.length = 0;
gdjs.ShopCode.GDResetObjects1.length = 0;
gdjs.ShopCode.GDResetObjects2.length = 0;
gdjs.ShopCode.GDResetObjects3.length = 0;
gdjs.ShopCode.GDResetObjects4.length = 0;

gdjs.ShopCode.eventsList5(runtimeScene);
return;

}

gdjs['ShopCode'] = gdjs.ShopCode;
