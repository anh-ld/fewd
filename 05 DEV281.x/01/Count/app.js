var num = 0;
function updateNum(){
  ReactDOM.render(
    <div>{num++}</div>,
    document.getElementById("root")
  )
}
setInterval(updateNum,500)
