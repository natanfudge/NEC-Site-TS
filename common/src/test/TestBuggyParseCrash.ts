export const TestBuggyParseCrash = `---- Minecraft Crash Report ----
// Why did you do that?

Time: 10/3/21 12:22 PM
Description: Colliding entity with block

java.lang.NullPointerException: Colliding entity with block
\tat mrp_v2.versatileportals.block.PortalBlock.func_196262_a(PortalBlock.java:104) ~[?:1.16.5-3.2.0.1-forge] {re:classloading}
\tat net.minecraft.block.AbstractBlock$AbstractBlockState.func_196950_a(AbstractBlock.java:628) ~[?:?] {re:mixin,re:classloading,pl:mixin:APP:libx.mixins.json:MixinAbstractBlockState,pl:mixin:APP:losttrinkets.mixins.json:AbstractBlockStateMixin,pl:mixin:APP:kubejs-common.mixins.json:BlockStateBaseMixin,pl:mixin:APP:ferritecore.blockstatecache.mixin.json:AbstractBlockStateMixin,pl:mixin:A}
\tat net.minecraft.entity.Entity.func_145775_I(Entity.java:845) ~[?:?] {re:mixin,pl:accesstransformer:B,re:classloading,pl:accesstransformer:B,xf:fml:astralsorcery:add_custom_entity_collision,pl:mixin:APP:abnormals_core.mixins.json:EntityMixin,pl:mixin:APP:artifacts.mixins.json:item.aquadashers.EntityMixin,pl:mixin:APP:artifacts.mixins.json:item.umbrella.EntityMixin,pl:mixin:APP:quark.mixins.json:EntityMixin,pl:mixin:APP:kubejs-common.mixins.json:EntityMixin,pl:mixin:APP:expandability.mixins.json:fluidcollision.EntityMixin,pl:mixin:APP:expandability.mixins.json:swimming.EntityMixin,pl:mixin:APP:notenoughcrashes.mixins.json:MixinEntity,pl:mixin:A}
\tat net.minecraft.entity.Entity.func_213315_a(Entity.java:597) ~[?:?] {re:mixin,pl:accesstransformer:B,re:classloading,pl:accesstransformer:B,xf:fml:astralsorcery:add_custom_entity_collision,pl:mixin:APP:abnormals_core.mixins.json:EntityMixin,pl:mixin:APP:artifacts.mixins.json:item.aquadashers.EntityMixin,pl:mixin:APP:artifacts.mixins.json:item.umbrella.EntityMixin,pl:mixin:APP:quark.mixins.json:EntityMixin,pl:mixin:APP:kubejs-common.mixins.json:EntityMixin,pl:mixin:APP:expandability.mixins.json:fluidcollision.EntityMixin,pl:mixin:APP:expandability.mixins.json:swimming.EntityMixin,pl:mixin:APP:notenoughcrashes.mixins.json:MixinEntity,pl:mixin:A}
\tat net.minecraft.client.entity.player.ClientPlayerEntity.func_213315_a(ClientPlayerEntity.java:813) ~[?:?] {re:mixin,pl:accesstransformer:B,pl:runtimedistcleaner:A,re:classloading,pl:accesstransformer:B,pl:mixin:APP:expandability.mixins.json:swimming.client.LocalPlayerMixin,pl:mixin:A,pl:runtimedistcleaner:A}
\tat net.minecraft.entity.LivingEntity.func_233633_a_(LivingEntity.java:2053) ~[?:?] {re:mixin,pl:accesstransformer:B,re:classloading,pl:accesstransformer:B,xf:fml:astralsorcery:set_player_field,xf:fml:placebo:placeboshieldblock,xf:fml:astralsorcery:water_movement_slowdown_prevention,pl:mixin:APP:supplementaries.mixins.json:LivingEntityMixin,pl:mixin:APP:kubejs-common.mixins.json:LivingEntityMixin,pl:mixin:APP:expandability.mixins.json:swimming.LivingEntityMixin,pl:mixin:A}
\tat net.minecraft.entity.LivingEntity.func_213352_e(LivingEntity.java:2014) ~[?:?] {re:mixin,pl:accesstransformer:B,re:classloading,pl:accesstransformer:B,xf:fml:astralsorcery:set_player_field,xf:fml:placebo:placeboshieldblock,xf:fml:astralsorcery:water_movement_slowdown_prevention,pl:mixin:APP:supplementaries.mixins.json:LivingEntityMixin,pl:mixin:APP:kubejs-common.mixins.json:LivingEntityMixin,pl:mixin:APP:expandability.mixins.json:swimming.LivingEntityMixin,pl:mixin:A}
\tat net.minecraft.entity.player.PlayerEntity.func_213352_e(PlayerEntity.java:1368) ~[?:?] {re:mixin,pl:accesstransformer:B,re:computing_frames,pl:accesstransformer:B,re:classloading,pl:accesstransformer:B,pl:mixin:APP:losttrinkets.mixins.json:PlayerEntityMixin,pl:mixin:APP:kubejs-common.mixins.json:PlayerMixin,pl:mixin:APP:expandability.mixins.json:swimming.PlayerMixin,pl:mixin:A}
\tat net.minecraft.entity.LivingEntity.func_70636_d(LivingEntity.java:2449) ~[?:?] {re:mixin,pl:accesstransformer:B,re:classloading,pl:accesstransformer:B,xf:fml:astralsorcery:set_player_field,xf:fml:placebo:placeboshieldblock,xf:fml:astralsorcery:water_movement_slowdown_prevention,pl:mixin:APP:supplementaries.mixins.json:LivingEntityMixin,pl:mixin:APP:kubejs-common.mixins.json:LivingEntityMixin,pl:mixin:APP:expandability.mixins.json:swimming.LivingEntityMixin,pl:mixin:A}
\tat net.minecraft.entity.player.PlayerEntity.func_70636_d(PlayerEntity.java:489) ~[?:?] {re:mixin,pl:accesstransformer:B,re:computing_frames,pl:accesstransformer:B,re:classloading,pl:accesstransformer:B,pl:mixin:APP:losttrinkets.mixins.json:PlayerEntityMixin,pl:mixin:APP:kubejs-common.mixins.json:PlayerMixin,pl:mixin:APP:expandability.mixins.json:swimming.PlayerMixin,pl:mixin:A}
\tat net.minecraft.client.entity.player.ClientPlayerEntity.func_70636_d(ClientPlayerEntity.java:738) ~[?:?] {re:mixin,pl:accesstransformer:B,pl:runtimedistcleaner:A,re:classloading,pl:accesstransformer:B,pl:mixin:APP:expandability.mixins.json:swimming.client.LocalPlayerMixin,pl:mixin:A,pl:runtimedistcleaner:A}
\tat net.minecraft.entity.LivingEntity.func_70071_h_(LivingEntity.java:2158) ~[?:?] {re:mixin,pl:accesstransformer:B,re:classloading,pl:accesstransformer:B,xf:fml:astralsorcery:set_player_field,xf:fml:placebo:placeboshieldblock,xf:fml:astralsorcery:water_movement_slowdown_prevention,pl:mixin:APP:supplementaries.mixins.json:LivingEntityMixin,pl:mixin:APP:kubejs-common.mixins.json:LivingEntityMixin,pl:mixin:APP:expandability.mixins.json:swimming.LivingEntityMixin,pl:mixin:A}
\tat net.minecraft.entity.player.PlayerEntity.func_70071_h_(PlayerEntity.java:223) ~[?:?] {re:mixin,pl:accesstransformer:B,re:computing_frames,pl:accesstransformer:B,re:classloading,pl:accesstransformer:B,pl:mixin:APP:losttrinkets.mixins.json:PlayerEntityMixin,pl:mixin:APP:kubejs-common.mixins.json:PlayerMixin,pl:mixin:APP:expandability.mixins.json:swimming.PlayerMixin,pl:mixin:A}
\tat net.minecraft.client.entity.player.ClientPlayerEntity.func_70071_h_(ClientPlayerEntity.java:177) ~[?:?] {re:mixin,pl:accesstransformer:B,pl:runtimedistcleaner:A,re:classloading,pl:accesstransformer:B,pl:mixin:APP:expandability.mixins.json:swimming.client.LocalPlayerMixin,pl:mixin:A,pl:runtimedistcleaner:A}
\tat net.minecraft.client.world.ClientWorld.func_217418_a(ClientWorld.java:192) ~[?:?] {re:mixin,pl:runtimedistcleaner:A,re:classloading,xf:fml:astralsorcery:sun_brightness_client,pl:mixin:APP:abnormals_core.mixins.json:client.ClientWorldMixin,pl:mixin:APP:architectury.mixins.json:MixinClientLevel,pl:mixin:A,pl:runtimedistcleaner:A}
\tat net.minecraft.client.world.ClientWorld$$Lambda$15413/1616091430.accept(Unknown Source) ~[?:?] {}
\tat net.minecraft.world.World.func_217390_a(World.java:554) ~[?:?] {re:mixin,pl:accesstransformer:B,re:classloading,pl:accesstransformer:B,xf:fml:observerlib:coremodmethod,xf:fml:astralsorcery:sun_brightness_server,pl:mixin:APP:kubejs-common.mixins.json:LevelMixin,pl:mixin:A}
\tat net.minecraft.client.world.ClientWorld.func_217419_d(ClientWorld.java:161) ~[?:?] {re:mixin,pl:runtimedistcleaner:A,re:classloading,xf:fml:astralsorcery:sun_brightness_client,pl:mixin:APP:abnormals_core.mixins.json:client.ClientWorldMixin,pl:mixin:APP:architectury.mixins.json:MixinClientLevel,pl:mixin:A,pl:runtimedistcleaner:A}
\tat net.minecraft.client.Minecraft.func_71407_l(Minecraft.java:1483) [?:?] {re:mixin,pl:accesstransformer:B,pl:runtimedistcleaner:A,re:classloading,pl:accesstransformer:B,pl:mixin:APP:notenoughcrashes.mixins.json:client.MixinMinecraftClient,pl:mixin:A,pl:runtimedistcleaner:A}
\tat net.minecraft.client.Minecraft.func_195542_b(Minecraft.java:953) [?:?] {re:mixin,pl:accesstransformer:B,pl:runtimedistcleaner:A,re:classloading,pl:accesstransformer:B,pl:mixin:APP:notenoughcrashes.mixins.json:client.MixinMinecraftClient,pl:mixin:A,pl:runtimedistcleaner:A}
\tat net.minecraft.client.Minecraft.func_99999_d(Minecraft.java:607) [?:?] {re:mixin,pl:accesstransformer:B,pl:runtimedistcleaner:A,re:classloading,pl:accesstransformer:B,pl:mixin:APP:notenoughcrashes.mixins.json:client.MixinMinecraftClient,pl:mixin:A,pl:runtimedistcleaner:A}
\tat net.minecraft.client.Minecraft.handler$zzh000$afterCrashHandled(Minecraft.java:2540) [?:?] {re:mixin,pl:accesstransformer:B,pl:runtimedistcleaner:A,re:classloading,pl:accesstransformer:B,pl:mixin:APP:notenoughcrashes.mixins.json:client.MixinMinecraftClient,pl:mixin:A,pl:runtimedistcleaner:A}
\tat net.minecraft.client.Minecraft.func_99999_d(Minecraft.java:623) [?:?] {re:mixin,pl:accesstransformer:B,pl:runtimedistcleaner:A,re:classloading,pl:accesstransformer:B,pl:mixin:APP:notenoughcrashes.mixins.json:client.MixinMinecraftClient,pl:mixin:A,pl:runtimedistcleaner:A}
\tat net.minecraft.client.main.Main.main(Main.java:184) [?:?] {re:classloading,re:mixin,pl:runtimedistcleaner:A,pl:mixin:A,pl:runtimedistcleaner:A}
\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method) ~[?:1.8.0_51] {}
\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62) ~[?:1.8.0_51] {}
\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43) ~[?:1.8.0_51] {}
\tat java.lang.reflect.Method.invoke(Method.java:497) ~[?:1.8.0_51] {}
\tat net.minecraftforge.fml.loading.FMLClientLaunchProvider.lambda$launchService$0(FMLClientLaunchProvider.java:51) [forge-1.16.5-36.2.4.jar:36.2] {}
\tat net.minecraftforge.fml.loading.FMLClientLaunchProvider$$Lambda$477/53301881.call(Unknown Source) [forge-1.16.5-36.2.4.jar:36.2] {}
\tat cpw.mods.modlauncher.LaunchServiceHandlerDecorator.launch(LaunchServiceHandlerDecorator.java:37) [modlauncher-8.0.9.jar:?] {re:classloading}
\tat cpw.mods.modlauncher.LaunchServiceHandler.launch(LaunchServiceHandler.java:54) [modlauncher-8.0.9.jar:?] {re:classloading}
\tat cpw.mods.modlauncher.LaunchServiceHandler.launch(LaunchServiceHandler.java:72) [modlauncher-8.0.9.jar:?] {re:classloading}
\tat cpw.mods.modlauncher.Launcher.run(Launcher.java:82) [modlauncher-8.0.9.jar:?] {re:classloading}
\tat cpw.mods.modlauncher.Launcher.main(Launcher.java:66) [modlauncher-8.0.9.jar:?] {re:classloading}


A detailed walkthrough of the error, its code path and all known details is as follows:
---------------------------------------------------------------------------------------

-- Block being collided with --
Details:
\tBlock: Block{versatileportals:portal}[axis=z]
\tBlock location: World: (9,67,2), Chunk: (at 9,4,2 in 0,0; contains blocks 0,0,0 to 15,255,15), Region: (0,0; contains chunks 0,0 to 31,31, blocks 0,0,0 to 511,255,511)
Stacktrace:
\tat net.minecraft.entity.Entity.func_145775_I(Entity.java:845) ~[?:?] {re:mixin,pl:accesstransformer:B,re:classloading,pl:accesstransformer:B,xf:fml:astralsorcery:add_custom_entity_collision,pl:mixin:APP:abnormals_core.mixins.json:EntityMixin,pl:mixin:APP:artifacts.mixins.json:item.aquadashers.EntityMixin,pl:mixin:APP:artifacts.mixins.json:item.umbrella.EntityMixin,pl:mixin:APP:quark.mixins.json:EntityMixin,pl:mixin:APP:kubejs-common.mixins.json:EntityMixin,pl:mixin:APP:expandability.mixins.json:fluidcollision.EntityMixin,pl:mixin:APP:expandability.mixins.json:swimming.EntityMixin,pl:mixin:APP:notenoughcrashes.mixins.json:MixinEntity,pl:mixin:A}

-- Entity being checked for collision --
Details:
\tEntity Type: minecraft:player (net.minecraft.client.entity.player.ClientPlayerEntity)
\tEntity ID: 31633
\tEntity Name: EMIL_9731
\tEntity's Exact location: 9.45, 67.00, 2.77
\tEntity's Block location: World: (9,67,2), Chunk: (at 9,4,2 in 0,0; contains blocks 0,0,0 to 15,255,15), Region: (0,0; contains chunks 0,0 to 31,31, blocks 0,0,0 to 511,255,511)
\tEntity's Momentum: 0.00, -0.00, 0.00
\tEntity's Passengers: []
\tEntity's Vehicle: ~~ERROR~~ NullPointerException: null
\tEntity NBT: {Brain:{memories:{}},HurtByTimestamp:0,SleepTimer:0s,ACTrackedData:[],Attributes:[{Base:0.0d,Name:"minecraft:generic.armor"},{Base:20.0d,Name:"minecraft:generic.max_health"},{Base:0.10000000149011612d,Name:"minecraft:generic.movement_speed"},{Base:1.0d,Name:"minecraft:generic.attack_damage"},{Base:0.08d,Name:"forge:entity_gravity"},{Base:1.0d,Name:"forge:swim_speed"},{Base:0.0d,Name:"minecraft:generic.armor_toughness"},{Base:4.0d,Name:"minecraft:generic.attack_speed"},{Base:5.0d,Name:"forge:reach_distance"}],Invulnerable:0b,FallFlying:0b,PortalCooldown:0,AbsorptionAmount:0.0f,abilities:{invulnerable:0b,mayfly:0b,instabuild:0b,walkSpeed:0.1f,mayBuild:1b,flying:0b,flySpeed:0.05f},FallDistance:0.0f,CanUpdate:1b,DeathTime:20s,XpSeed:0,ForgeCaps:{"artifacts:swim_handler":{IsWet:0b,ShouldSwim:0b,ShouldSink:0b,SwimTime:0},"occultism:double_jump":{jumps:0},"theoneprobe:properties":{gotNote:0b},"curios:inventory":{Locked:[],Curios:[{StacksHandler:{Renders:{Size:1,Renders:[{Render:1b,Slot:0}]},Visible:1b,Stacks:{Size:1,Items:[]},Cosmetics:{Size:1,Items:[]},HasCosmetic:0b,SizeShift:0},Identifier:"head"},{StacksHandler:{Renders:{Size:1,Renders:[{Render:1b,Slot:0}]},Visible:1b,Stacks:{Size:1,Items:[]},Cosmetics:{Size:1,Items:[]},HasCosmetic:0b,SizeShift:0},Identifier:"necklace"},{StacksHandler:{Renders:{Size:1,Renders:[{Render:1b,Slot:0}]},Visible:1b,Stacks:{Size:1,Items:[]},Cosmetics:{Size:1,Items:[]},HasCosmetic:0b,SizeShift:0},Identifier:"wallet"},{StacksHandler:{Renders:{Size:2,Renders:[{Render:1b,Slot:0},{Render:1b,Slot:1}]},Visible:1b,Stacks:{Size:2,Items:[]},Cosmetics:{Size:2,Items:[]},HasCosmetic:0b,SizeShift:0},Identifier:"hands"},{StacksHandler:{Renders:{Size:1,Renders:[{Render:1b,Slot:0}]},Visible:1b,Stacks:{Size:1,Items:[]},Cosmetics:{Size:1,Items:[]},HasCosmetic:0b,SizeShift:0},Identifier:"ring"},{StacksHandler:{Renders:{Size:1,Renders:[{Render:1b,Slot:0}]},Visible:1b,Stacks:{Size:1,Items:[]},Cosmetics:{Size:1,Items:[]},HasCosmetic:0b,SizeShift:0},Identifier:"belt"},{StacksHandler:{Renders:{Size:1,Renders:[{Render:1b,Slot:0}]},Visible:1b,Stacks:{Size:1,Items:[]},Cosmetics:{Size:1,Items:[]},HasCosmetic:0b,SizeShift:0},Identifier:"feet"}]},"versatileportals:portaldatacapability":{RemainingPortalCooldown:0,InPortalTime:0,IsInPortal:1b,PortalPos:[I;9,68,2]},"artifacts:entity_kill_tracker":[],"losttrinkets:player_data":{unlock_delay:0L,allow_flying:0b,was_flying:0b,trinkets:{slots:1,available_trinkets:[],slots_set:1b,active_trinkets:[{trinket:"losttrinkets:wither_nail"}]}},"occultism:familiar_settings":{deer_familiar:1b,cthulhu_familiar:1b,greedy_familiar:1b,otherworld_bird:1b,bat_familiar:1b,devil_familiar:1b},"solcarrot:food":{foodList:["minecraft:mushroom_stew","farmersdelight:nether_salad","minecraft:apple","kubejs:instant_health_stew","kubejs:apple"]},"tombstone:cap_tombstone":{alignment:0,perks:[],knowledge:11L}},XpTotal:689,UUID:[I;-882101820,1941523115,-1630038095,1809096925],Motion:[0.0d,0.0d,0.0d],Health:0.0f,foodSaturationLevel:6.2000003f,Air:300s,OnGround:1b,Rotation:[-26.59613f,15.872928f],XpLevel:22,Score:525,Pos:[9.448693509278526d,67.0d,2.770457220463383d],Fire:0s,XpP:0.13888814f,EnderItems:[],DataVersion:2586,foodLevel:20,foodExhaustionLevel:2.4580655f,HurtTime:0s,SelectedItemSlot:0,ActiveEffects:[{Ambient:0b,CurativeItems:[{id:"minecraft:milk_bucket",Count:1b}],ShowIcon:1b,ShowParticles:1b,Duration:5941,Id:46b,Amplifier:0b}],Inventory:[],foodTickTimer:0}
Stacktrace:
\tat net.minecraft.entity.Entity.func_213315_a(Entity.java:597) ~[?:?] {re:mixin,pl:accesstransformer:B,re:classloading,pl:accesstransformer:B,xf:fml:astralsorcery:add_custom_entity_collision,pl:mixin:APP:abnormals_core.mixins.json:EntityMixin,pl:mixin:APP:artifacts.mixins.json:item.aquadashers.EntityMixin,pl:mixin:APP:artifacts.mixins.json:item.umbrella.EntityMixin,pl:mixin:APP:quark.mixins.json:EntityMixin,pl:mixin:APP:kubejs-common.mixins.json:EntityMixin,pl:mixin:APP:expandability.mixins.json:fluidcollision.EntityMixin,pl:mixin:APP:expandability.mixins.json:swimming.EntityMixin,pl:mixin:APP:notenoughcrashes.mixins.json:MixinEntity,pl:mixin:A}
\tat net.minecraft.client.entity.player.ClientPlayerEntity.func_213315_a(ClientPlayerEntity.java:813) ~[?:?] {re:mixin,pl:accesstransformer:B,pl:runtimedistcleaner:A,re:classloading,pl:accesstransformer:B,pl:mixin:APP:expandability.mixins.json:swimming.client.LocalPlayerMixin,pl:mixin:A,pl:runtimedistcleaner:A}
\tat net.minecraft.entity.LivingEntity.func_233633_a_(LivingEntity.java:2053) ~[?:?] {re:mixin,pl:accesstransformer:B,re:classloading,pl:accesstransformer:B,xf:fml:astralsorcery:set_player_field,xf:fml:placebo:placeboshieldblock,xf:fml:astralsorcery:water_movement_slowdown_prevention,pl:mixin:APP:supplementaries.mixins.json:LivingEntityMixin,pl:mixin:APP:kubejs-common.mixins.json:LivingEntityMixin,pl:mixin:APP:expandability.mixins.json:swimming.LivingEntityMixin,pl:mixin:A}
\tat net.minecraft.entity.LivingEntity.func_213352_e(LivingEntity.java:2014) ~[?:?] {re:mixin,pl:accesstransformer:B,re:classloading,pl:accesstransformer:B,xf:fml:astralsorcery:set_player_field,xf:fml:placebo:placeboshieldblock,xf:fml:astralsorcery:water_movement_slowdown_prevention,pl:mixin:APP:supplementaries.mixins.json:LivingEntityMixin,pl:mixin:APP:kubejs-common.mixins.json:LivingEntityMixin,pl:mixin:APP:expandability.mixins.json:swimming.LivingEntityMixin,pl:mixin:A}
\tat net.minecraft.entity.player.PlayerEntity.func_213352_e(PlayerEntity.java:1368) ~[?:?] {re:mixin,pl:accesstransformer:B,re:computing_frames,pl:accesstransformer:B,re:classloading,pl:accesstransformer:B,pl:mixin:APP:losttrinkets.mixins.json:PlayerEntityMixin,pl:mixin:APP:kubejs-common.mixins.json:PlayerMixin,pl:mixin:APP:expandability.mixins.json:swimming.PlayerMixin,pl:mixin:A}
\tat net.minecraft.entity.LivingEntity.func_70636_d(LivingEntity.java:2449) ~[?:?] {re:mixin,pl:accesstransformer:B,re:classloading,pl:accesstransformer:B,xf:fml:astralsorcery:set_player_field,xf:fml:placebo:placeboshieldblock,xf:fml:astralsorcery:water_movement_slowdown_prevention,pl:mixin:APP:supplementaries.mixins.json:LivingEntityMixin,pl:mixin:APP:kubejs-common.mixins.json:LivingEntityMixin,pl:mixin:APP:expandability.mixins.json:swimming.LivingEntityMixin,pl:mixin:A}
\tat net.minecraft.entity.player.PlayerEntity.func_70636_d(PlayerEntity.java:489) ~[?:?] {re:mixin,pl:accesstransformer:B,re:computing_frames,pl:accesstransformer:B,re:classloading,pl:accesstransformer:B,pl:mixin:APP:losttrinkets.mixins.json:PlayerEntityMixin,pl:mixin:APP:kubejs-common.mixins.json:PlayerMixin,pl:mixin:APP:expandability.mixins.json:swimming.PlayerMixin,pl:mixin:A}
\tat net.minecraft.client.entity.player.ClientPlayerEntity.func_70636_d(ClientPlayerEntity.java:738) ~[?:?] {re:mixin,pl:accesstransformer:B,pl:runtimedistcleaner:A,re:classloading,pl:accesstransformer:B,pl:mixin:APP:expandability.mixins.json:swimming.client.LocalPlayerMixin,pl:mixin:A,pl:runtimedistcleaner:A}
\tat net.minecraft.entity.LivingEntity.func_70071_h_(LivingEntity.java:2158) ~[?:?] {re:mixin,pl:accesstransformer:B,re:classloading,pl:accesstransformer:B,xf:fml:astralsorcery:set_player_field,xf:fml:placebo:placeboshieldblock,xf:fml:astralsorcery:water_movement_slowdown_prevention,pl:mixin:APP:supplementaries.mixins.json:LivingEntityMixin,pl:mixin:APP:kubejs-common.mixins.json:LivingEntityMixin,pl:mixin:APP:expandability.mixins.json:swimming.LivingEntityMixin,pl:mixin:A}
\tat net.minecraft.entity.player.PlayerEntity.func_70071_h_(PlayerEntity.java:223) ~[?:?] {re:mixin,pl:accesstransformer:B,re:computing_frames,pl:accesstransformer:B,re:classloading,pl:accesstransformer:B,pl:mixin:APP:losttrinkets.mixins.json:PlayerEntityMixin,pl:mixin:APP:kubejs-common.mixins.json:PlayerMixin,pl:mixin:APP:expandability.mixins.json:swimming.PlayerMixin,pl:mixin:A}
\tat net.minecraft.client.entity.player.ClientPlayerEntity.func_70071_h_(ClientPlayerEntity.java:177) ~[?:?] {re:mixin,pl:accesstransformer:B,pl:runtimedistcleaner:A,re:classloading,pl:accesstransformer:B,pl:mixin:APP:expandability.mixins.json:swimming.client.LocalPlayerMixin,pl:mixin:A,pl:runtimedistcleaner:A}
\tat net.minecraft.client.world.ClientWorld.func_217418_a(ClientWorld.java:192) ~[?:?] {re:mixin,pl:runtimedistcleaner:A,re:classloading,xf:fml:astralsorcery:sun_brightness_client,pl:mixin:APP:abnormals_core.mixins.json:client.ClientWorldMixin,pl:mixin:APP:architectury.mixins.json:MixinClientLevel,pl:mixin:A,pl:runtimedistcleaner:A}
\tat net.minecraft.client.world.ClientWorld$$Lambda$15413/1616091430.accept(Unknown Source) ~[?:?] {}

-- Entity being ticked --
Details:
\tEntity Type: minecraft:player (net.minecraft.client.entity.player.ClientPlayerEntity)
\tEntity ID: 31633
\tEntity Name: EMIL_9731
\tEntity's Exact location: 9.45, 67.00, 2.77
\tEntity's Block location: World: (9,67,2), Chunk: (at 9,4,2 in 0,0; contains blocks 0,0,0 to 15,255,15), Region: (0,0; contains chunks 0,0 to 31,31, blocks 0,0,0 to 511,255,511)
\tEntity's Momentum: 0.00, -0.00, 0.00
\tEntity's Passengers: []
\tEntity's Vehicle: ~~ERROR~~ NullPointerException: null
\tEntity NBT: {Brain:{memories:{}},HurtByTimestamp:0,SleepTimer:0s,ACTrackedData:[],Attributes:[{Base:0.0d,Name:"minecraft:generic.armor"},{Base:20.0d,Name:"minecraft:generic.max_health"},{Base:0.10000000149011612d,Name:"minecraft:generic.movement_speed"},{Base:1.0d,Name:"minecraft:generic.attack_damage"},{Base:0.08d,Name:"forge:entity_gravity"},{Base:1.0d,Name:"forge:swim_speed"},{Base:0.0d,Name:"minecraft:generic.armor_toughness"},{Base:4.0d,Name:"minecraft:generic.attack_speed"},{Base:5.0d,Name:"forge:reach_distance"}],Invulnerable:0b,FallFlying:0b,PortalCooldown:0,AbsorptionAmount:0.0f,abilities:{invulnerable:0b,mayfly:0b,instabuild:0b,walkSpeed:0.1f,mayBuild:1b,flying:0b,flySpeed:0.05f},FallDistance:0.0f,CanUpdate:1b,DeathTime:20s,XpSeed:0,ForgeCaps:{"artifacts:swim_handler":{IsWet:0b,ShouldSwim:0b,ShouldSink:0b,SwimTime:0},"occultism:double_jump":{jumps:0},"theoneprobe:properties":{gotNote:0b},"curios:inventory":{Locked:[],Curios:[{StacksHandler:{Renders:{Size:1,Renders:[{Render:1b,Slot:0}]},Visible:1b,Stacks:{Size:1,Items:[]},Cosmetics:{Size:1,Items:[]},HasCosmetic:0b,SizeShift:0},Identifier:"head"},{StacksHandler:{Renders:{Size:1,Renders:[{Render:1b,Slot:0}]},Visible:1b,Stacks:{Size:1,Items:[]},Cosmetics:{Size:1,Items:[]},HasCosmetic:0b,SizeShift:0},Identifier:"necklace"},{StacksHandler:{Renders:{Size:1,Renders:[{Render:1b,Slot:0}]},Visible:1b,Stacks:{Size:1,Items:[]},Cosmetics:{Size:1,Items:[]},HasCosmetic:0b,SizeShift:0},Identifier:"wallet"},{StacksHandler:{Renders:{Size:2,Renders:[{Render:1b,Slot:0},{Render:1b,Slot:1}]},Visible:1b,Stacks:{Size:2,Items:[]},Cosmetics:{Size:2,Items:[]},HasCosmetic:0b,SizeShift:0},Identifier:"hands"},{StacksHandler:{Renders:{Size:1,Renders:[{Render:1b,Slot:0}]},Visible:1b,Stacks:{Size:1,Items:[]},Cosmetics:{Size:1,Items:[]},HasCosmetic:0b,SizeShift:0},Identifier:"ring"},{StacksHandler:{Renders:{Size:1,Renders:[{Render:1b,Slot:0}]},Visible:1b,Stacks:{Size:1,Items:[]},Cosmetics:{Size:1,Items:[]},HasCosmetic:0b,SizeShift:0},Identifier:"belt"},{StacksHandler:{Renders:{Size:1,Renders:[{Render:1b,Slot:0}]},Visible:1b,Stacks:{Size:1,Items:[]},Cosmetics:{Size:1,Items:[]},HasCosmetic:0b,SizeShift:0},Identifier:"feet"}]},"versatileportals:portaldatacapability":{RemainingPortalCooldown:0,InPortalTime:0,IsInPortal:1b,PortalPos:[I;9,68,2]},"artifacts:entity_kill_tracker":[],"losttrinkets:player_data":{unlock_delay:0L,allow_flying:0b,was_flying:0b,trinkets:{slots:1,available_trinkets:[],slots_set:1b,active_trinkets:[{trinket:"losttrinkets:wither_nail"}]}},"occultism:familiar_settings":{deer_familiar:1b,cthulhu_familiar:1b,greedy_familiar:1b,otherworld_bird:1b,bat_familiar:1b,devil_familiar:1b},"solcarrot:food":{foodList:["minecraft:mushroom_stew","farmersdelight:nether_salad","minecraft:apple","kubejs:instant_health_stew","kubejs:apple"]},"tombstone:cap_tombstone":{alignment:0,perks:[],knowledge:11L}},XpTotal:689,UUID:[I;-882101820,1941523115,-1630038095,1809096925],Motion:[0.0d,0.0d,0.0d],Health:0.0f,foodSaturationLevel:6.2000003f,Air:300s,OnGround:1b,Rotation:[-26.59613f,15.872928f],XpLevel:22,Score:525,Pos:[9.448693509278526d,67.0d,2.770457220463383d],Fire:0s,XpP:0.13888814f,EnderItems:[],DataVersion:2586,foodLevel:20,foodExhaustionLevel:2.4580655f,HurtTime:0s,SelectedItemSlot:0,ActiveEffects:[{Ambient:0b,CurativeItems:[{id:"minecraft:milk_bucket",Count:1b}],ShowIcon:1b,ShowParticles:1b,Duration:5941,Id:46b,Amplifier:0b}],Inventory:[],foodTickTimer:0}
-- Affected level --
Details:
\tAll players: 1 total; [ClientPlayerEntity['EMIL_9731'/31633, l='ClientLevel', x=9.45, y=67.00, z=2.77]]
\tChunk stats: Client Chunk Cache: 841, 529
\tLevel dimension: minecraft:the_nether
\tLevel spawn location: World: (0,64,0), Chunk: (at 0,4,0 in 0,0; contains blocks 0,0,0 to 15,255,15), Region: (0,0; contains chunks 0,0 to 31,31, blocks 0,0,0 to 511,255,511)
\tLevel time: 232001 game time, 232001 day time
\tServer brand: forge
\tServer type: Integrated singleplayer server
Stacktrace:
\tat net.minecraft.client.world.ClientWorld.func_72914_a(ClientWorld.java:447) ~[?:?] {re:mixin,pl:runtimedistcleaner:A,re:classloading,xf:fml:astralsorcery:sun_brightness_client,pl:mixin:APP:abnormals_core.mixins.json:client.ClientWorldMixin,pl:mixin:APP:architectury.mixins.json:MixinClientLevel,pl:mixin:A,pl:runtimedistcleaner:A}
\tat net.minecraft.client.Minecraft.func_71396_d(Minecraft.java:2029) [?:?] {re:mixin,pl:accesstransformer:B,pl:runtimedistcleaner:A,re:classloading,pl:accesstransformer:B,pl:mixin:APP:notenoughcrashes.mixins.json:client.MixinMinecraftClient,pl:mixin:A,pl:runtimedistcleaner:A}
\tat fudge.notenoughcrashes.mixinhandlers.InGameCatcher.handleClientCrash(InGameCatcher.java:28) ~[?:?] {re:mixin,re:classloading}
\tat net.minecraft.client.Minecraft.modify$zzh000$onCrash(Minecraft.java:2548) [?:?] {re:mixin,pl:accesstransformer:B,pl:runtimedistcleaner:A,re:classloading,pl:accesstransformer:B,pl:mixin:APP:notenoughcrashes.mixins.json:client.MixinMinecraftClient,pl:mixin:A,pl:runtimedistcleaner:A}
\tat net.minecraft.client.Minecraft.func_99999_d(Minecraft.java:623) [?:?] {re:mixin,pl:accesstransformer:B,pl:runtimedistcleaner:A,re:classloading,pl:accesstransformer:B,pl:mixin:APP:notenoughcrashes.mixins.json:client.MixinMinecraftClient,pl:mixin:A,pl:runtimedistcleaner:A}
\tat net.minecraft.client.Minecraft.handler$zzh000$afterCrashHandled(Minecraft.java:2540) [?:?] {re:mixin,pl:accesstransformer:B,pl:runtimedistcleaner:A,re:classloading,pl:accesstransformer:B,pl:mixin:APP:notenoughcrashes.mixins.json:client.MixinMinecraftClient,pl:mixin:A,pl:runtimedistcleaner:A}
\tat net.minecraft.client.Minecraft.func_99999_d(Minecraft.java:623) [?:?] {re:mixin,pl:accesstransformer:B,pl:runtimedistcleaner:A,re:classloading,pl:accesstransformer:B,pl:mixin:APP:notenoughcrashes.mixins.json:client.MixinMinecraftClient,pl:mixin:A,pl:runtimedistcleaner:A}
\tat net.minecraft.client.main.Main.main(Main.java:184) [?:?] {re:classloading,re:mixin,pl:runtimedistcleaner:A,pl:mixin:A,pl:runtimedistcleaner:A}
\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method) ~[?:1.8.0_51] {}
\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62) ~[?:1.8.0_51] {}
\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43) ~[?:1.8.0_51] {}
\tat java.lang.reflect.Method.invoke(Method.java:497) ~[?:1.8.0_51] {}
\tat net.minecraftforge.fml.loading.FMLClientLaunchProvider.lambda$launchService$0(FMLClientLaunchProvider.java:51) [forge-1.16.5-36.2.4.jar:36.2] {}
\tat net.minecraftforge.fml.loading.FMLClientLaunchProvider$$Lambda$477/53301881.call(Unknown Source) [forge-1.16.5-36.2.4.jar:36.2] {}
\tat cpw.mods.modlauncher.LaunchServiceHandlerDecorator.launch(LaunchServiceHandlerDecorator.java:37) [modlauncher-8.0.9.jar:?] {re:classloading}
\tat cpw.mods.modlauncher.LaunchServiceHandler.launch(LaunchServiceHandler.java:54) [modlauncher-8.0.9.jar:?] {re:classloading}
\tat cpw.mods.modlauncher.LaunchServiceHandler.launch(LaunchServiceHandler.java:72) [modlauncher-8.0.9.jar:?] {re:classloading}
\tat cpw.mods.modlauncher.Launcher.run(Launcher.java:82) [modlauncher-8.0.9.jar:?] {re:classloading}
\tat cpw.mods.modlauncher.Launcher.main(Launcher.java:66) [modlauncher-8.0.9.jar:?] {re:classloading}

-- System Details --
Details:
\tMinecraft Version: 1.16.5
\tMinecraft Version ID: 1.16.5
\tOperating System: Windows 10 (amd64) version 10.0
\tJava Version: 1.8.0_51, Oracle Corporation
\tJava VM Version: Java HotSpot(TM) 64-Bit Server VM (mixed mode), Oracle Corporation
\tMemory: 2775568056 bytes (2646 MB) / 4661968896 bytes (4446 MB) up to 7635730432 bytes (7282 MB)
\tCPUs: 4
\tJVM Flags: 5 total; -XX:HeapDumpPath=MojangTricksIntelDriversForPerformance_javaw.exe_minecraft.exe.heapdump -Xss1M -Xmx8192m -Xms256m -XX:PermSize=256m
\tModLauncher: 8.0.9+86+master.3cf110c
\tModLauncher launch target: fmlclient
\tModLauncher naming: srg
\tModLauncher services: 
\t\t/mixin-0.8.2.jar mixin PLUGINSERVICE 
\t\t/eventbus-4.0.0.jar eventbus PLUGINSERVICE 
\t\t/forge-1.16.5-36.2.4.jar object_holder_definalize PLUGINSERVICE 
\t\t/forge-1.16.5-36.2.4.jar runtime_enum_extender PLUGINSERVICE 
\t\t/accesstransformers-3.0.1.jar accesstransformer PLUGINSERVICE 
\t\t/forge-1.16.5-36.2.4.jar capability_inject_definalize PLUGINSERVICE 
\t\t/forge-1.16.5-36.2.4.jar runtimedistcleaner PLUGINSERVICE 
\t\t/mixin-0.8.2.jar mixin TRANSFORMATIONSERVICE 
\t\t/forge-1.16.5-36.2.4.jar fml TRANSFORMATIONSERVICE 
\tFML: 36.2
\tForge: net.minecraftforge:36.2.4
\tFML Language Providers: 
\t\tjavafml@36.2
\t\tminecraft@1
\tMod List: 
\t\tCyclopsCore-1.16.5-1.11.9.jar                     |Cyclops Core                  |cyclopscore                   |1.11.9              |DONE      |Manifest: NOSIGNATURE
\t\tQuarkOddities-1.16.3.jar                          |Quark Oddities                |quarkoddities                 |1.16.3              |DONE      |Manifest: NOSIGNATURE
\t\tnotenoughcrashes-3.2.0-forge.jar                  |Not Enough Crashes            |notenoughcrashes              |3.2.0               |DONE      |Manifest: NOSIGNATURE
\t\tastralsorcery-1.16-1.16.5-1.13.12.jar             |Astral Sorcery                |astralsorcery                 |1.16.5-1.13.12      |DONE      |Manifest: 45:2b:0a:49:6b:65:3b:39:a9:dd:d2:5b:55:7f:82:47:a5:1d:7a:cc:7f:a8:69:73:72:53:6f:57:4d:b2:1a:b7
\t\tCucumber-1.16.4-4.1.10.jar                        |Cucumber Library              |cucumber                      |4.1.10              |DONE      |Manifest: NOSIGNATURE
\t\tjmi-1.16.5-0.2-18.jar                             |JourneyMap Integration        |jmi                           |1.16.5-0.2-18       |DONE      |Manifest: NOSIGNATURE
\t\tCalemiUtils-1.16.5-1.1.3.jar                      |Calemi's Utils                |calemiutils                   |1.1.3               |DONE      |Manifest: NOSIGNATURE
\t\txlpackets-1.1.jar                                 |XL Packets                    |xlpackets                     |1.1                 |DONE      |Manifest: NOSIGNATURE
\t\tjei-1.16.5-7.7.1.118.jar                          |Just Enough Items             |jei                           |7.7.1.118           |DONE      |Manifest: NOSIGNATURE
\t\tcustommachinery-1.16.5-0.5.0.jar                  |Custom Machinery              |custommachinery               |1.16.5-0.5.0        |DONE      |Manifest: NOSIGNATURE
\t\tabnormals_core-1.16.5-3.3.0.jar                   |Abnormals Core                |abnormals_core                |3.3.0               |DONE      |Manifest: NOSIGNATURE
\t\tUppers-0.3.2.jar                                  |Uppers                        |uppers                        |0.3.2               |DONE      |Manifest: NOSIGNATURE
\t\twoodenhopper-1.16.5-1.2.0.0.jar                   |Wooden Hopper                 |woodenhopper                  |1.16.5-1.2.0.0      |DONE      |Manifest: NOSIGNATURE
\t\tmodnametooltip_1.16.2-1.15.0.jar                  |Mod Name Tooltip              |modnametooltip                |1.15.0              |DONE      |Manifest: NOSIGNATURE
\t\tinvtweaks-1.16.4-1.0.1.jar                        |Inventory Tweaks Renewed      |invtweaks                     |1.16.4-1.0.1        |DONE      |Manifest: NOSIGNATURE
\t\tgoldenhopper-1.2.1-1.16.3.jar                     |Golden Hopper                 |goldenhopper                  |1.2.1               |DONE      |Manifest: NOSIGNATURE
\t\tClumps-6.0.0.25.jar                               |Clumps                        |clumps                        |6.0.0.25            |DONE      |Manifest: NOSIGNATURE
\t\tshutupexperimentalsettings-1.0.3.jar              |Shutup Experimental Settings! |shutupexperimentalsettings    |1.0.3               |DONE      |Manifest: NOSIGNATURE
\t\tjourneymap-1.16.5-5.7.3.jar                       |Journeymap                    |journeymap                    |5.7.3               |DONE      |Manifest: NOSIGNATURE
\t\tCTM-MC1.16.1-1.1.2.6.jar                          |ConnectedTexturesMod          |ctm                           |MC1.16.1-1.1.2.6    |DONE      |Manifest: NOSIGNATURE
\t\tControlling-7.0.0.24.jar                          |Controlling                   |controlling                   |7.0.0.24            |DONE      |Manifest: NOSIGNATURE
\t\tPlacebo-1.16.5-4.6.0.jar                          |Placebo                       |placebo                       |4.6.0               |DONE      |Manifest: NOSIGNATURE
\t\tArtifacts-1.16.5-2.10.0.jar                       |Artifacts                     |artifacts                     |1.16.5-2.10.0       |DONE      |Manifest: NOSIGNATURE
\t\tframedcompactdrawers-1.16-2.2.0.jar               |Framed Compacting Drawers     |framedcompactdrawers          |1.16-2.2.0          |DONE      |Manifest: NOSIGNATURE
\t\tLibX-1.16.3-1.0.76.jar                            |LibX                          |libx                          |1.16.3-1.0.76       |DONE      |Manifest: NOSIGNATURE
\t\tBookshelf-Forge-1.16.5-10.2.27.jar                |Bookshelf                     |bookshelf                     |10.2.27             |DONE      |Manifest: eb:c4:b1:67:8b:f9:0c:db:dc:4f:01:b1:8e:61:64:39:4c:10:85:0b:a6:c4:c7:48:f0:fa:95:f2:cb:08:3a:e5
\t\tTips-1.16.5-4.0.7.jar                             |Tips                          |tips                          |4.0.7               |DONE      |Manifest: eb:c4:b1:67:8b:f9:0c:db:dc:4f:01:b1:8e:61:64:39:4c:10:85:0b:a6:c4:c7:48:f0:fa:95:f2:cb:08:3a:e5
\t\tBotanyPots-1.16.5-7.1.23.jar                      |BotanyPots                    |botanypots                    |7.1.23              |DONE      |Manifest: eb:c4:b1:67:8b:f9:0c:db:dc:4f:01:b1:8e:61:64:39:4c:10:85:0b:a6:c4:c7:48:f0:fa:95:f2:cb:08:3a:e5
\t\tu_team_core-1.16.5-3.2.1.196.jar                  |U Team Core                   |uteamcore                     |3.2.1.196           |DONE      |Manifest: f4:a6:0b:ee:cb:8a:1a:ea:9f:9d:45:91:8f:8b:b3:ae:26:f3:bf:05:86:1d:90:9e:f6:32:2a:1a:ed:1d:ce:b0
\t\tForgivingVoid_1.16.5-5.2.1.jar                    |Forgiving Void                |forgivingvoid                 |5.2.1               |DONE      |Manifest: NOSIGNATURE
\t\tTwerkItMeal-1.3.9.jar                             |TwerkItMeal                   |twerkitmeal                   |1.3.9               |DONE      |Manifest: NOSIGNATURE
\t\tToast-Control-1.16.4-4.3.1.jar                    |Toast Control                 |toastcontrol                  |4.3.1               |DONE      |Manifest: NOSIGNATURE
\t\tforge-1.16.5-36.2.4-universal.jar                 |Forge                         |forge                         |36.2.4              |DONE      |Manifest: 22:af:21:d8:19:82:7f:93:94:fe:2b:ac:b7:e4:41:57:68:39:87:b1:a7:5c:c6:44:f9:25:74:21:14:f5:0d:90
\t\tLostTrinkets-1.16.5-0.1.27.jar                    |Lost Trinkets                 |losttrinkets                  |0.1.27              |DONE      |Manifest: NOSIGNATURE
\t\tBloodMagic-1.16.4-3.1.1-16.jar                    |Blood Magic                   |bloodmagic                    |1.16.4-3.1.1-16     |DONE      |Manifest: NOSIGNATURE
\t\tsupplementaries-1.16.5-0.16.1.jar                 |Supplementaries               |supplementaries               |1.16.5-0.16.0       |DONE      |Manifest: NOSIGNATURE
\t\tcobblegenrandomizer-1.16-5.1.2.jar                |CobbleGenRandomizer           |cobblegenrandomizer           |1.16-5.1.2          |DONE      |Manifest: NOSIGNATURE
\t\tselene-1.16.5-1.7.jar                             |Selene                        |selene                        |1.16.5-1.0          |DONE      |Manifest: NOSIGNATURE
\t\tCraftingTweaks_1.16.5-12.2.1.jar                  |Crafting Tweaks               |craftingtweaks                |12.2.1              |DONE      |Manifest: NOSIGNATURE
\t\tforge-1.16.5-36.2.4-client.jar                    |Minecraft                     |minecraft                     |1.16.5              |DONE      |Manifest: NOSIGNATURE
\t\tTConstruct-1.16.5-3.1.0.231.jar                   |Tinkers' Construct            |tconstruct                    |3.1.0.231           |DONE      |Manifest: NOSIGNATURE
\t\tFarmersDelight-1.16.5-0.4.2.jar                   |Farmer's Delight              |farmersdelight                |1.16.5-0.4.2        |DONE      |Manifest: NOSIGNATURE
\t\ttorchmaster-2.3.8.jar                             |Torchmaster                   |torchmaster                   |2.3.8               |DONE      |Manifest: NOSIGNATURE
\t\ttheoneprobe-1.16-3.1.4.jar                        |The One Probe                 |theoneprobe                   |1.16-3.1.4          |DONE      |Manifest: NOSIGNATURE
\t\tItemPhysicLite_v1.4.8_mc1.16.5.jar                |ItemPhysic Lite               |itemphysiclite                |1.4.0               |DONE      |Manifest: NOSIGNATURE
\t\tMouseTweaks-2.14-mc1.16.2.jar                     |Mouse Tweaks                  |mousetweaks                   |2.14                |DONE      |Manifest: NOSIGNATURE
\t\tcrashutilities-3.12.jar                           |Crash Utilities               |crashutilities                |3.12                |DONE      |Manifest: NOSIGNATURE
\t\tPsi 1.16-95.jar                                   |Psi                           |psi                           |1.16-95             |DONE      |Manifest: NOSIGNATURE
\t\tBotanyTrees-1.16.5-3.0.6.jar                      |BotanyTrees                   |botanytrees                   |3.0.6               |DONE      |Manifest: eb:c4:b1:67:8b:f9:0c:db:dc:4f:01:b1:8e:61:64:39:4c:10:85:0b:a6:c4:c7:48:f0:fa:95:f2:cb:08:3a:e5
\t\tLollipop-1.16.5-3.2.9.jar                         |Lollipop                      |lollipop                      |3.2.9               |DONE      |Manifest: NOSIGNATURE
\t\tSkyblockBuilder-1.16.4-1.6.2.jar                  |Skyblock Builder              |skyblockbuilder               |1.16.4-1.6.2        |DONE      |Manifest: NOSIGNATURE
\t\tcurios-forge-1.16.5-4.0.5.3.jar                   |Curios API                    |curios                        |1.16.5-4.0.5.3      |DONE      |Manifest: NOSIGNATURE
\t\tPatchouli-1.16.4-53.2.jar                         |Patchouli                     |patchouli                     |1.16.4-53.2         |DONE      |Manifest: NOSIGNATURE
\t\tMantle-1.16.5-1.6.115.jar                         |Mantle                        |mantle                        |1.6.115             |DONE      |Manifest: NOSIGNATURE
\t\tcorail_woodcutter-1.16-2.0.0.jar                  |Corail Woodcutter             |corail_woodcutter             |2.0.0               |DONE      |Manifest: NOSIGNATURE
\t\tmrplibrary-1.16.5-2.0.1.0-forge.jar               |mrp Library                   |mrplibrary                    |1.16.5-2.0.1.0-forge|DONE      |Manifest: NOSIGNATURE
\t\tversatileportals-1.16.5-3.2.0.1-forge.jar         |Versatile Portals             |versatileportals              |1.16.5-3.2.0.1-forge|DONE      |Manifest: NOSIGNATURE
\t\tftb-backups-2.1.1.6.jar                           |FTB Backups                   |ftbbackups                    |2.1.1.6             |DONE      |Manifest: NOSIGNATURE
\t\tpolymorph-forge-1.16.5-0.25.jar                   |Polymorph                     |polymorph                     |1.16.5-0.25         |DONE      |Manifest: NOSIGNATURE
\t\tAutoRegLib-1.6-49.jar                             |AutoRegLib                    |autoreglib                    |1.6-49              |DONE      |Manifest: NOSIGNATURE
\t\tAkashicTome-1.4-16.jar                            |Akashic Tome                  |akashictome                   |1.4-16              |DONE      |Manifest: NOSIGNATURE
\t\tStorageDrawers-1.16.3-8.3.0.jar                   |Storage Drawers               |storagedrawers                |8.3.0               |DONE      |Manifest: NOSIGNATURE
\t\ttopaddons-1.16.5-2.1.5-beta.jar                   |TOP Addons                    |topaddons                     |1.16.5-2.1.5-beta   |DONE      |Manifest: NOSIGNATURE
\t\tDrawersTooltip-1.16.2-2.1.0.jar                   |Drawers Tooltip               |drawerstooltip                |2.1.0               |DONE      |Manifest: NOSIGNATURE
\t\televatorid-1.16.5-1.7.13.jar                      |Elevator Mod                  |elevatorid                    |1.16.5-1.7.13       |DONE      |Manifest: NOSIGNATURE
\t\tftb-ultimine-forge-1605.3.0-build.25.jar          |FTB Ultimine                  |ftbultimine                   |1605.3.0-build.25   |DONE      |Manifest: NOSIGNATURE
\t\ttombstone-1.16.5-6.5.2.jar                        |Corail Tombstone              |tombstone                     |6.5.2               |DONE      |Manifest: NOSIGNATURE
\t\tQuark-r2.4-316.jar                                |Quark                         |quark                         |r2.4-316            |DONE      |Manifest: NOSIGNATURE
\t\tconstructionwand-1.16.5-2.2.jar                   |Construction Wand             |constructionwand              |1.16.5-2.2          |DONE      |Manifest: NOSIGNATURE
\t\tdesiredservers-1.16.4-1.0.1.jar                   |Desired Servers               |desiredservers                |1.16.4-1.0.1        |DONE      |Manifest: NOSIGNATURE
\t\tnethers_delight-2.1.jar                           |Nethers Delight               |nethers_delight               |2.1                 |DONE      |Manifest: NOSIGNATURE
\t\tarchitectury-1.22.32-forge.jar                    |Architectury                  |architectury                  |1.22.32             |DONE      |Manifest: NOSIGNATURE
\t\trhino-forge-1605.1.4-build.59.jar                 |Rhino                         |rhino                         |1605.1.4-build.59   |DONE      |Manifest: NOSIGNATURE
\t\tftb-library-forge-1605.3.3-build.71.jar           |FTB Library                   |ftblibrary                    |1605.3.3-build.71   |DONE      |Manifest: NOSIGNATURE
\t\titem-filters-forge-1605.2.5-build.9.jar           |Item Filters                  |itemfilters                   |1605.2.5-build.9    |DONE      |Manifest: NOSIGNATURE
\t\tftb-teams-forge-1605.2.2-build.32.jar             |FTB Teams                     |ftbteams                      |1605.2.2-build.32   |DONE      |Manifest: NOSIGNATURE
\t\tftb-chunks-forge-1605.3.1-build.52.jar            |FTB Chunks                    |ftbchunks                     |1605.3.1-build.52   |DONE      |Manifest: NOSIGNATURE
\t\tkubejs-forge-1605.3.17-build.114.jar              |KubeJS                        |kubejs                        |1605.3.17-build.114 |DONE      |Manifest: NOSIGNATURE
\t\tkubejs-blood-magic-1605.1.1-build.3.jar           |KubeJS Blood Magic            |kubejs_blood_magic            |1605.1.1-build.3    |DONE      |Manifest: NOSIGNATURE
\t\tftb-quests-forge-1605.3.4-build.60.jar            |FTB Quests                    |ftbquests                     |1605.3.4-build.60   |DONE      |Manifest: NOSIGNATURE
\t\tappleskin-forge-mc1.16.x-2.1.0.jar                |AppleSkin                     |appleskin                     |mc1.16.4-2.1.0      |DONE      |Manifest: NOSIGNATURE
\t\tferritecore-2.0.7-forge.jar                       |Ferrite Core                  |ferritecore                   |2.0.7               |DONE      |Manifest: 41:ce:50:66:d1:a0:05:ce:a1:0e:02:85:9b:46:64:e0:bf:2e:cf:60:30:9a:fe:0c:27:e0:63:66:9a:84:ce:8a
\t\tChisel-MC1.16.5-2.0.1-alpha.4.jar                 |Chisel                        |chisel                        |MC1.16.5-2.0.1-alpha|DONE      |Manifest: NOSIGNATURE
\t\toccultism-1.16.5-1.11.5.jar                       |Occultism                     |occultism                     |1.16.5-1.11.5       |DONE      |Manifest: NOSIGNATURE
\t\tobserverlib-1.16.5-1.5.3.jar                      |ObserverLib                   |observerlib                   |1.16.5-1.5.3        |DONE      |Manifest: NOSIGNATURE
\t\tmoreoverlays-1.18.15-mc1.16.5.jar                 |More Overlays Updated         |moreoverlays                  |1.18.15-mc1.16.5    |DONE      |Manifest: NOSIGNATURE
\t\tSoL-Carrot-1.16.5-1.10.1.jar                      |Spice of Life: Carrot Edition |solcarrot                     |1.16.5-1.10.1       |DONE      |Manifest: NOSIGNATURE
\t\tmoredragoneggs-1.4.jar                            |More Dragon Eggs              |moredragoneggs                |1.4                 |DONE      |Manifest: NOSIGNATURE
\t\tcloth-config-4.11.26-forge.jar                    |Cloth Config v4 API           |cloth-config                  |4.11.26             |DONE      |Manifest: NOSIGNATURE
\t\textremeSoundMuffler-3.13-1.16.5.jar               |Extreme Sound Muffler         |extremesoundmuffler           |3_forge-1.16.5      |DONE      |Manifest: NOSIGNATURE
\t\tCobbleForDays-1.3.1.jar                           |Cobble For Days               |cobblefordays                 |1.3.1               |DONE      |Manifest: NOSIGNATURE
\t\tFastLeafDecay-v25.jar                             |FastLeafDecay                 |fastleafdecay                 |v25                 |DONE      |Manifest: NOSIGNATURE
\t\texpandability-2.0.1-forge.jar                     |ExpandAbility                 |expandability                 |2.0.1               |DONE      |Manifest: NOSIGNATURE
\t\tBabel-1.0.5.jar                                   |Babel                         |babel                         |1.0.5               |DONE      |Manifest: NOSIGNATURE
\t\tmagipsi-1.16.5-2.0.0.1.jar                        |Magical Psi                   |magipsi                       |1.16.5-2.0.0.1      |DONE      |Manifest: NOSIGNATURE
\t\tgeckolib-forge-1.16.5-3.0.46.jar                  |GeckoLib                      |geckolib3                     |3.0.46              |DONE      |Manifest: NOSIGNATURE
\tCrash Report UUID: 2e18a79f-cf42-43c0-93d0-d42f96c8c718
\t[Psi] Active spell: None
\tPatchouli open book context: n/a
\tSuspected Mods: Unknown
\tLaunched Version: forge-36.2.4
\tBackend library: LWJGL version 3.2.2 build 10
\tBackend API: NVIDIA GeForce GTX 1060 6GB/PCIe/SSE2 GL version 4.6.0 NVIDIA 472.12, NVIDIA Corporation
\tGL Caps: Using framebuffer using OpenGL 3.0
\tUsing VBOs: Yes
\tIs Modded: Definitely; Client brand changed to 'forge'
\tType: Client (map_client.txt)
\tGraphics mode: fancy
\tResource Packs: 
\tCurrent Language: English (US)
\tCPU: 4x Intel(R) Core(TM) i5-7600K CPU @ 3.80GHz
\tClient Crashes Since Restart: 2
\tIntegrated Server Crashes Since Restart: 0
\tLaunched Version: forge-36.2.4
\tBackend library: LWJGL version 3.2.2 build 10
\tBackend API: NVIDIA GeForce GTX 1060 6GB/PCIe/SSE2 GL version 4.6.0 NVIDIA 472.12, NVIDIA Corporation
\tGL Caps: Using framebuffer using OpenGL 3.0
\tUsing VBOs: Yes
\tIs Modded: Definitely; Client brand changed to 'forge'
\tType: Client (map_client.txt)
\tGraphics mode: fancy
\tResource Packs: 
\tCurrent Language: English (US)
\tCPU: 4x Intel(R) Core(TM) i5-7600K CPU @ 3.80GHz`