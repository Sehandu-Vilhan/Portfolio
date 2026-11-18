
/**
 * Starter pack: opens the Helicopter panel inside its own window.
 * Right-click this file in NetBeans and choose "Run File" (Shift+F6).
 */
public class Starter {

    public static void main(String[] args) {
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                javax.swing.JFrame frame = new javax.swing.JFrame("Helicopter");
                frame.setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);
                frame.add(new Helicopter());
                frame.pack();
                frame.setLocationRelativeTo(null);
                frame.setVisible(true);
            }
        });
    }
}
