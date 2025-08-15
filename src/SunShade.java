public class SunShade {
    private int output;
    private boolean button;

    public SunShade(int output)
    {
        this.output = output;
        this.button = false;
    }

    public void sunShadeoutput()
    {
        if(button) { output = 1; }
        else { output = 0; }
    }

    public boolean pressButton() {
        this.button = true;
        return button;
    }

    public void resetButton(){ this.button = false; }
    public int getOutput(){ return output; }
    public boolean getButton(){ return button; }
}
