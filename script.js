const plusbutton=document.getElementById("plb");
plusbutton.addEventListener("click", function(){ 
    event.preventDefault();
    const frm=document.getElementById("sfrm");
    frm.style.display= "block";

})
document.getElementById("sfrm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page
    const form = event.target;
    const book = form.elements["Book_name"].value;
    const author = form.elements["Author_name"].value;
    const pages = form.elements["Page_num"].value;
    const crd = document.createElement('div');
    const bname = document.createElement('h2');
    bname.innerHTML = book;
    const aname = document.createElement('h3');
    aname.innerHTML = author;
    const pg = document.createElement('p');
    pg.classList.add('pages');
    pg.innerHTML = pages;
    const rd=document.createElement('button');
    rd.classList.add('read');
    rd.setAttribute("id","rdn");
    rd.addEventListener("click", function () {
        if(rd.innerHTML=="Read"){
            rd.innerHTML="Not Read";
            rd.style.backgroundColor="#FF8989";
        }
        else{
            rd.innerHTML="Read";
            rd.style.backgroundColor="lightgreen";
        }
    });
    var ele = document.getElementsByName('ticket_type');
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked){
            if(ele[i].value=='Yes'){
                rd.innerHTML="Read";
                rd.style.backgroundColor="lightgreen";
            }
            else{
                rd.innerHTML="Not Read";
                rd.style.backgroundColor="#FF8989";
            }
        }
            
    }
    const library = document.getElementById('library');
    const rm=document.createElement('button');
    rm.classList.add('remove');
    rm.innerHTML="Remove";
    rm.addEventListener("click",function(){
        library.removeChild(rm.parentElement);
    });
    crd.appendChild(bname);
    crd.appendChild(aname);
    crd.appendChild(pg);
    crd.appendChild(rd);
    crd.appendChild(rm);
    crd.classList.add('card');
    library.appendChild(crd);
    form.reset();
    form.style.display = 'none'; 
});