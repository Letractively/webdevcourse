
import java.util.Scanner;

public class queen 
{
	private int n; //размерность доски (NxN)
	private int num; //число расстановок
	private boolean emptyHrz[]=new boolean[31]; //горизонтальная полоса - пуста
	private int locInVrt[]=new int[31]; //расположение ферзя по вертикали
	private boolean mainDiag[]=new boolean[62]; //главная диагональ - пуста
	private boolean secDiag[]=new boolean[62]; //побочная диагональ - пуста
	
	
	queen(int n)
	{
		this.n=n;
		
		for (int i=0; i<n; i++)
		{
			emptyHrz[i]=true;
			locInVrt[i]=-1;
		};
		
		for (int j=0; j<(2*n-1); j++)
		{
			mainDiag[j]=true;
			secDiag[j]=true;
		};
		
		this.num=0;
	};
	
	public void layout(int i) //расстановка элементов на доске
	{
		if (i<n)
			for (int j=0; j<n; j++)
			{
				if (emptyHrz[j] && mainDiag[i+j] && secDiag[i-j+n-1])
				{
					locInVrt[i]=j;
					emptyHrz[j]=false;
					mainDiag[i+j]=false;
					secDiag[i-j+n-1]=false;
					layout(i+1);
					
					locInVrt[i]=-1;
					emptyHrz[j]=true;
					mainDiag[i+j]=true;
					secDiag[i-j+n-1]=true;
				}
			}
			else
			{
				num++;
				printLoc();
				//есть решение
			}
	};
	
	
	public void printLoc() //вывод расположений ферзей	
	{
		for (int i=0; i<n; i++)
			System.out.print("["+(i+1)+", "+(locInVrt[i]+1)+"] ");
		System.out.println();
	}

	public void total() //вывод итогов
	{
		if (num!=0)
			System.out.println("Всего расстановок: "+num);
		else
			System.out.println("Соответствующих условию расстановок не найдено!");
	}
	
}
