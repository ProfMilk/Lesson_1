public class Pokemon {
       String pokemon;
    String type;
    int  hp;
    int  attackPower;
  
  public Pokemon(String p1,String p2,int p3,int p4){
    pokemon=p1;
    type=p2;
    hp=p3;
    attackPower=p4;
  }
  public void displayStatus(){
     System.out.println(pokemon+" "+"("+type+")"+"-"+"HP"+":"+" "+hp);
  }
  public void setHealth(int Hp) {
            this.hp = Hp;
        }
  public void attack(Pokemon Opponent){
   System.out.println(this.pokemon+" attacked "+ Opponent.pokemon+" for "+ this.attackPower );
   Opponent.hp -= this.attackPower;
   
  }
  public boolean isFainted(){
      if(this.hp<=0){
          return true;
      }else{
          return false;
      }
          }
}
