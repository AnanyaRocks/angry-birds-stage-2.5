class Chain{
    constructor(bodyA,bodyB){
    var options=
    
    {
        bodyA:bodyA,
        bodyB:bodyB,
        stiffness:0.04,
        length:10
    }

    this.chain=Constraint.create(options)
    World.add(world,this.chain);
}
display(){
    var pta=this.chain.bodyA.position;
    var ptb=this.chain.bodyB.position;
    line(pta.x,pta.y,ptb.x,ptb.y);
}
}