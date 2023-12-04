
let mylist = []
//listitem = ""
let txtinput = document.getElementById("txtinput")
ulitem = document.getElementById("ulitem")
save_btn = document.getElementById("save_ext")
delete_btn = document.getElementById("btn_delete")
btn_save_tab = document.getElementById("btn_save_tab")

const listFromLocalStorage = JSON.parse(localStorage.getItem("mylist"))
function saveinput() {
    window.alert("button click")
}

delete_btn.addEventListener("click", function () {
    localStorage.clear()
    mylist = []
    render(mylist)
    //console.log("Am click")
})

save_btn.addEventListener("click", function () {
    mylist.push(txtinput.value)
    txtinput.value = ""
    localStorage.setItem("mylist", JSON.stringify(mylist))
    //console.log(mylist)
    render(mylist)
})

btn_save_tab.addEventListener("click", function () {
  
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        mylist.push(tabs[0].url)
        localStorage.setItem("mylist", JSON.stringify(mylist))
        render(mylist)
    })
   
})
if (listFromLocalStorage) {
    mylist = listFromLocalStorage

}
function render(mylist) {

    listitem = ""
    for (let i = 0; i < mylist.length; i++) {
        listitem += "<a href=http://" + mylist[i] + " target='blank'><li>" + mylist[i] + "</li> </a>"
        
    }
    ulitem.innerHTML = listitem
    
}