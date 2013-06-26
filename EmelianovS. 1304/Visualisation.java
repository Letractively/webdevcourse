
//public class Visualisation {
//	public static void main(String[] args)
//	{
//		TextForm f = new TextForm(" Визуализация доски");
		
		
//	}
//}
import java.awt.*;  
import java.awt.event.WindowEvent.*;
import java.awt.event.*;
import java.awt.font.*; 
import java.awt.geom.*;
import java.util.Scanner;

import javax.swing.*;


public class Visualisation extends Canvas 
{ /*расширение класса Canvas */
	//выжные переменные
	private int  Desk_size;
	private boolean flag_parity; // флаг для контроля размера
	private boolean flag_some;
	private int mass; // масштаб
	
  public Visualisation() { 
	  Scanner Win=new Scanner(System.in);
	  System.out.println("Введите размерность доски: ");
	  if (Win.hasNextInt())
			this.Desk_size=Win.nextInt();
		else
			{
				System.out.println("Некорректные входные данные! \nПроизведен выход из программы.");
				System.exit(0);
			}
		
		if ((this.Desk_size<1)||(this.Desk_size>32))
		{
			System.out.println("Данная размерность не удовлетворяет условиям. \nПроизведен выход из программы.");
			System.exit(0);
		}
	 if(this.Desk_size<6) setSize(this.Desk_size*100, this.Desk_size*100);
	 else setSize(600, 600);
   // MyWindowAdapter adapter=new MyWindowAdapter(this);
  } 
  
  public static void main(String[] args) { 
	 
    Visualisation GP = new Visualisation(); 
    final Frame aFrame = new Frame("Шахматная доска"); // создали окно
    aFrame.addWindowListener(new WindowAdapter() // на выход по кнопке
    {
    	public void windowClosing(WindowEvent e)
    	{
    		aFrame.dispose();
    	}
    });
    aFrame.add(GP); // добавили размер
    aFrame.pack(); 
    aFrame.setVisible(true);
    
   
  } 
  public void desk(Graphics2D g2) 
  {
		if(Desk_size<6) this.flag_parity=false;
		else this.flag_parity=true;
		int checker=0;
		
		if(this.flag_parity==false) mass=100;
		else mass=600/this.Desk_size;
	
		
		for (int i = 0; i < this.Desk_size ; i += 1)
	    { 
	      for (int j = 0; j < this.Desk_size; j += 1) 
	      { 
	    	   
	    	   if((j+1)%2==1 )
	    	   {
	    		   if((i+1)%2==1) g2.setColor(new Color(175,121,47));
	    		   else g2.setColor(new Color(250,238,221)); 
	    	   }
	    	   else 
	    	   {
	    		   if((i+1)%2==0) g2.setColor(new Color(175,121,47));
	    		   else g2.setColor(new Color(250,238,221));
	    	   } 
	   		  
	   		   Q_place_print(g2, j*mass, i*mass,mass);// отрисовка клетки
	      } 
	    } 
		
  }
	 
	
  public void Queen_print(Graphics2D g3, int row, int collumn) 
  {
	 
      //Image img = Toolkit.getDefaultToolkit().getImage("C://glassfish3/jdk/CoreJavaBook/Visual/queen.bmp");
      
     // g3.drawImage(img, 30, 30, this);
	  
	  g3.setColor(new Color(123,62,231));
	  Ellipse2D Ferz=new Ellipse2D.Double();
	  Ferz.setFrameFromCenter(mass*row-mass/2, mass*collumn-mass/2,mass*row-mass/3,mass*collumn-mass/3);
	  g3.draw(Ferz);
	  g3.setColor(new Color(144,0,32));
      g3.fill(Ferz);
      
      
  }
  public void Q_place_print(Graphics2D gg, int row, int collumn, int board)
  {
	  Rectangle2D RR=new Rectangle2D.Double(row,collumn,board,board);
	  gg.draw(RR);
	  gg.fill(RR);
  }
  
  public void paint(Graphics g) 
  { 

	 
		queen obj=new queen(this.Desk_size);
		//g.setColor(new Color(150,180,90));
		//int parity=0;
		//boolean size_assist=false;
		
		Graphics2D g2=(Graphics2D) g;
		
	    this.desk(g2);
	    this.Queen_print(g2,2,3);
	    
		obj.layout(0);
		obj.total();
	
  }
}