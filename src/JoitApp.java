import java.util.Scanner;

public class JoitApp {
    public TrafficLight trafficLight;
    public MistCooler mistCooler;
    public SunShade sunShade;
    public long startTime = 0;
    public long nowTime = 0;
    Scanner input = new Scanner(System.in);

    public void printMenu()
    {
        System.out.println("-----------------------");
        System.out.println("1. Traffic Light");
        System.out.println("2. Sun Shade");
        System.out.println("3. Mist cooler");
        System.out.println("4. exit");
        System.out.println("-----------------------");
    }



    public void trafficService() {
        TrafficLight trafficLight = new TrafficLight(0); // setting red light(0)
        System.out.println("Traffic Light");
        input.nextLine();
        System.out.println("press enter");
        input.nextLine();

        long buttonStartTime = System.currentTimeMillis();
        trafficLight.pressButton();
        System.out.println("on");

        long lastPrint = buttonStartTime;

        while (true) {
            long now = System.currentTimeMillis();
            if (now - lastPrint >= 1000) {  //
                System.out.println(11 - ((now - buttonStartTime) / 1000));
                lastPrint = now;
            }
            if (now - buttonStartTime >= 10_000) {  // 30초 경과 시 종료
                trafficLight.resetButton();
                System.out.println("off");
                break;
            }
        }
    }

    public void sunShadeService()
    {
        System.out.println("sun shade");
        System.out.println("press enter");
        input.nextLine();
        System.out.println("on"); //sun shade
    }

    public void mistCoolerService()
    {
        System.out.println("mist cooler");
        System.out.println("press enter");
        input.nextLine();
        System.out.println("on"); //mist cooler
    }

    public void menu()
    {
        int choice = 0;
        while (true){
            printMenu();
            choice = input.nextInt();

            if(choice == 1){
                nowTime = System.currentTimeMillis();
                if(nowTime - startTime < 120_000)
                { System.out.println("Wait " + (int)((nowTime - startTime) / 1000) + " secend"); }

                else {
                    trafficService();
                    startTime = System.currentTimeMillis();
                }
            }
            else if(choice == 2){ sunShadeService(); }
            else if(choice == 3){ mistCoolerService(); }
            else if(choice == 4){ break; }
        }
    }


}
