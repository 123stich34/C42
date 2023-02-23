class Player {
    constructor(){
    this.name=""
    this.index=null
    this.x=0 
    this.y=0
    this.score=0
    this.rank=0
    this.fuel=200
    this.life=200

    }
     getpc(){
        db.ref("pc").on("value",(a)=>{
            pc=a.val()
        })
     }
     setpc(){
        db.ref("/").update({pc:pc})
        
     }
     add(){
      if(this.index==1){
         this.x=730
      }
   else{
      this.x=1130
   }
        db.ref("players/player"+this.index).update({name:this.name,
      x:this.x,y:828,score:this.score,rank:this.rank
      
      })

     }
     static getplayers(){
      db.ref("players").on("value",(d)=>{
         allPlayers=d.val()
      })

     }

update(){
   db.ref("players/player"+this.index).update({name:this.name,
      x:this.x,y:this.y,rank:this.rank,score:this.score
      })  
}
getfirstcar(){
   db.ref("firstcar").on("value",(d)=>{
      this.rank=d.val()
   })

}
static setfirstcar(r){db.ref("/").update({firstcar:r
})

}
}