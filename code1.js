gdjs.Level1Code = {};
gdjs.Level1Code.GDTennyObjects1= [];
gdjs.Level1Code.GDTennyObjects2= [];
gdjs.Level1Code.GDTennyObjects3= [];
gdjs.Level1Code.GDTommyObjects1= [];
gdjs.Level1Code.GDTommyObjects2= [];
gdjs.Level1Code.GDTommyObjects3= [];
gdjs.Level1Code.GDPlatformObstaclesObjects1= [];
gdjs.Level1Code.GDPlatformObstaclesObjects2= [];
gdjs.Level1Code.GDPlatformObstaclesObjects3= [];
gdjs.Level1Code.GDCenterObstaclesObjects1= [];
gdjs.Level1Code.GDCenterObstaclesObjects2= [];
gdjs.Level1Code.GDCenterObstaclesObjects3= [];
gdjs.Level1Code.GDJellyFishObjects1= [];
gdjs.Level1Code.GDJellyFishObjects2= [];
gdjs.Level1Code.GDJellyFishObjects3= [];
gdjs.Level1Code.GDCoinsObjects1= [];
gdjs.Level1Code.GDCoinsObjects2= [];
gdjs.Level1Code.GDCoinsObjects3= [];
gdjs.Level1Code.GDScoreObjects1= [];
gdjs.Level1Code.GDScoreObjects2= [];
gdjs.Level1Code.GDScoreObjects3= [];
gdjs.Level1Code.GDBGObjects1= [];
gdjs.Level1Code.GDBGObjects2= [];
gdjs.Level1Code.GDBGObjects3= [];

gdjs.Level1Code.conditionTrue_0 = {val:false};
gdjs.Level1Code.condition0IsTrue_0 = {val:false};
gdjs.Level1Code.condition1IsTrue_0 = {val:false};
gdjs.Level1Code.condition2IsTrue_0 = {val:false};
gdjs.Level1Code.condition3IsTrue_0 = {val:false};
gdjs.Level1Code.conditionTrue_1 = {val:false};
gdjs.Level1Code.condition0IsTrue_1 = {val:false};
gdjs.Level1Code.condition1IsTrue_1 = {val:false};
gdjs.Level1Code.condition2IsTrue_1 = {val:false};
gdjs.Level1Code.condition3IsTrue_1 = {val:false};


gdjs.Level1Code.eventsList0 = function(runtimeScene) {

{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.storage.elementExistsInJSONFile("Score", "Data");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.storage.readNumberFromJSONFile("Score", "Data", runtimeScene, runtimeScene.getVariables().getFromIndex(0));
}}

}


};gdjs.Level1Code.eventsList1 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Tenny"), gdjs.Level1Code.GDTennyObjects2);
{for(var i = 0, len = gdjs.Level1Code.GDTennyObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDTennyObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tenny"), gdjs.Level1Code.GDTennyObjects2);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDTennyObjects2.length;i<l;++i) {
    if ( gdjs.Level1Code.GDTennyObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDTennyObjects2[k] = gdjs.Level1Code.GDTennyObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDTennyObjects2.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDTennyObjects2 */
{for(var i = 0, len = gdjs.Level1Code.GDTennyObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDTennyObjects2[i].setAnimationName("TennyJump");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tenny"), gdjs.Level1Code.GDTennyObjects2);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDTennyObjects2.length;i<l;++i) {
    if ( gdjs.Level1Code.GDTennyObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDTennyObjects2[k] = gdjs.Level1Code.GDTennyObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDTennyObjects2.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDTennyObjects2 */
{for(var i = 0, len = gdjs.Level1Code.GDTennyObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDTennyObjects2[i].setAnimationName("TennyJump");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tenny"), gdjs.Level1Code.GDTennyObjects2);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDTennyObjects2.length;i<l;++i) {
    if ( gdjs.Level1Code.GDTennyObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDTennyObjects2[k] = gdjs.Level1Code.GDTennyObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDTennyObjects2.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDTennyObjects2 */
{for(var i = 0, len = gdjs.Level1Code.GDTennyObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDTennyObjects2[i].setAnimationName("Tenny");
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Tenny"), gdjs.Level1Code.GDTennyObjects2);
{for(var i = 0, len = gdjs.Level1Code.GDTennyObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDTennyObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tenny"), gdjs.Level1Code.GDTennyObjects2);

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDTennyObjects2.length;i<l;++i) {
    if ( gdjs.Level1Code.GDTennyObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDTennyObjects2[k] = gdjs.Level1Code.GDTennyObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDTennyObjects2.length = k;}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition1IsTrue_0;
gdjs.Level1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13287092);
}
}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Jump.wav", false, 100, 1);
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.Level1Code.GDTommyObjects1);
{for(var i = 0, len = gdjs.Level1Code.GDTommyObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDTommyObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.Level1Code.eventsList2 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.Level1Code.GDTommyObjects2);
{for(var i = 0, len = gdjs.Level1Code.GDTommyObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDTommyObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.Level1Code.GDTommyObjects2);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDTommyObjects2.length;i<l;++i) {
    if ( gdjs.Level1Code.GDTommyObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDTommyObjects2[k] = gdjs.Level1Code.GDTommyObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDTommyObjects2.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDTommyObjects2 */
{for(var i = 0, len = gdjs.Level1Code.GDTommyObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDTommyObjects2[i].setAnimationName("TommyJump");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.Level1Code.GDTommyObjects2);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDTommyObjects2.length;i<l;++i) {
    if ( gdjs.Level1Code.GDTommyObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDTommyObjects2[k] = gdjs.Level1Code.GDTommyObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDTommyObjects2.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDTommyObjects2 */
{for(var i = 0, len = gdjs.Level1Code.GDTommyObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDTommyObjects2[i].setAnimationName("TommyJump");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.Level1Code.GDTommyObjects2);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDTommyObjects2.length;i<l;++i) {
    if ( gdjs.Level1Code.GDTommyObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDTommyObjects2[k] = gdjs.Level1Code.GDTommyObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDTommyObjects2.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDTommyObjects2 */
{for(var i = 0, len = gdjs.Level1Code.GDTommyObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDTommyObjects2[i].setAnimationName("TommyRunning");
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.Level1Code.GDTommyObjects2);
{for(var i = 0, len = gdjs.Level1Code.GDTommyObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDTommyObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.Level1Code.GDTommyObjects2);

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDTommyObjects2.length;i<l;++i) {
    if ( gdjs.Level1Code.GDTommyObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDTommyObjects2[k] = gdjs.Level1Code.GDTommyObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDTommyObjects2.length = k;}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition1IsTrue_0;
gdjs.Level1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13291828);
}
}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Jump.wav", false, 100, 1);
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Tenny"), gdjs.Level1Code.GDTennyObjects1);
{for(var i = 0, len = gdjs.Level1Code.GDTennyObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDTennyObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDTennyObjects1ObjectsGDgdjs_46Level1Code_46GDTommyObjects1Objects = Hashtable.newFrom({"Tenny": gdjs.Level1Code.GDTennyObjects1, "Tommy": gdjs.Level1Code.GDTommyObjects1});
gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDJellyFishObjects1Objects = Hashtable.newFrom({"JellyFish": gdjs.Level1Code.GDJellyFishObjects1});
gdjs.Level1Code.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("JellyFish"), gdjs.Level1Code.GDJellyFishObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tenny"), gdjs.Level1Code.GDTennyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.Level1Code.GDTommyObjects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
gdjs.Level1Code.condition2IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDTennyObjects1ObjectsGDgdjs_46Level1Code_46GDTommyObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDJellyFishObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDTennyObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDTennyObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Level1Code.condition1IsTrue_0.val = true;
        gdjs.Level1Code.GDTennyObjects1[k] = gdjs.Level1Code.GDTennyObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDTennyObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Level1Code.GDTommyObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDTommyObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Level1Code.condition1IsTrue_0.val = true;
        gdjs.Level1Code.GDTommyObjects1[k] = gdjs.Level1Code.GDTommyObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDTommyObjects1.length = k;}if ( gdjs.Level1Code.condition1IsTrue_0.val ) {
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition2IsTrue_0;
gdjs.Level1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13292908);
}
}}
}
if (gdjs.Level1Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDJellyFishObjects1 */
/* Reuse gdjs.Level1Code.GDTennyObjects1 */
/* Reuse gdjs.Level1Code.GDTommyObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDJellyFishObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDJellyFishObjects1[i].addPolarForce(90, 300, 1);
}
}{for(var i = 0, len = gdjs.Level1Code.GDTennyObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDTennyObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
for(var i = 0, len = gdjs.Level1Code.GDTommyObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDTommyObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{for(var i = 0, len = gdjs.Level1Code.GDTennyObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDTennyObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
for(var i = 0, len = gdjs.Level1Code.GDTommyObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDTommyObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Died.wav", false, 100, 1);
}}

}


};gdjs.Level1Code.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Tenny"), gdjs.Level1Code.GDTennyObjects2);
gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.Level1Code.GDTommyObjects2);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDTennyObjects2.length;i<l;++i) {
    if ( gdjs.Level1Code.GDTennyObjects2[i].getX() >= 5856 ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDTennyObjects2[k] = gdjs.Level1Code.GDTennyObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDTennyObjects2.length = k;for(var i = 0, k = 0, l = gdjs.Level1Code.GDTommyObjects2.length;i<l;++i) {
    if ( gdjs.Level1Code.GDTommyObjects2[i].getX() >= 5856 ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDTommyObjects2[k] = gdjs.Level1Code.GDTommyObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDTommyObjects2.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDTennyObjects2 */
/* Reuse gdjs.Level1Code.GDTommyObjects2 */
{for(var i = 0, len = gdjs.Level1Code.GDTennyObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDTennyObjects2[i].getBehavior("SmoothCamera").SetFollowOnX(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
for(var i = 0, len = gdjs.Level1Code.GDTommyObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDTommyObjects2[i].getBehavior("SmoothCamera").SetFollowOnX(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tenny"), gdjs.Level1Code.GDTennyObjects2);
gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.Level1Code.GDTommyObjects2);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDTennyObjects2.length;i<l;++i) {
    if ( gdjs.Level1Code.GDTennyObjects2[i].getX() >= 6240 ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDTennyObjects2[k] = gdjs.Level1Code.GDTennyObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDTennyObjects2.length = k;for(var i = 0, k = 0, l = gdjs.Level1Code.GDTommyObjects2.length;i<l;++i) {
    if ( gdjs.Level1Code.GDTommyObjects2[i].getX() >= 6240 ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDTommyObjects2[k] = gdjs.Level1Code.GDTommyObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDTommyObjects2.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDTennyObjects2 */
/* Reuse gdjs.Level1Code.GDTommyObjects2 */
{for(var i = 0, len = gdjs.Level1Code.GDTennyObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDTennyObjects2[i].getBehavior("SmoothCamera").SetFollowOnY(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
for(var i = 0, len = gdjs.Level1Code.GDTommyObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDTommyObjects2[i].getBehavior("SmoothCamera").SetFollowOnY(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tenny"), gdjs.Level1Code.GDTennyObjects2);
gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.Level1Code.GDTommyObjects2);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDTennyObjects2.length;i<l;++i) {
    if ( gdjs.Level1Code.GDTennyObjects2[i].getX() >= 6948 ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDTennyObjects2[k] = gdjs.Level1Code.GDTennyObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDTennyObjects2.length = k;for(var i = 0, k = 0, l = gdjs.Level1Code.GDTommyObjects2.length;i<l;++i) {
    if ( gdjs.Level1Code.GDTommyObjects2[i].getX() >= 6948 ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDTommyObjects2[k] = gdjs.Level1Code.GDTommyObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDTommyObjects2.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(gdjs.random(3));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tenny"), gdjs.Level1Code.GDTennyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.Level1Code.GDTommyObjects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDTennyObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDTennyObjects1[i].getY() >= 1000 ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDTennyObjects1[k] = gdjs.Level1Code.GDTennyObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDTennyObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Level1Code.GDTommyObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDTommyObjects1[i].getY() >= 1000 ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDTommyObjects1[k] = gdjs.Level1Code.GDTommyObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDTommyObjects1.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameOver", false);
}}

}


};gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDTennyObjects2ObjectsGDgdjs_46Level1Code_46GDTommyObjects2Objects = Hashtable.newFrom({"Tenny": gdjs.Level1Code.GDTennyObjects2, "Tommy": gdjs.Level1Code.GDTommyObjects2});
gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDCoinsObjects2Objects = Hashtable.newFrom({"Coins": gdjs.Level1Code.GDCoinsObjects2});
gdjs.Level1Code.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Coins"), gdjs.Level1Code.GDCoinsObjects2);
gdjs.copyArray(runtimeScene.getObjects("Tenny"), gdjs.Level1Code.GDTennyObjects2);
gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.Level1Code.GDTommyObjects2);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDTennyObjects2ObjectsGDgdjs_46Level1Code_46GDTommyObjects2Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDCoinsObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDCoinsObjects2 */
{runtimeScene.getVariables().getFromIndex(0).add(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Coin.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.Level1Code.GDCoinsObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDCoinsObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.storage.writeNumberInJSONFile("Score", "Data", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Level1Code.GDScoreObjects2);
{for(var i = 0, len = gdjs.Level1Code.GDScoreObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDScoreObjects2[i].setString("Coins x " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}
}}

}


{


{
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)));
}}

}


};gdjs.Level1Code.eventsList6 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("BG"), gdjs.Level1Code.GDBGObjects1);
{for(var i = 0, len = gdjs.Level1Code.GDBGObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDBGObjects1[i].setXOffset(gdjs.Level1Code.GDBGObjects1[i].getXOffset() + (1));
}
}}

}


};gdjs.Level1Code.eventsList7 = function(runtimeScene) {

{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level2", false);
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 2;
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level3", false);
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 3;
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level5", false);
}}

}


};gdjs.Level1Code.eventsList8 = function(runtimeScene) {

{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Clouds.ogg", true, 100, 1);
}
{ //Subevents
gdjs.Level1Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.Level1Code.eventsList1(runtimeScene);
}


{


gdjs.Level1Code.eventsList2(runtimeScene);
}


{


gdjs.Level1Code.eventsList3(runtimeScene);
}


{


gdjs.Level1Code.eventsList4(runtimeScene);
}


{


gdjs.Level1Code.eventsList5(runtimeScene);
}


{


gdjs.Level1Code.eventsList6(runtimeScene);
}


{


gdjs.Level1Code.eventsList7(runtimeScene);
}


};

gdjs.Level1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level1Code.GDTennyObjects1.length = 0;
gdjs.Level1Code.GDTennyObjects2.length = 0;
gdjs.Level1Code.GDTennyObjects3.length = 0;
gdjs.Level1Code.GDTommyObjects1.length = 0;
gdjs.Level1Code.GDTommyObjects2.length = 0;
gdjs.Level1Code.GDTommyObjects3.length = 0;
gdjs.Level1Code.GDPlatformObstaclesObjects1.length = 0;
gdjs.Level1Code.GDPlatformObstaclesObjects2.length = 0;
gdjs.Level1Code.GDPlatformObstaclesObjects3.length = 0;
gdjs.Level1Code.GDCenterObstaclesObjects1.length = 0;
gdjs.Level1Code.GDCenterObstaclesObjects2.length = 0;
gdjs.Level1Code.GDCenterObstaclesObjects3.length = 0;
gdjs.Level1Code.GDJellyFishObjects1.length = 0;
gdjs.Level1Code.GDJellyFishObjects2.length = 0;
gdjs.Level1Code.GDJellyFishObjects3.length = 0;
gdjs.Level1Code.GDCoinsObjects1.length = 0;
gdjs.Level1Code.GDCoinsObjects2.length = 0;
gdjs.Level1Code.GDCoinsObjects3.length = 0;
gdjs.Level1Code.GDScoreObjects1.length = 0;
gdjs.Level1Code.GDScoreObjects2.length = 0;
gdjs.Level1Code.GDScoreObjects3.length = 0;
gdjs.Level1Code.GDBGObjects1.length = 0;
gdjs.Level1Code.GDBGObjects2.length = 0;
gdjs.Level1Code.GDBGObjects3.length = 0;

gdjs.Level1Code.eventsList8(runtimeScene);
return;

}

gdjs['Level1Code'] = gdjs.Level1Code;
