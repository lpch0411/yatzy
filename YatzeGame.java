package Yatzy;

import java.util.Arrays;
import java.util.Random;

public class YatzeGame { 
    private int[] dice; 
    private int roll; 
    private boolean[] keep; 

    public YatzeGame() {
        dice = new int[5];
        roll = 0; 
        keep = new boolean[5];
    }

    public int[] getDice() {
        return dice; 
    }

    public int getRoll() { 
        return roll; 
    }

    public boolean[] getKeep() { 
        return keep; 
    }

    public void rollDice() {
        for (int i = 0; i < dice.length; i++) {
            if (!keep[i]) { 
            	Random ran = new Random();
            	dice[i] = Dice.rollDice(); //Generate a random number between 1 and 6 and store it in the dice array.
            	}
        }
        roll++;
    }

    public void toggleKeep(int index) {
        keep[index] = !keep[index]; //Toggle the value at the index of the keep array.
    }

    public void reset() { 
        Arrays.fill(dice, 0); //Fill the dice array with 0.
        Arrays.fill(keep, false); //Fill the keep array with false.
        roll = 0; //Reset the roll counter.
    }
}
