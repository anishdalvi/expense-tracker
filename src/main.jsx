import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import $ from 'jquery'
import './index.css'


//import './components/dashboard/dasboard.js'
//import './components/dashboard/dashboard.css/'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)


$(".sidebar-dropdown > a").click(function() {
  $(".sidebar-submenu").slideUp(200);
  if ($(this).parent().hasClass("active")) {
    $(".sidebar-dropdown").removeClass("active");
    $(this).parent().removeClass("active");
  } else {
    $(".sidebar-dropdown").removeClass("active");
    $(this).next(".sidebar-submenu").slideDown(200);
    $(this).parent().addClass("active");
  }
});

$("#close-sidebar").click(function() {
  $(".page-wrapper").removeClass("toggled");
});

$("#show-sidebar").click(function() {
  $(".page-wrapper").addClass("toggled");
});