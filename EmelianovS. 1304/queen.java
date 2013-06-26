
import java.util.Scanner;

public class queen 
{
	private int n; //����������� ����� (NxN)
	private int num; //����� �����������
	private boolean emptyHrz[]=new boolean[31]; //�������������� ������ - �����
	private int locInVrt[]=new int[31]; //������������ ����� �� ���������
	private boolean mainDiag[]=new boolean[62]; //������� ��������� - �����
	private boolean secDiag[]=new boolean[62]; //�������� ��������� - �����
	
	
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
	
	public void layout(int i) //����������� ��������� �� �����
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
				//���� �������
			}
	};
	
	
	public void printLoc() //����� ������������ ������	
	{
		for (int i=0; i<n; i++)
			System.out.print("["+(i+1)+", "+(locInVrt[i]+1)+"] ");
		System.out.println();
	}

	public void total() //����� ������
	{
		if (num!=0)
			System.out.println("����� �����������: "+num);
		else
			System.out.println("��������������� ������� ����������� �� �������!");
	}
	
}
