"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var reactNative=require("react-native"),r=reactNative.PixelRatio.get(),w=reactNative.Dimensions.get("window").width*r,h=reactNative.Dimensions.get("window").height*r,DEVICE_IS_X=function(){return 1125===w&&2436===h},DEVICE_IS_Plus_6_6s_7_8=function(){return 1242===w&&2208===h},DEVICE_IS_6_6s_7_8=function(){return 750===w&&1334===h},DEVICE_IS_5_5s_5c_SE=function(){return 640===w&&1136===h},DEVICE_IS_4_4s=function(){return 640===w&&960===h},DEVICE_IS_2G_3G_3GS=function(){return 320===w&&480===h},DEVICE_IF_X=function(_,I){return DEVICE_IS_X()?_:I},DEVICE_IF_Plus_6_6s_7_8=function(_,I){return DEVICE_IS_Plus_6_6s_7_8()?_:I},DEVICE_IF_6_6s_7_8=function(_,I){return DEVICE_IS_6_6s_7_8()?_:I},index={IF_X:DEVICE_IF_X(),IF_Plus_6_6s_7_8:DEVICE_IF_Plus_6_6s_7_8(),IF_6_6s_7_8:DEVICE_IF_6_6s_7_8(),IF_5_5s_5c_SE:DEVICE_IS_5_5s_5c_SE(),IF_4_4s:DEVICE_IS_4_4s(),IF_2G_3G_3GS:DEVICE_IS_2G_3G_3GS(),IS_X:DEVICE_IS_X(),IS_Plus_6_6s_7_8:DEVICE_IS_Plus_6_6s_7_8(),IS_6_6s_7_8:DEVICE_IS_6_6s_7_8(),IS_5_5s_5c_SE:DEVICE_IS_5_5s_5c_SE(),IS_4_4s:DEVICE_IS_4_4s(),IS_2G_3G_3GS:DEVICE_IS_2G_3G_3GS()};exports.default=index;