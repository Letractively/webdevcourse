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