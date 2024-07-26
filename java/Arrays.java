package java;

import java.util.logging.Logger;

public class Arrays {
    private static final Logger logger = Logger.getLogger(Arrays.class.getName());

    public static void main(String[] args) {
        // Declaration and initialization
        int[] numbers = { 1, 2, 3, 4, 5 };
        String[] names = new String[3];
        names[0] = "John";
        names[1] = "Peter";
        names[2] = "Luis";

        // Access and modification
        logger.info("First element of numbers: " + numbers[0]);
        numbers[0] = 10;
        logger.info("Modified first element of numbers: " + numbers[0]);

        // Iteration over an array
        for (int i = 0; i < numbers.length; i++) {
            logger.info("Element at index " + i + ": " + numbers[i]);
        }

        // Iteration using an Enhanced For loop
        for (String name : names) {
            logger.info("Name: " + name);
        }
    }
}