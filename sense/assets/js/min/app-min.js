$(document).ready(function(){$(window).scroll(function(){});var n=new ScrollMagic.Controller({globalSceneOptions:{triggerHook:"onEnter",duration:"200%"}});new ScrollMagic.Scene({triggerElement:".block-container.collection .block-content"}).setTween(".block-container.collection .block-content",{y:"80%",ease:Linear.easeNone}).addIndicators().addTo(n)});