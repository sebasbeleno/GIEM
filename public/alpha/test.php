<?php 
    if($_SERVER['REQUEST_METHOD'] == 'POST'){
        $verde1 = $_POST['verde1'];
        $rojo1 = $_POST['rojo1'];
        $amarillo1 = $_POST['amarillo1'];

        

        echo "Verde: ".$verde1;
        echo "<br>";
        echo "Rojo: ".$rojo1;
        echo "<br>";
        echo "Amariilo1: ".$amarillo1;
        echo "<br>";
        
        if ($verde1 > $rojo1 && $verde1 > $amarillo1 ) {
            echo "Te gusta el verde";
        }else if ($rojo1 > $verde1 && $rojo1 > $amarillo1) {
            echo "Te gusta el rojo";
        }elseif ($amarillo1 > $verde1 && $amarillo1 > $rojo1){
            echo "Te gusta el amarillo";
        }
    }
?>