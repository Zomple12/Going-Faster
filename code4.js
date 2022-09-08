gdjs.Level4Code = {};
gdjs.Level4Code.GDTennyObjects1= [];
gdjs.Level4Code.GDTennyObjects2= [];
gdjs.Level4Code.GDTennyObjects3= [];
gdjs.Level4Code.GDTommyObjects1= [];
gdjs.Level4Code.GDTommyObjects2= [];
gdjs.Level4Code.GDTommyObjects3= [];
gdjs.Level4Code.GDPlatformObstaclesObjects1= [];
gdjs.Level4Code.GDPlatformObstaclesObjects2= [];
gdjs.Level4Code.GDPlatformObstaclesObjects3= [];
gdjs.Level4Code.GDCenterObstaclesObjects1= [];
gdjs.Level4Code.GDCenterObstaclesObjects2= [];
gdjs.Level4Code.GDCenterObstaclesObjects3= [];
gdjs.Level4Code.GDJellyFishObjects1= [];
gdjs.Level4Code.GDJellyFishObjects2= [];
gdjs.Level4Code.GDJellyFishObjects3= [];
gdjs.Level4Code.GDCoinsObjects1= [];
gdjs.Level4Code.GDCoinsObjects2= [];
gdjs.Level4Code.GDCoinsObjects3= [];
gdjs.Level4Code.GDScoreObjects1= [];
gdjs.Level4Code.GDScoreObjects2= [];
gdjs.Level4Code.GDScoreObjects3= [];
gdjs.Level4Code.GDBGObjects1= [];
gdjs.Level4Code.GDBGObjects2= [];
gdjs.Level4Code.GDBGObjects3= [];
gdjs.Level4Code.GDSnowObjects1= [];
gdjs.Level4Code.GDSnowObjects2= [];
gdjs.Level4Code.GDSnowObjects3= [];

gdjs.Level4Code.conditionTrue_0 = {val:false};
gdjs.Level4Code.condition0IsTrue_0 = {val:false};
gdjs.Level4Code.condition1IsTrue_0 = {val:false};
gdjs.Level4Code.condition2IsTrue_0 = {val:false};
gdjs.Level4Code.condition3IsTrue_0 = {val:false};
gdjs.Level4Code.conditionTrue_1 = {val:false};
gdjs.Level4Code.condition0IsTrue_1 = {val:false};
gdjs.Level4Code.condition1IsTrue_1 = {val:false};
gdjs.Level4Code.condition2IsTrue_1 = {val:false};
gdjs.Level4Code.condition3IsTrue_1 = {val:false};


gdjs.Level4Code.eventsList0 = function(runtimeScene) {

{


gdjs.Level4Code.condition0IsTrue_0.val = false;
{
gdjs.Level4Code.condition0IsTrue_0.val = gdjs.evtTools.storage.elementExistsInJSONFile("Score", "Data");
}if (gdjs.Level4Code.condition0IsTrue_0.val) {
{gdjs.evtTools.storage.readNumberFromJSONFile("Score", "Data", runtimeScene, runtimeScene.getVariables().getFromIndex(0));
}}

}


};gdjs.Level4Code.eventsList1 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Tenny"), gdjs.Level4Code.GDTennyObjects2);
{for(var i = 0, len = gdjs.Level4Code.GDTennyObjects2.length ;i < len;++i) {
    gdjs.Level4Code.GDTennyObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tenny"), gdjs.Level4Code.GDTennyObjects2);

gdjs.Level4Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level4Code.GDTennyObjects2.length;i<l;++i) {
    if ( gdjs.Level4Code.GDTennyObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Level4Code.condition0IsTrue_0.val = true;
        gdjs.Level4Code.GDTennyObjects2[k] = gdjs.Level4Code.GDTennyObjects2[i];
        ++k;
    }
}
gdjs.Level4Code.GDTennyObjects2.length = k;}if (gdjs.Level4Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level4Code.GDTennyObjects2 */
{for(var i = 0, len = gdjs.Level4Code.GDTennyObjects2.length ;i < len;++i) {
    gdjs.Level4Code.GDTennyObjects2[i].setAnimationName("TennyJump");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tenny"), gdjs.Level4Code.GDTennyObjects2);

gdjs.Level4Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level4Code.GDTennyObjects2.length;i<l;++i) {
    if ( gdjs.Level4Code.GDTennyObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Level4Code.condition0IsTrue_0.val = true;
        gdjs.Level4Code.GDTennyObjects2[k] = gdjs.Level4Code.GDTennyObjects2[i];
        ++k;
    }
}
gdjs.Level4Code.GDTennyObjects2.length = k;}if (gdjs.Level4Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level4Code.GDTennyObjects2 */
{for(var i = 0, len = gdjs.Level4Code.GDTennyObjects2.length ;i < len;++i) {
    gdjs.Level4Code.GDTennyObjects2[i].setAnimationName("TennyJump");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tenny"), gdjs.Level4Code.GDTennyObjects2);

gdjs.Level4Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level4Code.GDTennyObjects2.length;i<l;++i) {
    if ( gdjs.Level4Code.GDTennyObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Level4Code.condition0IsTrue_0.val = true;
        gdjs.Level4Code.GDTennyObjects2[k] = gdjs.Level4Code.GDTennyObjects2[i];
        ++k;
    }
}
gdjs.Level4Code.GDTennyObjects2.length = k;}if (gdjs.Level4Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level4Code.GDTennyObjects2 */
{for(var i = 0, len = gdjs.Level4Code.GDTennyObjects2.length ;i < len;++i) {
    gdjs.Level4Code.GDTennyObjects2[i].setAnimationName("Tenny");
}
}}

}


{


gdjs.Level4Code.condition0IsTrue_0.val = false;
{
gdjs.Level4Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.Level4Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Tenny"), gdjs.Level4Code.GDTennyObjects2);
{for(var i = 0, len = gdjs.Level4Code.GDTennyObjects2.length ;i < len;++i) {
    gdjs.Level4Code.GDTennyObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tenny"), gdjs.Level4Code.GDTennyObjects2);

gdjs.Level4Code.condition0IsTrue_0.val = false;
gdjs.Level4Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level4Code.GDTennyObjects2.length;i<l;++i) {
    if ( gdjs.Level4Code.GDTennyObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Level4Code.condition0IsTrue_0.val = true;
        gdjs.Level4Code.GDTennyObjects2[k] = gdjs.Level4Code.GDTennyObjects2[i];
        ++k;
    }
}
gdjs.Level4Code.GDTennyObjects2.length = k;}if ( gdjs.Level4Code.condition0IsTrue_0.val ) {
{
{gdjs.Level4Code.conditionTrue_1 = gdjs.Level4Code.condition1IsTrue_0;
gdjs.Level4Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13551788);
}
}}
if (gdjs.Level4Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Jump.wav", false, 100, 1);
}}

}


{


gdjs.Level4Code.condition0IsTrue_0.val = false;
{
gdjs.Level4Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
}if (gdjs.Level4Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.Level4Code.GDTommyObjects1);
{for(var i = 0, len = gdjs.Level4Code.GDTommyObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDTommyObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.Level4Code.eventsList2 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.Level4Code.GDTommyObjects2);
{for(var i = 0, len = gdjs.Level4Code.GDTommyObjects2.length ;i < len;++i) {
    gdjs.Level4Code.GDTommyObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.Level4Code.GDTommyObjects2);

gdjs.Level4Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level4Code.GDTommyObjects2.length;i<l;++i) {
    if ( gdjs.Level4Code.GDTommyObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Level4Code.condition0IsTrue_0.val = true;
        gdjs.Level4Code.GDTommyObjects2[k] = gdjs.Level4Code.GDTommyObjects2[i];
        ++k;
    }
}
gdjs.Level4Code.GDTommyObjects2.length = k;}if (gdjs.Level4Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level4Code.GDTommyObjects2 */
{for(var i = 0, len = gdjs.Level4Code.GDTommyObjects2.length ;i < len;++i) {
    gdjs.Level4Code.GDTommyObjects2[i].setAnimationName("TommyJump");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.Level4Code.GDTommyObjects2);

gdjs.Level4Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level4Code.GDTommyObjects2.length;i<l;++i) {
    if ( gdjs.Level4Code.GDTommyObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Level4Code.condition0IsTrue_0.val = true;
        gdjs.Level4Code.GDTommyObjects2[k] = gdjs.Level4Code.GDTommyObjects2[i];
        ++k;
    }
}
gdjs.Level4Code.GDTommyObjects2.length = k;}if (gdjs.Level4Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level4Code.GDTommyObjects2 */
{for(var i = 0, len = gdjs.Level4Code.GDTommyObjects2.length ;i < len;++i) {
    gdjs.Level4Code.GDTommyObjects2[i].setAnimationName("TommyJump");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.Level4Code.GDTommyObjects2);

gdjs.Level4Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level4Code.GDTommyObjects2.length;i<l;++i) {
    if ( gdjs.Level4Code.GDTommyObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Level4Code.condition0IsTrue_0.val = true;
        gdjs.Level4Code.GDTommyObjects2[k] = gdjs.Level4Code.GDTommyObjects2[i];
        ++k;
    }
}
gdjs.Level4Code.GDTommyObjects2.length = k;}if (gdjs.Level4Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level4Code.GDTommyObjects2 */
{for(var i = 0, len = gdjs.Level4Code.GDTommyObjects2.length ;i < len;++i) {
    gdjs.Level4Code.GDTommyObjects2[i].setAnimationName("TommyRunning");
}
}}

}


{


gdjs.Level4Code.condition0IsTrue_0.val = false;
{
gdjs.Level4Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.Level4Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.Level4Code.GDTommyObjects2);
{for(var i = 0, len = gdjs.Level4Code.GDTommyObjects2.length ;i < len;++i) {
    gdjs.Level4Code.GDTommyObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.Level4Code.GDTommyObjects2);

gdjs.Level4Code.condition0IsTrue_0.val = false;
gdjs.Level4Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level4Code.GDTommyObjects2.length;i<l;++i) {
    if ( gdjs.Level4Code.GDTommyObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Level4Code.condition0IsTrue_0.val = true;
        gdjs.Level4Code.GDTommyObjects2[k] = gdjs.Level4Code.GDTommyObjects2[i];
        ++k;
    }
}
gdjs.Level4Code.GDTommyObjects2.length = k;}if ( gdjs.Level4Code.condition0IsTrue_0.val ) {
{
{gdjs.Level4Code.conditionTrue_1 = gdjs.Level4Code.condition1IsTrue_0;
gdjs.Level4Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13556564);
}
}}
if (gdjs.Level4Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Jump.wav", false, 100, 1);
}}

}


{


gdjs.Level4Code.condition0IsTrue_0.val = false;
{
gdjs.Level4Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
}if (gdjs.Level4Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Tenny"), gdjs.Level4Code.GDTennyObjects1);
{for(var i = 0, len = gdjs.Level4Code.GDTennyObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDTennyObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDTennyObjects1ObjectsGDgdjs_46Level4Code_46GDTommyObjects1Objects = Hashtable.newFrom({"Tenny": gdjs.Level4Code.GDTennyObjects1, "Tommy": gdjs.Level4Code.GDTommyObjects1});
gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDJellyFishObjects1Objects = Hashtable.newFrom({"JellyFish": gdjs.Level4Code.GDJellyFishObjects1});
gdjs.Level4Code.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("JellyFish"), gdjs.Level4Code.GDJellyFishObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tenny"), gdjs.Level4Code.GDTennyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.Level4Code.GDTommyObjects1);

gdjs.Level4Code.condition0IsTrue_0.val = false;
gdjs.Level4Code.condition1IsTrue_0.val = false;
gdjs.Level4Code.condition2IsTrue_0.val = false;
{
gdjs.Level4Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDTennyObjects1ObjectsGDgdjs_46Level4Code_46GDTommyObjects1Objects, gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDJellyFishObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level4Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level4Code.GDTennyObjects1.length;i<l;++i) {
    if ( gdjs.Level4Code.GDTennyObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Level4Code.condition1IsTrue_0.val = true;
        gdjs.Level4Code.GDTennyObjects1[k] = gdjs.Level4Code.GDTennyObjects1[i];
        ++k;
    }
}
gdjs.Level4Code.GDTennyObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Level4Code.GDTommyObjects1.length;i<l;++i) {
    if ( gdjs.Level4Code.GDTommyObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Level4Code.condition1IsTrue_0.val = true;
        gdjs.Level4Code.GDTommyObjects1[k] = gdjs.Level4Code.GDTommyObjects1[i];
        ++k;
    }
}
gdjs.Level4Code.GDTommyObjects1.length = k;}if ( gdjs.Level4Code.condition1IsTrue_0.val ) {
{
{gdjs.Level4Code.conditionTrue_1 = gdjs.Level4Code.condition2IsTrue_0;
gdjs.Level4Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13557644);
}
}}
}
if (gdjs.Level4Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Level4Code.GDJellyFishObjects1 */
/* Reuse gdjs.Level4Code.GDTennyObjects1 */
/* Reuse gdjs.Level4Code.GDTommyObjects1 */
{for(var i = 0, len = gdjs.Level4Code.GDJellyFishObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDJellyFishObjects1[i].addPolarForce(90, 300, 1);
}
}{for(var i = 0, len = gdjs.Level4Code.GDTennyObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDTennyObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
for(var i = 0, len = gdjs.Level4Code.GDTommyObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDTommyObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{for(var i = 0, len = gdjs.Level4Code.GDTennyObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDTennyObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
for(var i = 0, len = gdjs.Level4Code.GDTommyObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDTommyObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Died.wav", false, 100, 1);
}}

}


};gdjs.Level4Code.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Tenny"), gdjs.Level4Code.GDTennyObjects2);
gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.Level4Code.GDTommyObjects2);

gdjs.Level4Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level4Code.GDTennyObjects2.length;i<l;++i) {
    if ( gdjs.Level4Code.GDTennyObjects2[i].getX() >= 5856 ) {
        gdjs.Level4Code.condition0IsTrue_0.val = true;
        gdjs.Level4Code.GDTennyObjects2[k] = gdjs.Level4Code.GDTennyObjects2[i];
        ++k;
    }
}
gdjs.Level4Code.GDTennyObjects2.length = k;for(var i = 0, k = 0, l = gdjs.Level4Code.GDTommyObjects2.length;i<l;++i) {
    if ( gdjs.Level4Code.GDTommyObjects2[i].getX() >= 5856 ) {
        gdjs.Level4Code.condition0IsTrue_0.val = true;
        gdjs.Level4Code.GDTommyObjects2[k] = gdjs.Level4Code.GDTommyObjects2[i];
        ++k;
    }
}
gdjs.Level4Code.GDTommyObjects2.length = k;}if (gdjs.Level4Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level4Code.GDTennyObjects2 */
/* Reuse gdjs.Level4Code.GDTommyObjects2 */
{for(var i = 0, len = gdjs.Level4Code.GDTennyObjects2.length ;i < len;++i) {
    gdjs.Level4Code.GDTennyObjects2[i].getBehavior("SmoothCamera").SetFollowOnX(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
for(var i = 0, len = gdjs.Level4Code.GDTommyObjects2.length ;i < len;++i) {
    gdjs.Level4Code.GDTommyObjects2[i].getBehavior("SmoothCamera").SetFollowOnX(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tenny"), gdjs.Level4Code.GDTennyObjects2);
gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.Level4Code.GDTommyObjects2);

gdjs.Level4Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level4Code.GDTennyObjects2.length;i<l;++i) {
    if ( gdjs.Level4Code.GDTennyObjects2[i].getX() >= 6240 ) {
        gdjs.Level4Code.condition0IsTrue_0.val = true;
        gdjs.Level4Code.GDTennyObjects2[k] = gdjs.Level4Code.GDTennyObjects2[i];
        ++k;
    }
}
gdjs.Level4Code.GDTennyObjects2.length = k;for(var i = 0, k = 0, l = gdjs.Level4Code.GDTommyObjects2.length;i<l;++i) {
    if ( gdjs.Level4Code.GDTommyObjects2[i].getX() >= 6240 ) {
        gdjs.Level4Code.condition0IsTrue_0.val = true;
        gdjs.Level4Code.GDTommyObjects2[k] = gdjs.Level4Code.GDTommyObjects2[i];
        ++k;
    }
}
gdjs.Level4Code.GDTommyObjects2.length = k;}if (gdjs.Level4Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level4Code.GDTennyObjects2 */
/* Reuse gdjs.Level4Code.GDTommyObjects2 */
{for(var i = 0, len = gdjs.Level4Code.GDTennyObjects2.length ;i < len;++i) {
    gdjs.Level4Code.GDTennyObjects2[i].getBehavior("SmoothCamera").SetFollowOnY(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
for(var i = 0, len = gdjs.Level4Code.GDTommyObjects2.length ;i < len;++i) {
    gdjs.Level4Code.GDTommyObjects2[i].getBehavior("SmoothCamera").SetFollowOnY(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tenny"), gdjs.Level4Code.GDTennyObjects2);
gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.Level4Code.GDTommyObjects2);

gdjs.Level4Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level4Code.GDTennyObjects2.length;i<l;++i) {
    if ( gdjs.Level4Code.GDTennyObjects2[i].getX() >= 7456 ) {
        gdjs.Level4Code.condition0IsTrue_0.val = true;
        gdjs.Level4Code.GDTennyObjects2[k] = gdjs.Level4Code.GDTennyObjects2[i];
        ++k;
    }
}
gdjs.Level4Code.GDTennyObjects2.length = k;for(var i = 0, k = 0, l = gdjs.Level4Code.GDTommyObjects2.length;i<l;++i) {
    if ( gdjs.Level4Code.GDTommyObjects2[i].getX() >= 7456 ) {
        gdjs.Level4Code.condition0IsTrue_0.val = true;
        gdjs.Level4Code.GDTommyObjects2[k] = gdjs.Level4Code.GDTommyObjects2[i];
        ++k;
    }
}
gdjs.Level4Code.GDTommyObjects2.length = k;}if (gdjs.Level4Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(gdjs.random(3));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tenny"), gdjs.Level4Code.GDTennyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.Level4Code.GDTommyObjects1);

gdjs.Level4Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level4Code.GDTennyObjects1.length;i<l;++i) {
    if ( gdjs.Level4Code.GDTennyObjects1[i].getY() >= 1000 ) {
        gdjs.Level4Code.condition0IsTrue_0.val = true;
        gdjs.Level4Code.GDTennyObjects1[k] = gdjs.Level4Code.GDTennyObjects1[i];
        ++k;
    }
}
gdjs.Level4Code.GDTennyObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Level4Code.GDTommyObjects1.length;i<l;++i) {
    if ( gdjs.Level4Code.GDTommyObjects1[i].getY() >= 1000 ) {
        gdjs.Level4Code.condition0IsTrue_0.val = true;
        gdjs.Level4Code.GDTommyObjects1[k] = gdjs.Level4Code.GDTommyObjects1[i];
        ++k;
    }
}
gdjs.Level4Code.GDTommyObjects1.length = k;}if (gdjs.Level4Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameOver", false);
}}

}


};gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDTennyObjects2ObjectsGDgdjs_46Level4Code_46GDTommyObjects2Objects = Hashtable.newFrom({"Tenny": gdjs.Level4Code.GDTennyObjects2, "Tommy": gdjs.Level4Code.GDTommyObjects2});
gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDCoinsObjects2Objects = Hashtable.newFrom({"Coins": gdjs.Level4Code.GDCoinsObjects2});
gdjs.Level4Code.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Coins"), gdjs.Level4Code.GDCoinsObjects2);
gdjs.copyArray(runtimeScene.getObjects("Tenny"), gdjs.Level4Code.GDTennyObjects2);
gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.Level4Code.GDTommyObjects2);

gdjs.Level4Code.condition0IsTrue_0.val = false;
{
gdjs.Level4Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDTennyObjects2ObjectsGDgdjs_46Level4Code_46GDTommyObjects2Objects, gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDCoinsObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level4Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level4Code.GDCoinsObjects2 */
{runtimeScene.getVariables().getFromIndex(0).add(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Coin.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.Level4Code.GDCoinsObjects2.length ;i < len;++i) {
    gdjs.Level4Code.GDCoinsObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.storage.writeNumberInJSONFile("Score", "Data", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Level4Code.GDScoreObjects2);
{for(var i = 0, len = gdjs.Level4Code.GDScoreObjects2.length ;i < len;++i) {
    gdjs.Level4Code.GDScoreObjects2[i].setString("Coins x " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}
}}

}


{


{
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)));
}}

}


};gdjs.Level4Code.eventsList6 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("BG"), gdjs.Level4Code.GDBGObjects1);
{for(var i = 0, len = gdjs.Level4Code.GDBGObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDBGObjects1[i].setXOffset(gdjs.Level4Code.GDBGObjects1[i].getXOffset() + (1));
}
}}

}


};gdjs.Level4Code.eventsList7 = function(runtimeScene) {

{


gdjs.Level4Code.condition0IsTrue_0.val = false;
{
gdjs.Level4Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}if (gdjs.Level4Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level2", false);
}}

}


{


gdjs.Level4Code.condition0IsTrue_0.val = false;
{
gdjs.Level4Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 2;
}if (gdjs.Level4Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level3", false);
}}

}


{


gdjs.Level4Code.condition0IsTrue_0.val = false;
{
gdjs.Level4Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 3;
}if (gdjs.Level4Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level5", false);
}}

}


{


gdjs.Level4Code.condition0IsTrue_0.val = false;
{
gdjs.Level4Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 4;
}if (gdjs.Level4Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level6", false);
}}

}


};gdjs.Level4Code.eventsList8 = function(runtimeScene) {

{


gdjs.Level4Code.condition0IsTrue_0.val = false;
{
gdjs.Level4Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level4Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Snowing.ogg", true, 100, 1);
}
{ //Subevents
gdjs.Level4Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.Level4Code.eventsList1(runtimeScene);
}


{


gdjs.Level4Code.eventsList2(runtimeScene);
}


{


gdjs.Level4Code.eventsList3(runtimeScene);
}


{


gdjs.Level4Code.eventsList4(runtimeScene);
}


{


gdjs.Level4Code.eventsList5(runtimeScene);
}


{


gdjs.Level4Code.eventsList6(runtimeScene);
}


{


gdjs.Level4Code.eventsList7(runtimeScene);
}


};

gdjs.Level4Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level4Code.GDTennyObjects1.length = 0;
gdjs.Level4Code.GDTennyObjects2.length = 0;
gdjs.Level4Code.GDTennyObjects3.length = 0;
gdjs.Level4Code.GDTommyObjects1.length = 0;
gdjs.Level4Code.GDTommyObjects2.length = 0;
gdjs.Level4Code.GDTommyObjects3.length = 0;
gdjs.Level4Code.GDPlatformObstaclesObjects1.length = 0;
gdjs.Level4Code.GDPlatformObstaclesObjects2.length = 0;
gdjs.Level4Code.GDPlatformObstaclesObjects3.length = 0;
gdjs.Level4Code.GDCenterObstaclesObjects1.length = 0;
gdjs.Level4Code.GDCenterObstaclesObjects2.length = 0;
gdjs.Level4Code.GDCenterObstaclesObjects3.length = 0;
gdjs.Level4Code.GDJellyFishObjects1.length = 0;
gdjs.Level4Code.GDJellyFishObjects2.length = 0;
gdjs.Level4Code.GDJellyFishObjects3.length = 0;
gdjs.Level4Code.GDCoinsObjects1.length = 0;
gdjs.Level4Code.GDCoinsObjects2.length = 0;
gdjs.Level4Code.GDCoinsObjects3.length = 0;
gdjs.Level4Code.GDScoreObjects1.length = 0;
gdjs.Level4Code.GDScoreObjects2.length = 0;
gdjs.Level4Code.GDScoreObjects3.length = 0;
gdjs.Level4Code.GDBGObjects1.length = 0;
gdjs.Level4Code.GDBGObjects2.length = 0;
gdjs.Level4Code.GDBGObjects3.length = 0;
gdjs.Level4Code.GDSnowObjects1.length = 0;
gdjs.Level4Code.GDSnowObjects2.length = 0;
gdjs.Level4Code.GDSnowObjects3.length = 0;

gdjs.Level4Code.eventsList8(runtimeScene);
return;

}

gdjs['Level4Code'] = gdjs.Level4Code;
