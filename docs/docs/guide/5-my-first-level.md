# My First Level Tutorial

The fastest way to learn a new tool is to get your hands dirty and try out yourself. In this chapter we will dive headfirst into Formabble, applying everything the guide has taught you thus far and create your own playable platformer level. Lets get to it!

### Step 1 - Creating Your Domain

To create your domain, from the **Main Menu**, click on **New Domain**.

![Fbl New Domain Button](images\FblNewDomain.png "Fbl New Domain Button")

After a few seconds, you should be greeted by a fresh empty domain. Congratulations you have created your first domain!

![Fbl New Domain](images\empty-domain.png "Fbl New Domain")

### Step 2 - Importing Assets

Assets are the pieces to the jigsaw that is a level. Thus before we start creating our level, we have to get our pieces ready.
You can find all the assets that will be required and are to be imported [here](https://www.notion.so/fragcolor/My-First-Level-Assets-39feddd6fa054878bb19a4d400686ce9?pvs=4).
The first asset we will import is the *“main-brain”*. This asset will act as the control center for our level, coordinating and linking all the other pieces. To import the *"main-brain"*, first, drag your asset from your file explorer into your **Domain Inventory** window. The **Import Asset** window will appear. Next, click on **Import**.

![Import Main Brain](images\import-main-brain.png "Import Main Brain")

Change the **Domain Inventory** category to **Scripts**.

![Domain Inventory Category](images\domain-inventory-category.png "Domain Inventory Category")

You should see the *“main-brain.shs”* inside your **Domain Inventory** now.

![Domain Inventory with main-brain asset](images\domain-inventory-main-brain.png "Domain Inventory with main-brain asset")

Next, formalize the main-brain by clicking on the Formalize Button.

![Formalize main-brain](images\domain-inventory-formalize.png "Formalize main-brain")

Some in-game UI will appear on your screen. This is because main-brain is a form that has some ui-behavior. You should also see the main-brain form on your **Domain Forms list**.

![main-brain formalized](images\main-brain-ui.png "main-brain formalized")

![main-brain Forms List](images\forms-list-main-brain.png "main-brain Forms List")

Well done! You have just inserted your first piece. The next step is to import all the other assets that we will need for our level.

### Step 3 - Adding Assets with References

The next pieces to import would be the floor tiles which will act as platforms for our game. Let’s start with *floor-tile-1-START*.

Similar to how we imported the main-brain , click on import and import *floor-tile-1-START* from the [folder](https://www.notion.so/fragcolor/My-First-Level-Assets-39feddd6fa054878bb19a4d400686ce9?pvs=4).

Once you have imported *floor-tile-1-START* and try to formalize it, you will realize that something is wrong.

![main-brain failed](images\domain-forms-failed.png "main-brain failed")

Notice that it is formalized as a failed form. This means that there is something wrong with the asset’s script and it did not formalize properly. Specifically for this case, *floor-tile-1-START* has a reference that we have not added yet.

In *floor-tile-1-START*, we are accessing the global variables set by *main-brain*. To access these global variables , we need to ensure that the *floor-tile-1-START* asset is referencing the main-brain asset properly. To fix this, we have to add *main-brain* as a reference.

First click on *floor-tile-1-START* in the **Domain Inventory Window** and then click on **Edit**.

![main-brain failed](images\domain-inventory-edit-2.png "main-brain failed")

Upon clicking on **Edit**, you will be greeted with the **Edit Asset** window.

![Edit Asset floor-tile-1-START](images\start-tile-edit.png "Edit Asset floor-tile-1-START")

From *floor-tile-1-START* ’s **Edit Asset** window, click on the **References** toggle to see all the assets that *floor-tile-1-START* ‘s references.

![floor-tile-1-START references](images\start-tile-references.png "floor-tile-1-START references")

Currently, the **References list** is empty. To populate it, drag the *main-brain* asset from the **Domain Inventory** into the **References list**.

![floor-tile-1-START with references](images\start-tile-with-reference.png "floor-tile-1-START wth references")

You should see that *floor-tile-1-START* asset is now referencing *main-brain*.

Lastly, click on the **Save** button, to save your changes.

![floor-tile-1-START save button](images\start-tile-save.png "floor-tile-1-START save button")

Now try to Formalize floor-tile-1-START again. You should see a green tile!.

![floor-tile-1-START formalized](images\start-tile-formalized.png "floor-tile-1-START formalized")

The next asset that we are going to import is *floor-tile-2-END*. First click on **Import**.

![Domain inventory Import Button](images\tile-2-import.png "Domain Inventory Import Button")

Next from the **File Manager** window, navigate to where your assets were downloaded and click on **Open**.

![File Manager](images\tile-2-file-manager.png "File Manager")

*floor-tile-2-END* is similar to *floor-tile-1-START*, in that *floor-tile-2-END* too also has to be fixed before it can be formalized properly. Like *floor-tile-1-START*, it also references main-brain. We can also add references to scripts from the **Import Asset** window which should have popped up on the screen.

From this window, we can drag assets into the References list to add references. Drag the *main-brain* asset into the *floor-tile-2-END* reference list and click on Import.

![Adding references to floor-tile-2-END](images\tile-2-add-references.png "Adding references to floor-tile-2-END")

Click on **Formalize** and you should see red tile!

![floor-tile-2-END formalized](images\tile-2-formalized.png "floor-tile-2-END formalized")

The rest of the pieces need to have their references added similar to how *floor-tile-1-START* and *floor-tile-2-END* were fixed (with minor variations). Try to fix them yourself, or if you need help, click on the appropriate toggles below to view the proper steps for each asset.

??? note "floor-tile-3-DESTROYABLE"
    *floor-tile-3-DESTROYABLE* also references *main-brain* and needs its short ids fixed.

    1. From the **Domain Inventory** window click on import and import in *floor-tile-3-DESTROYABLE*

    2. From the **Import Assets** window, add *main-brain* into the reference list and click on Import.

    3. Click on **Save**.

    ![floor-tile-3-DESTROYABLE formalized](images\floor-tile-3-formalized.png "floor-tile-3-DESTROYABLE formalized")

??? note "floor-tile-4-UNDESTROYABLE"
    *floor-tile-4-UNDESTROYABLE* does not reference *main-brain*, however it still dispatches information to tiself and thus needs its short-Ids fixed.

    1. From the **Domain Inventory** window click on import and import in *floor-tile-4-UNDESTROYABLE*

    2. From the **Import Assets** window, click on **Import**.

    3. Click on **Save**.

    ![floor-tile-4-UNDESTROYABLE formalized](images\tile-4-formalized.png "floor-tile-4-UNDESTROYABLE formalized")

??? note "cubeFace1"
    cubeFace1 is a glb mesh that will be referenced in *player-1*

    1. From the **Domain Inventory** window click on import and import in *cubeFace1*

    2. From the **Import Assets** window, click on **Import**.

??? note "cubeFace2"
    cubeFace2 is a glb mesh that will be referenced in player-2

    1. From the **Domain Inventory** window click on **Import** and import in *cubeFace2.glb*

    2. From the **Import** Assets window, click on **Import**.


??? note "player-1"
    *player-1* references *cubeFace1*.

    1. From the **Domain Inventory** window click on **Import** and import in *player-1*

    2. From the **Import** Assets window, add *cubeFace1* into the reference list and click on **Import**.

    3. Click on Save.

    ![player-1 formalized](images\player-1-formalized.png "player-1 formalized")

??? note "player-2"
    *player-2* references *cubeFace2* and also dispatches information to the different behaviors in itself.

    1. From the **Domain Inventory** window click on import and import in *player-2*

    2. From the **Import** Assets window, add *cubeFace2* into the reference list and click on import.

    3. Click on **Save**.

    ![player-2 formalized](images\player-2-formalized.png "player-2 formalized")

Congratulations! You have successfully imported all your assets!

### Step 4 - Making your level.

Now that you have all your pieces, we can start designing our level. Before we start creating our architectural masterpieces, lets start small first, to see how the different pieces work. main-brain should have already been formalized, if it is not formalized, formalize main-brain first.

1- First formalize *floor-tile-4-UNDESTROYABLE*.

![floor-tile-4-UNDESTROYABLE formalized](images\step-4-1.png "floor-tile-4-UNDESTROYABLE formalized")

2- Next click on the freshly formalized form to bring up its **Form Details window**.

![floor-tile-4-UNDESTROYABLE form details](images\step-4-2.png "floor-tile-4-UNDESTROYABLE form details")

3- From the **Form Details** window, you can manipulate the form’s transformations and also its exposed variables. Change the form’s X translation to 2. You can do this either through the **Form Details** window or through the form’s **Translation Gizmo**.

![floor-tile-4-UNDESTROYABLE form details](images\step-4-3.png "floor-tile-4-UNDESTROYABLE form details")

4- From the **Form Gizmo**, click on the **Duplicate Icon** to duplicate the form.

![floor-tile-4-UNDESTROYABLE duplicate](images\step-4-4.png "floor-tile-4-UNDESTROYABLE duplicate")

5- Give the duplicated form a -2 X-axis translation. These two platforms will serve as the starting point for our *player-1* and *player-2* cubes.

![floor-tile-4-UNDESTROYABLE duplicated](images\step-4-5.png "floor-tile-4-UNDESTROYABLE duplicated")

6- Now formalize *floor-tile-1-START*.

![floor-tile-1-START formalized](images\step-4-6.png "floor-tile-1-START formalized")

7- Give this *formalize floor-tile-1-START* an xyz translation of (2 0 -2).

![floor-tile-1-START change translation](images\step-4-7.png "floor-tile-1-START change translation")

8- Duplicate *floor-tile-1-START* and give it a xyz translation of (-2 0 -2)

![floor-tile-1-START duplicated](images\step-4-8.png "floor-tile-1-START duplicated")

9- Next, formalize *floor-tile-3-DESTROYABLE* and give it an xyz translation (2 0 -4)

![floor-tile-3-DESTROYABLE formalized](images\step-4-9.png "floor-tile-3-DESTROYABLE formalized")

10- Duplicate *floor-tile-3-DESTROYABLE* and give it an xyz translation of (-2 0 -4)

![floor-tile-3-DESTROYABLE duplicated](images\step-4-10.png "floor-tile-3-DESTROYABLE duplicated")

11- Next formalize *floor-tile-4-END* and give it a translation of (-2 0 -6)

![floor-tile-4-END formalized](images\step-4-11.png "floor-tile-4-END formalized")

12- Next duplicate *floor-tile-4-END* and give it a translation of (-2 0 -6)

![floor-tile-4-END duplicated](images\step-4-12.png "floor-tile-4-END duplicated")

13- Under Physics Subsystem on the **Form Details** window, edit the mode of all the tiles on the left to 2. (The way the tiles are coded is that their modes dictate whether they will register collisions from *player-1* or *player-2*. Thus the tiles on the left will be for player-2.)

![changing tile mode](images\step-4-13.png "changing tile mode")

14- Click Play (the button on the top right) and you will see both *player-1* and *player-2* spawn.

![main-brain play button](images\step-4-14.png "main-brain play button")

![player-1 and player-2 formalized](images\step-4-14-2.png "player-1 and player-2 formalized")

15- *player-1* is controlled by using the arrow keys while *player-2* can be controlled by using WASD keys. Move *player-1* and *player-2* onto the green *floor-tile-1-START* tile. Upon collision with the *floor-tile-1-START* tile, the timer will start counting.

![player-1 and player-2 on start tile](images\step-4-15.png "player-1 and player-2 on start tile")

16- Now move *player-1* and *player-2* to the *floor-tile-2-END* tiles. You will see firstly, the time counter will stop counting. Secondly, there will be a High Score listed on the High Score window. And lastly, you will see the two *floor-tile-3-DESTROYABLE* tiles slowly disappear.

![level working](images\step-4-16.png "level working")

17-  Now click reset to reset the player’s positions, the tiles, the time and the high score.

Great! Now that we know what all the pieces do, you can start making the level!

### Step 5- Making your level

With the basic pieces in place, you can manipulate and duplicate these pieces to create your very own level! Unleash your creativity and go wild! Below you will see how we have decided to design our level. The way it is to be played is for one player to control both *player-1* and *player-2* and try to get them from the start tiles to the end tiles in the shortest amount of time possible.

![level working](images\step-5.png "level working")