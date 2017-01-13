<?php
function query($mysql_server_name,$mysql_username,$mysql_password,$mysql_database,$sql){
    $conn=new mysqli($mysql_server_name,$mysql_username,$mysql_password,$mysql_database);
    mysqli_query($conn,"set names 'utf8'");
    mysqli_query($conn,"set character set 'utf8'");

    //$sql="select * from products where id=".$_POST["identify"].";";
    $result=$conn->query($sql);//返回的是记录集
    $data="{";
    while($row=mysqli_fetch_assoc($result)){
        $data.="\"p_name\":\"".$row["p_name"]."\",";
        $data.="\"p_subhead\":\"".$row["p_subhead"]."\",";
        $data.="\"p_price\":\"".$row["p_price"]."\",";
        $data.="\"p_discount\":\"".$row["p_discount"]."\",";
        $data.="\"p_no\":\"".$row["p_no"]."\",";
        $data.="\"p_brand\":\"".$row["p_brand"]."\",";
        $data.="\"p_brand_ID\":\"".$row["p_brand_ID"]."\",";
        $data.="\"p_dec\":\"".$row["p_dec"]."\",";
        $data.="\"p_category\":\"".$row["p_category"]."\",";
        $data.="\"p_category_ID\":\"".$row["p_category_ID"]."\",";
        $data.="\"p_category_path\":\"".$row["p_category_path"]."\",";
        $data.="\"p_saled\":\"".$row["p_saled"]."\",";
        $data.="\"p_display\":\"".$row["p_display"]."\",";
        $data.="\"p_sort\":\"".$row["p_sort"]."\",";
        $data.="\"p_date\":\"".$row["p_date"]."\",";
        $data.="\"p_pictures\":\"".$row["p_pictures"]."\"";
    }
    $data.="}";
    mysqli_close($conn);//关闭数据库连接
    echo $data;
}
$mysql_server_name='localhost';//数据库连接地址
$mysql_username='root';//数据库用户名
$mysql_password='';//数据库密码
$mysql_database='products';//数据库名称
$sql="select * from products where id=".$_POST["identify"].";";
query($mysql_server_name,$mysql_username,$mysql_password,$mysql_database,$sql);
?> 