class Form{
    constructor(){
        this.input=createInput().attribute("placeholder"," name")
        this.playbtn=createButton("start")
        this.titleImg=createImg("title.png","gametitle")
        this.greeting=createElement("h1")
    }
    display(){
        this.input.position(width/2-120,height/2)
        this.playbtn.position(width/2-80,height/2+100)
        this.titleImg.position(200,100)
        this.input.class("ip")
        this.playbtn.class("pb")
        this.titleImg.class("ti")
        this.handlemouse()

       
    }
    handlemouse(){
        this.playbtn.mousePressed(()=>{
          //  console.log(16,pc,this.input.value,player)
            this.input.hide()
            this.playbtn.hide()
            this.greeting.html("wating for player 2")
            this.greeting.position(width/2,height/2)
            pc+=1
            player.name=this.input.value()
            player.index=pc
            player.add()
            player.setpc()
        })

    }
    hide(){
        this.titleImg.hide()
        this.playbtn.hide()
        this.greeting.hide()
        this.input.hide()
    }

}
