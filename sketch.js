
var backgroundimg
var rutuinstart,rutuimageinstart
var messagebox,messageboximage,messagebox2image
var gamestate="serve"
var backbutton1image
var window1,windowimage
var backbutton1,backbutton2
var rutugamelogo,rutugamelogoimage
var   backgroundi
var  foresttile1image, foresttile2image, foresttile3image, foresttile5image
var countdistancex1=0
var rutuinforest
var foresttilesgroup
var rutuinforestrunning,rutuinforestidle,rutuinforestjump
var foresttile1
var brickwallimage
var colaimage
var pizzaimage
var hamburgerimage
var hotdogimage
var invisibleground1, invisiblewall1
var forestenergy=0
var score1=0
var playerpromise=200
var time=200
var heartimg
var giftstate="onit"
var gift,santarutu
var santalife=300
var happinessrate=0
var candycanecollected=0
var planelife=300
var planefuel=300
var enemykilled=20
var dinoenergy=300
var dinolife=300
var distance1=100000
var rutulife=300
var zombieremaining=300
var immunity=300
var coronaremaining=300
var computerscore=0;
var playerscore=0;
var gameState="serve2"
var gamestate2="servestart"
var livesofsam=5
var spacecraftlives=3
var spacedistance=0
var fruitscollected=0
var state=1
var fruitsmissed=3
var PLAY = 1;
var END = 0;
var MIDDLE=3
var gameState10 = MIDDLE;
var score10=0


function preload()
{
 backgroundimg=loadImage("images/grassyb.png")
citybackgroundimg=loadImage("images/city5.jpg")
snowbackgroundimg=loadImage("images/snowbackground3.png")
skybackgroundimg=loadImage("plane/airbackground.png")
nightbackgroundimg=loadImage("dino/grassbackground4.jpg")
skycitybackgroundimg=loadImage("images/citybg.jpg")


 rutuimageinstart=loadAnimation("rutuinforest/Idle (1).png")
 dinoimageinstart=loadAnimation("dino/dinoidle1.png")
 messageboximage=loadImage("images/messagebox2.png")
 messagebox2image=loadImage("images/messagebox3.png")
 backbutton1image=loadImage("backbuttons/backbutton2.png")
 rutugamelogoimage=loadImage("images/rgamelogo.png")
 levelnextbuttonimage=loadImage("images/fantasynextbutton.png")
 levelbackbuttonimage=loadImage("images/fantasybackbuton2.png")

 
rutuinforestidle=loadAnimation("rutuinforest/rutuidle1.png")
rutuinforestjump=loadAnimation("rutuinforest/Jump (6).png")
rutuinforestrunning=loadAnimation("rutuinforest/Run (1).png","rutuinforest/Run (4).png","rutuinforest/Run (5).png","rutuinforest/Run (8).png")

colaimage=loadImage("junkfoodobstacles/cartooncola.png")
pizzaimage=loadImage("junkfoodobstacles/americanpizza.png")
hamburgerimage=loadImage("junkfoodobstacles/cartoonhamburger.png")
hotdogimage=loadImage("junkfoodobstacles/hotdog.png")
bananaimage=loadImage("junkfoodobstacles/cartoonbanana.png")
cucumberimage=loadImage("junkfoodobstacles/cartooncucumber.png")
grapesimage=loadImage("junkfoodobstacles/cartoongrapes.png")
tomatoimage=loadImage("junkfoodobstacles/cartoontomato.png")
heartimg=loadImage("images/gameheart.png")
restartbuttonimg=loadImage("images/r.png")
gamebackbutttonimg=loadImage("images/gamebackbutton.png")
rutucryingimg=loadImage("images/sadboyrutu.png")
gameoversound=loadSound("sounds/gmo.mp3")
collisionsound=loadSound("sounds/failurecollision.wav")
laughingrutuimg=loadImage("images/laughingboy.png")
collisionsound=loadSound("sounds/failurecollision.wav")
santarunning=loadAnimation("santa/santarun1.png","santa/santarun2.png","santa/santarun5.png")
santajumping=loadAnimation("santa/santajump.png")
santaidle=loadAnimation("santa/santaidle.png")
candycaneimage=loadImage("images/cartooncandycane.png")
bellimage=loadImage("images/bellcartoon.png")
pinetreeimg=loadImage("images/pinetree.png")
snowmanimg=loadImage("images/snowmanimg.png")
flagimg=loadImage("images/Flag.png")
gift1img=loadImage("images/cartoongift2.png")
happyimage=loadImage("images/happyemoji.png")
winsound=loadSound("sounds/winsound.wav")
planeimg=loadAnimation("plane/fighterplane.png")
planebulletimage=loadImage("plane/cartoonfirebullet.png")
hotairballoonimage=loadImage("plane/cartoonhotairballoon.png")
crowimg=loadAnimation("plane/crow1.png","plane/crow2.png")
fighterplaneimg=loadAnimation("plane/redplane.png")
fuelimage=loadImage("images/fuel.png")
shootingplaneimg=loadAnimation("plane/fighterplaneshoot.png")

dinoimage=loadAnimation("dino/dinorun1.png","dino/dinorun2.png","dino/dinorun3.png","dino/dinorun5.png")
dinoidleimg=loadAnimation("dino/dinoidle1.png")
dinojumpimg=loadAnimation("dino/dinojump.png")
wizardimg2=loadAnimation("dino/bluewizard2.png")
rockimg=loadImage("dino/cartoonrock.png")
plantsimg1=loadImage("dino/cartoonvenusflytrap.png")
plantsimg2=loadImage("dino/cartoonmushroom.png")

energyimage=loadImage("dino/energy.png")


corona1img=loadImage("images/cartooncorona1.png")
corona2img=loadImage("images/cartooncorona2.png")
maskimg=loadImage("images/cartoonmask.png")
sanitizerimg=loadImage("images/cartonsanitizer.png")
infectedpersonimg=loadImage("images/cartooninfectedman.png")
vaccineimg=loadImage("images/cartoonvaccine.png")

spacebackground=loadImage("images/spacebackground4.jpg")
spacecraftimage=loadImage("images/spacecraft.png")
cartoonasteroidimage=loadImage("images/cartoonasteroid.png")

farmbackground=loadImage("images/farmbackground3.jpg")
basketimage=loadImage("images/cartoonbasket2.png")

bird_image=loadImage("images/cartoonghost.png");
bg_image=loadImage("images/flappyback2.png");
fg_image=loadImage("images/ddddddd (1).jpg");
pipeNorth_image=loadImage("images/pipeNorth.png");
pipeSouth_image=loadImage("images/pipeSouth.png");
r=loadImage("images/r.png");

buttonclicksound=loadSound("sounds/preview.mp3")

goodyogiimg=loadImage("images/meditatebackground.jpg");
badyogiimg=loadImage("images/meditateback6.jpg");
meditatorimg=loadImage("images/meditategirl.png")
buddhameditateimg=loadImage("images/buddhameditate.jpg")

meditationsound=loadSound("sounds/meditationsound.mp3")
shivbackimg=loadImage("images/shivback2.png")
}



function setup() {
  createCanvas(windowWidth-20,windowHeight-40);
  foresttilesgroup=new Group()
  forestobstaclegroup=new Group()
  forestfruitsgroup=new Group()
  candycanegroup=new Group()
  snowobstaclegroup=new Group()
  flaggroup=new Group()
giftgroup=new Group()
skyobstaclegroup1=new Group()
skyobstaclegroup2=new Group()
skyobstaclegroup3=new Group()
fuelgroup=new Group()
wizardgroup=new Group()
crowgroup=new Group()
rockgroup=new Group()
plantsgroup=new Group()
tomatocoin1group=new Group()
tomatocoin2group=new Group()
tomatocoin3group=new Group()
tomatocoin4group=new Group()
zombiegroup=new Group()
cplanegroup=new Group()
barricadegroup=new Group()
potiongroup=new Group()
crowgroup2=new Group()
corona1group=new Group()
corona2group=new Group()
corona3group=new Group()
barricade2group=new Group()
maskgroup=new Group()
ipersongroup=new Group()
vaccinegroup=new Group()
asteroidgroup=new Group()
asteroid2group=new Group()
asteroid3group=new Group()
asteroid4group=new Group()

spacebulletgroup=new Group()
fruits1group=new Group()
fruits2group=new Group()
fruits3group=new Group()
fruits4group=new Group()


 citybackground=createSprite(width/2,height/2,width+1000000,height+1000)
 citybackground.addImage(citybackgroundimg)
  citybackground.scale=0.29
  citybackground.visible=false

  snowbackground=createSprite(width/2,height/2-150,width+1000000,height+1000)
  snowbackground.addImage(snowbackgroundimg)
   snowbackground.scale=1.3
   snowbackground.visible=false

   skybackground=createSprite(width/2,height/2-150,width+1000000,height+1000)
   skybackground.addImage( skybackgroundimg)
   skybackground.scale=1.5
   skybackground.visible=false
 
   
   nightbackground=createSprite(width/2,height/2,width+1000000,height+1000)
   nightbackground.addImage(nightbackgroundimg)
   nightbackground.scale=1.4
   nightbackground.visible=false

   nightcitybackground=createSprite(width/2+200,height/2,width+1000000,height+100000)
   nightcitybackground.scale=1.8
   nightcitybackground.visible=false

   skycitybackground=createSprite(width/2+200,height/2,width+1000000,height+100000)
   skycitybackground.addImage(skycitybackgroundimg)
   skycitybackground.scale=1.8
   skycitybackground.visible=false

   minigamebackground1=createSprite(width/2,height/2,width,height)
   minigamebackground1.shapeColor=("lightgreen")
   minigamebackground1.visible=false

   minigamebackground2=createSprite(width/2,height/2,width,height)
   minigamebackground2.shapeColor=("lightblue")
   minigamebackground2.visible=false

   minigamebackground3=createSprite(width/2,height/2,width+10000,height)
   minigamebackground3.addImage(spacebackground)
   minigamebackground3.velocityX=-7
   minigamebackground3.visible=false

  invisibleground1=createSprite(width/2,650,width,30)
  invisibleground1.visible=false

  invisiblewall1=createSprite(40,height/2,30,height)
  invisiblewall1.visible=false

  invisibleground2=createSprite(width/2,650,width,30)
  invisibleground2.visible=false

  invisibleground3=createSprite(width/2,0,width,30)
  invisibleground3.visible=false

  invisibleground4=createSprite(width/2,650,width,30)
  invisibleground4.visible=false

  invisibleground5=createSprite(width/2,620,width,30)
  invisibleground5.visible=false

  invisibleground6=createSprite(width/2,520,width,30)
  invisibleground6.visible=false

  invisibleground7=createSprite(width/2,620,width,30)
  invisibleground7.visible=false

  invisibleground7=createSprite(width/2,height-120,width,30)
  invisibleground7.visible=false

  invisibleground8=createSprite(width/2,0,width,30)
  invisibleground8.visible=false

  invisibleground8=createSprite(0,height/2,30,height)
  invisibleground8.visible=false

  invisibleground9=createSprite(width/2,height+100,width,30)
  invisibleground9.visible=false

//g=createSprite(400,400,20,20)
rutuinstart=createSprite(1000,400,40,40)
rutuinstart.addAnimation("rutuinstart",rutuimageinstart)

rutuinforest=new forestrutu()
rutuinforest.spt.visible=false
rutuinforest.spt.setCollider("rectangle",-100,0,150,250)

santarutu=createSprite(300,200,60,80)
santarutu.addAnimation("santaidle",santaidle)
santarutu.addAnimation("santarunning",santarunning)
santarutu.addAnimation("santajump",santajumping)

planebullet=createSprite(300,200,20,20)
planebullet.addImage(planebulletimage)
planebullet.visible=false
planebullet.scale=0.3

rutuplane=createSprite(300,200,50,50)
rutuplane.addAnimation("plane",planeimg)
rutuplane.addAnimation("shootingplane",shootingplaneimg)
rutuplane.scale=0.5
//rutuplane.debug=true
      rutuplane.setCollider("rectangle",0,0,300,200)

rutuplane.visible=false


dino=createSprite(300,200,40,40)
dino.addAnimation("dino",dinoimage)
dino.addAnimation("dinoidle",dinoidleimg)
dino.addAnimation("dinojump",dinojumpimg)
//dino.debug=true
dino.setCollider("rectangle",-100,0,300,400)
dino.visible=false
dino.scale=0.4

gift=createSprite(0,0,50,50)
giftimg=Math.round(random(1))
gift.visible=false
switch(giftimg){
case 1:gift.addImage(gift1img)
gift.scale=0.2
break;

}

//santarutu.debug=true
santarutu.setCollider("rectangle",-20,0,200,400)
santarutu.scale=0.4
santarutu.visible=false

rutu=createSprite(300,200,40,40)
rutu.addAnimation("rutuinforestidle1",rutuinforestidle);
rutu.addAnimation("rutuinforestrunning1",rutuinforestrunning);
rutu.addAnimation("rutuinforestjump",rutuinforestjump);
//rutu.debug=true
rutu.setCollider("rectangle",-150,0,100,300)
rutu.visible=false
rutu.scale=0.5

dinoinstart=createSprite(330,600,40,40)
dinoinstart.addAnimation("dinoinstart",dinoimageinstart)
dinoinstart.scale=0.8
dinoinstart.visible=false

messagebox2=createSprite(700,250,50,50)
messagebox2.scale=1.3
messagebox2.visible=false
messagebox2.addImage(messageboximage)

messagebox3=createSprite(500,350,50,50)
messagebox3.scale=0.9
messagebox3.visible=false
messagebox3.addImage(messagebox2image)

backbutton1=createSprite(60,60,30,30)
backbutton1.addImage(backbutton1image)
backbutton1.visible=false

backbutton2=createSprite(60,60,30,30)
backbutton2.addImage(backbutton1image)
backbutton2.visible=false

backbutton3=createSprite(60,60,30,30)
backbutton3.addImage(backbutton1image)
backbutton3.visible=false

backbutton4=createSprite(60,170,30,30)
backbutton4.addImage(backbutton1image)
backbutton4.visible=false





messagebox=createSprite(1050,350,50,50)
messagebox.scale=0.9
messagebox.addImage(messageboximage)
messagebox.visible=false

rutugamelogo=createSprite(800,50,100,40)
rutugamelogo.addImage(rutugamelogoimage)

levelnextbutton=createSprite(1100,600,50,50)
levelnextbutton.addImage(levelnextbuttonimage)
levelnextbutton.scale=0.6
levelnextbutton.visible=false

levelnextbutton2=createSprite(1200,300,50,50)
levelnextbutton2.addImage(levelnextbuttonimage)
levelnextbutton2.scale=0.6
levelnextbutton2.visible=false

levelnextbutton3=createSprite(1300,600,50,50)
levelnextbutton3.addImage(levelnextbuttonimage)
levelnextbutton3.scale=0.6
levelnextbutton3.visible=false


levelbackbutton=createSprite(400,600,50,50)
levelbackbutton.addImage(levelbackbuttonimage)
levelbackbutton.scale=0.6
levelbackbutton.visible=false


levelbackbutton2=createSprite(400,300,50,50)
levelbackbutton2.addImage(levelbackbuttonimage)
levelbackbutton2.scale=0.6
levelbackbutton2.visible=false

levelbackbutton3=createSprite(150,600,50,50)
levelbackbutton3.addImage(levelbackbuttonimage)
levelbackbutton3.scale=0.6
levelbackbutton3.visible=false

levelbackbutton4=createSprite(150,300,50,50)
levelbackbutton4.addImage(levelbackbuttonimage)
levelbackbutton4.scale=0.6
levelbackbutton4.visible=false



gamerestartbutton=createSprite(1200,300,50,50)
gamerestartbutton.addImage(restartbuttonimg)
gamerestartbutton.scale=0.5
gamerestartbutton.visible=false

gamebackbuttton=createSprite(400,300,50,50)
gamebackbuttton.addImage(gamebackbutttonimg)
gamebackbuttton.scale=0.9
gamebackbuttton.visible=false

rutucrying=createSprite(width/2,height/2,80,500)
rutucrying.addImage(rutucryingimg)
rutucrying.visible=false

laughingrutu=createSprite(width/2,height/2,80,500)
laughingrutu.addImage(laughingrutuimg)
laughingrutu.scale=0.8
laughingrutu.visible=false



this.submitbutton= createButton('done');
this.submitbutton.position(1000,370);
this.submitbutton.hide();

this.submitbutton.mousePressed(()=>{
            
this.input1.hide();
this.submitbutton.hide()
 gamestate="iknowname"
 buttonclicksound.play()


 
});



this.input1 = createInput("player");
this.input1.position(950, 330);
this.input1.hide()

if(gamestate==="serve"){

 

this.storyButton = createButton("Adventures");
this.storyButton.position(300, 335);
this.storyButton.class("customButton")

this.minigamesButton = createButton("mini games");
this.minigamesButton.position(300,400);
this.minigamesButton.class("customButton")

this.instructionButton = createButton("About game");
this.instructionButton.position(300, 460);
this.instructionButton.class("customButton")

this.aboutButton = createButton("About me");
this.aboutButton.position(300, 520);
this.aboutButton.class("customButton")
this.aboutButton.hide()


this.dreamappbutton = createButton("My dream app");
this.dreamappbutton.position(300, 580);
this.dreamappbutton.class("customButton")
this.dreamappbutton.show()


this.storynextbutton1=createButton("next")
this.storynextbutton1.position(1150,350)
this.storynextbutton1.class("nextButton")
this.storynextbutton1.hide();

this.storypreviousbutton1=createButton("prev")
this.storypreviousbutton1.position(900,350)
this.storypreviousbutton1.class("previousButton")
this.storypreviousbutton1.hide();

this.storynextbutton2=createButton("next")
this.storynextbutton2.position(1150,350)
this.storynextbutton2.class("nextButton")
this.storynextbutton2.hide();

this.storypreviousbutton2=createButton("prev")
this.storypreviousbutton2.position(900,350)
this.storypreviousbutton2.class("previousButton")
this.storypreviousbutton2.hide();

this.storynextbutton3=createButton("next")
this.storynextbutton3.position(1150,350)
this.storynextbutton3.class("nextButton")
this.storynextbutton3.hide();

this.storypreviousbutton3=createButton("prev")
this.storypreviousbutton3.position(900,350)
this.storypreviousbutton3.class("previousButton")
this.storypreviousbutton3.hide();



this.level1=createButton("junckfood fighters")
this.level1.position(670,150)
this.level1.class("levelButton")
this.level1.hide()

this.level2=createButton("santa help")
this.level2.position(670,240)
this.level2.class("levelButton")
this.level2.hide()

this.level3=createButton("plane terrain")
this.level3.position(670,330)
this.level3.class("levelButton")
this.level3.hide()

this.level4=createButton("save rutu")
this.level4.position(670,420)
this.level4.class("levelButton")
this.level4.hide()

this.level5=createButton("swampy zombie")
this.level5.position(11170,510)
this.level5.class("levelButton")
this.level5.hide()

this.level6=createButton("Go Corona Go")
this.level6.position(643,510)
this.level6.class("finallevelButton")
this.level6.hide()


this.minigame1=createButton("Hockey battle")
this.minigame1.position(width/2-130,150)
this.minigame1.class("minigamelevelButton")
this.minigame1.hide()

this.minigame2=createButton("crossy road")
this.minigame2.position(width/2-130,240)
this.minigame2.class("minigamelevelButton")
this.minigame2.hide()

this.minigame3=createButton("space shooter")
this.minigame3.position(width/2-130,330)
this.minigame3.class("minigamelevelButton")
this.minigame3.hide()

this.minigame4=createButton("Fruit collector")
this.minigame4.position(width/2-130,420)
this.minigame4.class("minigamelevelButton")
this.minigame4.hide()

this.minigame5=createButton("Flappy ghost")
this.minigame5.position(width/2-130,510)
this.minigame5.class("minigamelevelButton")
this.minigame5.hide()

this.backgrbutton=createButton("")
this.backgrbutton.position(130,50)
this.backgrbutton.class("backgrbutton")
this.backgrbutton.hide()

this.dreambutton=createButton("Lets Meditate")
this.dreambutton.position(630,550)
this.dreambutton.class("dreambutton")
this.dreambutton.hide()

this.appintrobutton=createButton("Introdution")
this.appintrobutton.position(300,180)
this.appintrobutton.class("dreamappbuttons")
this.appintrobutton.hide()

this.doingmeditatebutton=createButton("How To Meditate")
this.doingmeditatebutton.position(300,380)
this.doingmeditatebutton.class("dreamappbuttons")
this.doingmeditatebutton.hide()

this.apptypesbutton=createButton("Types of Meditation")
this.apptypesbutton.position(300,280)
this.apptypesbutton.class("dreamappbuttons")
this.apptypesbutton.hide()

this.appsourcesbutton=createButton("Lets meditate")
this.appsourcesbutton.position(300,480)
this.appsourcesbutton.class("dreamappbuttons")
this.appsourcesbutton.hide()

this.backgrbutton2=createButton("")
this.backgrbutton2.position(130,10)
this.backgrbutton2.class("backgrbutton2")
this.backgrbutton2.hide()

this.backgrbutton3=createButton("")
this.backgrbutton3.position(130,10)
this.backgrbutton3.class("backgrbutton2")
this.backgrbutton3.hide()


this.applogo=createButton("Lets meditate")
this.applogo.position(600,30)
this.applogo.class("applogo")
this.applogo.hide()

}


this.aboutButton.mousePressed(()=>{
  buttonclicksound.play()

 
  messagebox2.visible=true
  backbutton1.visible=true
  rutuinstart.y=600
  rutuinstart.x=900
  gamestate="tellaboutme"

  });

  this.instructionButton.mousePressed(()=>{
    buttonclicksound.play()

    backbutton2.visible=true
    gamestate="tellinstruction"
    });

    this.storyButton.mousePressed(()=>{
      buttonclicksound.play()

      backbutton3.visible=true
      this.input1.show()
      rutuinstart.y=600
      rutuinstart.x=1000
      gamestate="storywise1"
      });
    
      this.storypreviousbutton1.mousePressed(()=>{
        buttonclicksound.play()

        backbutton3.visible=true
        this.storypreviousbutton1.hide()
        this.storynextbutton1.hide()

        this.input1.show()
        rutuinstart.y=600
        rutuinstart.x=1000
        gamestate="storywise1"
        });
    
        this.storynextbutton1.mousePressed(()=>{
          buttonclicksound.play()

          backbutton3.visible=true
          this.storypreviousbutton1.hide()
          this.storynextbutton1.hide()
          text("and i am going to help you in" ,870,320)
          rutuinstart.y=600
          rutuinstart.x=1000
          gamestate="storywise2"
          });

          this.storypreviousbutton2.mousePressed(()=>{
            buttonclicksound.play()

            backbutton3.visible=true
            this.storypreviousbutton2.hide()
            this.storynextbutton2.hide()
                rutuinstart.y=600
            rutuinstart.x=1000
            gamestate="iknowname"
            });
        
            this.storynextbutton2.mousePressed(()=>{
              buttonclicksound.play()

              backbutton3.visible=true
              this.storypreviousbutton2.hide()
              this.storynextbutton2.hide()
              rutuinstart.y=600
              rutuinstart.x=1000
              gamestate="storywise3"
              });
    
              this.storypreviousbutton3.mousePressed(()=>{
                buttonclicksound.play()

                backbutton3.visible=true
                this.storypreviousbutton3.hide()
                this.storynextbutton3.hide()
                   
                gamestate="storywise2"
                dinoinstart.visible=false
                messagebox3.visible=false
                messagebox.visible=true

                });
    
                this.storynextbutton3.mousePressed(()=>{
                  buttonclicksound.play()

                  backbutton3.visible=true
                  this.storypreviousbutton3.hide()
                  this.storynextbutton3.hide()
                  rutuinstart.y=400
                  rutuinstart.x=1100
                  messagebox.visible=false
                  messagebox3.visible=false
                  gamestate="levels"
                

                  });
    
    this.level1.mousePressed(()=>{
      buttonclicksound.play()

backbutton3.visible=true

gamestate="level1story"

    })

    this.level2.mousePressed(()=>{
      buttonclicksound.play()

      backbutton3.visible=true
      
      gamestate="level2story"
      
          })

          this.level3.mousePressed(()=>{
            buttonclicksound.play()

            backbutton3.visible=true
            
            gamestate="level3story"
            
                })

                this.level4.mousePressed(()=>{
                  buttonclicksound.play()

                  backbutton3.visible=true
                  
                  gamestate="level4story"
                  
                      })

                  
      
                            this.level6.mousePressed(()=>{
                              buttonclicksound.play()

                              backbutton3.visible=true

                              gamestate="level6story"
                              
                                  })


                                  this.minigamesButton.mousePressed(()=>{
                                    buttonclicksound.play()

                                    backbutton3.visible=true
                                    
                                    gamestate="showminigames"
                                    
                                        })

                                        this.minigame1.mousePressed(()=>{
                                          buttonclicksound.play()

                                          backbutton3.visible=false
                                          
                                          gamestate="minigame1"
                                          
                                              })

                                              this.minigame2.mousePressed(()=>{
                                                buttonclicksound.play()

                                                backbutton3.visible=false
                                                
                                                gamestate="minigame2"
                                                
                                                    })

                                                     this.minigame3.mousePressed(()=>{
                                                      buttonclicksound.play()

                                                backbutton3.visible=false
                                                
                                                gamestate="minigame3"
                                                spacedistance=0

                                                
                                                    })

                                                    this.minigame4.mousePressed(()=>{
                                                      buttonclicksound.play()

                                                      backbutton3.visible=false
                                                      gamestate2="serveintroduce"
                                                      gamestate="minigame4"
                                                          })

                                                          this.minigame5.mousePressed(()=>{
                                                            buttonclicksound.play()

                                                            backbutton3.visible=false
                                                            gamestate="minigame5"
                                                            bird.visible=true

                                                                })

                                                                this.dreamappbutton.mousePressed(()=>{
                                                                  buttonclicksound.play()
                                                            gamestate="showdreamappbuttoninfo"

                                                                })

                                                                this.dreambutton.mousePressed(()=>{
                                                                  buttonclicksound.play()
                                                            gamestate="dreamappserve"
                                                            backbutton3.visible=false
                                                            backbutton4.visible=true
                                                            dreambutton.hide()

                                                                })
                                                                
                                                                this.appintrobutton.mousePressed(()=>{
                                                                  buttonclicksound.play()
                                                            gamestate="meditateintro"
                                                            backbutton4.visible=false
                                                            backbutton3.visible=true

                                                            this.appintrobutton.hide()
                                                            this.doingmeditatebutton.hide()
                                                              this.doingmeditatebutton.hide()
                                                              this.apptypesbutton.hide()
                                                                this.appsourcesbutton.hide()
                                                              

                                                            
                                                                })
                                                                this.apptypesbutton.mousePressed(()=>{
                                                                  buttonclicksound.play()
                                                            gamestate="meditationtypes"
                                                            backbutton4.visible=false
                                                            backbutton3.visible=true

                                                            this.appintrobutton.hide()
                                                            this.doingmeditatebutton.hide()
                                                              this.doingmeditatebutton.hide()
                                                              this.apptypesbutton.hide()
                                                                this.appsourcesbutton.hide()
                                                              

                                                            
                                                                })
      
                                                                

                                                                this.doingmeditatebutton.mousePressed(()=>{
                                                                  buttonclicksound.play()
                                                            gamestate="howtomeditate1"
                                                            backbutton4.visible=false
                                                            backbutton3.visible=true

                                                            this.appintrobutton.hide()
                                                            this.doingmeditatebutton.hide()
                                                              this.doingmeditatebutton.hide()
                                                              this.apptypesbutton.hide()
                                                                this.appsourcesbutton.hide()
                                                              

                                                            
                                                                })

                                                                this.appsourcesbutton.mousePressed(()=>{
                                                                                                                                                                                                    buttonclicksound.play()
                                                            gamestate="meditate1"
                                                            backbutton4.visible=false
                                                            backbutton3.visible=true

                                                            this.appintrobutton.hide()
                                                            this.doingmeditatebutton.hide()
                                                              this.doingmeditatebutton.hide()
                                                              this.apptypesbutton.hide()
                                                                this.appsourcesbutton.hide()
                                                              

                                                            
                                                                })
      

 


//create a blue boder1
border1 = createSprite(750,10,1290,10);
border1.shapeColor=("red");
border1.visible=false

//create a blue border2
border2 = createSprite(100,400,10,900);
border2.shapeColor=("red");
border2.visible=false

//create a blue border3
 border3 = createSprite(1400,500,10,1290);
border3.shapeColor=("red");
border3.visible=false

//create a blue border4
border4 = createSprite(750,650,1290,10);
border4.shapeColor=("red");
border4.visible=false

// Make yellow squares on border for decoration

//make a goalpost for player paddle
goal1 = createSprite(750,560,400,20);
goal1.shapeColor=("red");
goal1.visible=false

goal2 = createSprite(550,600,20,100);
goal2.shapeColor=("red");
goal2.visible=false

goal3 = createSprite(950,600,20,100);
goal3.shapeColor=("red");
goal3.visible=false


//make a playerpaddle
playerpaddle = createSprite(width/2,520,50,30);
playerpaddle.shapeColor=("green");
playerpaddle.visible=false


//make a goalpost for computerpaddle
goal4 = createSprite(750,90,400,20);
goal4.shapeColor=("red");
goal4.visible=false

goal5 = createSprite(550,50,20,100);
goal5.shapeColor=("red");
goal5.visible=false

goal6 = createSprite(950,50,20,100);
goal6.shapeColor=("red");
goal6.visible=false



//make a computer paddle
computerpaddle = createSprite(305,130,50,30);
computerpaddle.shapeColor=("green");
computerpaddle.visible=false


//make a center line
lin = createSprite(750,height/2,1290,5);
lin.shapeColor=("red");
lin.visible=false

//make a ball at the centre
ball = createSprite(width/2,height/2,40,40);
ball.shapeColor=("yellow");
ball.visible=false

scorer1 = createSprite(750,630,200,25);
scorer1.shapeColor=("orange");
scorer1.visible=false

///////////////////////////////////////

road=createSprite(width/2-37,height/2+15,1150,500)
road.shapeColor=("black")
road.visible=false

strip1=createSprite(375,height/2,20,70)
strip1.shapeColor=("white")
strip1.visible=false

strip2=createSprite(375,height/2+150,20,70)
strip2.shapeColor=("white")
strip2.visible=false

strip3=createSprite(375,height/2-150,20,70)
strip3.shapeColor=("white")
strip3.visible=false

strip4=createSprite(875,height/2,20,70)
strip4.shapeColor=("white")
strip4.visible=false

strip5=createSprite(875,height/2+150,20,70)
strip5.shapeColor=("white")
strip5.visible=false

strip6=createSprite(875,height/2-150,20,70)
strip6.shapeColor=("white")
strip6.visible=false

boundary1= createSprite(720,110,1150,20);
boundary1.visible=false

boundary2 = createSprite(720,600,1150,20);
boundary2.visible=false

boundary3=createSprite(1285,height/2+15,20,500);
boundary3.visible=false

boundary4=createSprite(155,height/2+15,20,500);
boundary4.visible=false

 
car1=createSprite(250,height/2,50,100); 
//car1.velocityY=4
car1.shapeColor=("red");    
car1.visible=false

car2=createSprite(500,height/2,50,100); 
car2.shapeColor=("blue"); 
//car2.velocityY=-4
car2.visible=false

car3=createSprite(750,height/2,50,100); 
car3.shapeColor=("green"); 
//car3.velocityY=4
car3.visible=false

car4=createSprite(1000,height/2,50,100); 
car4.shapeColor=("yellow"); 
//car4.velocityY=-4
car4.visible=false

car5=createSprite(1250,height/2,50,100); 
car5.shapeColor=("#837171"); 
//car4.velocityY=-4
car5.visible=false

endbox=createSprite(1345,height/2,100,150)
endbox.shapeColor=("yellow")
endbox.visible=false

startbox=createSprite(100,height/2,100,150)
startbox.shapeColor=("blue")
startbox.visible=false

sam = createSprite(150,height/2,20,20);
sam.addAnimation("rutuinforestidle1",rutuinforestidle);
sam.addAnimation("rutuinforestrunning1",rutuinforestrunning);
//sam.debug=true
sam.setCollider("rectangle",-200,0,200,450)
sam.visible=false
sam.scale=0.3;


////////////////////////////////////////////////////////////////////

spacecraft=createSprite(200,height/2,100,50)
spacecraft.addImage(spacecraftimage)
spacecraft.visible=false
spacecraft.scale=0.5


////////////////////////////////////////////////////

basket=createSprite(width/2,600,30,30)
basket.addImage(basketimage)
basket.scale=0.5
basket.visible=false
//basket.debug=true


/////////////////////////////////////////////////////////////////


bg = createSprite(144,356,10,10);
bg.addImage(bg_image);
bg.visible=false


//foot ground
fg=createSprite(width/2,height,width,12);
fg.addImage(fg_image)
fg.visible=false
//bird
bird = createSprite(225,height/2-150,10,10)
bird.addImage(bird_image);
bird.scale=0.2
//bird.debug=true
bird.setCollider("rectangle",0,0,300,300)
bird.visible=false

//pipe group
pipe1Group = new Group();
pipe2Group = new Group();

//scoring

//restarting the game
restart = createSprite(width/2,500,10,10);
restart.addImage(r);
restart.visible=false;
restart.scale = 0.5;
restart.depth=fg.depth
restart.depth=restart.depth+1

meditator=createSprite(1200,550,40,40)
meditator.addImage(meditatorimg)
meditator.scale=0.7
meditator.visible=false
 
appnextbutton=createSprite(1200,290,50,50)
appnextbutton.addImage(levelnextbuttonimage)
appnextbutton.scale=0.3
appnextbutton.visible=false

appnextbutton2=createSprite(1220,230,50,50)
appnextbutton2.addImage(levelnextbuttonimage)
appnextbutton2.scale=0.3
appnextbutton2.visible=false

appbackbutton=createSprite(900,290,50,50)
appbackbutton.addImage(levelbackbuttonimage)
appbackbutton.scale=0.3
appbackbutton.visible=false

appbackbutton2=createSprite(880,230,50,50)
appbackbutton2.addImage(levelbackbuttonimage)
appbackbutton2.scale=0.3
appbackbutton2.visible=false

}

 

function draw() {
  background(backgroundimg)
  console.log(windowWidth,windowHeight)
if(gamestate==="level1game"){
//translate(  -rutuinforest.spt.x + width/2 , 0);
backbutton4.visible=true
backbutton3.visible=false

if(citybackground.x<500){
  citybackground.x= width/2  
    
  }
  score1 = score1 + getFrameRate()/60
              time = time-getFrameRate()/1000
 
}

if(gamestate==="level2game"){
  //translate(  -rutuinforest.spt.x + width/2 , 0);
  backbutton4.visible=true
  backbutton3.visible=false
  
  if(snowbackground.x<270){
    snowbackground.x= width/2+400  
      
    }
  score1 = score1 + getFrameRate()/60
               // time = time-getFrameRate()/1000

             
   
  }

if(forestfruitsgroup.isTouching(rutuinforest.spt)){
  forestfruitsgroup.destroyEach()
  forestenergy=forestenergy+5
 
}

if(forestobstaclegroup.isTouching(rutuinforest.spt)){
  
  playerpromise=playerpromise-50
  forestobstaclegroup.destroyEach()
  collisionsound.play()
}

if(candycanegroup.isTouching(santarutu)){
  candycanegroup.destroyEach()
  candycanecollected=candycanecollected+3

}

if(snowobstaclegroup.isTouching(santarutu)){
  
santalife=santalife-100
  snowobstaclegroup.destroyEach()
  collisionsound.play()
}

if(gamestate==="level3game"){

 if(skybackground.x<450){
    skybackground.x= width/2+100 
      
    }

    if(skyobstaclegroup1.isTouching(rutuplane)){
      skyobstaclegroup1.destroyEach()
      planelife=planelife-50
      collisionsound.play()
    }

    if(skyobstaclegroup2.isTouching(rutuplane)){
      skyobstaclegroup2.destroyEach()
      planelife=planelife-50
      collisionsound.play()

    }
    if(skyobstaclegroup3.isTouching(rutuplane)){
      skyobstaclegroup3.destroyEach()
      planelife=planelife-50
      collisionsound.play()

    }

    if(skyobstaclegroup3.isTouching(planebullet)){
      skyobstaclegroup3.destroyEach()
      enemykilled=enemykilled-1

    }
}

if(gamestate==="level4game"){
  if(nightbackground.x<450){
    nightbackground.x= width/2+200
      
    }

    if(tomatocoin1group.isTouching(dino)){
      tomatocoin1group.destroyEach()
      dinoenergy=dinoenergy+30

    }

    if(tomatocoin2group.isTouching(dino)){
      tomatocoin2group.destroyEach()
      dinoenergy=dinoenergy+30


    }

    if(tomatocoin3group.isTouching(dino)){
      tomatocoin3group.destroyEach()
      dinoenergy=dinoenergy+30


    }

    if(rockgroup.isTouching(dino)){
      rockgroup.destroyEach()
      dinolife=dinolife-60

    }

    if(crowgroup.isTouching(dino)){
      crowgroup.destroyEach()
      dinolife=dinolife-60

    }

    if(wizardgroup.isTouching(dino)){
      wizardgroup.destroyEach()
      dinolife=dinolife-60

    }

    if(plantsgroup.isTouching(dino)){
      plantsgroup.destroyEach()
dinolife=dinolife-60
    }



}

if(gamestate==="level5game"){
  if(nightcitybackground.x<220){
    nightcitybackground.x= width/2+300
      
    }

    if(potiongroup.isTouching(zombiegroup)){
      zombiegroup.destroyEach()
      zombieremaining=zombieremaining-6
      potiongroup.destroyEach()
    }

    if(cplanegroup.isTouching(rutu)){
      rutulife=rutulife-50
cplanegroup.destroyEach()
    }

    if(barricadegroup.isTouching(rutu)){
      barricadegroup.destroyEach()
      rutulife=rutulife-50

    }

    if(zombiegroup.isTouching(rutu)){
      rutulife=rutulife-50
      zombiegroup.destroyEach()

    }

    if(crowgroup2.isTouching(rutu)){
      rutulife=rutulife-50
      crowgroup2.destroyEach()

    }



}

if(gamestate==="level6game"){

  if(skycitybackground.x<220){
    skycitybackground.x= width/2+300
      
    }

    if(corona1group.isTouching(vaccinegroup)){
      corona1group.destroyEach()
      coronaremaining=coronaremaining-5

vaccinegroup.destroyEach()
    }

    if(corona2group.isTouching(vaccinegroup)){
      corona2group.destroyEach()
vaccinegroup.destroyEach()
coronaremaining=coronaremaining-5

    }

    if(corona3group.isTouching(vaccinegroup)){
      corona3group.destroyEach()
vaccinegroup.destroyEach()
coronaremaining=coronaremaining-5
    }

    if(maskgroup.isTouching(rutu)){
      maskgroup.destroyEach()
      immunity=immunity+10

    }

    if(corona1group.isTouching(rutu)){
      corona1group.destroyEach()
immunity=immunity-60
collisionsound.play()

    }

    if(corona2group.isTouching(rutu)){
      corona2group.destroyEach()
      immunity=immunity-60
      collisionsound.play()

    }

    if(corona3group.isTouching(rutu)){
      corona3group.destroyEach()
      immunity=immunity-60
      collisionsound.play()

    }

    if(ipersongroup.isTouching(rutu)){
      ipersongroup.destroyEach()
immunity=immunity-70
collisionsound.play()

    }

    if(barricade2group.isTouching(rutu)){
    barricade2group.destroyEach()
immunity=immunity-60
collisionsound.play()

    }

}


if(gamestate==="minigame1"){
rutugamelogo.visible=false
  minigamebackground1.visible=true


  this.minigame1.hide()
  this.minigame2.hide()
  this.minigame3.hide()
  this.minigame4.hide()
  this.minigame5.hide()

  backbutton4.visible=true
  backbutton3.visible=false

  border1.visible=true
  border2.visible=true
  border3.visible=true
  border4.visible=true

  goal1.visible=true
  goal2.visible=true
  goal3.visible=true
  goal4.visible=true
  goal5.visible=true
  goal6.visible=true

  playerpaddle.visible=true
  computerpaddle.visible=true

lin.visible=true
   
  ball.visible=true

 
    
  fill("black");


  textSize(40);
  text(computerscore,40,180);
  text(playerscore,40,250);
  
  if (keyDown(RIGHT_ARROW)) {
  playerpaddle.x=playerpaddle.x+12;}
  if (keyDown(LEFT_ARROW)) {
  playerpaddle.x=playerpaddle.x-12;}
  
  if (keyDown("space")&&gameState==="serve2") {
  ball.velocityX=-(random(12,13,14,15,16));  
  ball.velocityY=-(random(12,13,14,15,16));
  gameState="play";
    
  }
  ball.bounceOff(playerpaddle);
  ball.bounceOff(computerpaddle);
  ball.bounceOff(border1);
  ball.bounceOff(border2);
  ball.bounceOff(border3);
  ball.bounceOff(border4);
  ball.bounceOff(goal2);
  ball.bounceOff(goal3);
  ball.bounceOff(goal5);
  ball.bounceOff(goal6);
  computerpaddle.x=ball.x;
  
  fill("black");
  textSize(20);
 
  if (ball.isTouching(scorer1)) {
  gameState="serve2"; 
  }
  
  if (ball.isTouching(scorer1)) {
  computerscore=computerscore+1;
  reset();
    
  }
 
  if (keyDown("r")&&gameState==="over") {
  gameState="serve2";
  computerscore=0;
  
  }
  
  if(computerscore===5&&gameState==="serve2"){
    gameoversound.play()
  }
  
  
  
  playerpaddle.collide(border3);
  playerpaddle.collide(border4);
  
  playerpaddle.collide(border2);
  ball.collide(scorer1);
  
  
}

/////////////////////////////////////////////////////

if(gamestate==="minigame2"){
minigamebackground2.visible=true
rutugamelogo.visible=false
backbutton4.visible=true

  this.minigame1.hide()
  this.minigame2.hide()
  this.minigame3.hide()
  this.minigame4.hide()
  this.minigame5.hide()

  sam.visible=true

  boundary1.visible=true
  boundary2.visible=true
  boundary3.visible=true
  boundary4.visible=true
 

  car1.visible=true
  car2.visible=true
  car3.visible=true
  car4.visible=true
  car5.visible=true

  road.visible=true

  strip1.visible=true
  strip2.visible=true
  strip3.visible=true
  strip4.visible=true
  strip5.visible=true
  strip6.visible=true




  endbox.visible=true
  startbox.visible=true

  sam.changeAnimation("rutuinforestidle1",rutuinforestidle)


  if(keyDown("right")){
sam.x=sam.x+10
sam.changeAnimation("rutuinforestrunning1",rutuinforestrunning)

  }

  if(keyDown("left")){
    sam.x=sam.x-10
    sam.changeAnimation("rutuinforestrunning1",rutuinforestrunning)

      }

      if(keyDown("SPACE")){

        car1.velocityY=14
        car2.velocityY=-14
        car3.velocityY=14
        car4.velocityY=-14
        car5.velocityY=14

      }

      car1.bounceOff(boundary1);
      car1.bounceOff(boundary2);
      car2.bounceOff(boundary1);
      car2.bounceOff(boundary2);
      car3.bounceOff(boundary1);
      car3.bounceOff(boundary2);
      car4.bounceOff(boundary1);
      car4.bounceOff(boundary2);
      car5.bounceOff(boundary1);
      car5.bounceOff(boundary2);

      if(car1.isTouching(sam)&&gamestate2==="servestart"||car2.isTouching(sam)&&gamestate2==="servestart"||car3.isTouching(sam)&&gamestate2==="servestart"||car4.isTouching(sam)&&gamestate2==="servestart"||car5.isTouching(sam)&&gamestate2==="servestart"){
       sam.x=150
       sam.y=height/2
collisionsound.play()
       livesofsam=livesofsam-1
          }
  
          if(livesofsam===0){
gamestate2="serveend"
          }
        
          if(sam.isTouching(endbox)){
gamestate2="servewin"


          }
          if(gamestate2==="serveend"){
            car1.velocityY=0
            car2.velocityY=0
            car3.velocityY=0
            car4.velocityY=0
            car5.velocityY=0
            sam.visible=false
gamerestartbutton.visible=true
gamerestartbutton.x=1200
gamerestartbutton.y=50
gamebackbuttton.visible=true
gamebackbuttton.x=400
gamebackbuttton.y=50


          }

          if(gamestate2==="servewin"){
            car1.velocityY=0
            car2.velocityY=0
            car3.velocityY=0
            car4.velocityY=0
            car5.velocityY=0
            sam.visible=false
gamerestartbutton.visible=true
gamerestartbutton.x=1200
gamerestartbutton.y=50
gamebackbuttton.visible=true
gamebackbuttton.x=400
gamebackbuttton.y=50


          }

         
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


if(gamestate==="minigame3"){

  gamestate2="servestart2"

  if(gamestate2==="servestart2"){
backbutton4.visible=true
rutugamelogo.visible=false

this.minigame1.hide()
this.minigame2.hide()
this.minigame3.hide()
this.minigame4.hide()
this.minigame5.hide()



spacecraft.collide(invisibleground7)
spacecraft.collide(invisibleground8)

minigamebackground3.visible=true
spacecraft.visible=true

spacedistance=spacedistance+Math.round(frameCount%10)

if(minigamebackground3.x<600){
  minigamebackground3.x=width/2


}

if(gamestate2==="servestart2"){

shootasteroid()
shootasteroid2()
shootasteroid3()
shootasteroid4()
}

if(keyDown("SPACE")){
shootspacebullet1(spacecraft.x,spacecraft.y+10)

}

if(keyDown("up")){
spacecraft.y=spacecraft.y-6

}

if(keyDown("down")){
  spacecraft.y=spacecraft.y+6
  
  }

  if(asteroidgroup.isTouching(spacebulletgroup)){
    asteroidgroup.destroyEach()
    spacebulletgroup.destroyEach()

  }

  if(asteroid2group.isTouching(spacebulletgroup)){
    asteroid2group.destroyEach()
    spacebulletgroup.destroyEach()

  }

  if(asteroid3group.isTouching(spacebulletgroup)){
    asteroid3group.destroyEach()
    spacebulletgroup.destroyEach()

  }

  if(asteroid4group.isTouching(spacebulletgroup)){
    asteroid4group.destroyEach()
    spacebulletgroup.destroyEach()

  }


  if(asteroidgroup.isTouching(invisibleground8)||asteroidgroup.isTouching(spacecraft)){
    asteroidgroup.destroyEach()
    collisionsound.play()
spacecraftlives=spacecraftlives-1
  }

  if(asteroid2group.isTouching(invisibleground8)||asteroid2group.isTouching(spacecraft)){
    asteroid2group.destroyEach()
    collisionsound.play()

    spacecraftlives=spacecraftlives-1

  }

  if(asteroid3group.isTouching(invisibleground8)||asteroid3group.isTouching(spacecraft)){
    asteroid3group.destroyEach()
    collisionsound.play()

    spacecraftlives=spacecraftlives-1

  }

  if(asteroid4group.isTouching(invisibleground8)||asteroid4group.isTouching(spacecraft)){
    asteroid4group.destroyEach()
    collisionsound.play()

    spacecraftlives=spacecraftlives-1

  }

 
  }

  if(spacecraftlives===0&&gamestate2==="servestart2"){
    spacecraft.x=width/2+40
    spacecraft.y=height/2
    spacecraft.scale=1.2
    asteroidgroup.destroyEach()
    asteroid2group.destroyEach()
    asteroid3group.destroyEach()
    asteroid4group.destroyEach()
    spacebulletgroup.destroyEach()

    minigamebackground3.velocityX=0
    backbutton4.visible=false
    gamerestartbutton.visible=true
    gamebackbuttton.visible=true
    }


    if(mousePressedOver(gamerestartbutton)&&spacecraftlives===0){
      spacecraft.scale=0.5
      spacecraft.x=100
      spacecraft.y=height/2
      spacecraftlives=3
      gamerestartbutton.visible=false
      gamebackbuttton.visible=false
      minigamebackground3.velocityX=-7
      spacedistance=0
      buttonclicksound.play()



    }

    if(mousePressedOver(gamerestartbutton)&&spacedistance===10000||mousePressedOver(gamerestartbutton)&&spacedistance>10000){
      buttonclicksound.play()

      spacecraft.scale=0.5
      spacecraft.x=100
      spacecraft.y=height/2
      spacecraftlives=3
      spacedistance=0
      gamerestartbutton.visible=false
      gamebackbuttton.visible=false
      minigamebackground3.velocityX=-7
      spacedistance=0

  
    }

 



    if(mousePressedOver(gamebackbuttton)&&spacecraftlives===0){
      buttonclicksound.play()

      gamestate="showminigames"
      asteroidgroup.destroyEach()
      asteroid2group.destroyEach()
      asteroid3group.destroyEach()
      asteroid4group.destroyEach()
      spacebulletgroup.destroyEach()

      spacecraft.scale=0.5
      spacecraft.x=100
      spacecraft.y=height/2
      spacecraft.visible=false
      spacecraftlives=3
      gamerestartbutton.visible=false
      gamebackbuttton.visible=false
      minigamebackground3.visible=false
      minigamebackground3.velocityX=-7

backbutton3.visible=true
rutugamelogo.visible=true


    }


    if(mousePressedOver(gamebackbuttton)&&spacedistance>10000){
      buttonclicksound.play()

      gamestate="showminigames"
      spacecraft.scale=0.5
      spacecraft.x=100
      spacecraft.y=height/2
      spacecraft.visible=false
      spacecraftlives=3
      spacedistance=0
      gamerestartbutton.visible=false
      gamebackbuttton.visible=false
      minigamebackground3.visible=false
      minigamebackground3.velocityX=-7
      backbutton4.visible=false

backbutton3.visible=true
rutugamelogo.visible=true


    }

    if(spacedistance===10000||spacedistance>10000&&spacecraftlives>0){
      spacecraft.x=width/2+40
      spacecraft.y=height/2
      spacecraft.scale=1.2
      asteroidgroup.destroyEach()
      asteroid2group.destroyEach()
      asteroid3group.destroyEach()
      asteroid4group.destroyEach()
      spacebulletgroup.destroyEach()
      minigamebackground3.velocityX=0
      backbutton4.visible=false
      gamerestartbutton.visible=true
      gamebackbuttton.visible=true  
    }





}


////////////////////////////////////////////////////////////////////////////////////////////////

if(gamestate==="minigame4"){

 

  backbutton4.visible=true
  rutugamelogo.visible=false
  
  this.minigame1.hide()
  this.minigame2.hide()
  this.minigame3.hide()
  this.minigame4.hide()
  this.minigame5.hide()

background(farmbackground)

if(keyDown("SPACE")&&gamestate2=="serveintroduce"){

  gamestate2="servebegin"


}


if(gamestate2==="servebegin"){

  basket.visible=true
  spawnfruits1()
  spawnfruits2()
  spawnfruits3()
  spawnfruits4()


}



if(keyDown("right")){
  basket.x=basket.x+20

}

if(keyDown("left")){
  basket.x=basket.x-20

}

if(fruits1group.isTouching(basket)){
  fruits1group.destroyEach()
  fruitscollected=fruitscollected+1
}

if(fruits2group.isTouching(basket)){
  fruits2group.destroyEach()
  fruitscollected=fruitscollected+1

}

if(fruits3group.isTouching(basket)){
  fruits3group.destroyEach()
  fruitscollected=fruitscollected+1

}

if(fruits4group.isTouching(basket)){
  fruits4group.destroyEach()
  fruitscollected=fruitscollected+1

}

if(fruits1group.isTouching(invisibleground9)){
fruitsmissed=fruitsmissed-1
fruits1group.destroyEach()
collisionsound.play()

}

if(fruits2group.isTouching(invisibleground9)){
  fruitsmissed=fruitsmissed-1
  fruits2group.destroyEach()
  collisionsound.play()


  }

  if(fruits3group.isTouching(invisibleground9)){
    fruitsmissed=fruitsmissed-1
    collisionsound.play()

    fruits3group.destroyEach()

    }

    if(fruits4group.isTouching(invisibleground9)){
      fruitsmissed=fruitsmissed-1
      fruits4group.destroyEach()
      collisionsound.play()


      }

      if(fruitsmissed===0){
gamestate2="mini4end"



      }

      if(gamestate2==="mini4end"){
basket.x=width/2
basket.y=height/2
basket.scale=1
fruits1group.destroyEach()
fruits2group.destroyEach()
fruits3group.destroyEach()
fruits4group.destroyEach()
backbutton4.visible=false
gamerestartbutton.visible=true
gamebackbuttton.visible=true



      }

      if(mousePressedOver(gamerestartbutton)&&gamestate2==="mini4end"){
        buttonclicksound.play()

        gamestate2="servebegin"
fruitsmissed=3
fruitscollected=0
gamerestartbutton.visible=false
gamebackbuttton.visible=false
basket.scale=0.5
basket.x=width/2
basket.y=600
      }


      if(mousePressedOver(gamerestartbutton)&&gamestate2==="minigamewon4"){
        buttonclicksound.play()

        gamestate2="servebegin"
fruitsmissed=3
fruitscollected=0
gamerestartbutton.visible=false
gamebackbuttton.visible=false
basket.scale=0.5
basket.x=width/2
basket.y=600
      }

      if(mousePressedOver(gamebackbuttton)&&gamestate2==="mini4end"){
        buttonclicksound.play()

        gamestate="showminigames"
        gamestate2="serveintroduce"
        fruitsmissed=3
      fruitscollected=0
        gamerestartbutton.visible=false
        gamebackbuttton.visible=false
        basket.visible=false
        basket.scale=0.5
        basket.x=width/2
        basket.y=600
      background(backgroundimg)
      rutugamelogo.visible=true
      
      }


      if(mousePressedOver(gamebackbuttton)&&gamestate2==="minigamewon4"){
        buttonclicksound.play()

        gamestate="showminigames"
        gamestate2="serveintroduce"
        fruitsmissed=3
      fruitscollected=0
        gamerestartbutton.visible=false
        gamebackbuttton.visible=false
        basket.visible=false
        basket.scale=0.5
        basket.x=width/2
        basket.y=600
      background(backgroundimg)
      rutugamelogo.visible=true
      
      }


      if(fruitscollected===50&&gamestate==="minigame4"){
        gamestate2="minigamewon4"
        }
        
        if(gamestate2==="minigamewon4"){
          basket.x=width/2
          basket.y=height/2
          basket.scale=1
          fruits1group.destroyEach()
          fruits2group.destroyEach()
          fruits3group.destroyEach()
          fruits4group.destroyEach()
          backbutton4.visible=false
          gamerestartbutton.visible=true
          gamebackbuttton.visible=true
 
        
        }

        if(gamestate2==="servebegin"&&fruitsmissed===0){
gameoversound.play()

        }
        
}


if(gamestate==="minigame5"){

  
  backbutton4.visible=true
  rutugamelogo.visible=false
  
  this.minigame1.hide()
  this.minigame2.hide()
  this.minigame3.hide()
  this.minigame4.hide()
  this.minigame5.hide()
  if (gameState10===MIDDLE) {
    fg.visible=true
    bg.visible=true
    bird.x=225
    bird.visible=true
bird.velocityY=0
backbutton4.visible=true
bird.y=height/2-150
  }

  if (keyDown("space")&&gameState10===MIDDLE){
    gameState10=PLAY
    bird.visible=true
    bird.y=height/2-150
    }
  if(gameState10 === PLAY){
bird.x=225
    bird.visible=true
    fg.visible=true
    bg.visible=true
    backbutton3.visible=true

    pipe_move();
  
    //bird movement
  if (keyDown("space")&&gameState10===PLAY){
    bird.y = bird.y - 15;
    gameState10=PLAY
    }
    else{
    bird.velocityY = 5;
    }
   
    //foot ground movement
  fg.velocityX = -10;
  
  //repositioning foot ground
  if(fg.x < 137){
    fg.x = fg.width/2;
    }
  
    //game end
    if (bird.isTouching(pipe1Group) || bird.isTouching(pipe2Group)){
      collisionsound.play()
      gameState10 = END;
    }
    if(bird.isTouching(fg)){
      collisionsound.play()

      gameState10 = END;
    }
    
  if(frameCount % 75 === 0&& gameState10===PLAY){
  score10++;
  }
  }
  else if(gameState10 === END)  {
    bird.x=width/2
    bird.y=height/2-100
    bird.scale=1
  fg.velocityX = 0;
  bird.visible = true;
  backbutton4.visible=true
  pipe1Group.destroyEach()
  pipe2Group.destroyEach()

  pipe1Group.setVelocityXEach(0);
  pipe2Group.setVelocityXEach(0);
  pipe1Group.setLifetimeEach(-1);
  pipe2Group.setLifetimeEach(-1);
  restart.visible=true;
  }
    
  if(mousePressedOver(restart)&&gameState10===END){
    buttonclicksound.play()

    reset20();
    score10=0
  }


}

if(gamestate==="tellinstruction"){

  background("#c7620593")
  rutuinstart.visible=false

}

if(   gamestate==="showdreamappbuttoninfo"){
  background("#b8fa0281")


}


if(gamestate==="meditateintro"){
  background("#f0600073")

}

if(gamestate==="dreamappserve"){
  background(goodyogiimg)

}

  if(gamestate==="meditateintro"){
    background(buddhameditateimg)

  }

  if(gamestate==="meditationtypes"
  ||gamestate==="meditationtypes2"
  ||gamestate==="howtomeditate1"
  ||gamestate==="howtomeditate2"
  ||gamestate==="howtomeditate3"
  ||gamestate==="howtomeditate4"
  ||gamestate==="howtomeditate5"
  ||gamestate==="meditate1"){
    background(buddhameditateimg)


  }

  if(gamestate==="meditationtypes3"||gamestate==="meditationtypes4"||gamestate==="meditationtypes5"){
    background(badyogiimg)

  }

 
  if(gamestate==="meditate2"){
    background(shivbackimg)

      }

  drawSprites();

  if(mousePressedOver(levelnextbutton3)&&gamestate==="meditate1"){
gamestate="meditate2"
meditationsound.play()
  }


  if(gamestate==="meditate1"){
this.backgrbutton3.show()
levelnextbutton3.visible=true

textSize(80)
fill("#00b8f0")
textFont("Georgia")
stroke("green")
strokeWeight(10)
text("Lets meditate for 2 minute",320,100)
textSize(45)
fill("#ffa600")
textFont("Georgia")
stroke("green")
strokeWeight(5)
text("•   When you will cick the next button here....",150,170)
text("    you will see a light...you have to focus on ",150,230)
text("    that light while experiencing the calm music that will play...",150,290)
text("•   Get rid of all the stress by trying this 2 minutes meditation....",150,390)
text("    try to do mantra and mindfulness meditation following the steps",150,450)
text("    shown in last button...focus on the light and experience.....",150,520)


  }

  if(gamestate==="meditate2"){
    this.backgrbutton3.show()
    levelnextbutton3.visible=false
 
      }
 

  if(gamestate!=="howtomeditate1"){
    this.backgrbutton2.hide()

  }

  if(gamestate!=="meditate1"){
    this.backgrbutton3.hide()

  }

  if(gamestate==="howtomeditate1"){
    this.backgrbutton2.show()
    this.backgrbutton2.depth=this.backgrbutton2.depth-100
    textSize(80)
    fill("#02a2ff")
  textFont("Georgia")
  stroke("green")
  strokeWeight(10)
text("How to meditate??",420,100)
textSize(45)
fill("#ff0263")
textFont("Georgia")
stroke("#91ff02")
strokeWeight(5)
text("•  The basic meditation for kids and beginners is the mindfulness  ",150,190)
text("   and mantra meditations.........",150,250)
text("•  Now we will try to do these 2 meditations in some simple steps..",150,350)

levelnextbutton.visible=true


}

if(gamestate==="howtomeditate2"){
  textSize(80)
  fill("#02a2ff")
textFont("Georgia")
stroke("green")
strokeWeight(10)
text("Mindfulness meditation :",340,100)
textSize(45)
fill("#ff8800")
textFont("Georgia")
stroke("#ff0000")
strokeWeight(5)
text("Step 1 :   sit at your place and relax your body",250,190)
text("Step 2 :   try to just focus on your mind and ",250,290)
text("check the quality of your thoughts ",250,340)
text("Step 3 :   now try to control your breathing",250,440)
text("Step 4 :   in this, if negative thoughts disturb than see them ",250,540)
text("as coloured balloons and let them just go away and float away",250,590)

levelnextbutton2.visible=true
levelbackbutton4.visible=true
}

if(mousePressedOver(levelbackbutton4)&&gamestate==="howtomeditate2"){
gamestate="howtomeditate1"
levelbackbutton4.visible=false
levelnextbutton2.visible=false
}

if(gamestate==="howtomeditate3"){
  levelbackbutton4.visible=false
  levelbackbutton3.visible=true

  textSize(80)
  fill("#02a2ff")
textFont("Georgia")
stroke("green")
strokeWeight(10)
text("Mindfulness meditation :",340,100)
textSize(45)
fill("#ff8800")
textFont("Georgia")
stroke("#ff0000")
strokeWeight(5)
text("Step 5 :   feel like you are controlling your thoughts and not",250,190)
text("the thoughts are controlling you..feel this...",250,250)
text("Step 6 :   now order your mind to be in peace",250,350)
text("Step 7 :   now again repeat steps and silent your mind from this ",250,450)
text("daily world....... ",250,510)
text("step 8 :   peace..just peace around you",250,610)

levelnextbutton.visible=true
}

if(mousePressedOver(levelbackbutton3)&&gamestate==="howtomeditate3"){
  gamestate="howtomeditate2"
  levelbackbutton3.visible=false
  levelnextbutton.visible=false
  }


if(gamestate==="howtomeditate4"){

  levelbackbutton3.visible=false
  levelbackbutton4.visible=true

  textSize(80)
  fill("#02a2ff")
textFont("Georgia")
stroke("green")
strokeWeight(10)
text("Mantra meditation :",340,100)
textSize(45)
fill("#73ff00")
textFont("Georgia")
stroke("green")
strokeWeight(7)
text("Step 1 :  Sit at a calm place and relax your body",250,190)
text("Step 2 :  now remove all the thoughts you have",250,290)
text("and become blank in mind...",250,340)
text("Step 3 :  now calm your breathing...",250,440)
text("Step 4 :  basically, there will be 3 mantras OM, HUM & AH",250,540)
text("Step 5 :  Now, start meditating by chanting these mantra",250,640)

levelnextbutton2.visible=true


}

if(mousePressedOver(levelbackbutton4)&&gamestate==="howtomeditate4"){
  gamestate="howtomeditate3"
  levelbackbutton4.visible=false
  levelnextbutton2.visible=false
  }

if(gamestate==="howtomeditate5"){
  levelbackbutton4.visible=false
  levelbackbutton3.visible=true
  levelnextbutton.visible=true

  textSize(80)
  fill("#02a2ff")
textFont("Georgia")
stroke("green")
strokeWeight(10)
text("Mantra meditation :",340,100)
textSize(45)
fill("#73ff00")
textFont("Georgia")
stroke("green")
strokeWeight(7)

text("Step 6 :  First take a deep breathe and when exhaling chant OM",200,190)
text("Step 7 :  keep on chanting this mantra for atleast 10 times....",200,290)
text("Step 8 :  use same technique to chant mantras like drim,",200,390)
text("vam,lam,swaha etc...one by one chant all and feel ",200,440)
text("the ease in these mantras",200,490)
text("meditate for 20 minutes before opening your eyes",200,540)

levelnextbutton2.visible=false


}

if(mousePressedOver(levelbackbutton3)&&gamestate==="howtomeditate5"){
  gamestate="howtomeditate4"
  levelbackbutton3.visible=false
  levelnextbutton.visible=true
  levelnextbutton.visible=false

  }

if(mousePressedOver(levelnextbutton)&&gamestate==="howtomeditate3"){
  gamestate="howtomeditate4"
  this.backgrbutton2.hide()
  levelnextbutton2.visible=true
  levelnextbutton.visible=false

  
  }


if(mousePressedOver(levelnextbutton2)&&gamestate==="howtomeditate2"){
  gamestate="howtomeditate3"
  this.backgrbutton2.hide()
  levelnextbutton2.visible=false
  
  
  }


  if(mousePressedOver(levelnextbutton2)&&gamestate==="howtomeditate4"){
    gamestate="howtomeditate5"
    this.backgrbutton2.hide()
    levelnextbutton2.visible=false
    levelnextbutton.visible=true

    
    }

if(mousePressedOver(levelnextbutton)&&gamestate==="howtomeditate1"){
gamestate="howtomeditate2"
this.backgrbutton2.hide()
levelnextbutton.visible=false


}
  
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  if(gamestate!=="meditationtypes3"||gamestate!=="meditationtypes4"||gamestate!=="meditationtypes5"){
levelbackbutton2.x=400
levelnextbutton2.x=1200

  }

  if(gamestate!=="meditationtypes"||gamestate!=="meditationtypes2"){
messagebox.x=1050
messagebox.y=350

  }

  if(gamestate==="meditateintro"){
    textSize(80)
    fill("#00b8f0")
  textFont("Georgia")
  stroke("green")
  strokeWeight(10)
text("What is Meditation??",420,100)
textSize(45)
fill("#f3ff47")
textFont("Georgia")
stroke("green")
strokeWeight(5)
text("•   Meditation does not mean to sit for years and concentrate",150,170)
text("    for years on something.....",150,230)
text("•   Meditation is a practice in which an individual uses a technique",150,310)
text("    such as mindfulness, or focusing the mind on a particular object,",150,380)
text("    thought, or activity to train attention and awareness, and achieve",150,450)
text("    a mentally,clear and emotionally calm and stable state.",150,520)


  }

  if(gamestate==="meditationtypes"){

    textSize(80)
    fill("#da7d04")
  textFont("Georgia")
  stroke("green")
  strokeWeight(10)
text("Types of Meditation??",420,70)
textSize(50)
fill("lightblue")
text("Hello",980,160)
textSize(25)
strokeWeight(7)

text("I am a meditation teacher and I am",855,200)
text("going to teach you types and ways",855,240)
text("to do meditation.......",855,280)

meditator.visible=true
messagebox.visible=true
messagebox.y=270
messagebox.scale=1
appnextbutton.visible=true
}

if(gamestate==="meditationtypes2"){

textSize(40)
fill("#fd8700")
stroke("green")

text("Types of meditation",885,160)
textSize(25)
strokeWeight(3)
fill("#ff00b3")
stroke("#00ff0d")
text("•    Mindfulness meditation",915,200)
text("•    Focused meditation",915,240)
text("•    Mantra meditation",915,280)

appbackbutton2.visible=true
appnextbutton2.visible=true
backbutton3.visible=true
meditator.visible=true
messagebox.visible=true
messagebox.y=270
messagebox.scale=1
appnextbutton.visible=false
}


if(gamestate==="meditationtypes3"){
  backbutton3.visible=true

  textSize(80)
  fill("#fd8f00")
textFont("Georgia")
stroke("green")
strokeWeight(10)
text("Mindfulness meditation",420,100)
textSize(45)
fill("#d1ff02")
textFont("Georgia")
stroke("green")
strokeWeight(5)
text("•   Mindfulness is the basic human ability to be fully present,",150,170)
text("    aware of where we are and what we`re doing, and not overly",150,230)
text("    reactive or overwhelmed by what`s going on around us.....",150,300)
text("•   Nearly every task we perform in a day—be it brushing our teeth, ",150,380)
text("    eating lunch, talking with friends or exercising—can be done ",150,450)
text("    more mindfully....",150,520)

levelnextbutton.visible=true
levelbackbutton.visible=true

  
  meditator.visible=false

  appnextbutton.visible=false
  }
  
  if(mousePressedOver(levelbackbutton)&&gamestate==="meditationtypes3"){
    buttonclicksound.play()
    gamestate="meditationtypes2"
    levelnextbutton.visible=false
    levelbackbutton.visible=false
  }

  if(mousePressedOver(levelnextbutton)&&gamestate==="meditationtypes3"){
    buttonclicksound.play()
    gamestate="meditationtypes4"
    levelnextbutton.visible=false
    levelbackbutton.visible=false
  }

  if(gamestate==="meditationtypes4"){
    backbutton3.visible=true

    textSize(80)
    fill("#fd8f00")
  textFont("Georgia")
  stroke("green")
  strokeWeight(10)
  text("Focused meditation",420,100)
  textSize(45)
  fill("#d1ff02")
  textFont("Georgia")
  stroke("green")
  strokeWeight(5)
  text("•   Focused meditation, also called focused attention",230,170)
  text("    meditation (FAM) can be a useful tool for people",230,230)
  text("•    who want to try using meditation for stress relief..",230,310)
  text("    This meditation style allows you to focus your ",230,380)
  text("    attention on an object ,sound, or sensation rather",230,450)
  text("    than trying to achieve a clear mind without a ",230,520)
  text("    specific focal point....",230,590)

  levelnextbutton2.x=1350
  levelbackbutton2.x=170

  levelnextbutton2.visible=true
  levelbackbutton2.visible=true
  
    
    meditator.visible=false
  
    appnextbutton.visible=false
    }

    if(mousePressedOver(levelbackbutton2)&&gamestate==="meditationtypes4"){
      buttonclicksound.play()
      gamestate="meditationtypes3"
      levelnextbutton2.visible=false
      levelbackbutton2.visible=false
    }
  
    if(mousePressedOver(levelnextbutton2)&&gamestate==="meditationtypes4"){
      buttonclicksound.play()
      gamestate="meditationtypes5"
      levelnextbutton2.visible=false
      levelbackbutton2.visible=false
    }


    if(gamestate==="meditationtypes5"){
      backbutton3.visible=true
  
      textSize(80)
      fill("#fd8f00")
    textFont("Georgia")
    stroke("green")
    strokeWeight(10)
    text("Mantra meditation",420,100)
    textSize(45)
    fill("#d1ff02")
    textFont("Georgia")
    stroke("green")
    strokeWeight(5)
    text("•   The practice of mantra meditation utilizes the silent repetition ",150,170)
    text("    of a word or phrase as the point of focus to help one a more ",150,230)
    text("    focused awareness.....",150,300)
    text("•   It aids in the slowing down of mental activity and thought. ...",150,380)
    text("    You'll live in the moment with a greater degree of mindfulness",150,450)
    text("    witnessing awareness.",150,520)
    
    levelbackbutton.visible=true
    
      
      meditator.visible=false
    
      appnextbutton.visible=false
      }

      if(mousePressedOver(levelbackbutton)&&gamestate==="meditationtypes5"){
        buttonclicksound.play()
        gamestate="meditationtypes4"
        levelnextbutton.visible=false
        levelbackbutton.visible=false
      }
    
    

if(mousePressedOver(appnextbutton)&&gamestate==="meditationtypes"){
gamestate="meditationtypes2"
backbutton3.visible=true
appbackbutton2.visible=true
appnextbutton.visible=false
appnextbutton2.visible=true

}


if(mousePressedOver(appnextbutton2)&&gamestate==="meditationtypes2"){
  gamestate="meditationtypes3"
  backbutton3.visible=false
  appbackbutton.visible=false
  appbackbutton2.visible=false
  appnextbutton.visible=false
  appnextbutton2.visible=false
  messagebox.visible=false
  }

if(mousePressedOver(appbackbutton2)&&gamestate==="meditationtypes2"){
  gamestate="meditationtypes"
  backbutton3.visible=true
  appnextbutton2.visible=false
  appbackbutton2.visible=false
  appnextbutton.visible=true
  
  }


  if(gamestate==="dreamappserve"){
    this.appintrobutton.show()
    this.doingmeditatebutton.show()
    this.apptypesbutton.show()
    this.appsourcesbutton.show()
    this.applogo.show()

  
  }

  if(gamestate!=="dreamappserve"){
    this.applogo.hide()

  }
 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

if(   gamestate==="showdreamappbuttoninfo"){

  this.dreambutton.show()

  textSize(80)
  fill("#2bfa02")
textFont("Georgia")
stroke("green")
strokeWeight(10)
text("My dream App",550,70)
textSize(40)
fill("#fa7202")
textFont("Georgia")
stroke("yellow")
strokeWeight(7)
text("My dream App that I would like to complete in future is 'Lets Meditate'",100,170)
text("...This app teaches us how to meditate for beginners like children to ",100,240)
text("make their behaviour calm and peaceful...This is an prototype of the",100,310)
text("App so it does not have many features..but the real app that i will ",100,380)
text("make will have more features and buttons to take you through deep experience..",100,450)


rutugamelogo.visible=false
  backbutton3.visible=true
  rutuinstart.visible=false
  this.storyButton.hide()
  this.instructionButton.hide()
  this.minigamesButton.hide()
this.aboutButton.hide()
}


if(mousePressedOver(backbutton4)&&gamestate==="dreamappserve"){
  buttonclicksound.play()
  gamestate="showdreamappbuttoninfo"
  this.appintrobutton.hide()
  this.doingmeditatebutton.hide()
  this.apptypesbutton.hide()
  this.appsourcesbutton.hide()
backbutton4.visible=false
}

if(mousePressedOver(backbutton3)&&gamestate==="meditateintro"){
  buttonclicksound.play()
  gamestate="dreamappserve"
  this.appintrobutton.show()
  this.doingmeditatebutton.show()
  this.apptypesbutton.show()
  this.appsourcesbutton.show()
backbutton4.visible=true
backbutton3.visible=false

}



if(mousePressedOver(backbutton3)&&gamestate==="meditationtypes"||
mousePressedOver(backbutton3)&&gamestate==="meditationtypes2"||
mousePressedOver(backbutton3)&&gamestate==="meditationtypes3"||
mousePressedOver(backbutton3)&&gamestate==="meditationtypes4"||
mousePressedOver(backbutton3)&&gamestate==="meditationtypes5"||
mousePressedOver(backbutton3)&&gamestate==="howtomeditate1"||
mousePressedOver(backbutton3)&&gamestate==="howtomeditate2"||
mousePressedOver(backbutton3)&&gamestate==="howtomeditate3"||
mousePressedOver(backbutton3)&&gamestate==="howtomeditate4"||
mousePressedOver(backbutton3)&&gamestate==="howtomeditate5"||
mousePressedOver(backbutton3)&&gamestate==="meditate1"||
mousePressedOver(backbutton3)&&gamestate==="meditate2"){

  meditationsound.stop()
  buttonclicksound.play()
  gamestate="dreamappserve"
  this.appintrobutton.show()
  this.doingmeditatebutton.show()
  this.apptypesbutton.show()
  this.appsourcesbutton.show()
backbutton4.visible=true
backbutton3.visible=false
meditator.visible=false
levelbackbutton.visible=false
levelnextbutton.visible=false
levelbackbutton2.visible=false
levelnextbutton2.visible=false
levelnextbutton3.visible=false

appnextbutton.visible=false
appnextbutton2.visible=false
appbackbutton2.visible=false

messagebox.visible=false

levelbackbutton3.visible=false
levelbackbutton4.visible=false

}

 

  if(gamestate=="serve"){
    this.dreamappbutton.show()

  }

  if(gamestate!=="serve"){
    this.dreamappbutton.hide()

  }


backbutton4.depth=bg.depth+10






if(gamestate==="serve"){
rutuinstart.visible=true


}

  if(gameState10===MIDDLE&&gamestate==="minigame5"){
    bird.scale=0.2
    fill("lightblue")
    textFont("impact")
    strokeWeight(15)
    stroke("green")
    textSize(80);
    text("Flappy ghost",550,200);

    fill("lightblue")
    textFont("impact")
    strokeWeight(15)
    stroke("green")
    textSize(50);
    text("Press and hold space to jump",450,300);
    text("Press space to start",550,400);


  }


if(gameState10 === END){
  fill("red")
  textFont("impact")
  strokeWeight(15)
  stroke("black")
  textSize(90);
  text("Game Over",550,650);
  fill("red")
  textFont("impact")
  strokeWeight(5)
  stroke("black")
  textSize(40);
  text("try again.....",950,650);
  strokeWeight(5)
  fill("black")
  textSize(40);
textFont("Georgia");
text("Your score  :  " + score10,900,400);


}


  if(gameState10 === PLAY&&gamestate==="minigame5"){

    bird.scale=0.2

    strokeWeight(5)
    fill("black")
    textSize(60);
    stroke("red")
textFont("Georgia");
text("Score:" + score10,width/2,70);
  }

  if(gamestate2==="minigamewon4"){
    fill("yellow")
    textFont("impact")
    strokeWeight(15)
    stroke("red")
    textSize(90);
    text("YOU WON...wohooooooo",400,650);
  
    
    
          } 



  if(gamestate2==="mini4end"){
    fill("red")
    textFont("impact")
    strokeWeight(15)
    stroke("black")
    textSize(90);
    text("Game Over",550,650);
    fill("red")
    textFont("impact")
    strokeWeight(5)
    stroke("black")
    textSize(40);
    text("try again.....",950,650);
    
    
          }


  if(gamestate==="minigame4"&&gamestate2=="serveintroduce"){
    fill("red")
    textFont("impact")
    stroke("yellow")
    textSize(70);
    text("Fruits catcher",500,100);
    textSize(60);
    fill("blue")
    textFont("impact")
    strokeWeight(6)
    stroke("green")
    text("Use right and left arrow keys to move",300,200);
    text("the basket....dont miss more than 3 ",300,280);
    text(" fruits and vegetables...collect 50",300,360);
    text("                         fruits to win☺☺",300,440);
    text("Press space to start the game....",310,520);


  }
 
  
  if(gamestate==="minigame4"&&gamestate2==="servebegin"){
    fill("green")
    stroke("yellow")
    strokeWeight(6)
    textFont("impact")
    textSize(70);
    text("Fruitscollected :  "+fruitscollected,100,100);
    text("Fruitsmissed :  "+fruitsmissed,900,100);

  }

  if(spacedistance===10000||spacedistance>10000&&spacecraftlives>0){

    textSize(60);
    fill("yellow")
    textFont("Algerian")
    stroke("red")
    text("Wooohhoooo!! you are out of danger now",50,620);


  }

  if(gamestate==="minigame3"&&gamestate2==="servestart2"&&spacecraftlives>0&&spacedistance<10000){
    textSize(60);
    fill("blue")
    textFont("Algerian")
    stroke("yellow")
    text("press space to shoot",width/2-300,100);
    fill("blue")
    textFont("impact")
    textSize(40);
   text("use up and down keys to move",width/2-200,40);

   fill("white")
    textFont("impact")
    textSize(70);
    text("×"+spacecraftlives,width/2+500,100);

    fill("lightblue")
    textFont("impact")
    textSize(40);
    text("Distance : "+spacedistance,width/2-600,100);



  }

  if(spacecraftlives===0){
    fill("red")
    textFont("Algerian")
    textSize(60);
    stroke("black")
   text("OH NO !! the asteroids have crushed you",50,620);



  }

  if(gamestate==="minigame2"&&gamestate2==="servestart"){
    textSize(60);
    fill("green")
    textFont("Algerian")
    stroke("blue")
    text("press space to start",width/2-300,100);
    fill("blue")
    textFont("impact")
    text("use arrow keys to move",width/2-300,670);


    textSize(80);
    textFont("impact");
    fill("black");
    stroke("yellow")
    strokeWeight(5)
   text("lives : "+livesofsam,150,90)


  }

  if(gamestate2==="serveend"){

    textSize(80);
    fill("red")
    textFont("Algerian")
    stroke("black")
    text("Game Over",width/2-200,60);
  }

  if(gamestate2==="servewin"){

    textSize(80);
    fill("yellow")
    textFont("Algerian")
    stroke("red")
    text("You won",width/2-200,60);
  }

  if(mousePressedOver(gamerestartbutton)&&gamestate2==="serveend"){
    buttonclicksound.play()


  gamestate2="servestart"
  livesofsam=5
  sam.x=150
  sam.y=height/2
  car1.y=height/2
  car2.y=height/2
  car3.y=height/2
  car4.y=height/2
  car5.y=height/2
gamebackbuttton.visible=false
gamerestartbutton.visible=false

  }


  if(mousePressedOver(gamerestartbutton)&&gamestate2==="servewin"){
    buttonclicksound.play()


    gamestate2="servestart"
    livesofsam=5
    sam.x=150
    sam.y=height/2
    car1.y=height/2
    car2.y=height/2
    car3.y=height/2
    car4.y=height/2
    car5.y=height/2
    gamebackbuttton.visible=false
    gamerestartbutton.visible=false
    }

  if(mousePressedOver(gamebackbuttton)&&gamestate2==="serveend"){
    buttonclicksound.play()


    gamestate="showminigames"
    gamestate2="servestart"
    livesofsam=5
    sam.x=150
    sam.y=height/2
    sam.visible=false
    car1.visible=false
    car2.visible=false
    car3.visible=false
    car4.visible=false
    car5.visible=false
    road.visible=false
    strip1.visible=false
    strip2.visible=false
    strip3.visible=false
    strip4.visible=false
    strip5.visible=false
strip6.visible=false
  boundary1.visible=false
  boundary2.visible=false
  boundary3.visible=false
  boundary4.visible=false
  startbox.visible=false
  endbox.visible=false
  minigamebackground2.visible=false
  gamerestartbutton.visible=false
  gamebackbuttton.visible=false
  gamerestartbutton.y=height/2
  gamebackbuttton.y=height/2
  backbutton4.visible=false
backbutton3.visible=true
rutugamelogo.visible=true
    }

    if(mousePressedOver(gamebackbuttton)&&gamestate2==="servewin"){
      buttonclicksound.play()


      gamestate="showminigames"
      gamestate2="servestart"
      livesofsam=5
      sam.x=150
      sam.y=height/2
      sam.visible=false
      car1.visible=false
      car2.visible=false
      car3.visible=false
      car4.visible=false
      car5.visible=false
      road.visible=false
      strip1.visible=false
      strip2.visible=false
      strip3.visible=false
      strip4.visible=false
      strip5.visible=false
  strip6.visible=false
    boundary1.visible=false
    boundary2.visible=false
    boundary3.visible=false
    boundary4.visible=false
    startbox.visible=false
    endbox.visible=false
    minigamebackground2.visible=false
    gamerestartbutton.visible=false
    gamebackbuttton.visible=false
    gamerestartbutton.y=height/2
    gamebackbuttton.y=height/2
    backbutton4.visible=false
  backbutton3.visible=true
  rutugamelogo.visible=true
      }

  if(gamestate==="minigame1"){
    textSize(80);
    fill("black")
    text(computerscore,40,250);
    text(playerscore,40,450);

    if (computerscore===5) {
   
      textSize(40);
      textFont("impact");
      fill("red");
       text("GAME OVER",300,230);
              text("click R to restart",300,270);

      gameState="over";
        
      }
      if (playerscore===5) {
       
      textSize(40);
      textFont("impact");
      fill("yellow");
       text("YOU WIN",100,230);
      gameState="over";
      }


      if (gameState==="serve2") {
        textSize(40);
        textFont("impact");
        fill("green");
         text("press space",width/2,height/2+50);  
        }
  
  }

 


  if(gamestate==="showminigames"){
    this.minigame1.show()
    this.minigame2.show()
    this.minigame3.show()
    this.minigame4.show()
    this.minigame5.show()

    
    this.aboutButton.hide()
    this.minigamesButton.hide()
    this.instructionButton.hide()
    this.storyButton.hide()
    
    this.level1.hide()
    this.level2.hide()
    this.level3.hide()
    this.level4.hide()
    this.level5.hide()
    this.level6.hide()
    
    rutuinstart.visible=false
    
      }


  
if(gamestate==="serve"){
aboutButton.show();
storyButton.show();
instructionButton.show();
minigamesButton.show();
this.minigame4.hide()
this.minigame5.hide()
this.storypreviousbutton1.hide();
this.storynextbutton1.hide();
this.storypreviousbutton2.hide()
this.storynextbutton2.hide()
rutugamelogo.visible=true
}
  
if(gamestate==="storywise1"){

  messagebox.visible=true
this.submitbutton.show()

this.aboutButton.hide()
this.minigamesButton.hide()
this.instructionButton.hide()
this.storyButton.hide()

fill("red")
textSize(40)
textFont("comfortaa")
  text("HELLO",980,250)
  textSize(30)
  text("can I know your name",900,280)}
 
  if(gamestate==="iknowname"){
    fill("green")
textSize(40)
textFont("comfortaa")
    text("Hello "+this.input1.value(),940,250)
    textSize(30)
  

    text("I am rutu.." ,980,290)
   // text("and i am going to help you in" ,870,320)
    this.storynextbutton1.show();
    this.storypreviousbutton1.show()

  }

  if(gamestate==="storywise2"){
    fill("red")
textSize(40)
textFont("comfortaa")
    text("And ",1000,250)
    textSize(30)
  

    text("you have to help me " ,920,280)
    text("to complete this adventures " ,880,310)
    text("and save the world" ,970,340)
  
    this.storypreviousbutton2.show()
    this.storynextbutton2.show()
  }


 if(  gamestate==="tellaboutme"){
  this.aboutButton.hide()
  this.minigamesButton.hide()
  this.instructionButton.hide()
  this.storyButton.hide()
  rutugamelogo.visible=false
    fill("red")
    textSize(40)
    textFont("Algerian")
      text("my maker is shivam",500,100)
      fill("blue")
      text("A proud",600,150)
      text(" whitehat junior coder",430,200)
      fill("yellow")
      text("completed C-48",520,250)}


      if(gamestate==="tellinstruction"){
        this.aboutButton.hide()
        this.minigamesButton.hide()
        this.instructionButton.hide()
        this.storyButton.hide()
        rutuinstart.y=height/2
        rutugamelogo.visible=false

rutuinstart.x=width/2
          fill("red")
stroke("yellow")
strokeWeight(10)
          textSize(80)
          textFont("impact")
            text("Rutu`s   Adventures",500,100)

            fill("lightblue")
            stroke("green")
            strokeWeight(5)
                      textSize(40)
                      textFont("Georgia")
                        text("This game is about a cute boy rutu whose lifes some situations are converted",100,170)
                        text("to a game form.....Each adventurous level has its own moral..... ",100,240)
                        text("Mini games are small addictive games that we can play in free time....",100,310)
                        text("Making this game was also a adventure as I have to make this game under ",100,380)
                        text(" 100 images....This game is meant for teaching life values to small children",100,450)
                        text("in a fun way....Each level has both winning and losing conditions....So try",100,520)
                        text("to win all the levels of adventures and minigames ☺☺",100,590)

            


           }

            if(  gamestate==="storywise3"){
              this.aboutButton.hide()
              this.minigamesButton.hide()
              this.instructionButton.hide()
              this.storyButton.hide()
               messagebox.visible=true
            this.storypreviousbutton3.show();
            this.storynextbutton3.show();

            fill("green")
            textSize(40)
            textFont("comfortaa")
              text("so lets start",974,270)
              fill("green")
              text("with this astonishing",890,310)
              text("adventure",980,340)


          
            }

            if(gamestate==="levels"){

              this.level1.show()
              this.level2.show()
              this.level3.show() 
              this.level4.show()
              this.level5.show()
              this.level6.show()
              backbutton4.visible=false
              backbutton3.visible=true

            }

            if(gamestate==="level1story"){
              this.level1.hide()
              this.level2.hide()
              this.level3.hide()
              this.level4.hide()
              this.level5.hide()
              this.level6.hide()

              level1story();
              levelbackbutton.visible=true
              levelnextbutton.visible=true
            }

            if(gamestate==="level2story"){
              this.level1.hide()
              this.level2.hide()
              this.level3.hide()
              this.level4.hide()
              this.level5.hide()
              this.level6.hide()
              level2story();
              levelbackbutton.visible=true
              levelnextbutton.visible=true
            }

            if(gamestate==="level3story"){
              this.level1.hide()
              this.level2.hide()
              this.level3.hide()
              this.level4.hide()
              this.level5.hide()
              this.level6.hide()
              level3story();
              levelbackbutton.visible=true
              levelnextbutton.visible=true
            }

            if(gamestate==="level4story"){
              this.level1.hide()
              this.level2.hide()
              this.level3.hide()
              this.level4.hide()
              this.level5.hide()
              this.level6.hide()
              level4story();
              levelbackbutton.visible=true
              levelnextbutton.visible=true
            }

            
            if(gamestate==="level5story"){
              this.level1.hide()
              this.level2.hide()
              this.level3.hide()
              this.level4.hide()
              this.level5.hide()
              this.level6.hide()
              level5story();
              levelbackbutton.visible=true
              levelnextbutton.visible=true
            }

            if(gamestate==="level6story"){
              this.level1.hide()
              this.level2.hide()
              this.level3.hide()
              this.level4.hide()
              this.level5.hide()
              this.level6.hide()
              level6story();
              levelbackbutton.visible=true
              levelnextbutton.visible=true
            }


            if(gamestate==="1levelstorybut2"){
              this.level1.hide()
              this.level2.hide()
              this.level3.hide()
              this.level4.hide()
              this.level5.hide()
              this.level6.hide()
              level1storybut2();
              levelbackbutton2.visible=true
              levelnextbutton2.visible=true
            }

            if(gamestate==="2levelstorybut2"){
              this.level1.hide()
              this.level2.hide()
              this.level3.hide()
              this.level4.hide()
              this.level5.hide()
              this.level6.hide()
              level2storybut2();
              levelbackbutton2.visible=true
              levelnextbutton2.visible=true
            }

            if(gamestate==="3levelstorybut2"){
              this.level1.hide()
              this.level2.hide()
              this.level3.hide()
              this.level4.hide()
              this.level5.hide()
              this.level6.hide()
              level3storybut2();
              levelbackbutton2.visible=true
              levelnextbutton2.visible=true
            }

            if(gamestate==="4levelstorybut2"){
              this.level1.hide()
              this.level2.hide()
              this.level3.hide()
              this.level4.hide()
              this.level5.hide()
              this.level6.hide()
              level4storybut2();
              levelbackbutton2.visible=true
              levelnextbutton2.visible=true
            }

            if(gamestate==="5levelstorybut2"){
              this.level1.hide()
              this.level2.hide()
              this.level3.hide()
              this.level4.hide()
              this.level5.hide()
              this.level6.hide()
              level5storybut2();
              levelbackbutton2.visible=true
              levelnextbutton2.visible=true
            }

            if(gamestate==="6levelstorybut2"){
              this.level1.hide()
              this.level2.hide()
              this.level3.hide()
              this.level4.hide()
              this.level5.hide()
              this.level6.hide()
              level6storybut2();
              levelbackbutton2.visible=true
              levelnextbutton2.visible=true
            }

            if(gamestate==="level1game"){
            
fill("pink")
textSize(80)
textFont("Algerian")
stroke("blue")
strokeWeight(5)
              text("Energy: "+ forestenergy, 1000,70);
              fill("orange")
textSize(50)
textFont("Algerian")
stroke("blue")
strokeWeight(5)
              text("Time Left: "+ time, 150,50);

              rutugamelogo.visible=false
              rutuinstart.visible=false
              citybackground.visible=true
             rutuinforest.spt.visible=true

             rutuinforest.rutuapplyGravity();
             rutuinforest.spt.collide(foresttilesgroup);
             rutuinforest.spt.collide(invisibleground1);
             rutuinforest.spt.collide(invisiblewall1);
             spawnforestobstacles()
             spawnforestfruitsandvegetables()
             showplayerpromise()
             forestobstaclegroup.setVelocityEach(-1,0)
             forestfruitsgroup.setVelocityEach(-1,0)

              citybackground.velocityX=0
            
             
             //Calling various function to controll mario
            if (keyDown("left"))  
             { 
              rutuinforest.rutumoveLeft();
             
             }
             if (keyDown("right")) 
             { 
            //  time = time-frameCount/20000;

              rutuinforest.spt.changeAnimation("rutuinforestrunning1",rutuinforestrunning);
              citybackground.velocityX=-(8 + 1*score1/20000)
              forestobstaclegroup.setVelocityEach(-(8 + 1*score1/4000),0)
              forestfruitsgroup.setVelocityEach(-(8 + 1*score1/4000),0)
             }

             if (keyDown("up") && rutuinforest.spt.velocityY===0) 
             {
              rutuinforest.rutujump();
             }

             if( rutuinforest.spt.y<500){
              rutuinforest.spt.changeAnimation("rutuinforestjump",rutuinforestjump);

             }
            }

            
            if(gamestate==="level2game"){

              image(candycaneimage,1050,40,100,100)
              fill("black")
              strokeWeight(5)
              textSize(60)
              stroke("yellow")
              text(" : "+candycanecollected,1150,100)
              santarutu.visible=true
              snowbackground.visible=true
                           rutugamelogo.visible=false
                           backbutton3.visible=false
                           rutuinstart.visible=false

                           santarutu.collide(invisibleground2);
                           giftgroup.collide(invisibleground2);

                           spawncandycane()
                           spawnsnowobstacles()
                           spawnflag()
                           showsantalife()
                           showhappinessrate()


                         


                           santarutu.velocityY= santarutu.velocityY+0.8;

                           candycanegroup.setVelocityEach(-1,0)
                           snowobstaclegroup.setVelocityEach(-1,0)
                           flaggroup.setVelocityEach(-1,0)

                           //Calling various function to controll mario
                           santarutu.changeAnimation("santaidle", santaidle)

                           snowbackground.velocityX=0
                           if (keyDown("right")) 
                           { 
                            candycanegroup.setVelocityEach(-8,0)
                            snowobstaclegroup.setVelocityEach(-8,0)
                            flaggroup.setVelocityEach(-8,0)
                          //  time = time-frameCount/20000;
                          snowbackground.velocityX=-(8 + 1*score1/20000)
                          santarutu.changeAnimation("santarunning", santarunning)
                           }
              
                           if (keyDown("up") && santarutu.y>450) 
                           {
                          santarutu.velocityY=-20;
	
                           }

                           if(keyDown("down")){
                          
                            gift=createSprite( santarutu.x,
                            santarutu.y-100,50,50)
giftimg=Math.round(random(1,2))
gift.visible=true
gift.velocityY=10
giftgroup.add(gift)
gift.addImage(gift1img)
//gift.debug=true
gift.setCollider("circle",0,0,40)
gift.scale=0.01
                                                  }

                                                  if(giftgroup.isTouching(invisibleground2)){
                                                    giftgroup.destroyEach()

                                                  }

                                                  if(flaggroup.isTouching(giftgroup)){
                                                    happinessrate=happinessrate+10
                                                    giftgroup.destroyEach()
                                                    flaggroup.destroyEach()

                                                  }
                            
                 

                          
              
                           if( santarutu.y<500){
                            santarutu.changeAnimation("santajump", santajumping)

              
                           }
                          }

                          if(gamestate==="level3game"){

                            rutugamelogo.visible=false
                            backbutton3.visible=false
                            rutuinstart.visible=false
backbutton4.visible=true
                            skybackground.visible=true
                            rutuplane.visible=true
                            planebullet.visible=true
                            skybackground.velocityX=0
                           

                            skyobstaclegroup1.setVelocityEach(-1,0)
                            skyobstaclegroup2.setVelocityEach(-1,0)
                            skyobstaclegroup3.setVelocityEach(-1,0)
                            fuelgroup.setVelocityEach(-1,0)

                            rutuplane.collide(invisibleground3);
                            rutuplane.collide(invisibleground4);
                            planebullet.collide(invisibleground3);
                           planebullet.collide(invisibleground4);
                           rutuplane.changeAnimation("plane",planeimg)


                            showplanefuel()
                            showplanelife()

fill("red")
stroke("yellow")
strokeWeight(10)
textSize(40)
textFont("Algerian")
                            text("Enemy remaining : "+enemykilled,920,100)


                            if (keyDown("right")) 
                            { 
                              planefuel=planefuel-0.3

                           //  time = time-frameCount/20000;
                          skybackground.velocityX=-8
                          skyobstaclegroup1.setVelocityEach(-8,0)
                          skyobstaclegroup2.setVelocityEach(-8,0)
                          skyobstaclegroup3.setVelocityEach(-8,0)
                          fuelgroup.setVelocityEach(-8,0)


                          spawnskycrow()
                          spawnskyhotairballoon()
                          spawnskyplane()
                          spawnplanefuel()
                         

                            }
               
                            if (keyDown("up")) 
                            {
                              rutuplane.y= rutuplane.y-8;
                              planebullet.y=planebullet.y-8
                            }
 
                            if(keyDown("down")){
                           
                              rutuplane.y= rutuplane.y+8;
                              planebullet.y=planebullet.y+8
                                                   }

                                                   if(keyDown("space")&&rutuplane.velocityY===0){

planebullet.velocityX=32
rutuplane.changeAnimation("shootingplane",shootingplaneimg)


                                                   }

                                                   if(planebullet.x>width/1  ){
planebullet.x=300
planebullet.y=rutuplane.y
planebullet.velocityX=0
                                                   }

                                                   if(fuelgroup.isTouching(rutuplane)){
                                                     planefuel=planefuel+40
                                                     fuelgroup.destroyEach()
                                                   }


                          }


                          

                          if(gamestate==="level4game"){
                            rutugamelogo.visible=false
                            backbutton3.visible=false
                            rutuinstart.visible=false
backbutton4.visible=true
                            nightbackground.visible=true
                            nightbackground.velocityX=0

                            dino.visible=true
                            dino.velocityY= dino.velocityY+0.4;
                            dinoenergy=dinoenergy-0.4

                            dino.changeAnimation("dinoidle",dinoidleimg)

                            dino.collide(invisibleground5)
crowgroup.setVelocityEach(-1,0)
wizardgroup.setVelocityEach(-1,0)
rockgroup.setVelocityEach(-1,0)
plantsgroup.setVelocityEach(-1,0)
tomatocoin1group.setVelocityEach(-1,0)
tomatocoin2group.setVelocityEach(-1,0)
tomatocoin3group.setVelocityEach(-1,0)

showdinolife()
showdinoenergy()
textSize(70)
textFont("Georgia")
text("Distance : "+distance1,980,100)



                            if(keyDown("right")){
                              nightbackground.velocityX=-8
  dino.changeAnimation("dino",dinoimage)

  distance1=distance1-frameCount%60



  crowgroup.setVelocityEach(-8,0)
wizardgroup.setVelocityEach(-8,0)
rockgroup.setVelocityEach(-8,0)
plantsgroup.setVelocityEach(-8,0)
tomatocoin1group.setVelocityEach(-8,0)
tomatocoin2group.setVelocityEach(-8,0)
tomatocoin3group.setVelocityEach(-8,0)






  spawnwizard()
  spawnskycrow2()
  spawnrock()
  spawnvillanplants()
  spawntomatocoin1()
  spawntomatocoin2()
  spawntomatocoin3()


                            }

                            if(keyDown("up")&&dino.y>500){
dino.velocityY=-15


                            }

                            if( dino.y<500){
                              dino.changeAnimation("dinojump",dinojumpimg)
  
                
                             }




                          }

                          if(gamestate==="level5game"){
                            nightcitybackground.visible=true

                            rutugamelogo.visible=false
                            backbutton3.visible=false
                            rutuinstart.visible=false
backbutton4.visible=true
rutu.visible=true
nightcitybackground.velocityX=0
rutu.velocityY=rutu.velocityY+0.5

rutu.collide(invisibleground6)
rutu.changeAnimation("rutuinforestidle1",rutuinforestidle);
zombiegroup.setVelocityEach(-1,0)
barricadegroup.setVelocityEach(-1,0)

showrutulife()
showzremaining()

if(keyDown("right")){
  nightcitybackground.velocityX=-8

  zombiegroup.setVelocityEach(-8,0)
  barricadegroup.setVelocityEach(-8,0)


  rutu.changeAnimation("rutuinforestrunning1",rutuinforestrunning)

//spawnskycrow3()
}

if(keyDown("up")&&rutu.y>400){
rutu.velocityY=-15

}

if(keyDown("space")){
}

if(rutu.y<400){
  rutu.changeAnimation("rutuinforestjump",rutuinforestjump)

}


                          }

                          if(gamestate==="level6game"){
                            skycitybackground.visible=true

                            rutugamelogo.visible=false
                            backbutton3.visible=false
                            backbutton4.visible=true
                            rutuinstart.visible=false

                            rutu.visible=true
                          
                            skycitybackground.velocityX=0

                            rutu.velocityY=rutu.velocityY+0.5

rutu.collide(invisibleground7)
rutu.changeAnimation("rutuinforestidle1",rutuinforestidle);

corona1group.setVelocityEach(-1,0)
corona2group.setVelocityEach(-1,0)
corona3group.setVelocityEach(-1,0)
barricade2group.setVelocityEach(-1,0)
maskgroup.setVelocityEach(-1,0)
ipersongroup.setVelocityEach(-1,0)

showrutu2life()
showcoronaremaining()



                            if(keyDown("right")){
                              skycitybackground.velocityX=-8
                            
                              spawncorona1()
                              spawncorona2()
                              
                              spawnbarricade2()
                              cartoonspawnmaskandsanitizer()
                              spawniperson()

                              corona1group.setVelocityEach(-8,0)
corona2group.setVelocityEach(-8,0)
barricade2group.setVelocityEach(-8,0)
maskgroup.setVelocityEach(-8,0)
ipersongroup.setVelocityEach(-8,0)
                              
                            
                              rutu.changeAnimation("rutuinforestrunning1",rutuinforestrunning)
                           
                            }
                            
                            if(keyDown("up")&&rutu.y>400){
                            rutu.velocityY=-15
                            
                            }
                            
                            if(keyDown("space")){
                              shootvaccine()
                            }

                            if(rutu.y<400){
                              rutu.changeAnimation("rutuinforestjump",rutuinforestjump)
                            
                            }
                          }


      if(mousePressedOver(backbutton1)&&gamestate==="tellaboutme"){
        buttonclicksound.play()

gamestate="serve"
messagebox2.visible=false
backbutton1.visible=false
rutuinstart.y=400
rutuinstart.x=1000


      }

      if(mousePressedOver(backbutton2)&&gamestate==="tellinstruction"){
        buttonclicksound.play()

        gamestate="serve"
        messagebox2.visible=false
        backbutton2.visible=false
        rutuinstart.y=400
        rutuinstart.x=1000
        
              }


              if(mousePressedOver(backbutton3)&&gamestate==="showdreamappbuttoninfo"){
gamestate="serve"
this.dreambutton.hide()
backbutton3.visible=false
buttonclicksound.play()

              }

              
      if(mousePressedOver(backbutton3)&&gamestate==="storywise1"){
        buttonclicksound.play()

        gamestate="serve"
        messagebox2.visible=false
        backbutton3.visible=false
        rutuinstart.y=400
        rutuinstart.x=1000
        messagebox.visible=false
        this.input1.hide()
        this.submitbutton.hide()
        
              }

              if(mousePressedOver(backbutton3)&&gamestate==="iknowname"){
                buttonclicksound.play()

                gamestate="serve"
                messagebox2.visible=false
                backbutton3.visible=false
                rutuinstart.y=400
                rutuinstart.x=1000
                messagebox.visible=false
                this.input1.hide()
                this.submitbutton.hide()
                
                      }

                      if(mousePressedOver(backbutton3)&&gamestate==="storywise2"){
                        buttonclicksound.play()

                        gamestate="serve"
                        messagebox2.visible=false
                        backbutton3.visible=false
                        rutuinstart.y=400
                        rutuinstart.x=1000
                        messagebox.visible=false
                        this.input1.hide()
                        this.submitbutton.hide()
                        
                              }

              if(mousePressedOver(backbutton3)&&gamestate==="storywise3"){
                buttonclicksound.play()

                gamestate="serve"
                messagebox2.visible=false
                backbutton3.visible=false
                rutuinstart.y=400
                rutuinstart.x=1000
                messagebox.visible=false
                messagebox3.visible=false
                dinoinstart.visible=false
                this.storypreviousbutton3.hide();
                this.storynextbutton3.hide();

                

                      }

                      if(mousePressedOver(backbutton3)&&gamestate==="levels"){
                        buttonclicksound.play()

                        gamestate="serve"
                        messagebox2.visible=false
                        backbutton3.visible=false
                        rutuinstart.y=400
                        rutuinstart.x=1000
                        messagebox.visible=false
                        messagebox3.visible=false
                        dinoinstart.visible=false
                        this.storypreviousbutton3.hide();
                        this.storynextbutton3.hide();
                        this.level1.hide()
                        this.level2.hide()
                        this.level3.hide() 
                        this.level4.hide()
                        this.level5.hide()
                        this.level6.hide()
                        
        
                              }

                              if(mousePressedOver(backbutton3)&&gamestate==="level1story"){
                                buttonclicksound.play()

                                gamestate="serve"
                                messagebox2.visible=false
                                backbutton3.visible=false
                                rutuinstart.y=400
                                rutuinstart.x=1000
                                messagebox.visible=false
                                messagebox3.visible=false
                                dinoinstart.visible=false
                                this.storypreviousbutton3.hide();
                                this.storynextbutton3.hide();
                                levelnextbutton.visible=false
                                levelbackbutton.visible=false
                                
                
                                      }

                                      if(mousePressedOver(backbutton3)&&gamestate==="1levelstorybut2"){
                                        buttonclicksound.play()

                                        gamestate="serve"
                                        messagebox2.visible=false
                                        backbutton3.visible=false
                                        rutuinstart.y=400
                                        rutuinstart.x=1000
                                        levelnextbutton2.visible=false
                                        levelbackbutton2.visible=false
                                        
                        
                                              }

                                              if(mousePressedOver(backbutton3)&&gamestate==="2levelstorybut2"){
                                                buttonclicksound.play()

                                                gamestate="serve"
                                                messagebox2.visible=false
                                                backbutton3.visible=false
                                                rutuinstart.y=400
                                                rutuinstart.x=1000
                                                levelnextbutton2.visible=false
                                                levelbackbutton2.visible=false
                                                
                                
                                                      }
                                              if(mousePressedOver(backbutton3)&&gamestate==="level2story"){
                                                buttonclicksound.play()

                                                gamestate="serve"
                                                messagebox2.visible=false
                                                backbutton3.visible=false
                                                rutuinstart.y=400
                                                rutuinstart.x=1000
                                                messagebox.visible=false
                                                messagebox3.visible=false
                                                dinoinstart.visible=false
                                                this.storypreviousbutton3.hide();
                                                this.storynextbutton3.hide();
                                                levelnextbutton.visible=false
                                                levelbackbutton.visible=false
                                                
                                
                                                      }

                                                      if(mousePressedOver(backbutton3)&&gamestate==="level3story"||mousePressedOver(backbutton3)&&gamestate==="3levelstorybut2"){
                                                        buttonclicksound.play()

                                                        gamestate="serve"
                                                        messagebox2.visible=false
                                                        backbutton3.visible=false
                                                        rutuinstart.y=400
                                                        rutuinstart.x=1000
                                                        messagebox.visible=false
                                                        messagebox3.visible=false
                                                        dinoinstart.visible=false
                                                        this.storypreviousbutton3.hide();
                                                        this.storynextbutton3.hide();
                                                        levelnextbutton.visible=false
                                                        levelbackbutton.visible=false
                                                        levelnextbutton2.visible=false
                                                        levelbackbutton2.visible=false
                                                        
                                        
                                                              }

                                                              if(mousePressedOver(backbutton3)&&gamestate==="level4story"||mousePressedOver(backbutton3)&&gamestate==="4levelstorybut2"){
                                                                buttonclicksound.play()

                                                                gamestate="serve"
                                                                messagebox2.visible=false
                                                                backbutton3.visible=false
                                                                rutuinstart.y=400
                                                                rutuinstart.x=1000
                                                                messagebox.visible=false
                                                                messagebox3.visible=false
                                                                dinoinstart.visible=false
                                                                this.storypreviousbutton3.hide();
                                                                this.storynextbutton3.hide();
                                                                levelnextbutton.visible=false
                                                                levelbackbutton.visible=false
                                                                levelnextbutton2.visible=false
                                                                levelbackbutton2.visible=false
                                                                
                                                
                                                                      }


                                                                      if(mousePressedOver(backbutton3)&&gamestate==="level5story"||mousePressedOver(backbutton3)&&gamestate==="5levelstorybut2"){
                                                                        buttonclicksound.play()

                                                                        gamestate="serve"
                                                                        messagebox2.visible=false
                                                                        backbutton3.visible=false
                                                                        rutuinstart.y=400
                                                                        rutuinstart.x=1000
                                                                        messagebox.visible=false
                                                                        messagebox3.visible=false
                                                                        dinoinstart.visible=false
                                                                        this.storypreviousbutton3.hide();
                                                                        this.storynextbutton3.hide();
                                                                        levelnextbutton.visible=false
                                                                        levelbackbutton.visible=false
                                                                        levelnextbutton2.visible=false
                                                                        levelbackbutton2.visible=false
                                                                        
                                                        
                                                                              }


                                                                              if(mousePressedOver(backbutton3)&&gamestate==="showminigames"){
                                                                                buttonclicksound.play()

this.minigame1.hide()
this.minigame2.hide()
this.minigame3.hide()
gamestate="serve"
backbutton3.visible=false
rutuinstart.visible=true







                                                                              }

                                                      if(mousePressedOver(backbutton4)&&gamestate==="level1game"){
                                                        buttonclicksound.play()

                                                        gamestate="levels"
                                                        this.level1.show()
                                        this.level2.show()
                                        this.level3.show() 
                                        this.level4.show()
                                        this.level5.show()
                                        this.level6.show()
                                        gamestate="levels"
                                        levelnextbutton.visible=false
                                        levelbackbutton.visible=false
                                        citybackground.visible=false
                                        rutuinforest.spt.visible=false
                                        backbutton3.visible=true
                                        backbutton4.visible=false
                                        forestobstaclegroup.destroyEach()
                                        forestfruitsgroup.destroyEach()
                                        rutugamelogo.visible=true
                                        rutuinstart.visible=true
rutuinforest.spt.x=300
rutuinforest.spt.y=200

                                                        
                                        
                                                              }

                                                              if(mousePressedOver(backbutton4)&&gamestate==="level2game"){
                                                                buttonclicksound.play()

                                                                gamestate="levels"
                                                                this.level1.show()
                                                this.level2.show()
                                                this.level3.show() 
                                                this.level4.show()
                                                this.level5.show()
                                        this.level6.show()
                                                gamestate="levels"
                                                levelnextbutton.visible=false
                                                levelbackbutton.visible=false
                                                snowbackground.visible=false
                                                santarutu.visible=false
                                                santarutu.x=300
                                                santarutu.y=200

                                                backbutton3.visible=true
                                                backbutton4.visible=false
                                                snowobstaclegroup.destroyEach()
                                                flaggroup.destroyEach()
                                                candycanegroup.destroyEach()

                                                rutugamelogo.visible=true
                                                rutuinstart.visible=true
                                                                
                                                
                                                                      }

                                                                      if(mousePressedOver(backbutton4)&&gamestate==="level3game"){
                                                                        buttonclicksound.play()

                                                                        gamestate="levels"
                                                                        this.level1.show()
                                                        this.level2.show()
                                                        this.level3.show() 
                                                        this.level4.show()
                                                        this.level5.show()
                                        this.level6.show()
                                                        gamestate="levels"
                                                        levelnextbutton.visible=false
                                                        levelbackbutton.visible=false
                                                        skybackground.visible=false
                                                        
                                                        backbutton3.visible=true
                                                        backbutton4.visible=false
                                                        skyobstaclegroup1.destroyEach()
                                                        skyobstaclegroup2.destroyEach()
                                                        skyobstaclegroup3.destroyEach()

                                                      
                                                      rutuplane.visible=false
                                                      planebullet.visible=false
                                                        fuelgroup.destroyEach()
        
                                                        rutugamelogo.visible=true
                                                        rutuinstart.visible=true
                                                                        
                                                        
                                                                              }


                                                                              if(mousePressedOver(backbutton4)&&gamestate==="level4game"){
                                                                                buttonclicksound.play()

                                                                                gamestate="levels"
                                                                                this.level1.show()
                                                                this.level2.show()
                                                                this.level3.show() 
                                                                this.level4.show()
                                                                this.level5.show()
                                                this.level6.show()
                                                                gamestate="levels"
                                                                levelnextbutton.visible=false
                                                                levelbackbutton.visible=false
                                                                nightbackground.visible=false
                                                                
                                                                backbutton3.visible=true
                                                                backbutton4.visible=false
                                                                crowgroup.destroyEach()
                                                                                                                                                                                                                                                                                                                                rockgroup.destroyEach()
                                                                                                                                                                                                                                                                                                                                wizardgroup.destroyEach()
                                                                                                                                                                                                                                                                                                                                plantsgroup.destroyEach()
                                                                                                                                                                                                                                                                                                                                tomatocoin1group.destroyEach()
                                                                                                                                                                                                                                                                                                                                tomatocoin2group.destroyEach()
                                                                                                                                                                                                                                                                                                                                tomatocoin3group.destroyEach()

                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                dino.visible=false
                                                                                                                                                                                                                                                                                                                                nightbackground.velocityX=0
                                                                                                                                                                                                                                                                                                                                dinolife=300
                                                                                                                                                                                                                                                                                                                                dinoenergy=300
                                                                                                                                                                                                                                                                                                                                distance1=100000
                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                backbutton4.visible=false
        rutu.visible=false
                                                              
                                                            dino.visible=false
                
                                                                rutugamelogo.visible=true
                                                                rutuinstart.visible=true
                                                                                
                                                                
                                                                                      }


                                                                              if(mousePressedOver(backbutton4)&&gamestate==="level5game"){
                                                                                buttonclicksound.play()

                                                                                gamestate="levels"
                                                                                this.level1.show()
                                                                this.level2.show()
                                                                this.level3.show() 
                                                                this.level4.show()
                                                                this.level5.show()
                                                this.level6.show()
                                                                gamestate="levels"
                                                                levelnextbutton.visible=false
                                                                levelbackbutton.visible=false
                                                                nightcitybackground.visible=false
                                                                
                                                                backbutton3.visible=true
                                                                backbutton4.visible=false
                                                                barricadegroup.destroyEach()
                                                                zombiegroup.destroyEach()
                                                                cplanegroup.destroyEach()
                                                                potiongroup.destroyEach()

        rutu.visible=false
        rutu.x=300
        rutu.y=200
                                                              
                                                              rutuplane.visible=false
                
                                                                rutugamelogo.visible=true
                                                                rutuinstart.visible=true
                                                                                
                                                                
                                                                                      }



                                                                                      if(mousePressedOver(backbutton4)&&gamestate==="level6game"){
                                                                                        buttonclicksound.play()

                                                                                        gamestate="levels"
                                                                                        this.level1.show()
                                                                        this.level2.show()
                                                                        this.level3.show() 
                                                                        this.level4.show()
                                                                        this.level5.show()
                                                        this.level6.show()
                                                                        gamestate="levels"
                                                                        backbutton4.visible=false
                                                                        rutucrying.visible=false
                                                                        backbutton3.visible=true
rutuinstart.visible=true
rutugamelogo.visible=true
                                                                        rutu.visible=false
                                                                        skycitybackground.visible=false

                                                                        rutu.visible=false
                                                                        rutu.x=300
                                                                        rutu.y=200
                                                                        maskgroup.destroyEach()
                                                                        corona1group.destroyEach()
                                                                        corona2group.destroyEach()
                                                                        ipersongroup.destroyEach()
                                                                        barricade2group.destroyEach()
                                                                        vaccinegroup.destroyEach()
                                                                                              }


                                                                                      if(mousePressedOver(backbutton4)&&gamestate==="minigame1"){
                                                                                        buttonclicksound.play()

gamestate="showminigames"

rutugamelogo.visible=true
  minigamebackground1.visible=false


  this.minigame1.show()
  this.minigame2.show()
  this.minigame3.show()
  this.minigame4.show()
  this.minigame5.show()

  backbutton4.visible=false
  backbutton3.visible=true

  border1.visible=false
  border2.visible=false
  border3.visible=false
  border4.visible=false

  goal1.visible=false
  goal2.visible=false
  goal3.visible=false
  goal4.visible=false
  goal5.visible=false
  goal6.visible=false

  playerpaddle.visible=false
  computerpaddle.visible=false

lin.visible=false
   
  ball.visible=false

                                                                                      }


                                                                                      if(mousePressedOver(backbutton4)&&gamestate==="minigame2"){
                                                                                        buttonclicksound.play()

                                                                                       
                                                                                          this.minigame1.show()
                                                                                          this.minigame2.show()
                                                                                          this.minigame3.show()
                                                                                          this.minigame4.show()
                                                                                          this.minigame5.show()
                                                                                        
                                                                                          gamestate="showminigames"
                                                                                          gamestate2="servestart"
                                                                                          livesofsam=5
                                                                                          sam.x=150
                                                                                          sam.y=height/2
                                                                                          sam.visible=false
                                                                                          car1.visible=false
                                                                                          car2.visible=false
                                                                                          car3.visible=false
                                                                                          car4.visible=false
                                                                                          car5.visible=false
                                                                                          road.visible=false
                                                                                          strip1.visible=false
                                                                                          strip2.visible=false
                                                                                          strip3.visible=false
                                                                                          strip4.visible=false
                                                                                          strip5.visible=false
                                                                                      strip6.visible=false
                                                                                        boundary1.visible=false
                                                                                        boundary2.visible=false
                                                                                        boundary3.visible=false
                                                                                        boundary4.visible=false
                                                                                        startbox.visible=false
                                                                                        endbox.visible=false
                                                                                        minigamebackground2.visible=false
                                                                                        gamerestartbutton.visible=false
                                                                                        gamebackbuttton.visible=false
                                                                                        gamerestartbutton.y=height/2
                                                                                        gamebackbuttton.y=height/2
                                                                                        backbutton4.visible=false
                                                                                      backbutton3.visible=true
                                                                                      rutugamelogo.visible=true
                                                                                        
                                                                                          
                                                                                        
                                                                                                                                                                              }


                                                                                                                                                                              if(mousePressedOver(backbutton4)&&gamestate==="minigame3"){
                                                                                                                                                                                buttonclicksound.play()


                                                                                                                                                                                
                                                                                                                                                                                gamestate="showminigames"
                                                                                                                                                                                asteroidgroup.destroyEach()
                                                                                                                                                                                asteroid2group.destroyEach()
                                                                                                                                                                                asteroid3group.destroyEach()
                                                                                                                                                                                asteroid4group.destroyEach()
                                                                                                                                                                                spacebulletgroup.destroyEach()
                                                                                                                                                                                spacecraft.scale=0.5
                                                                                                                                                                                spacecraft.x=100
                                                                                                                                                                                spacecraft.y=height/2
                                                                                                                                                                                spacecraft.visible=false
                                                                                                                                                                                spacecraftlives=3
                                                                                                                                                                                gamerestartbutton.visible=false
                                                                                                                                                                                gamebackbuttton.visible=false
                                                                                                                                                                                minigamebackground3.visible=false
                                                                                                                                                                                minigamebackground3.velocityX=-7
                                                                                                                                                                          
                                                                                                                                                                          backbutton3.visible=true
                                                                                                                                                                          backbutton4.visible=false

                                                                                                                                                                          rutugamelogo.visible=true
                                                             
                                                                                                                                                                              }

                                                                                                                                                                              if(mousePressedOver(backbutton4)&&gamestate==="minigame4"){
                                                                                                                                                                                buttonclicksound.play()

                                                                                                                                                                                gamestate="showminigames"


                                                                                                                                                                                backbutton3.visible=true
                                                                                                                                                                                backbutton4.visible=false
      
                                                                                                                                                                                rutugamelogo.visible=true

                                                                                                                                                                                fruitsmissed=3
                                                                                                                                                                                fruitscollected=0
                                                                                                                                                                                  gamerestartbutton.visible=false
                                                                                                                                                                                  gamebackbuttton.visible=false
                                                                                                                                                                                  fruits1group.destroyEach()
                                                                                                                                                                                  fruits2group.destroyEach()
                                                                                                                                                                                  fruits3group.destroyEach()
                                                                                                                                                                                  fruits4group.destroyEach()

                                                                                                                                                                                  basket.visible=false
                                                                                                                                                                                  basket.scale=0.5
                                                                                                                                                                                  basket.x=width/2
                                                                                                                                                                                  basket.y=600
                                                                                                                                                                                background(backgroundimg)

                                                                                                                                                                              }

                                                                                                                                                                              if(mousePressedOver(backbutton4)&&gamestate==="minigame5"){
                                                                                                                                                                                buttonclicksound.play()

gamestate="showminigames"
fg.visible=false
bg.visible=false
rutugamelogo.visible=true
bird.visible=false
backbutton4.visible=false
backbutton3.visible=true
pipe1Group.destroyEach()
  pipe2Group.destroyEach()
gameState10=MIDDLE
score10=0
restart.visible=false
bird.x=225
fg.velocityX=0








                                                                                                                                                                              }
        
                                      

                                      if(mousePressedOver(levelbackbutton)&&gamestate==="level1story"){
                                        buttonclicksound.play()

                                        this.level1.show()
                                        this.level2.show()
                                        this.level3.show() 
                                        this.level4.show()
                                        this.level5.show()
                                        this.level6.show()
                                        gamestate="levels"
                                        levelnextbutton.visible=false
                                        levelbackbutton.visible=false
                                        
                                      }

                                      if(mousePressedOver(levelbackbutton2)&&gamestate==="1levelstorybut2"){
                                        buttonclicksound.play()

                                        
                                        gamestate="level1story"
                                        levelnextbutton.visible=true
                                        levelbackbutton.visible=true
                                        levelnextbutton2.visible=false
                                        levelbackbutton2.visible=false
                                      }

                                      

                                      if(mousePressedOver(levelbackbutton)&&gamestate==="level2story"){
                                        buttonclicksound.play()

                                        this.level1.show()
                                        this.level2.show()
                                        this.level3.show() 
                                        this.level4.show()
                                        this.level5.show()
                                        this.level6.show()
                                        gamestate="levels"
                                        levelnextbutton.visible=false
                                        levelbackbutton.visible=false
                                        
                                      }

                                      if(mousePressedOver(levelbackbutton2)&&gamestate==="2levelstorybut2"){
                                        buttonclicksound.play()

                                        
                                        gamestate="level2story"
                                        levelnextbutton.visible=true
                                        levelbackbutton.visible=true
                                        levelnextbutton2.visible=false
                                        levelbackbutton2.visible=false
                                      }

                                      if(mousePressedOver(levelbackbutton)&&gamestate==="level3story"){
                                        buttonclicksound.play()

                                        this.level1.show()
                                        this.level2.show()
                                        this.level3.show() 
                                        this.level4.show()
                                        this.level5.show()
                                        this.level6.show()
                                        gamestate="levels"
                                        levelnextbutton.visible=false
                                        levelbackbutton.visible=false
                                        
                                      }

                                      if(mousePressedOver(levelbackbutton2)&&gamestate==="3levelstorybut2"){
                                        buttonclicksound.play()

                                        
                                        gamestate="level3story"
                                        levelnextbutton.visible=true
                                        levelbackbutton.visible=true
                                        levelnextbutton2.visible=false
                                        levelbackbutton2.visible=false
                                      }

                                      if(mousePressedOver(levelbackbutton)&&gamestate==="level4story"){
                                        buttonclicksound.play()

                                        this.level1.show()
                                        this.level2.show()
                                        this.level3.show() 
                                        this.level4.show()
                                        this.level5.show()
                                        this.level6.show()
                                        gamestate="levels"
                                        levelnextbutton.visible=false
                                        levelbackbutton.visible=false
                                        
                                      }

                                      if(mousePressedOver(levelbackbutton2)&&gamestate==="4levelstorybut2"){
                                        buttonclicksound.play()

                                        
                                        gamestate="level4story"
                                        levelnextbutton.visible=true
                                        levelbackbutton.visible=true
                                        levelnextbutton2.visible=false
                                        levelbackbutton2.visible=false
                                      }


                                      if(mousePressedOver(levelbackbutton)&&gamestate==="level5story"){
                                        buttonclicksound.play()

                                        this.level1.show()
                                        this.level2.show()
                                        this.level3.show() 
                                        this.level4.show()
                                        this.level5.show()
                                        this.level6.show()
                                        gamestate="levels"
                                        levelnextbutton.visible=false
                                        levelbackbutton.visible=false
                                        
                                      }

                                      if(mousePressedOver(levelbackbutton2)&&gamestate==="5levelstorybut2"){
                                        buttonclicksound.play()

                                        
                                        gamestate="level5story"
                                        levelnextbutton.visible=true
                                        levelbackbutton.visible=true
                                        levelnextbutton2.visible=false
                                        levelbackbutton2.visible=false
                                      }


                                      if(mousePressedOver(levelbackbutton)&&gamestate==="level6story"){
                                        buttonclicksound.play()

                                        this.level1.show()
                                        this.level2.show()
                                        this.level3.show() 
                                        this.level4.show()
                                        this.level5.show()
                                        this.level6.show()
                                        gamestate="levels"
                                        levelnextbutton.visible=false
                                        levelbackbutton.visible=false
                                        
                                      }

                                      if(mousePressedOver(levelbackbutton2)&&gamestate==="6levelstorybut2"){
                                        buttonclicksound.play()

                                        
                                        gamestate="level6story"
                                        levelnextbutton.visible=true
                                        levelbackbutton.visible=true
                                        levelnextbutton2.visible=false
                                        levelbackbutton2.visible=false
                                      }





                                     


                                      if(mousePressedOver(levelnextbutton)&&gamestate==="level1story"){
                                        buttonclicksound.play()

gamestate="1levelstorybut2"
levelbackbutton.visible=false
levelnextbutton.visible=false
                                   

                                      }

                                      if(mousePressedOver(levelnextbutton)&&gamestate==="level2story"){
                                        buttonclicksound.play()

                                        gamestate="2levelstorybut2"
                                        levelbackbutton.visible=false
                                        levelnextbutton.visible=false
                                                                           
                                        
                                                                              }

                                                                              

                                                                              if(mousePressedOver(levelnextbutton)&&gamestate==="level3story"){
                                                                                buttonclicksound.play()

                                                                                gamestate="3levelstorybut2"
                                                                                levelbackbutton.visible=false
                                                                                levelnextbutton.visible=false
                                                                                                                   
                                                                                
                                                                                                                      }

                                                                                                                      if(mousePressedOver(levelnextbutton)&&gamestate==="level4story"){
                                                                                                                        buttonclicksound.play()

                                                                                                                        gamestate="4levelstorybut2"
                                                                                                                        levelbackbutton.visible=false
                                                                                                                        levelnextbutton.visible=false
                                                                                                                                                           
                                                                                                                        
                                                                                                                                                              }

                                                                                                                                                              if(mousePressedOver(levelnextbutton)&&gamestate==="level5story"){
                                                                                                                                                                buttonclicksound.play()

                                                                                                                                                                gamestate="5levelstorybut2"
                                                                                                                                                                levelbackbutton.visible=false
                                                                                                                                                                levelnextbutton.visible=false
                                                                                                                                                                                                   
                                                                                                                                                                
                                                                                                                                                                                                      }


                                                                                                                                                                                                      if(mousePressedOver(levelnextbutton)&&gamestate==="level6story"){
                                                                                                                                                                                                        buttonclicksound.play()

                                                                                                                                                                                                        gamestate="6levelstorybut2"
                                                                                                                                                                                                        levelbackbutton.visible=false
                                                                                                                                                                                                        levelnextbutton.visible=false
                                                                                                                                                                                                                                           
                                                                                                                                                                                                        
                                                                                                                                                                                                                                              }

                                      if(mousePressedOver(levelnextbutton2)&&gamestate==="1levelstorybut2"){
                                        buttonclicksound.play()

                                        gamestate="level1game"
                                        levelbackbutton2.visible=false
                                        levelnextbutton2.visible=false
                                                                            
                                        
                                                                              }

                                                                              if(mousePressedOver(levelnextbutton2)&&gamestate==="2levelstorybut2"){
                                                                                buttonclicksound.play()

                                                                                gamestate="level2game"
                                                                                levelbackbutton2.visible=false
                                                                                levelnextbutton2.visible=false
                                                                                santarutu.x=300
                                                                                santarutu.y=200 
                                                                                
                                                                                                                      }

                                                                                                                      if(mousePressedOver(levelnextbutton2)&&gamestate==="3levelstorybut2"){
                                                                                                                        buttonclicksound.play()

                                                                                                                        gamestate="level3game"
                                                                                                                        levelbackbutton2.visible=false
                                                                                                                        levelnextbutton2.visible=false
                                                                                                                                                            
                                                                                                                        
                                                                                                                                                              }

                                                                                                                                                              if(mousePressedOver(levelnextbutton2)&&gamestate==="4levelstorybut2"){
                                                                                                                                                                dino.visible=true
dino.x=300
dino.y=200
                                                                                                                                                                buttonclicksound.play()

                                                                                                                                                                gamestate="level4game"
                                                                                                                                                                levelbackbutton2.visible=false
                                                                                                                                                                levelnextbutton2.visible=false
                                                                                                                                                                                                    
                                                                                                                                                                
                                                                                                                                                                                                      }


                                                                                                                                                                                                      if(mousePressedOver(levelnextbutton2)&&gamestate==="5levelstorybut2"){
                                                                                                                                                                                                        buttonclicksound.play()

                                                                                                                                                                                                        gamestate="level5game"
                                                                                                                                                                                                        levelbackbutton2.visible=false
                                                                                                                                                                                                        levelnextbutton2.visible=false
                                                                                                                                                                                                                                            
                                                                                                                                                                                                        
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              }


                                                                                                                                                                                                                                              if(mousePressedOver(levelnextbutton2)&&gamestate==="6levelstorybut2"){
                                                                                                                                                                                                                                                buttonclicksound.play()

                                                                                                                                                                                                                                                gamestate="level6game"
                                                                                                                                                                                                                                                levelbackbutton2.visible=false
levelnextbutton2.visible=false
                                                                                                                                                                                                                                                rutu.visible=true
                                                                                                                                                                                                                                                rutu.visible=true
rutu.x=300
rutu.y=200

                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                      }
                                                              
                      



                                                                              if(playerpromise===0||playerpromise<0||time<0&&gamestate==="level1game"){
gamestate="level1end"
gameoversound.play()
                                                                              }

                                                                              if(santalife===0||santalife<0&&gamestate==="level2game"){
                                                                                gamestate="level2end"
                                                                                gameoversound.play()
                                                                                                                                                              }

                                                                              if(forestenergy===100&&time>0&&gamestate==="level1game"){
gamestate="level1win"
winsound.play()
                                                                              
                                                                              }

                                                                              if(happinessrate===300&&gamestate==="level2game"){
                                                                                gamestate="level2win" 
                                                                                winsound.play()

                                                                              }

                                                                              if(planelife===0||planefuel===0||planefuel<0&&gamestate==="level3game"){

gamestate="level3end"
gameoversound.play()

                                                                              }

                                                                              if(enemykilled===0&&gamestate=="level3game"){
gamestate="level3win"
winsound.play()
                                                                              }

                                                                              if(dinolife===0||dinolife<0||dinoenergy===0||dinoenergy<0){
                                                                                gamestate="level4end"
                                                                                gameoversound.play()

                                                                              }

                                                                              if(distance1===0||distance1<0){
                                                                                gamestate="level4win"
                                                                                winsound.play()

                                                                              }

                                                                              if(rutulife===0){
                                                                                gamestate="level5end"
                                                                                gameoversound.play()

                                                                              }

                                                                              if(zombieremaining===0){
                                                                                gamestate="level5win"
                                                                                winsound.play()
                                                                              }


                                                                              if(immunity===0||immunity<0){
                                                                                gamestate="level6end"
                                                                                gameoversound.play()

                                                                              }

                                                                              if(coronaremaining===0||coronaremaining<0){
                                                                                gamestate="level6win"
                                                                                winsound.play()

                                                                              }


                                                                              if(gamestate==="level1end"){
forestobstaclegroup.destroyEach()
forestfruitsgroup.destroyEach()
flaggroup.destroyEach()
rutuinforest.spt.visible=false
citybackground.velocityX=0
rutucrying.visible=true
playerpromise=200
gamebackbuttton.visible=true
gamerestartbutton.visible=true

                                                                              }

                                                                              
                                                                              if(gamestate==="level2end"){
                                                                                snowobstaclegroup.destroyEach()
                                                                                candycanegroup.destroyEach()
                                                                                flaggroup.destroyEach()
                                                                                santarutu.visible=false
                                                                                snowbackground.velocityX=0
                                                                                rutucrying.visible=true
                                                                                santalife=300
                                                                                gamebackbuttton.visible=true
                                                                                gamerestartbutton.visible=true
                                                                                backbutton4.visible=false


                                                                                
                                                                                                                                                              }

                                                                                                                                                              if(gamestate==="level3end"){
                                                                                                                                                                skyobstaclegroup1.destroyEach()
                                                                                                                                                                skyobstaclegroup2.destroyEach()
                                                                                                                                                                skyobstaclegroup3.destroyEach()
                                                                                                                                                                fuelgroup.destroyEach()
                                                                                                                                                                rutuplane.visible=false
                                                                                                                                                                planebullet.visible=false

                                                                                                                                                                skybackground.velocityX=0
                                                                                                                                                                planelife=300
                                                                                                                                                                enemykilled=20
                                                                                                                                                                planefuel=300
                                                                                                                                                                rutucrying.visible=true
                                                                                                                                                                
                                                                                                                                                                gamebackbuttton.visible=true
                                                                                                                                                                gamerestartbutton.visible=true
                                                                                                                                                                backbutton4.visible=false
                                                                                
                                                                                
                                                                                                                                                                
                                                                                                                                                                                                                                              }


                                                                                                                                                                                                                                              if(gamestate==="level4end"){
                                                                                                                                                                                                                                                rutucrying.visible=true
                                                                                                                                                                
                                                                                                                                                                                                                                                gamebackbuttton.visible=true
                                                                                                                                                                                                                                                gamerestartbutton.visible=true
                                                                                                                                                                                                                                                backbutton4.visible=false

                                                                                                                                                                                                                                                dino.visible=false
                                                                                                                                                                                                                                                nightbackground.velocityX=0
                                                                                                                                                                                                                                                dinolife=300
                                                                                                                                                                                                                                                dinoenergy=300
                                                                                                                                                                                                                                                tomatocoin1group.destroyEach()
                                                                                                                                                                                                                                                tomatocoin2group.destroyEach()
                                                                                                                                                                                                                                                tomatocoin3group.destroyEach()
                                                                                                                                                                                                                                                crowgroup.destroyEach()
                                                                                                                                                                                                                                                rockgroup.destroyEach()
                                                                                                                                                                                                                                                plantsgroup.destroyEach()
                                                                                                                                                                                                                                                wizardgroup.destroyEach()

                                                                                                                                                                                                                                              }


                                                                                                                                                                                                                                              if(gamestate==="level5end"){
                                                                                                                                                                                                                                                rutucrying.visible=true
                                                                                                                                                                
                                                                                                                                                                                                                                                gamebackbuttton.visible=true
                                                                                                                                                                                                                                                gamerestartbutton.visible=true
                                                                                                                                                                                                                                                backbutton4.visible=false

                                                                                                                                                                                                                                                rutu.visible=false
                                                                                                                                                                                                                                                nightcitybackground.velocityX=0
                                                                                                                                                                                                                                                rutulife=300
                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                potiongroup.destroyEach()
                                                                                                                                                                                                                                                zombiegroup.destroyEach()
                                                                                                                                                                                                                                          cplanegroup.destroyEach()
                                                                                                                                                                                                                                          barricadegroup.destroyEach()







                                                                                                                                                                                                                                              }

                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                              if(gamestate==="level6end"){
                                                                                                                                                                                                                                                corona1group.destroyEach()
                                                                                                                                                                                                                                                corona2group.destroyEach()
                                                                                                                                                                                                                                                barricade2group.destroyEach()
                                                                                                                                                                                                                                                vaccinegroup.destroyEach()
                                                                                                                                                                                                                                                maskgroup.destroyEach()
                                                                                                                                                                                                                                                ipersongroup.destroyEach()

                                                                                                                                                                                                                                                rutucrying.visible=true
                                                                                                                                                                
                                                                                                                                                                                                                                                gamebackbuttton.visible=true
                                                                                                                                                                                                                                                gamerestartbutton.visible=true
                                                                                                                                                                                                                                                backbutton4.visible=false

                                                                                                                                                                                                                                                rutu.visible=false
                                                                                                                                                                                                                                                skycitybackground.velocityX=0
                                                                                                                                                                                                                                                immunity=300
                                                                                                                                                                                                                                                coronaremaining=300













                                                                                                                                                                                                                                              }

                                                                              if(gamestate==="level1win"){
                                                                                forestobstaclegroup.destroyEach()
                                                                                forestfruitsgroup.destroyEach()
                                                                                rutuinforest.spt.visible=false
                                                                                citybackground.velocityX=0
                                                                                laughingrutu.visible=true
                                                                                playerpromise=200
                                                                                gamebackbuttton.visible=true
                                                                                gamerestartbutton.visible=true
                                                                                
                                                                                                                                                              }


                                                                                                                                                              if(gamestate==="level2win"){
                                                                                                                                                                snowobstaclegroup.destroyEach()
                                                                                                                                                                candycanegroup.destroyEach()
                                                                                                                                                                flaggroup.destroyEach()
                                                                                                                                                                santarutu.visible=false
                                                                                                                                                                snowbackground.velocityX=0
                                                                                                                                                                laughingrutu.visible=true
                                                                                                                                                                santalife=200
                                                                                                                                                                gamebackbuttton.visible=true
                                                                                                                                                                gamerestartbutton.visible=true
                                                                                                                                                                backbutton4.visible=false

                                                                                                                                                                
                                                                                                                                                                                                                                              }

                                                                                                                                                                                                                                              if(gamestate==="level3win"){
                                                                                                                                                                                                                                                skyobstaclegroup1.destroyEach()
                                                                                                                                                                                                                                                skyobstaclegroup3.destroyEach()
                                                                                                                                                                                                                                                skyobstaclegroup2.destroyEach()
                                                                                                                                                                                                                                                fuelgroup.destroyEach()
                                                                                                                                                                                                                                                
                                                                                                                                                               
                                                                                                                                                                                                                                               rutuplane.visible=false
                                                                                                                                                                                                                                                 planebullet.visible=false
                                                                                                                                                                                                                                                      skybackground.velocityX=0
                                                                                                                                                                                                                                                      planelife=300
                                                                                                                                                                                                                                                  enemykilled=20
                                                                                                                                                                                                                                                planefuel=300
                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                laughingrutu.visible=true
                                                                                                                                                                                                                                                gamebackbuttton.visible=true
                                                                                                                                                                                                                                                gamerestartbutton.visible=true
                                                                                                                                                                                                                                                backbutton4.visible=false
                                                                                
                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                              }

                                                                                                                                                                                                                                                                                                                              if(gamestate==="level4win"){
                                                                                                                                                                                                                                                                                                                                crowgroup.destroyEach()
                                                                                                                                                                                                                                                                                                                                rockgroup.destroyEach()
                                                                                                                                                                                                                                                                                                                                wizardgroup.destroyEach()
                                                                                                                                                                                                                                                                                                                                plantsgroup.destroyEach()
                                                                                                                                                                                                                                                                                                                                tomatocoin1group.destroyEach()
                                                                                                                                                                                                                                                                                                                                tomatocoin2group.destroyEach()
                                                                                                                                                                                                                                                                                                                                tomatocoin3group.destroyEach()

                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                dino.visible=false
                                                                                                                                                                                                                                                                                                                                nightbackground.velocityX=0
                                                                                                                                                                                                                                                                                                                                dinolife=300
                                                                                                                                                                                                                                                                                                                                dinoenergy=300
                                                                                                                                                                                                                                                                                                                                distance1=100000
                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                laughingrutu.visible=true
                                                                                                                                                                                                                                                                                                                                gamebackbuttton.visible=true
                                                                                                                                                                                                                                                                                                                                gamerestartbutton.visible=true
                                                                                                                                                                                                                                                                                                                                backbutton4.visible=false
                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                              }


                                                                                                                                                                                                                                                                                                                                                                                                              if(gamestate==="level5win"){
                                                                                                                                                                                                                                                                                                                                                                                                                rutu.visible=false
                                                                                                                                                                                                                                                                                                                                                                                                                nightcitybackground.velocityX=0
                                                                                                                                                                                                                                                                                                                                                                                                                rutulife=300
                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                potiongroup.destroyEach()
                                                                                                                                                                                                                                                                                                                                                                                                                zombiegroup.destroyEach()
                                                                                                                                                                                                                                                                                                                                                                                                          cplanegroup.destroyEach()
                                                                                                                                                                                                                                                                                                                                                                                                          barricadegroup.destroyEach()
                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                          zombieremaining=300
                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                        
                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                laughingrutu.visible=true
                                                                                                                                                                                                                                                                                                                                                                                                                gamebackbuttton.visible=true
                                                                                                                                                                                                                                                                                                                                                                                                                gamerestartbutton.visible=true
                                                                                                                                                                                                                                                                                                                                                                                                                backbutton4.visible=false
                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              }



                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              if(gamestate==="level6win"){
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                rutu.visible=false
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                skycitybackground.velocityX=0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                immunity=300
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                corona1group.destroyEach()
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                corona2group.destroyEach()
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                barricade2group.destroyEach()
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                vaccinegroup.destroyEach()
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                maskgroup.destroyEach()
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ipersongroup.destroyEach()

                                                                                                                                                                
                                                                                                                                                                                                                                                

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                rutu.visible=false
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                skycitybackground.velocityX=0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                immunity=300
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                coronaremaining=300
                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          zombieremaining=300
                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                laughingrutu.visible=true
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                gamebackbuttton.visible=true
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                gamerestartbutton.visible=true
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                backbutton4.visible=false
                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              }


                                                                              if(mousePressedOver(gamerestartbutton)&&gamestate==="level1end"){
                                                                                buttonclicksound.play()

gamestate="level1game"
playerpromise=200
gamebackbuttton.visible=false
gamerestartbutton.visible=false
rutucrying.visible=false
rutuinforest.spt.visible=true
rutuinforest.spt.x=500
rutuinforest.spt.y=200
time=200
forestenergy=0


                                                                              }

                                                                              if(mousePressedOver(gamerestartbutton)&&gamestate==="level2end"){
                                                                                buttonclicksound.play()

                                                                                gamestate="level2game"
                                                                                santalife=300
                                                                                gamebackbuttton.visible=false
                                                                                gamerestartbutton.visible=false
                                                                                rutucrying.visible=false
                                                                                santarutu.visible=true
                                                                                santarutu.x=500
                                                                                santarutu.y=200
                                                                                happinessrate=0
                                                                                
                                                                                
                                                                                                                                                              }

                                                                                                                                                              if(mousePressedOver(gamerestartbutton)&&gamestate==="level3end"){
                                                                                                                                                                buttonclicksound.play()

                                                                                                                                                                gamestate="level3game"
                                                                                                                                                                planelife=300
                                                                                                                                                                gamebackbuttton.visible=false
                                                                                                                                                                gamerestartbutton.visible=false
                                                                                                                                                                rutucrying.visible=false
                                                                                                                                                                rutuplane.visible=true
                                                                                                                                                                rutuplane.x=300
                                                                                                                                                               rutuplane.y=200
                                                                                                                                                               planebullet.visible=true
                                                                                                                                                               planebullet.x=300
                                                                                                                                                               planebullet.y=200
                                                                                                                                                                planelife=300
                                                                                                                                                                enemykilled=20
                                                                                                                                                                
                                                                                                                                                                
                                                                                                                                                                                                                                              }


                                                                                                                                                                                                                                              if(mousePressedOver(gamerestartbutton)&&gamestate==="level4end"){
                                                                                                                                                                                                                                                buttonclicksound.play()

                                                                                                                                                                                                                                                gamestate="level4game"
                                                                                                                                                                                                                                                dinolife=300
                                                                                                                                                                                                                                                gamebackbuttton.visible=false
                                                                                                                                                                                                                                                gamerestartbutton.visible=false
                                                                                                                                                                                                                                                rutucrying.visible=false
                                                                                                                                                                                                                                                dino.visible=true
                                                                                                                                                                                                                                                dino.x=300
                                                                                                                                                                                                                                               dino.y=200
                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                                dinoenergy=300
                                                                                                                                                                                                                                              distance1=100000
                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                              }


                                                                                                                                                                                                                                                                                                                              if(mousePressedOver(gamerestartbutton)&&gamestate==="level5end"){
                                                                                                                                                                                                                                                                                                                                buttonclicksound.play()

                                                                                                                                                                                                                                                                                                                                gamestate="level5game"
                                                                                                                                                                                                                                                                                                                                rutulife=300
                                                                                                                                                                                                                                                                                                                                gamebackbuttton.visible=false
                                                                                                                                                                                                                                                                                                                                gamerestartbutton.visible=false
                                                                                                                                                                                                                                                                                                                                rutucrying.visible=false
                                                                                                                                                                                                                                                                                                                                rutu.visible=true
                                                                                                                                                                                                                                                                                                                                rutu.x=300
                                                                                                                                                                                                                                                                                                                               rutu.y=200
                                                                                                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                                                                                                              zombieremaining=300

                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                              }


                                                                                                                                                                                                                                                                                                                                                                                                              if(mousePressedOver(gamerestartbutton)&&gamestate==="level6end"){
                                                                                                                                                                                                                                                                                                                                                                                                                buttonclicksound.play()

                                                                                                                                                                                                                                                                                                                                                                                                                gamestate="level6game"
                                                                                                                                                                                                                                                                                                                                                                                                                immunity=300
                                                                                                                                                                                                                                                                                                                                                                                                                gamebackbuttton.visible=false
                                                                                                                                                                                                                                                                                                                                                                                                                gamerestartbutton.visible=false
                                                                                                                                                                                                                                                                                                                                                                                                                rutucrying.visible=false
                                                                                                                                                                                                                                                                                                                                                                                                                rutu.visible=true
                                                                                                                                                                                                                                                                                                                                                                                                                rutu.x=300
                                                                                                                                                                                                                                                                                                                                                                                                               rutu.y=200
                                                                                                                                                                                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                                                                                                                                                                                              coronaremaining=300
                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              }

                                                                              if(mousePressedOver(gamerestartbutton)&&gamestate==="level1win"){
                                                                                buttonclicksound.play()

                                                                                gamestate="level1game"
                                                                                playerpromise=200
                                                                                gamebackbuttton.visible=false
                                                                                gamerestartbutton.visible=false
                                                                                laughingrutu.visible=false
                                                                                rutuinforest.spt.visible=true
                                                                                rutuinforest.spt.x=500
                                                                                rutuinforest.spt.y=200
                                                                                time=200
                                                                                forestenergy=0
                                                                                
                                                                                
                                                                                                                                                              }


                                                                                                                                                              if(mousePressedOver(gamerestartbutton)&&gamestate==="level2win"){
                                                                                                                                                                buttonclicksound.play()

                                                                                                                                                                gamestate="level2game"
                                                                                                                                                                santalife=300
                                                                                                                                                                gamebackbuttton.visible=false
                                                                                                                                                                gamerestartbutton.visible=false
                                                                                                                                                                laughingrutu.visible=false
                                                                                                                                                            santarutu.visible=true
                                                                                                                                                                santarutu.x=500
                                                                                                                                                                santarutu.y=200
                                                                                                                                                               
                                                                                                                                                                happinessrate=0
                                                                                                                                                                
                                                                                                                                                                
                                                                                                                                                                                                                                              }


                                                                                                                                                                                                                                              if(mousePressedOver(gamerestartbutton)&&gamestate==="level3win"){
                                                                                                                                                                                                                                                gamestate="level3game"
                                                                                                                                                                                                                                                gamebackbuttton.visible=false
                                                                                                                                                                                                                                                gamerestartbutton.visible=false
                                                                                                                                                                                                                                                laughingrutu.visible=false
                                                                                                                                                                                                                                                rutuplane.visible=true
                                                                                                                                                                rutuplane.x=300
                                                                                                                                                               rutuplane.y=200
                                                                                                                                                               planebullet.visible=true
                                                                                                                                                               planebullet.x=300
                                                                                                                                                               planebullet.y=200
                                                                                                                                                                planelife=300
                                                                                                                                                                enemykilled=20
                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                              }


                                                                                                                                                                                                                                                                                                                              if(mousePressedOver(gamerestartbutton)&&gamestate==="level4win"){
                                                                                                                                                                                                                                                                                                                                buttonclicksound.play()

                                                                                                                                                                                                                                                                                                                                gamestate="level4game"
                                                                                                                                                                                                                                                                                                                                gamebackbuttton.visible=false
                                                                                                                                                                                                                                                                                                                                gamerestartbutton.visible=false
                                                                                                                                                                                                                                                                                                                                laughingrutu.visible=false
                                                                                                                                                                                                                                                                                                                                dino.visible=true
                                                                                                                                                                                                                                                dino.x=300
                                                                                                                                                                                                                                                dino.y=200
                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                                dinolife=300
                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                              }

                                                                                                                                                                                                                                                                                                                                                                                                              if(mousePressedOver(gamerestartbutton)&&gamestate==="level5win"){
                                                                                                                                                                                                                                                                                                                                                                                                                buttonclicksound.play()

                                                                                                                                                                                                                                                                                                                                                                                                                gamestate="level5game"
                                                                                                                                                                                                                                                                                                                                                                                                                gamebackbuttton.visible=false
                                                                                                                                                                                                                                                                                                                                                                                                                gamerestartbutton.visible=false
                                                                                                                                                                                                                                                                                                                                                                                                                laughingrutu.visible=false
                                                                                                                                                                                                                                                                                                                                                                                                                rutu.visible=true
                                                                                                                                                                                                                                                                                                                                rutu.x=300
                                                                                                                                                                                                                                                                                                                                rutu.y=200
                                                                                                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                                                                                                                rutulife=300
                                                                                                                                                                                                                                                                                                                                                    zombieremaining=300                                                        
                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              }

                                                                              if(mousePressedOver(gamebackbuttton)&&gamestate==="level1end"){
                                                                                buttonclicksound.play()

                                                                                gamestate="levels"
                                                                                this.level1.show()
                                                                                this.level2.show()
                                                                                this.level3.show() 
                                                                                this.level4.show()
                                                                                this.level5.show()
                                        this.level6.show()
                                                                                playerpromise=200
                                                                                gamebackbuttton.visible=false
                                                                                gamerestartbutton.visible=false
                                                                                rutucrying.visible=false
                                                                                rutuinforest.spt.visible=false
                                                                                rutuinforest.spt.x=500
                                                                                rutuinforest.spt.y=200
                                                                                rutuinstart.visible=true
                                                                                time=200
                                                                                forestenergy=0
                                                                                citybackground.visible=false
                                                                                rutugamelogo.visible=true
                                                                                
                                                                                
                                                                                                                                                              }


                                                                                                                                                              if(mousePressedOver(gamebackbuttton)&&gamestate==="level2end"){
                                                                                                                                                                buttonclicksound.play()

                                                                                                                                                                gamestate="levels"
                                                                                                                                                                this.level1.show()
                                                                                                                                                                this.level2.show()
                                                                                                                                                                this.level3.show() 
                                                                                                                                                                this.level4.show()
                                                                                                                                                                this.level5.show()
                                        this.level6.show()
                                                                                                                                                                santalife=300
                                                                                                                                                                gamebackbuttton.visible=false
                                                                                                                                                                gamerestartbutton.visible=false
                                                                                                                                                                backbutton4.visible=false
                                                                                                                                                                candycanecollected=0
                                                                                                                                                                rutucrying.visible=false
                                                                                                                                                                santarutu.visible=false
                                                                                                                                                                santarutu.x=500
                                                                                                                                                            santarutu.y=200
                                                                                                                                                                rutuinstart.visible=true
                                                                                                                                                               happinessrate=0
                                                                                                                                                                snowbackground.visible=false
                                                                                                                                                                rutugamelogo.visible=true
                                                                                                                                                                
                                                                                                                                                                
                                                                                                                                                                                                                                              }

                                                                                                                                                                                                                                              if(mousePressedOver(gamebackbuttton)&&gamestate==="level3end"){
                                                                                                                                                                                                                                                buttonclicksound.play()

                                                                                                                                                                                                                                                gamestate="levels"
                                                                                                                                                                                                                                                this.level1.show()
                                                                                                                                                                                                                                                this.level2.show()
                                                                                                                                                                                                                                                this.level3.show() 
                                                                                                                                                                                                                                                this.level4.show()
                                                                                                                                                                                                                                                this.level5.show()
                                        this.level6.show()
                                                                                                                                                                                                                                                gamebackbuttton.visible=false
                                                                                                                                                                                                                                                gamerestartbutton.visible=false
                                                                                                                                                                                                                                                backbutton4.visible=false
                                                                                                                                                                                                                                                rutucrying.visible=false
                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                rutuinstart.visible=true
                                                                                                                                                                                                                                                skybackground.visible=false
                                                                                                                                                                                                                                                rutugamelogo.visible=true
                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                              }


                                                                                                                                                                                                                                                                                                                              if(mousePressedOver(gamebackbuttton)&&gamestate==="level4end"){
                                                                                                                                                                                                                                                                                                                                buttonclicksound.play()

                                                                                                                                                                                                                                                                                                                                gamestate="levels"
                                                                                                                                                                                                                                                                                                                                this.level1.show()
                                                                                                                                                                                                                                                                                                                                this.level2.show()
                                                                                                                                                                                                                                                                                                                                this.level3.show() 
                                                                                                                                                                                                                                                                                                                                this.level4.show()
                                                                                                                                                                                                                                                                                                                                this.level5.show()
                                        this.level6.show()
                                                                                                                                                                                                                                                                                                                                gamebackbuttton.visible=false
                                                                                                                                                                                                                                                                                                                                gamerestartbutton.visible=false
                                                                                                                                                                                                                                                                                                                                backbutton4.visible=false
                                                                                                                                                                                                                                                                                                                                rutucrying.visible=false
                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                rutuinstart.visible=true
                                                                                                                                                                                                                                                                                                                                nightbackground.visible=false
                                                                                                                                                                                                                                                                                                                                rutugamelogo.visible=true
                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                              }


                                                                                                                                                                                                                                                                                                                                                                                                              if(mousePressedOver(gamebackbuttton)&&gamestate==="level5end"){
                                                                                                                                                                                                                                                                                                                                                                                                                buttonclicksound.play()

                                                                                                                                                                                                                                                                                                                                                                                                                gamestate="levels"
                                                                                                                                                                                                                                                                                                                                                                                                                this.level1.show()
                                                                                                                                                                                                                                                                                                                                                                                                                this.level2.show()
                                                                                                                                                                                                                                                                                                                                                                                                                this.level3.show() 
                                                                                                                                                                                                                                                                                                                                                                                                                this.level4.show()
                                                                                                                                                                                                                                                                                                                                                                                                                this.level5.show()
                                                                                                                        this.level6.show()
                                                                                                                                                                                                                                                                                                                                                                                                                gamebackbuttton.visible=false
                                                                                                                                                                                                                                                                                                                                                                                                                gamerestartbutton.visible=false
                                                                                                                                                                                                                                                                                                                                                                                                                backbutton4.visible=false
                                                                                                                                                                                                                                                                                                                                                                                                                rutucrying.visible=false
                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                                                rutuinstart.visible=true
                                                                                                                                                                                                                                                                                                                                                                                                                nightcitybackground.visible=false
                                                                                                                                                                                                                                                                                                                                                                                                                rutugamelogo.visible=true
                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              }



                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              if(mousePressedOver(gamebackbuttton)&&gamestate==="level6end"){
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                buttonclicksound.play()

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                gamestate="levels"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                this.level1.show()
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                this.level2.show()
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                this.level3.show() 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                this.level4.show()
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                this.level5.show()
                                                                                                                                                                                                        this.level6.show()
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                gamebackbuttton.visible=false
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                gamerestartbutton.visible=false
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                backbutton4.visible=false
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                backbutton3.visible=true

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                rutucrying.visible=false
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                rutuinstart.visible=true
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                skycitybackground.visible=false
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                rutugamelogo.visible=true
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              }

                                                                                                                                                              
                                                                              if(mousePressedOver(gamebackbuttton)&&gamestate==="level1win"){
                                                                                buttonclicksound.play()

                                                                                gamestate="levels"
                                                                                this.level1.show()
                                                                                this.level2.show()
                                                                                this.level3.show() 
                                                                                this.level4.show()
                                                                                playerpromise=200
                                                                                gamebackbuttton.visible=false

                                                                                gamerestartbutton.visible=false
                                                                                laughingrutu.visible=false
                                                                                rutuinforest.spt.visible=false
                                                                                rutuinforest.spt.x=500
                                                                                rutuinforest.spt.y=200
                                                                                rutuinstart.visible=true
                                                                                time=200
                                                                                forestenergy=0
                                                                                citybackground.visible=false
                                                                                rutugamelogo.visible=true
                                                                                
                                                                                
                                                                                                                                                              }


                                                                                                                                                              if(mousePressedOver(gamebackbuttton)&&gamestate==="level2win"){
                                                                                                                                                                buttonclicksound.play()

                                                                                                                                                                gamestate="levels"
                                                                                                                                                                this.level1.show()
                                                                                                                                                                this.level2.show()
                                                                                                                                                                this.level3.show() 
                                                                                                                                                                this.level4.show()
                                                                                                                                                                this.level5.show()
                                        this.level6.show()
                                                                                                                                                                santalife=300
                                                                                                                                                                gamebackbuttton.visible=false
                                                                                                                                                                gamerestartbutton.visible=false
                                                                                                                                                                backbutton4.visible=false
                                                                                                                                                                laughingrutu.visible=false
                                                                                                                                                                santarutu.visible=false
                                                                                                                                                                santarutu.x=500
                                                                                                                                                            santarutu.y=200
                                                                                                                                                                rutuinstart.visible=true
                                                                                                                                                               happinessrate=0
                                                                                                                                                                snowbackground.visible=false
                                                                                                                                                                rutugamelogo.visible=true
                                                                                                                                                                
                                                                                                                                                                
                                                                                                                                                                                                                                              }

                                                                                                                                                                                                                                              if(mousePressedOver(gamebackbuttton)&&gamestate==="level3win"){
                                                                                                                                                                                                                                                buttonclicksound.play()

                                                                                                                                                                                                                                                gamestate="levels"
                                                                                                                                                                                                                                                this.level1.show()
                                                                                                                                                                                                                                                this.level2.show()
                                                                                                                                                                                                                                                this.level3.show() 
                                                                                                                                                                                                                                                this.level4.show()
                                                                                                                                                                                                                                                this.level5.show()
                                        this.level6.show()
                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                                gamebackbuttton.visible=false
                                                                                                                                                                                                                                                gamerestartbutton.visible=false
                                                                                                                                                                                                                                                backbutton4.visible=false
                                                                                                                                                                                                                                                laughingrutu.visible=false
                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                rutuinstart.visible=true
                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                skybackground.visible=false
                                                                                                                                                                                                                                                rutugamelogo.visible=true
                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                              }


                                                                                                                                                                                                                                                                                                                              if(mousePressedOver(gamebackbuttton)&&gamestate==="level4win"){
                                                                                                                                                                                                                                                                                                                                buttonclicksound.play()

                                                                                                                                                                                                                                                                                                                                gamestate="levels"
                                                                                                                                                                                                                                                                                                                                this.level1.show()
                                                                                                                                                                                                                                                                                                                                this.level2.show()
                                                                                                                                                                                                                                                                                                                                this.level3.show() 
                                                                                                                                                                                                                                                                                                                                this.level4.show()
                                                                                                                                                                                                                                                                                                                                this.level5.show()
                                        this.level6.show()
                                                                                                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                                                                                                                gamebackbuttton.visible=false
                                                                                                                                                                                                                                                                                                                                gamerestartbutton.visible=false
                                                                                                                                                                                                                                                                                                                                backbutton4.visible=false
                                                                                                                                                                                                                                                                                                                                laughingrutu.visible=false
                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                               dino.x=300
                                                                                                                                                                                                                                                                                                                               dino.y=200
                                                                                                                                                                                                                                                                                                                                rutuinstart.visible=true
                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                nightbackground.visible=false
                                                                                                                                                                                                                                                                                                                                rutugamelogo.visible=true
                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                              }


                                                                                                                                                                                                                                                                                                                                                                                                              if(mousePressedOver(gamebackbuttton)&&gamestate==="level5win"){
                                                                                                                                                                                                                                                                                                                                                                                                                buttonclicksound.play()

                                                                                                                                                                                                                                                                                                                                                                                                                gamestate="levels"
                                                                                                                                                                                                                                                                                                                                                                                                                this.level1.show()
                                                                                                                                                                                                                                                                                                                                                                                                                this.level2.show()
                                                                                                                                                                                                                                                                                                                                                                                                                this.level3.show() 
                                                                                                                                                                                                                                                                                                                                                                                                                this.level4.show()
                                                                                                                                                                                                                                                                                                                                                                                                                this.level5.show()
                                                                                                                        this.level6.show()
                                                                                                                                                                                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                                                                                                                                                                                                gamebackbuttton.visible=false
                                                                                                                                                                                                                                                                                                                                                                                                                gamerestartbutton.visible=false
                                                                                                                                                                                                                                                                                                                                                                                                                backbutton4.visible=false
                                                                                                                                                                                                                                                                                                                                                                                                                laughingrutu.visible=false
                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                               rutu.x=300
                                                                                                                                                                                                                                                                                                                                                                                                              rutu.y=200
                                                                                                                                                                                                                                                                                                                                                                                                                rutuinstart.visible=true
                                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                                                nightcitybackground.visible=false
                                                                                                                                                                                                                                                                                                                                                                                                                rutugamelogo.visible=true
                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              }
  
}






function level1story(){

  textFont("Algerian")
  fill("blue")
  textSize(50)
  stroke("black")
  text("JunkFood fighters",550,150)
  textFont("Algerian")
  fill("green")
  textSize(30)
  text(" Rutu is so determined to his words.",500,200)
  text("one day he promised his mom that he ",500,250)
  text(" will always eat fruits and vegetables ",500,300)
  text("and he will not eat junk food  ",500,350)
  text("doing this was not less than a adventure. ",500,400)
  text("you have to help him do this. eat only fruits and vegetables",500,450)
  text(" nothing other than that ",500,500)

}

function level2story(){

  textFont("Algerian")
  fill("blue")
  textSize(50)
  stroke("black")
  strokeWeight(3)
  text("santa help",630,150)
  textFont("Algerian")
  fill("blue")
  textSize(30)
  text("ho ho ho...christmas has come and rutu is so excited for his gift and",300,200)
  text(" for meeting santa as rutu and santa are best friends...santa always ",300,250)
  text("brings big gifts for rutu...but this time he gave rutu a much big gift",300,300)
  text("of an adventure...this time santa got fever and cannot go out and give ",300,350)
  text("gifts to children now he asked rutu for help and our rutu never says",300,400)
  text("no for help...rutu now have become santa and you have to help rutu to ",300,450)
  text("deliever gifts...happiness of all children is now dependent on you and rutu",300,500)

}


function level3story(){

  textFont("Algerian")
  fill("blue")
  textSize(50)
  stroke("black")
  strokeWeight(3)
  text("plane terrain",630,150)
  textFont("Algerian")
  fill("lightgreen")
  textSize(30)
  text("as we know..our rutu is so talented and his talent was also recognised",300,200)
  text("by indian aeronautics organisation and rutu got selected for their",300,250)
  text("special program pilotkids and this program could fulfill his dream of  ",300,300)
  text("becoming a pilot but for that he have to pass a test and if he passes ",300,350)
  text("this test....he will get admission in the flight school...... now rutu",300,400)
  text("needs your help to make his dream fulfilled....",400,450)
  text("All The Best",700,500)

}

function level4story(){

  textFont("Algerian")
  fill("blue")
  textSize(50)
  stroke("black")
  strokeWeight(3)
  text("save rutu",630,150)
  textFont("Algerian")
  fill("darkred")
  textSize(30)
  text("OH NO!!  rutu has been kidnapped by an fantasy magician..... and now he ",300,200)
  text("asked 'dino' rutus pet to complete his adventure and then only he coud",300,250)
  text("reach rutu....and this definately wont be easy...but like our rutu is ",300,300)
  text("not afraid of challenges..his pet dino is also not afraid of challenges",300,350)
  text("this is an copy of that adventure of dino and you have to help dino",300,400)
  text("to rescue rutu.....",710,450)
  text("All The Best",700,500)

}


function level6story(){

  textFont("Algerian")
  fill("blue")
  textSize(50)
  stroke("black")
  strokeWeight(3)
  text("Go Corona",630,150)
  textFont("Algerian")
  fill("orange")
  textSize(30)
  text("OMG !!!!!  a more big problem than zombie acolypse has come and its name is",200,200)
  text("corona....it will attack and kill people mercissely and its spread all over the ",200,250)
  text("world...but as we know that each problem is having a solution like that corona  ",200,300)
  text("also have a vaccine.. just the problem is that someone have to shoot it on them ",200,350)
  text("and our rutu confidently said yes for this task but now you have to help rutu to",200,400)
  text("accomplish this mission and save the world.... ",400,450)
  text("All The Best",700,500)

}

function level1storybut2(){

  textFont("Algerian")
  fill("blue")
  textSize(50)
  stroke("black")
  text("JunkFood fighters",550,150)
  textFont("Algerian")
  fill("red")
  textSize(30)
  text(" press right arrow key to move right..",500,200)
  text("press left arrow key to move left",500,250)
  text("and press up arrow key to jump...",500,300)
  text("avoid all junk food and if you eat junk ",500,350)
  text("food your promise rate will decrease...",500,400)
  text("eat only fruits and vegetables and this will ",500,450)
  text("increase your energy...",500,500)
  text("when your energy becomes 100 you will win.. ",500,550)

}

function level2storybut2(){

  textFont("Algerian")
  fill("blue")
  textSize(50)
  stroke("black")
  text("santa help",550,150)
  textFont("Algerian")
  fill("red")
  textSize(30)
  text(" press right arrow key to move right..",500,200)
  text("press left arrow key to move left",500,250)
  text("press up arrow key to jump...",500,300)
  text("and press down arrow key to release gifts and make ",500,350)
  text(" sure that gifts are touching flags that will come than only",500,400)
  text("gifts will be counted....avoid bell,snowmans and other ",500,450)
  text("obstacles....and collect candysticks too ",500,500)
  text("when the yellow bar will be full than you will win ",500,550)
  text("note: the yellow bar will increase only when you will ",500,600)
  text(" release gifts that are touching flags ",500,650)



}

function level3storybut2(){

  textFont("Algerian")
  fill("blue")
  textSize(50)
  stroke("black")
  text("plane terrain",550,150)
  textFont("Algerian")
  fill("red")
  textSize(30)
  text(" press right arrow key to move right..",500,200)
  text("press up arrow key to move up",500,250)
  text("and press down arrow key to move down",500,300)
  text("and press space to shoot fireballs ",500,350)
  text("there are total 20 enemy planes which are red",500,400)
  text("in color....and when you will them enemy remaining ",500,450)
  text("will decrease and also keep a  watch on fuel and keep",500,500)
  text("on collecting fuels...avoid hot air balloon,birds and ",500,550)
  text("other obstacles....when enemy remaining will be 0 you will win...",500,600)


}

function level4storybut2(){

  textFont("Algerian")
  fill("blue")
  textSize(50)
  stroke("black")
  text("Save rutu",550,150)
  textFont("Algerian")
  fill("red")
  textSize(30)
  text(" press right arrow key to move right..",500,200)
  text(" press up arrow key to jump...",500,250)
  text("and dino has limited energy so you have",500,300)
  text("to keep on eating tomato to increase dinos",500,350)
  text("energy...avoid wizard,crow,rock and other",500,400)
  text("obstacles....when the distance become 0 you  ",500,450)
  text("will win...",500,500)
  text("please save rutu...... ",500,550)

}



function level6storybut2(){

  textFont("Algerian")
  fill("blue")
  textSize(50)
  stroke("black")
  text("go corona",550,150)
  textFont("Algerian")
  fill("red")
  textSize(30)
  text(" press right arrow key to move right..",500,200)
  text("press left arrow key to move left",500,250)
  text("press up arrow key to jump...",500,300)
  text("and press space to shoot vaccine on corona",500,350)
  text("collect mask and sanitizer which will increase ",500,400)
  text("your immunity...avoid corona,barricades,infected person ",500,450)
  text("and other obstacle...when the corona bar will be empty you",500,500)
  text("will win and it will become empty when you will shoot coronas...",500,550)

}

function spawnforestobstacles(){
  if(frameCount%150===0){
    forestobstacle=createSprite() 
    forestobstacle.x=width/1
    forestobstacle.y=height/1.1
    forestobstacle.w=30
    forestobstacle.h=30
    forestobstacle.velocityX=-8;
    //forestobstacle.debug=true
    forestobstaclegroup.add(forestobstacle)
    //car.debug=true
    //forestobstacle.setCollider("rectangle",0,0,50,80)
    
    var forestobstacleimage=Math.round(random(1,4))
    switch(forestobstacleimage){
      case 1:forestobstacle.addImage(hotdogimage) 
      forestobstacle.scale=0.21;
      forestobstacle.setCollider("rectangle",0,0,210,250)
      break;
       case 2:forestobstacle.addImage(hamburgerimage) 
       forestobstacle.scale=0.35;
       forestobstacle.setCollider("rectangle",0,0,210,250)
      break;
       case 3:forestobstacle.addImage(colaimage) 
       forestobstacle.scale=0.14;
       forestobstacle.setCollider("rectangle",0,0,210,250)
      break;
      case 4:forestobstacle.addImage(pizzaimage) 
      forestobstacle.scale=0.4;
      forestobstacle.setCollider("rectangle",0,0,210,250)
     break;  
        
    }  
    }
}

function spawnforestfruitsandvegetables(){
  if(frameCount%60===0){
    forestfruits=createSprite(width/1,random([height/2,height/1.3,height/1.6,height/1.8]),30,30) 
    forestfruits.velocityX=-8;
    forestfruitsgroup.add(forestfruits)
    //car.debug=true
    //forestobstacle.setCollider("rectangle",0,0,50,80)
    
    var   forestfruitsimage=Math.round(random(1,4))
    switch(forestfruitsimage){
      case 1:  forestfruits.addImage(tomatoimage) 
      forestfruits.scale=0.2;
      break;
       case 2:  forestfruits.addImage(cucumberimage) 
       forestfruits.scale=0.2;
      break;
       case 3:  forestfruits.addImage(grapesimage) 
       forestfruits.scale=0.2;
      break;
      case 4:  forestfruits.addImage(bananaimage) 
      forestfruits.scale=0.2;
     break;  
        
    }  
    }
}

function spawncandycane(){
if(frameCount%170===0){
candycane=createSprite(width/1,random([height/2,height/1.3,height/1.6,height/1.8]),30,30) 
candycane.velocityX=-8;
candycane.scale=0.07
//candycane.debug=true
candycanegroup.add(candycane)
candycane.addImage(candycaneimage)

}

}

function spawnsnowobstacles(){
  if(frameCount%270===0){
  snowobstacle=createSprite(width/1,500,30,30) 
  snowobstacle.velocityX=-8;
  snowobstacle.scale=0.1
  //snowobstacle.debug=true
  snowobstaclegroup.add(snowobstacle)

  var   snowobstacleimage=Math.round(random(1,3))
  switch(snowobstacleimage){
    case 1:  snowobstacle.addImage(bellimage) 
    snowobstacle.scale=0.2;
    snowobstacle.setCollider("circle",0,0,300)
    break;
     case 2:  snowobstacle.addImage(pinetreeimg) 
     snowobstacle.scale=0.3
     snowobstacle.setCollider("rectangle",0,0,350,750)
    break;
     case 3:  snowobstacle.addImage(snowmanimg) 
     snowobstacle.scale=0.1;
     snowobstacle.setCollider("rectangle",0,0,500,2150)
    break;
    
      
  } 
  
  }
  
  }

  function spawnflag(){
if(frameCount%230===0){
flag=createSprite(width/1,500,30,30)
flag.velocityX=-8;
flag.scale=0.1
flaggroup.add(flag)
//flag.debug=true
flag.setCollider("rectangle",-400,1200,1000,700)
flag.addImage(flagimg)
}
  }


  function spawnskyhotairballoon(){
    if(frameCount%250===0){
      skyobstacle1=createSprite(width/1,Math.round(random(100,600)),30,30) 
      skyobstacle1.velocityX=-8;
      skyobstacle1.scale=0.05
      //skyobstacle1.debug=true
      skyobstaclegroup1.add(skyobstacle1)
      skyobstacle1.addImage(hotairballoonimage)
     
      }

  }

  function spawnskycrow(){
    if(frameCount%50===0){
      skyobstacle2=createSprite(width/1,Math.round(random(100,600)),30,30) 
      skyobstacle2.velocityX=-8;
      skyobstacle2.scale=0.3
      //skyobstacle2.debug=true
      skyobstaclegroup2.add(skyobstacle2)
      skyobstacle2.addAnimation("crow",crowimg)
      skyobstacle2.setCollider("rectangle",0,0,200,100)
     
      }

  }

  function spawnskyplane(){
    if(frameCount%300===0){
      skyobstacle3=createSprite(width/1,Math.round(random(100,600)),30,30) 
      skyobstacle3.velocityX=-8;
      skyobstacle3.scale=0.5
     // skyobstacle3.debug=true
      skyobstaclegroup3.add(skyobstacle3)
      skyobstacle3.addAnimation("obstacleplane",fighterplaneimg)
      skyobstacle3.setCollider("rectangle",0,0,300,200)

     
      }

  }

  function spawnplanefuel(){
    if(frameCount%200===0){
      fuel=createSprite(width/1,Math.round(random(100,600)),30,30) 
      fuel.velocityX=-8;
      fuel.scale=0.02
      //snowobstacle.debug=true
      fuelgroup.add(fuel)
      fuel.addImage("fuel",fuelimage)
     
      }




  }

  function spawnwizard(){
    if(frameCount%200===0){
     wizard=createSprite(width/1,500,30,30) 
    wizard.velocityX=-8;
      wizard.scale=0.5
      //wizard.debug=true
      wizard.setCollider("rectangle",0,0,120,250)
      wizardgroup.add(wizard)
      wizard.addAnimation("wizardimg",wizardimg2)
          
     

      }



  }

  function spawnskycrow2(){
    if(frameCount%70===0){
      crow=createSprite(width/1,Math.round(random(0,150)),30,30) 
crow.velocityX=-8;
      crow.scale=0.3
      //skyobstacle2.debug=true
      crowgroup.add(crow)
      crow.addAnimation("crow",crowimg)
      crow.setCollider("rectangle",0,0,200,100)
     
      }

  }

  function spawnrock(){
    if(frameCount%350===0){
      rock=createSprite(width/1,500,30,30) 
      rock.velocityX=-8;
      rock.scale=0.1
      //rock.debug=true
      rockgroup.add(rock)
      rock.addImage(rockimg)
      rock.setCollider("rectangle",0,0,200,100)
     
      }
  }

  function spawnvillanplants(){
    if(frameCount%500===0){
plants=createSprite(width/1,500,30,30)
plants.velocityX=-8;
plantsgroup.add(plants)
plantsimage=Math.round(random(1,2))
switch(plantsimage){
case 1:plants.addImage(plantsimg1)
plants.scale=0.26
//plants.debug=true
plants.setCollider("rectangle",0,0,400,300)
break;
case 2:plants.addImage(plantsimg2)
plants.scale=0.04
//plants.debug=true

break;



}

    }




  }

  function spawntomatocoin1(){
if(frameCount%150===0){
  tomatocoin1=createSprite(width/1,Math.round(random(200,500)),30,30)
  tomatocoin1.addImage(tomatoimage)
  tomatocoin1.velocityX=-8
  tomatocoin1.scale=0.2
  tomatocoin1group.add(tomatocoin1)


}}

function spawntomatocoin2(){
  if(frameCount%180===0){
    tomatocoin2=createSprite(width/1,Math.round(random(200,500)),30,30)
    tomatocoin2.addImage(tomatoimage)
    tomatocoin2.velocityX=-8
    tomatocoin2.scale=0.2
    tomatocoin2group.add(tomatocoin2)
  
  
  }}

  
  function spawntomatocoin3(){
    if(frameCount%210===0){
      tomatocoin3=createSprite(width/1,Math.round(random(200,500)),30,30)
      tomatocoin3.addImage(tomatoimage)
      tomatocoin3.velocityX=-8
      tomatocoin3.scale=0.2
      tomatocoin3group.add(tomatocoin3)
    
    
    }
    


  }







function spawnskycrow3(){
  if(frameCount%70===0){
    crow2=createSprite(width/1,Math.round(random(0,150)),30,30) 
crow2.velocityX=-8;
    crow2.scale=0.3
    //skyobstacle2.debug=true
    crowgroup2.add(crow2)
    crow2.addAnimation("crow",crowimg)
    crow2.setCollider("rectangle",0,0,200,100)
   
    }

}

function spawncorona1(){
if(frameCount%150===0){
corona1=createSprite(width/1,Math.round(random(250,350)),50,50)
corona1.velocityX=-8
corona1.scale=0.35
corona1group.add(corona1)
corona1.addImage(corona1img)

}

}

function spawncorona2(){
  if(frameCount%350===0){
  corona2=createSprite(width/1,Math.round(random(350,450)),50,50)
  corona2.velocityX=-8
  corona2.scale=0.35
  corona2group.add(corona2)
  corona2.addImage(corona2img)
  
  }
  
  }

 

    function spawnbarricade2(){
      if(frameCount%750===0){
        barricade2=createSprite(width/1,565,50,50)
        barricade2group.add(barricade2)
        barricade2.addImage(barricadeimg)
        barricade2.velocityX=-8
        //barricade.debug=true
        barricade2.setCollider("rectangle",0,0,500,200)
        barricade2.scale=0.2
        
        }
    }

    function cartoonspawnmaskandsanitizer(){
if(frameCount%250===0){
mask=createSprite(width/1,500,50,50)
mask.velocityX=-8
maskgroup.add(mask)
mask.scale=0.5

maskimg2=Math.round(random(1,2))
switch(maskimg2){
case 1:mask.addImage(maskimg)
mask.scale=0.3
break;
case 2:mask.addImage(sanitizerimg)
mask.scale=0.03
break;



}
}

    }

    function spawniperson(){
if(frameCount%220===0){
  iperson=createSprite(width/1,500,50,50)
  iperson.addImage(infectedpersonimg)
  iperson.scale=0.5
  ipersongroup.add(iperson)
  iperson.velocityX=-8


}

    }

    function shootvaccine(){
vaccine=createSprite(rutu.x,rutu.y,50,20)
vaccine.addImage(vaccineimg)
vaccine.velocityX=16
vaccine.scale=0.26
vaccinegroup.add(vaccine)

    }


function showplayerpromise() {
  image(heartimg,520,70,70,70)
  strokeWeight(5)
  stroke("black")
  fill("white");
  rect(600,100,200, 20);
  fill("#f50057");
  rect(600,100,playerpromise, 20);
  //noStroke();
  
}


function showsantalife() {
  image(heartimg,535,90,50,50)
  strokeWeight(5)
  stroke("black")
  fill("white");
  rect(600,100,300, 20);
  fill("#ff0000");
  rect(600,100,santalife, 20);
  //noStroke();
  
}

function showhappinessrate() {
  image(happyimage,525,20,60,60)
  strokeWeight(5)
  stroke("black")
  fill("white");
  rect(600,50,300, 20);
  fill("#fddf00");
  rect(600,50,happinessrate, 20);
  //noStroke();
  
}

function showplanefuel() {
  image(fuelimage,525,20,60,60)
  strokeWeight(5)
  stroke("black")
  fill("white");
  rect(600,50,300, 20);
  fill("#fddf00");
  rect(600,50,planefuel,20);
  //noStroke();
  
}

function showplanelife(){
  image(heartimg,535,90,50,50)
  strokeWeight(5)
  stroke("black")
  fill("white");
  rect(600,100,300, 20);
  fill("#ff0000");
  rect(600,100,planelife, 20);





}

function showdinolife(){
  image(heartimg,535,90,50,50)
  strokeWeight(5)
  stroke("black")
  fill("white");
  rect(600,100,300, 20);
  fill("red");
  rect(600,100,dinolife, 20);

}

function showdinoenergy(){
  image(energyimage,525,20,70,70)
  strokeWeight(5)
  stroke("black")
  fill("white");
  rect(600,50,300, 20);
  fill("blue");
  rect(600,50,dinoenergy, 20);


}

function showrutulife(){
  image(heartimg,535,90,50,50)
  strokeWeight(5)
  stroke("black")
  fill("white");
  rect(600,100,300, 20);
  fill("red");
  rect(600,100,rutulife, 20);


}

function showzremaining(){
  image(zombieimg1,525,20,70,70)
  strokeWeight(5)
  stroke("black")
  fill("white");
  rect(600,50,300, 20);
  fill("lightgreen");
  rect(600,50,zombieremaining, 20);


}


function showrutu2life(){
  image(heartimg,535,30,50,50)
  strokeWeight(5)
  stroke("black")
  fill("white");
  rect(600,50,300, 20);
  fill("red");
  rect(600,50,immunity, 20);


}

function showcoronaremaining(){
  image(corona1img,535,90,60,60)
  strokeWeight(5)
  stroke("black")
  fill("white");
  rect(600,100,300, 20);
  fill("lightgreen");
  rect(600,100,coronaremaining, 20);

}




 


function reset() {
  ball.x=width/2;
  ball.y=height/2;
  ball.velocityX=0;
  ball.velocityY=0;
    playerpaddle.x=width/2
  }

  function shootasteroid(){
if(frameCount%60===0){
asteroid=createSprite(width,random(1,650),50,50)
asteroid.addImage(cartoonasteroidimage)
asteroid.velocityX=-7
asteroidgroup.add(asteroid)
asteroid.scale=0.2
asteroid.lifetime=250

}

  }

  function shootasteroid(){
    if(frameCount%100===0){
    asteroid=createSprite(width,random(1,650),50,50)
    asteroid.addImage(cartoonasteroidimage)
    asteroid.velocityX=-7
    asteroidgroup.add(asteroid)
    asteroid.scale=0.2
    asteroid.lifetime=250
    
    }
    
      }
      function shootasteroid2(){
        if(frameCount%130===0){
        asteroid2=createSprite(width,random(1,650),50,50)
        asteroid2.addImage(cartoonasteroidimage)
        asteroid2.velocityX=-7
        asteroid2group.add(asteroid2)
        asteroid2.scale=0.2
        asteroid2.lifetime=250
        
        }
        
          }
          function shootasteroid3(){
            if(frameCount%160===0){
            asteroid3=createSprite(width,random(1,650),50,50)
            asteroid3.addImage(cartoonasteroidimage)
            asteroid3.velocityX=-7
            asteroid3group.add(asteroid3)
            asteroid3.scale=0.2
            asteroid3.lifetime=250
            
            }
            
              }

              function shootasteroid4(){
                if(frameCount%60===0){
                asteroid4=createSprite(width,random(1,650),50,50)
                asteroid4.addImage(cartoonasteroidimage)
                asteroid4.velocityX=-7
                asteroid4group.add(asteroid4)
                asteroid4.scale=0.2
                asteroid4.lifetime=250
                
                }
                
                  }
            

  function shootspacebullet1(sx,sy){
spacebullet1=createSprite(sx,sy,100,20)
spacebullet1.addImage(planebulletimage)
spacebullet1.scale=0.3
spacebullet1.velocityX=9
spacebullet1.lifetime=250
spacebulletgroup.add(spacebullet1)
  }

  function spawnfruits1(){
if(frameCount%100===0){

  fruits1=createSprite(random(1,1400),0,20,20)
  fruits1.velocityY=9
  fruits1group.add(fruits1)
  fruits1.lifetime=300
 fruits1.addImage(tomatoimage) 
      fruits1.scale=0.3;
   
    } 



  }

  function spawnfruits2(){
    if(frameCount%150===0){
    
      fruits2=createSprite(random(1,1400),0,20,20)
      fruits2.velocityY=9
      fruits2group.add(fruits2)
      fruits2.lifetime=300
    
             fruits2.addImage(cucumberimage) 
          fruits2.scale=0.3;
         
            
        } 
    
    
    
      }


      function spawnfruits3(){
        if(frameCount%270===0){
          fruits3=createSprite(random(1,1400),0,20,20)
          fruits3.velocityY=9
          fruits3group.add(fruits3)
          fruits3.lifetime=300
        
                 fruits3.addImage(grapesimage) 
              fruits3.scale=0.3;
  
            } 
     
          }
     

          function spawnfruits4(){
            if(frameCount%500===0){
              fruits4=createSprite(random(1,1400),0,20,20)
              fruits4.velocityY=9
              fruits4group.add(fruits4)
              fruits4.lifetime=300
            
                     fruits4.addImage(bananaimage) 
                  fruits4.scale=0.3;
      
                } 
         
              }
  

              function pipe_move(){
                if (frameCount % 75 === 0 ){
                  
                  pipe1 = createSprite(width,0,10,100);
                  pipe1.addImage(pipeNorth_image);
                  pipe1.y = random(0,120);
                  pipe1.velocityX = -10;
                  pipe1Group.add(pipe1);
                  pipe1Group.setLifetimeEach(144);
                  fg.depth=pipe1.depth
                  fg.depth=fg.depth+10
                 
                  pipe2 = createSprite(width,512,10,100);
                  pipe2.addImage(pipeSouth_image);
                  pipe2.y = random(490,650);
                  pipe2.velocityX = -10;
                  pipe2Group.add(pipe2);
                  pipe2Group.setLifetimeEach(144);
                  fg.depth=pipe2.depth
                  fg.depth=fg.depth+10
                
                
                }
                
                }
                
                function reset20(){
                  gameState10 = MIDDLE;
                  pipe1Group.destroyEach();
                  pipe2Group.destroyEach();
                  score = 0;
                  bird.visible=true;
                  restart.visible=false
                }






















                /////////////////////////////////////////////////////////////////////////////



          




