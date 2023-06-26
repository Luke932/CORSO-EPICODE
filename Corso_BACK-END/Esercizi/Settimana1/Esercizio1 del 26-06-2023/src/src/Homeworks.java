import java.util.Arrays;
import java.util.Scanner;

public class Homeworks {
	public static void main(String[] args) {

		// Esercizio1
		System.out.println("Primo progetto di Java dopo averlo creato da 0");

		// Esercizio2
		int somma = sum(7, 8);
		System.out.println(somma);

		String risultato = concatena("Test", 859);
		System.out.println(risultato);

		String[] arrayInput = { "Marco", "Giuseppe", "Giulio", "Vincenzo", "Manuel" };
		String stringaInput = "Luca";
		String[] result = inserisciInArray(arrayInput, stringaInput);
		System.out.println(Arrays.toString(result));

		// Esercizio3
		Scanner input = new Scanner(System.in);
		System.out.println("Inserisci la prima stringa");
		String str1 = input.nextLine();

		System.out.println("Inserisci la seconda stringa");
		String str2 = input.nextLine();

		System.out.println("Inserisci la terza stringa");
		String str3 = input.nextLine();

		String concatenazione = str1 + str2 + str3;
		String concatenazioneInversa = str3 + str2 + str1;

		System.out.println(concatenazione);
		System.out.println(concatenazioneInversa);

		// Esercizio4
		Scanner number = new Scanner(System.in);

		System.out.println("Calcolo del perimetro di un rettangolo");
		System.out.println("Inserisci la lunghezza del primo lato");
		double lato1 = number.nextDouble();

		System.out.println("Inserisci la lunghezza del secondo lato");
		double lato2 = number.nextDouble();

		double perimetroRettangolo = perimetroRettangolo(lato1, lato2);
		System.out.println("Il perimetro del rettangolo è: " + perimetroRettangolo);

		System.out.println();
		// ===============================================================================

		Scanner num = new Scanner(System.in);
		System.out.println("Verifica se un numero è pari o dispari");
		System.out.println("Inserisci un numero intero");
		int numb = num.nextInt();

		int risultatoPariDispari = pariDispari(numb);
		System.out.println("Il risultato della verifica è: " + risultatoPariDispari);

		System.out.println();
		// ================================================================================

		Scanner decim = new Scanner(System.in);
		System.out.println("Calcolo dell'area di un triangolo");
		System.out.println("Inserisci la lunghezza del primo lato");
		double latoA = decim.nextDouble();

		System.out.println("Inserisci la lunghezza del secondo lato");
		double latoB = decim.nextDouble();

		System.out.println("Inserisci la lunghezza del terzo lato");
		double latoC = decim.nextDouble();

		double areaTriangolo = perimetroTriangolo(latoA, latoB, latoC);
		System.out.println("L'area del triangolo è: " + areaTriangolo);
	}

	public static int sum(int num1, int num2) {
		return num1 + num2;
	}

	public static String concatena(String str, int num) {
		return str + num;
	}

	public static String[] inserisciInArray(String[] array, String str) {
		String[] newArray = new String[6];

		System.arraycopy(array, 0, newArray, 0, 3);
		newArray[3] = str;
		newArray[4] = array[3];
		newArray[5] = array[4];

		return newArray;
	}

	public static double perimetroRettangolo(double lato1, double lato2) {
		return 2 * (lato1 + lato2);
	}

	public static int pariDispari(int number) {
		return number % 2 == 0 ? 0 : 1;
	}

	public static double perimetroTriangolo(double latoA, double latoB, double latoC) {
		if (latoA <= 0 || latoB <= 0 || latoC <= 0 || (latoA + latoB <= latoC) || (latoA + latoC <= latoB)
				|| (latoB + latoC <= latoA)) {
			System.out.println("I lati inseriti non formano un triangolo valido.");
			return 0.0; // o un altro valore predefinito o un messaggio di errore
		}

		double perimetro = (latoA + latoB + latoC) / 2;
		double area = Math.sqrt(perimetro * (perimetro - latoA) * (perimetro - latoB) * (perimetro - latoC));
		return area;
	}
}
