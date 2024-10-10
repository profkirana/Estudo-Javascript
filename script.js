document.write("<h2>One Piece is REAL!</h2>");
document.write("<br>");

document.write("<p>Soma +</p>");
document.write(10 + 10);
document.write("<br>");

document.write("<p>Subtração -</p>");
document.write(10 - 10);
document.write("<br>");

document.write("<p>Multiplicação *</p>");
document.write(10 * 10);
document.write("<br>");

document.write("<p>Divisão /</p>");
document.write(10 / 10);
document.write("<br>");

document.write("Equação do 1º Grau");
document.write("<br>");
document.write("6x + 4x + 12 - 3x = 12 + 10 - 8 + 5x");
document.write("<br>x = ");
document.write(6 + 4 - 3 - 5);
document.write("<br>sem x = ");
document.write(-12 + 12 + 10 - 8 );
document.write("<br> x=");
document.write((6 + 4 - 3 - 5) / (-12 + 12 + 10 - 8));

// Variável
// O que é? 
numero1 = 10;
numero2 = 20;

document.write("<p>Soma +</p>");
document.write(numero1 + numero2);
document.write("<br>");

document.write("<p>Subtração -</p>");
document.write(numero1 - numero2);
document.write("<br>");

document.write("<p>Multiplicação *</p>");
document.write(numero1 * numero2);
document.write("<br>");

document.write("<p>Divisão /</p>");
document.write(numero1 / numero2);
document.write("<br>");

a = 6 + 4 - 3 - 5;
b = -12 + 12 + 10 - 8;
x = a / b;

document.write("Equação: " + x);
document.write("<br>");
// Variáveis podem ter tipos de dados
// Valor que ela armazena, sempre tem um tipo

// numerico = Inteiro (int) e Decimal (float)
numInteiro = 10;
document.write( typeof(numInteiro) );
document.write("<br>");
numFloat = 10.5; 
document.write( typeof(numFloat) );
document.write("<br>");

// texto = String (str)
texto = "Luffy"
document.write(typeof (texto));
document.write("<br>");

// verdadeiro (true) ou falso (false) = boolean (bool) (booleano)
chinesBilingui = true;
document.write(typeof chinesBilingui);
document.write("<br>");


// Solicitar dados aos usuários
n1 = prompt("Digite um número: ");
n2 = prompt("Digite outro número: ");

document.write("Antes de converter");
document.write("<br>");
document.write(n1);
document.write("<br>");
document.write(typeof (n1));
document.write("<br>");
document.write(n2);
document.write("<br>");
document.write(typeof n2);
document.write("<br>");

// Converter o texto para numero
n1 = parseInt(n1);
n2 = parseInt(n2);

document.write("Depois de converter");
document.write("<br>");
document.write(n1);
document.write("<br>");
document.write(typeof n1);
document.write("<br>");
document.write(n2);
document.write("<br>");
document.write(typeof n2);
document.write("<br>");

document.write("<p>Soma +</p>");
document.write(n1 + n2);
document.write("<br>");

document.write("<p>Subtração -</p>");
document.write(n1 - n2);
document.write("<br>");

document.write("<p>Multiplicação *</p>");
document.write(n1 * n2);
document.write("<br>");

document.write("<p>Divisão /</p>");
document.write(n1 / n2);
document.write("<br>");