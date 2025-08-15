public class TrafficLight {
    private int sign;
    private boolean button;

    public TrafficLight(int sign)
    {
        this.sign = sign;
        this.button = false;
    }

    public int carTrafficLight(){
        if(button) { return 0; }
        else { return 1; }
    }

    public int personTrafficLight(){
        if(button) { return 1; }
        else { return 0; }
    }

    public void pressButton() {
        this.button = true;
        carTrafficLight();
        personTrafficLight();
    }
    public void resetButton(){
        this.button = false;
        carTrafficLight();
        personTrafficLight();
    }

    public int getSign(){ return sign; }
    public boolean getButton(){ return button; }
}
