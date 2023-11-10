class siswa {
    String name = "Ade";
    int grade = 100;
    siswa(int a){
        grade = a;
    }
}
class hasil extends siswa {
    hasil(int a) {
        super(a);
        System.out.println(90);
    }
}
class responsi {
    public static void main(String[] args) {
        siswa a = new hasil(100);   
    }
}
