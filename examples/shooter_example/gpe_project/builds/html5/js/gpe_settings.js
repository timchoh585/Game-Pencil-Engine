/*     
#    --------------------------------------------------  #
#       
#       
#  Game Pencil Engine Game File 
#  Created automatically via the Game Pencil Engine Editor 
#  Warning: Manually editing this file may cause unexpected bugs and errors. 
#  If you have any problems reading this file please report it to debug@pawbyte.com . 
#     
#      
#    --------------------------------------------------  # 
*/     

var game = game || {};
 
GPE_STANDARD_FPS =60;
 
GPE_STANDARD_INTERVAL = 1000/GPE_STANDARD_FPS;;
 
var GPE_SETTINGS_APP_LOGO_LOCATION = 'res/gpe_logo_start.png'; 
var GPE_SETTINGS_START_SCENE = 'newScene1'; 
var GPE_SETTINGS_SCREEN_WIDTH = 640;
var GPE_SETTINGS_SCREEN_HEIGHT = 480;
var GPE_SETTINGS_PROG_NAME = '';
var GPE_SETTINGS_VERSION_NUMBER = 1;
var GPE_MAX_OBJECT_TYPES = 6;
var GPE_SETTINGS_SYSTEM_OS = 'Browser';
var GPE_GAME_PUBLISHER = '';
var GPE_GAME_DEVELOPER = '';
var GPE_GAME_OBJECTS_COUNT = 6;
var GPE_SETTINGS_IS_DEBUGGING = false;
var GPE_SETTINGS_SHOW_FPS = true;
var GPE_GAME_SCALING_SETTING = 3;
var GPE_PreloadImageResource = [];
GPE_PreloadImageResource[0] = 'resources/textures/grass.png';
GPE_PreloadImageResource[1] = 'resources/sprites/spr_block_brown.png';
GPE_PreloadImageResource[2] = 'resources/sprites/shooter_enemies.png';
GPE_PreloadImageResource[3] = 'resources/sprites/spr_coin.png';
GPE_PreloadImageResource[4] = 'resources/sprites/xcoord.png';
GPE_PreloadImageResource[5] = 'resources/sprites/limehead_bro.png';
GPE_PreloadImageResource[6] = 'resources/sprites/spr_enemy_bulllet.png';
var GPE_PreloadAudioResource = [];
var GPE_PreloadAACResource = [];
GPE_PreloadAudioResource[0] = GPE_PreloadAACResource;
var GPE_PreloadMP3Resource = [];
GPE_PreloadAudioResource[1] = GPE_PreloadMP3Resource;
var GPE_PreloadOGGResource = [];
GPE_PreloadAudioResource[2] = GPE_PreloadOGGResource;
var GPE_PreloadWAVResource = [];
GPE_PreloadAudioResource[3] = GPE_PreloadWAVResource;
var Game_LayerMatrix = [];
var Game_SelfCollideLayerList = [];
Game_LayerMatrix.push( [] );
Game_SelfCollideLayerList.push(1);
Game_LayerMatrix[0].push(1);
Game_LayerMatrix[0].push(2);
Game_LayerMatrix[0].push(3);
Game_LayerMatrix[0].push(4);
Game_LayerMatrix[0].push(5);
Game_LayerMatrix[0].push(6);
Game_LayerMatrix[0].push(7);
Game_LayerMatrix[0].push(8);
Game_LayerMatrix[0].push(9);
Game_LayerMatrix[0].push(10);
Game_LayerMatrix[0].push(11);
Game_LayerMatrix[0].push(12);
Game_LayerMatrix[0].push(13);
Game_LayerMatrix[0].push(14);
Game_LayerMatrix[0].push(15);
Game_LayerMatrix.push( [] );
Game_LayerMatrix[1].push(0);
Game_SelfCollideLayerList.push(1);
Game_LayerMatrix[1].push(2);
Game_LayerMatrix[1].push(3);
Game_LayerMatrix[1].push(4);
Game_LayerMatrix[1].push(5);
Game_LayerMatrix[1].push(6);
Game_LayerMatrix[1].push(7);
Game_LayerMatrix[1].push(8);
Game_LayerMatrix[1].push(9);
Game_LayerMatrix[1].push(10);
Game_LayerMatrix[1].push(11);
Game_LayerMatrix[1].push(12);
Game_LayerMatrix[1].push(13);
Game_LayerMatrix[1].push(14);
Game_LayerMatrix[1].push(15);
Game_LayerMatrix.push( [] );
Game_LayerMatrix[2].push(0);
Game_LayerMatrix[2].push(1);
Game_SelfCollideLayerList.push(1);
Game_LayerMatrix[2].push(3);
Game_LayerMatrix[2].push(4);
Game_LayerMatrix[2].push(5);
Game_LayerMatrix[2].push(6);
Game_LayerMatrix[2].push(7);
Game_LayerMatrix[2].push(8);
Game_LayerMatrix[2].push(9);
Game_LayerMatrix[2].push(10);
Game_LayerMatrix[2].push(11);
Game_LayerMatrix[2].push(12);
Game_LayerMatrix[2].push(13);
Game_LayerMatrix[2].push(14);
Game_LayerMatrix[2].push(15);
Game_LayerMatrix.push( [] );
Game_LayerMatrix[3].push(0);
Game_LayerMatrix[3].push(1);
Game_LayerMatrix[3].push(2);
Game_SelfCollideLayerList.push(1);
Game_LayerMatrix[3].push(4);
Game_LayerMatrix[3].push(5);
Game_LayerMatrix[3].push(6);
Game_LayerMatrix[3].push(7);
Game_LayerMatrix[3].push(8);
Game_LayerMatrix[3].push(9);
Game_LayerMatrix[3].push(10);
Game_LayerMatrix[3].push(11);
Game_LayerMatrix[3].push(12);
Game_LayerMatrix[3].push(13);
Game_LayerMatrix[3].push(14);
Game_LayerMatrix[3].push(15);
Game_LayerMatrix.push( [] );
Game_LayerMatrix[4].push(0);
Game_LayerMatrix[4].push(1);
Game_LayerMatrix[4].push(2);
Game_LayerMatrix[4].push(3);
Game_SelfCollideLayerList.push(1);
Game_LayerMatrix[4].push(5);
Game_LayerMatrix[4].push(6);
Game_LayerMatrix[4].push(7);
Game_LayerMatrix[4].push(8);
Game_LayerMatrix[4].push(9);
Game_LayerMatrix[4].push(10);
Game_LayerMatrix[4].push(11);
Game_LayerMatrix[4].push(12);
Game_LayerMatrix[4].push(13);
Game_LayerMatrix[4].push(14);
Game_LayerMatrix[4].push(15);
Game_LayerMatrix.push( [] );
Game_LayerMatrix[5].push(0);
Game_LayerMatrix[5].push(1);
Game_LayerMatrix[5].push(2);
Game_LayerMatrix[5].push(3);
Game_LayerMatrix[5].push(4);
Game_SelfCollideLayerList.push(1);
Game_LayerMatrix[5].push(6);
Game_LayerMatrix[5].push(7);
Game_LayerMatrix[5].push(8);
Game_LayerMatrix[5].push(9);
Game_LayerMatrix[5].push(10);
Game_LayerMatrix[5].push(11);
Game_LayerMatrix[5].push(12);
Game_LayerMatrix[5].push(13);
Game_LayerMatrix[5].push(14);
Game_LayerMatrix[5].push(15);
Game_LayerMatrix.push( [] );
Game_LayerMatrix[6].push(0);
Game_LayerMatrix[6].push(1);
Game_LayerMatrix[6].push(2);
Game_LayerMatrix[6].push(3);
Game_LayerMatrix[6].push(4);
Game_LayerMatrix[6].push(5);
Game_SelfCollideLayerList.push(1);
Game_LayerMatrix[6].push(7);
Game_LayerMatrix[6].push(8);
Game_LayerMatrix[6].push(9);
Game_LayerMatrix[6].push(10);
Game_LayerMatrix[6].push(11);
Game_LayerMatrix[6].push(12);
Game_LayerMatrix[6].push(13);
Game_LayerMatrix[6].push(14);
Game_LayerMatrix[6].push(15);
Game_LayerMatrix.push( [] );
Game_LayerMatrix[7].push(0);
Game_LayerMatrix[7].push(1);
Game_LayerMatrix[7].push(2);
Game_LayerMatrix[7].push(3);
Game_LayerMatrix[7].push(4);
Game_LayerMatrix[7].push(5);
Game_LayerMatrix[7].push(6);
Game_SelfCollideLayerList.push(1);
Game_LayerMatrix[7].push(8);
Game_LayerMatrix[7].push(9);
Game_LayerMatrix[7].push(10);
Game_LayerMatrix[7].push(11);
Game_LayerMatrix[7].push(12);
Game_LayerMatrix[7].push(13);
Game_LayerMatrix[7].push(14);
Game_LayerMatrix[7].push(15);
Game_LayerMatrix.push( [] );
Game_LayerMatrix[8].push(0);
Game_LayerMatrix[8].push(1);
Game_LayerMatrix[8].push(2);
Game_LayerMatrix[8].push(3);
Game_LayerMatrix[8].push(4);
Game_LayerMatrix[8].push(5);
Game_LayerMatrix[8].push(6);
Game_LayerMatrix[8].push(7);
Game_SelfCollideLayerList.push(1);
Game_LayerMatrix[8].push(9);
Game_LayerMatrix[8].push(10);
Game_LayerMatrix[8].push(11);
Game_LayerMatrix[8].push(12);
Game_LayerMatrix[8].push(13);
Game_LayerMatrix[8].push(14);
Game_LayerMatrix[8].push(15);
Game_LayerMatrix.push( [] );
Game_LayerMatrix[9].push(0);
Game_LayerMatrix[9].push(1);
Game_LayerMatrix[9].push(2);
Game_LayerMatrix[9].push(3);
Game_LayerMatrix[9].push(4);
Game_LayerMatrix[9].push(5);
Game_LayerMatrix[9].push(6);
Game_LayerMatrix[9].push(7);
Game_LayerMatrix[9].push(8);
Game_SelfCollideLayerList.push(1);
Game_LayerMatrix[9].push(10);
Game_LayerMatrix[9].push(11);
Game_LayerMatrix[9].push(12);
Game_LayerMatrix[9].push(13);
Game_LayerMatrix[9].push(14);
Game_LayerMatrix[9].push(15);
Game_LayerMatrix.push( [] );
Game_LayerMatrix[10].push(0);
Game_LayerMatrix[10].push(1);
Game_LayerMatrix[10].push(2);
Game_LayerMatrix[10].push(3);
Game_LayerMatrix[10].push(4);
Game_LayerMatrix[10].push(5);
Game_LayerMatrix[10].push(6);
Game_LayerMatrix[10].push(7);
Game_LayerMatrix[10].push(8);
Game_LayerMatrix[10].push(9);
Game_SelfCollideLayerList.push(1);
Game_LayerMatrix[10].push(11);
Game_LayerMatrix[10].push(12);
Game_LayerMatrix[10].push(13);
Game_LayerMatrix[10].push(14);
Game_LayerMatrix[10].push(15);
Game_LayerMatrix.push( [] );
Game_LayerMatrix[11].push(0);
Game_LayerMatrix[11].push(1);
Game_LayerMatrix[11].push(2);
Game_LayerMatrix[11].push(3);
Game_LayerMatrix[11].push(4);
Game_LayerMatrix[11].push(5);
Game_LayerMatrix[11].push(6);
Game_LayerMatrix[11].push(7);
Game_LayerMatrix[11].push(8);
Game_LayerMatrix[11].push(9);
Game_LayerMatrix[11].push(10);
Game_SelfCollideLayerList.push(1);
Game_LayerMatrix[11].push(12);
Game_LayerMatrix[11].push(13);
Game_LayerMatrix[11].push(14);
Game_LayerMatrix[11].push(15);
Game_LayerMatrix.push( [] );
Game_LayerMatrix[12].push(0);
Game_LayerMatrix[12].push(1);
Game_LayerMatrix[12].push(2);
Game_LayerMatrix[12].push(3);
Game_LayerMatrix[12].push(4);
Game_LayerMatrix[12].push(5);
Game_LayerMatrix[12].push(6);
Game_LayerMatrix[12].push(7);
Game_LayerMatrix[12].push(8);
Game_LayerMatrix[12].push(9);
Game_LayerMatrix[12].push(10);
Game_LayerMatrix[12].push(11);
Game_SelfCollideLayerList.push(1);
Game_LayerMatrix[12].push(13);
Game_LayerMatrix[12].push(14);
Game_LayerMatrix[12].push(15);
Game_LayerMatrix.push( [] );
Game_LayerMatrix[13].push(0);
Game_LayerMatrix[13].push(1);
Game_LayerMatrix[13].push(2);
Game_LayerMatrix[13].push(3);
Game_LayerMatrix[13].push(4);
Game_LayerMatrix[13].push(5);
Game_LayerMatrix[13].push(6);
Game_LayerMatrix[13].push(7);
Game_LayerMatrix[13].push(8);
Game_LayerMatrix[13].push(9);
Game_LayerMatrix[13].push(10);
Game_LayerMatrix[13].push(11);
Game_LayerMatrix[13].push(12);
Game_SelfCollideLayerList.push(1);
Game_LayerMatrix[13].push(14);
Game_LayerMatrix[13].push(15);
Game_LayerMatrix.push( [] );
Game_LayerMatrix[14].push(0);
Game_LayerMatrix[14].push(1);
Game_LayerMatrix[14].push(2);
Game_LayerMatrix[14].push(3);
Game_LayerMatrix[14].push(4);
Game_LayerMatrix[14].push(5);
Game_LayerMatrix[14].push(6);
Game_LayerMatrix[14].push(7);
Game_LayerMatrix[14].push(8);
Game_LayerMatrix[14].push(9);
Game_LayerMatrix[14].push(10);
Game_LayerMatrix[14].push(11);
Game_LayerMatrix[14].push(12);
Game_LayerMatrix[14].push(13);
Game_SelfCollideLayerList.push(1);
Game_LayerMatrix[14].push(15);
Game_LayerMatrix.push( [] );
Game_LayerMatrix[15].push(0);
Game_LayerMatrix[15].push(1);
Game_LayerMatrix[15].push(2);
Game_LayerMatrix[15].push(3);
Game_LayerMatrix[15].push(4);
Game_LayerMatrix[15].push(5);
Game_LayerMatrix[15].push(6);
Game_LayerMatrix[15].push(7);
Game_LayerMatrix[15].push(8);
Game_LayerMatrix[15].push(9);
Game_LayerMatrix[15].push(10);
Game_LayerMatrix[15].push(11);
Game_LayerMatrix[15].push(12);
Game_LayerMatrix[15].push(13);
Game_LayerMatrix[15].push(14);
Game_SelfCollideLayerList.push(1);
Game_LayerMatrix.push( [] );
Game_LayerMatrix.push( [] );
Game_LayerMatrix.push( [] );
Game_LayerMatrix.push( [] );
Game_LayerMatrix.push( [] );
Game_LayerMatrix.push( [] );
Game_LayerMatrix.push( [] );
Game_LayerMatrix.push( [] );
Game_LayerMatrix.push( [] );
Game_LayerMatrix.push( [] );
Game_LayerMatrix.push( [] );
Game_LayerMatrix.push( [] );
Game_LayerMatrix.push( [] );
Game_LayerMatrix.push( [] );
Game_LayerMatrix.push( [] );
Game_LayerMatrix.push( [] );
