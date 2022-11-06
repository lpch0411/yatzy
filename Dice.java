package Yatzy;

import java.util.Random;

public class Dice {

	 public static void main(String[] args)
	    {
		 rollDice();
	    }
	 
public static int rollDice() {
    Random ran = new Random();
    int nxt = ran.nextInt(1,7);
    System.out.println("The Roll is : " + nxt);
	return nxt;
  }
}