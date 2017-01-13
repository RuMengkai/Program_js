<?php
// ini_set("display_errors", "off");
header("Content-Type:text/html;charset=utf-8");
function removeData($mysql_server_name,$mysql_username,$mysql_password,$mysql_database,$sql){
    $flag=0;
    $conn=new mysqli($mysql_server_name,$mysql_username,$mysql_password,$mysql_database);
    mysqli_query($conn,"set names 'utf8'");
    mysqli_query($conn,"set character set 'utf8'");
    if($conn->query($sql)==true){
        $flag=1;
    }
    mysqli_close($conn);
    echo $flag;
}
function update($mysql_server_name,$mysql_username,$mysql_password,$mysql_database,$sql){
    $flag=0;
    $conn=new mysqli($mysql_server_name,$mysql_username,$mysql_password,$mysql_database);
    mysqli_query($conn,"set names 'utf8'");
    mysqli_query($conn,"set character set 'utf8'");
    if($conn->query($sql)==true){
        $flag=1;
    }
    mysqli_close($conn);
    echo $flag;
}
function insert($mysql_server_name,$mysql_username,$mysql_password,$mysql_database,$sql){
    $flag=0;
    $conn=new mysqli($mysql_server_name,$mysql_username,$mysql_password,$mysql_database);
    mysqli_query($conn,"set names 'utf8'");
    mysqli_query($conn,"set character set 'utf8'");
    if($conn->query($sql)==true){
        $flag=1;
    }
    mysqli_close($conn);
    echo '{"flag":"'.$flag.'"}';
}

function query($mysql_server_name,$mysql_username,$mysql_password,$mysql_database,$sql){
    $conn=new mysqli($mysql_server_name,$mysql_username,$mysql_password,$mysql_database);
    mysqli_query($conn,"set names 'utf8'");
    mysqli_query($conn,"set character set 'utf8'");
    $result=$conn->query($sql);//返回的是记录集
    $rs="";
    while($row=mysqli_fetch_assoc($result)){
        $rs.="<tr>";
        $rs.="<td>".$row['p_name']."</td>";
        $rs.="<td>".$row['p_subhead']."</td>";
        $rs.="<td>".$row['p_price']."</td>";
        $rs.="<td>".$row['p_discount']."</td>";
        $rs.="<td>".$row['p_no']."</td>";
        $rs.="<td>".$row['p_brand']."</td>";
        $rs.="<td>".$row['p_category']."</td>";
        $rs.="<td>".$row['p_saled']."</td>";
        $rs.="<td>".$row['p_display']."</td>";
        $rs.="<td>".$row['p_sort']."</td>";
        $rs.="<td>".$row['p_date']."</td>";
        $rs.="</tr>";
    }
    mysqli_close($conn);//关闭数据库连接
    echo $rs;
}
function doPost(){
    if($_POST["cmd"]!=NULL){
        $mysql_server_name='localhost';//数据库连接地址
        $mysql_username='root';//数据库用户名
        $mysql_password='';//数据库密码
        $mysql_database='products';//数据库名称
        if($_POST["cmd"]=="1"){
            $sql="select * from products where true;";
            query($mysql_server_name,$mysql_username,$mysql_password,$mysql_database,$sql);
        }
        if($_POST["cmd"]=="2"){
            $f0="p_name,p_subhead,p_price,p_discount,p_no,p_brand,p_brand_ID,p_dec,";
            $f1="p_category,p_category_ID,p_category_path,p_saled,p_display,p_sort,";
            $f2="p_date,p_pictures";
            $v0="'".$_POST["p_name"]."',";
            $v1="'".$_POST["p_subhead"]."',";
            $v2="'".$_POST["p_price"]."',";
            $v3="'".$_POST["p_discount"]."',";
            $v4="'".$_POST["p_no"]."',";
            $v5="'".$_POST["p_brand"]."',";
            $v6="'0',";
            $v7="'ABC',";
            $v8="'".$_POST["p_category"]."',";
            $v9="'0',";
            $v10="'0',";
            $v11="'".$_POST["p_saled"]."',";
            $v12="'".$_POST["p_display"]."',";
            $v13="'".$_POST["p_sort"]."',";
            $v14="'".$_POST["p_date"]."',";
            $v15="''";
            $sql="insert into products (".$f0.$f1.$f2.") values (".$v0.$v1.$v2.$v3.$v4.$v5.$v6.$v7.$v8.$v9.$v10.$v11.$v12.$v13.$v14.$v15.")";
            //echo $sql;
            insert($mysql_server_name,$mysql_username,$mysql_password,$mysql_database,$sql);
        }
        if($_POST["cmd"]=="3"){
            $sql="update products set ";
            foreach ($_REQUEST as $key => $value){//遍历request对象下的所有post|get方式请求的参数
            //$key:就是网页发送到服务器上的key名称，$value:就是网页发送到到服务器上的key所对应的值
                if(array_key_exists($key,$_POST) && $key!="cmd" && $key!="identify"){
                    //array_key_exists($key,$_POST)这是php的内置方法，检查key是否存在于$_POST对象中
                    $sql.=$key."='".$value."',";
                }
            }
            $sql=substr($sql,0,strripos($sql,","));//
            $sql.=" where id=".$_POST["identify"].";";
            //echo $sql;
            update($mysql_server_name,$mysql_username,$mysql_password,$mysql_database,$sql);
        }
        if($_POST["cmd"]=="4"){
            $sql="delete from products where id=".$_POST["identify"].";";
            removeData($mysql_server_name,$mysql_username,$mysql_password,$mysql_database,$sql);
        }
    }
}
doPost();
?>