<?  
$servername = "localhost";
$database = "db_paw";
$username = "root";
$password = "";

$conn = mysqli_connect($servername,$username,$password,$database);

if (!$conn) {
    die("Koneksi Gagal :" .mysqli_connect_eror());
} else {
    echo "Koneksi Berhasil";
}