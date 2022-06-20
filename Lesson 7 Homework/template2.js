let timeShow = () => {

    let date = new Date();
    let day = String(date.getDate());
    let month = date.getMonth();
    let year = String(date.getFullYear());
    let hour = String(date.getHours());
    let minute = String(date.getMinutes());
    let second = String(date.getSeconds());
    
    switch (month) {
        case 0:
            month="Ocak";
            break;
        case 1:
            month="Şubat";
            break;
        case 2:
            month="Mart";
            break;
        case 3:
            month="Nisan";
            break;
        case 4:
            month="Mayıs";
            break;
        case 5:
            month="Haziran";
            break;
        case 6:
            month="Temmuz";
            break;
        case 7:
            month="Ağustos";
            break;
        case 8:
            month="Eylül";
            break;
        case 9:
            month="Ekim";
            break;
        case 10:
            month="Kasım";
            break;
        case 11:
            month="Aralık";
            break;
    }
    let allDate = `${day} ${month} ${year} ${hour}:${minute}:${second}`;

    document.getElementById("time_id").style.visibility = "visible";
    document.getElementById("time_id").innerHTML = allDate;
    document.getElementById("time_id").style.backgroundColor = "yellow";
    document.getElementById("time_id").style.color = "black";
    

}
let timeHide = () => {

   // let date = new Date();
    document.getElementById("time_id").style.visibility = "hidden";


}