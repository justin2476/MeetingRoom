import React from 'react'
import formatDate from '../functions/formatDate'
function capital_letter(str) 
{
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}
function PrintDetails(props){
console.log(props.arrayNew.userName)
   
return(

        <section>
    <main style={{padding:"125px 125px"}}>
        <article>
        User : {capital_letter(props.arrayNew.userName)}
        </article>
        <article>
        StartTime : {formatDate(props.arrayNew.startTime)}
        </article>
        <article>
        EndTime : {formatDate(props.arrayNew.endTime)}
        </article>
        <article>
        Purpose : {props.arrayNew.purpose}
        </article>
    </main>
   
</section>
    )
}
export default PrintDetails