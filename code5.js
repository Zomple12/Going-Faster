gdjs.Level5Code = {};
gdjs.Level5Code.GDTennyObjects1= [];
gdjs.Level5Code.GDTennyObjects2= [];
gdjs.Level5Code.GDTennyObjects3= [];
gdjs.Level5Code.GDTommyObjects1= [];
gdjs.Level5Code.GDTommyObjects2= [];
gdjs.Level5Code.GDTommyObjects3= [];
gdjs.Level5Code.GDPlatformObstaclesObjects1= [];
gdjs.Level5Code.GDPlatformObstaclesObjects2= [];
gdjs.Level5Code.GDPlatformObstaclesObjects3= [];
gdjs.Level5Code.GDCenterObstaclesObjects1= [];
gdjs.Level5Code.GDCenterObstaclesObjects2= [];
gdjs.Level5Code.GDCenterObstaclesObjects3= [];
gdjs.Level5Code.GDJellyFishObjects1= [];
gdjs.Level5Code.GDJellyFishObjects2= [];
gdjs.Level5Code.GDJellyFishObjects3= [];
gdjs.Level5Code.GDCoinsObjects1= [];
gdjs.Level5Code.GDCoinsObjects2= [];
gdjs.Level5Code.GDCoinsObjects3= [];
gdjs.Level5Code.GDScoreObjects1= [];
gdjs.Level5Code.GDScoreObjects2= [];
gdjs.Level5Code.GDScoreObjects3= [];
gdjs.Level5Code.GDBGObjects1= [];
gdjs.Level5Code.GDBGObjects2= [];
gdjs.Level5Code.GDBGObjects3= [];
gdjs.Level5Code.GDlceObjects1= [];
gdjs.Level5Code.GDlceObjects2= [];
gdjs.Level5Code.GDlceObjects3= [];

gdjs.Level5Code.conditionTrue_0 = {val:false};
gdjs.Level5Code.condition0IsTrue_0 = {val:false};
gdjs.Level5Code.condition1IsTrue_0 = {val:false};
gdjs.Level5Code.condition2IsTrue_0 = {val:false};
gdjs.Level5Code.condition3IsTrue_0 = {val:false};
gdjs.Level5Code.conditionTrue_1 = {val:false};
gdjs.Level5Code.condition0IsTrue_1 = {val:false};
gdjs.Level5Code.condition1IsTrue_1 = {val:false};
gdjs.Level5Code.condition2IsTrue_1 = {val:false};
gdjs.Level5Code.condition3IsTrue_1 = {val:false};


gdjs.Level5Code.eventsList0 = function(runtimeScene) {

{


gdjs.Level5Code.condition0IsTrue_0.val = false;
{
gdjs.Level5Code.condition0IsTrue_0.val = gdjs.evtTools.storage.elementExistsInJSONFile("Score", "Data");
}if (gdjs.Level5Code.condition0IsTrue_0.val) {
{gdjs.evtTools.storage.readNumberFromJSONFile("Score", "Data", runtimeScene, runtimeScene.getVariables().getFromIndex(0));
}}

}


};gdjs.Level5Code.eventsList1 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Tenny"), gdjs.Level5Code.GDTennyObjects2);
{for(var i = 0, len = gdjs.Level5Code.GDTennyObjects2.length ;i < len;++i) {
    gdjs.Level5Code.GDTennyObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tenny"), gdjs.Level5Code.GDTennyObjects2);

gdjs.Level5Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level5Code.GDTennyObjects2.length;i<l;++i) {
    if ( gdjs.Level5Code.GDTennyObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Level5Code.condition0IsTrue_0.val = true;
        gdjs.Level5Code.GDTennyObjects2[k] = gdjs.Level5Code.GDTennyObjects2[i];
        ++k;
    }
}
gdjs.Level5Code.GDTennyObjects2.length = k;}if (gdjs.Level5Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level5Code.GDTennyObjects2 */
{for(var i = 0, len = gdjs.Level5Code.GDTennyObjects2.length ;i < len;++i) {
    gdjs.Level5Code.GDTennyObjects2[i].setAnimationName("TennyJump");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tenny"), gdjs.Level5Code.GDTennyObjects2);

gdjs.Level5Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level5Code.GDTennyObjects2.length;i<l;++i) {
    if ( gdjs.Level5Code.GDTennyObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Level5Code.condition0IsTrue_0.val = true;
        gdjs.Level5Code.GDTennyObjects2[k] = gdjs.Level5Code.GDTennyObjects2[i];
        ++k;
    }
}
gdjs.Level5Code.GDTennyObjects2.length = k;}if (gdjs.Level5Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level5Code.GDTennyObjects2 */
{for(var i = 0, len = gdjs.Level5Code.GDTennyObjects2.length ;i < len;++i) {
    gdjs.Level5Code.GDTennyObjects2[i].setAnimationName("TennyJump");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tenny"), gdjs.Level5Code.GDTennyObjects2);

gdjs.Level5Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level5Code.GDTennyObjects2.length;i<l;++i) {
    if ( gdjs.Level5Code.GDTennyObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Level5Code.condition0IsTrue_0.val = true;
        gdjs.Level5Code.GDTennyObjects2[k] = gdjs.Level5Code.GDTennyObjects2[i];
        ++k;
    }
}
gdjs.Level5Code.GDTennyObjects2.length = k;}if (gdjs.Level5Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level5Code.GDTennyObjects2 */
{for(var i = 0, len = gdjs.Level5Code.GDTennyObjects2.length ;i < len;++i) {
    gdjs.Level5Code.GDTennyObjects2[i].setAnimationName("Tenny");
}
}}

}


{


gdjs.Level5Code.condition0IsTrue_0.val = false;
{
gdjs.Level5Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.Level5Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Tenny"), gdjs.Level5Code.GDTennyObjects2);
{for(var i = 0, len = gdjs.Level5Code.GDTennyObjects2.length ;i < len;++i) {
    gdjs.Level5Code.GDTennyObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tenny"), gdjs.Level5Code.GDTennyObjects2);

gdjs.Level5Code.condition0IsTrue_0.val = false;
gdjs.Level5Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level5Code.GDTennyObjects2.length;i<l;++i) {
    if ( gdjs.Level5Code.GDTennyObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Level5Code.condition0IsTrue_0.val = true;
        gdjs.Level5Code.GDTennyObjects2[k] = gdjs.Level5Code.GDTennyObjects2[i];
        ++k;
    }
}
gdjs.Level5Code.GDTennyObjects2.length = k;}if ( gdjs.Level5Code.condition0IsTrue_0.val ) {
{
{gdjs.Level5Code.conditionTrue_1 = gdjs.Level5Code.condition1IsTrue_0;
gdjs.Level5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13645396);
}
}}
if (gdjs.Level5Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Jump.wav", false, 100, 1);
}}

}


{


gdjs.Level5Code.condition0IsTrue_0.val = false;
{
gdjs.Level5Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
}if (gdjs.Level5Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.Level5Code.GDTommyObjects1);
{for(var i = 0, len = gdjs.Level5Code.GDTommyObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDTommyObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.Level5Code.eventsList2 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.Level5Code.GDTommyObjects2);
{for(var i = 0, len = gdjs.Level5Code.GDTommyObjects2.length ;i < len;++i) {
    gdjs.Level5Code.GDTommyObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.Level5Code.GDTommyObjects2);

gdjs.Level5Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level5Code.GDTommyObjects2.length;i<l;++i) {
    if ( gdjs.Level5Code.GDTommyObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Level5Code.condition0IsTrue_0.val = true;
        gdjs.Level5Code.GDTommyObjects2[k] = gdjs.Level5Code.GDTommyObjects2[i];
        ++k;
    }
}
gdjs.Level5Code.GDTommyObjects2.length = k;}if (gdjs.Level5Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level5Code.GDTommyObjects2 */
{for(var i = 0, len = gdjs.Level5Code.GDTommyObjects2.length ;i < len;++i) {
    gdjs.Level5Code.GDTommyObjects2[i].setAnimationName("TommyJump");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.Level5Code.GDTommyObjects2);

gdjs.Level5Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level5Code.GDTommyObjects2.length;i<l;++i) {
    if ( gdjs.Level5Code.GDTommyObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Level5Code.condition0IsTrue_0.val = true;
        gdjs.Level5Code.GDTommyObjects2[k] = gdjs.Level5Code.GDTommyObjects2[i];
        ++k;
    }
}
gdjs.Level5Code.GDTommyObjects2.length = k;}if (gdjs.Level5Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level5Code.GDTommyObjects2 */
{for(var i = 0, len = gdjs.Level5Code.GDTommyObjects2.length ;i < len;++i) {
    gdjs.Level5Code.GDTommyObjects2[i].setAnimationName("TommyJump");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.Level5Code.GDTommyObjects2);

gdjs.Level5Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level5Code.GDTommyObjects2.length;i<l;++i) {
    if ( gdjs.Level5Code.GDTommyObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Level5Code.condition0IsTrue_0.val = true;
        gdjs.Level5Code.GDTommyObjects2[k] = gdjs.Level5Code.GDTommyObjects2[i];
        ++k;
    }
}
gdjs.Level5Code.GDTommyObjects2.length = k;}if (gdjs.Level5Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level5Code.GDTommyObjects2 */
{for(var i = 0, len = gdjs.Level5Code.GDTommyObjects2.length ;i < len;++i) {
    gdjs.Level5Code.GDTommyObjects2[i].setAnimationName("TommyRunning");
}
}}

}


{


gdjs.Level5Code.condition0IsTrue_0.val = false;
{
gdjs.Level5Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.Level5Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.Level5Code.GDTommyObjects2);
{for(var i = 0, len = gdjs.Level5Code.GDTommyObjects2.length ;i < len;++i) {
    gdjs.Level5Code.GDTommyObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.Level5Code.GDTommyObjects2);

gdjs.Level5Code.condition0IsTrue_0.val = false;
gdjs.Level5Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level5Code.GDTommyObjects2.length;i<l;++i) {
    if ( gdjs.Level5Code.GDTommyObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Level5Code.condition0IsTrue_0.val = true;
        gdjs.Level5Code.GDTommyObjects2[k] = gdjs.Level5Code.GDTommyObjects2[i];
        ++k;
    }
}
gdjs.Level5Code.GDTommyObjects2.length = k;}if ( gdjs.Level5Code.condition0IsTrue_0.val ) {
{
{gdjs.Level5Code.conditionTrue_1 = gdjs.Level5Code.condition1IsTrue_0;
gdjs.Level5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13650172);
}
}}
if (gdjs.Level5Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Jump.wav", false, 100, 1);
}}

}


{


gdjs.Level5Code.condition0IsTrue_0.val = false;
{
gdjs.Level5Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
}if (gdjs.Level5Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Tenny"), gdjs.Level5Code.GDTennyObjects1);
{for(var i = 0, len = gdjs.Level5Code.GDTennyObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDTennyObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDTennyObjects1ObjectsGDgdjs_46Level5Code_46GDTommyObjects1Objects = Hashtable.newFrom({"Tenny": gdjs.Level5Code.GDTennyObjects1, "Tommy": gdjs.Level5Code.GDTommyObjects1});
gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDJellyFishObjects1Objects = Hashtable.newFrom({"JellyFish": gdjs.Level5Code.GDJellyFishObjects1});
gdjs.Level5Code.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("JellyFish"), gdjs.Level5Code.GDJellyFishObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tenny"), gdjs.Level5Code.GDTennyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.Level5Code.GDTommyObjects1);

gdjs.Level5Code.condition0IsTrue_0.val = false;
gdjs.Level5Code.condition1IsTrue_0.val = false;
gdjs.Level5Code.condition2IsTrue_0.val = false;
{
gdjs.Level5Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDTennyObjects1ObjectsGDgdjs_46Level5Code_46GDTommyObjects1Objects, gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDJellyFishObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level5Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level5Code.GDTennyObjects1.length;i<l;++i) {
    if ( gdjs.Level5Code.GDTennyObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Level5Code.condition1IsTrue_0.val = true;
        gdjs.Level5Code.GDTennyObjects1[k] = gdjs.Level5Code.GDTennyObjects1[i];
        ++k;
    }
}
gdjs.Level5Code.GDTennyObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Level5Code.GDTommyObjects1.length;i<l;++i) {
    if ( gdjs.Level5Code.GDTommyObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Level5Code.condition1IsTrue_0.val = true;
        gdjs.Level5Code.GDTommyObjects1[k] = gdjs.Level5Code.GDTommyObjects1[i];
        ++k;
    }
}
gdjs.Level5Code.GDTommyObjects1.length = k;}if ( gdjs.Level5Code.condition1IsTrue_0.val ) {
{
{gdjs.Level5Code.conditionTrue_1 = gdjs.Level5Code.condition2IsTrue_0;
gdjs.Level5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13651252);
}
}}
}
if (gdjs.Level5Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Level5Code.GDJellyFishObjects1 */
/* Reuse gdjs.Level5Code.GDTennyObjects1 */
/* Reuse gdjs.Level5Code.GDTommyObjects1 */
{for(var i = 0, len = gdjs.Level5Code.GDJellyFishObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDJellyFishObjects1[i].addPolarForce(90, 300, 1);
}
}{for(var i = 0, len = gdjs.Level5Code.GDTennyObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDTennyObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
for(var i = 0, len = gdjs.Level5Code.GDTommyObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDTommyObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{for(var i = 0, len = gdjs.Level5Code.GDTennyObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDTennyObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
for(var i = 0, len = gdjs.Level5Code.GDTommyObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDTommyObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Died.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.Level5Code.GDJellyFishObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDJellyFishObjects1[i].activateBehavior("RectangularMovement", false);
}
}}

}


};gdjs.Level5Code.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Tenny"), gdjs.Level5Code.GDTennyObjects2);
gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.Level5Code.GDTommyObjects2);

gdjs.Level5Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level5Code.GDTennyObjects2.length;i<l;++i) {
    if ( gdjs.Level5Code.GDTennyObjects2[i].getX() >= 5856 ) {
        gdjs.Level5Code.condition0IsTrue_0.val = true;
        gdjs.Level5Code.GDTennyObjects2[k] = gdjs.Level5Code.GDTennyObjects2[i];
        ++k;
    }
}
gdjs.Level5Code.GDTennyObjects2.length = k;for(var i = 0, k = 0, l = gdjs.Level5Code.GDTommyObjects2.length;i<l;++i) {
    if ( gdjs.Level5Code.GDTommyObjects2[i].getX() >= 5856 ) {
        gdjs.Level5Code.condition0IsTrue_0.val = true;
        gdjs.Level5Code.GDTommyObjects2[k] = gdjs.Level5Code.GDTommyObjects2[i];
        ++k;
    }
}
gdjs.Level5Code.GDTommyObjects2.length = k;}if (gdjs.Level5Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level5Code.GDTennyObjects2 */
/* Reuse gdjs.Level5Code.GDTommyObjects2 */
{for(var i = 0, len = gdjs.Level5Code.GDTennyObjects2.length ;i < len;++i) {
    gdjs.Level5Code.GDTennyObjects2[i].getBehavior("SmoothCamera").SetFollowOnX(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
for(var i = 0, len = gdjs.Level5Code.GDTommyObjects2.length ;i < len;++i) {
    gdjs.Level5Code.GDTommyObjects2[i].getBehavior("SmoothCamera").SetFollowOnX(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tenny"), gdjs.Level5Code.GDTennyObjects2);
gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.Level5Code.GDTommyObjects2);

gdjs.Level5Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level5Code.GDTennyObjects2.length;i<l;++i) {
    if ( gdjs.Level5Code.GDTennyObjects2[i].getX() >= 6240 ) {
        gdjs.Level5Code.condition0IsTrue_0.val = true;
        gdjs.Level5Code.GDTennyObjects2[k] = gdjs.Level5Code.GDTennyObjects2[i];
        ++k;
    }
}
gdjs.Level5Code.GDTennyObjects2.length = k;for(var i = 0, k = 0, l = gdjs.Level5Code.GDTommyObjects2.length;i<l;++i) {
    if ( gdjs.Level5Code.GDTommyObjects2[i].getX() >= 6240 ) {
        gdjs.Level5Code.condition0IsTrue_0.val = true;
        gdjs.Level5Code.GDTommyObjects2[k] = gdjs.Level5Code.GDTommyObjects2[i];
        ++k;
    }
}
gdjs.Level5Code.GDTommyObjects2.length = k;}if (gdjs.Level5Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level5Code.GDTennyObjects2 */
/* Reuse gdjs.Level5Code.GDTommyObjects2 */
{for(var i = 0, len = gdjs.Level5Code.GDTennyObjects2.length ;i < len;++i) {
    gdjs.Level5Code.GDTennyObjects2[i].getBehavior("SmoothCamera").SetFollowOnY(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
for(var i = 0, len = gdjs.Level5Code.GDTommyObjects2.length ;i < len;++i) {
    gdjs.Level5Code.GDTommyObjects2[i].getBehavior("SmoothCamera").SetFollowOnY(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tenny"), gdjs.Level5Code.GDTennyObjects2);
gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.Level5Code.GDTommyObjects2);

gdjs.Level5Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level5Code.GDTennyObjects2.length;i<l;++i) {
    if ( gdjs.Level5Code.GDTennyObjects2[i].getX() >= 7456 ) {
        gdjs.Level5Code.condition0IsTrue_0.val = true;
        gdjs.Level5Code.GDTennyObjects2[k] = gdjs.Level5Code.GDTennyObjects2[i];
        ++k;
    }
}
gdjs.Level5Code.GDTennyObjects2.length = k;for(var i = 0, k = 0, l = gdjs.Level5Code.GDTommyObjects2.length;i<l;++i) {
    if ( gdjs.Level5Code.GDTommyObjects2[i].getX() >= 7456 ) {
        gdjs.Level5Code.condition0IsTrue_0.val = true;
        gdjs.Level5Code.GDTommyObjects2[k] = gdjs.Level5Code.GDTommyObjects2[i];
        ++k;
    }
}
gdjs.Level5Code.GDTommyObjects2.length = k;}if (gdjs.Level5Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(gdjs.random(3));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tenny"), gdjs.Level5Code.GDTennyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.Level5Code.GDTommyObjects1);

gdjs.Level5Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level5Code.GDTennyObjects1.length;i<l;++i) {
    if ( gdjs.Level5Code.GDTennyObjects1[i].getY() >= 1000 ) {
        gdjs.Level5Code.condition0IsTrue_0.val = true;
        gdjs.Level5Code.GDTennyObjects1[k] = gdjs.Level5Code.GDTennyObjects1[i];
        ++k;
    }
}
gdjs.Level5Code.GDTennyObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Level5Code.GDTommyObjects1.length;i<l;++i) {
    if ( gdjs.Level5Code.GDTommyObjects1[i].getY() >= 1000 ) {
        gdjs.Level5Code.condition0IsTrue_0.val = true;
        gdjs.Level5Code.GDTommyObjects1[k] = gdjs.Level5Code.GDTommyObjects1[i];
        ++k;
    }
}
gdjs.Level5Code.GDTommyObjects1.length = k;}if (gdjs.Level5Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameOver", false);
}}

}


};gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDTennyObjects2ObjectsGDgdjs_46Level5Code_46GDTommyObjects2Objects = Hashtable.newFrom({"Tenny": gdjs.Level5Code.GDTennyObjects2, "Tommy": gdjs.Level5Code.GDTommyObjects2});
gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDCoinsObjects2Objects = Hashtable.newFrom({"Coins": gdjs.Level5Code.GDCoinsObjects2});
gdjs.Level5Code.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Coins"), gdjs.Level5Code.GDCoinsObjects2);
gdjs.copyArray(runtimeScene.getObjects("Tenny"), gdjs.Level5Code.GDTennyObjects2);
gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.Level5Code.GDTommyObjects2);

gdjs.Level5Code.condition0IsTrue_0.val = false;
{
gdjs.Level5Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDTennyObjects2ObjectsGDgdjs_46Level5Code_46GDTommyObjects2Objects, gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDCoinsObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level5Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level5Code.GDCoinsObjects2 */
{runtimeScene.getVariables().getFromIndex(0).add(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Coin.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.Level5Code.GDCoinsObjects2.length ;i < len;++i) {
    gdjs.Level5Code.GDCoinsObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.storage.writeNumberInJSONFile("Score", "Data", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Level5Code.GDScoreObjects2);
{for(var i = 0, len = gdjs.Level5Code.GDScoreObjects2.length ;i < len;++i) {
    gdjs.Level5Code.GDScoreObjects2[i].setString("Coins x " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}
}}

}


{


{
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)));
}}

}


};gdjs.Level5Code.eventsList6 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("BG"), gdjs.Level5Code.GDBGObjects1);
{for(var i = 0, len = gdjs.Level5Code.GDBGObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDBGObjects1[i].setXOffset(gdjs.Level5Code.GDBGObjects1[i].getXOffset() + (1));
}
}}

}


};gdjs.Level5Code.eventsList7 = function(runtimeScene) {

{


gdjs.Level5Code.condition0IsTrue_0.val = false;
{
gdjs.Level5Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}if (gdjs.Level5Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level3", false);
}}

}


{


gdjs.Level5Code.condition0IsTrue_0.val = false;
{
gdjs.Level5Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 2;
}if (gdjs.Level5Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level2", false);
}}

}


{


gdjs.Level5Code.condition0IsTrue_0.val = false;
{
gdjs.Level5Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 3;
}if (gdjs.Level5Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level4", false);
}}

}


{


gdjs.Level5Code.condition0IsTrue_0.val = false;
{
gdjs.Level5Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 4;
}if (gdjs.Level5Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level6", false);
}}

}


};gdjs.Level5Code.eventsList8 = function(runtimeScene) {

{


gdjs.Level5Code.condition0IsTrue_0.val = false;
{
gdjs.Level5Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level5Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Ice Cave'.ogg", true, 100, 1);
}
{ //Subevents
gdjs.Level5Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.Level5Code.eventsList1(runtimeScene);
}


{


gdjs.Level5Code.eventsList2(runtimeScene);
}


{


gdjs.Level5Code.eventsList3(runtimeScene);
}


{


gdjs.Level5Code.eventsList4(runtimeScene);
}


{


gdjs.Level5Code.eventsList5(runtimeScene);
}


{


gdjs.Level5Code.eventsList6(runtimeScene);
}


{


gdjs.Level5Code.eventsList7(runtimeScene);
}


};

gdjs.Level5Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level5Code.GDTennyObjects1.length = 0;
gdjs.Level5Code.GDTennyObjects2.length = 0;
gdjs.Level5Code.GDTennyObjects3.length = 0;
gdjs.Level5Code.GDTommyObjects1.length = 0;
gdjs.Level5Code.GDTommyObjects2.length = 0;
gdjs.Level5Code.GDTommyObjects3.length = 0;
gdjs.Level5Code.GDPlatformObstaclesObjects1.length = 0;
gdjs.Level5Code.GDPlatformObstaclesObjects2.length = 0;
gdjs.Level5Code.GDPlatformObstaclesObjects3.length = 0;
gdjs.Level5Code.GDCenterObstaclesObjects1.length = 0;
gdjs.Level5Code.GDCenterObstaclesObjects2.length = 0;
gdjs.Level5Code.GDCenterObstaclesObjects3.length = 0;
gdjs.Level5Code.GDJellyFishObjects1.length = 0;
gdjs.Level5Code.GDJellyFishObjects2.length = 0;
gdjs.Level5Code.GDJellyFishObjects3.length = 0;
gdjs.Level5Code.GDCoinsObjects1.length = 0;
gdjs.Level5Code.GDCoinsObjects2.length = 0;
gdjs.Level5Code.GDCoinsObjects3.length = 0;
gdjs.Level5Code.GDScoreObjects1.length = 0;
gdjs.Level5Code.GDScoreObjects2.length = 0;
gdjs.Level5Code.GDScoreObjects3.length = 0;
gdjs.Level5Code.GDBGObjects1.length = 0;
gdjs.Level5Code.GDBGObjects2.length = 0;
gdjs.Level5Code.GDBGObjects3.length = 0;
gdjs.Level5Code.GDlceObjects1.length = 0;
gdjs.Level5Code.GDlceObjects2.length = 0;
gdjs.Level5Code.GDlceObjects3.length = 0;

gdjs.Level5Code.eventsList8(runtimeScene);
return;

}

gdjs['Level5Code'] = gdjs.Level5Code;
